import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be button variant accent', () => {
    component.variant = 'accent';
    fixture.detectChanges();
    const btnEl: HTMLElement = fixture.nativeElement.querySelector('button');
    expect(btnEl.classList).toContain('btn-accent');
  });

  it('should have the type submit', () => {
    component.type = 'submit';
    fixture.detectChanges();
    const btnEl: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(btnEl.type).toBe('submit');
  });
});
