
function quickSort(array, start, end) {
  if (start === undefined) {
    start = 0;
    end = array.length - 1;
  } else if (start >= end) {
    return array;
  }
  var rStart = start, rEnd = end;
  var pivot = array[Math.floor(Math.random() * (end - start + 1) + start)];
  while (start < end) {
    while (array[start] <= pivot) {
      start++;
    }
    while (array[end] > pivot) {
      end--;
    }
    if (start < end) {
      var temp = array[start];
      array[start] = array[end];
      array[end] = temp;
    }
  }
  quickSort(array, rStart, start - 1);
  quickSort(array, start, rEnd);
}



function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i != min) {
      [arr[i], arr[min]] = [arr[min], arr[i]]
    }
  }
  return arr
}




function insertionSort2(arr) {
  let i, j, temp;
  for (let i = 0; i < arr.length; i++) {
    j = i;
    while (arr[j] > arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      j--;
    }

  }
}



function insertionSort(arr) {
  let i, key, j;
  for (i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

function quickSort2(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const unsortedArray = [5, 2, 9, 3, 6, 8, 1, 7];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);

const apikey = '46f80a02ecae410460d59960ded6e1c6';

const weatherDataEl = document.getElementById('weather-data');
const cityInputEl = document.getElementById('city-input');
const formEl = document.querySelector('form');

formEl.addEventLIstener('submit', (e) => {
  e.preventDefault();
  const cityValue = cityInputEl.ariaValueMax;
  getWeatherData(cityValue);
});


async function getWeatherData(cityValue) {
  try {
    const reponse = await fetch(

    )
  }
}
