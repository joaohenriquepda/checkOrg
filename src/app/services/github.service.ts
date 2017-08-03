import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class GithubService {

  data:any = null;

  constructor(private _http:Http){
    
    }  

  public getInfo(){
    console.log("!");
        return this._http.get('https://conduit.productionready.io/api/profiles/eric').map((res:Response) => res.json()).subscribe(data => {
                        this.data = data;
                        console.log(this.data);
                });
  }

}
