import { Component, Input, OnInit } from '@angular/core';
import { SoccerInfo } from './soccer-info.interface';
import { MatchBase } from '../../match-base';

@Component({
  selector: 'sf-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.less']
})
export class SoccerComponent extends MatchBase implements OnInit {

  @Input() matchInfo: SoccerInfo;
  @Input() seedMatches: SoccerInfo[];

  public header = "Soccer"

  constructor() { super() }

  ngOnInit() {}

}
