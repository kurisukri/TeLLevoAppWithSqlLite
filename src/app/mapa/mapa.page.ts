import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MapCustomService} from "../services/map-custom.service";
import { Router , ActivatedRoute} from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  @ViewChild('asGeoCoder') asGeoCoder: ElementRef;
  modeInput = 'start';
  wayPoints: WayPoints = {start: null, end: null};

  constructor(private mapCustomService: MapCustomService, private renderer2: Renderer2,public authenticationSerive:AuthenticationService,private router: Router ,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.mapCustomService.buildMap()
      .then(({geocoder, map}) => {
        // this.asGeoCoder
        this.renderer2.appendChild(this.asGeoCoder.nativeElement,
          geocoder.onAdd(map)
        );


        console.log('eso tilin');
      })
      .catch((err) => {
        console.log('mala', err);
      });

    this.mapCustomService.cbAddress.subscribe((getPoint) => {
      if (this.modeInput === 'start') {
        this.wayPoints.start = getPoint;
      }
      if (this.modeInput === 'end') {
        this.wayPoints.end = getPoint;
      }
    });

    
  }

  drawRoute(): void {
    console.log('***** PUNTOS de ORIGEN y DESTINO', this.wayPoints)
    const coords = [
      this.wayPoints.start.center,
      this.wayPoints.end.center
    ];

    this.mapCustomService.loadCoords(coords);
  }

  changeMode(mode: string): void {
    this.modeInput = mode;
  }

  Changestart(){
    console.log("hola");
    this.modeInput="start";
  }


  ChangeEnd(){
    console.log("hola");
    this.modeInput="end";
  }
  logout(){
    this.authenticationSerive.logout();
  }

  GoComida(){
    this.router.navigate(['../convenio']);
  }

  
}

export class WayPoints {
  start: any;
  end: any

  
}