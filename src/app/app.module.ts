import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CqsComponent } from './cqs/cqs.component';
//import {CqsService} from './cqs.service';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Http, RequestOptions } from '@angular/http';
import { ContentComponent } from './cqs/content/content.component';

export const routes: Routes = [
 //{path:'',component:AppComponent},
 { path: 'Cqs', component: CqsComponent,children:[
    {path:'Cqs/Content',component:ContentComponent}
    ]}                           
 ];

@NgModule({
  declarations: [
    AppComponent,
    CqsComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
