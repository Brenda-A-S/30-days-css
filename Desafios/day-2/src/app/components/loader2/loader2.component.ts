import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader2',
  templateUrl: './loader2.component.html',
  styleUrls: ['./loader2.component.css']
})
export class Loader2Component implements OnInit {
  
  @Input()
  color:string=''

  constructor() { }

  ngOnInit(): void {
  }

}
