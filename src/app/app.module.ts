import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialRootModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SimpleMarkupComponent } from './simple-markup/simple-markup.component';
import { TemplateOutletComponent } from './template-outlet/template-outlet.component';
import { ComponentResolverComponent } from './component-resolver/component-resolver.component';
import { Tab1ContentComponent } from './component-resolver/tab-1-content/tab-1-content.component';
import { Tab2ContentComponent } from './component-resolver/tab-2-content/tab-2-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleMarkupComponent,
    TemplateOutletComponent,
    ComponentResolverComponent,
    Tab1ContentComponent,
    Tab2ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialRootModule
  ],
  entryComponents: [
    Tab1ContentComponent,
    Tab2ContentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
