import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is opened$/, function () {
  browser.url("https://www.google.com");
  browser.pause(70000);
  let ele = $(`[Aceito]`);
  ele.click;
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(`>> searchItem: ${searchItem}`);
  let ele = await $(`[name=q]`);
  await ele.setValue(searchItem);
  await browser.keys("Enter");
});

Then(/^Click on the first search result$/, async function () {
  let ele = await $(`<h3>`);
  ele.click;
});

When(/^URL should match (.*)$/, async function (expectedURL) {
  console.log(`>> ExpectedURL: ${expectedURL}`);
  let url = await browser.getUrl();
  chai.expect(url).to.equal(expectedURL);
});
