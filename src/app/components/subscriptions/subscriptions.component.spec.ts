import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsComponent } from './subscriptions.component';
import { MatCardModule } from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';


describe('SubscriptionsComponent', () => {
  let component: SubscriptionsComponent;
  let fixture: ComponentFixture<SubscriptionsComponent>;
  let subNumber: number;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionsComponent ],
      imports: [
        FormsModule,
        MatCardModule,
        MatSlideToggleModule
      ]
    })
    .compileComponents();
  }));

  afterAll(() => {
    localStorage.removeItem('auth');
  });

  beforeEach(() => {
    localStorage.setItem('auth', JSON.stringify({ test: 'test' }));
    fixture = TestBed.createComponent(SubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component correctly', () => {
    expect(component).toBeTruthy();
  });

  it('should expect subscriptions to be empty', () => {
    expect(component.subscriptions.length).toEqual(0);
  });

  it('should expect subscriptions to be defined with an existing role (rrhh)', () => {
    localStorage.setItem('auth', JSON.stringify({ role: 'rrhh' }));
    fixture = TestBed.createComponent(SubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    subNumber = component.subscriptions.length;
    expect(subNumber).not.toEqual(0);
  });

  it('should expect subscriptions to be defined and not equal rrhh result', () => {
    localStorage.setItem('auth', JSON.stringify({ role: 'administrator' }));
    fixture = TestBed.createComponent(SubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.subscriptions.length).not.toEqual(subNumber);
  });
});
