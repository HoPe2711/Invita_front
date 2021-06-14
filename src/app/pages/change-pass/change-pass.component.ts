import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changePassValidator} from './changePass.validator';
import {AuthService} from '../../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  isLoading = false;

  changePasswordForm = new FormGroup({
    oldPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    verifyNewPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  }, {
    validators: changePassValidator
  });

  get oldPassword() { return this.changePasswordForm.get('oldPassword'); }

  get newPassword() { return this.changePasswordForm.get('newPassword'); }

  get verifyNewPassword() { return this.changePasswordForm.get('verifyNewPassword'); }

  onSubmit = () => {
    const {oldPassword, newPassword, verifyNewPassword} = this.changePasswordForm.value;
    this.isLoading = true;
    this.authService.changePassword(oldPassword, newPassword, verifyNewPassword).subscribe(data => {
      this._snack.open('Change password successfully', 'Confirm');
      this.changePasswordForm.reset();
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      console.log(error);
    });
  }

  constructor(
      private authService: AuthService,
      private _snack: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

}
