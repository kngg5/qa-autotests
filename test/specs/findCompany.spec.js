const assert = require('assert');

describe('Search Test', function() {
  it('should find the company named "YM AGENCY"', async()=> {
    // Navigate to the site
    browser.url('http://167.114.201.175:5000/');
    await browser.pause(10000);

    const loginField = await  $('input[name="userName"');
    await loginField.setValue("Admin");

    const passwordField = await  $('input.password');
    await passwordField.setValue("Admin@Navi");
    await $('button[type="submit"]').click();
    await browser.pause(2000);

    // Find and click the link with class ".crm-navigation__link .current-page"
    const link = $('.crm-navigation__link .current-page');
    link.click('[href="http://167.114.201.175:5000/companies"]');
    
    // Find the search input and enter the search query "YM AGENCY"
    const searchInput = $('#crm_query');
    searchInput.setValue('AGENCY');
    await browser.pause(5000);
    // Submit the search query
    const searchButton = $('.bold.mat-button');
    searchButton.click();
    await browser.pause(5000);
    // Wait for the search results to load
    const searchResults = $('.crm-navigator-table');
    searchResults.waitForDisplayed();
    await browser.pause(5000);

    // Check if the search results contain the company named "YM AGENCY"
    const searchResultItems = $$('.search-result');
    const companyNames = searchResultItems.map(item => item.$('.search-result__name').getText());
    assert.ok(companyNames.includes('YM AGENCY'), 'expected to find YM AGENCY in search results');
  });
});
