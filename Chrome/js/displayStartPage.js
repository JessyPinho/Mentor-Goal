function displayStartPage(divcontent)
{
    var divDad = document.createElement("div");
    divDad.setAttribute("class","content");

    var divChild1 = document.createElement("div");
    divChild1.setAttribute("class","firstPositioning");

    var divChild2 = document.createElement("div");
    divChild2.setAttribute("class","description");
    
    var img = document.createElement("img"); 
    var imgurl = chrome.runtime.getURL("images/MentorGoal48.png");
    img.src = imgurl;
    img.setAttribute("class", "imgAlign");

    var h1 = document.createElement("p");
    h1.setAttribute("class","h1Positioning");

    var p1 = document.createElement("p");
    p1.setAttribute("style", "text-align: center; color: #A3B5C5; margin-bottom: 10px;");

    var p2 = document.createElement("p");
    p2.setAttribute("style", "margin-left: 20px; margin-bottom: 15px; margin-top: 35px;");

    var p3 = document.createElement("p");
    p3.setAttribute("style", "margin-left: 20px; margin-bottom: 15px;");

    var p4 = document.createElement("p");
    p4.setAttribute("style", "margin-left: 20px; margin-bottom: 15px;");

    h1.innerHTML = " C'est Parti !";
    p1.innerHTML = " L'extension mentor goal est prête";
    p2.innerHTML = " 1. Trouve une offre d'emploi en ligne";
    p3.innerHTML = " 2. Clique Sur l'extension Mentor Goal";
    p4.innerHTML = " 3. Enregistre ta candidature sur ton espace candidatures Mentor Goal";

   
    divcontent.appendChild(divDad);

    divDad.appendChild(divChild1);
    divDad.appendChild(h1);
    divDad.appendChild(divChild2);

    divChild1.appendChild(img);
    divChild2.appendChild(p1);
    divChild2.appendChild(p2);
    divChild2.appendChild(p3);
    divChild2.appendChild(p4);
} 