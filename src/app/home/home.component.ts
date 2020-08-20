import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { Home } from './home';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  home: Home = {
    name: ' ',
  };

  @Input() name:string;       //'name' has data that has to be shared with other components
  constructor(private sharedService: SharedService, private route: Router) { 

  }

  ngOnInit(): void {

  }

  saveData(){     //saving the user's name and moving to the next module (Ready)
    this.sharedService.name = this.name;
    this.route.navigate(["/ready"]);
  }
}
