// rpg random password generator
function generatePassword(pwlen,bool_lower,bool_upper,bool_num,bool_sym){
    const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVXXYZ";
    const numberChars="0123456789";
    const symbolChars="!@#$%^&*()-_=+";

    let allowedChars="";
    let password_generated="";

    // if true, execute first-right of `?`, else, execute second-right 
    allowedChars+= bool_lower ? lowercaseChars : "";

    allowedChars+= bool_upper ? uppercaseChars : "";

    allowedChars+= bool_num ? numberChars : "";

    allowedChars+= bool_sym ? symbolChars : "";

    if(allowedChars.length===0){
        return ``
    }
    for(let i=0;i<pwlen;i++){
        const randomIndex=Math.floor(Math.random()*allowedChars.length)
        password_generated+=allowedChars[randomIndex];

    }
    return password_generated;

}


// return all `.main-content` elements, and execute the code within for each `.main-content` element.
document.querySelectorAll(".main-content").forEach(i=>{

    // options
    // password length
    const passLenInput=i.querySelector(".password-len-input");
    let passLength=passLenInput.value;
    // include lower
    const includeLower= i.querySelector(".include-lower");
    let includeLowercase=includeLower.checked;
    // include upper
    const includeUpper=i.querySelector(".include-upper");
    let includeUppercase=includeUpper.checked;
    // include numbers
    const includeNums=i.querySelector(".include-numbs");
    let includeNumbers=includeNums.checked;
    // include symbols
    const includeSymbs=i.querySelector(".include-symbs");
    let includeSymbols=includeSymbs.checked;

    // password-block. 
    // inside `options` because I want to update the values in real-time when the user interacts with any of the options
    const inputField=i.querySelector(".password");
    
    const inputFieldColor=inputField.style.backgroundColor;

    const errorColor="rgb(255,51,51)";

    let activeColor=inputFieldColor;

    let passwordText=inputField.value;

    // call function `generatePassword` with default parameters
    inputField.value=generatePassword(passLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);

    // on input passlength
    passLenInput.addEventListener("input",()=>{
        passLength=passLenInput.value;
        // call with updated values
        inputField.value=generatePassword(passLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);
        // update the content to be copied to clipboard.
        passwordText=inputField.value;

        // error when 0 boxes checked
        if (passwordText.length===0){
            activeColor = errorColor;
            inputField.value=`At least 1 character option needs to be selected`;
            passwordText=inputField.value;
        }
        else{
            activeColor=inputFieldColor;
        }
        // ---

        // loading screen animation
        loadingLine.style.width="100%";
        
        setTimeout(()=>{
            loadingLine.style.width="0";
        },100);
        // ---

        inputField.style.backgroundColor=activeColor;
    });

    // on click lowercase
    includeLower.addEventListener("click",()=>{
        includeLowercase= !includeLowercase;

        inputField.value=generatePassword(passLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);

        passwordText=inputField.value;

        if (passwordText.length===0){
            activeColor = errorColor;
            inputField.value=`At least 1 character option needs to be selected`;
            passwordText=inputField.value;
        }
        else{
            activeColor=inputFieldColor;
        }

        loadingLine.style.width="100%";
        
        setTimeout(()=>{
            loadingLine.style.width="0";
        },100);

        inputField.style.backgroundColor=activeColor;
    });
    
    // on click uppercase
    includeUpper.addEventListener("click",()=>{
        includeUppercase=!includeUppercase;

        inputField.value=generatePassword(passLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);

        passwordText=inputField.value;

        if (passwordText.length===0){
            activeColor = errorColor;
            inputField.value=`At least 1 character option needs to be selected`;
            passwordText=inputField.value;
        }
        else{
            activeColor=inputFieldColor;
        }

        loadingLine.style.width="100%";
        
        setTimeout(()=>{
            loadingLine.style.width="0";
        },100);

        inputField.style.backgroundColor=activeColor;
    });

    // on click numbers
    includeNums.addEventListener("click",()=>{
        includeNumbers=!includeNumbers;

        inputField.value=generatePassword(passLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);

        passwordText=inputField.value;

        if (passwordText.length===0){
            activeColor = errorColor;
            inputField.value=`At least 1 character option needs to be selected`;
            passwordText=inputField.value;
        }
        else{
            activeColor=inputFieldColor;
        }

        loadingLine.style.width="100%";
        
        setTimeout(()=>{
            loadingLine.style.width="0";
        },100);

        inputField.style.backgroundColor=activeColor;
    });

    // on click symbols
    includeSymbs.addEventListener("click",()=>{
        includeSymbols=!includeSymbols;

        inputField.value=generatePassword(passLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);
        
        passwordText=inputField.value;

        if (passwordText.length===0){
            activeColor = errorColor;
            inputField.value=`At least 1 character option needs to be selected`;
            passwordText=inputField.value;
        }
        else{
            activeColor=inputFieldColor;
        }

        loadingLine.style.width="100%";
        
        setTimeout(()=>{
            loadingLine.style.width="0";
        },100);

        inputField.style.backgroundColor=activeColor;
    });


    // password-block
    // on click password text. select entire input field (equivalent to double-clicking)
    inputField.addEventListener("focus",()=>inputField.select());

    const copyButton=i.querySelector(".copy-button");

    const refreshButton=i.querySelector(".refresh-button");

    const loadingLine=i.querySelector(".loading-line")
    

    // on click clipboard 
    copyButton.addEventListener("click",()=>{
        
        inputField.select(); // for user feedback only. no real function.

        navigator.clipboard.writeText(passwordText); 

        inputField.value="Copied!";
        
        inputField.style.backgroundColor="#eee";

        setTimeout(()=>{
            inputField.value=passwordText;
            inputField.style.backgroundColor=activeColor;
        },2000);

   
    });

    // on click refresh
    refreshButton.addEventListener("click",()=>{
        // call function `generatePassword` with modified parameters
        inputField.value=generatePassword(passLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);

        passwordText=inputField.value;

        if (passwordText.length===0){
            activeColor = errorColor; 
            inputField.value=`At least 1 character option needs to be selected`;
            passwordText=inputField.value;
        }
        else{
            activeColor=inputFieldColor;
        }
        
        // set color
        inputField.style.backgroundColor=activeColor;

        loadingLine.style.width="100%";
        
        setTimeout(()=>{
            loadingLine.style.width="0";
        },100);
    });
});

