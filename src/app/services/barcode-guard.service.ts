import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";

@Injectable()
export class BarcodeGuard implements CanActivate {
    constructor(
        private loginService: LoginService,
        private router: Router
    ){}

    canActivate() {
        if(this.loginService.loggedIn()) {
          return true;
        } else {
          this.router.navigateByUrl('/login');
          return false;
        }
      }

}