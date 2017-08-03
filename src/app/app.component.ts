import { Component } from '@angular/core';
import { OrganizationComponent } from './organization/organization.component'
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  data:any = null;

  constructor(private _http:Http){
      console.log("Ola");
      this.getInfo();
    }  

  private getInfo(){
    console.log("!");
    
    return this._http.get('https://conduit.productionready.io/api/profiles/eric').map((res:Response) => res.json()).subscribe(data => {
                        this.data = data;
                        console.log(this.data);
                });
  }



}
