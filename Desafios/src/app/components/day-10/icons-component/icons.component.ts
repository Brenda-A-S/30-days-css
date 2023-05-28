import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  @Input()
  src: string = ''
  alt: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
