const displayBtn = document.querySelector('#display');

displayBtn.addEventListener('click', fetchFruits);

function fetchFruits() {
  fetch('http://localhost:3000/fruits/')
    .then((resp) => resp.json())
    .then(addFruit);
}

function addFruit(data) {
  const fruitList = document.querySelector('#fruits');
  const fruits = data;
  fruitList.textContent = '';

  fruits.forEach((fruit) => {
    const li = document.createElement('li');
    li.textContent = fruit.name;
    fruitList.appendChild(li);
  });
}

const form = document.getElementById('fruitForm');

form.addEventListener('submit', createFruit);

async function createFruit(e) {
  e.preventDefault();
  console.log(e.target.fruit.value);

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: e.target.fruit.value
    })
  };

  const response = await fetch('http://localhost:3000/fruits/', options);

  if (response.status == 201) {
    e.target.fruit.value = '';
  }
}
