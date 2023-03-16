/* Copyright(c) Maarten van Stam. All rights reserved. Licensed under the MIT License. */
/**
 * Basic function to show how to insert a value into cell A1 on the selected Excel worksheet.
 */
//office.ready(function () {    
  //export function helloButton() {

  //      return Excel.run(context => {

  //          // Insert text 'Hello world!' into cell A1.
  //          context.workbook.worksheets.getActiveWorksheet().getRange("A1").values = [['Hello world!']];

  //          // sync the context to run the previous API call, and return.
           
  //          return context.sync(); 
  //      });
    
  //  }
 //export function hoho(){
/*NodoJs = {*/
    (window).lancerchaîné = async (event) => {
        // see https://sourcegraph.com/github.com/aspnet/AspNetCore@bd65275148abc9b07a3b59797a88d485341152bf/-/blob/src/Components/Web.JS/src/Boot.Server.ts#L41:9
        //Blazor.start();
        console.log("lancerchaîné");
        await callStaticLocalComponentMethod();
        console.log("nod");
    //await enableButton("Nod", false);
        event.completed();

    }
//}
async function callStaticLocalComponentMethod() {
    console.log("avant");
    try {
        var dato= "init";
        dato =await DotNet.invokeMethodAsync("BlazorAddIn", "Localfunction");                                       
        console.log("fin demarrage : " + dato);
    }
    catch (err) {
        console.log();
        console.log("erreur : " + err.message);      
    }
    console.log("après");
}
