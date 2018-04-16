import { Injectable } from '@angular/core';
import { config } from '../app.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginService {

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) { }

  /** 
   * << This method sends login status >>
   * @author Saroj Rana 
   * @since 13 April 2018, Modified in: @version, By @author
  */

  loggedIn(){
    var status = this.cookie.get('login_status');
    if(status == 'logged_in'){
      return true;
    }else {
      return false;
    }
  }

  /** 
   * << This method sends login request >>
   * @param value
   * @returns backend response
   * @author Saroj Rana 
   * @since 16 April 2018, Modified in: @version, By @author
  */

  login(value){
    return this.http.post(config.serverApiUrl + 'logins/login', value, {observe: 'response'});
  }

  /** 
   * << This method sends logout request >>
   * @param userId
   * @returns backend response
   * @author Saroj Rana 
   * @since 16 April 2018, Modified in: @version, By @author
  */

 logout(userId){
  console.log(userId);
  const headers = new HttpHeaders().append('userId', userId.toString());
  return this.http.post(config.serverApiUrl + 'logins/logout', { headers, responseType: 'text'});
}

}
