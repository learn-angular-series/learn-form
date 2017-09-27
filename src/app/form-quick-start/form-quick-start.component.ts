import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-quick-start',
  templateUrl: './form-quick-start.component.html',
  styleUrls: ['./form-quick-start.component.scss']
})
export class FormQuickStartComponent implements OnInit {
  public userName:string;

  constructor() { }

  ngOnInit() {
  }

  public userNameChange(event):void{
    this.userName=event.target.value;
  }
}
