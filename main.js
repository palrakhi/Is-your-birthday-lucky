const date_of_birth= document.querySelector("#date-of-birth")
const lucky_number= document.querySelector("#lucky-number")
const check_button= document.querySelector("#check-luck")
const output_box=document.querySelector("#output")


check_button.addEventListener("click", checkYourLuck)

function checkYourLuck(){
    const dob= date_of_birth.value
    const sum= CalculateTheSum(dob)

    if(sum&&lucky_number.value)
    {
        if( sum % lucky_number.value===0)
        {
            output_box.innerText= "Congrats!! Your Birth Date Is Lucky. 😍"
        } else 
        {
            output_box.innerText= "Oh No!! Your Birth Date Is Not Lucky. 😞"
        }
    }        
    else {
         output_box.innerText= "Please provide both the details ! ⚠️ "
        }    

    console.log(sum)
}

function CalculateTheSum(dob){
    dob= dob.replaceAll("-", "")
    let sum=0;
    for (let i= 0; i < dob.length; i++){
        sum= sum + Number(dob.charAt(i))

    }
    return sum
 
}

