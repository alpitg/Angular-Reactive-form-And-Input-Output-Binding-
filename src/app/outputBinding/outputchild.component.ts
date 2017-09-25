import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable,Subscription } from "rxjs/Rx";

//import { Component } from '@angular/core';
@Component({
    selector: 'app-outputchild',
    templateUrl: './outputchild.component.html'
})
// export class OutputChildComponent{
//     title = 'app';
// }

export class OutputChildComponent implements OnInit {
    title = 'app';

    tick = 0;
    private timer;
    private sub: Subscription;

    @Output() countDown = new EventEmitter<any>();

    constructor() { }

    //default
    ngOnInit() {
        this.timer = Observable.timer(1000, 1000);
        this.sub = this.timer.subscribe(t => this.tickerFunction(t));
    }

    tickerFunction(tick) {
        this.tick = tick;
        this.countDown.emit(this.tick);
    }
}
