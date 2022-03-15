
document.getElementById("theme-toggle").addEventListener("change", function() {
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");
});



function sidebar() {
	i++;

	document.getElementById("lineTop2").style.transform = "rotate(45deg)";
	document.getElementById("lineTop2").style.top = "5px";
	document.getElementById("lineBottom2").style.transform = "rotate(-45deg)";
	document.getElementById("lineBottom2").style.bottom = "5px";

	document.getElementById("lineTop1").style.transform = "rotate(45deg)";
	document.getElementById("lineTop1").style.top = "5px";
	document.getElementById("lineBottom1").style.transform = "rotate(-45deg)";
	document.getElementById("lineBottom1").style.bottom = "5px";


	if (i % 2 == 0) {
		setTimeout(() => { 
		document.getElementById("content").style.paddingLeft = "230px";

			document.getElementById("sidebar-container").classList.toggle("visible");		
		}, 300);
	} else {

		document.getElementById("content").style.paddingLeft = "0";

		document.getElementById("lineTop2").style.transform = "rotate(0)";
		document.getElementById("lineTop2").style.top = "0";
		document.getElementById("lineBottom2").style.transform = "rotate(0)";
		document.getElementById("lineBottom2").style.bottom = "0";

		document.getElementById("lineTop1").style.transform = "rotate(0)";
		document.getElementById("lineTop1").style.top = "0";
		document.getElementById("lineBottom1").style.transform = "rotate(0)";
		document.getElementById("lineBottom1").style.bottom = "0";


				c1.9-4.3,3.5-8.7,5-13.3c0.7-2.3,1.4-4.6,2-6.9l1-3.5l0.6-1.8c0.1-0.3,0.2-0.6,0.4-0.9c0.2-0.3,0.2-0.6,0.7-1.1l0,0l0.1-0.1
				l0.2-0.1c0.2,0,0.4,0,0.5,0c0.1,0,0.2,0.1,0.3,0.1c0.1,0.1,0.2,0.2,0.3,0.2c0.1,0.1,0.2,0.2,0.3,0.4c0.2,0.2,0.3,0.4,0.5,0.6
				c0.3,0.4,0.5,0.9,0.8,1.3c0.5,0.9,0.9,1.7,1.2,2.6c0.7,1.8,1.4,3.6,1.9,5.4c1.1,3.6,1.8,7.3,2.6,11c1.5,7.4,2.8,14.7,4,22.1
				c2.3,14.8,3.8,29.8,4,44.8c0.1,7.5-0.2,15.1-1.2,22.6c-0.5,3.8-1.3,7.5-2.4,11.2c-1.2,3.7-2.7,7.3-5.3,10.4
				c-2.5,3.1-6.5,5.4-10.6,5.5c-1,0-2,0.1-3.1-0.2c-1.2-0.3-2.2-0.9-3-1.7c-1.6-1.8-2.1-3.9-2.3-5.9c-0.4-4,0.1-7.8,0.7-11.5
				c0.6-3.7,1.5-7.4,2.4-11c3.9-14.5,8.8-28.6,13.4-42.8C89.6,110.2,94.3,96,99.1,82c4.8-14.1,9.7-28.2,13.2-42.5
				c1.7-7.2,3.2-14.4,3.4-21.6c0.1-3.5-0.2-7.1-1.6-9.9c-0.7-1.4-1.6-2.4-2.9-3c-1.2-0.6-2.8-0.8-4.4-0.8l0.2,0
				c-2.1,0.2-4,3.2-5.1,6.2c-1.1,3.1-1.8,6.4-2.3,9.8c-0.9,6.8-1.1,13.7-1,20.7c0.3,13.9,1.9,27.8,4.9,41.4
				c1.5,6.8,3.3,13.5,5.9,19.9c1.3,3.2,2.8,6.3,4.7,9.2c1.9,2.8,4.2,5.4,7.4,6.4c1.5,0.6,3.2,0.8,4.8,0.5c1.6-0.3,3-1.2,4.2-2.3
				c2.4-2.4,3.7-5.7,4.5-9c0.7-3.4,0.8-6.9,0.3-10.3c-0.5-3.4-1.8-6.8-3.9-9.6c2.3,2.7,3.7,6,4.4,9.5c0.7,3.5,0.7,7.1,0.1,10.6
				c-0.6,3.5-1.9,7-4.4,9.7c-1.3,1.3-2.9,2.4-4.8,2.8c-1.9,0.4-3.8,0.2-5.6-0.3c-1.8-0.6-3.4-1.5-4.8-2.7c-1.4-1.2-2.6-2.6-3.6-4.1
				c-2.1-2.9-3.7-6.1-5.1-9.4c-2.8-6.5-4.8-13.3-6.5-20.2C97.8,69,95.8,55,95.2,40.9c-0.3-7.1-0.3-14.2,0.6-21.3
				c0.5-3.6,1.1-7.1,2.4-10.7c0.6-1.8,1.4-3.5,2.6-5.2c1.2-1.6,3.1-3.3,5.6-3.7l0.1,0l0.1,0c2.1-0.1,4.4,0.1,6.5,1.1
				c2.1,1,3.8,2.9,4.8,4.8c2,4,2.2,8,2.2,11.9c-0.1,7.8-1.6,15.3-3.3,22.6c-3.5,14.7-8.1,29-13,43.1c-4.9,14.1-10.6,28-15.9,41.9
				c-5.4,13.9-10.5,28-14.1,42.4c-0.9,3.6-1.7,7.2-2.3,10.8c-0.6,3.6-1,7.3-0.6,10.8c0.2,1.7,0.7,3.4,1.7,4.4c0.9,1,2.4,1.2,4.2,1.1
				c3.4-0.2,6.5-2,8.6-4.7c2.2-2.7,3.6-6.1,4.6-9.5c1-3.5,1.7-7.1,2.1-10.7c0.9-7.3,0.9-14.7,0.7-22.1c-0.5-14.8-2.4-29.6-4.6-44.2
				c-1.2-7.3-2.5-14.6-4-21.9c-0.8-3.6-1.6-7.2-2.4-10.9c-0.4-1.8-0.7-3.6-1-5.5l-0.4-2.7l-0.2-1.3L80,60.8l0-0.2c0,0,0,0,0,0
				c0,0,0.1,0,0.1,0c0.1,0,0.2,0.1,0.3,0l0.3-0.1v0c0.1,0-0.1,0.3-0.1,0.5c-0.1,0.3-0.1,0.5-0.2,0.8l-0.3,1.8l-0.5,3.6
				c-0.4,2.4-0.8,4.8-1.4,7.2c-1.1,4.8-2.7,9.4-4.8,13.9c-4.2,8.9-10.2,17.1-17.9,23.3c-7.7,6.2-17.1,10.1-26.6,11.9
				C19.4,125.3,9.6,125.3,0,124.1z" /
$(document).ready(function() {
    $('#register #create').click(function() {
        $('#register').hide();
        $('#home').fadeToggle(3000);
        let name = $('#register #name').val();
        $('#home #header #name').text(name);
       swal('Login completed', 'Login completed. Thank you ' + name + ' for using Skyler OS ', 'success');
    });
    setInterval(function() {
        let hour = new Date();
        let h = hour.getHours();
        let m = hour.getMinutes();
        let d = hour.getDate();
        let mo = hour.getMonth();
        let y = hour.getFullYear();
        if(h < 10) {
            h = '0' + h;
        }
        if(m < 10) {
            m = '0' + m;
        }
        if(d < 10) {
            d = '0' + d;
        }
        if(mo < 10) {
            mo = '0' + mo;
        }
        $('#hour').text(h + ':' + m);
        $('#date').text(d + '/' + mo + '/' + y);
    }, 1000);
    function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
  function closeSearch() {
const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);
var w = window.innerWidth;
var h = window.innerHeight;
}


}
});