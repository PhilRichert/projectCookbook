const shareButton = document.querySelectorAll("#share");

shareButton.forEach(e=>{
    e.addEventListener("click", ()=>{
        alert("OK!");
    })
})