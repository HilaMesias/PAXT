import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import { InicioSesionComponent } from './component/inicio-sesion/inicio-sesion.component';
import { RegistrarseComponent } from './component/registrarse/registrarse.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { ReporteComponent } from './component/reporte/reporte.component';
import { ArchivosComponent } from './component/archivos/archivos.component';
import { HistorialComponent } from './component/historial/historial.component';
import { CrearComponent } from './component/reporte/crear/crear.component';
import { ComentarioComponent } from './component/reporte/comentario/comentario.component';
import { VistaPreviaComponent } from './component/reporte/vista-previa/vista-previa.component';
import { ConvertirComponent } from './component/reporte/convertir/convertir.component';
import { CompartirComponent } from './component/archivos/compartir/compartir.component';
import { DetalleComponent } from './component/historial/detalle/detalle.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioSesionComponent,
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
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
