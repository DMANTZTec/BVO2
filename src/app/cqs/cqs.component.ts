import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-cqs',
  templateUrl: './cqs.component.html',
  styleUrls: ['./cqs.component.css']
})
export class CqsComponent implements OnInit {
    

  constructor( private _router: Router) { }
 // private contentsclicked;

  /*openCity(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
     // evt.currentTarget.className += " active";
  }*/
  
  content()
  {
  //this.contentsclicked=true;
  console.log("content");
  this._router.navigate(['/Cqs/Content']);
  }
  
  ngOnInit()
  {
  console.log("cq1s");
  }

}
