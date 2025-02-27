import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElenconumeriComponent } from './elenconumeri.component';

describe('ElenconumeriComponent', () => {
  let component: ElenconumeriComponent;
  let fixture: ComponentFixture<ElenconumeriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElenconumeriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElenconumeriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
