import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from '../auth/register/register.component';
import { LoginComponent } from '../auth/login/login.component';




const routes: Routes =[
  
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('../modules/pages/search/search.module').then((m) => m.SearchModule)
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class RouteModule { }
