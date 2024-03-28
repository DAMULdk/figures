const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 500;

function drawRect(b, a, A, p, d) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.fillStyle = '#000000';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    let ratio;

    if (a == 0 || b == 0) { 
        a = 200;
        b = 100;
        ratio = a/b;
        if (ratio >= 1) {
            a1 = 50 * ratio;
            b1 = 50;
        } else {
            a1 = 50;
            b1 = 50 / ratio;
        }
        ctx.fillText('a', centerX, centerY + b1 / 2 + 15);
        ctx.fillText('a', centerX, centerY - b1 / 2 - 8);
        ctx.textAlign = 'right';
        ctx.fillText('b', centerX - a1 / 2 - 15, centerY);
        ctx.textAlign = 'left';
        ctx.fillText('b', centerX + a1 / 2 + 15, centerY);
        
    } else {
        ratio = a/b;
        if (ratio >= 1) {
            a1 = 50 * ratio;
            b1 = 50;
        } else {
            a1 = 50;
            b1 = 50 / ratio;
        }
        ctx.fillText(parseFloat(a.toFixed(4)), centerX, centerY + b1 / 2 + 15);
        ctx.fillText(parseFloat(a.toFixed(4)), centerX, centerY - b1 / 2 - 8);
        ctx.textAlign = 'right';
        ctx.fillText(parseFloat(b.toFixed(4)), centerX - a1 / 2 - 15, centerY);
        ctx.textAlign = 'left';
        ctx.fillText(parseFloat(b.toFixed(4)), centerX + a1 / 2 + 15, centerY);
    }

    ctx.fillText(parseFloat(d.toFixed(4)) || 'd', centerX + 5, centerY + 20);
    ctx.textAlign = 'center';

    if (ratio > 0.25) {
        ctx.fillText('Area = ' + parseFloat(A.toFixed(4)), centerX, centerY + b1 / 2 + 80);
        ctx.fillText('Perimeter = ' + parseFloat(p.toFixed(4)), centerX, centerY + b1 / 2 + 100);
    } else {
        ctx.textAlign = 'right';
        ctx.fillText('Area = ' + parseFloat(A.toFixed(4)), centerX - a1 / 2 - 100, centerY - 10);
        ctx.fillText('Perimeter = ' + parseFloat(p.toFixed(4)), centerX - a1 / 2 - 100, centerY + 10);
    }

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.strokeRect(centerX - a1 / 2, centerY - b1 / 2, a1, b1);
    ctx.beginPath();
    ctx.moveTo(centerX + a1 / 2, centerY - b1 / 2);
    ctx.lineTo(centerX - a1 / 2, centerY + b1 / 2);
    ctx.stroke();
}
drawRect(0, 0, 0, 0, 0);


const calculateButton = document.getElementById('calculate');


// Change calculate button text depending on amount of filled fields
form1.addEventListener('input', function() {
    const filledFields = countFilledFields(form1);
    if (filledFields === 2) {
        calculateButton.value = 'Calculate';
    } else {
        calculateButton.value = 'Clear';
    }
});

// Count how many input fields are filled with data
function countFilledFields(form1) {
    let filledCount = 0;
    for (let i = 0; i < form1.elements.length; i++) {
        const element = form1.elements[i];
        if (element.type === 'number' && element.value.trim() !== '') {
            filledCount++;
        }
    }
    return filledCount;
}

calculateButton.addEventListener('click', function () {
    const filledFields = countFilledFields(form1);

    const info = document.getElementById("info");
    info.style.display = "none";

    if (filledFields === 2) {
        calculate();
    } else {
        clearFields(form1);
    }
});

// Clear all inputs in the form
function clearFields(form1) {
    for (let i = 0; i < form1.elements.length; i++) {
        const element = form1.elements[i];
        if (element.type === 'number') {
            element.value = '';
        }
    }
}

