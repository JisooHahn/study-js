let tempTr = null;
let tempText = null;

const confirm = () => {
    const input = document.getElementById("input").value;
    const trs = document.querySelectorAll("tbody tr");

    // FLAG: 특정 영역에 들어갔는가를 표시하기 위한 목적
    let check = false;

    if (tempTr) {
        tempTr.style.background = "#fff";
        tempTr.firstElementChild.innerHTML = tempText;
    }

    trs.forEach((tr) => {
        let td = tr.firstElementChild;
        if (td.innerHTML === input) {
            tempTr = tr;
            tempText = td.innerHTML;

            check = true;

            tr.style.background = "#ef5350";
            td.innerHTML = "★" + input;
        }
    });

    if (!check) {
        alert("다시 시도해주세요.");
    }
};
