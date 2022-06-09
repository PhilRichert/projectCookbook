const shareButton = document.querySelectorAll("#share");

for (let i = 0; i < shareButton.length; i++) {
    shareButton[i].addEventListener("click", ()=>{
        alert("OK!");
    })
    
}