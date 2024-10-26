document.getElementById("button1").addEventListener("click", function() {
    let number = document.getElementById('number');
    addSquare(number.value);
});
document.getElementById("button2").addEventListener("click", function() {
    let number = document.getElementById('number');
    addTriangle(number.value)
});
document.getElementById("button3").addEventListener("click", function() {
    let number = document.getElementById('number');
    addCircle(number.value)
});
function addSquare (number) {
    for (let i = 0; i < number; i++) 
        {  
            let div = document.createElement('div');
            div.setAttribute('class', 'square');
            div.style.top = String(Math.random()*350) + 'px';
            div.style.left = String(Math.random()*350) + 'px';
            div.style.width = String(Math.random()*1000) + 'px';
            div.style.height = div.style.width;
            div.addEventListener('click', Color);
            div.addEventListener('dblclick', del);
            document.querySelector(".center").appendChild(div);
        }
}
function addTriangle (number) {
    for (let i = 0; i < number; i++) 
    {  
        let div = document.createElement('div');
        div.setAttribute('class', 'triangle');
        div.style.top = String(Math.random()*350+Math.random()*350) + 'px';
        div.style.left = String(Math.random()*350+Math.random()*350) + 'px';
        div.addEventListener('click', ColorTriangle);
        div.addEventListener('dblclick', del);
        document.querySelector(".center").appendChild(div);
    }
}
function addCircle (number) {
    for (let i = 0; i < number; i++) 
    {  
        let div = document.createElement('div');
        div.setAttribute('class', 'circle');
        div.style.top = String(Math.random()*350) + 'px';
        div.style.left = String(Math.random()*350) + 'px';
        div.style.width = String(Math.random()*1000) + 'px';
        div.style.height = div.style.width;
        div.addEventListener('click', Color);
        div.addEventListener('dblclick', del);
        document.querySelector(".center").appendChild(div);
    }
}
function Color (event) {
    event.target.style.background = '#ffff1a';
}
function ColorTriangle (event) {
    event.target.style.borderBottomColor = '#ffff1a';
}
function del(event) {
    event.target.style.display = 'none';
}