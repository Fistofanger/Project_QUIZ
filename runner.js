const View = require('./mvc/view');
const Quiz = require('./mvc/controller');

// const names = [
//   'nighthawk_flashcard_data.txt',
//   'otter_flashcard_data.txt',
//   'raccoon_flashcard_data.txt',
// ];

async function start() {
  // const question = 'Привет. Как дела?';

  // const { selectedTopic } = await View.selectTopic(names);
  // const { playerAnswer } = await View.inputAnswer(question);
  // console.log(selectedTopic);
  // console.log(playerAnswer);

  const newGame = new Quiz();
  await newGame.getQuizList();

  await newGame.selectCurrentQuiz(newGame.quizList);
}

start();
