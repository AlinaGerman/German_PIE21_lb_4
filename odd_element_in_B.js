alert('Переписать числа с нечетным порядковым номером в новый массив');
var arr=prompt('Введите числа через пробел', '').split(' ');
check=true;
for (let i=0;i<arr.length;i++){
    if (!isNaN(Number(arr[i]))){
        if (arr[i]==''){
            alert('В массиве есть пропуски');
            check=false;
            break;
        }
    }else{
        check=false;
        alert('В массиве присутствует не число');
        break;
    } 
}
if (check==true){
    var b=[];
    for (let i=0;i<arr.length;i++){
        if ((i+1)%2!=0){
            b.push(Number(arr[i]));
        }
    }
    alert('Длина: '+b.length);
    alert('Новый массив: '+b.join(' '));
}