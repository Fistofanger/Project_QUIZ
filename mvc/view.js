const inquirer = require('inquirer');

class View {
  static selectTopic(arr) {
    const result = inquirer.prompt([
      {
        type: 'rawlist',
        name: 'selectedTopic',
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
        name: 'playerAnswer',
        message: `${question}\n Ваш ответ:`,
        default: 'Введите ваш ответ маленькими русскими буквами',
      },
    ]);
    return result;
  }
}

module.exports = View;
