import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFormulaireComponent } from './chat-formulaire.component';
import {FormsModule} from '@angular/forms';

describe('ChatFormulaireComponent', () => {
  let component: ChatFormulaireComponent;
  let fixture: ComponentFixture<ChatFormulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatFormulaireComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
