import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  listUser = this.userService.getAllUser();

  ngOnDeleteUser = (id): void => {
    this.userService.deleteUser(id).subscribe(response => {
      this.listUser = this.userService.getAllUser();
    }, err => {
        console.log('Error');
        this._snack.open(err.error.status.message, 'Close', {
        duration: 2000
      });
    });
  }
  constructor(
      private userService: UserService,
      private _snack: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

}
