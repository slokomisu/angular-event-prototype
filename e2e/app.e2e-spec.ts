import { EventAggregatorPage } from './app.po';

describe('event-aggregator App', () => {
  let page: EventAggregatorPage;

  beforeEach(() => {
    page = new EventAggregatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
