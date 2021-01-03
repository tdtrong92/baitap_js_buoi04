function tamGiac(event) {

    event.preventDefault();

    var a = +document.getElementById("canh_1").value;
    var b = +document.getElementById("canh_2").value;
    var c = +document.getElementById("canh_3").value;

    var ketQua = 0;

    if (a === b && b === c) {
        ketQua = "Tam giác đều";
    } else if ((a === b && a != c) || (a === c && a != b) || (b === c && a != c)) {
        ketQua = "Tam giác cân"
    } else if ((a * a + b * b) === (c * c) || (a * a + c * c) === (b * b) || (b * b + c * c) === (a * a)) {
        ketQua = "Tam giác vuông";
    } else {
        ketQua = "Tam giác thường";
    }
    document.getElementById("pKetQua").style.display = "block";
    document.getElementById("pKetQua").style.fontSize = "40px";
    document.getElementById("pKetQua").innerHTML = ketQua;

}