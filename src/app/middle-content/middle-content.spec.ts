import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleContent } from './middle-content';

describe('MiddleContent', () => {
  let component: MiddleContent;
  let fixture: ComponentFixture<MiddleContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiddleContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddleContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
