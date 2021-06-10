var recipes;
function toggleFunction(){
    var recipeName=document.getElementById('inputbox').value;
    var recipesteps=document.getElementById('para').value;

    if(recipeName==""){
        alert("please provide recipeName!");
        return false;
    }
    else if(recipesteps==""){
        alert("please provide recipe steps");
        return false;
    }
    else{
        if( JSON.parse(localStorage.getItem('recipes')) ){
            recipes=JSON.parse(localStorage.getItem('recipes'));
        }
        else{
            recipes=[];
        }
        var recipe={
           title:recipeName,
           description:recipesteps,
        };
        recipes.push(recipe);
        localStorage.setItem('recipes',JSON.stringify(recipes));
        window.location.href="index.html";
    }
}
