import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from '../service/guard.service';
import { ReporteComponent } from './reporte/reporte.component';
import { CrearComponent } from './reporte/crear/crear.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ConvertirComponent } from './reporte/convertir/convertir.component';
import { HistorialComponent } from './historial/historial.component';
import { ArchivosComponent } from './archivos/archivos.component';


const routes: Routes = [
    {
        path: 'reportes', component: ReporteComponent, children: [

            { path: 'nuevo', component: CrearComponent },
            { path: 'convertir', component: ConvertirComponent},
            
        ],canActivate:[GuardService]

    },

    {
        path: 'perfil', component: PerfilComponent
    },

    {
        path: 'historial', component: HistorialComponent
    },

    {
        path: 'archivos', component: ArchivosComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }