import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule}  from './app-routing.module';
import { AppComponent } from './app.component';
import { OnePageComponent, HomeComponent, AboutComponent, DirectorBoardComponent, ScoreBoardComponent, SellBoardComponent } from './one-page';
import { DonateComponent, ContactUsComponent, ContactAdminComponent, ReportComponent, ProfileComponent, MainInfoComponent } from './one-page';
import { MyBoxComponent, MyMemberComponent, ChangePasswordComponent, MyDonateComponent, ActivateComponent, SellDonateComponent } from './one-page';
import { AlertModule, DatepickerModule, PaginationModule, ModalModule, DropdownModule  } from 'ng2-bootstrap';
import { AuthenticateService } from './authenticate.service';
import { LanguageService } from './language.service';
import { GeneralService } from './general.service';
import { StateService } from './state.service';
import { OnePageService } from './one-page/one-page.service';
import { ProfileService } from './one-page/profile/profile.service';
import { Guard } from './guard';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DatepickerModule.forRoot(),
    AlertModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    DropdownModule.forRoot()
  ],
  declarations: [
    AppComponent,
    OnePageComponent,
    HomeComponent,
    AboutComponent,
    DirectorBoardComponent,
    ScoreBoardComponent,
    SellBoardComponent,
    SellDonateComponent,
    DonateComponent,
    ContactUsComponent,
    ContactAdminComponent,
    ReportComponent,
    ProfileComponent,
    MainInfoComponent,
    MyBoxComponent,
    MyMemberComponent,
    ChangePasswordComponent,
    MyDonateComponent,
    ActivateComponent
  ],
  providers: [
    AuthenticateService,
    LanguageService,
    GeneralService,
    StateService,
    OnePageService,
    ProfileService,
    Guard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
