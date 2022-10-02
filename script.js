function custommodal(a) {
    var modal = document.getElementById("myModal");
    var img = document.getElementById(a);
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

function closemodal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function Navbar(a){
    // var pages = ["home", "aboutme", "aeronus", "eg3301r", "eg2310", "otherprojects"];
    // var pageslength = pages.length;
    // var pagedivs = ["homediv", "aboutmediv", "aeronusdiv", "eg3301rdiv", "eg2310div", "otherprojectsdiv"]
    // for (var i = 0; i < pagedivs.length; i++) {
    //     if (document.getElementById(pagedivs[i]).style.display == "block") {
    //         document.getElementById(pagedivs[i]).style.display = "none"
    //         break
    //     }
    // }
    // document.getElementById(pagedivs[a]).style.display = "block"
    var pages = ["home", "about", "education", "work", "projects", "leadership", "skills"]
    var pixels = [10, 20, 30, 40, 50, 60, 70]
    for (var i = 0; i < pages.length; i++) {
        if (i == a) {
            document.getElementById(pages[i]).classList.add('blend2');
        }
        else {
            document.getElementById(pages[i]).classList.remove('blend2');
        }
    }
    window.scrollTo(0, 2000);
}