import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-beautify';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TemplateService} from '../../services/template.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {content} from '../invitation-creator/htmlContent';

const THEME = 'ace/theme/solarized_dark';
const LANG = 'ace/mode/html';

@Component({
    selector: 'app-template-creator',
    templateUrl: './template-creator.component.html',
    styleUrls: ['./template-creator.component.css']
})
export class TemplateCreatorComponent implements AfterViewInit {

    headerText = '';
    recentTemplate: any = {};
    listTemplate = this.templateService.getAllTemplate();
    reviewTemplate: SafeHtml = null;
    content: SafeHtml = null;

    @ViewChild('codeEditor') codeEditorElmRef: ElementRef<HTMLElement>;

    private codeEditor: ace.Ace.Editor;
    private editorBeautify;

    newTemplateForm = new FormGroup({
        templateName: new FormControl('', [
            Validators.required,
        ])
    }, {});

    get templateName() {
        return this.newTemplateForm.get('templateName');
    }

    constructor(
        private route: ActivatedRoute,
        private templateService: TemplateService,
        private _snack: MatSnackBar,
        private router: Router,
        private sanitizer: DomSanitizer
    ) {
    }

    ngChangeTemplate = (): void => {
        this.content = this.sanitizer.bypassSecurityTrustHtml(content(
            {
                // name: 'Nguyễn Hoàng Hiếu',
                // position: 'Cán bộ kinh doanh',
                // gender: GENDER_TYPE.MALE,
                // ctsRepresent: ['Mr NHL', 'Mr DMD'],
                // formOfExchange: 'Trao đổi gián tiếp',
                // place: 'CTS',
                // time: '4:50 AM, thứ ba - ngày 28/04/1970',
                // attentionInfo: [ 'Mang theo CMTND để checkin tại lễ tân tòa nhà', 'Chỗ gửi xe phía sau tòa nhà', 'Giữ bình tĩnh'],
                // supportPerson: 'SĐT: 0962.456.194 (Ms. My)'
            }, this.recentTemplate.templateContent)
        );
    }

    ngOnReview = () => {
        this.reviewTemplate = this.sanitizer.bypassSecurityTrustHtml(this.getCode());
    }

    ngOnSave = () => {
        const {templateName} = this.newTemplateForm.value;

        const {snapshot: {paramMap}} = this.route;
        const templateId = paramMap.get('id');
        if (templateId === 'new') {
            this.templateService.createTemplate(templateName, this.getCode(), this.recentTemplate.id).subscribe(
                data => {
                    console.log(data);
                    this._snack.open('Save template successfully!', 'Confirm');
                    this.router.navigate(['template-management']).then(r => console.log(r));
                },
                error => {
                    console.log(error);
                    this._snack.open('Save template failed', 'Confirm');
                }
            );
        } else {
            this.templateService.updateSingleTemplate(templateId, templateName, this.getCode(), this.recentTemplate.id).subscribe(
                data => {
                    console.log(data);
                    this._snack.open('Update template successfully', 'Confirm');
                    this.router.navigate(['template-management']).then(r => console.log(r));
                },
                error => {
                    console.log(error);
                    this._snack.open('Update template failed', 'Confirm');
                }
            )
        }

    }

    private getEditorOptions = (): Partial<ace.Ace.EditorOptions> & { enableBasicAutocompletion?: boolean; } => {
        const basicEditorOptions: Partial<ace.Ace.EditorOptions> = {
            highlightActiveLine: true,
            minLines: 14,
            maxLines: 20,
        };

        const extraEditorOptions = {
            enableBasicAutocompletion: true
        };
        return {
            ...basicEditorOptions,
            ...extraEditorOptions
        };
    }

    beautifyContent = () => {
        if (this.codeEditor && this.editorBeautify) {
            const session = this.codeEditor.getSession();
            this.editorBeautify.beautify(session);
        }
    }

    private getCode() {
        return this.codeEditor.getValue();
    }

    ngAfterViewInit(): void {
        const {snapshot: {paramMap}} = this.route;
        const documentId = paramMap.get('id');

        // Editor Online
        const element = this.codeEditorElmRef?.nativeElement;
        const editorOptions = this.getEditorOptions();
        this.editorBeautify = ace.require('ace/ext/beautify');
        this.codeEditor = ace.edit(element, editorOptions);
        this.codeEditor.setTheme(THEME);
        this.codeEditor.getSession().setMode(LANG);
        this.codeEditor.setShowFoldWidgets(true);
        this.codeEditor.setValue('')

        if (documentId === 'new') {
            this.headerText = 'Create Template';
        } else {
            this.headerText = 'Edit Template';
            this.templateService.getSingleTemplate(documentId).subscribe(data => {
                const {templateName, templateContent} = data;
                this.newTemplateForm.setValue({templateName})
                this.codeEditor.setValue(templateContent);
            }, error => {
                console.log('Error when fetching: {}', error)
            });
        }
    }

}
