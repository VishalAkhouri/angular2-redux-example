import { Angular2ReduxExamplePage } from './app.po';

describe('angular2-redux-example App', () => {
  let page: Angular2ReduxExamplePage;

  beforeEach(() => {
    page = new Angular2ReduxExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
