window.onload=function() {
// every thing here will be done after page load  ((== for comparing and = for setting))
    let counter=1;
    setInterval(function(){
        // everything here will be repeated
        // counter++;
        // counter+=1;
    counter=counter+1;
    if (counter==6){
        counter=1;
    }
    document.getElementById("slideImage").src="./imgs/" +counter+ ".jpg";
    },500);
}