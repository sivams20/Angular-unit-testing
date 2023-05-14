import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call increment metod and emit value', () => {
    const count = 2;
    const incButton = fixture.nativeElement.querySelector('.increment');
    component.count = count;
    spyOn(component.newItemEvent, 'emit');
    incButton.click();
    expect(component.newItemEvent.emit).toHaveBeenCalledWith(3);
  });

  it('should call decrement metod and emit value', () => {
    const count = 2;
    const decButton = fixture.nativeElement.querySelector('.decrement');
    component.count = count;
    spyOn(component.newItemEvent, 'emit');
    decButton.click();
    expect(component.newItemEvent.emit).toHaveBeenCalledWith(1);
  });
});
