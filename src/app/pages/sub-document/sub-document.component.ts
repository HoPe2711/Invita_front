import { Component, OnInit } from '@angular/core';
import {TemplateService} from '../../services/template.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {content} from '../invitation-creator/htmlContent';
import {DocumentService} from '../../services/document.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sub-document',
  templateUrl: './sub-document.component.html',
  styleUrls: [
      './sub-document.component.css',
  ]
})
export class SubDocumentComponent implements OnInit {

    content: SafeHtml = null;
    isNew = false;
    recentTemplate: any = {};
    document: any = {};
    recentFeedback: any = {};
    listFeedback = this.templateService.getChildTemplate(0);
    listTemplate = this.templateService.getParentTemplate();
    listDocument = this.documentService.getDocumentByTemplate(0);
    listChooseDoc = [];
    check = [];

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
        this.listFeedback = this.templateService.getChildTemplate(this.recentTemplate.id);
        this.listDocument = this.documentService.getDocumentByTemplate(this.recentTemplate.id);
        this.isNew = true;
    }

    ngChangeFeedback = (): void => {
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
            }, this.recentFeedback.templateContent)
        );
    }

    onSubmit = (): void => {
        for (let i = 0; i < this.listChooseDoc.length; i++) {
            this.documentService.createSubDocument(this.recentFeedback.id, this.listChooseDoc[i]).subscribe( (response) =>
                console.log(response));
        }
        this._snack.open('Successfully create your documents !', 'Confirm', {
            duration: 2000
        })
    }

    onCheckboxChange(event, value) {
        if (event.checked) {
            this.listChooseDoc.push(value);
        }
        if (!event.checked) {
            const index = this.listChooseDoc.indexOf(value);
            if (index > -1) {
                this.listChooseDoc.splice(index, 1);
            }
        }
    }

    constructor(
        private sanitizer: DomSanitizer,
        private templateService: TemplateService,
        private documentService: DocumentService,
        private _snack: MatSnackBar,
    ) { }

    ngOnInit(): void {
        this.isNew = false;

    }

}
