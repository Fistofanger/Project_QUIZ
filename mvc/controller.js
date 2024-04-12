const fs = require('fs/promises');
const path = require('path');
const View = require('./view');

const pathToFile = path.join('./topics');

class Quiz {
  constructor(quizList = [], currentQuiez = 0) {
    this.quizList = quizList;
    this.currentQuiez = currentQuiez;
  }

  async getQuizList() {
    this.quizList = await fs.readdir(pathToFile);
  }

  async selectCurrentQuiz(arr) {
    const resArr = arr.map((el) => el.split('_')).map((el) => el[0]);
    const { selectedTopic } = await View.selectTopic(resArr);
    arr.forEach((el, i) => {
      if (el.includes(selectedTopic)) {
        this.currentQuiez = i;
      }
    });
    this.quizList.splice(this.currentQuiez, 1);
  }
}

module.exports = Quiz;
