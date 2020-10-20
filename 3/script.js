var a = +prompt('Введите первое число');
var b = +prompt('Введите второе число');
var c = +prompt('Введите третье число');

if (a > b && a > c){
    if(b > c){
        alert(b);
    }else if(c > b){
        alert(c);
    }

}else if(b > a && b > c ){
    if(a > c){
        alert(a);
    }else if(c > a){
        alert(c);
    }
}else if(c > a && c > a){
    if(a > b){
        alert(a);
    }else if(b > a){
        alert(b);
    }
}else{
    alert('Ошибка');
}
