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