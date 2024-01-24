function myFunction() {
    var input, filter, ul, li, video, h1, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        video = li[i].getElementsByTagName("video")[0];
        h1 = li[i].getElementsByTagName("h1")[0];

        // Check if either the video or the header contains the filter text
        txtValue = (video ? video.src : "") + (h1 ? h1.textContent || h1.innerText : "");

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}