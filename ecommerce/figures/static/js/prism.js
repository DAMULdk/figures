const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 500;

function drawPrism(n, s, h) {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2 + 100;
    const radius = 75;
    h = h/s * 85 / (n / Math.PI);
    const angle = (2 * Math.PI) / n;

    // Corners
    const baseVertices = [];
    for (let i = 0; i < n; i++) {
        const x = centerX + radius * Math.cos(i * angle - Math.PI / 2);
        const y = centerY + radius * Math.sin(i * angle - Math.PI / 2);
        baseVertices.push({ x, y });
    }

    // Base
    ctx.beginPath();
    ctx.moveTo(baseVertices[0].x, baseVertices[0].y);
    for (let i = 1; i < n; i++) {
        ctx.lineTo(baseVertices[i].x, baseVertices[i].y);
    }
    ctx.closePath();
    ctx.stroke();

    // Sides
    for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.moveTo(baseVertices[i].x, baseVertices[i].y);
        ctx.lineTo(baseVertices[(i + 1) % n].x, baseVertices[(i + 1) % n].y);
        ctx.lineTo(baseVertices[(i + 1) % n].x, baseVertices[(i + 1) % n].y - h);
        ctx.lineTo(baseVertices[i].x, baseVertices[i].y - h);
        ctx.closePath();
        ctx.stroke();
    }
};



const showError = () => {
    const info = document.getElementById("info");
    info.innerHTML = "Please provide values for all<br>three parameters (n, s, and h).";
    info.style.display = "block";
};

const hideError = () => {
    const info = document.getElementById("info");
    info.style.display = "none";
};

const calculatePrism = () => {
    const n = parseFloat(form1.num_n.value);
    const s = parseFloat(form1.num_s.value);
    const h = parseFloat(form1.num_h.value);

    if (isNaN(n) || isNaN(s) || isNaN(h)) {
        showError();
        return;
    } else {
        hideError();
    }

    const A2 = 0.25 * n * (1/Math.tan(Math.PI/n)) * s**2;
    const V = h * A2;
    const A3 = n * s * h;
    const A = 2 * A2 + A3;
    const v = 2 * n;
    const e = 3 * n;

    form1.num_V.value = parseFloat(V.toFixed(12));
    form1.num_A.value = parseFloat(A.toFixed(12));
    form1.num_A2.value = parseFloat(A2.toFixed(12));
    form1.num_A3.value = parseFloat(A3.toFixed(12));
    form1.num_v.value = parseFloat(v.toFixed(12));
    form1.num_e.value = parseFloat(e.toFixed(12));

    drawPrism(n, s, h);
};

document.getElementById("calculate").addEventListener("click", calculatePrism);
