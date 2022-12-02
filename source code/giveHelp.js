function validateZip(str)

{
  return /^\d{5}(-\d{4})?$/.test(str);
}

function validateVol()
{
 
  let zipCode = document.getElementById("volZip").value;
  let msg = "";

  if(validateZip(zipCode))
  {
    window.location.href = "resDisplay.html?zip=" + zipCode; 
  }
 else
   {
     msg="Please enter a valid zip code.";
   }
  document.getElementById("volzipValidate").innerHTML = msg;
  console.log("validateVol");


document.querySelector('volZip').onsubmit = e => {
  e.target.submit();
  e.target.reset();
};
}
