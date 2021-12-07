import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-no-autorizado',
  templateUrl: './no-autorizado.page.html',
  styleUrls: ['./no-autorizado.page.scss'],
})
export class NoAutorizadoPage implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  ingresar(){
    this.router.navigate(['../login']);
  }

  GoPerfil(){
    this.router.navigate(['../perfil-user']);
  }

}
