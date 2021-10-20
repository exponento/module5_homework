// Задание №1

function namber1() {
   let vvod = prompt('Введите число');
   vvod = + vvod;
   if (isNaN(vvod)){
      alert('Упс, кажется, вы ошиблись')
   } else if (vvod % 2 === 0){
      alert('Число четное')
   } else{
      alert('Число не четное')
   }
}

// Задание №2

function namber2(){
   let x = 8;
   if (typeof x == "number"){
      console.log('x - число')
   } else if(typeof x == "string"){
      console.log('x - строка')
   } else if(typeof x == "boolean"){
      console.log('x - логический тип')
   } else {
      console.log('x - не определен')
   }

}

// Задание №3

function namber3(){
   let str = prompt('Введите слово, которое нужно перевернуть');
   let len;
   let rever;
   let res;
   len = str.length;
   res = '';
   for (i = len-1; i >= 0; i--){
      rever = str.slice(i,i+1);
      res = res + rever;
   }
   alert('Результат: ' + str + '-> ' + res);
}

// Задание №4

function namber4(){
   let random = Math.round(Math.random()*100);
   alert('Выпавшее число в диапазоне 0-100: ' + random);
}

// Задание №5

function namber5(){
   const arr = [3, 5, 12, 15, 87, 62, 3, 84, 25];
   console.log('количество элементов массива: ' + arr.length);
   for (let i = 0; i < arr.length; i++){
      console.log('Элемент ' + [i] + ': ' + arr[i])
   }
}

// Задание №6

function namber6(){
   const arr = [4, 6, 5, 7];
   let srav;
   let srav2;
   let index;
   let index2;
   let rez;
   for (let i = 0; i < arr.length; i++){
      srav = arr[i];
      index = i;
      for (let i = 0; i < arr.length; i++){
         srav2 = arr[i];
         index2 = i;
         if (index == index2){
         } else if(srav == srav2){
            rez = arr[i]
         } else {
         }
      }
   }
   if (rez != undefined){
      console.log('В массиве имеется дубль: значение - ' + rez)
   } else{
      console.log('В массиве нет дублей')
   }
}

// Задание №7

function namber7(){
   const arr = [4, 6, 8, 1, 5, 3, 'hello', null];
   let chet = 0;
   let nechet = 0;
   let str = 0;
   let obj = 0;
   for (let i = 0; i < arr.length; i++){
      if (typeof arr[i] == "string"){
         str = str + 1
      } else if(typeof arr[i] == "object"){
         obj = obj + 1
      } else if (arr[i] % 2 === 0){
         chet = chet + 1;
      } else {
         nechet = nechet + 1;
      }
   }
   console.log(' В массиве ', arr.length, 'Элементов, из них: ', chet, 'Четных;', nechet, 'Нечетных;', str, 'Строчный;', obj, 'Null')
}

// Задание №8

function namber8(){
   let myMap = new Map();
   myMap.set('зеленое','яблоко');
   myMap.set('orange', 'orange');
   myMap.set('region', 26);
  for (let i of myMap.keys()){
    console.log('Ключ -', i, 'значение -',myMap.get(i))
  }
   
}

