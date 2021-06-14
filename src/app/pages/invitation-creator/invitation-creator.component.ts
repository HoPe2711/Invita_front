import {Component, OnInit} from '@angular/core';
import {content, GENDER_TYPE} from './htmlContent';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import * as htmlToImage from 'html-to-image';
import {FormBuilder} from '@angular/forms';
import {TemplateService} from '../../services/template.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DocumentService} from '../../services/document.service';

@Component({
    selector: 'app-invitation-creator',
    templateUrl: './invitation-creator.component.html',
    styleUrls: ['./invitation-creator.component.css'],
})
export class InvitationCreatorComponent implements OnInit {

    content: SafeHtml = null;

    recentTemplate: any = {};

    listTemplate = this.templateService.getAllTemplate();

    documentName: String = '';

    recentDocument: any = {};

    isNew = true;

    isLoading = false;

    informationForm = this.formBuilder.group({
        name: '',
        position: '',
        gender: GENDER_TYPE.MALE,
        ctsRepresent: '',
        formOfExchange: '',
        place: '',
        time: '',
        attentionInfo: '',
        supportPerson: ''
    });

    ngOnSave = (): void => {
        if (this.isNew) {
            const newDocument = {
                documentName: this.documentName,
                templateId: this.recentTemplate.id,
                filledInformation: JSON.stringify(this.informationForm.value)
            }
            this.isLoading = true;
            this.documentService.createDocument(newDocument).subscribe(response => {
                this.isLoading = false;
                console.log(response);
                this.router.navigate(['/document-management']).then(e  => {
                    console.log(e);
                });
            }, error => {
                this.isLoading = false;
                console.log(error);
            });
        } else {
            const newDocument = {
                ...this.recentDocument,
                filledInformation: JSON.stringify(this.informationForm.value),
                documentName: this.documentName
            }
            const {snapshot: {paramMap}} = this.route;
            const documentId = paramMap.get('id');
            this.isLoading = true;
            this.documentService.saveDocument(documentId, newDocument).subscribe(response  => {
                this.isLoading = false;
                console.log(response);
            });
        }
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

    onSubmit(): void {
        const {value} = this.informationForm;
        console.log(this.recentTemplate);
        this.content = this.sanitizer.bypassSecurityTrustHtml(content({
            ...value,
            ctsRepresent: value.ctsRepresent ? value.ctsRepresent.split(',') : undefined,
            attentionInfo: value.attentionInfo ? value.attentionInfo.split(',') : undefined
        }, this.recentTemplate.templateContent));
    }

    exportAsPDF(div_id) {
        const data = document.getElementById(div_id);
        htmlToImage.toPng(data, {pixelRatio: 1, quality: 1}).then(contentDataURL => {
            const link = document.createElement('a');
            link.download = 'name';
            link.target = '_blank';
            link.href = contentDataURL;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    constructor(
        private sanitizer: DomSanitizer,
        private formBuilder: FormBuilder,
        private templateService: TemplateService,
        private documentService: DocumentService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        const {snapshot: {paramMap}} = this.route;
        const documentId = paramMap.get('id');
        this.isLoading = true;
        if (documentId !== 'new') {
            this.isNew = null;
            this.documentService.getSingleDocument(documentId).subscribe((singleDocument: any) => {
                this.isLoading = false;
                const {invitaTemplate, filledInformation} = singleDocument;
                this.recentDocument = singleDocument;
                this.informationForm = this.formBuilder.group(JSON.parse(filledInformation));
                this.recentTemplate = invitaTemplate;
                this.documentName = singleDocument.documentName;
                this.ngChangeTemplate();
                this.onSubmit();
            }, err => {
                this.isLoading = false;
            });
        } else {
            this.isLoading = false;
        }
    }

}
