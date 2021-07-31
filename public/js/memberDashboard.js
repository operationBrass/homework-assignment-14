const editPost = document.getElementsByClassName("fa-edit");
const delPost = document.getElementsByClassName("fa-trash-alt");
let postId = "";

for(i=0; i<editPost.length; i++)

{
    editPost[i].addEventListener("click",(e) => {console.log("edit click", e)
    e.stopPropagation();
    postId = "div-" + parseInt(e.target.id)

    const editBox = document.getElementById(postId);

    if(editBox.classList.contains("is-hidden"))
    {
        console.log("true")
        editBox.classList.remove("is-hidden");
    }
    else
    {
        editBox.classList.add("is-hidden");
    }
    
});


    delPost[i].addEventListener("click",(e) => {console.log("delete click", e)
    e.stopPropagation();
    postId = "div-" + parseInt(e.target.id)
});



}


