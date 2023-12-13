let display=document.getElementById('display');
function btn(value)
{
    display.value +=value;
}

function symbol(symbol) {
    display.value += symbol;
}

function c()
{
    display.value ='';
}

function backspace()
{
    display.value = display.value.slice(0,-1);
}
function result()
{
    display.value = eval(display.value);
}

