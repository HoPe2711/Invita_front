import {Routes} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {AppGuardGuard} from './app-guard.guard';
import {ForgotPassComponent} from './pages/forgot-pass/forgot-pass.component';
import {ConfirmEmailComponent} from './pages/confirm-email/confirm-email.component';
import {ResetPasswordComponent} from './pages/reset-password/reset-password.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ],
        canActivate: [AppGuardGuard]
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
      path: 'register' ,
      component: RegisterPageComponent
    },
    {
        path: 'forgot-pass' ,
        component: ForgotPassComponent
    },
    {
        path: 'confirm-email' ,
        component: ConfirmEmailComponent
    },
    {
        path: 'reset-pass',
        component: ResetPasswordComponent
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
]
