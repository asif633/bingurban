import { BongurbanPage } from './app.po';

describe('bongurban App', () => {
  let page: BongurbanPage;

  beforeEach(() => {
    page = new BongurbanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
