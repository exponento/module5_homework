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