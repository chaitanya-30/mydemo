import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControlDirective, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';

import { TurnGreenDirective } from './turngreen';

import { TempDrivenFormComponent } from './temp-driven-form/temp-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttprequestComponent } from './httprequest/httprequest.component';
import { RouterModule, Routes } from '@angular/router';
import { ReversePipe } from './reverse.pipe';
import { BetterHighlightDirective } from './better-highlight.directive';
import { ServiceuseexComponent } from './serviceuseex/serviceuseex.component';
import { UserService } from './users.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const appRoutes: Routes=[

 
  { path:'reactiveform' ,component: ReactiveFormComponent},
  { path:'templatedriven',component: TempDrivenFormComponent},
  {path:' ',component:HttprequestComponent},
  {path:'serviceexample',component:ServiceuseexComponent}

]
@NgModule({
  declarations: [
    AppComponent,
     
    TurnGreenDirective,

    TempDrivenFormComponent,
    ReactiveFormComponent,
    HttprequestComponent,
    ReversePipe,
    BetterHighlightDirective,
    ServiceuseexComponent,
 
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function ForRoot(appRoutes: Routes[]): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

