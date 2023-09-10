function send () {
    
    let sendEmail = document.createElement('p');
    let sendComenent = document.createElement('p');
    let commentDate = document.createElement('p');
    let breakLineEmail = document.createElement('br');
    let breakLineComment = document.createElement('br');
    let breakLine = document.createElement('br');
    let breakLineFinal = document.createElement('br');
    let hr = document.createElement('hr')
    
    let div = document.querySelector('div');
    let inputEmail = document.querySelector('#email');
    let textArea = document.querySelector('#area');
    let textAreaValue = textArea.value;

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    month = month < 10 ? `0${month + 1}` : `${month + 1}`;
    day = day < 10? `0${day}` : `${day}`;
    hours = hours < 10 ? `0${hours}` : `${hours}`;
    minute = minute < 10 ? `0${minute}` : `${minute}`;
    seconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    
    sendEmail.innerHTML = `&#128231; ${inputEmail.value}`;
    commentDate.innerHTML = `&#128347; ${day}/${month}/${year} às ${hours}:${minute}:${seconds}`
    sendComenent.innerHTML = `&#128172; ${textAreaValue}`;
    
    div.appendChild(sendEmail);
    div.appendChild(breakLineEmail);
    div.appendChild(commentDate);
    div.appendChild(breakLineComment);
    div.appendChild(sendComenent);
    div.appendChild(breakLine)
    div.appendChild(hr)
    div.appendChild(breakLineFinal);

    inputEmail.value = ' ';
    textArea.value = ' ';

    
    

}






document.querySelector('.send').addEventListener('click',send)