import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   this.subject();
  }
  // tslint:disable-next-line: typedef
  subject(){
  const subject = new Subject<number>();

  subject.subscribe({
    next: (n) => console.log(`obsA: ${n}`)
  });
  subject.subscribe({
    next: (n) => console.log(`obsB: ${n * 5}`)
  });

  subject.next(1);
  subject.next(2);
}
}
