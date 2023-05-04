import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.css']
})
export class SocialIconComponent implements OnInit {
  @Input()
  img:string=''
  
  @Input()
  alt:string=''

  @Input()
  href:string=''

  constructor() { }

  ngOnInit(): void {
  }

}
