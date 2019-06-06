import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileDropDirective, FileSelectDirective} from 'ng2-file-upload';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    FileDropDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
