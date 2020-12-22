(document.getElementsByTagName('button')[0]).onclick = function(){
    if(!document.getElementsByClassName('tablinks')[0]){
        var xhr = new XMLHttpRequest(),
            users = [];

        if(localStorage.getItem('users')){
            users = JSON.parse(localStorage.getItem('users'));
            tabsPaint(users);
        } 
        else{
            xhr.open('GET', 'https://reqres.in/api/users?page=2', true); 

            xhr.send();
            
            xhr.onload = function() {
               
            var statusType = +String(this.status)[0];
                if (statusType === 2) {
                    try{
                        users = JSON.parse(this.response).data;
                        //users = JSON.parse('aaaa');
                        localStorage.setItem('users',JSON.stringify(users));
                        tabsPaint(users);
                    }catch(error){
                        if(!document.getElementsByTagName('h2')[0]){
                            var errorMessage = document.createElement('h2');
                            errorMessage.innerText = 'Волей судеб, а может это звёзды так расположились, может это нелепый поворот судьбы или глупое стечение обстоятельств, но у нас проблемки с загрузкой данных Т_Т';
                            document.getElementsByTagName('button')[0].before(errorMessage);
                        }
                }}
            };
        }
    }
}


function tabsPaint(users){
    var usersTabs = '<div class="tab">';

    for(i = 0; i < users.length; i++){
        usersTabs += '<button class="tablinks" onclick="openUser(event, ' + users[i].id + ')"> User ' + (i+1) + '</button>';
    }

    for(i = 0; i < users.length; i++){
        usersTabs += '<div id="' + users[i].id + '" class="tabcontent"><img class="image" src="' + users[i].avatar + '"><div class="name"> <br><br>First Name: ' + users[i].first_name + '<br>Last Name: ' + users[i].last_name + '</div></div>';
    }

    var tabs = document.createElement('div');
    tabs.innerHTML = usersTabs;
    document.getElementsByTagName('button')[0].before(tabs);

    document.getElementById(users[0].id).style.display = 'block';
    document.getElementsByClassName('tablinks')[0].className += ' active';
}


function openUser(evt, id) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    document.getElementById(id).style.display = 'block';
    evt.currentTarget.className += ' active';
}

