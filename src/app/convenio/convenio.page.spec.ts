import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConvenioPage } from './convenio.page';

describe('ConvenioPage', () => {
  let component: ConvenioPage;
  let fixture: ComponentFixture<ConvenioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvenioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConvenioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
