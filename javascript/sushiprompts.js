var user = prompt("What is your favorite kind of fish?").toLowerCase();

switch (user) {
    
    case 'tuna':
        var sushi = prompt("What about tuna suhsi?");
        if (sushi === "ok") {console.log("good choice");}else{console.log("gross");}
        break;
        
    case 'salmon':
        var sushi = prompt("What about salmon sushi?");
        if (sushi === "yes" || Sushi === "no") {console.log("sushi rocks");}else{ console.log("huh?");};
        break;
        
    case 'trout': 
        var answer = prompt ("You don't even know what that means, i bet");
        if (answer >1 && answer <10) {console.log("whats with the numbers?");}  else {console.log("your mother was a trout");};

        break;
    default:
        console.log ("I don't think that's a fish");
    
    
    }