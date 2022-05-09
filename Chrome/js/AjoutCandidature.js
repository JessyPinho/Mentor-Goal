function displayAjoutCandidature(divContent,tabJob){

    entreprise = tabJob[0].trim();
    poste = tabJob[1].trim();
    lieu = tabJob[2].trim();
    url = tabJob[3].trim();
    desc = tabJob[4].trim();

    var h3 = document.createElement("p");
    h3.innerHTML = "Ajouter candidature";
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
    var label4 = document.createElement("label");
    var label5 = document.createElement("label");
    var label6 = document.createElement("label");
    var label7 = document.createElement("label");

    label1.setAttribute("class","titelInpute");
    label2.setAttribute("class","titelInpute");
    label3.setAttribute("class","titelInpute");
    label4.setAttribute("class","titelInpute");
    label5.setAttribute("class","titelInpute");
    label6.setAttribute("class","titelInpute");
    label7.setAttribute("class","titelInpute");

    label1.innerHTML = "Entreprise";
    label2.innerHTML = "Poste";
    label3.innerHTML = "Lieu";
    label4.innerHTML = "URL de l'offre";
    label5.innerHTML = "Type ";
    label6.innerHTML = "Prêt à postuler";
    label7.innerHTML = "Description";

    var input1 = document.createElement("input");
    var input2 = document.createElement("input");
    var input3 = document.createElement("input");
    var input4 = document.createElement("input");
    var input7 = document.createElement("input");

    input1.setAttribute("class","form_input");
    input1.value = entreprise;
    input2.setAttribute("class","form_input");
    input2.value = poste;
    input3.setAttribute("class","form_input");
    input3.value = lieu;            
    input4.setAttribute("class","form_input");
    input4.value = url;

        /* --- Creation des selects --- */
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

    typeList.setAttribute("class","form_input");
    statusList.setAttribute("class","form_input");

    input7.setAttribute("class","form_input");
    input7.value = desc;

    input1.placeholder = "Entreprise";
    input2.placeholder = "Poste";
    input3.placeholder = "Lieu ";
    input4.placeholder = "URL de l'offre";

    input7.placeholder = "Description";



    var a = document.createElement("a");
    a.setAttribute("class","lien");
    

    var input8 = document.createElement("input");
    input8.type = "submit";
    input8.value = "Ajouter";
    input8.setAttribute("class","ajouter");
    input8.addEventListener('click', function(){
        var candidature = {Entreprise: entreprise, Poste: poste, Lieu: lieu, description: desc};
        candidature = JSON.parse(JSON.stringify(candidature));
        localStorage.setItem("Entrpise: " + entreprise + "", JSON.stringify(candidature));
        while (divContent.firstChild) {
            divContent.removeChild(divContent.firstChild);
        }
        divContent.setAttribute("style","height: 260px; width: 360px;");
        SucessCandidature(divContent);
    });


    divContent.appendChild(h3);
    divContent.appendChild(div3);
    divContent.appendChild(div2);

    div2.appendChild(label1);
    div2.appendChild(input1);

    div2.appendChild(label2);
    div2.appendChild(input2);

    div2.appendChild(label3);
    div2.appendChild(input3);

    div2.appendChild(label4);
    div2.appendChild(input4);

    div2.appendChild(label5);
    div2.appendChild(typeList);

    div2.appendChild(label6);
    div2.appendChild(statusList);

    div2.appendChild(label7);
    div2.appendChild(input7);

    div2.appendChild(div);
    div2.appendChild(a);
    a.appendChild(input8);
}
