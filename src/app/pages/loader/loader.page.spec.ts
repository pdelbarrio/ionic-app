import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { LoaderPage } from './loader.page';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [LoaderPage],
  //     // Add any other dependencies and imports relevant to your component here
  //   }).compileComponents();

  //   fixture = TestBed.createComponent(LoaderPage);
  //   component = fixture.componentInstance;
  //   router = TestBed.inject(Router); // Use TestBed.inject to get the Router instance
  //   fixture.detectChanges();
  // });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderPage],
      imports: [IonicModule.forRoot(), AppRoutingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderPage);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to login page after load', fakeAsync(() => {
    spyOn(router, 'navigate');

    component.ngOnInit();
    tick(1500);
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  }));
});
