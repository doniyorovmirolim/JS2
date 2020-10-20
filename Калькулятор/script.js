var a = +prompt('Введите первое число');
var b = +prompt('Введите второе число');
var c = prompt('Введите оператор или символ(+  -  *  /  %)');

if (c == '+' ){
    alert(a + b);
}else if(c == '-'){
    alert(a - b);
}else if(c == '*') {
    alert(a * b);
}else if(c == '/'){
    alert(a / b);
}else if(c == '%'){
    alert(a % b);
}else{
    alert('Ошибка')
}