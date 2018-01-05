function myFunction() {

    var x = document.getElementById("myDIV");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



var objPeople = [
	{ // Object @ 0 index
		username: "manager",
		password: "manager123",
		login:'no'
	},
	{ // Object @ 1 index
		username: "staff1",
		password: "staff123",
		login:'no'
	},


]

function storeuserinfo(){
	var userdata = localStorage.getItem('udata') || "[]";
	userdata=JSON.parse(userdata);
	var usedata= new data("manager", "manager123");
	var usedata1= new data("staff1", "staff123");
	var usedata2= new data("staff2", "staff234");
	userdata.push(usedata);
	userdata.push(usedata1);
	userdata.push(usedata2);
	console.log(userdata);
	localStorage.setItem("udata", JSON.stringify(userdata));
}

function retrieveuserinfo(){
	storeuserinfo();
	var retrieve;
	var storedData = localStorage.getItem("udata");
	retrieve = JSON.parse(storedData);
	console.log(retrieve);
	for (var i=0; i<retrieve.length; i++){
		var username = document.getElementById('username').value
		var password = document.getElementById('password').value
		if(username == retrieve[i].us & password == retrieve[i].pd)
			{
				alert('You are logged in.')
				var logg = localStorage.getItem('usdata') || "[]";
				logg=JSON.parse(logg);
				var use= new loggedin(retrieve[i].us);
				logg.push(use);
				console.log(logg);
				localStorage.setItem("usdata", JSON.stringify(logg));
				retrieve[i].login='yes'
				window.location='/existinguser'
				return true;
			}
		}
	alert('You are not logged in.');
}

function data(us, pd){
	this.us=us;
	this.pd=pd;
}

function loggedin(user){
	this.user=user;
}
