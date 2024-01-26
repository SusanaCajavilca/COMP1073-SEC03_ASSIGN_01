// Assignment 1 | COMP1073 Client-Side JavaScript
// Name: Susana Cajavilca Turco - cod#: 200553998 
/* Variables
-------------------------------------------------- */
// Constants for main button query selectors

const noun1Const=document.querySelector("#noun1");
const verbConst=document.querySelector("#verb");
const adjectiveConst=document.querySelector("#adjective");
const noun2Const=document.querySelector("#noun2");
const settingConst=document.querySelector("#setting");


// Constants for p tag to display query selectors

const dinamycStudentId=document.querySelector("#studentId");

const choosenNoun1Const=document.querySelector("#choosenNoun1");
const choosenVerbConst=document.querySelector("#choosenVerb");
const choosenAdjectiveConst=document.querySelector("#choosenAdjective");
const choosenNoun2Const=document.querySelector("#choosenNoun2");
const choosenSettingConst=document.querySelector("#choosenSetting");

// Constants for final buttons and p tags

const playbackConst=document.querySelector("#playback");
const randomConst=document.querySelector("#random");

const storyConst=document.querySelector("#story");


// Variables for pre-defined arrays

var arrayNoun1 =["The turkey","Mom","Dad","The dog","My teacher","The elephant","The cat"]; //7 elements
var arrayVerb =["sat on","eat","danced with","saw","doesn't like","kissed"]; //6 elements
var arrayAdjective =["a funny","a scary","a goofy","a slimy","a barking","a fat"]; //6 elements
var arrayNoun2 =["goat","monkey","fish","cow","frog","bug","worm"]; //7 elements
var arraySetting =["on the moon","on the chair","in my spaguetti","in my soup","on the grass","in my shoes"]; //6 elements

// Variables for count to grab array elements
var cont1 =-1, cont2=-1, cont3=-1, cont4=-1, cont5=-1;

// Creating the reset button
const buttonR = document.createElement("button");
buttonR.innerText = " Reset ";
var secondSection = document.querySelector('body section:nth-of-type(2)');  // location of the button, inside the second section
secondSection.appendChild(buttonR);  // the reset button will be at the end of the webpage
buttonR.style.backgroundColor = "black";  // button background color: black
buttonR.style.color = "white";            // button text color: white
buttonR.style.display = "none";           // the reset button is not visible unless you click on one of the two final buttons: playback or random 

/* Functions
-------------------------------------------------- */
function randomValueFromArray(array) { // using function from Lab01 to get random element in the array 
    return array[Math.floor(Math.random() * array.length)];
}

function noun1_on_click() {
    // variable to get array element and displaying it
    document.body.style.backgroundColor="#7ED7C1"; // changing the background color of the webpage
    cont1++; 
    console.log(cont1);
    choosenNoun1Const.textContent = arrayNoun1[cont1];
    // if-else to change count setting
    if(cont1===6) // if counting value reap 6, it goes back to initial value of -1
      {cont1=-1;} 
    
}

function verb_on_click() {
    document.body.style.backgroundColor="#576CBC"; // changing the background color of the webpage
    cont2++;
    console.log(cont2);
    choosenVerbConst.textContent = arrayVerb[cont2];
    // if-else to change count setting
    if(cont2===5)  // if counting value reap 5, it goes back to initial value of -1
      {cont2=-1;}
}

function adjective_on_click() {
    document.body.style.backgroundColor="#F9B572"; // changing the background color of the webpage
    cont3++;
    console.log(cont3);
    choosenAdjectiveConst.textContent = arrayAdjective[cont3];
    // if-else to change count setting
    if(cont3===5)   // if counting value reap 5, it goes back to initial value of -1
      {cont3=-1;}
}

function noun2_on_click() {
    document.body.style.backgroundColor="#ECEE81"; // changing the background color of the webpage
    cont4++;
    console.log(cont4);
    choosenNoun2Const.textContent = arrayNoun2[cont4];
    // if-else to change count setting
    if(cont4===6)   // if counting value reap 6, it goes back to initial value of -1
      {cont4=-1;}
}

function setting_on_click() {
    document.body.style.backgroundColor="#FF9B9B"; // changing the background color of the webpage
    cont5++;
    console.log(cont5);
    choosenSettingConst.textContent = arraySetting[cont5];
    // if-else to change count setting
    if(cont5===5)   // if counting value reap 5, it goes back to initial value of -1
      {cont5=-1;}
}

// concatenate the user story and display
function playback_on_click() {
    document.body.style.backgroundColor="#CBFFA9"; // changing the background color of the webpage
    dinamycStudentId.textContent="Cod: #200553998";  // displaying my code
    var concatenatedStory = choosenNoun1Const.textContent + " " + choosenVerbConst.textContent + " " + choosenAdjectiveConst.textContent + " " + choosenNoun2Const.textContent + " " + choosenSettingConst.textContent;

    storyConst.textContent = concatenatedStory;
    buttonR.style.display = "block";   // showing the reset button
    
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    document.body.style.backgroundColor="#7BD3EA"; // changing the background color of the webpage
    dinamycStudentId.textContent="Name: Susana Cajavilca Turco";  // displaying my name
    var randomConcatenatedStory = randomValueFromArray(arrayNoun1)+ " " + randomValueFromArray(arrayVerb)  + " " + randomValueFromArray(arrayAdjective) + " " + randomValueFromArray(arrayNoun2) + " " + randomValueFromArray(arraySetting);
    storyConst.textContent = randomConcatenatedStory;
    buttonR.style.display = "block";     // showing the reset button
}

function reset_click(){

    document.body.style.backgroundColor="white" // reseting the color of the webpage to the original white
    choosenNoun1Const.textContent="";           // erasing the content of the elements previously selected
    choosenVerbConst.textContent="";            // erasing the content of the elements previously selected
    choosenAdjectiveConst.textContent="";       // erasing the content of the elements previously selected
    choosenNoun2Const.textContent="";           // erasing the content of the elements previously selected
    choosenSettingConst.textContent="";         // erasing the content of the elements previously selected
    storyConst.textContent="";                  // erasing the content of the elements previously selected
    dinamycStudentId.textContent="";            // erasing the content of the elements previously selected
    buttonR.style.display = "none";             // hiding the reset button

}

/* Event Listeners
-------------------------------------------------- */
noun1Const.addEventListener("click", noun1_on_click);
verbConst.addEventListener("click", verb_on_click);
adjectiveConst.addEventListener("click", adjective_on_click);
noun2Const.addEventListener("click", noun2_on_click);
settingConst.addEventListener("click", setting_on_click);
playbackConst.addEventListener("click", playback_on_click);
randomConst.addEventListener("click", random_on_click);
buttonR.addEventListener("click",reset_click);

