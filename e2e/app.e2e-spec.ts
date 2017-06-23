import { StamproPage } from './app.po';

describe('stampro App', () => {
  let page: StamproPage;

  beforeEach(() => {
    page = new StamproPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
