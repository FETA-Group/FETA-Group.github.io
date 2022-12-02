function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function validateZip(str)

{
  return /^\d{5}(-\d{4})?$/.test(str);
}

function validateResDV()
{
 
  let zipCode = document.getElementById("zipCodeShelter").value;
  let msg = "";

  if(validateZip(zipCode))
  {
    window.location.href = "resDisplay.html?zip=" + zipCode; 
  }
 else
   {
     msg="Please enter a valid zip code.";
   }
  document.getElementById("gethelpResults").innerHTML = msg;
  console.log("validateRes");
}

document.querySelector('zipCodeShelter').onsubmit = e => {
  e.target.submit();
  e.target.reset();
};