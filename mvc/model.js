const fs = require('fs/promises');
const { EOL } = require('os');
const { question } = require('readline-sync');

class Base {
  // свойство квиз с массивом объектов - ключ - вопрос, значение - ответ
  constructor(quiz) {
    this.quiz = quiz;
  }

  async getQuiz(fileName) {
    // открываем файл
    const readingFile = await fs.readFile(`./topics/${fileName}`, 'utf-8');
    // массив строк
    const arrString = readingFile.split(EOL);

    // массив объектов {вопрос: ..., ответ: ...}
    const arrObj = [];
    for (let i = 0; i < arrString.length - 2; i += 3) {
      const obj = {};
      obj.question = arrString[i];
      obj.answer = arrString[i + 1];
      arrObj.push(obj);
    }
    this.quiz = arrObj;
    return arrObj;
  }
}

module.exports = Base;
