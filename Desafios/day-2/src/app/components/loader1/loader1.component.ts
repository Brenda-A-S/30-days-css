import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader1',
  templateUrl: './loader1.component.html',
  styleUrls: ['./loader1.component.css']
})
export class Loader1Component implements OnInit {

  @Input()
  color:string=''

  constructor() { }

  ngOnInit(): void {
  }

}
