function factorial(num) {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}

function E(m, n) {
    return Math.round(Math.pow(2, (n - m)) * (factorial(n) / (factorial(m) * factorial(n - m))));
}

function generateTable(n) {
    let names = ['Vertices', 'Edges', 'Faces (squares)', 'Cells (cubes)', 'Tesseracts', 'Penteracts', 'Hexeracts', 'Hepteracts', 'Octeracts', 'Enneracts', 'Dekeracts'];
    if (n >= names.length) {
        let name;
        while  (names.length <= n) {
            name  = (names.length) + 'd cubes';
            names.push(name); 
        };
    }

    var table = document.createElement('table');
    table.classList.add("table1");

    var headerRow2 = table.insertRow();
    var headerCell2 = document.createElement('th');
    headerCell2.colSpan = "2";
    let name;
    if (n == 2){ name = 'Square'; }
    else if (n == 3){ name = 'Cube'; }
    else { name = names[n].slice(0, -1); }
    headerCell2.textContent = name;

    headerRow2.appendChild(headerCell2);

    var headerRow1 = table.insertRow();
    var headerCell1_1 = document.createElement('th');
    var headerCell1_2 = document.createElement('th');
    headerCell1_1.textContent = "Property";
    headerCell1_2.textContent = "Amount";

    headerRow1.appendChild(headerCell1_1);
    headerRow1.appendChild(headerCell1_2);

    for (var i = 0; i < n; i++) {
        var row = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        cell1.textContent = names[i];
        cell2.textContent = E(i, n);
    }
    
    return table;
}


const calculateTesseract = () => {
    const n = parseFloat(form1.num_n.value);
    const s = parseFloat(form1.num_s.value);


    if (n < 2) {
        const info = document.getElementById("info");
        info.innerHTML = "Figure can't be constructed in<br>less than two dimensions";
        info.style.display = "block";
        return;
    } else if (isNaN(n) || isNaN(s)) {
        const info = document.getElementById("info");
        info.innerHTML = "Please provide values for both<br>dimensions (n) and edge length (s).";
        info.style.display = "block";
        return;
    } else {
        const info = document.getElementById("info");
        info.style.display = "none";
    }

    const V = Math.pow(s, n);
    const A = Math.pow(s, 2) * E(2, n);

    form1.num_V.value = parseFloat(V.toFixed(12));
    form1.num_A.value = parseFloat(A.toFixed(12));


    let table = document.querySelector(".table1");
    if (table) {
        table.remove();
    }

    let tableContainer = document.querySelector(".control");
    tableContainer.append(generateTable(n));

    let image = document.getElementById('image');
    if (n == 2) {
        image.src = "/figures/static/images/square.svg";
    } else if (n == 3) {
        image.src = "/figures/static/images/cube.svg";
    } else if (n == 5) {
        image.src = "https://i.redd.it/oetkoa5y3zt91.gif";
    } else if (n == 6) {
        image.src = "https://upload.wikimedia.org/wikipedia/commons/7/7a/Hexeract-q1q4-q2q5-q3q6.gif";
    } else {
        image.src = "https://s2lab.cs.ucl.ac.uk/images/tesseract.gif";
    }
};

document.getElementById("calculate").addEventListener("click", calculateTesseract);
