import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JaduabayarbalikPage } from './jaduabayarbalik.page';

describe('JaduabayarbalikPage', () => {
  let component: JaduabayarbalikPage;
  let fixture: ComponentFixture<JaduabayarbalikPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JaduabayarbalikPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JaduabayarbalikPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
