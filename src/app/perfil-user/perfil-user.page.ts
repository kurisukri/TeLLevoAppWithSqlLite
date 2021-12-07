import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { DBTaskService } from '../services/dbtask.service';
import { AuthenticationService } from '../services/authentication.service';


import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.page.html',
  styleUrls: ['./perfil-user.page.scss'],
})
export class PerfilUserPage implements OnInit {
  usuario: string;
  constructor(private router: Router ,private route: ActivatedRoute ,public dbtaskService: DBTaskService,public authenticationSerive:AuthenticationService) { 
    this.route.queryParams.subscribe(data => {
      this.usuario=data.usuario
    })
  }

  
  ngOnInit() {
    this.GetNickUser();
    
  }
 


  logout(){
    this.authenticationSerive.logout();
  }

  b:any;
  
  

  GetNickUser(){
    this.dbtaskService.GetUser().then((data:any)=>{
      console.log(data);
      this.b=data;
      
    })

    
    
  }



  
    
  

  GoComida(){
    this.router.navigate(['../convenio']);
  }

  GoViaje(){
    this.router.navigate(['../mapa']);
  }
  

}


