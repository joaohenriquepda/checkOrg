import { Component, OnInit, Pipe, PipeTransform, Injectable } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({

  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})




export class RepositoryComponent implements OnInit {

  repositories;
     
  constructor(private github : GithubService) { 
   }

  ngOnInit() {
    this.listRepos();  

  }

  private listRepos(){
    this.github.getRepos()
      .subscribe(data => {
                        const REPOS : Repository[] = data; 
                        this.repositories = REPOS ;
                        console.log(this.repositories);
                });
    }

}


export class Repository{
  id : number;
  name : string;
  created_at : string;
  updated_at : string;

}

@Pipe({
    name: 'sortgrid'
  })
  @Injectable()
   export class SortGridPipe implements PipeTransform {
    transform(array: Array<any>, args: string): Array<any> {
        if (typeof args[0] === "undefined") {
            return array;
        }
        let direction = args[0][0];
        let column = args.replace('-','');
        array.sort((a: any, b: any) => {
            let left = Number(new Date(a[column]));
            let right = Number(new Date(b[column]));
            return (direction === "-") ? right - left : left - right;
        });
        return array;
    }
}
