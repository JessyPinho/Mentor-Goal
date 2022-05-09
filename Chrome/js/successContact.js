function SucessContact(divContent)
{
    var divDad = document.createElement("div");
    divDad.setAttribute("class","Fenetre_Succes");

    var divChild1 = document.createElement("div");
    divChild1.setAttribute("class","contenu");


    var img = document.createElement("img");
    img.src = chrome.runtime.getURL("icons/checkmark-circle-outline.png");
    img.setAttribute("class","valided");


    var h2 = document.createElement("p"); 
    var h1 = document.createElement("p");
    
    var a = document.createElement("a");
    a.href = "https://mg-student.netlify.app/applications";
    a.target= "_blank";

    var button = document.createElement("button");

    h2.innerHTML = "Le contact a été ajouté dans :";
    h2.setAttribute("class","message");
    h1.innerHTML = "Mes contacts";
    h1.setAttribute("class","categorie");
    button.innerHTML = "Ouvrir Mentor Goal";
    button.setAttribute("class","ouvrirlien");

    divContent.appendChild(divDad);

    divDad.appendChild(divChild1);

    
    divChild1.appendChild(img);
    divChild1.appendChild(h2);
    divChild1.appendChild(h1);

    divDad.appendChild(a);
    a.appendChild(button);
} 