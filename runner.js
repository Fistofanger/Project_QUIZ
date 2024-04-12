/* eslint-disable no-await-in-loop */
const Quiz = require('./mvc/quiz');
const View = require('./mvc/view');
const Base = require('./mvc/model');

async function start() {
  const playingQuiz = new Base();
  const newGame = new Quiz();
  await newGame.getQuizList();
  do {
    await newGame.selectCurrentQuiz(newGame.quizList);

    const ArrOfQAndA = await playingQuiz.getQuiz(
      newGame.quizList[newGame.currentQuiz]
    );
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
      newGame.points = correctAnswers * 10;
    }
    newGame.quizList.splice(newGame.currentQuiz, 1);

    View.consoleMessage(`\n Поздравляю! Ты заработал ${newGame.points}\n`);
    const { playerAnswer } = await View.inputAnswer(
      'Хочешь пройти другой quiz?'
    );
    if (playerAnswer !== 'да') newGame.quizList = [];
  } while (newGame.quizList.length !== 0);
}

start();
