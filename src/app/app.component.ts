import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-dynenv';
  
  base_url = environment.baseURL;
  api_url = environment.apiURL;
  kc_domain = environment.keycloakDomain;

  ngOnInit() {
    // Domain
    console.log(this.base_url);
    // API
    console.log(this.api_url);
    // Keycloak
    console.log(this.kc_domain);
  }
}


