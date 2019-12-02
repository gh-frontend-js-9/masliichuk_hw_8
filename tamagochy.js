'use strict';

class Tamagochy{
  constructor (name, isHardLevel){
    this.name = name;
    this.lifeTime = 0; // seconds

    if (isHardLevel) {
      this.maxStatValue = 70;
      this.decreaseStatValue = -5;
    } else {
      this.maxStatValue = 100;
      this.decreaseStatValue = -3;
    }

    this.food = this._generateRandomNumber(50, this.maxStatValue);
    this.clean = this._generateRandomNumber(50, this.maxStatValue);
    this.happiness = this._generateRandomNumber(50, this.maxStatValue);

    let parent = this;
    this.gameTimer = setInterval(function () {
      parent._decreaseStats();
      parent.lifeTime += 5;
    }, 5000);

  }

  stopGame(){
    clearInterval(this.gameTimer);
  }

  _generateRandomNumber = function(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  _decreaseStats = function(){
    this._updateStat('food',this.decreaseStatValue);
    this._updateStat('clean',this.decreaseStatValue);
    this._updateStat('happiness',this.decreaseStatValue);

    this._say(`Food: ${this.food}`);
    this._say(`Clean: ${this.clean}`);
    this._say(`Happiness: ${this.happiness}`);
  }

  _say = function(msg){
    console.log("%c"+ this.name + " says: " + msg, 'background: #222; color: #bada55');
    // alert(this.name + " says: " + msg);
  }

  _updateStat = function(statName, value){
    this[statName] += value;
    if (this[statName] > this.maxStatValue) { this[statName] = this.maxStatValue; }
    if (this[statName] < 0) { this[statName] = 0; }
  }

  isEndGame() {
    return (this.food === 0 || this.clean === 0 || this.happiness === 0);
  }

  getFoodValue(){
    return this.food;
  }

  getCleanValue(){
    return this.clean;
  }

  getHappinessValue(){
    return this.happiness;
  }

  getLifeTime(){
    return this.lifeTime;
  }

  eat(){
    this._updateStat('food',30);
    this._updateStat('clean',-20);
  }

  wash(){
    this._updateStat('clean',40);
    this._updateStat('happiness',-20);
  }

  run(){
    this._updateStat('happiness',15);
    this._updateStat('food',-10);
  }


}
