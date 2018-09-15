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
      this.descriptionText    = "Roman emperor from 161 to 180. He ruled with his adoptive brother, Lucius Verus, until Verus' death in 169, and with his son, Commodus, from 177. He was the last of the rulers traditionally known as the Five Good Emperors."
      ];
    
    //can replace with lodash - _.random(2) or _.random(0, 2)
    this.attributes = [
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
      this.protection     = Selector('#protection'),
      this.perks1         = Selector('#perks > div:nth-child(1) > div > div.selectize-input.items.not-full.has-options'),
      this.perks2         = Selector('#perks > div:nth-child(2) > div > div.selectize-input.items.not-full.has-options'),
      this.flaws1         = Selector('#flaws > div:nth-child(1) > div > div.selectize-input.items.not-full.has-options'),
      this.flwas2         = Selector('#flaws > div:nth-child(2) > div > div.selectize-input.items.not-full.has-options'),
      this.saveCharacter  = Selector('#save')
];
    
    this.perksDrop1 = [
  this.ageless                = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(1)'),
  this.artisan                = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(2)'),
  this.ascetic                = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(3)'),
  this.attractive             = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(4)'),
  this.brute                  = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(5)'),
  this.courageous             = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(6)'),
  this.crowdFavorite          = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(7)'),
  this.diseaseImmunity        = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(8)'),
  this.divinegent             = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(9)'),
  this.divineInsight          = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(10)'),
  this.earOfTheEmperor        = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(11)'),
  this.extraordinaryPresence  = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(12)'),
  this.fugitive               = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(13)'),
  this.idol                   = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(14)'),
  this.innocent               = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(15)'),
  this.jackOfAllTrades        = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(16)'),
  this.legendaryBloodline     = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(17)'),
  this.localHero              = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(18)'),
  this.lucky                  = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(19)'),
  this.merchant               = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(20)'),
  this.naturesAlly            = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(21)'),
  this.observant              = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(22)'),
  this.profession             = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(23)'),
  this.pureHearted            = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(24)'),
  this.resilient              = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(25)'),
  this.scavenger              = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(26)'),
  this.scent                  = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(27)'),
  this.scholar                = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(28)'),
  this.silverTongue           = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(29)'),
  this.stoneSense             = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(30)'),
  this.streetRat              = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(31)'),
  this.upperClass             = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(32)'),
  this.vagabond               = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(33)'),
  this.warriorsCode           = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(34)'),
  this.whispererOfTheWild     = Selector('#perks > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(35)')
    ];
    
    this.perksDrop2 = [
  this.ageless                = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(1)'),
  this.artisan                = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(2)'),
  this.ascetic                = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(3)'),
  this.attractive             = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(4)'),
  this.brute                  = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(5)'),
  this.courageous             = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(6)'),
  this.crowdFavorite          = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(7)'),
  this.diseaseImmunity        = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(8)'),
  this.divinegent             = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(9)'),
  this.divineInsight          = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(10)'),
  this.earOfTheEmperor        = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(11)'),
  this.extraordinaryPresence  = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(12)'),
  this.fugitive               = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(13)'),
  this.idol                   = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(14)'),
  this.innocent               = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(15)'),
  this.jackOfAllTrades        = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(16)'),
  this.legendaryBloodline     = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(17)'),
  this.localHero              = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(18)'),
  this.lucky                  = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(19)'),
  this.merchant               = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(20)'),
  this.naturesAlly            = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(21)'),
  this.observant              = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(22)'),
  this.profession             = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(23)'),
  this.pureHearted            = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(24)'),
  this.resilient              = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(25)'),
  this.scavenger              = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(26)'),
  this.scent                  = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(27)'),
  this.scholar                = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(28)'),
  this.silverTongue           = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(29)'),
  this.stoneSense             = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(30)'),
  this.streetRat              = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(31)'),
  this.upperClass             = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(32)'),
  this.vagabond               = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(33)'),
  this.warriorsCode           = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(34)'),
  this.whispererOfTheWild     = Selector('#perks > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(35)')
];

    this.flawsDrop1 = [
  this.absentMinded       = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(1)'),
  this.addiction          = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(2)'),
  this.ambitious          = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(3)'),
  this.bloodlust          = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(4)'),
  this.brash              = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(5)'),
  this.bravado            = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(6)'),
  this.cosmeticDeformity  = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(7)'),
  this.compulsion         = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(8)'),
  this.cowardly           = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(9)'),
  this.dimwitted          = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(10)'),
  this.disabled           = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(11)'),
  this.greedy             = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(12)'),
  this.honest             = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(13)'),
  this.hotTempered        = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(14)'),
  this.illiterate         = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(15)'),
  this.literalMinded      = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(16)'),
  this.moodDisorder       = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(17)'),
  this.naïve              = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(18)'),
  this.overt              = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(19)'),
  this.overweight         = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(20)'),
  this.pacifist           = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(21)'),
  this.phobia             = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(22)'),
  this.proud              = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(23)'),
  this.psychotic          = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(24)'),
  this.shortWinded        = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(25)'),
  this.sick               = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(26)'),
  this.sociallyAwkward    = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(27)'),
  this.stubborn           = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(28)'),
  this.uncoordinated      = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(29)'),
  this.vengeful           = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(30)'),
  this.zealous            = Selector('#flaws > div:nth-child(1) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(31)')
];
    
    this.flawsDrop2 = [
  this.absentMinded       = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(1)'),
  this.addiction          = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(2)'),
  this.ambitious          = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(3)'),
  this.bloodlust          = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(4)'),
  this.brash              = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(5)'),
  this.bravado            = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(6)'),
  this.cosmeticDeformity  = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(7)'),
  this.compulsion         = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(8)'),
  this.cowardly           = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(9)'),
  this.dimwitted          = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(10)'),
  this.disabled           = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(11)'),
  this.greedy             = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(12)'),
  this.honest             = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(13)'),
  this.hotTempered        = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(14)'),
  this.illiterate         = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(15)'),
  this.literalMinded      = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(16)'),
  this.moodDisorder       = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(17)'),
  this.naïve              = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(18)'),
  this.overt              = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(19)'),
  this.overweight         = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(20)'),
  this.pacifist           = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(21)'),
  this.phobia             = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(22)'),
  this.proud              = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(23)'),
  this.psychotic          = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(24)'),
  this.shortWinded        = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(25)'),
  this.sick               = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(26)'),
  this.sociallyAwkward    = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(27)'),
  this.stubborn           = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(28)'),
  this.uncoordinated      = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(29)'),
  this.vengeful           = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(30)'),
  this.zealous            = Selector('#flaws > div:nth-child(2) > div > div.selectize-dropdown.single.form-control.selectize.save > div > div:nth-child(31)')
];   

    
    this.archetypes = [
      'Spideren',
      'Stongman',
      'Human',
      'Werewolf'
    ];
    
    
  }
}
