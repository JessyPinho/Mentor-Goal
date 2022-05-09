function displayAjoutContact(divContent, tabProfile){

            var prénom = tabProfile[0];
            var famille = tabProfile[1].toString();
            var post = tabProfile[2];
            post = post.trim();

            var entreprise = tabProfile[3].toString();
            entreprise = entreprise.split('<!---->');
            entreprise = entreprise[0].toString();
            entreprise = entreprise.trim();
            
            var url = tabProfile[4];
            let mail = tabProfile[5];
            mail = mail.trim();
            let telephone = tabProfile[6];
            telephone = telephone.trim();

            
            var h3 = document.createElement("p");
            h3.innerHTML = "Ajouter le contact";
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


            label1.innerHTML = "Prénom";
            label2.innerHTML = "Nom";
            label3.innerHTML = "Poste Occupé";
            label4.innerHTML = "Entreprise";
            label5.innerHTML = "URL du profil LinkedIn";
            label6.innerHTML = "Adresse mail";
            label7.innerHTML = "Téléphone";

            var input1 = document.createElement("input");
            var input2 = document.createElement("input");
            var input3 = document.createElement("input");
            var input4 = document.createElement("input");
            var input5 = document.createElement("input");
            var input6 = document.createElement("input");
            var input7 = document.createElement("input");

            input1.setAttribute("class","form_input");
            input1.value = prénom;
            input2.setAttribute("class","form_input");
            input2.value = famille;
            input3.setAttribute("class","form_input");  
            input3.value = post ;     
            input4.setAttribute("class","form_input");
            input4.value = entreprise ;
            input5.setAttribute("class","form_input");
            input5.value = url ;
            input6.setAttribute("class","form_input");
            input6.value =  mail ;
            input7.setAttribute("class","form_input");
            input7.value =  telephone ;

            input1.placeholder = "Prénom";
            input2.placeholder = "Nom";
            input3.placeholder = "Poste Occupé";
            input4.placeholder = "Entreprise";
            input5.placeholder = "URL";
            input6.placeholder = "Adresse mail";
            input7.placeholder = "Téléphone";

            
         
            input7.min = "10";

            var a = document.createElement("a");
            a.setAttribute("class","lien");
            

            var input8 = document.createElement("input");
            input8.type = "submit";
            input8.value = "Ajouter";
            input8.setAttribute("class","ajouter");
            input8.addEventListener('click', function(){
                var profile = {Prenom: prénom, NomdeFamille: famille, PostOccupé: post, entreprise: entreprise, url: url, email: mail, telephone: telephone};
                profile = JSON.parse(JSON.stringify(profile));
                localStorage.setItem("Profile: " + prénom + " " + famille + "", JSON.stringify(profile));
                localStorage.setItem("Profile: " + prénom + " " + famille + "", JSON.stringify(profile));
                while (divContent.firstChild) {
                    divContent.removeChild(divContent.firstChild);
                }
                divContent.setAttribute("style","height: 260px; width: 360px;");
                SucessContact(divContent);
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
 
            div2.appendChild(input5);

            div2.appendChild(label6);

            div2.appendChild(input6);

            div2.appendChild(label7);

            div2.appendChild(input7);


            divContent.appendChild(div);
            divContent.appendChild(a);
            a.appendChild(input8);
}