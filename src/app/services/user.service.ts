import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../app.config';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) { }


  /** 
   * << This method sends get all users request >>
   * @returns backend response
   * @author Saroj Rana 
   * @since 16 April 2018, Modified in: @version, By @author
  */

  getUsers(){
    return this.http.get(config.serverApiUrl + 'users', { observe: 'response'});
  }

  /**
  * << This method sends get single user request >>
  * @param id
   * @returns backend response
   * @author Saroj Rana 
   * @since 16 April 2018, Modified in: @version, By @author
  */

  getSingleUser(id){
    return this.http.get(config.serverApiUrl + 'users/' + id, { observe: 'response'});
  }

  /** 
   * << This method sends register user request >>
   * @param value
   * @returns backend response
   * @author Saroj Rana 
   * @since 16 April 2018, Modified in: @version, By @author
  */

 postUsers(value){
  return this.http.post(config.serverApiUrl + 'users', value, { headers: this.getHeaders(), responseType: 'text'});
 }

 /** 
   * << This method sends edit user request >>
   * @param value
   * @returns backend response
   * @author Saroj Rana 
   * @since 16 April 2018, Modified in: @version, By @author
  */

 putUser(value){
  return this.http.put(config.serverApiUrl + 'users', value, { headers: this.getHeaders(), responseType: 'text'});
 }

 /** 
   * << This method sends user delete request >>
   * @param id
   * @returns backend response
   * @author Saroj Rana 
   * @since 16 April 2018, Modified in: @version, By @author
  */

 deleteUser(id){
  return this.http.delete(config.serverApiUrl + 'users/' + id, { headers: this.getHeaders(), responseType: 'text'});
 }

 /** 
   * << This method sends headers >>
   * @returns headers
   * @author Saroj Rana 
   * @since 16 April 2018, Modified in: @version, By @author
  */
 getHeaders(){
  var headers = new HttpHeaders().set('userId', this.cookie.get('userId'));
  return headers;
 }

}
