import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Trabajador } from 'src/app/model/Trabajador';
import { TrabajadorService } from 'src/app/service/trabajador.service';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  author: Trabajador = new Trabajador();
  mensaje: string = "";
  id: number = 0;
  edicion: boolean = false;

  constructor(private aS: TrabajadorService, 
    private router: Router, 
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    })
    this.form = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      empresa: new FormControl(),
    });
  }
  aceptar(): void {
    this.author.id = this.form.value['id'];
    this.author.nombre = this.form.value['nombre'];
    this.author.empresa = this.form.value['empresa'];
    if (this.form.value['nombre'].length > 0 &&
      this.form.value['empresa'].length > 0) {

      if (this.edicion) {
        this.aS.update(this.author).subscribe((data) => {
          this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
      } else {
        this.aS.insert(this.author).subscribe((data)=> {
          this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
      }
      this.router.navigate(['/pages/autores']);
    } else {
      this.mensaje = "Complete los campos requeridos!!!";
    }
  }

  init() {
    if (this.edicion) {
      this.aS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nombre: new FormControl(data.nombre),
          empresa: new FormControl(data.empresa),
        })
      })
    }
  }
}
