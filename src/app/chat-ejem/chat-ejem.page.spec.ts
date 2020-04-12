import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatEjemPage } from './chat-ejem.page';

describe('ChatEjemPage', () => {
  let component: ChatEjemPage;
  let fixture: ComponentFixture<ChatEjemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatEjemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatEjemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
