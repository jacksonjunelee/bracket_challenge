import { Component, Input, OnInit } from '@angular/core';
import { FootballInfo } from './football-info.interface';
import { MatchBase } from '../../match-base';

@Component({
  selector: 'sf-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.less']
})
export class FootballComponent extends MatchBase implements OnInit {

  @Input() matchInfo: FootballInfo;
  @Input() seedMatches: FootballInfo[];

  public header = "Football"

  constructor() { super() }

  ngOnInit() {}



}
