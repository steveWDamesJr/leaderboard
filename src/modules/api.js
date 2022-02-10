const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/uVgJkr65ujFhWC2pGzJ/scores';

const getScores = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.result;
};

const setScores = async (obj) => {
  const response = await fetch(`${apiUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(obj),
  });
  await response.json();
};

export { getScores, setScores };