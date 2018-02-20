import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    topic: string;

    constructor() {}

    setTopic(topic: string) :void {
        console.log('setting topic: ', topic);
        this.topic = topic;
    }
}
