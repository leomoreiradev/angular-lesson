import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
})
export class EventosComponent implements OnInit {
  show: boolean = false;
  size: string = '10px';
  constructor() {}

  ngOnInit(): void {}

  showMessage(): void {
    //this.show = true;

    //Toggle
    this.show = !this.show;
  }

  mudarFonte(): void {
    this.size = '40px';
  }
}
