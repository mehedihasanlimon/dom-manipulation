/* Task 1 */
var heading = document.getElementById('heading')
console.log(heading.innerText)

/* Task 2 using plain JavaScript */
//task 2A
var textBtn =document.getElementById('textBtn2')
textBtn.addEventListener('click',function(){
    
    var task2 = document.getElementById('task2a')
    var paragraph =document.createElement('p')
    paragraph.innerText ="hello world"
    task2.appendChild(paragraph)
})

//task 2b
function changeBGcolor(event){
    var body =document.getElementsByTagName('body')[0]
    if(event.target.innerText=="Red"){
        body.style.backgroundColor= 'red';
    }
    if(event.target.innerText=="Green"){
        body.style.backgroundColor= 'green';
    }
}
//task 2c

function redirectToGoogle(){
    window.location.assign('http://google.com')
}
/* Task 4 using jQuery */
//task 4
$ ('#addtext4').click(function(event){
    
    var paragraph = $('<p>').text('hello world')
    $('#task4').append(paragraph)
})