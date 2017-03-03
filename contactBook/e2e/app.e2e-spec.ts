import { ContactBookPage } from './app.po';

describe('contact-book App', () => {
  let page: ContactBookPage;

  beforeEach(() => {
    page = new ContactBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
