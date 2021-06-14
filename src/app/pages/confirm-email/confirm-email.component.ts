import { Component, OnInit } from '@angular/core';
import '../../../assets/img/confirm-back.jpg';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {

  isLoading: Boolean = false;

  isSuccess: Boolean = false;

  onRefresh = () => {
    location.reload();
  }

  constructor(
      private route: ActivatedRoute,
      private authService: AuthService
  ) {
    this.route.queryParams.subscribe(params => {
      if (params['token']) {
        this.isLoading = true;
        this.authService.confirmEmail(params['token']).subscribe(data => {
          this.isSuccess = true;
          this.isLoading = false
        }, err => {
          this.isSuccess = false;
          this.isLoading = false;
        });
      }
    });
  }

  ngOnInit(): void {
  }

}
