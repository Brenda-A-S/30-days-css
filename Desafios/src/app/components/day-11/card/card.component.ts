import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  src_1: string = ''
  @Input()
  src_2: string = ''
  @Input()
  alt_1: string = ''
  @Input()
  alt_2: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
