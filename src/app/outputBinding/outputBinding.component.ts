import { Component } from '@angular/core';

@Component({
  selector: 'app-outputBinding',
  templateUrl: './outputBinding.component.html'
})
export class OutputBindingComponent {
  title = 'app';
  take;

  onTake(take){
      this.take=take;
  }
}
