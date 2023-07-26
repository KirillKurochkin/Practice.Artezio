function validInput(el, textareaId){
    var answer = document.getElementById(textareaId);
    var value = 10 - el.value.length;

    if(value < 0)
    {
        answer.style.color = "red";
        answer.innerHTML = "&#10006 Превышено символов: " + value * (-1);
    }
    else 
    {
        answer.style.color = "black";
        answer.innerHTML = "Отсталось символов: " + value;
    }

    console.log("Проверка ввода");
    console.log(answer)
}