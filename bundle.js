(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgZGlzcGxheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXNwbGF5Jyk7XG5cbmRpc3BsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmZXRjaEZydWl0cyk7XG5cbmZ1bmN0aW9uIGZldGNoRnJ1aXRzKCkge1xuICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2ZydWl0cy8nKVxuICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcbiAgICAudGhlbihhZGRGcnVpdCk7XG59XG5cbmZ1bmN0aW9uIGFkZEZydWl0KGRhdGEpIHtcbiAgY29uc3QgZnJ1aXRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZydWl0cycpO1xuICBjb25zdCBmcnVpdHMgPSBkYXRhO1xuICBmcnVpdExpc3QudGV4dENvbnRlbnQgPSAnJztcblxuICBmcnVpdHMuZm9yRWFjaCgoZnJ1aXQpID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkudGV4dENvbnRlbnQgPSBmcnVpdC5uYW1lO1xuICAgIGZydWl0TGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gIH0pO1xufVxuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZydWl0Rm9ybScpO1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGNyZWF0ZUZydWl0KTtcblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlRnJ1aXQoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnNvbGUubG9nKGUudGFyZ2V0LmZydWl0LnZhbHVlKTtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG5hbWU6IGUudGFyZ2V0LmZydWl0LnZhbHVlXG4gICAgfSlcbiAgfTtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvZnJ1aXRzLycsIG9wdGlvbnMpO1xuXG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAxKSB7XG4gICAgZS50YXJnZXQuZnJ1aXQudmFsdWUgPSAnJztcbiAgfVxufVxuIl19
