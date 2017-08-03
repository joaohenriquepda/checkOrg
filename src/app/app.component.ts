import { Component } from '@angular/core';
import { OrganizationComponent } from './organization/organization.component';
import { GithubService } from './services/github.service';


@Component({
  selector: 'app-root',
  providers:[GithubService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'app';

  constructor(private github: GithubService ){

  }

  ngOnInit(){
    this.getInfor();
  }


  private getInfor(){
    this.github.getInfo();
  }

  
}
