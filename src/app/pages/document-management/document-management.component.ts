import {Component, OnInit} from '@angular/core';
import {DocumentService} from '../../services/document.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-document-management',
  templateUrl: './document-management.component.html',
  styleUrls: ['./document-management.component.css']
})
export class DocumentManagementComponent implements OnInit {

  listDocument = this.documentService.getAllDocuments().pipe(tap(
      next => this.isLoading = false,
      error => this.isLoading = false
      )
  )

  isLoading: Boolean = true;

  ngOnDeleteDocument = (id): void => {
    this.isLoading = true;
    this.documentService.deleteDocument(id).subscribe(response => {
      this.isLoading = false;
      this.listDocument = this.documentService.getAllDocuments();
    }, err => {
      this.isLoading = false;
    });
  }

  constructor(
      private documentService: DocumentService
  ) { }

  ngOnInit(): void {
  }

}
