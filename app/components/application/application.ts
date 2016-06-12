/**
 * Created by vincebloise on 6/12/16.
 */
// tag::imports[]
import {Component} from '@angular/core';
import FooterComponent from 'app/components/footer/footer';
import NavbarComponent from 'app/components/navbar/navbar';
// end::imports[]

// tag::annotation-component[]
@Component({
    selector: 'bloise-application', // <1>

    templateUrl: 'app/components/application/application.html', // <3>
    styleUrls: ['app/components/application/application.css'], // <4>
    directives: [
        FooterComponent,
        NavbarComponent
    ]
})
// end::annotation-component[]
// tag::class[]
export default class ApplicationComponent {

    constructor() { // <2>
        
    }
}
// end::class[]
