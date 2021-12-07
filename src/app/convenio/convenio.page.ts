import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,NavigationExtras } from '@angular/router';
import { ComidasService } from '../services/comida.service';
import { Category } from '../interfaces/categorias'
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-convenio',
  templateUrl: './convenio.page.html',
  styleUrls: ['./convenio.page.scss'],
})
export class ConvenioPage implements OnInit {

  comidas: Category[] = [];

  constructor(private comidaservice: ComidasService, private http:HttpClient,private route: ActivatedRoute,private router: Router,public authenticationSerive:AuthenticationService) { }
  
  ngOnInit() {
    this.comidaservice.getCategorias().subscribe(resp => {
          this.comidas.push(...resp.categories); //push: colocar elemento al final del arreglo
          console.log("Mi arreglo: ", this.comidas);
      })
  }

  GoPerfil(){
    this.router.navigate(['../perfil-user']);
  }

  logout(){
    this.authenticationSerive.logout();
  }

  GoViaje(){
    this.router.navigate(['../mapa']);
  }

  onClick(cat:string) 
  {
    console.log(cat);
    let extras:NavigationExtras={
      state:{
        categoria:cat
      }
    }
    this.router.navigate(['/tipocomidas'],extras);
  }
  
}
