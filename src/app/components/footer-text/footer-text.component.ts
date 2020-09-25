import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-text',
  templateUrl: './footer-text.component.html',
  styleUrls: ['./footer-text.component.scss']
})
export class FooterTextComponent {
  @Input() public multiline: boolean;
  public currentDate = new Date();
  public version = "v0.2";

  constructor() { }
}
