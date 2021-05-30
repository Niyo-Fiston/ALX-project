document.addEventListener("DOMContentLoaded", function(event) {
/*    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
	if (thumbnailElement.className == "small"){
	    thumbnailElement.className = "";
	}
	else{
	    thumbnailElement.className = "small";
	}
    });
*/
    let formSubmit = document.getElementById("contact-form");
    formSubmit.addEventListener("submit",(e)=> {
	e.preventDefault();
	alert('we have problem sending your message connect with us via socail media!');
    });
    

});
