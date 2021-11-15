import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private counter = 0;

  constructor() { }

  public sqr(n: number): number {
    return n * n;
  }

  public getCounter(): number {
    return this.counter;
  }

  public setCounter(counter: number): void {
    this.counter = counter;
  }
}
