import { Input } from '@angular/core';

export abstract class MatchBase {
  @Input() winner: string;
  @Input() index: number;

  public rounds = ['Final', 'Semifinal', 'QuarterFinal']

  get setRounds(): string {
    return this.rounds[this.index]
  }

  get getIndex(): number {
    return this.index + 1
  }
}
