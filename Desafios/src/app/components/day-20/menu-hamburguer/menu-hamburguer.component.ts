import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-hamburguer',
  templateUrl: './menu-hamburguer.component.html',
  styleUrls: ['./menu-hamburguer.component.css']
})
export class MenuHamburguerComponent implements OnInit {

  @Input()
  idcheckbox:string=''

  constructor() { }

  ngOnInit(): void {
  }

}
