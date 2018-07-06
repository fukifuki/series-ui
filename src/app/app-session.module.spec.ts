import { AppSessionModule } from './app-session.module';

describe('AppSessionModule', () => {
  let appSessionModule: AppSessionModule;

  beforeEach(() => {
    appSessionModule = new AppSessionModule();
  });

  it('should create an instance', () => {
    expect(appSessionModule).toBeTruthy();
  });
});
