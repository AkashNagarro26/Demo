import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.route';
import {parentComponent} from './parent/parent.component';
import {childComponent} from './child/child.component';
import { AppComponent } from './app.component';
import {AppDirective} from './customdirective/app.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    parentComponent,
    childComponent,
    AppDirective
    
  ],
  imports: [
    BrowserModule,routing,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
