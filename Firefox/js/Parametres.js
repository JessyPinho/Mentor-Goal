function displayParamètres(divContent){

    var h3 = document.createElement("p");
    h3.innerHTML = "Paramètres";
    h3.setAttribute("class","service");

    var div = document.createElement("div");
    div.setAttribute("class","trait");

    var div3 = document.createElement("div");
    div3.setAttribute("class","trait");

    var div2 = document.createElement("div");
    div2.setAttribute("class","form");

    var label1 = document.createElement("label");
    var label2 = document.createElement("label");
    var label3 = document.createElement("label");


    label1.setAttribute("class","titelInpute");
    label2.setAttribute("class","titelInpute");
    label3.setAttribute("class","titelInpute");


    label1.innerHTML = "Statut par défaut pour l'ajout de candidature";
    label2.innerHTML = "Type de contrat par défaut";
    label3.innerHTML = "Email Associé";

/* --- Creation des selects --- */
// Select pour statut
        var arrayStatut = ["Prêt à Postuler","Candidature Envoyée","Relance Realisée","Entretien Obtenu"];
        var statusList = document.createElement("select");
        statusList.id = "mySelect";
    
        for (var i = 0; i < arrayStatut.length; i++) {
            var option = document.createElement("option");
            option.value = arrayStatut[i];
            option.text = arrayStatut[i];
            statusList.appendChild(option);
        }

// Select pour type
    var arrayType = ["Alternance","Stage","CDI","CDD", "Graduate Program", "VIE / VIA"];
    var typeList = document.createElement("select");
    arrayType.id = "mySelect";

     for (var i = 0; i < arrayType.length; i++) {
         var option = document.createElement("option");
         option.value = arrayType[i];
         option.text = arrayType[i];
         typeList.appendChild(option);
     }

    var input = document.createElement("input");


    statusList.setAttribute("class","form_input");
    typeList.setAttribute("class","form_input");
    input.setAttribute("class","form_input");            



    input.placeholder = "Email";


    var a = document.createElement("a");
    a.setAttribute("class","lien");
    

    var input8 = document.createElement("input");
    input8.type = "submit";
    input8.value = "Se déconnecter";
    input8.setAttribute("class","deconnexion");


    divContent.appendChild(h3);
    divContent.appendChild(div3);
    divContent.appendChild(div2);

    div2.appendChild(label1);
    div2.appendChild(statusList);

    div2.appendChild(label2);
    div2.appendChild(typeList);

    div2.appendChild(label3);
    div2.appendChild(input);

    div2.appendChild(div);
    div2.appendChild(a);
    a.appendChild(input8);
}
