import { MarvinPage } from './app.po';

describe('marvin App', function() {
  let page: MarvinPage;

  beforeEach(() => {
    page = new MarvinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
