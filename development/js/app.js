document.addEventListener('DOMContentLoaded',function () {
    var btn = document.querySelector("button");
    var articleform=document.querySelector('.form');
    var articleformLogIn = document.querySelector(".formLogIn");
    var aName=document.querySelector('a.aName');
    var errorMessage=document.querySelector('.errorMessage');



    if(localStorage.getItem("name")!==null) {
        articleform.classList.add("hide");
        articleformLogIn.classList.remove("hide");
        var icon='<i class="far fa-user-circle"></i>'; //ikona przy imieniu
        aName.innerHTML=localStorage.getItem("name")+icon;
    }
    btn.addEventListener('click', function (event) {
        if(document.getElementById("name").value.length<=0)
        {
            errorMessage.innerText="Nazwa użytkownika musi zawierać conajmniej jeden znak";
            event.preventDefault();
        }
        else {
            var userName = document.getElementById("name").value;
            localStorage.setItem("name", userName);
            articleform.classList.add("hide");
            articleformLogIn.classList.remove("hide");
            location.reload();
        }
    });

});