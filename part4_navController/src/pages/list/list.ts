import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})
export class ListPage {
    itemList: Array<{ title: string, note: string, icon: string }>;

    name: string;
    note: string;
    icon: string;

    constructor(public navCtrl: NavController) {
        this.itemList = [
            {title: 'Item 1', note: 'This is the first item', icon: 'wifi'},
            {title: 'Item 2', note: 'This is the second item', icon: 'beer'},
            {title: 'Item 3', note: 'This is the third item', icon: 'alarm'},
            {title: 'Item 4', note: 'This is the fourth item', icon: 'basket'}
        ];
    }

    openItem(item): void {
        this.navCtrl.push(ItemDetailsPage, {
            item: item
        });
    }

    addItem(): void {
        if (this.name && this.note && this.icon) {
            this.itemList.push(
                {title: this.name, note: this.note, icon: this.icon}
            );
            this.name = this.note = this.icon = null;
        }
    }
}
