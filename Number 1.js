let vvod = prompt('Введите число');
   vvod = + vvod;
   if (isNaN(vvod)){
      alert('Упс, кажется, вы ошиблись')
   } else if (vvod % 2 === 0){
      alert('Число четное')
   } else{
      alert('Число не четное')
   }