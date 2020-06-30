
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginComponent } from './login/login.component';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component';


const routes: Routes = [
  {path:"" , component: WelcomePageComponent},
  { path:"login", component:LoginComponent},
  { path:"dashboard", component:DashboardDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
