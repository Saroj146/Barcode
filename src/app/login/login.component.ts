import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../model/User';

/*
* @Author: Saroj Rana
* @Date:   2018-04-13 12:38:23
* @Last Modified by:   Saroj Rana
* @Last Modified time: 2018-04-13 12:39:26
*/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  constructor(
    private loginService: LoginService,
    private cookie: CookieService
  ) { }

  ngOnInit() {
  }

  onSubmit(value: any){
    // console.log(value);	
    this.loginService.login(value).subscribe(
      data => {
        console.log(data);
        var users = JSON.parse(JSON.stringify(data.body));
        this.user = users.user;
        this.cookie.set('login_status', 'logged_in');
        this.cookie.set('userId', (this.user.id).toString());
        this.cookie.set('userType', this.user.userType);
      },
      (err: HttpErrorResponse) => {
        console.log(err); 
      }
    );
  }

  logout(){
    var userId = this.cookie.get('userId');
    this.loginService.logout(userId).subscribe(
      data => {
        console.log(data);
        this.cookie.delete('login_status');
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof ErrorEvent) {
          console.error('An error occurred: ********', err.error.message);
        } else {
          console.error('backend-------', err.message);
        }
      }
    );
  }

}
