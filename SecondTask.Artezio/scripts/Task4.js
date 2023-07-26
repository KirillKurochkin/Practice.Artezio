var lastWordCount = 0;
var maxValue = 10;

function validInputWitchRestriction(el){
    var checkboxItem = document.getElementById("checkboxInputId");
    var sizeElement = el.value.length;

    if(!checkboxItem.checked)
    {
        validInput(el, 'remainingInputCharactersId');

        lastWordCount = sizeElement;
    }
    else
    {
        if(sizeElement <= maxValue)
        {
            validInput(el, "remainingInputCharactersId");
        }
        else 
        {
            if(sizeElement < lastWordCount)
            {
                validInput(el, 'remainingInputCharactersId');   

                lastWordCount = el.value.length;
            }
            else
            {
                el.value = el.value.slice(0, (lastWordCount - 1));
            }
        }
    }

    console.log("Проверка ввода");
}