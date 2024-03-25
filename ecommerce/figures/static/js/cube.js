const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 500;

const side = 200; // Długość boku sześcianu

function drawCube(a, V, A, d) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;

    ctx.strokeRect(centerX - side / 2 - 70, centerY - side / 2 - 50, side, side);

    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(centerX + side / 2, centerY + side / 2);
    ctx.lineTo(centerX - side / 2 - 70, centerY - side / 2 - 50);
    ctx.closePath();
    ctx.stroke();

    ctx.strokeStyle = 'black';
    ctx.strokeRect(centerX - side / 2, centerY - side / 2, side, side);

    ctx.beginPath();

    ctx.moveTo(centerX + side / 2 - 70, centerY - side / 2 - 50);
    ctx.lineTo(centerX + side / 2, centerY - side / 2);

    ctx.moveTo(centerX - side / 2 - 70, centerY + side / 2 - 50);
    ctx.lineTo(centerX - side / 2, centerY + side / 2);

    ctx.moveTo(centerX + side / 2 - 70, centerY + side / 2 - 50);
    ctx.lineTo(centerX + side / 2, centerY + side / 2);

    ctx.moveTo(centerX - side / 2 - 70, centerY - side / 2 - 50);
    ctx.lineTo(centerX - side / 2, centerY - side / 2);

    ctx.closePath();
    ctx.stroke();

    ctx.fillStyle = '#000000';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';

    ctx.fillText('Volume = ' + parseFloat(V.toFixed(4)), centerX, centerY + side / 2 + 80);
    ctx.fillText('Surface Area = ' + parseFloat(A.toFixed(4)), centerX, centerY + side / 2 + 100);
    ctx.fillText(parseFloat(a.toFixed(4)) || 'a', centerX, centerY + side / 2 + 15);
    ctx.fillText(parseFloat(a.toFixed(4)) || 'a', centerX, centerY - side / 2 - 8);
    ctx.textAlign = 'right';
    ctx.fillText(parseFloat(a.toFixed(4)) || 'a', centerX - side / 2 - 15, centerY);
    ctx.fillText(parseFloat(a.toFixed(4)) || 'a', centerX - side / 2 - 45, centerY + side / 2 - 15);
    ctx.textAlign = 'left';
    ctx.fillText(parseFloat(a.toFixed(4)) || 'a', centerX + side / 2 + 15, centerY);
    ctx.fillText(parseFloat(d.toFixed(4)) || 'd', centerX + 5, centerY);
}
drawCube(0, 0, 0, 0);


let lastModifiedField = null;

let inputFields = document.querySelectorAll("input[type='number']");
inputFields.forEach(function(inputField) {
    inputField.addEventListener("input", function() {
        lastModifiedField = inputField.getAttribute("name");
    });
});

document.getElementById("calculate").addEventListener("click", function() {
    let a = parseFloat(form1.num_a.value);
    let V = parseFloat(form1.num_V.value);
    let A = parseFloat(form1.num_A.value);
    let d = parseFloat(form1.num_d.value);

    if (lastModifiedField === "num_V") {
        a = Math.cbrt(V);
    } else if (lastModifiedField === "num_A") {
        a = Math.sqrt(A / 6);
    } else if (lastModifiedField === "num_d") {
        a = d / Math.sqrt(3);
    }

    form1.num_a.value = parseFloat(a.toFixed(12));
    form1.num_V.value = parseFloat((a * a * a).toFixed(12));
    form1.num_A.value = parseFloat((6 * a * a).toFixed(12));
    form1.num_d.value = parseFloat((Math.sqrt(3) * a).toFixed(12));
    drawCube(parseFloat(form1.num_a.value), parseFloat(form1.num_V.value), parseFloat(form1.num_A.value), parseFloat(form1.num_d.value));
});
