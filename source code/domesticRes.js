

/*check for Navigation Timing API support
const pageAccessedByReload = (
  (window.performance.navigation && window.performance.navigation.type === 1) ||
    window.performance
      .getEntriesByType('navigation')
      .map((nav) => nav.type)
      .includes('reload')
);

alert(pageAccessedByReload);*/

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
    window.location.href = "domesticRes.html?zip=" + zipCode; 
  }
 else
   {
     msg="Please enter a valid zip code.";
   }
  document.getElementById("gethelpResults").innerHTML = msg;
  console.log("validateRes");


document.querySelector('zipCodeShelter').onsubmit = e => {
  e.target.submit();
  e.target.reset();
};
}

let zipCode = window.location.search.slice(5);

fetch(`https://api.211.org/search/v1/api/Search/Keyword?Keyword=Domestic%20Violence%20Shelters&Location=${zipCode}&Distance=100&Top=100 HTTP/1.1`, {
        method: 'GET',
        // Request headers
        headers: {
            'Cache-Control': 'no-cache',
            'Api-Key': '8681f8e51ffb4e1bb89ab9dad911397c',}
    })
    .then(response => {
        return response.json();   
      }).then(data => {
          console.log(data.results);
          for (const entry of data.results) {
            console.log(entry.document.id)
            var volDisplay = document.getElementById("volunteerResults");
            var div = document.createElement("volListCard");
           
            div.innerHTML =  `<h4 id="orgName">${entry.document.nameOrganization}</h4><h4 id="orgDescription"></h4>${entry.document.descriptionOrganization}</h4><br><h5>Our Location:</h5>${entry.document.cityPhysicalAddress
            }<br>${entry.document.statePhysicalAddress}`
            volDisplay.appendChild(div);
          }
      })
      .catch(err => console.error(err));

      