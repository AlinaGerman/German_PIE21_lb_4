alert('Вывод арифметической прогрессии');
var n=prompt('Количество чисел (<=10)', '');
if (Number(n)%1==0 && Number(n)>1){
    if (Number(n)>10){
        alert('Количетво чисел должно быть меньше или равно 10');
    } else{
        var a=prompt('Первый член арифметической прогрессии', '');
        var d=prompt('Разность арифметической прогрессии', '');
        if (!isNaN(Number(a)) && !isNaN(Number(d)) && a!='' && d!=''){
            var arithm_progression=[];
            for (let i=0;i<Number(n);i++){
                arithm_progression.push(Number(a)+Number(d)*i);
            }
            alert('Арифметическая прогрессия: '+arithm_progression.join(' '));
        } else{
            alert('Первый член и разность арифметической прогрессии должны быть числами');
        }
    }
} else{
    alert('Неверно введено количество чисел');
}