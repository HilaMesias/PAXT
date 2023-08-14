import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from '../service/guard.service';
import { ReporteComponent } from './reporte/reporte.component';
import { CrearComponent } from './reporte/crear/crear.component';


const routes: Routes = [
    {
        path: 'reportes', component: ReporteComponent, children: [

            { path: 'nuevo', component: CrearComponent },

        ],canActivate:[GuardService]

    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }