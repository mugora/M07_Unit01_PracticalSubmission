var stringers=[3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 12];

let myEle = document.createElement("div")
document.body.appendChild(myEle);

for(let i=0; i<stringers.length; i++){
    let myEle = document.createElement("div");
    let message = document.createElement("div");
   // message.innerHTML="The value is " + stringers[i];

    if (stringers[i]<10){
        message.innerHTML="The value is " + stringers[i] + " which is less than 10";
    }else if(stringers[i].length>5){
        message.innerHTML="The value is " + stringers[i] + " very long name";
    }else if(stringers[i]===15){
        message.innerHTML="The value is " + stringers[i] + " which is exactly equals to 15";
    }else{
        message.innerHTML="The value is " + stringers[i] +  " which is normal";
    }

    myEle.addEventListener("click", function (){
        this.style.color="blue";
    })


    myEle.appendChild(message);

    document.body.appendChild(myEle)
}