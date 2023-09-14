import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioSesionComponent } from './component/inicio-sesion/inicio-sesion.component';
import { NavbarComponent } from './component/navbar/navbar.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: NavbarComponent
  },
  {
    path: 'pages',
    loadChildren: () => import('./component/pages.module').then((m) => m.PagesModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
