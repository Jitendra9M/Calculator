const screen = document.getElementById("sub1");
const all = Array.from(document.getElementsByClassName("subanother"));
all.map(button =>{
    button.addEventListener("click",(e) => {
        switch(e.target.innerText){
            case "AC":
                screen.innerText ="";
                break;
            case "«":
                if(screen.innerText){
                    screen.innerText = screen.innerText.slice(0,-1);
                }
                  break;  
            case "=":
                try{
                    screen.innerText = eval(screen.innerText);
                }catch{
                    screen.innerText = "ERROR!!"
                }
                
                break;      
            default:
                screen.innerText += e.target.innerText;
        }
    })
});
