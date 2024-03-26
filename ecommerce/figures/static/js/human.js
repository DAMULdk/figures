document.getElementById("body").style.scale = 0.7;

const showError = () => {
    const info = document.getElementById("info");
    info.innerHTML = "Please provide values for all<br>three parameters (n, s, and h).";
    info.style.display = "block";
};

const hideError = () => {
    const info = document.getElementById("info");
    info.style.display = "none";
};

function calculateHumanBody() {
    const height = parseFloat(form1.num_h.value);
    const weight = parseFloat(form1.num_w.value);

    if (isNaN(height) || isNaN(weight)) {
        showError();
        return;
    } else {
        hideError();
    }

    let volume = weight * 1.01523;
    let surfaceArea = Math.sqrt((weight * height) / 3600);
    let bmi = weight / Math.pow(height / 100, 2);

    console.log(bmi);

    form1.num_V.value = volume.toFixed(2);
    form1.num_A.value = surfaceArea.toFixed(2);
    form1.num_BMI.value = bmi.toFixed(2);

    if (bmi > 100) { bmi = 100; };
    const image = document.getElementById("body");
    image.style.display = "block";
    const scaleFactor = bmi / 22;
    image.style.transform = "scaleX(" + scaleFactor + ")";
}

document.getElementById("calculate").addEventListener("click", calculateHumanBody);