import { GaUiPage } from './app.po';

describe('ga-ui App', () => {
  let page: GaUiPage;

  beforeEach(() => {
    page = new GaUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
