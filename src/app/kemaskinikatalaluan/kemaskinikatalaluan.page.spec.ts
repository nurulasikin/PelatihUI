import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KemaskinikatalaluanPage } from './kemaskinikatalaluan.page';

describe('KemaskinikatalaluanPage', () => {
  let component: KemaskinikatalaluanPage;
  let fixture: ComponentFixture<KemaskinikatalaluanPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KemaskinikatalaluanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KemaskinikatalaluanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
