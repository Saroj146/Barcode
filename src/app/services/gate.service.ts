import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { config } from '../app.config';

@Injectable()
export class GateService {

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) { }


  /** 
   * << This method sends get all gates request >>
   * @returns backend response
   * @author Saroj Rana 
   * @since 16 April 2018, Modified in: @version, By @author
  */

  getGates(){
    return this.http.get(config.serverApiUrl + 'gates', { headers: this.getHeaders(), observe: 'response'});
  }

  /**
  * << This method sends get single gate request >>
  * @param id
   * @returns backend response
   * @author Saroj Rana 
   * @since 16 April 2018, Modified in: @version, By @author
  */

  getSingleGate(id){
    return this.http.get(config.serverApiUrl + 'gates/' + id, { headers: this.getHeaders(), observe: 'response'});
  }

  /** 
   * << This method sends register gate request >>
   * @param value
   * @returns backend response
   * @author Saroj Rana 
   * @since 16 April 2018, Modified in: @version, By @author
  */

 postGate(value){
  return this.http.post(config.serverApiUrl + 'gates', value, { headers: this.getHeaders(), responseType: 'text'});
 }

 /** 
   * << This method sends edit gate request >>
   * @param value
   * @returns backend response
   * @author Saroj Rana 
   * @since 16 April 2018, Modified in: @version, By @author
  */

 putGate(value){
  return this.http.put(config.serverApiUrl + 'gates', value, { headers: this.getHeaders(), responseType: 'text'});
 }

 /** 
   * << This method sends gate delete request >>
   * @param id
   * @returns backend response
   * @author Saroj Rana 
   * @since 16 April 2018, Modified in: @version, By @author
  */

 deleteGate(id){
  return this.http.delete(config.serverApiUrl + 'gates/' + id, { headers: this.getHeaders(), responseType: 'text'});
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
