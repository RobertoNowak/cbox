import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request, RequestMethod, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments';
import { RegisterUser } from './model/user_register.type';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/share';

export const USER_SIGNED_INFO = {
  SIGNED_IN: 1,
  VALIDATING: 2,
  NOT_SIGNED_IN: 0
};
export const USER_TYPE = {
  INDIVIDUAL: "INDIVIDUAL",
  INSTITUTION: "INSTITUTION",
  SCHOOL: "SCHOOL",
  MEMBER: "MEMBER",
  ADMIN: "ADMIN"
};

@Injectable()
export class AuthenticateService {
    public token: string = "";
    public type:number = -1;
    public isAdmin: number = 0;
    public serverUrl: string = environment.serverUrl;
    public isValidating: boolean = false;
    public email:string = "";
    public currentUser: any = null;
    
    constructor(private http: Http, private route: ActivatedRoute, private router: Router) {
        this.validateToken();
    }


    _constructUserPath(): string {
      // return '/assets/api/v1';
      return this.serverUrl;
    }

    canActivate() {
        if (this.isLoggedIn() != USER_SIGNED_INFO.NOT_SIGNED_IN)
            return true;
        else {

            // Redirect user to sign in if signInRedirect is set
            this.router.navigate(['/home']);

            return false;
        }
    }

    validateToken(){
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('token', this.token);
      // if(!this.isLoggedIn())
      //   return;
      this.isValidating = true;
      this.get('/api/v1/profile').subscribe(
        (response: Response) => {
              let res:any = response.json();
              if(res.success){
                this.currentUser = res.data;
                // if(res.data.status == 0) //if user is needed to ActivatedRoute
                // {
                //     this.currentUser = null;
                //     this.router.navigate(['/activateAccount']);
                // }
              }
              this.isValidating = false;
        },
        error => {
          this.isValidating = false;
          let curUrl = this.router.url;
          if(curUrl.slice(0, 8) == '/profile'){
             this.router.navigate(['/home']);
          }
        }
      );
    }

    reset(email: string):Observable<boolean> {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.serverUrl + '/api/v1/sendPasswordToken', JSON.stringify({email: email}), {headers: headers})
          .map((response: any) => {
              if (response.result > 0) {
                  return true;
              } else {
                  return false;
              }
          }, error => {return false;});
    }

    resetPassword(data):Observable<boolean> {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.serverUrl + '/api/v1/resetPassword', JSON.stringify(data), {headers: headers})
          .map((response: any) => {
              if (response.result > 0) {
                  return true;
              } else {
                  return false;
              }
          }, error => {return false;});
    }

    isLoggedIn(): number{
      if(this.isValidating)
        return USER_SIGNED_INFO.VALIDATING;
      if(this.currentUser != null)
        return USER_SIGNED_INFO.SIGNED_IN;
      else
        return USER_SIGNED_INFO.NOT_SIGNED_IN;
    }

    get(path: string): Observable<Response> {
        return this.sendHttpRequest(new RequestOptions({
            method: RequestMethod.Get,
            url:    this._constructUserPath() + path
        }));
    }

    post(path: string, data: any): Observable<Response> {
        return this.sendHttpRequest(new RequestOptions({
            method: RequestMethod.Post,
            url:    this._constructUserPath() + path,
            body:   data
        }));
    }

    postFormData(path: string, data: any): Observable<Response> {
      let baseHeaders: { [key:string]: string; } = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      };
      let requestOptions = new RequestOptions({
          headers: new Headers(baseHeaders),
          withCredentials: true,
          method: RequestMethod.Post,
          url:    this._constructUserPath() + path,
          body:   encodeURI(data)
      });
      return this.sendHttpRequest(requestOptions);
    }
    put(path: string, data: any): Observable<Response> {
        return this.sendHttpRequest(new RequestOptions({
            method: RequestMethod.Put,
            url:    this._constructUserPath() + path,
            body:   data
        }));
    }

    delete(path: string): Observable<Response> {
        return this.sendHttpRequest(new RequestOptions({
            method: RequestMethod.Delete,
            url:    this._constructUserPath() + path
        }));
    }

    patch(path: string, data: any): Observable<Response> {
        return this.sendHttpRequest(new RequestOptions({
            method: RequestMethod.Patch,
            url:    this._constructUserPath() + path,
            body:   data
        }));
    }

    head(path: string): Observable<Response> {
        return this.sendHttpRequest(new RequestOptions({
            method: RequestMethod.Head,
            url:    this._constructUserPath() + path
        }));
    }

    options(path: string): Observable<Response> {
        return this.sendHttpRequest(new RequestOptions({
            method: RequestMethod.Options,
            url:    this._constructUserPath() + path
        }));
    }

    // Construct and send Http request
    sendHttpRequest(requestOptions: RequestOptions): Observable<Response> {

        let baseRequestOptions: RequestOptions;
        let baseHeaders: { [key:string]: string; } = {
          'Content-Type': 'application/json',//'application/x-www-form-urlencoded; charset=UTF-8',
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        };
        // Merge auth headers to request if set
        baseRequestOptions = new RequestOptions({
            headers: new Headers(baseHeaders),
            withCredentials: true,
        });

        // Merge standard and custom RequestOptions
        baseRequestOptions = baseRequestOptions.merge(requestOptions);

        let response = this.http.request(new Request(baseRequestOptions)).share();

        return response;
    }
}
