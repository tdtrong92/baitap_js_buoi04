function chanLe(event) {
    event.preventDefault();

    var so_1 = +document.getElementById("so_1").value;
    var so_2 = +document.getElementById("so_2").value;
    var so_3 = +document.getElementById("so_3").value;

    var chan = 0;
    var le = 0;

    if (so_1 % 2 !== 0) {
        le = le + 1;
    } else {
        chan = chan + 1;
    }
    console.log(chan, le)
    if (so_2 % 2 !== 0) {
        le = le + 1;
    } else {
        chan = chan + 1;
    }
    if (so_3 % 2 !== 0) {
        le = le + 1;
    } else {
        chan = chan + 1;
    }

    document.getElementById("pKetQua").style.display = "block";
    document.getElementById("pKetQua").style.fontSize = "40px";
    document.getElementById("pKetQua").innerHTML = "Có " + chan + " số chẵn và " + le + " số lẻ";

}