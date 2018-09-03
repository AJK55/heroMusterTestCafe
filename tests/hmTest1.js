import { Selector} from 'testcafe'
import Page from './hmPageModel';
import Functions from './hmPMFunctions';
//import MakeID from './hmMakeID';

const page = new Page();
const func = new Functions();
//const mkid = new Makeid();

fixture('HeroMuster Chracter Builder Form')
  .page(page.homeURL);

test('Confirm Page', async t=> {
  await t
    .expect(func.getPageUrl()).eql(page.homeURL)
  await t
    .expect(page.pageTitle.innerText).eql(page.homePageTitle)
  await t
    .expect(page.pageHeader.innerText).eql(page.pageHeaderText)
});

test('Complete Form', async t=> {
  await t
    .expect(func.getPageUrl()).eql(page.homeURL)
  await t
    .expect(page.pageTitle.innerText).eql(page.homePageTitle)
  await t
    .expect(page.pageHeader.innerText).eql(page.pageHeaderText)
  await t
    .typeText(page.playerName, page.playerNameText)
  await t
    .typeText(page.characterName, page.characterNameText)
});