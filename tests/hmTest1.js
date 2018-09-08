import { Selector} from 'testcafe'
import Page from './hmPageModel';
import Functions from './hmPMFunctions';

const page = new Page();
const func = new Functions();

//randomly selects from page.archetypes = page.archetypes[Math.floor(Math.random()*page.archetypes.length)];

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
  await t
    .typeText(page.archetype, page.archetypes[Math.floor(Math.random()*page.archetypes.length)])
  //randomly selects from page.archetypes = page.archetypes[Math.floor(Math.random()*page.archetypes.length)];
  await t
    .typeText(page.level, page.levelText.toString())
  await t
    .typeText(page.description, page.descriptionText)
  await t
    .typeText(page.agility, page.agilityValue.toString())
  await t
    .typeText(page.fortitude, page.fortitudeValue.toString())
  await t
    .typeText(page.might, page.mightValue.toString())
  await t
    .typeText(page.learning, page.learningValue.toString())
  await t
    .typeText(page.logic, page.logicValue.toString())
  await t
    .typeText(page.perception, page.perceptionValue.toString())
  await t
    .typeText(page.will, page.willValue.toString())
  await t
    .typeText(page.deception, page.deceptionValue.toString())
  await t
    .typeText(page.persuasion, page.persuasionValue.toString())
  await t
    .typeText(page.presence, page.presenceValue.toString())
  await t
    .typeText(page.alteration, page.alterationValue.toString())
  await t
    .typeText(page.creation, page.creationValue.toString())
  await t
    .typeText(page.energy, page.energyValue.toString())
  await t
    .typeText(page.entropy, page.entropyValue.toString())
  await t
    .typeText(page.influence, page.influenceValue.toString())
  await t
    .typeText(page.movement, page.movementValue.toString())
  await t
    .typeText(page.prescience, page.prescienceValue.toString())
  await t
    .typeText(page.protection, page.protectionValue.toString())
  await t
    .click(page.perks1)
    .click(page.perks[Math.floor(Math.random()*page.perks.length)])  
  await t
    .click(page.perks2)
    
});