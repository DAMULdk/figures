


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
    let sides = [];
    let A = parseFloat(form1.num_A.value);
    let p = parseFloat(form1.num_p.value);
    let d = parseFloat(form1.num_d.value);
    if (form1.elements['num_a'].value.trim() !== '') {
        sides.push(parseFloat(form1.elements['num_a'].value));
    }
    if (form1.elements['num_a'].value.trim() !== '') {
        sides.push(parseFloat(form1.elements['num_b'].value));
    }


    if (sides.length === 2) {
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
        sides.push(a, b);

    } else if (!isNaN(A) && !isNaN(d)) {
        // if we know area and diameter
        var a = Math.sqrt((d * d - Math.sqrt(d * d * d * d - 4 * A * A)) / 2);
        var b = A / a;
        p = 2 * (a + b);
        sides.push(a, b);

    } else if (!isNaN(p) && !isNaN(d)) {
        // if we know perimeter and diameter
        

        
        A = a * b;
        sides.push(a, b);

    } else if (!isNaN(A) && (!isNaN(sides[0]) || !isNaN(sides[1]))) {
        // if we know area and one side

    } else if (!isNaN(d) && (!isNaN(sides[0]) || !isNaN(sides[1]))) {
        // if we know diameter and one side

    } else if (!isNaN(p) && (!isNaN(sides[0]) || !isNaN(sides[1]))) {
        // if we know perimeter and one side
    }

    form1.num_a.value = parseFloat(sides[0].toFixed(12));
    form1.num_b.value = parseFloat(sides[1].toFixed(12));
    form1.num_A.value = parseFloat(A.toFixed(12));
    form1.num_p.value = parseFloat(p.toFixed(12));
    form1.num_d.value = parseFloat(d.toFixed(12)); 
}