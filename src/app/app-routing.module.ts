import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MyGradeComponent } from './components/my-grade/my-grade.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomePageComponent},
  {path: 'grades', component: MyGradeComponent},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
