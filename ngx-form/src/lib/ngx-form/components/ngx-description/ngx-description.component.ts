import { Component, Input } from '@angular/core';

@Component({
    selector: 'ngx-description',
    templateUrl: './ngx-description.component.html',
    styleUrls: ['./ngx-description.component.scss'],
})
export class NgxDescriptionComponent {
    @Input({ required: true }) description!: string;
    @Input({ required: true }) disabled: boolean = false;
}
