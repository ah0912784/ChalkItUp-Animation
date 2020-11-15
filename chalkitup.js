// A poem from the video game Elder Scrolls V Skyrim. Made by Bethesda softworks and released on Nov 11th, 2011.  
var str1 = "There once was a hero named Ragnar the Red.";
var str2 = "Who came riding to Whiterun from old Rorikstead.";
var str3 = "And the braggart did swagger and brandish his blade.";
var str4 = "as he told of bold battles and gold he had made.";
var str5 = "But then he went quiet, did Ragnar the Red.";
var str5 = "When he met the shield-maiden Matilda, who said.";
var str5 = "Oh, you talk and you lie and you drink all our mead.";
var str5 = "Now I think it's high time that you lie down and bleed.";
var str6 = "And so then came the clashing and slashing of steel.";
var str7 = "As the brave lass Matilda charged in full of Zeal.";
var str8 = "And the braggart named Ragnar was boastful no more.";
var str9 = "When his ugly red head rolled around on the floor.";

trigger = 10
counter = 0;
const chalk = require('chalk')
const chalkAnimation = require('chalk-animation');
const colorArray = [chalk.blue, chalk.red,chalk.green,chalk.magenta,chalk.white,chalk.blueBright,chalk.redBright,chalk.greenBright,chalk.magentaBright,chalk.whiteBright];



    karaoke = chalkAnimation.karaoke(colorArray[counter]`
    ${str1}
    ${str2}
    ${str3}
    ${str4}
    ${str5}
    ${str6}
    ${str7}
    ${str8}
    ${str9}
    `
    ,.5)



    setTimeout( getCounter, ()=>{
        karaoke.stop();
        
    }, 5000
    )
    

function getCounter() {
    console.log('here')
    if(counter == colorArray.length-1){ 
        counter = 0
    }else{
        counter++
    } 
    
}
setTimeout( ()=> {
    
    karaoke.start()
}, 5000)

