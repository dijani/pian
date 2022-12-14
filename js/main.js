function sunet(event){
let key=event.key;
let audio;
if (key=='2') {audio=new Audio("sound/11_Db3.mp3");}   
else if (key=='3') {audio=new Audio("sound/21_Eb3.mp3");}   
else if (key=='5') {audio=new Audio("sound/41_Gb3.mp3");}   
else if (key=='6') {audio=new Audio("sound/51_Ab3.mp3");}   
else if (key=='7') {audio=new Audio("sound/61_Bb3.mp3");} 
else if (key=='Q' || key=='q') {audio=new Audio("sound/10_do_C3.mp3");}   
else if (key=='W' || key=='w') {audio=new Audio("sound/20_re_D3.mp3");}   
else if (key=='E' || key=='e') {audio=new Audio("sound/30_mi_E3.mp3");}   
else if (key=='R' || key=='r') {audio=new Audio("sound/40_fa_F3.mp3");}   
else if (key=='T' || key=='t') {audio=new Audio("sound/50_sol_G3.mp3");}   
else if (key=='Y' || key=='y') {audio=new Audio("sound/60_la_A3.mp3");}   
else if (key=='U' || key=='u') {audio=new Audio("sound/70_si_B3.mp3");} 
else if (key=='Z' || key=='z') {audio=new Audio("sound/C4.mp3");}  
else if (key=='S' || key=='s') {audio=new Audio("sound/Db4.mp3");}  
else if (key=='X' || key=='x') {audio=new Audio("sound/D4.mp3");}  
else if (key=='D' || key=='d') {audio=new Audio("sound/Eb4.mp3");}  
else if (key=='C' || key=='c') {audio=new Audio("sound/E4.mp3");}  
else if (key=='V' || key=='v') {audio=new Audio("sound/F4.mp3");}  
else if (key=='G' || key=='g') {audio=new Audio("sound/Gb4.mp3");}  
else if (key=='B' || key=='b') {audio=new Audio("sound/G4.mp3");}  
else if (key=='H' || key=='h') {audio=new Audio("sound/Ab4.mp3");}  
else if (key=='N' || key=='n') {audio=new Audio("sound/A4.mp3");}  
else if (key=='J' || key=='j') {audio=new Audio("sound/Bb4.mp3");}  
else if (key=='M' || key=='m') {audio=new Audio("sound/B4.mp3");}  
if (audio!=null) audio.play();
}