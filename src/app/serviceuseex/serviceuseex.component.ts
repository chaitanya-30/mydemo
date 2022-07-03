import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-serviceuseex',
  templateUrl: './serviceuseex.component.html',
  styleUrls: ['./serviceuseex.component.css']
})
export class ServiceuseexComponent implements OnInit {

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  }

}
