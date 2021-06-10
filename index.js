var res;
var ul;

window.onload= () =>{
    res=JSON.parse(localStorage.getItem('recipes'));
    for(var i=0; i<res.length; i++){
        var list=document.createElement('li');
        list.className="mylist";
        list.id=i;
        var list1=document.createElement('p');
        list1.className="mypara";
        
        ul=document.getElementById('ul');
        var text=document.createTextNode(res[i].title);
        var text1=document.createTextNode(res[i].description);

        list.appendChild(text);
        list1.appendChild(text1);
        list.appendChild(list1);

        ul.appendChild(list);
        list.addEventListener("click",edititem)
    }
    if(res.length==0){
        document.getElementById('demo').style.display="block";
    }
    else{
        document.getElementById('demo').style.display="none";
    }


}

function myFunction(){
    window.location.href="add.html";
}


function edititem(e){
    localStorage.setItem('editindex',e.target.id);
    window.location.href="add2.html"
}

const search=document.getElementById('search');
search.addEventListener('keyup',(e) =>{
    const searchvalue=e.target.value.tolowercase();

    var child=ul.childNodes;
    for(var i=0; i<res.length;i++){
        var searchitems=res[i].title;
        if(searchItem.toLowerCase().indexOf(searchValue) != -1){
            document.getElementById(i).style.display='block';
            
        }else{
            document.getElementById(i).style.display='none';
        }
    }
});
