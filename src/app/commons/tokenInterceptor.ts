import { Injectable } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class TokenInterceptor implements HttpInterceptor{

    constructor(){ }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        let tempToken = localStorage.getItem('authorization');
        if (tempToken!=undefined && tempToken!=''){
            request = request.clone({setHeaders: {
                authorization: tempToken 
            }
            });
        }
        console.log('INTERCEPTEUR '+'authorization: '+ request.headers.get('authorization'))

        return next.handle(request)
    }
}