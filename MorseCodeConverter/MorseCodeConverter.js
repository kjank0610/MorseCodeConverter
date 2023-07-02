var mc2c = {'.-': 'A', '-...': 'B', '-.-.': 'C',
            '-..': 'D', '.': 'E', '..-.': 'F',
            '--.': 'G', '....': 'H', '..': 'I',  
            '.---': 'J', '-.-': 'K', '.-..': 'L',
            '--': 'M', '-.': 'N', '---': 'O', 
            '.--.': 'P', '--.-': 'Q', '.-.': 'R',
            '...': 'S', '-': 'T', '..-': 'U', 
            '...-': 'V', '.--': 'W', '-..-': 'X',
            '-.--': 'Y', '--..': 'Z', '-----': '0', 
            '.----': '1', '..---': '2', '...--': '3',
            '....-': '4', '.....': '5', '-....': '6', 
            '--...': '7', '---..': '8', '----.': '9',
            '--..--':',', '.-.-.-':'.', '..--..':'?',
            '-..-.':'/', '-....-':'-', '-.--.':'(',
            '-.--.-':')', '|':' ', ' ':''};

var c2mc = { 'A':'.-', 'B':'-...', 
            'C':'-.-.' , 'D':'-..', 'E':'.', 
            'F':'..-.', 'G':'--.', 'H':'....', 
            'I':'..', 'J':'.---', 'K':'-.-', 
            'L':'.-..', 'M':'--', 'N':'-.', 
            'O':'---', 'P':'.--.', 'Q':'--.-', 
            'R':'.-.', 'S':'...', 'T':'-', 
            'U':'..-', 'V':'...-', 'W':'.--', 
            'X':'-..-', 'Y':'-.--', 'Z':'--..', 
            '1':'.----', '2':'..---', '3':'...--', 
            '4':'....-', '5':'.....', '6':'-....', 
            '7':'--...', '8':'---..', '9':'----.', 
            '0':'-----', ',':'--..--', '.':'.-.-.-', 
            '?':'..--..', '/':'-..-.', '-':'-....-', 
            '(':'-.--.', ')':'-.--.-', ' ':'|'};


function encodeText(){
    var textToEncode = document.getElementById("inputStr").value;
    textToEncode = textToEncode.toUpperCase();
    var letters = textToEncode.split("");
    var encodedLetters = letters.map(x => {
        if(c2mc[x]){
            return c2mc[x];
        }else{
            return x;
        }
    });
    
    var code = encodedLetters.join(" ");
    document.getElementById("output").value = code;
}

function decodeText(){
    var textToDecode = document.getElementById("inputStr").value;
    textToDecode = textToDecode.toUpperCase();
    var encodedLetters = textToDecode.split(" ");
    var decodedLetters = encodedLetters.map(x => {
        if(mc2c[x]){
            return mc2c[x];
        }else{
            return x;
        }
    });

    var code = decodedLetters.join(" ");
    document.getElementById("output").value = code;
    
}

function clearfields() {

    document.getElementById("inputStr").value = "";
    document.getElementById("output").value = "";
}



