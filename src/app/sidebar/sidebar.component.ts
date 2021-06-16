import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    restrictedRole: string[];
}

export const ROUTES: RouteInfo[] = [
    { path: '/document-management', title: 'Documents', icon: 'nc-paper', class: '', restrictedRole: []},
    { path: '/sub-document', title: 'Feedback', icon: 'nc-paper', class: '', restrictedRole: []},
    { path: '/change-pass', title: 'Change Password', icon: 'nc-lock-circle-open', class: '', restrictedRole: []},
    { path: '/user-management', title: 'Person', icon: 'nc-single-02', class: '', restrictedRole: ['ROLE_ADMIN']},
    { path: '/template-management', title: 'Template', icon: 'nc-air-baloon', class: '', restrictedRole: ['ROLE_ADMIN']}
];

@Component({
    moduleId: module.id,
    // tslint:disable-next-line:component-selector
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    onLogout = () => {
        this.authService.logout(localStorage.getItem('refreshToken')).subscribe(data => {
                console.log(data);
                localStorage.removeItem('roles');
                localStorage.removeItem('token');
                this._snack.open('Successfully logout !', 'Confirm', {
                duration: 2000
            });
                this.router.navigate(['login']).then(r => console.log(r));
            }
        );
    }

    getRole = () => {
        return localStorage.getItem('roles');
    }

    ngOnInit() {
        console.log(localStorage.getItem('roles'));

        this.menuItems = ROUTES.filter(menuItem => {
            if (menuItem.restrictedRole.length === 0) {
                return true;
            }
            return menuItem.restrictedRole.includes(this.getRole());
        });
    }

    constructor(
        private router: Router,
        private  authService: AuthService,
        private _snack: MatSnackBar
    ) {
    }
}
