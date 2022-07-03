import { AfterViewChecked, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-httprequest',
  templateUrl: './httprequest.component.html',
  styleUrls: ['./httprequest.component.css']
})
export class HttprequestComponent implements OnInit{
  [x: string]: any;
name:string="http data insert";

  msgFromChild:string=''
  @ViewChild("para") p: any=ElementRef;
  @ViewChildren("heading") h: any=ElementRef;

 
  constructor() {
    
  }
  changeon(){
    console.log("hello paragraph")
    console.log(this.p)
    console.log(this.h)
    this.p.nativeElement.innerText="heloo this is paragraph";
    for( let i of this.h){
    //  console.log(this.h._results[i].nativeElement.innerText);
    }
   
  }
  // ngAfterViewInit(): void {
  //   throw new Error('Method not implemented.');
   
  // }

  ngOnInit(): void {
   
  }

headingchangedinparent(value:any)
{
 
this.name=value;
// console.log(value)

}
// ngAfterViewChecked():void {
//   console.log(this.child1)
//       this.msgFromChild=this.child1.msgFromChild1;
//   console.log(this.msgFromChild)
//     }
  

}


