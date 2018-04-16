import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { config } from '../app.config';

@Injectable()
export class TicketService {

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) { }


  /** 
   * << This method sends get all barcode request >>
   * @returns backend response
   * @author Saroj Rana 
   * @since 16 April 2018, Modified in: @version, By @author
  */

  getBarcodes(){
    return this.http.get(config.serverApiUrl + 'tickets/getAllBarcode', { headers: this.getHeaders(), observe: 'response'});
  }

  /**
   * << This method sends get single barcode request >>
   * @param id
   * @returns backend response
   * @author Saroj Rana 
   * @since 16 April 2018, Modified in: @version, By @author
  */

  getSingleBarcode(id){
    return this.http.get(config.serverApiUrl + 'tickets/getBarcode/' + id, { headers: this.getHeaders(), observe: 'response'});
  }

  /**
   * << This method sends check barcode request >>
   * @param uniqueId
   * @returns backend response
   * @author Saroj Rana 
   * @since 16 April 2018, Modified in: @version, By @author
  */

 getCheckBarcode(uniqueId){
   var userId = this.cookie.get('userId');
  return this.http.get(config.serverApiUrl + 'tickets/getBarcode/' + uniqueId + '/' + userId, { observe: 'response'});
 }

  /** 
   * << This method sends generate barcode request >>
   * @param value
   * @returns backend response
   * @author Saroj Rana 
   * @since 16 April 2018, Modified in: @version, By @author
  */

 postBarcode(value){
  return this.http.post(config.serverApiUrl + 'tickets/genBarcode', value, { headers: this.getHeaders(), responseType: 'text'});
 }

 /** 
   * << This method sends assign tickets request >>
   * @param value
   * @returns backend response
   * @author Saroj Rana 
   * @since 16 April 2018, Modified in: @version, By @author
  */

 putStation(value){
  return this.http.put(config.serverApiUrl + 'tickets/assignTickets', value, { headers: this.getHeaders(), responseType: 'text'});
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
