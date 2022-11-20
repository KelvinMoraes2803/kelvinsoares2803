const el = document.querySelector("#text");
const text = "O MELHOR CARRO DO MUNDO!";
const interval = 200;

function showtext(el, text, interval){
    const char= text.split("").reverse();

    const typer = setInterval(()  =>{
        if(!char.length){
            return clearInterval(typer);
        }
        const next = char.pop();
        
        el.innerHTML +=next;

    }, interval);

}
showtext(el, text, interval);
