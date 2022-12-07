function sunet(event){
let key=event.key;
let audio;
if (key=='2') {audio=new Audio("sound/11_Db3.mp3");}   
else if (key=='3') {audio=new Audio("sound/21_Eb3.mp3");}   
else if (key=='5') {audio=new Audio("sound/41_Gb3.mp3");}   
else if (key=='6') {audio=new Audio("sound/51_Ab3.mp3");}   
else if (key=='7') {audio=new Audio("sound/61_Bb3.mp3");} 
else if (key=='Q') {audio=new Audio("sound/10_do_C3.mp3");}   
else if (key=='W') {audio=new Audio("sound/20_re_D3.mp3");}   
else if (key=='E') {audio=new Audio("sound/30_mi_E3.mp3");}   
else if (key=='R') {audio=new Audio("sound/40_fa_F3.mp3");}   
else if (key=='T') {audio=new Audio("sound/50_sol_G3.mp3");}   
else if (key=='Y') {audio=new Audio("sound/60_la_A3.mp3");}   
else if (key=='U') {audio=new Audio("sound/70_si_B3.mp3");} 
else if (key=='Z') {audio=new Audio("sound/C4.mp3");}  
else if (key=='S') {audio=new Audio("sound/Db4.mp3");}  
else if (key=='X') {audio=new Audio("sound/D4.mp3");}  
else if (key=='D') {audio=new Audio("sound/Eb4.mp3");}  
else if (key=='C') {audio=new Audio("sound/E4.mp3");}  
else if (key=='V') {audio=new Audio("sound/F4.mp3");}  
else if (key=='G') {audio=new Audio("sound/Gb4.mp3");}  
else if (key=='B') {audio=new Audio("sound/G4.mp3");}  
else if (key=='H') {audio=new Audio("sound/Ab4.mp3");}  
else if (key=='N') {audio=new Audio("sound/A4.mp3");}  
else if (key=='J') {audio=new Audio("sound/Bb4.mp3");}  
else if (key=='M') {audio=new Audio("sound/B4.mp3");}  
if (audio!=null) audio.play();
}