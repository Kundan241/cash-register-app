const billAmount=document.querySelector("#billAmount");
let cashGiven=document.querySelector("#cashGiven")
let buttonCheck=document.querySelector("#btn-check")
let NumOfNotes=document.querySelectorAll(".NumOfNotes")
let errorMessage=document.querySelector("#errorMessage")
let btnNext=document.querySelector("#btn-next")
let labelCashGiven=document.querySelector("#label-cashGiven");
let availableNotes=[2000,500,100,20,10,5,1]
let tableContent=document.querySelector("#tableContent")





btnNext.addEventListener("click",function(){
  console.log(billAmount.value)
  if(billAmount.value>0)
  {
    labelCashGiven.classList.remove("hidden-element");
    cashGiven.classList.remove("hidden-element");
    buttonCheck.classList.remove("hidden-element");
  }
  else{
    throwError("Bill cannot be negative");
  }
})



function throwError(msg)
{
    
    errorMessage.style.display="block";
    errorMessage.innerText=msg;
    setTimeout(() => {
      errorMessage.style.display="none";
    }, 100);
}

function clickHandler()
{

    if(billAmount.value<0)
    {
        throwError("Bill cannot be negative");
    }
    else{
      if(cashGiven.value<billAmount.value){
        throwError("Do you want to wash the plate");
      }
      else{
      

        let amountReturn=cashGiven.value -billAmount.value

  for(let i=0;i<availableNotes.length;i++)
  {
    let numberOfNotes=Math.trunc(amountReturn/availableNotes[i])
  
    NumOfNotes[i].innerText=numberOfNotes;
    amountReturn=amountReturn%availableNotes[i];
  }
  tableContent.classList.remove("hidden-element")

  
      }

    }

    
}


buttonCheck.addEventListener("click",clickHandler)


