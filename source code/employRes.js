const options = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'X-RapidAPI-Key': '074a6c0232mshf977299f1f1f46fp1cf217jsn391692152db0',
		'X-RapidAPI-Host': 'arbeitnow-free-job-board.p.rapidapi.com'
	}
};
    fetch('https://arbeitnow-free-job-board.p.rapidapi.com/api/job-board-api', options)
    .then(response => {
        return response.json();   
      }).then(data => {
          console.log(data.data);
          for (const entry of data.data) {
            console.log(entry.company_name)
            var jobDisplay = document.getElementById("employRes");
            var div = document.createElement("jobListCard");
            div.innerHTML =  `<h4 id="orgName">${entry.company_name}</h4><h4 id="orgDescription"></h4>${entry.slug}</h4><br><h5>URL:</h5>${entry.url}`
            jobDisplay.appendChild(div);
          }
      })
      .catch(err => console.error(err));
      
          
            /*var volDisplay = document.getElementById("volunteerResults");
            var div = document.createElement("volListCard");
           
            div.innerHTML =  `<h4 id="orgName">${entry.document.nameOrganization}</h4><h4 id="orgDescription"></h4>${entry.document.descriptionOrganization}</h4><br><h5>Our Location:</h5>${entry.document.address1PhysicalAddress}<br>${entry.document.cityPhysicalAddress
            }<br>${entry.document.countryPhysicalAddress}`
            volDisplay.appendChild(div);*/
          
      

      /*
      const jobRes = document.getElementById("jobResults"); 
const options = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'X-RapidAPI-Key': '074a6c0232mshf977299f1f1f46fp1cf217jsn391692152db0',
		'X-RapidAPI-Host': 'arbeitnow-free-job-board.p.rapidapi.com'
	}
};

fetch('https://arbeitnow-free-job-board.p.rapidapi.com/api/job-board-api', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
 
      */