import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ToastrModule} from 'ngx-toastr';

import {SidebarModule} from './sidebar/sidebar.module';
import {FooterModule} from './shared/footer/footer.module';
import {NavbarModule} from './shared/navbar/navbar.module';
import {FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import {AppComponent} from './app.component';
import {AppRoutes} from './app.routing';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {InvitationFillingComponent} from './components/invitation-filling/invitation-filling.component';
import {InvitationCreatorComponent} from './pages/invitation-creator/invitation-creator.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {DocumentManagementComponent} from './pages/document-management/document-management.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import {NotifierModule, NotifierOptions} from 'angular-notifier';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GlobalInterceptor} from './global.interceptor';
import { ChangePassComponent } from './pages/change-pass/change-pass.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ForgotPassComponent } from './pages/forgot-pass/forgot-pass.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ConfirmEmailComponent } from './pages/confirm-email/confirm-email.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { TemplateManagementComponent } from './pages/template-management/template-management.component';
import {MatTableModule} from '@angular/material/table';
import { TemplateCreatorComponent } from './pages/template-creator/template-creator.component';
import { SubDocumentComponent } from './pages/sub-document/sub-document.component';

const customNotifierOptions: NotifierOptions = {
    position: {
        horizontal: {
            position: 'left',
            distance: 12
        },
        vertical: {
            position: 'bottom',
            distance: 12,
            gap: 10
        }
    },
    theme: 'material',
    behaviour: {
        autoHide: 5000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
    },
    animations: {
        enabled: true,
        show: {
            preset: 'slide',
            speed: 300,
            easing: 'ease'
        },
        hide: {
            preset: 'fade',
            speed: 300,
            easing: 'ease',
            offset: 50
        },
        shift: {
            speed: 300,
            easing: 'ease'
        },
        overlap: 150
    }
};


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    InvitationFillingComponent,
    InvitationCreatorComponent,
    DocumentManagementComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ChangePassComponent,
    ForgotPassComponent,
    ConfirmEmailComponent,
    ResetPasswordComponent,
    TemplateManagementComponent,
    TemplateCreatorComponent,
    SubDocumentComponent
  ],
    imports: [
        RouterModule.forRoot(AppRoutes, {
            useHash: true
        }),
        SidebarModule,
        NavbarModule,
        ToastrModule.forRoot(),
        FooterModule,
        FixedPluginModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        NotifierModule.withConfig(customNotifierOptions),
        BrowserAnimationsModule,
        MatSnackBarModule,
        MatTableModule,
        MatProgressSpinnerModule
    ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: GlobalInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
