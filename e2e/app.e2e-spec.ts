import { CheckOrgPage } from './app.po';

describe('check-org App', () => {
  let page: CheckOrgPage;

  beforeEach(() => {
    page = new CheckOrgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
