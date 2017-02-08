import { Component, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-template-outlet',
  templateUrl: './template-outlet.component.html'
})
export class TemplateOutletComponent implements AfterViewInit {

  @ViewChild('tab1') tab1Content: TemplateRef<any>;
  @ViewChild('tab2') tab2Content: TemplateRef<any>;

  tabs: any = [];

  ngAfterViewInit() {
    this.tabs = [
      {
        label: 'TAB 1',
        templateRef: this.tab1Content
      },
      {
        label: 'TAB 2',
        templateRef: this.tab2Content
      }
    ];
  }

}
