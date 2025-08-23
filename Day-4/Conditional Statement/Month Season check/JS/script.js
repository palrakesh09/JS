let month = parseInt(prompt("Enter months number(1 to 12) : "));
let season = "";

switch(month){
    case 1 :
    case 2 :
    case 3 :
    case 4 :
        season = "Winter";
        break;
    case 5 :
    case 6 :
    case 7 :
    case 8 :
        season = "Summer";
        break;
    case 9 :
    case 10 :
    case 11 :
    case 12 :
        season = "Monsoon";
        break;
    default :
        season = "Invalid Season";
        break;
}
document.write("Season : " + season);