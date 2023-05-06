//  ALL DIVs
// dashborad div
let boxDiv = document.querySelector(".box-info");

// all registered users div
let allRegistrationDiv = document.querySelector("#all-users-div");
allRegistrationDiv.style.display = "none";

// all new requests div
let newRequestDiv = document.querySelector("#new-request-div");
newRequestDiv.style.display = "none";





// --------------------------------------------------
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
// const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

// menuBar.addEventListener('click', function () {
// 	sidebar.classList.toggle('hide');
// })



const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})


if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})







// ------------------------new code----------------------------------

let ds = document.querySelectorAll(".sdbtn")
ds.forEach((ele)=>{	
	ele.addEventListener("click",(e)=>{
		console.log(e.target.innerText);
		if(e.target.innerText === "All Registrations"){
			fetchAllRegistration();
		}
		else if(e.target.innerText === "New Requests"){
			fetchNewRequest();
		}
	})
})

// all registrations
async function fetchAllRegistration(){
	showAllRegistration();
}

function showAllRegistration(){
	allRegistrationDiv.style.display = "block";
	boxDiv.style.display = "none";
	newRequestDiv.style.display = "none";
	
}


// pending request
async function fetchNewRequest(){
	//  await fetch('https://bookmyshoot-backend.onrender.com/user/pending',{
	// 	method: "GET",
  	// 		headers: {"Content-type": "application/json;charset=UTF-8",
	// 				  "authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDU0ZWIyYTQyZTc4OGJmM2Y2NTBiNmEiLCJpYXQiOjE2ODMzMTEzNTMsImV4cCI6MTY4MzMxNDk1M30.KpBjivnrwbUrPc5eYmg0KRgZTACtULpZ_nfdgv8TUuk"
	// 				}
	//  	})
	// 		.then((res)=>res.json())
	// 		.then((data)=>{
	// 			console.log(data);
				// showNewRequest(data);
				showNewRequest();
			// })
			// .catch((err)=>console.log(err));
}

function showNewRequest(){
	boxDiv.style.display = "none";
	newRequestDiv.style.display = "block";
	allRegistrationDiv.style.display = "none"
}