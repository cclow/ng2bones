import { AppComponent } from './app.component';
import {TestBed, async} from "@angular/core/testing";
describe('App', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [],
      providers: []
    })
  );
  it ('should work', async(() => {
    TestBed.overrideComponent(AppComponent, {
      set: {
        // template: `<div>Modified</div>`,
      }
    });
    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      // Add real test here
      expect(app).toBeDefined();
    });
  }));
});
