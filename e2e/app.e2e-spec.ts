import { MaterialdashboardAngularPage } from './app.po';

describe('material-dashboard-angular App', () => {
  let page: MaterialdashboardAngularPage;

  beforeEach(() => {
    page = new MaterialdashboardAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
