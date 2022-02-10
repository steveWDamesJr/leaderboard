import './styles.css';
import { getScores, setScores } from './modules/api.js';

const inputForm = document.querySelector('#input-form');
const user = document.querySelector('#inputName');
const score = document.querySelector('#inputScore');
inputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const obj = {};
  obj.user = user.value;
  obj.score = score.value;
  setScores(obj);
  inputForm.reset();
});

const render = async () => {
  const list = await getScores();
  const scoreList = document.querySelector('.score-list');
  scoreList.innerHTML = '';
  list.forEach((obj) => {
    scoreList.innerHTML += `<li>${obj.user}: ${obj.score}</li>`;
  });
};
render();

const refreshList = document.querySelector('#refresh');
refreshList.addEventListener('click', render);