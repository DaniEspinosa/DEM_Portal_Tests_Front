import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SignupComponent } from './views/signup/signup.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './views/user/user-dashboard/user-dashboard.component';
import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';
import { ProfileComponent } from './views/profile/profile.component';
import { WelcomeComponent } from './views/admin/welcome/welcome.component';
import { ViewCategoriasComponent } from './views/admin/view-categorias/view-categorias.component';
import { AddCategoriaComponent } from './views/admin/add-categoria/add-categoria.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'admin', component: DashboardComponent, canActivate: [AdminGuard], children: [
      { path: 'profile', component: ProfileComponent },
      { path: '', component: WelcomeComponent },
      { path: 'categorias', component: ViewCategoriasComponent },
      { path: 'add-categoria', component: AddCategoriaComponent }
    ]
  },
  { path: 'user-dashboard', component: UserDashboardComponent, pathMatch: 'full', canActivate: [NormalGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
