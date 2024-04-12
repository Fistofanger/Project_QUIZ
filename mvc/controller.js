const fs = require('fs/promises');
const path = require('path');
const View = require('./view');
const Base = require('./model');
const play = require('play-sound')();

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

  async playQuiz(numb) {
    const playingQuiz = new Base();
    const ArrOfQAndA = await playingQuiz.getQuiz(this.quizList[numb]);
    let correctAnswers = 0;

    for (let i = 0; i < ArrOfQAndA.length; i += 1) {
      const { playerAnswer } = await View.inputAnswer(ArrOfQAndA[i].question);
      if (playerAnswer === ArrOfQAndA[i].answer) {
        correctAnswers += 1;
        View.consoleMessage('\nПравильно\n');
      } else {
        View.consoleMessage(
          `\nНе верно. Правильный ответ ${ArrOfQAndA[i].answer}\n`
        );
      }
      this.points = correctAnswers * 10;
    }
    this.quizList.splice(numb, 1);
  }

  playMusic(numb) {
    play.play('./sounds/1.mp3', (err) => {
      if (err) {
        console.log('Ошибка воспроизведения звука');
      }
    });
  }
}

module.exports = Quiz;
