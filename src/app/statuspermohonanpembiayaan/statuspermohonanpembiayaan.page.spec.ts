import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatuspermohonanpembiayaanPage } from './statuspermohonanpembiayaan.page';

describe('StatuspermohonanpembiayaanPage', () => {
  let component: StatuspermohonanpembiayaanPage;
  let fixture: ComponentFixture<StatuspermohonanpembiayaanPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StatuspermohonanpembiayaanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatuspermohonanpembiayaanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
