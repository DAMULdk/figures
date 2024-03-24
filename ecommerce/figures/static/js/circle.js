const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 500;

const radius = 100; // Promień koła

function drawCircle(r, d, A, C) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX, centerY - radius);
    ctx.stroke();
    ctx.moveTo(centerX - radius, centerY);
    ctx.lineTo(centerX + radius, centerY);
    ctx.stroke();


    ctx.fillStyle = '#000000';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';

    ctx.fillText('Area = ' + parseFloat(A.toFixed(4)), centerX, centerY + radius + 30);
    ctx.fillText('Circumference = ' + parseFloat(C.toFixed(4)), centerX, centerY + radius + 50);
    ctx.textAlign = 'right';
    ctx.fillText(parseFloat(r.toFixed(4)) || 'r', centerX - 15, centerY - radius / 2 + 10);
    ctx.textAlign = 'left';
    ctx.fillText(parseFloat(d.toFixed(4)) || 'd', centerX + radius + 10, centerY);
}

drawCircle(0, 0, 0, 0);

let lastModifiedField = null;

let inputFields = document.querySelectorAll("input[type='number']");
inputFields.forEach(function(inputField) {
    inputField.addEventListener("input", function() {
        lastModifiedField = inputField.getAttribute("name");
    });
});

document.getElementById("calculate").addEventListener("click", function() {
    let r = parseFloat(form1.num_r.value);
    let d = parseFloat(form1.num_d.value);
    let A = parseFloat(form1.num_A.value);
    let C = parseFloat(form1.num_C.value);

    if (lastModifiedField === "num_r") {
        form1.num_A.value = Math.PI * r * r;
        form1.num_C.value = 2 * Math.PI * r;
        form1.num_d.value = 2 * r;
        drawCircle(r, parseFloat(form1.num_d.value), parseFloat(form1.num_A.value), parseFloat(form1.num_C.value));
        return 0;
    } else if (lastModifiedField === "num_d") {
        r = d / 2;
    } else if (lastModifiedField === "num_A") {
        r = Math.sqrt(A / Math.PI);
    } else if (lastModifiedField === "num_C") {
        r = C / (2 * Math.PI);
    }

    form1.num_r.value = parseFloat(r.toFixed(12));
    form1.num_A.value = parseFloat((Math.PI * r * r).toFixed(12));
    form1.num_C.value = parseFloat((2 * Math.PI * r).toFixed(12));
    form1.num_d.value = parseFloat((2 * r).toFixed(12));
    drawCircle(parseFloat(form1.num_r.value), parseFloat(form1.num_d.value), parseFloat(form1.num_A.value), parseFloat(form1.num_C.value));
});
