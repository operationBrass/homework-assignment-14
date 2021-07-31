const replyVisible = document.getElementById("replyVisible");
const replyTA= document.getElementById("ReplyTA");
const replyDiv = document.getElementById("replyDiv");


replyVisible.addEventListener("click",() => {

if ( replyDiv.classList.contains("is-hidden") )
{
    replyDiv.classList.remove("is-hidden");
}
else
{
    replyDiv.classList.add("is-hidden");
}

});





