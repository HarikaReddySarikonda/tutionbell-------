import { Component, OnInit, HostListener, ElementRef, ViewChild, Input } from '@angular/core';
import { Helper } from '../util/Helper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  bgLight = false;
  bgColor: string = '';
  @ViewChild('menubutton') menubuttonElement: ElementRef;
  @ViewChild('menu') menuElement: ElementRef;
  @Input() elemtops: [];
  @Input() routerElem;

  toggleClick() {
    this.bgColor = "rgb(2, 46, 82)";
  }
  //navigation

  public currentActive = '';
  public activElem = '';
  public navbarheight;
  public pagetop;

  // public currentActive = 1;
  // public homeOffset: Number = null;
  // public aboutusOffset: Number = null;
  // public servicesOffset: Number = null;
  // public howItWorksOffset: Number = null;
  // public faqOffset: Number = null;
  // public contactusOffset: Number = null;
  // public navbarheight;
  // public comVar;


  ngAfterViewChecked() {
    this.navbarheight = document.getElementById("navbarheight").offsetHeight;
  }
  scrollToElement(target) {
    //  alert(target);
    document.getElementById(target).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  @HostListener('document:scroll') scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.bgLight = true
    }
    else {
      this.bgLight = false
    }
  }
  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    this.navbarheight = parseInt(this.navbarheight);
    this.pagetop = window.pageYOffset + this.navbarheight;
   // alert( this.currentActive);
    if(this.routerElem.elemtops){
      for (let i = this.routerElem.elemtops.length-1; i >=0 ; i--) {
        if(this.routerElem.elemtops[i].top <= this.pagetop){
          console.log(i);
          this.currentActive = this.routerElem.elemtops[i].id;
         // alert( this.currentActive);  
          break;
        }
      }
    } }




  toElem(elem) {
    console.log(elem);
  }


  constructor() { }

  ngOnInit(): void {
    console.log("In Header component");
    console.log(window.pageYOffset);
    this.mobile = Helper.isMobile();

  }
  // menu disappears on clicking outside
  //window.onClick = this.myFunction;
  private mobile = false;

  get isMobile(): boolean {
    return this.mobile;
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.menubuttonElement.nativeElement.contains(event.target) == false 
         && this.mobile==true 
         &&  this.menuElement.nativeElement.classList.contains('show')) {
     // alert("menu goes away on")
      //   this.menubuttonElement.nativeElement.click();
      this.menubuttonElement.nativeElement.getAttribute("aria-expanded");
      this.menubuttonElement.nativeElement.setAttribute("aria-expanded", "false");
      this.menubuttonElement.nativeElement.classList.add("collapsed");
      this.menuElement.nativeElement.classList.remove("show");
    }
  }


}
