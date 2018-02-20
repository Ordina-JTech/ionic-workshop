import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-item-details',
    templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
    selectedItem: any;

    constructor(public navParams: NavParams) {
        this.selectedItem = navParams.get('item');
    }
}
