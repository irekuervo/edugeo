import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ui-select',
  templateUrl: './ui-select.component.html',
  styleUrls: ['./ui-select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiSelectComponent implements OnInit {

  constructor() { }

  public foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  ngOnInit(): void {
    
  }

}

interface Food {
  value: string;
  viewValue: string;
}
