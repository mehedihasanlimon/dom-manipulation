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
//task 4a
$('addtext4').click(function(event){
    var parragraph =$('<p>').text('hello world')
    $('#task4a').append(parragraph)
})

//task 4b
function changeBG(event){
    var color =event.target.innerText.toLowercase();
    $('body').css('background-Color',color)
}
//4c
$('#sum').click(function(event)
{
    var sum = Number($('#num1').val())+Number ($('#num2').val())
    $('#answer').text(sum)
})