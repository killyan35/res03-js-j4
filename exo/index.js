function exercice1()
{
    let btn = document.getElementById("btn-change-color");
    
    btn.addEventListener("click", function(event){
    
    let ex1 = document.getElementById("box1");
    ex1.style.backgroundColor = "blue";
});
}
function exercice2()
{
    let btn = document.getElementById("btn-move");
    
    btn.addEventListener("click", function(event){
    
    let ex2 = document.getElementById("box2");
    ex2.classList.add("move");
    
});
}
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
      
      if (heroes.length > 0)
        {
            let td = document.createElement("td");
            let td2 = document.createElement("td");
            let tr = document.createElement("tr");
            let txt = document.createTextNode(heroes[0].name);
            let txt2 = document.createTextNode(heroes[0].secret);
            let table = document.querySelector("table > tbody");
            td.appendChild(txt);
            td2.appendChild(txt2);
            tr.appendChild(td);
            tr.appendChild(td2);
            table.appendChild(tr);
                    
        }
       if (heroes.length > 0)
        {
            heroes.shift();
                    
        }
     
    });
    
    
}
function exercice5()
{
    let btn = document.getElementById("btn-turn");
    
    btn.addEventListener("click", function(){
        
        let blue = document.getElementById("blue");
        let red = document.getElementById("red");
        let green = document.getElementById("green");
      
        blue.id ="red";
        red.id ="green";
        green.id ="blue";
        
    });
    
}
function exercice6()
{
    let btn = document.getElementById("btn-roll");
    
    btn.addEventListener("click", function(event){
    
    let ball = document.getElementById("ball");
    ball.classList.add("move2");
    console.log(ball);
    
});
}
window.addEventListener("DOMContentLoaded", function(){
    // tout le reste de mon script


exercice1();

exercice2();


exercice3();

exercice4();

exercice5();

exercice6();
});