function Navbar(a){
    var pages = ["home", "aboutme", "projects"];
    var pageslength = pages.length;
    for (var i = 0; i < pages.length; i++) {
        console.log(i);
        if (i == a) {
            document.getElementById(pages[i]).classList.add('blend2');
        }
        else {
            document.getElementById(pages[i]).classList.remove('blend2');
        }
    }
    var pagedivs = ["homediv", "aboutmediv", "projectsdiv"]
    for (var i = 0; i < pagedivs.length; i++) {
        if (document.getElementById(pagedivs[i]).style.display == "block") {
            document.getElementById(pagedivs[i]).style.display = "none"
            break
        }
    }
    document.getElementById(pagedivs[a]).style.display = "block"
}