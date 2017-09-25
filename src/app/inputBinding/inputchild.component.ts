import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inputchild',
  templateUrl: './inputchild.component.html'
})
export class InputChildComponent implements OnInit {
   

  title = 'app';
@Input() CustomerDetails:any;
constructor(){}

 ngOnInit(){
     // throw new Error('Method not implemented.');
    }


}
