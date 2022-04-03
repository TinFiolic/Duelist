function lostComfortLyrics(time) {
    if(between(time, 17, 21))
        return "Lost my soul";
    if(between(time, 22, 25))
        return "Just a body alone";        
    if(between(time, 26, 29))
        return "Meaning seek for my -";    
    if(between(time, 30, 33))
        return "My peace of mind...";    
    if(between(time, 35, 40))
        return "Follow words that spoke the damned";    
    if(between(time, 43, 48))
        return "Did they sense and know ahead?"; 
    if(between(time, 49, 55))
        return "We seek for life, not for fame"; 
    if(between(time, 56, 60))
        return "Fued, lull and hide for today"; 
}

function between(time, one, two) {
    if(time >= one && time <= two)
        return true;
    else
        return false;
}
;
//# sourceMappingURL=scripts.js.map