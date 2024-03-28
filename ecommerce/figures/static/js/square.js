const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 500;

const side = 200;

function drawSquare(a, A, p, d) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.strokeRect(centerX - side / 2, centerY - side / 2, side, side);
    ctx.beginPath();
    ctx.moveTo(centerX + side / 2, centerY - side / 2);
    ctx.lineTo(centerX - side / 2, centerY + side / 2);
    ctx.stroke();

    ctx.fillStyle = '#000000';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';

    ctx.fillText('Area = ' + parseFloat(A.toFixed(4)), centerX, centerY + side / 2 + 80);
    ctx.fillText('Perimeter = ' + parseFloat(p.toFixed(4)), centerX, centerY + side / 2 + 100);
    ctx.fillText(parseFloat(a.toFixed(4)) || 'a', centerX, centerY + side / 2 + 15);
    ctx.fillText(parseFloat(a.toFixed(4)) || 'a', centerX, centerY - side / 2 - 8);
    ctx.textAlign = 'right';
    ctx.fillText(parseFloat(a.toFixed(4)) || 'a', centerX - side / 2 - 15, centerY);
    ctx.textAlign = 'left';
    ctx.fillText(parseFloat(a.toFixed(4)) || 'a', centerX + side / 2 + 15, centerY);
    ctx.fillText(parseFloat(d.toFixed(4)) || 'd', centerX + 5, centerY + 20);
}
drawSquare(0, 0, 0, 0);


let lastModifiedField = null;

let inputFields = document.querySelectorAll("input[type='number']");
inputFields.forEach(function(inputField) {
    inputField.addEventListener("input", function() {
        lastModifiedField = inputField.getAttribute("name");
    });
});


document.getElementById("calculate").addEventListener("click", function() {
    let a = parseFloat(form1.num_a.value);
    let d = parseFloat(form1.num_d.value);
    let A = parseFloat(form1.num_A.value);
    let p = parseFloat(form1.num_p.value);

    if (lastModifiedField === "num_A") {
        a = Math.sqrt(A);
    } else if (lastModifiedField === "num_p") {
        a = p / 4;
    } else if (lastModifiedField === "num_d") {
        a = d / Math.sqrt(2);
    }

    form1.num_a.value = parseFloat(a.toFixed(12));
    form1.num_A.value = parseFloat((a * a).toFixed(12));
    form1.num_p.value = parseFloat((a * 4).toFixed(12));
    form1.num_d.value = parseFloat((a * Math.sqrt(2)).toFixed(12));
    drawSquare(a, parseFloat(form1.num_A.value), parseFloat(form1.num_p.value), parseFloat(form1.num_d.value));
});