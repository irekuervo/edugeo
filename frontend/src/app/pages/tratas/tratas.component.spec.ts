import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratasComponent } from './tratas.component';

describe('TratasComponent', () => {
  let component: TratasComponent;
  let fixture: ComponentFixture<TratasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TratasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TratasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
