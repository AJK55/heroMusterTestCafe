import { Selector} from 'testcafe'
import Page from './hmPageModel';
import Functions from './hmPMFunctions';
const page = new Page();
const func = new Functions();

var _       = require('lodash');
var moment  = require('moment');

fixture('HeroMuster Chracter Builder Form 2')
  .page(page.homeURL)
    .beforeEach( async t => {
    console.log('starting....' + moment().format('MMMM Do YYYY, h:mm:ss a'));
    })
    .afterEach( async t => {
    console.log('ending....' + moment().format('MMMM Do YYYY, h:mm:ss a'));
    });


test('Confirm Page 2', async t=> {
  await t
    .expect(func.getPageUrl()).eql(page.homeURL)
  await t
    .expect(page.pageTitle.innerText).eql(page.homePageTitle)
  await t
    .expect(page.pageHeader.innerText).eql(page.pageHeaderText)
});

test('Complete Form 2', async t=> {
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
  await t
    .typeText(page.archetype, page.archetypes[Math.floor(Math.random()*page.archetypes.length)])
  //randomly selects from page.archetypes = page.archetypes[Math.floor(Math.random()*page.archetypes.length)];
  await t
    .typeText(page.level, page.levelText.toString())
  await t
    .typeText(page.description, page.descriptionText)
  await t
    .typeText(page.agility, _.random(0, 2).toString())
  await t
    .typeText(page.fortitude, _.random(2).toString())
  await t
    .typeText(page.might, _.random(0, 2).toString())
  await t
    .typeText(page.learning, _.random(2).toString())
  await t
    .typeText(page.logic, _.random(0, 2).toString())
  await t
    .typeText(page.perception, _.random(2).toString())
  await t
    .typeText(page.will, _.random(2).toString())
  await t
    .typeText(page.deception, _.random(2).toString())
  await t
    .typeText(page.persuasion, _.random(2).toString())
  await t
    .typeText(page.presence, _.random(2).toString())
  await t
    .typeText(page.alteration, _.random(2).toString())
  await t
    .typeText(page.creation, _.random(2).toString())
  await t
    .typeText(page.energy, _.random(2).toString())
  await t
    .typeText(page.entropy, _.random(2).toString())
  await t
    .typeText(page.influence, _.random(2).toString())
  await t
    .typeText(page.movement, _.random(2).toString())
  await t
    .typeText(page.prescience, _.random(2).toString())
  await t
    .typeText(page.protection, _.random(2).toString())
  await t
    .click(page.perks1)
    .click(page.perksDrop1[Math.floor(Math.random()*page.perksDrop1.length)]) 
  await t
    .click(page.perks2)
    .click(page.perksDrop2[Math.floor(Math.random()*page.perksDrop2.length)]) 
  await t
    .click(page.flaws1)
    .click(page.flawsDrop1[Math.floor(Math.random()*page.flawsDrop1.length)])
  await t
    .click(page.flwas2)
    .click(page.flawsDrop2[Math.floor(Math.random()*page.flawsDrop2.length)])
  await t
    .click(page.saveCharacter)
    .wait(10000)

});