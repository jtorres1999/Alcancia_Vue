import { Component } from '@angular/core';
import { ModelMoney, ProcessMoneyService } from './service/process-money.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PruebaFront';

  public moneyObj: ModelMoney  = new ModelMoney();

  constructor(private processMoneyService: ProcessMoneyService) {

  }

  addMoney(moneyStr: string, money: number) {
    const result = this.processMoneyService.addMoney(moneyStr, money);
    if(typeof result === 'object') {
      this.moneyObj = result;
      return;
    }
    //REPORTAR MSJ
  }
}
