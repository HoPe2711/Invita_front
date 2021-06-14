import {Routes} from '@angular/router';

import {InvitationCreatorComponent} from '../../pages/invitation-creator/invitation-creator.component';
import {DocumentManagementComponent} from '../../pages/document-management/document-management.component';
import {ChangePassComponent} from '../../pages/change-pass/change-pass.component';
import {TemplateManagementComponent} from '../../pages/template-management/template-management.component';
import {TemplateCreatorComponent} from '../../pages/template-creator/template-creator.component';
import {AdminSectionGuard} from './admin-section.guard';
import {SubDocumentComponent} from '../../pages/sub-document/sub-document.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'document-management', component: DocumentManagementComponent },
    { path: 'document-management/:id', component: InvitationCreatorComponent},
    { path: 'sub-document', component: SubDocumentComponent},
    { path: 'change-pass', component: ChangePassComponent},
    { path: 'template-management', component: TemplateManagementComponent, canActivate: [AdminSectionGuard]},
    { path: 'template-management/:id', component: TemplateCreatorComponent, canActivate: [AdminSectionGuard]}
];
