var hh = document.querySelector("h5");
var addfriend = document.querySelector("#add");
// var removefriend = document.querySelector("#remove");
var flag=0
addfriend.addEventListener("click", function() {
    if(flag==0){
        hh.innerHTML = "Good Friend";
        hh.style.color="green";
        addfriend.innerHTML="Remove Friend "
        flag=1


    }else{
        hh.innerHTML = "Stranger";
        hh.style.color="red";
        addfriend.innerHTML = "Add Friend";
        flag=0

    }
});



