

function toFloatByIdValue(id){
    return parseFloat(document.getElementById(id).value);
}
function toFloatByIdText(id){
    return parseFloat(document.getElementById(id).innerText);
}
function textById(id){
    return document.getElementById(id).innerText;
}
function valueById(id){
    return document.getElementById(id).value;
}

function donate(donateAmountId,totalDonationId,titleId){

    const donateAmount = toFloatByIdValue(donateAmountId);
    let balance = toFloatByIdText('balance');

    if(isNaN(donateAmount) || donateAmount <=0){
        alert("Please enter valid amount");
        // my_modal_1.showModal();
        return;
    }
    else if(donateAmount > balance ){
        document.getElementById('insufficient').innerText = balance;
        my_modal_2.showModal();
        return;
    }
    
    let noakhaliTotalDonation = toFloatByIdText(totalDonationId);
    noakhaliTotalDonation = noakhaliTotalDonation + donateAmount;
    document.getElementById('modal-amount').innerText = donateAmount;
    document.getElementById(totalDonationId).innerText = noakhaliTotalDonation;

    balance = balance - donateAmount;
    document.getElementById('balance').innerText = balance;
    my_modal.showModal();
    document.getElementById('no-donation').classList.add('hidden');
    document.getElementById(donateAmountId).value ="";
    const title = textById(titleId);
    const entry = document.createElement('h1');
    entry.innerHTML = ` 
    <div class="w-full border-2 p-8 text-2xl mt-4 rounded-lg shadow-sm font-semibold text-[#111111]">
            <span class="text-[30px] text-[#000000]">${donateAmount} BDT</span> is Donated for ${title}. </span>
            <br><span class="text-[#444444] text-xl ">Date : ${new Date().toString()} </span>
            <br><span class="text-[#444444] text-xl ">Balance: ${balance} </span>
    </div>

    `;
    document.getElementById('transaction-history').appendChild(entry);
}