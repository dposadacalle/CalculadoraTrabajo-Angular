import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: '../footer/footer.component.html',
    styleUrls: ['../footer/footer.component.css']
})
export class FooterComponent {
    public author: any = {name: 'Daniel', lastName: 'Posada Calle'};
}
