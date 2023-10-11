function steve()
{
    let div = document.getElementById("test")
    let p = document.createElement("p");
    p.innerText = "Moto Moto";
    div.appendChild(p);
    let a = document.getElementById('audio')
    a.play()
    console.log('hi')
}
