const billAmount=document.querySelector("#billAmount");
let cashGiven=document.querySelector("#cashGiven")
let buttonCheck=document.querySelector("#btn-check")
let NumOfNotes=document.querySelectorAll(".NumOfNotes")
let errorMessage=document.querySelector("#errorMessage")
let availableNotes=[2000,500,100,20,10,5,1]


function throwError(msg)
{
    errorMessage.style.display="hide";
}

function clickHandler()
{

    if(billAmount.value<0)
    {
        throwError("Bill cannot be negative");
    }

    let amountReturn=cashGiven.value -billAmount.value

  for(let i=0;i<availableNotes.length;i++)
  {
    let numberOfNotes=Math.trunc(amountReturn/availableNotes[i])
  
    NumOfNotes[i].innerText=numberOfNotes;
    amountReturn=amountReturn%availableNotes[i];
  }
}


buttonCheck.addEventListener("click",clickHandler)


