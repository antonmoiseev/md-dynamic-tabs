import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import { Tab1ContentComponent } from './tab-1-content/tab-1-content.component';
import { Tab2ContentComponent } from './tab-2-content/tab-2-content.component';

@Component({
  selector: 'app-component-resolver',
  templateUrl: './component-resolver.component.html'
})
export class ComponentResolverComponent {

  private tabs = [
    { label: 'TAB 1' },
    { label: 'TAB 2' }
  ];

  private tabContentComponents : any[]= [
    Tab1ContentComponent,
    Tab2ContentComponent
  ];

  @ViewChild('tabContent', { read: ViewContainerRef })
  tabContent: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {}

  onTabChange(tabIndex) {
    let factory = this.cfr.resolveComponentFactory(this.tabContentComponents[tabIndex]);
    this.tabContent.clear();
    this.tabContent.createComponent(factory);
  }

}
