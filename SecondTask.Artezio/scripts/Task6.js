const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");

const today = new Date();

function getNowData(el){
    const date = document.getElementById("nowTimeId");
    date.innerHTML = today;
}

for(let date = today.getFullYear(); date >= 1900; date--)
{
    const option = document.createElement('option');
    option.value = date;
    option.text = date + 'г.';

    year.append(option);
}

for(let monthNum = 1; monthNum <= 12; monthNum++)
{
    const date = new Date();
    date.setMonth(monthNum  - 1);
    
    var monthName = date.toLocaleString('ru-ru',{
        month: 'long',
    });

    const option = document.createElement('option');
    option.value = monthNum;
    option.text = monthName;

    month.append(option);
}

for(let monthNum = 1; monthNum <= 12; monthNum++){
    const date = new Date();
    date.setMonth(monthNum-1);
    var monthName = date.toLocaleString('ru-ru',{
        month: 'long',
    });

    const option = document.createElement('option');
    option.value = monthNum;
    option.text = monthName;

    month.append(option);
}

addDays(1);

function getDaysInMonth(monthNum){
    return new Date(0,monthNum,0).getDate();
}

function addDays(monthNum){
    for (let days = 1; days <= getDaysInMonth(monthNum); days++) {
    const option = document.createElement('option');
    option.value = days;
    option.text = days;

    day.append(option);
    }
}

function dropDays(){
    var length = day.options.length;

    var length = day.options.length;
    for (i = length-1; i >= 0; i--) {
        day.options[i] = null;
    }
}

month.onchange = function(){
    let index = month.selectedIndex;
    let option = month.options; 
    let value = option[index].value;

    let dayIndex = day.selectedIndex;

    dropDays();
    addDays(value);

    if(dayIndex <= getDaysInMonth(value)){
        day.selectedIndex = dayIndex;
    }
}