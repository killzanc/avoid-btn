const btn = document.getElementById("btn");

function random (min, max){
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand)
}

btn.addEventListener('mouseenter' , ()=>{
    btn.style.left = `${random(0, 90)}%`;
    btn.style.top = `${random(0, 90)}%`;

})

btn.addEventListener('click', ()=>{
    alert('Damn! You did it, its crazy dude');
})