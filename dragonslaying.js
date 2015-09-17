//*By Alain Jaramillo*//

var slaying = true;
var youHit = Math.floor(Math.random()*2);
var damageThisRound = Math.floor(Math.random()*5+1);
var totalDamage = 0;


while(slaying) {
    console.log("we are slaying");
    if (youHit===1){
        console.log("You hit the dragon");
        totalDamage += damageThisRound;
        if (totalDamage>=4){
            console.log("You killed the dragon!");
            } else {
                youHit = Math.floor(Math.random()*2); }        
        } else {
            console.log("The Dragon killed you");
            }
    
    slaying=false;
    
    }