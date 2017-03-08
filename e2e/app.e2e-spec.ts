import { Angular2xProjectPage } from './app.po';

describe('angular2x-project App', () => {
  let page: Angular2xProjectPage;

  beforeEach(() => {
    page = new Angular2xProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
