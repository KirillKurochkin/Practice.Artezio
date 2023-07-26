function getCount(el)
{
    var count = el.value.length;
    var answer = document.getElementById("countId");
    answer.innerHTML = count;
}