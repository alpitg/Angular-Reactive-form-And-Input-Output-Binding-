import { Component, OnInit } from '@angular/core';
// import { Component} from '@angular/core';

@Component({
    selector: 'app-inputBinding',
    templateUrl: './inputBinding.component.html',
    styleUrls: ['./inputBinding.component.css']
})
// export class InputBindingComponent{
//     title = 'app';
// }

export class InputBindingComponent implements OnInit {
    title = 'app';

    CustomerDs: Customer;

    Customers: Customer[] = [
        { Id: 1, Name: 'Alpit', Email: 'alpit@gmail.com',Status:'Active'},
        { Id: 2, Name: 'Sam', Email: 'sam@gmail.com',Status:'Active'},
        { Id: 3, Name: 'Sammy', Email: 'sammy@gmail.com',Status:'In-Active'},
        { Id: 4, Name: 'Jack', Email: 'jack@gmail.com',Status:'Active'},
        { Id: 5, Name: 'Max', Email: 'max@gmail.com',Status:'In-Active'}
    ];

    sendChildDetails(model){
        this.CustomerDs=model;
        //alert(model.Id);
    }

    //default
    ngOnInit() {
        //throw new Error('Method not implemented.');
    }

}
