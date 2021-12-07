import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

import { DBTaskService } from '../services/dbtask.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  login:any={
    Usuario:"",
    Password:""
  }
  field:string="";
  constructor(
    public toastController: ToastController,
    public dbtaskService: DBTaskService,
    public alertController: AlertController,
    private router: Router,
    private storage: Storage,
    public authenticationSerive:AuthenticationService
  ) { }

  ngOnInit() {
  }
  registrar(){
    this.createSesionData(this.login);
  }
  createSesionData(login: any) {
    if(this.validateModel(login)){ // Se valida que se ingresen todos los datos
      /**
       * Se hace una copia del login, se hace así ya que
       * el operador '=' no haceuna copia de los datos, si no
       * que crea una nueva referencia a los mismos datos.
       * Por eso se utiliza el Object.assign
       */
      let copy = Object.assign({},login);
      copy.Active=1; // Se agrega el valor active = 1 a la copia
      this.dbtaskService.createSesionData(copy) // la copia se le apsa a la función para crear la sesion
      .then((data)=>{ // si la sentencia se ejecuto correctamente
        this.presentToast("Cuenta creada"); 
        this.storage.set("USER_DATA",data);  
        this.router.navigate(['perfil-user']); 
      })
      .catch((error)=>{
        this.presentToast("El usuario ya existe");
      })
    }
    else{
      this.presentToast("Falta: "+this.field);
    }
  }
  validateModel(model:any){
    // Recorro todas las entradas que me entrega Object entries y obtengo su clave, valor
    for (var [key, value] of Object.entries(model)) {
      // Si un valor es "" se retornara false y se avisara de lo faltante
      if (value=="") {
        // Se asigna el campo faltante
        this.field=key;
        // Se retorna false
        return false;
      }
    }
    return true;
  }

  async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }

  GoLogin(){
    this.router.navigate(['../login']);
  }
  

}
