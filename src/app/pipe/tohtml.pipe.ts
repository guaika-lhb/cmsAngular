import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'tohtml'
})
export class TohtmlPipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer){}

  transform(html: any, args?: any): any {
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

}
