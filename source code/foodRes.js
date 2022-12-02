async function foodResults(){
    //how do i know which is the right link
    const URL = `https://data.cityofnewyork.us/resource/tc6u-8rnp.json`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    console.log(data);
    if(data.res == "True") 
    console.log(data.facility_name)
    displayResources();


//const res = await fetch ();
//const data = await res.json();

function displayResources(){
    for (let i = 0; i < data.length; i++){
    const foodRes = data[i]
    var foodDisplay = document.getElementById("foodListCard");
    var div = document.createElement("foodListCard");
    div.innerHTML = `<h4 id="orgName">${foodRes.facility_name}</h4><h4 id="orgDescription"><i>Location:</i></h4>${foodRes.street_address}</h4><br>${foodRes.city}, ${foodRes.state}
    ${foodRes.zip_code}<br><br>Phone: ${foodRes.phone_number_s_}`
    foodDisplay.appendChild(div);
}
}
}

foodResults (); //calling func