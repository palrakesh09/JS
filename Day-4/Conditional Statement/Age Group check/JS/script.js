let age = parseInt(prompt("Enter your age : "));

if(age < 0){
    console.log("Please enter a valid age...");
}else{
    var group = "";

    if(age <= 12){
        group = "child";
    }else if(age <= 19){
        group = "Teenager";
    }else if(age <= 35){
        group = "Young adult";
    }else if(age <= 59){
        group = "Adult";
    }else{
        group = "Old";
    }

    document.write("Age : " + age + "<br>");
    document.write("you belong to : " + group);
}