import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imgs-expand',
  templateUrl: './imgs-expand.component.html',
  styleUrls: ['./imgs-expand.component.css']
})
export class ImgsExpandComponent implements OnInit {

  @Input()
  src1:string=''
  @Input()
  src2:string=''
  @Input()
  src3:string=''

  constructor() { }

  ngOnInit(): void {
  }

}
