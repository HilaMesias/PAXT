import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PagesRoutingModule } from './pages-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ReporteComponent } from './reporte/reporte.component';
import { ArchivosComponent } from './archivos/archivos.component';
import { HistorialComponent } from './historial/historial.component';
import { CrearComponent } from './reporte/crear/crear.component';
import { ComentarioComponent } from './reporte/comentario/comentario.component';
import { VistaPreviaComponent } from './reporte/vista-previa/vista-previa.component';
import { ConvertirComponent } from './reporte/convertir/convertir.component';
import { CompartirComponent } from './archivos/compartir/compartir.component';
import { DetalleComponent } from './historial/detalle/detalle.component';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    NavbarComponent,
    RegistrarseComponent,
    PerfilComponent,
    ReporteComponent,
    ArchivosComponent,
    HistorialComponent,
    CrearComponent,
    ComentarioComponent,
    VistaPreviaComponent,
    ConvertirComponent,
    CompartirComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    PagesRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatSidenavModule

  ],
  exports: [
    MatFormFieldModule
    ]
})
export class PagesModule { }