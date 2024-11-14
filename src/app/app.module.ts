import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ROUTING } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from "./common/components/user-list/user-list.component";
import { ChatInputComponent } from "./common/components/chat-input/chat-input.component";
import { ChatWindowComponent } from './common/components/chat-window/chat-window.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ROUTING,
    UserListComponent,
    ChatInputComponent,
    ChatWindowComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
