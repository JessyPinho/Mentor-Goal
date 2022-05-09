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
            
            case "indeed":
                var start = document.querySelectorAll(".js-focus-visible");
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
            
        });


        if(site == "candidature"){
            var page = document.querySelector("div.columns-application");
        }

        else if(site == "indeed"){
            var page = document.querySelector("div.icl-Container--fluid.fs-unmask.jobsearch-ViewJobLayout-fluidContainer.is-FR.icl-u-xs-p--sm");
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
        if(site == "linkedin"){
            var liens = window.location.href;
            cutlink = liens.split('/');
            var existe = document.getElementById("contentDiv")
            if (cutlink[3] == 'in' || cutlink[4] == 'view') {
                if (existe){
                    //
                }
                else{
                    location.reload();
                }
            }
            else if(cutlink[4] != 'view' || cutlink[3] != 'in') {
                if(existe){
                    gigadiv.removeChild(divDrop);
                    divDrop.removeChild(btn);
                    divDrop.removeChild(divContent);
                }
                
            }
        }
    }
}