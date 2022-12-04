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
  
  function validateResTransport()
  {
   
    let zipCode = document.getElementById("zipCodeShelter").value;
    let msg = "";
  
    if(validateZip(zipCode))
    {
      window.location.href = "transportRes.html?zip=" + zipCode; 
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
  
  (function() {
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = `https://${cors_api_host}/https://api.211.org/search/v1/api/Search/Keyword?Keyword=homeless%20shelter%20men&`;
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
  
  
  fetch(`${cors_api_url}Location=${zipCode}&Distance=100&Top=100 HTTP/1.1`
  , {
          method: 'GET',
          // Request headers
          headers: {
              'Cache-Control': 'no-cache',
              'Api-Key': '8681f8e51ffb4e1bb89ab9dad911397c',
            }
      })
    
      .then(response => {
          return response.json();   
        }).then(data => {
            console.log(data.results);
            for (const entry of data.results) {
              console.log(entry.document.id)
              var volDisplay = document.getElementById("volunteerResults");
              var div = document.createElement("volListCard");
             
              div.innerHTML =  `<h4 id="orgName">${entry.document.nameOrganization}</h4><h4 id="orgDescription"></h4>${entry.document.descriptionOrganization}</h4><br><h5>Our Location:</h5>${entry.document.address1PhysicalAddress}<br>${entry.document.cityPhysicalAddress
              }<br>${entry.document.countryPhysicalAddress}`
              volDisplay.appendChild(div);
            }
        })
        .catch(err => console.error(err));
      })();