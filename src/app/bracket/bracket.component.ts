import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../match.interface';

@Component({
  selector: 'sf-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.less']
})
export class BracketComponent implements OnInit {
  @Input() matchInfo: Match<any>;
  @Input() sport: string;

  public index = 0;

  constructor() { }

  ngOnInit() {
    console.log(this.matchInfo);
    // console.log(this.sport);
  }

}
