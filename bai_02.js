
function chao(event) {

    event.preventDefault();

    var member = document.getElementById("who").value;
    var chaoHoi = 0;

    if (member === "B") {
        chaoHoi = "Chào Ba";
    } else if (member === "M") {
        chaoHoi = "Chào Mẹ";
    } else if (member === "A") {
        chaoHoi = "Chào Anh";
    } else if (member === "E") {
        chaoHoi = "Chào Em";
    } else {
        chaoHoi = "Nhập sai Bố : B; Mẹ : M; Anh : A; Em : E";
    }
    document.getElementById("pKetQua").style.display = "block";
    document.getElementById("pKetQua").style.fontSize = "40px";
    document.getElementById("pKetQua").innerHTML = chaoHoi;
}