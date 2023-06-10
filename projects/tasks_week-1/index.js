/* ДЗ 1 - Функции */

/*
 Задание 1:

 1.1: Добавьте к функции параметр с любым именем
 1.2: Функция должна возвращать аргумент, переданный в параметре

 Пример:
   returnFirstArgument(10) вернет 10
   returnFirstArgument('привет') вернет `привет`

 Другими словами: функция должна возвращать в неизменном виде то, что поступает ей на вход
 */

function returnFirstArgument(arg) {
  return arg;
};

const result = returnFirstArgument('Кабан');

console.log(result);

/*
 Задание 2:

 2.1: Функция должна возвращать сумму переданных аргументов

 Пример:
   sumWithDefaults(10, 20) вернет 30
   sumWithDefaults(2, 4) вернет 6

 2.2 *: Значение по умолчанию для второго аргумента должно быть равно 100

 Пример:
   sumWithDefaults(10) вернет 110
 */

// 2.1
function sum(...someargs) {
  let result = 0;
  for (i = 0; i < someargs.length; i++) {
    result = result + someargs[i];
  }
  return result
}

const testLog = sum(14, 27, 88);
console.log(testLog);


// 2.2
function sumWithDefaults(a, b = 100) {
  return a + b;
}

const testLog100 = sumWithDefaults(154);
console.log(testLog100);

/*
 Задание 3:

 Функция должна принимать другую функцию и возвращать результат вызова этой функции

 Пример:
   returnFnResult(() => 'привет') вернет 'привет'
 */
function returnFnResult(returnedFn) {
  return returnedFn();
}

/*
 Задание 4:

 Функция должна принимать число и возвращать новую функцию (F)
 При вызове функции F, переданное ранее число должно быть увеличено на единицу и возвращено из F

 Пример:
   var f = returnCounter(10);

   console.log(f()); // выведет 11
   console.log(f()); // выведет 12
   console.log(f()); // выведет 13
 */


function returnCounter(a = 0) {
  return () => a++;
}

var f = returnCounter(16);

console.log(f())
console.log(f())
console.log(f())

/*
 Задание 5 *:
 
 Функция должна возвращать все переданные ей аргументы в виде массива
 Количество переданных аргументов заранее неизвестно
 
 Пример:
   returnArgumentsArray(1, 2, 3) вернет [1, 2, 3]
 */
function returnArgumentsArray(...args) {
  return args;
};

console.log(returnArgumentsArray(1, 2, 3))


export {
  returnFirstArgument,
  sumWithDefaults,
  returnArgumentsArray,
  returnFnResult,
  returnCounter,
};