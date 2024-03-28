document.addEventListener('DOMContentLoaded', function() {

    const coffeeButton = document.getElementById('coffe');
    const donationPopup = document.getElementById('donationPopup');
    const closeButton = document.getElementById('close');

    coffeeButton.addEventListener('click', function() {
        donationPopup.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        donationPopup.style.display = 'none';
    });


    const coffeePrice = 5;
    const espressoPrice = 600;

    const donationForm = document.form2;
    const afford1 = document.getElementById('afford1');
    const afford2 = document.getElementById('afford2');

    donationForm.addEventListener('input', function() {
        const amountInput = parseFloat(donationForm.elements.amount.value);
        const totalCoffee = parseFloat((amountInput / coffeePrice).toFixed(3));

        if (totalCoffee == 1) {
            afford1.textContent = `You can buy me ${totalCoffee} cup of coffee!`;
        } else {
            afford1.textContent = `You can buy me ${totalCoffee} cups of coffee!`;
        }

        if (amountInput >= 200) {
            const totalEspresso = parseFloat((amountInput / espressoPrice).toFixed(3));
            if (totalEspresso == 1) {
                afford2.textContent = `Or ${totalEspresso} espresso machine!`;
            } else {
                afford2.textContent = `Or ${totalEspresso} espresso machines!`;
            }
        } else {
            afford2.textContent = '';
        }
    });
});
