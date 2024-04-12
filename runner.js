const Quiz = require('./mvc/controller');
const View = require('./mvc/view');

async function start() {
  const newGame = new Quiz();
  await newGame.getQuizList();
  do {
    await newGame.selectCurrentQuiz(newGame.quizList);
    await newGame.playQuiz(newGame.currentQuiz);
    View.consoleMessage(`\n Поздравляю! Ты заработал ${newGame.points}\n`);
    const { playerAnswer } = await View.inputAnswer(
      'Хочешь пройти другой quiz?'
    );
    if (playerAnswer !== 'да') newGame.quizList = [];
  } while (newGame.quizList.length !== 0);
}

start();
