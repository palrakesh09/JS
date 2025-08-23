let units = parseInt(prompt("Enter electricity units : "));
let bill = 0;

if(units<=50){
    bill = units * 1;
}else if(units<=150){
    bill = (50*1) + (units-50)*2;
}else if(units<=250){
    bill = (50*1) + (100*2) + (units-150)*3;
}else{
    bill = (50*1) + (100*2) + (100*3) + (units-250)*4;
}

if(units > 150){
    bill + bill * 0.20;
}

document.write("units consumed : " + units + "<br>");
document.write("Total Bill Amount : " + bill.toFixed(2));