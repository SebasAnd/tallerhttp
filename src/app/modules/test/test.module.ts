import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTestCardComponent } from './ui-test-card/ui-test-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TestSaasComponent } from './test-saas/test-saas.component';
import { TestServicesComponent } from './test-services/test-services.component';
import {MatCardModule} from '@angular/material/card';
import { TestobservablesComponent } from './testobservables/testobservables.component';
import { ActorstestComponent } from './actorstest/actorstest.component';
import { MoviestestComponent } from './moviestest/moviestest.component';
import { CategoriestestComponent } from './categoriestest/categoriestest.component';
import { CountrytestComponent } from './countrytest/countrytest.component';
import {MatToolbarModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { NothingComponent } from './nothing/nothing.component';
import { DetailsComponent } from './details/details.component';
import {RouterModule} from '@angular/router';
import { HttptestComponent } from './httptest/httptest.component';
import {HttpModule} from '@angular/http';
import {MatGridListModule} from '@angular/material';
import { CastComponent } from './cast/cast.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule

  ],
  declarations: [UiTestCardComponent, TestSaasComponent, TestServicesComponent, TestobservablesComponent, ActorstestComponent, MoviestestComponent, CategoriestestComponent, CountrytestComponent, NothingComponent, DetailsComponent, HttptestComponent, CastComponent],
  exports: [UiTestCardComponent, TestSaasComponent, TestServicesComponent, TestobservablesComponent, ActorstestComponent, MatMenuModule, MatToolbarModule, MatButtonModule, NothingComponent, MoviestestComponent, RouterModule, HttptestComponent,HttpModule,MatGridListModule,CastComponent]
})
export class TestModule { }
