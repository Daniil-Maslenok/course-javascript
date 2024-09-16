/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:
 */

function forEach(array, fn) {
  for (i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// forEach([1, 2, 3, 4], (el) => console.log(el))

/*
 Задание 2:
 */

function map(array, fn) {
  const newArray = [];

  for (const [ix, el] of array.entries()) {
    newArray.push(fn(el, ix, array))
  }

  return newArray;
}

/*
 Задание 3:
 */

function reduce(array, fn, initial) {
  let startIndex = 0;
  let all = initial;

  if (initial === undefined) {
    startIndex = 1;
    all = array[0];
  }

  for (let i = startIndex; i < array.length; i++) {
    all = fn(all, array[i], i, array);
  }

  return all
}

/*
 Задание 4:
 */

function upperProps(obj) {
  return Object.keys(obj).map(k => k.toUpperCase())
}

export { forEach, map, reduce, upperProps };
