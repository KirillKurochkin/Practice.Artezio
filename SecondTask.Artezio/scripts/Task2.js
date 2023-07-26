function getCount(el)
{
    var count = el.value.length;
    var answer = document.getElementById("countId");
    answer.innerHTML = count;
}

function getSecondCount(el)
{
    var count = el.value.length;
    var answer = document.getElementById("secondCountId");
    console.log("Количество символов");
    answer.innerHTML = count;
    console.log(answer);
}

function getWordsCount(el)
{
    var wordCountArray = el.value.split(' ');
    var answer = document.getElementById("wordCountId");
    answer.innerHTML = wordCountArray.length;

    console.log("Количество слов");
    console.log(answer);
}

function getStringCount(el)
{
    var wordCountRowArray = el.value.split('\n');
    var answer = document.getElementById("stringCountId");
    answer.innerHTML = wordCountRowArray.length;

    console.log("Количество строк");
    console.log(answer);
}

function getAllCount(el)
{
    getSecondCount(el);
    getWordsCount(el);
    getStringCount(el);
}