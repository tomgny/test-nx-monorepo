import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyBuildableLibComponent } from './my-buildable-lib.component';

describe('MyBuildableLibComponent', () => {
  let component: MyBuildableLibComponent;
  let fixture: ComponentFixture<MyBuildableLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyBuildableLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyBuildableLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
