import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
  animations:[
    trigger('enlarge',[
      state('start',style({
        height:'200px',
      })),
      state('end',style(
        {height:'500px'
      })),transition('start => end',[animate('1s')]),
      transition('end=>start',[animate('0.5s')])
    ]),
  ]
})

export class AppComponent {
  isenlarge:boolean=false;
  buttontext:string='enlarge';
  name='chaitanya';
  title: any;
  triggeranimation(){
    this.isenlarge=!this.isenlarge;
    if(this.isenlarge){
      this.buttontext='enlarge';
    }else{
        this.buttontext='shrink';
      }
    }
  }
 

