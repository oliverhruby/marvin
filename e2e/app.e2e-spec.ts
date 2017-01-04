import { Acai2Page } from './app.po';

describe('acai2 App', function() {
  let page: Acai2Page;

  beforeEach(() => {
    page = new Acai2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
