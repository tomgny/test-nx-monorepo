import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyNonBuildableLibComponent } from './my-non-buildable-lib.component';

describe('MyNonBuildableLibComponent', () => {
  let component: MyNonBuildableLibComponent;
  let fixture: ComponentFixture<MyNonBuildableLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyNonBuildableLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyNonBuildableLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
