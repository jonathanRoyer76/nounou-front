import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as constants from '../commons/constants';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService) {  }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.authenticationService.isTokenInLocalStorage()) {
            request = request.clone({setHeaders: { authorization: constants.TOKEN_BEARER + this.authenticationService.getStoredToken() }});
        }

        return next.handle(request);
    }
}
