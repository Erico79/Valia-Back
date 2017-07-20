import { ValiaBackPage } from './app.po';

describe('valia-back App', () => {
  let page: ValiaBackPage;

  beforeEach(() => {
    page = new ValiaBackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
