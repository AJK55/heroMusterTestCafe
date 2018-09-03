import { Selector} from 'testcafe'
import Functions from './hmPMFunctions';

const func = new Functions();

export default class Page {
  constructor() {
    
    this.pageURLs = [
      this.homeURL        = 'https://openlegend.heromuster.com/character'
    ];
    
    this.pageData = [
      this.homePageTitle      = 'Character Builder: Open Legend RPG | HeroMuster',
      this.pageHeaderText     = 'Open Legend Character Builder',
      this.playerNameText     = "Test" + Math.random().toString(36).substr(2, 5),
      this.characterNameText  = "Test" + Math.random().toString(36).substr(2, 5),
      this.levelText          = func.randomInt(1, 90),
      this.descriptionText    = "Roman emperor from 161 to 180. He ruled with his adoptive brother, Lucius Verus, until Verus' death in 169, and with his son, Commodus, from 177. He was the last of the rulers traditionally known as the Five Good Emperors.",
      this.agilityValue       = func.randomInt(0, 2),
      this.fortitudeValue     = func.randomInt(0, 2),
      this.mightValue         = func.randomInt(0, 2),
      this.learningValue      = func.randomInt(0, 2),
      this.logicValue         = func.randomInt(0, 2),
      this.perceptionValue    = func.randomInt(0, 2),
      this.willValue          = func.randomInt(0, 2),
      this.deceptionValue     = func.randomInt(0, 2),
      this.persuasionValue    = func.randomInt(0, 2),
      this.presenceValue      = func.randomInt(0, 2),
      this.alterationValue    = func.randomInt(0, 2),
      this.creationValue      = func.randomInt(0, 2),
      this.energyValue        = func.randomInt(0, 2),
      this.entropyValue       = func.randomInt(0, 2),
      this.influenceValue     = func.randomInt(0, 2),
      this.movementValue      = func.randomInt(0, 2),
      this.prescienceValue    = func.randomInt(0, 2),
      this.protectionValue    = func.randomInt(0, 2),
      
    ];
    
    this.pageElements = [
      this.pageTitle      = Selector('title'),
      this.pageHeader     = Selector('body > div:nth-child(4) > article > h1 > span.translate'),
      this.playerName     = Selector('#playername'),
      this.characterName  = Selector('#charactername'),
      this.archetype      = Selector('#archetype'),
      this.level          = Selector('#level'),
      this.description    = Selector('#description'),
      this.agility        = Selector('#agility'),
      this.fortitude      = Selector('#fortitude'),
      this.might          = Selector('#might'),
      this.learning       = Selector('#learning'),
      this.logic          = Selector('#logic'), 
      this.perception     = Selector('#perception'), 
      this.will           = Selector('#will'), 
      this.deception      = Selector('#deception'),
      this.persuasion     = Selector('#persuasion'),
      this.presence       = Selector('#presence'), 
      this.alteration     = Selector('#alteration'),
      this.creation       = Selector('#creation'),
      this.energy         = Selector('#energy'), 
      this.entropy        = Selector('#entropy'), 
      this.influence      = Selector('#influence'), 
      this.movement       = Selector('#movement'), 
      this.prescience     = Selector('#prescience'), 
      this.protection     = Selector('#protection')
];
    
    this.archetypes = [
      'Spideren',
      'Stongman',
      'Human',
      'Werewolf'
    ];
    
    
  }
}
