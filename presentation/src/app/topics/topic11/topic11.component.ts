import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'topic11-component',
    templateUrl: 'topic11.component.html',
    styleUrls: ['topic11.component.scss', '../../app.component.css']
})
export class Topic11Component {

    /*modalRef: BsModalRef;

    showNative: boolean;*/

    constructor() {
    }

    /*openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }*/
}
