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