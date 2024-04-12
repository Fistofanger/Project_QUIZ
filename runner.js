const View = require('./mvc/view');

const names = [
  'nighthawk_flashcard_data.txt',
  'otter_flashcard_data.txt',
  'raccoon_flashcard_data.txt',
];

const question = 'Привет. Как дела?';

const selectedTopic = View.inputAnswer(question);
// console.log(selectedTopic);
