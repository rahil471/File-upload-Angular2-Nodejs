import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import { AppComponent }   from './app.component';

@NgModule({
    imports: [BrowserModule],
    exports: [],
    declarations: [AppComponent, FileSelectDirective], /** The FileSelectDirective is what we will require*/
    providers: [], 
    bootstrap: [AppComponent]
})
export class AppModule { }