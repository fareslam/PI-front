import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ResilienceComponent } from './resilience/resilience.component';
import { HomeComponent } from './home/home.component';
import { PovertyComponent } from './poverty/poverty.component';
import { HealthComponent } from './health/health.component';
import { FreshwaterComponent } from './freshwater/freshwater.component';
import { PredictionComponent } from './prediction/prediction.component';
import { SdgsComponent } from './sdgs/sdgs.component';
import { HungerComponent } from './hunger/hunger.component';
import { EmissionsComponent } from './emissions/emissions.component';
import { ClimateComponent } from './climate/climate.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FirstComponent } from './first/first.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
 
import { MatSidenavModule } from '@angular/material/sidenav';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { PowerBIEmbedModule } from 'powerbi-client-angular';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

  
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,BrowserModule,
    HttpClientModule,MatSlideToggleModule,SweetAlert2Module,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,MatFormFieldModule,MatSelectModule,MatInputModule,MatButtonModule,MatToolbarModule,
    MatIconModule,MatSidenavModule,
    MatButtonModule,MatCardModule,
    PowerBIEmbedModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ResilienceComponent,
    HomeComponent, 
 
     PovertyComponent,
    HealthComponent,
    FreshwaterComponent,
    PredictionComponent,
    SdgsComponent,
    HungerComponent,
    EmissionsComponent,
    ClimateComponent,
    FirstComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
