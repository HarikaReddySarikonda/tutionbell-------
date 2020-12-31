import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public routerElem;
  title = 'tuitionbell';
  constructor(public router: Router){
    
  }
  ngOnInit(): void {
    console.log("ap.compo");
  if(this.router){
    document.getElementById('spinner') .style.display = 'none';
  }
}  
childEvent(e){
  this.routerElem = e;
  console.log(this.routerElem);
}
}
