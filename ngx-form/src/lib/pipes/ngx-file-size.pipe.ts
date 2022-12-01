import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ngxFileSize' })
export class NgxFileSizePipe implements PipeTransform {
    transform(value: number): string {
        let size: number = +value;
        if (isNaN(size)) return '';

        if (size < 1000) return size.toString() + ' بایت';

        size /= 1024;
        if (size < 1000) return size.toFixed(2) + ' کیلوبایت';

        size /= 1024;
        if (size < 1000) return size.toFixed(2) + ' مگابایت';

        size /= 1024;
        if (size < 1000) return size.toFixed(2) + ' گیگابایت';

        size /= 1024;
        return size.toFixed(2) + ' ترابایت';
    }
}
