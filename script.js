'use strict';
let money, time, appData;

    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }

    appData = {
        budget: money,
        timeData: time,
        expenses: {}, 
        optionalExpenses: {},
        income: [],
        savings: true,
        chooseExpenses: function() {
            for (let i = 0; i < 2; i++){
                var a = prompt("Введите обязательную статью расходов в этом месяце"),
                    b = prompt("Во сколько обойдется");
            
                if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
                && a != "" && b != "" && a.length < 50) {
                    console.log("done");
                    appData.expenses[a] = b;
                } else {
                    i--;
                }
            
            }
        },
        detectDayBudget: function() {
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            alert("Ежедневный бюджет: " + appData.moneyPerDay);
        },
        detectLevel: function() {
            if(appData.moneyPerDay < 100) {
                console.log("Минимальный уровень достатка");
             } else if (appData.moneyPerDay >100 && appData.moneyPerDay < 2000) {
                console.log("Средний уровень достатка");
             } else if (appData.moneyPerDay > 2000) {
                console.log("Высокий уровень достатка");
             } else {
                console.log("Произошла ошибка");
             }
        },
        checkSavings: function() {
            if (appData.savings == true) {
                let save = +prompt("Какова сумма накоплений?"),
                    percent = +prompt("Под какой процент?");
                
                appData.monthIncome = save/100/12*percent;
                alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
            }
        },
        chooseOptExpenses: function() {
            for (let i = 1; i < 4; i++){
                var a = prompt("Статья необязательных расходов");
                    
                if ((typeof(a)) === "string" && (typeof(a)) != null  && a != ""  && a.length < 50) {
                    console.log("done");
                    appData.optionalExpenses[i] = a;
                } else {
                    i--;
                }
              }
        },
        chooseIncome: function(){
            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
            if ((typeof(items)) == "string" && (typeof(items)) != null && items != "") {
                console.log("Успешно");
            } else  {
              while (items == "" || items == null)  {
             alert("Вы ничего не ввели, либо ввели неправильно");
             items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
              }
            }
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();  
            let k = 1;
            appData.income.forEach(function (item) {
                alert("Способы доп. заработка: " + k + ": " + item);
                k++;
            });
        }
        
     };
     
for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + ": " + appData[key]);
}