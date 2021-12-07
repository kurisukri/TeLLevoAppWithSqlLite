import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { DBTaskService } from '../services/dbtask.service';
import { Router , ActivatedRoute} from '@angular/router';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from '../services/authentication.service';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage implements OnInit {
  login:any={
    Usuario:"",
    Password:""
  }
  constructor(public toastController: ToastController,
    public dbtaskService: DBTaskService,
    public alertController: AlertController,
    private router: Router,
    private storage: Storage,
    route: ActivatedRoute,
    public authenticationSerive:AuthenticationService) {}

    GoLogin(){
      this.router.navigate(['../login']);
    }

    
    CambiarPassword(){
      if(this.login.Password=="" || this.login.Usuario==""){
        this.presentToast("Complete los campos"); 
      }else{
        this.dbtaskService.updatePassword(this.login.Password,this.login.Usuario);
        this.presentToast("Contraseña cambiada"); 
      }
      

      
      
      
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

    

  ngOnInit() {
  }

}
