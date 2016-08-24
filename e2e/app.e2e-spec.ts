import { AngularDirectivesExamplePage } from './app.po';

describe('angular-directives-example App', function() {
  let page: AngularDirectivesExamplePage;

  beforeEach(() => {
    page = new AngularDirectivesExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
