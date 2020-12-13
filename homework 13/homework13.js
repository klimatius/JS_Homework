var addRow = document.getElementsByClassName('addRow')[0];
document.body.onload = function createButton()
{
    var button = document.createElement('input');
    button.type = 'button';
    addRow.appendChild(button);
    button.value = 'ADD ROW';
    button.id = 'button';
}

addRow.onclick = function(){
    var container = document.getElementById('table');
    var line = document.createElement('tr');
    line.innerHTML = '<td></td><td></td><td></td>'; 
    container.insertBefore(line, container.children[0]);
}

table.onclick = function(event) {
    event.target.innerHTML='<input type="text" onkeydown="checkKey(event)">';
};

function checkKey(event) {
        if(event.keyCode == '13') {
                event.target.blur();

        }
}

