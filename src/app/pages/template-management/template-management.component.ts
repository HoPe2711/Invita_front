import {Component, OnInit} from '@angular/core';
import {TemplateService} from '../../services/template.service';


@Component({
    selector: 'app-template-management',
    templateUrl: './template-management.component.html',
    styleUrls: [
        './template-management.component.css'
    ]
})
export class TemplateManagementComponent implements OnInit {

    isLoading: Boolean = false;

    listTemplate: any[] = null;

    ngOnDeleteTemplate = (id: string) => {
        this.isLoading = true;
        this.templateService.deleteSingleTemplate(id).subscribe(data => {
            this.isLoading = false;
            this.getListTemplate()
        }, error => {
            this.isLoading = false;
        })
    }

    getListTemplate = () => {
        this.isLoading = true;
        this.templateService.getAllTemplate().subscribe(data => {
            this.listTemplate = data;
            this.isLoading = false;
        }, err => {
            this.isLoading = false;
        })
    }

    constructor(
        private templateService: TemplateService
    ) {
        this.getListTemplate();
    }

    ngOnInit(): void {
    }

}
