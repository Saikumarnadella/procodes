function hmdhide(hmdbtn) {
    var hmd=document.getElementById("hmdbtn");
    var sea=document.getElementById("searcher");
            var edus = document.getElementById("edubtn");
            var educ = document.getElementById("educard");
            var p = document.getElementById("combtn");
            var q = document.getElementById("ccard");
    
            if (hmd.value == "Home") {
            searcher.style.display="block";
            educard.style.display="none";
            ccard.style.display="none";
            shcard.style.display="none";
            } } 
function EDUhide(edubtn) {
    var hmd=document.getElementById("hmdbtn");
var sea=document.getElementById("searcher");
        var edus = document.getElementById("edubtn");
        var educ = document.getElementById("educard");
        var p = document.getElementById("combtn");
        var q = document.getElementById("ccard");
        if (edus.value == "Education") {
        educard.style.display="block";
        ccard.style.display="none";
        shcard.style.display="none";
        searcher.style.display="none";
        } }
    function COMhide(combtn) {
        var hmd=document.getElementById("hmdbtn");
        var sea=document.getElementById("searcher");
		var edus = document.getElementById("edubtn");
        var educ = document.getElementById("educard");
        var p = document.getElementById("combtn");
        var q = document.getElementById("ccard");
        if (p.value == "Compilers") {
		educard.style.display="none";
        ccard.style.display="block";
        shcard.style.display="none";
searcher.style.display="none";
        } 
    }
    function SHOhide(shobtn) {
        var hmd=document.getElementById("hmdbtn");
var sea=document.getElementById("searcher");
		var edus = document.getElementById("edubtn");
        var educ = document.getElementById("educard");
        var p = document.getElementById("combtn");
        var q = document.getElementById("ccard");
        var r = document.getElementById("shobtn");
        var s= document.getElementById("shcard");
        if (r.value == "Shopping") {
		educard.style.display="none";
        ccard.style.display="none";
        shcard.style.display="block";
searcher.style.display="none";
        } 
    }