function calculate() {
    let sides = [NaN, NaN];
    let A = parseFloat(form1.num_A.value);
    let p = parseFloat(form1.num_p.value);
    let d = parseFloat(form1.num_d.value);
    if (form1.elements['num_a'].value.trim() !== '') {
        sides[0] = parseFloat(form1.elements['num_a'].value);
    }
    if (form1.elements['num_b'].value.trim() !== '') {
        sides[1] = parseFloat(form1.elements['num_b'].value);
    }


    if (!isNaN(sides[0]) && !isNaN(sides[1])) {
        // if we know 2 sides
        let a = sides[0];
        let b = sides[1];
        A = a * b;
        p = 2 * (a + b);
        d = Math.sqrt(a**2 + b**2);
        
    } else if (!isNaN(A) && !isNaN(p)) {
        // if we know area and perimeter
        let a = (-(-p/2) + Math.sqrt((p/2)*(p/2) - 4*1* A)) / (2*1);
        let b = A / a;
        d = Math.sqrt(a**2 + b**2);
        sides = [a, b];

    } else if (!isNaN(A) && !isNaN(d)) {
        // if we know area and diameter
        var a = Math.sqrt((d * d - Math.sqrt(d * d * d * d - 4 * A * A)) / 2);
        var b = A / a;
        p = 2 * (a + b);
        sides = [a, b];

    } else if (!isNaN(p) && !isNaN(d)) {
        // if we know perimeter and diameter
        var a = (p + Math.sqrt(-Math.pow(p,2) + 8 * Math.pow(d, 2))) / 4;
        var b = (p - Math.sqrt(-Math.pow(p,2) + 8 * Math.pow(d, 2))) / 4
        console.log(a);
        A = a * b;
        sides = [a, b];

    } else if (!isNaN(A) && (!isNaN(sides[0]) || !isNaN(sides[1]))) {
        // if we know area and one side
        if (!isNaN(sides[0])) {
            var a = sides[0];
            var b = A / a;
        } else {
            var b = sides[1];
            var a = A / b;
        }
        p = 2 * (a + b);
        d = Math.sqrt(a**2 + b**2);
        sides = [a, b];

    } else if (!isNaN(p) && (!isNaN(sides[0]) || !isNaN(sides[1]))) {
        // if we know perimeter and one side
        if (!isNaN(sides[0])) {
            var a = sides[0];
            var b = (p-2*a)/2;
        } else {
            var b = sides[1];
            var a = (p-2*b)/2;
        }
        A = a * b
        d = Math.sqrt(a**2 + b**2);
        sides = [a, b];

    } else if (!isNaN(d) && (!isNaN(sides[0]) || !isNaN(sides[1]))) {
        // if we know diameter and one side
        if (!isNaN(sides[0])) {
            var a = sides[0];
            var b = Math.sqrt(Math.pow(d, 2) - Math.pow(a, 2));;
        } else {
            var b = sides[1];
            var a = Math.sqrt(Math.pow(d, 2) - Math.pow(b, 2));
        }
        A = a * b;
        p = 2 * (a + b);
        sides = [a, b];
    }

     if ([a, b, A, p, d].some(value => Number.isNaN(value)) || [a, b, A, p, d].some(value => value <= 0)) {
         const info = document.getElementById("info");
         info.innerHTML = "You can't build rectangle using<br>these values.";
         info.style.display = "block";
         return;
     } else {
         const info = document.getElementById("info");
         info.style.display = "none";
    }

    form1.num_a.value = parseFloat(sides[0].toFixed(12));
    form1.num_b.value = parseFloat(sides[1].toFixed(12));
    form1.num_A.value = parseFloat(A.toFixed(12));
    form1.num_p.value = parseFloat(p.toFixed(12));
    form1.num_d.value = parseFloat(d.toFixed(12));
    
    drawRect(sides[0], sides[1], A, p, d);
    calculateButton.value = 'Clear';
}