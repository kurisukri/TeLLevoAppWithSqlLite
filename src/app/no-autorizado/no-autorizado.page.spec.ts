import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoAutorizadoPage } from './no-autorizado.page';

describe('NoAutorizadoPage', () => {
  let component: NoAutorizadoPage;
  let fixture: ComponentFixture<NoAutorizadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoAutorizadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoAutorizadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
