var term = {
  Canada: 10,
  Germany: 13,
  Spain: 22
  }

  let sumTempreture = 0;
  let count = 0
  let sum = 0
  let max = 0

  for (let i in term) {
      count++
      sumTempreture += term[i];
  }
  
  sum = sumTempreture/count;  
       for (let i in term) {
           if (term[i] > max) {
           max = term[i]; }
       };
document.write('<span class="sp">'+"Среднее значение:"+sum+'</span>');
document.write('<br><span class="sp">'+"Максимальное значение: "+max+'</span>');
   
  