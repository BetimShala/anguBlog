import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getParagraphText()).toEqual('Welcome to anguBlog!');
=======
    expect(page.getParagraphText()).toEqual('Welcome to ng6!');
>>>>>>> bddc966ab2f28060f08a87d4f24d8a98fa5c802f
  });
});
