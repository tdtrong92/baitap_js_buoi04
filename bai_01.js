function tangDan(event) {
    event.preventDefault();

    var so_1 = parseInt(document.getElementById("so_1").value);
    var so_2 = parseInt(document.getElementById("so_2").value);
    var so_3 = parseInt(document.getElementById("so_3").value);

    var min = 0;
    var mid = 0;
    var max = 0;

    if (so_1 < so_2 && so_1 < so_3) {
        min = so_1;
    } else if (so_1 < so_2 && so_1 > so_3) {
        min = so_3;
    } else if (so_1 > so_2 && so_1 < so_3) {
        min = so_2;
    }
    if (so_1 > so_2 && so_1 < so_3) {
        mid = so_1;
    } else if (so_1 < so_2 && so_2 < so_3) {
        mid = so_2;
    } else {
        mid = so_3;
    }
    if (so_1 > so_2 && so_1 > so_3) {
        max = so_1;
    } else if (so_1 < so_2 && so_2 > so_3) {
        max = so_2;
    } else if (so_1 < so_3 && so_2 < so_3) {
        max = so_3;
    }

    document.getElementById("pKetQua").style.display = "block";
    document.getElementById("pKetQua").style.fontSize = "40px";
    document.getElementById("pKetQua").innerHTML = min + " " + mid + " " + max;

}