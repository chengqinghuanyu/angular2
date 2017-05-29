import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ModuleWithProviders} from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule,AccordionModule,ButtonsModule,CarouselModule,DatepickerModule,ModalModule,PaginationModule,ProgressbarModule,RatingModule,TabsModule,TooltipModule} from 'ng2-bootstrap';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ButtonComponent } from './button/button.component';
import { DorpdownsComponent } from './dorpdowns/dorpdowns.component';
import { ChartsComponent } from './charts/charts.component';
import { ConunicationComponent } from './conunication/conunication.component';
import { ConmunacationnewComponent } from './conmunacationnew/conmunacationnew.component';
import { ConunationComponent } from './conunation/conunation.component';
import { ConunationnewComponent } from './conunationnew/conunationnew.component';


import { rootRouterConfig } from './routes.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './detail/detail.component';
import { ConnactComponent } from './connact/connact.component';
import { FormComponent } from './form/form.component';
import { SetbgDirective } from './setbg.directive';
import { StructureDirective } from './structure.directive';

let rootRouterModule:ModuleWithProviders = RouterModule.forRoot(rootRouterConfig);
@NgModule({
  declarations: [
    AppComponent,
    ModalBasicComponent,
    CarouselComponent,
    DatepickerComponent,
    AccordionComponent,
    AlertsComponent,
    ButtonComponent,
    DorpdownsComponent,
    ChartsComponent,
    ConunicationComponent,
    ConmunacationnewComponent,
    ConunationComponent,
    ConunationnewComponent,
    HomeComponent,
    ListComponent,
    TopnavComponent,
    FooterComponent,
    DetailComponent,
    ConnactComponent,
    FormComponent,
    SetbgDirective,
    StructureDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AlertModule,
    AccordionModule,
    ButtonsModule,
    CarouselModule,
    DatepickerModule,
    ModalModule,
    PaginationModule,
    ProgressbarModule,
    RatingModule,
    TabsModule,
    ChartsModule,
    rootRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  //bootstrap: [ConnactComponent]
})
export class AppModule { }
