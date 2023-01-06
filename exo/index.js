window.addEventListener("DOMContentLoaded", function(){
    // tout le reste de mon script

function exercice1()
{
    let btn = document.getElementById("btn-change-color");
    
    btn.addEventListener("click", function(event){
    
    let ex1 = document.getElementById("box1");
    ex1.style.backgroundColor = "blue";
});
}
exercice1();
function exercice2()
{
    let btn = document.getElementById("btn-move");
    
    btn.addEventListener("click", function(event){
    
    let ex2 = document.getElementById("box2");
    ex2.classList.add("move");
    
});
}
exercice2();

function exercice3()
{
    let ingredients = ["Salade", "Tomate", "Oignon"];
    let btn = document.getElementById("btn-add-ingredients");
    
    btn.addEventListener("click", function(event){
    
    
    let ul = document.querySelector("ul:first-of-type");
    
    
    for(let i = 0; i < ingredients.length; i++)
    {  
       let li = document.createElement("li");
       let txt = document.createTextNode(ingredients[i]);
       li.appendChild(txt);
       ul.appendChild(li);
    }
    
    
});
}
exercice3();
function exercice4()
{
    let heroes = [
        {
            name : "Clark Kent",
            secret : "Superman"
        },
        {
            name : "Diana Prince",
            secret : "Wonder Woman"
        },
        {
            name : "Tony Stark",
            secret: "Iron Man"
        }
    ];
    let btn = document.getElementById("btn-add-hero");
    btn.addEventListener("click", function(event){
        
        let ul = document.querySelector("ul:first-of-type");
        
        for(let i = 0; i < heroes.length; i++)
    {  
       let li = document.createElement("li");
       let txt = document.createTextNode(ingredients[i]);
       li.appendChild(txt);
       ul.appendChild(li);
    }
        
    });
}

function exercice5()
{

}

function exercice6()
{

}
});