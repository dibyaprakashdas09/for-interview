import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatTabsModule } from '@angular/material/tabs';
import { MenubarComponent } from './menubar/menubar.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {  MatAutocompleteModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent
  ],
  imports: [
    MatAutocompleteModule,
    BrowserModule,
    MatCardModule,
    MatButtonModule, 
    
    MatMenuModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
