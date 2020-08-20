import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private sharedService:SharedService, private router:Router) { }
  @Input() name: string;
  @Input() score: number;
  //this component has received shared data from other components
  ngOnInit(): void {
    this.name=this.sharedService.name;
    this.score=this.sharedService.score;
  }
  goHome(){     //to go back home
    this.router.navigate(['']);
  }

}
