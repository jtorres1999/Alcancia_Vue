import { Injectable } from '@angular/core';

export class ModelMoney {
    money_50: Coin;
    money_100: Coin;
    money_200: Coin;
    money_500: Coin;
    money_1000: Coin;
    total: Coin;

    constructor(){
      this.money_50 = new Coin;
     
      this.money_100 =new Coin;
      this.money_200 =new Coin;
      this.money_500 =new Coin;
      this.money_1000 =new Coin;
      this.total =new Coin;
      
    }
}

export class Coin {
  totalCoin: number;
  totalMoney: number;
  constructor(){
    this.totalCoin = 0;
    this.totalMoney = 0;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProcessMoneyService {

  private moneyObj: any = new ModelMoney();

  constructor() {}

  public addMoney(moneyStr: string, money: number): ModelMoney|boolean {
    if(!this.validateProperty(moneyStr)){
      return false;
    }
    this.moneyObj[moneyStr].totalCoin += 1;
    this.moneyObj[moneyStr].totalMoney += money;
    this.moneyObj.total.totalCoin += 1;
    this.moneyObj.total.totalMoney += money
    return this.moneyObj;
  }

  private validateProperty(property: string): boolean {
    const obj = new ModelMoney();
    if(!obj.hasOwnProperty(property)){
      return false;
    }
    return true;
  }
}
