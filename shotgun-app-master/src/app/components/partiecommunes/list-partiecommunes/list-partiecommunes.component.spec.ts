import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPartiecommunesComponent } from './list-partiecommunes.component';

describe('ListPartiecommunesComponent', () => {
  let component: ListPartiecommunesComponent;
  let fixture: ComponentFixture<ListPartiecommunesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPartiecommunesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPartiecommunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
