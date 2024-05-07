import { Component } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  constructor(private cookieService: CookieService) {
    this.cookieService.set("Login", "true");
    console.log(this.cookieService.get("Login"));
  }

  public backhome() {
    window.location.pathname = "/";
  }

  public async login() {
    const data = await fetch(window.location.origin + "/api/login");
    console.log("Test");
  }
}
