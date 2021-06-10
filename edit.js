var recipes;
var index;

window.onload =() =>{
    recipes=JSON.parse(localStorage.getItem('recipes'));
    console.log(recipes);
    index=localStorage.getItem('editindex');
    document.getElementById('inputbox').value=recipes[index].title;
    document.getElementById('para').value=recipes[index].description;
}

function editValue(){
    recipes[index].title=document.getElementById('inputbox').value;
    recipes[index].description=document.getElementById('para').value;
    if(recipes[index].title==""){
        alert("please provide recipeName");
        return false;
    }
    if(recipes[index].description==""){
        alert("please provide recipesteps");
        return false;

    }
    localStorage.setItem('recipes',JSON.stringify(recipes));
    window.location.href="index.html";
}

function deleteValue(){
    recipes.splice(recipes[index],1);
    localStorage.setItem('recipes',JSON.stringify(recipes));
    window.location.href="index.html";

}
