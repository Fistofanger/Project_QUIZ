const View = require('./mvc/view');

const names = [
  'nighthawk_flashcard_data.txt',
  'otter_flashcard_data.txt',
  'raccoon_flashcard_data.txt',
];

async function start() {
  const question = 'Привет. Как дела?';

  const { selectedTopic } = await View.selectTopic(names);
  const { playerAnswer } = await View.inputAnswer(question);
  console.log(selectedTopic);
  console.log(playerAnswer);
}

start();
