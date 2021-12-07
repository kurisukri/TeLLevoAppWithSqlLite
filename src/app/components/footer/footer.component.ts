import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  fecha=Date.now();
  constructor() { }

  ngOnInit() {

    console.log("Fecha en console log:");
    console.log(this.fecha);
  }

}
