/* global global, document, Office */   
//     (window).lancerchaîné = async (event) => {
//        // see https://sourcegraph.com/github.com/aspnet/AspNetCore@bd65275148abc9b07a3b59797a88d485341152bf/-/blob/src/Components/Web.JS/src/Boot.Server.ts#L41:9
        
//        console.log("avant   ///////");
//        await callStaticLocalComponentMethod();
       
//        await enableButton("Nod", false);
//        event.completed();      

//}
//async function callStaticLocalComponentMethod() {
//    //window.dispatchEvent(new Event('myEvent'));
//        console.log("avant");
//    //await DotNet.invokeMethodAsync("BlazorAddIn", "HelloButton2");//
//    await DotNet.invokeMethodAsync("BlazorAddIn", "LocalStaticMethod");//
//        console.log("après");       
//    }  
//async function enableButton(huhu, visibla) {
//        var visible
//        switch (visibla) {
//            case "true":
//                visible = true
//                break;
//            case "false":
//                visible = false
//                break;
//        }
//        var loctab
//        switch (huhu) {
//            case "Nod":
//                loctab = {
//                    tabs: [
//                        {
//                            id: "CommandsGroup",
//                            groups: [
//                                {
//                                    id: "Accès",
//                                    controls: [
//                                        {
//                                            id: "Ouvrir",
//                                            enabled: visible
//                                        }
//                                    ]
//                                }
//                            ]
//                        }
//                    ]
//                }
//                break;

//        }
//        //NB : l'ID d'un bouton doit être différent de son label. C'est pourquoi Copier et non copier !!!!! De même les id des group et des boutons doivent être en dur (= pas utiliser une référence interne type "contoso.ccc".
//        await Office.ribbon.requestUpdate(loctab);
//    }