import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiInputComponent implements OnInit {

  constructor() { }

  @Input() public attr: string;

  @Input() public label: string;

  @Input() public object: any;

  ngOnInit(): void {
  }

}
