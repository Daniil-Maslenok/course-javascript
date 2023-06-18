/* ДЗ 3 - работа с исключениями и отладчиком */

/*
 Задание 1:
 */

function isAllTrue(array, fn) {

  if (!Array.isArray(array) || array.length === 0) {
    throw new Error("empty array");
  }

  if (typeof fn !== "function") {
    throw new Error("is not a function");
  }

  for (const el of array) {
    if (!fn(el)) {
      return false;
    }
  }

  return true
}

/*
 Задание 2:
 */

function isSomeTrue(array, fn) {

  if (!Array.isArray(array) || array.length === 0) {
    throw new Error("empty array");
  }

  if (typeof fn !== "function") {
    throw new Error("is not a function");
  }

  for (const el of array) {
    if (fn(el)) {
      return true;
    }
  }

  return false
}


/*
 Задание 3:
 
 3.1: Функция returnBadArguments принимает заранее неизвестное количество аргументов, первым из которых является функция fn
 returnBadArguments должна поочередно запустить fn для каждого переданного аргумента (кроме самой fn)
 
 3.2: returnBadArguments должна вернуть массив аргументов, для которых fn выбросила исключение
 
 3.3: Необходимо выбрасывать исключение в случаях:
   - fn не является функцией (с текстом "fn is not a function")
     для проверки на функцию вам может помочь оператор typeof
 */
function returnBadArguments(fn, ...args) {
  if (typeof fn !== "function") {
    throw new Error("fn is not a function");
  }

  const badArguments = [];

  for (const arg of args) {
    try {
      fn(arg);
    } catch (e) {
      badArguments.push(arg)
    }
  }

  return badArguments;
}

/*
 Задание 4:
 */
function calculator(number = 0) {
  if (typeof number !== "number") {
    throw new Error("number is not a number");
  }

  return {
    sum(...args) {
      return args.reduce((all, current) => all + current, number)
    },
    dif(...args) {
      return args.reduce((all, current) => all - current, number)
    },
    div(...args) {
      for (const arg of args) {
        if (arg === 0) {
          throw new error("division by 0");
        }
      }
      return args.reduce((all, current) => all / current, number)
    },
    mul(...args) {
      return args.reduce((all, current) => all * current, number)
    },
  }
}

/* При решении задач, постарайтесь использовать отладчик */

export { isAllTrue, isSomeTrue, returnBadArguments, calculator };
