let elmentsUnRead = document.getElementsByClassName('unread');
let tagCount = document.getElementById('count')
let count;

function countUpdate(){
    count = elmentsUnRead.length;
    tagCount.innerHTML = count;
}
countUpdate();

function read(event){
   let element = event.currentTarget;
   element.classList.remove('unread');
   countUpdate();
}

function allRead(){
    while(elmentsUnRead){
        elmentsUnRead[0].classList.remove('unread')   
        countUpdate();
    }
}