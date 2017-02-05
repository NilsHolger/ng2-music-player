import { Ng2MusicPlayer1Page } from './app.po';

describe('ng2-music-player1 App', function() {
  let page: Ng2MusicPlayer1Page;

  beforeEach(() => {
    page = new Ng2MusicPlayer1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
