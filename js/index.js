// nav toggle start
let navText = document.getElementById('nav-toggle').innerText.trim();

document.getElementById('nav-toggle').addEventListener('click',function(event){
    event.preventDefault()

    if( navText === "Blog"){
        document.getElementById('nav-toggle').innerText = 'Home';
        navText = 'Home';
        document.getElementById('donate-options').classList.add('hidden');
        document.getElementById('donation-btn').classList.add('hidden');
        document.getElementById('history-btn').classList.add('hidden');
        document.getElementById('history').classList.add('hidden');
        document.getElementById('blog').classList.remove('hidden');
    }
    else if( navText === "Home"){
        document.getElementById('nav-toggle').innerText = 'Blog';
        navText = 'Blog';
        document.getElementById('donate-options').classList.remove('hidden');
        document.getElementById('donation-btn').classList.remove('hidden');
        document.getElementById('history-btn').classList.remove('hidden');
        document.getElementById('history').classList.add('hidden');
        document.getElementById('blog').classList.add('hidden');
    }
    else{
        console.log("nav-toggle is not working.")
    }

})


// nav toggle end

// Donation & History Toggle
document.getElementById('history-btn').addEventListener('click',function(){
    
    document.getElementById('donate-options').classList.add('hidden');
    document.getElementById('history').classList.remove('hidden');
    document.getElementById('donation-btn').classList.remove('bg-btnColor');
    document.getElementById('history-btn').classList.add('bg-btnColor');
    
})
document.getElementById('donation-btn').addEventListener('click',function(){

    document.getElementById('history').classList.add('hidden');
    document.getElementById('donate-options').classList.remove('hidden');
    document.getElementById('donation-btn').classList.add('bg-btnColor');
    document.getElementById('history-btn').classList.remove('bg-btnColor');
    
})



//donation btn event effect on modal, balance and transaction history 
    document.getElementById('noakhali-donate-btn').addEventListener('click',function(){

       donate('noakhali-donate-amount','noakhali-total-donate','noakhaliTitle',);

    });
    document.getElementById('feni-donate-btn').addEventListener('click',function(){

       donate('feni-donate-amount','feni-total-donate','feniTitle',);

    });
    document.getElementById('july-donate-btn').addEventListener('click',function(){

       donate('july-donate-amount','july-total-donate','julyTitle',);

    });