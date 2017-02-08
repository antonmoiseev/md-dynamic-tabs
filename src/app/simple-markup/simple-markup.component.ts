import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-simple-markup',
  templateUrl: './simple-markup.component.html'
})
export class SimpleMarkupComponent {

  tabs: {label: string, content: SafeHtml}[];

  constructor(domSanitizer: DomSanitizer) {
    this.tabs = [
      {
        label: 'TAB 1',
        content: domSanitizer.bypassSecurityTrustHtml(`
          <div>Tab #1 content</div>
          <button md-button>Test</button>
          <select>
            <option>Item 1</option>
            <option>Item 2</option>
          </select>
        `)
      },
      {
        label: 'TAB 2',
        content: domSanitizer.bypassSecurityTrustHtml(`
          <div>Tab #2 content</div>
        `)
      }
    ];
  }

}
