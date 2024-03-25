const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 500;

const radius = 100;

function drawSphere(r, V, A) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.strokeStyle = '#ccc';
    ctx.ellipse(centerX,centerY, radius / 3, radius, 0, 0.5 * Math.PI, 1.5 *Math.PI, true);
    ctx.stroke();
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(centerX,centerY, radius / 3, radius, 0, 0.5 * Math.PI, 1.5 *Math.PI);
    ctx.stroke();

    ctx.fillStyle = '#000000';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';

    ctx.fillText('Volume = ' + parseFloat(V.toFixed(4)), centerX, centerY + radius + 80);
    ctx.fillText('Surface Area = ' + parseFloat(A.toFixed(4)), centerX, centerY + radius + 100);
    ctx.fillText(parseFloat(r.toFixed(4)) || 'r', centerX, centerY - radius - 10);
}

drawSphere(0, 0, 0);

let lastModifiedField = null;

let inputFields = document.querySelectorAll("input[type='number']");
inputFields.forEach(function(inputField) {
    inputField.addEventListener("input", function() {
        lastModifiedField = inputField.getAttribute("name");
    });
});

document.getElementById("calculate").addEventListener("click", function() {
    let r = parseFloat(form1.num_r.value);
    let V = parseFloat(form1.num_V.value);
    let A = parseFloat(form1.num_A.value);

    if (lastModifiedField === "num_V") {
        r = Math.cbrt((3 * V) / (4 * Math.PI));
    } else if (lastModifiedField === "num_A") {
        r = Math.sqrt(A / (4 * Math.PI));
    }

    form1.num_r.value = parseFloat(r.toFixed(12));
    form1.num_V.value = parseFloat((4 / 3) * Math.PI * Math.pow(r, 3).toFixed(12));
    form1.num_A.value = parseFloat((4 * Math.PI * Math.pow(r, 2)).toFixed(12));
    drawSphere(parseFloat(form1.num_r.value), parseFloat(form1.num_V.value), parseFloat(form1.num_A.value));
});
