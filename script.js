(function(){
    let urlParams = new URLSearchParams(window.location.search);
    let user = urlParams.get("username");
    let infoBlock = document.getElementById('info');
    fetch(`https://api.github.com/users/${user}`)
    .then(res=>res.json())
    .then(data=>{

        if(data.message !=="Not Found"){
           
            let HTMLuser = document.createElement('a');
            HTMLuser.innerHTML = data.login;
            HTMLuser.setAttribute('href', data.html_url)
            console.log(data);
            infoBlock.appendChild(HTMLuser);
            
            let HTMLbio= document.createElement('p');
            HTMLbio.innerHTML = data.bio;
            infoBlock.appendChild(HTMLbio);
            
            let HTMLavatar = document.createElement('img');
            HTMLavatar.setAttribute('src', data.avatar_url);
            HTMLavatar.setAttribute('alt', `Аватарка пользователя ${data.login}`);
            infoBlock.appendChild(HTMLavatar);

        } else{
            let errHTML = document.createElement('p');
            errHTML.innerHTML = 'Такого пользователя нет!';
            infoBlock.appendChild(errHTML);
        }
    })
    .catch((err)=>{
        })
})(); 
