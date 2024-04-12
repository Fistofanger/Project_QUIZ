const inquirer = require('inquirer');

class View {
  static selectTopic(arr) {
    const result = inquirer.prompt([
      {
        type: 'list',
        name: 'chooseGame',
        message: 'Выбери тему quiz',
        choices: arr,
        filter(value) {
          return value.toLowerCase();
        },
      },
    ]);
    return result;
  }

  static inputAnswer(question) {
    const result = inquirer.prompt([
      {
        type: 'input',
        name: 'answer',
        message: `${question}\n Ваш ответ:`,
        default: 'Введите ваш ответ маленькими русскими буквами',
      },
    ]);
    return result;
  }
}

module.exports = View;
