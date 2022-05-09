function display(site){
    var logoX = chrome.runtime.getURL("images/logoX.png");
    var MentorGoal48 = chrome.runtime.getURL("images/MentorGoal48.png");

    var gigadiv = document.createElement("div");
    gigadiv.setAttribute("class","gigadiv");

    var divDrop = document.createElement("div");
    divDrop.setAttribute("class","dropup");

    var divContent = document.createElement("div");
    divContent.setAttribute("class","dropup-content");
    divContent.id = "contentDiv";

    var btn = document.createElement("button");
    btn.setAttribute("class","dropbtn");
    btn.style.backgroundImage = "url('"+ MentorGoal48 + "')";


    window.onload = function() {

        switch(site){
            case "candidature":
                var start = document.body;
                start.appendChild(gigadiv);
                displayStartPage(divContent);
                break;
            
            // modification pour indeed
            case "indeed":
                var start = document.querySelectorAll(".js-focus-visible");
                start[0].prepend(gigadiv);
                displayPopup3(divContent, site);
                break;
            
            // modification pour apec
            case "apec":
                var start = document.querySelectorAll(".no-js.desktop.landscape");
                start[0].prepend(gigadiv);
                displayPopup3(divContent, site);
                break;

            case "linkedin":
                var liens = window.location.href;
                cutlink = liens.split('/');
                if (cutlink[3] == 'in') {
                    var start = document.querySelectorAll(".theme.theme--mercado.artdeco.windows");
                    start[0].prepend(gigadiv);
                    displayPopup2(divContent);
                }
                else if (cutlink[4] == 'view') {
                    var start = document.querySelectorAll(".theme.theme--mercado.artdeco.windows");
                    start[0].prepend(gigadiv);
                    displayPopup3(divContent, site);
                }
                break;

            default:
//
        }
        
        gigadiv.appendChild(divDrop);
        divDrop.appendChild(btn);
        divDrop.appendChild(divContent);


        btn.addEventListener('mouseenter',function() {
            btn.style.backgroundImage = "url('"+ logoX + "')";
        });

        btn.addEventListener('click',function() {
            while (divContent.firstChild) {
                divContent.removeChild(divContent.firstChild);
            }
            divContent.setAttribute("style","height: 164px; width: 256px;");

            
            // modification pour indeed
            if(site == "indeed"){
                var liens = window.location.href;
                cutlink = liens.split('=');
                if (cutlink[0] == 'https://fr.indeed.com/viewjob?jk') {
                    displayPopup3(divContent);
                }
            }

            else if(site == "linkedin"){
                var liens = window.location.href;
                cutlink = liens.split('/');
                if (cutlink[3] == 'in') {
                    displayPopup2(divContent);
                }
                if (cutlink[4] == 'view') {
                    displayPopup3(divContent);
                }
            }

            // modification pour apec
            if(site == "apec"){
                var liens = window.location.href;
                cutlink = liens.split('/');
                if (cutlink[6] == 'detail-offre') {
                    displayPopup3(divContent);
                }
            }

            
        });


        if(site == "candidature"){
            var page = document.querySelector("div.columns-application");
        }

        // modification indeed
        else if(site == "indeed"){
            var page = document.querySelector("div.icl-Container--fluid.fs-unmask.jobsearch-ViewJobLayout-fluidContainer.is-FR.icl-u-xs-p--sm");
        }

        // modification apec (récupération d'une balise body ou main qui englobe la page)
        else if(site == "apec"){
            var page = document.querySelector("div.containerFullWidth.main");
        }


        else if(site == "linkedin"){
            var liens = window.location.href;
            cutlink = liens.split('/');
            if (cutlink[3] == 'in') {
                var page = document.getElementById("profile-wrapper");
            }
            if (cutlink[4] == 'view') {
                var page = document.querySelector("div.grid");
            }

        }

        if (page) {
            page.addEventListener('mouseenter',function() {
                btn.style.backgroundImage = "url('"+ MentorGoal48 + "')";
            });

            page.addEventListener('mouseenter',function() {
                btn.style.backgroundImage = "url('"+ MentorGoal48 + "')";
            });
        }



        setInterval(function(){ verif(site,gigadiv,divDrop,btn,divContent); }, 2000);
        
    }
    
    function verif(site,gigadiv,divDrop,btn,divContent){
        if(site == "candidature"){
            console.log("ok");
        }
        // modification indeed 
        if(site == "indeed"){
            var liens = window.location.href;
            cutlink = liens.split('=');
            if (cutlink[0] == 'https://fr.indeed.com/viewjob?jk') {
                var existe = document.getElementById("contentDiv")
                if (existe){
                    //
                }
                else{
                    location.reload();
                }
            }
            else {
                gigadiv.removeChild(divDrop);
                divDrop.removeChild(btn);
                divDrop.removeChild(divContent);
            }
            
        }
        // modification apec
        if(site == "apec"){
            var liens = window.location.href;
            cutlink = liens.split('/');
            if (cutlink[6] == 'detail-offre') {
                var existe = document.getElementById("contentDiv")
                if (existe){
                    //
                }
                else{
                    location.reload();
                }
            }
            else {
                gigadiv.removeChild(divDrop);
                divDrop.removeChild(btn);
                divDrop.removeChild(divContent);
            }
            
        }



        if(site == "linkedin"){
            var liens = window.location.href;
            cutlink = liens.split('/');
            if (cutlink[3] == 'in') {
                var existe = document.getElementById("contentDiv")
                if (existe){
                    //
                }
                else{
                    location.reload();
                }
            }
            else if(cutlink[4] != 'view') {
                gigadiv.removeChild(divDrop);
                divDrop.removeChild(btn);
                divDrop.removeChild(divContent);
            }

            if (cutlink[4] == 'view') {
                var existe = document.getElementById("contentDiv")
                if (existe){
                    //
                }
                else{
                    location.reload();
                }
            }
            else if(cutlink[3] != 'in'){
                gigadiv.removeChild(divDrop);
                divDrop.removeChild(btn);
                divDrop.removeChild(divContent);
            }
        }
    }
}