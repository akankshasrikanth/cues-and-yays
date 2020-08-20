import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-ready',
  templateUrl: './ready.component.html',
  styleUrls: ['./ready.component.scss']
})
export class ReadyComponent implements OnInit {
  @Input() name: string;   //'name' has data that has to be shared with other components
                           //here, it has received it from another component, but is sharing it for future uses
  constructor(private shareService: SharedService, private route:Router) { }

  ngOnInit(): void {
    this.name = this.shareService.name;
  }

  go(){       //to go to the quiz zone
    this.route.navigate(["/mcq"]);
  }
}
