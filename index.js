function getInputValue(id) {
    return parseFloat(document.getElementById(id).value);
}

function getInnerText(id) {
    return parseFloat(document.getElementById(id).innerText);
}

function getMainBalanceById(id) {
    return parseFloat(document.getElementById(id).innerText);
}

const btndonation = document.getElementById('btn-donation');
const btnHistory = document.getElementById('btn-history');

btndonation.addEventListener('click', function () {
    btndonation.classList.add("bg-[#B4F461]", "font-semibold");
    btnHistory.classList.remove("bg-[#B4F461]", "font-semibold")
    document.getElementById('donation-tab').classList.remove('hidden');
    document.getElementById('history-tab').classList.add('hidden');
});


// history button
btnHistory.addEventListener('click', function () {
    btnHistory.classList.add("bg-[#B4F461]", "font-semibold");
    btndonation.classList.remove("bg-[#B4F461]", "font-semibold");
    document.getElementById('donation-tab').classList.add('hidden');
    document.getElementById('history-tab').classList.remove('hidden')
});

const noakhaliDonate = document.getElementById('btn-noakhali-donate')
    .addEventListener('click', function () {
        console.log('noakhali clicked')
        const noakhaliInput = getInputValue('input-noakhali');
        const totalDonateAmount = getInnerText('donate-amount-noakhali');
        const donate = noakhaliInput + totalDonateAmount;
        const mainBalance = getMainBalanceById('current-balance');
        const updateBalance = mainBalance - noakhaliInput;

        if (noakhaliInput <= 0 || isNaN(noakhaliInput) || noakhaliInput > mainBalance) 
        {
                alert('Your Input Is Invalid! Please try again');
                return;
        };

        document.getElementById('donate-amount-noakhali').innerText = donate;
        document.getElementById('current-balance').innerText = updateBalance;
        // added history section
        const historyItem = document.createElement('div');
        historyItem.className = "bg-white p-5 mt-3 rounded-md border shadow-lg ";
        historyItem.innerHTML =
            `
                <h1 class="text-black font-semibold text-xl">${noakhaliInput} Donate for Flood at Noakhali, Bangladesh</h1>
                <p class="text-xs text-gray-500 font-semibold">Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
            `
        const historyContainer = document.getElementById('history-list');
        historyContainer.insertBefore(historyItem, historyContainer.lastChild);
        donation_modal.showModal();
        document.getElementById('input-noakhali').value='';
    });



const feniDonate = document.getElementById('input-feni')
    .addEventListener('click', function () {
        const feniInput = getInputValue('feni-input');
        const feniDonation = getInnerText('donate-amount-feni');
        const totalDonateAmount = feniInput + feniDonation;
        const mainBalance = getMainBalanceById('current-balance');
        const updateBalance = mainBalance - feniInput;
        if (feniInput <= 0 ||
            isNaN(feniInput) ||
            feniInput > mainBalance) {
            alert('Your Input Is Invalid! Please try again');
            return;
        };
        document.getElementById('donate-amount-feni').innerText = totalDonateAmount;
        document.getElementById('current-balance').innerText = updateBalance;

        // added history section
        const historyItem = document.createElement('div');
        historyItem.className = "bg-white p-5 mt-3 rounded-md border shadow-lg ";
        historyItem.innerHTML =
            `
                <h1 class="text-black font-semibold text-xl">${feniInput} 
                Donate for Flood Relief in Feni,Bangladesh</h1>
                <p class="text-xs text-gray-500 font-semibold">Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
            `
        const historyContainer = document.getElementById('history-list');
        historyContainer.insertBefore(historyItem, historyContainer.lastChild);
        donation_modal.showModal();
        document.getElementById('feni-input').value='';
    });

const quotaMovementDonation = document.getElementById('btn-quota').addEventListener('click', function () {
        const quotaInput = getInputValue('input-quota');
        const quotaDonated = getInnerText('quota-inner-amount');
        const totalquotaDonated = quotaInput + quotaDonated;
        const mainBalance = getMainBalanceById('current-balance');
        const updateBalance = mainBalance - quotaInput;

        if (quotaInput <= 0 ||
            isNaN(quotaInput) ||
            quotaInput > mainBalance) {
            alert('Your Input Is Invalid! Please try again');
            return;
        };

        document.getElementById('quota-inner-amount').innerText = totalquotaDonated;
        document.getElementById('current-balance').innerText = updateBalance;


        // added history section
        const historyItem = document.createElement('div');
        historyItem.className = "bg-white p-5 mt-3 rounded-md border shadow-lg ";
        historyItem.innerHTML =
            `
                <h1 class="text-black font-semibold text-xl">${quotaInput}
                Aid for Injured in the Quota Movement</h1>
                <p class="text-xs text-gray-500 font-semibold">Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
            `
        const historyContainer = document.getElementById('history-list');
        historyContainer.insertBefore(historyItem, historyContainer.lastChild);
        donation_modal.showModal();
        document.getElementById('input-quota').value=''; 
    });