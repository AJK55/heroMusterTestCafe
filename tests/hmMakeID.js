import { Selector} from 'testcafe'
import { ClientFunction } from 'testcafe';

var text = "";
var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export default class Makeid {
  constructor() {
this.makeID = 
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};


