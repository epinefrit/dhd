import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { PassportComponent } from './pages/passport/passport.component';



@NgModule({
  imports:      [ BrowserModule,
                      RouterModule.forRoot([
                        {
                          path: 'passport',
                          component: PassportComponent
                        }
                      ])],
  declarations: [ AppComponent,
                        PassportComponent
                          ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
