/* eslint-disable no-await-in-loop */
const fs = require('fs/promises');
const path = require('path');
const View = require('./view');

const pathToFile = path.join('./topics');

class Quiz {
  constructor(quizList = [], currentQuiz = 0, points = 0) {
    this.quizList = quizList;
    this.currentQuiz = currentQuiz;
    this.points = points;
  }

  async getQuizList() {
    this.quizList = await fs.readdir(pathToFile);
  }

  async selectCurrentQuiz(arr) {
    const resArr = arr.map((el) => el.split('_')).map((el) => el[0]);
    const { selectedTopic } = await View.selectTopic(resArr);
    arr.forEach((el, i) => {
      if (el.includes(selectedTopic)) {
        this.currentQuiz = i;
      }
    });
  }

  //   playMusic(numb) {
  //     play.play('./sounds/1.mp3', (err) => {
  //       if (err) {
  //         console.log('Ошибка воспроизведения звука');
  //       }
  //     })
  //   }
}

module.exports = Quiz;
