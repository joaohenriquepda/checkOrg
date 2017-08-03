import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { OrganizationComponent } from './organization/organization.component';
import { RepositoryComponent, SortGridPipe } from './repository/repository.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { MdButtonModule, MdCheckboxModule, MdMenuModule, MdListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    OrganizationComponent,
    RepositoryComponent,
    SortGridPipe
  ],
  imports: [
    HttpModule,
    BrowserModule,
    Ng2OrderModule,
    MdButtonModule, 
    MdCheckboxModule,
    BrowserAnimationsModule,
    MdListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
