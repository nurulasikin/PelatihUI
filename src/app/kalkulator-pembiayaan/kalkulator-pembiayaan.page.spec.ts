import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KalkulatorPembiayaanPage } from './kalkulator-pembiayaan.page';

describe('KalkulatorPembiayaanPage', () => {
  let component: KalkulatorPembiayaanPage;
  let fixture: ComponentFixture<KalkulatorPembiayaanPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KalkulatorPembiayaanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KalkulatorPembiayaanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
