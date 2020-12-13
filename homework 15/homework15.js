document.getElementById('btn').disabled = true;
var x, y, changeTable;

function checkParams(){
    x = +document.getElementById('X').value;
    y = +document.getElementById('Y').value;
    if(x && y){
        document.getElementById('btn').disabled = false;
    }
    else document.getElementById('btn').disabled = true;
}

function createTable(event){
    if(!((x ^ 0) === x) || !x || x < 1 || x > 10){
        alert('Ошибка введите целое Х в интервале от 1 до 10');
        return;
    }

    if(!((y ^ 0) === y) || !y || y < 1 || y > 10){
        alert('Ошибка введите целое Y в интервале от 1 до 10');
        return;
    }

    var checkTable = document.getElementsByTagName('table')[0];
    if(checkTable != undefined){
        checkTable.parentNode.removeChild(checkTable);
    }

    var td = '<td class="td"></td>',
        tableStr = '',
        tableHTML = '',
        table = document.createElement('table');

    for(i = 0; i < y; i++){
        for(j = 0; j < x; j++){
            tableStr += td;
        }
        tableHTML += '<tr>' + tableStr + '</tr>';
        tableStr = '';
    }
    table.innerHTML = tableHTML;
    document.body.appendChild(table);
    paint(table);
    
}

function paint(table){
    if(x%2 != 0){
        for(i = 0; i < table.getElementsByTagName('td').length; i++){
            if(i%2 == 0){
                table.getElementsByTagName('td')[i].classList.toggle('black');
            } 
            }
        } else {
            for(i = 0; i < y; i++){
                for(j = 0; j < x; j++){
                    if(i%2 == 0){
                        if(j%2 != 0){
                            table.getElementsByTagName('td')[x*i+j].classList.toggle('black');
                            }
                    }
                    else{
                        if(j%2 == 0){
                            table.getElementsByTagName('td')[x*i+j].classList.toggle('black');
                        }
                    }
                }
            }
    }
    changeTable = document.getElementsByTagName('table')[0];
    changeTable.addEventListener('click',colorChange,false);
}


function colorChange() {
    for(i = 0; i < changeTable.getElementsByTagName('td').length; i++){
        changeTable.getElementsByTagName('td')[i].classList.toggle('black');
    }
};