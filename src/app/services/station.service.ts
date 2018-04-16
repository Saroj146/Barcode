import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { config } from '../app.config';

@Injectable()
export class StationService {
  
  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) { }


  /** 
   * << This method sends get all stations request >>
   * @returns backend response
   * @author Saroj Rana 
   * @since 16 April 2018, Modified in: @version, By @author
  */

  getStations(){
    return this.http.get(config.serverApiUrl + 'stations', { headers: this.getHeaders(), observe: 'response'});
  }

  /**
  * << This method sends get single station request >>
  * @param id
   * @returns backend response
   * @author Saroj Rana 
   * @since 16 April 2018, Modified in: @version, By @author
  */

  getSingleStation(id){
    return this.http.get(config.serverApiUrl + 'stations/' + id, { headers: this.getHeaders(), observe: 'response'});
  }

  /** 
   * << This method sends register station request >>
   * @param value
   * @returns backend response
   * @author Saroj Rana 
   * @since 16 April 2018, Modified in: @version, By @author
  */

 postStation(value){
  return this.http.post(config.serverApiUrl + 'stations', value, { headers: this.getHeaders(), responseType: 'text'});
 }

 /** 
   * << This method sends edit station request >>
   * @param value
   * @returns backend response
   * @author Saroj Rana 
   * @since 16 April 2018, Modified in: @version, By @author
  */

 putStation(value){
  return this.http.put(config.serverApiUrl + 'stations', value, { headers: this.getHeaders(), responseType: 'text'});
 }

 /** 
   * << This method sends station delete request >>
   * @param id
   * @returns backend response
   * @author Saroj Rana 
   * @since 16 April 2018, Modified in: @version, By @author
  */

 deleteStation(id){
  return this.http.delete(config.serverApiUrl + 'stations/' + id, { headers: this.getHeaders(), responseType: 'text'});
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
