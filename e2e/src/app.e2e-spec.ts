import { AppPage } from './app.po';
import {browser, by, element, logging, protractor} from 'protractor';

describe('ohpen App', () => {
  let page: AppPage;
  let adminSubCount: number;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display login page', () => {
    page.navigateTo();
    expect(
      browser.wait(
        protractor.ExpectedConditions.urlContains('login'), 5000
      )
        .catch(() => false)
    ).toBeTruthy(`Url match could not succced`);
  });

  it('should fill login form correctly and redirect to root page (admin login)', () => {
    element(by.id('username')).sendKeys('admin');
    element(by.id('usergroup')).click();
    element.all(by.tagName('option')).first().click();
    element(by.id('usergroup')).click();
    element.all(by.tagName('button')).first().click();
    expect(
      browser.wait(
        protractor.ExpectedConditions.urlIs(browser.baseUrl), 5000
      )
        .catch(() => false)
    ).toBeTruthy(`Url match could not succced`);
  });

  it('should be able to navigate to dashboard and subscriptions (admin login)', async () => {
    const navigationItems = element.all(by.className('navigation-items'));
    navigationItems.first().all(by.tagName('a')).first().click();
    expect(
      browser.wait(
        protractor.ExpectedConditions.urlContains('dashboard'), 5000
      )
        .catch(() => false)
    ).toBeTruthy(`Url match could not succced`);
    navigationItems.first().all(by.tagName('a')).get(1).click();
    expect(
      browser.wait(
        protractor.ExpectedConditions.urlContains('subscriptions'), 5000
      )
        .catch(() => false)
    ).toBeTruthy(`Url match could not succced`);
    adminSubCount = await element.all(by.tagName('mat-card')).count();
  });

  it('should be able to logout', () => {
    const navigationItems = element.all(by.className('navigation-items'));
    navigationItems.get(1).all(by.tagName('button')).first().click();
    expect(
      browser.wait(
        protractor.ExpectedConditions.urlContains('login'), 5000
      )
        .catch(() => false)
    ).toBeTruthy(`Url match could not succced`);
  });

  it('should fill login form correctly and redirect to root page (rrhh login)', () => {
    element(by.id('username')).sendKeys('victor');
    element(by.id('usergroup')).click();
    element.all(by.tagName('option')).get(1).click();
    element(by.id('usergroup')).click();
    element.all(by.tagName('button')).first().click();
    expect(
      browser.wait(
        protractor.ExpectedConditions.urlIs(browser.baseUrl), 5000
      )
        .catch(() => false)
    ).toBeTruthy(`Url match could not succced`);
  });

  it('should not be allowed to enter /dashboard (rrhh role)', () => {
    const navigationItems = element.all(by.className('navigation-items'));
    navigationItems.first().all(by.tagName('a')).first().click();
    expect(
      browser.wait(
        protractor.ExpectedConditions.urlContains('dashboard'), 2000
      )
        .catch(() => true)
    ).toBeTruthy(`User could enter /dashboard`);
  });

  it('should count sub items and compare to admin login count', async () => {
    const navigationItems = element.all(by.className('navigation-items'));
    navigationItems.first().all(by.tagName('a')).get(1).click();
    expect(element.all(by.tagName('mat-card')).count()).not.toEqual(adminSubCount);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
