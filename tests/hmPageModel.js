import { Selector} from 'testcafe'

export default class Page {
  constructor() {
    
    this.pageURLs = [
      this.homeURL        = 'https://openlegend.heromuster.com/character'
    ];
    
    this.pageData = [
      this.homePageTitle      = 'Character Builder: Open Legend RPG | HeroMuster',
      this.pageHeaderText     = 'Open Legend Character Builder',
      this.playerNameText     =  Math.random().toString(36).substr(2, 10),
      this.characterNameText  =  Math.random().toString(36).substr(2, 10)
    ];
    
    this.pageElements = [
      this.pageTitle      = Selector('title'),
      this.pageHeader     = Selector('body > div:nth-child(4) > article > h1 > span.translate'),
      this.playerName     = Selector('#playername'),
      this.characterName  = Selector('#charactername')
];
    
  }
}
