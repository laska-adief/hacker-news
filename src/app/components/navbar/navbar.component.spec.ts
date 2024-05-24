import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have logo image source logo.svg', () => {
    const logoEl: HTMLImageElement =
      fixture.nativeElement.querySelector('#logo');
    const parts = logoEl.src.split('/');
    const fileName = parts[parts.length - 1];
    expect(fileName).toBe('logo.svg');
  });
});
