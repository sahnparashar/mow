import { FetchModule } from './fetch.module';

describe('FetchModule', () => {
  let fetchModule: FetchModule;

  beforeEach(() => {
    fetchModule = new FetchModule();
  });

  it('should create an instance', () => {
    expect(fetchModule).toBeTruthy();
  });
});
