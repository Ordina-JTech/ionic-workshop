import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule, ModalModule, CollapseModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuToggleComponent } from './menu-toggle/menu-toggle.component';
import { NavigationComponent } from './navigation/navigation.component';

import { Topic11Component } from './topics/topic11/topic11.component';
import { Topic12Component } from './topics/topic12/topic12.component';
import { Topic13Component } from './topics/topic13/topic13.component';
import { Topic21Component } from './topics/topic21/topic21.component';
import { Topic31Component } from './topics/topic31/topic31.component';
import { Topic32Component } from './topics/topic32/topic32.component';
import { Topic33Component } from './topics/topic33/topic33.component';
import { Topic34Component } from './topics/topic34/topic34.component';
import { Topic22Component } from './topics/topic22/topic22.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MenuToggleComponent,
        NavigationComponent,
        Topic11Component,
        Topic12Component,
        Topic13Component,
        Topic21Component,
        Topic31Component,
        Topic32Component,
        Topic33Component,
        Topic34Component,
        Topic22Component
    ],
    imports: [
        BrowserModule,
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot(),
        ModalModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
