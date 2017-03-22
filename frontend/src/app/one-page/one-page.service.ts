import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments';
import { AuthenticateService } from '../authenticate.service';
import { StateService } from '../state.service';
import { LanguageService } from '../language.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'
import { SellBox } from '../model/sell_box.type';
import { ContactMessage } from '../model/contact_message.type';

@Injectable()
export class OnePageService {
  public serverUrl: string = environment.serverUrl;
  public sellBoxes: SellBox[];

  initToken(){

  }
  constructor(private http: Http, private router: Router, private authenticateService: AuthenticateService, private stateService: StateService, private languageService: LanguageService) {
    this.initToken();
  }

  getSellBoxes():Observable<any> {
    this.initToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('token', this.token);
    return this.http.get(this.serverUrl + '/api/v1/sell/getSellBoxes', {headers: headers})
        .map((response: Response) => {
            let res:any = response.json();
            return res;
            // if (res.success == true) {
            //     this.sellBoxes = res.data;
            //     console.log(this.sellBoxes);
            //     return true;
            // } else {
            //   this.check_token(res);
            //   return false;
            // }
        });
  }

  sendContactMessage(msg: ContactMessage):Observable<boolean>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let data = new FormData();
    return this.http.post(this.serverUrl + '/api/v1/sendContactMessage', msg, {headers: headers})
        .map((response: Response) => {
            let res:any = response.json();

            if (res.success == true) {
                // this.sellBoxes = res.data;
                // console.log(this.sellBoxes);
                return true;
            } else {
              // this.check_token(res);
              return false;
            }
        });
  }

  getMemberBoxAmount():Observable<any> {
    this.initToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + '/api/v1/members/getBoxAmount', {headers: headers})
        .map((response: Response) => {
            let res:any = response.json();
            return res.data;
        });
  }

  getUserBoxAmount(): Observable<any>{
    this.initToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + '/api/v1/profile/getUserAmount', {headers: headers})
        .map((response: Response) => {
            let res:any = response.json();
            return res.data;
        });
  }
  
  getTransactionHistory():Observable<any> {
    this.initToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + '/api/v1/getTransactionHistory', {headers: headers})
        .map((response: Response) => {
            let res:any = response.json();
            return res;
        });
  }

  getPaid(amount:number, password:string):Observable<boolean>{
    this.initToken();
    let headers = new Headers();
    let data = new FormData();
    data.append("amount", amount);
    data.append("password", password);

    return this.http.post(this.serverUrl + '/api/v1/getPaid', data, {headers: headers})
        .map((response: Response) => {
          let res:any = response.json();
          return res.success
        }, error=>{return false;});
  }
}
