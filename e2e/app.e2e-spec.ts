import {PdFreeAngularcliPage} from './app.po';

describe('pd-free-angularcli App', () => {
  let page: PdFreeAngularcliPage;

  beforeEach(() => {
    page = new PdFreeAngularcliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    // @ts-ignore
    expect(page.getParagraphText()).toEqual(`Welcome to app!!`);
  });
});
