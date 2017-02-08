import { MdDynamicTabsPage } from './app.po';

describe('md-dynamic-tabs App', function() {
  let page: MdDynamicTabsPage;

  beforeEach(() => {
    page = new MdDynamicTabsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
