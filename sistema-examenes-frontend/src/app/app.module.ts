import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './views/signup/signup.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './views/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './views/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './views/profile/profile.component';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './views/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './views/admin/welcome/welcome.component';
import { ViewCategoriasComponent } from './views/admin/view-categorias/view-categorias.component';
import { AddCategoriaComponent } from './views/admin/add-categoria/add-categoria.component';
import { ViewExamenesComponent } from './views/admin/view-examenes/view-examenes.component';
import { AddExamenComponent } from './views/admin/add-examen/add-examen.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { ActualizarExamenComponent } from './views/admin/actualizar-examen/actualizar-examen.component';
import { ViewExamenPreguntasComponent } from './views/admin/view-examen-preguntas/view-examen-preguntas.component';
import { AddPreguntaComponent } from './views/admin/add-pregunta/add-pregunta.component';
import { ActualizarPreguntaComponent } from './views/admin/actualizar-pregunta/actualizar-pregunta.component';
import { SidebarComponent as UserSidebar } from "./views/user/sidebar/sidebar.component";
import { LoadExamenComponent } from './views/user/load-examen/load-examen.component';
import { InstruccionesComponent } from './views/user/instrucciones/instrucciones.component';
import { StartComponent } from './views/user/start/start.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriasComponent,
    AddCategoriaComponent,
    ViewExamenesComponent,
    AddExamenComponent,
    ActualizarExamenComponent,
    ViewExamenPreguntasComponent,
    AddPreguntaComponent,
    ActualizarPreguntaComponent,
    UserSidebar,
    LoadExamenComponent,
    InstruccionesComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
