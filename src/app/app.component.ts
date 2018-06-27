import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CqsComponent } from './cqs/cqs.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor( private _router: Router) {}
 
  
  open(){
      document.getElementById("mySidenav").style.width="200px";    
  }

 closeNav(){
     document.getElementById("mySidenav").style.width="0";
  }
  
  
  CQS()
  {
      this._router.navigate(['/Cqs']);
      console.log("cqs");
  }
  
  
  
}
