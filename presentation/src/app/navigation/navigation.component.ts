import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'navigation-component',
    templateUrl: 'navigation.component.html',
    styleUrls: ['navigation.component.scss']
})
export class NavigationComponent {
    @Output() setTopic = new EventEmitter();
    themes;
    topics;

    constructor() {
        this.themes = [
            {title: 'Introduction', active: false},
            {title: 'Ionic Applications', active: false},
            {title: 'Workshop', active: false}
        ];
        this.topics = [
            [
                {title: 'What is Ionic', active: false},
                {title: 'Framework Architecture', active: false},
                {title: 'Strengths and Use Cases', active: false}
            ],
            [
                {title: 'Getting started', active: false}
            ],
            [
                {title: 'Demo 2', active: false},
                {title: 'Demo 3', active: false},
                {title: 'Demo 4', active: false}
            ]
        ];
    }

    ngOnInit() {
        //this.setActiveTheme(this.themes[0].title);
    }

    setActiveTheme(title): void {
        this.themes.forEach((theme) => {
            theme.active = theme.title === title;
        });
        this.setActiveTopic(null);
    }

    setActiveTopic(title) : void {
        this.themes.forEach((theme, index) => {
            if (theme.active) {
                if (title) {
                    this.topics[index].forEach((topic) => {
                        if (topic.title === title) {
                            topic.active = true;
                            this.setTopic.emit(topic.title);
                        } else {
                            topic.active = false;
                        }
                    });
                } else {
                    this.topics[index][0].active = true;
                    this.setTopic.emit(this.topics[index][0].title);
                }
            }
        });
    }
}
