const form = document.getElementById("event-form");
const eventDetail = document.getElementById("event-record").getElementsByTagName("tbody")[0];
const eventName = document.querySelector("input[name='event']");
const eventDate = document.querySelector("input[name='date']");
const organizerName = document.querySelector("input[name='organizer']");
const eventlocation = document.querySelector("input[name='event-location']");

const trSelect = document.querySelector("tbody");
trSelect.addEventListener("click", (e) => {
  if(confirm("Are you sure You want to delete this?") && e.target.tagName.toLowerCase() == "button"){
    e.target.parentNode.parentNode.remove();
  }
});



form.addEventListener('submit', (e) =>{
  e.preventDefault();
  eventName.value;
  eventDate.value;
  organizerName.value;
  eventlocation.value;


  let tr =  document.createElement("tr");
  let tdeventName =  document.createElement("td");
  let tdeventDate =  document.createElement("td");
  let tdorganizerName =  document.createElement("td");
  let tdeventLocation =  document.createElement("td");
  let tdDelete =  document.createElement("td");
  let tdBtn = document.createElement("button");
  tdBtn.setAttribute('class', 'btn btn-danger');
  tdDelete.appendChild(tdBtn);

  tdeventName.textContent = eventName.value;
  tdeventDate.textContent = eventDate.value;
  tdorganizerName.textContent = organizerName.value;
  tdeventLocation.textContent = eventlocation.value;
  tdBtn.textContent = "Delete";


  eventDetail.appendChild(tr);
  tr.appendChild(tdeventName);
  tr.appendChild(tdeventDate);
  tr.appendChild(tdorganizerName);
  tr.appendChild(tdeventLocation);
  tr.appendChild(tdDelete);

}); 