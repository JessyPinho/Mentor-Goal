function displayPopup3(divContent, site){

    var divDad = document.createElement("div");
    divDad.setAttribute("class","columnDisplay");

    var a1 = document.createElement("a");
    var button1 = document.createElement("button");
    button1.setAttribute("class", "buttonStyling");

    a1.addEventListener('click', function(){
        while (divContent.firstChild) {
            divContent.removeChild(divContent.firstChild);
        }
        divContent.setAttribute("style","overflow-x: scroll; height: 466px; width: 360px;");
        tabjob = scrapJob(site);
        displayAjoutCandidature(divContent,tabJob);

    });
    
    // pour créer l'image
    var candidature1icon = document.createElement("img"); 
    var imgurl3 = chrome.runtime.getURL("icons/book-open-outline.png");
    candidature1icon.src = imgurl3;
    candidature1icon.height = 21;
    candidature1icon.width = 21;
    candidature1icon.setAttribute("class", "imgAlign");
    // var i1 = document.createElement("i");
    // i1.setAttribute("class", "fa fa-folder");

    var candidature2icon = document.createElement("img"); 
    var imgurl2 = chrome.runtime.getURL("icons/external-link-outline.png");
    candidature2icon.src = imgurl2;
    candidature2icon.height = 21;
    candidature2icon.width = 21;
    candidature2icon.setAttribute("class", "imgAlign");

    var parametresicon = document.createElement("img"); 
    var imgurl1 = chrome.runtime.getURL("icons/settings-outline.png");
    parametresicon.src = imgurl1;
    parametresicon.height = 21;
    parametresicon.width = 21;
    parametresicon.setAttribute("class", "imgAlign");

    var a2 = document.createElement("a");
    a2.href = "https://mg-student.netlify.app/applications";
    a2.target = "_blank";
    var button2 = document.createElement("button");
    button2.setAttribute("class", "buttonStyling");

    // var i2 = document.createElement("i");
    // i2.setAttribute("class", "fa fa-bars");

    var a3 = document.createElement("a");

    a3.addEventListener('click',function(){
        while (divContent.firstChild) {
            divContent.removeChild(divContent.firstChild);
        }
        divContent.setAttribute("style"," height: 392px; width: 360px;");
        displayParamètres(divContent);
    });

    var button3 = document.createElement("button");
    button3.setAttribute("class", "buttonStyling");

    // var i3 = document.createElement("i");
    // i3.setAttribute("class", "fa fa-gear");


    button1.innerHTML = "    Ajouter à Mes candidatures";
    button2.innerHTML = "    Accéder à Mes candidatures";
    button3.innerHTML = "    Paramètres";

    divContent.appendChild(divDad);

    divDad.appendChild(a1);
    a1.appendChild(button1);
    // button1.prepend(i1);
    

    divDad.appendChild(a2);
    a2.appendChild(button2);
    // button2.prepend(i2);
    

    divDad.appendChild(a3);
    a3.appendChild(button3);
    // button3.prepend(i3);

    // pour ajouter l'image 
    button1.prepend(candidature1icon);
    button2.prepend(candidature2icon);
    button3.prepend(parametresicon);
}