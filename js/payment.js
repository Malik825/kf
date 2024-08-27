function payWithPaystack(e) {
    e.preventDefault();
  
    let handler = PaystackPop.setup({
      key: 'pk_test_702a8895939b602a942aafc98bdc8de33721970b',
      email: document.getElementById("email-address").value,
      amount: document.getElementById("amount").value * 100,
      ref: '' + Math.floor((Math.random() * 1000000000) + 1),
      onClose: function() {
        alert('Window closed.');
      },
      callback: function(response) {
        let message = 'Payment complete! Reference:' + response.reference;
        alert(message);
      },
      onGetReferenceError: function(error) {
        console.error('Error getting reference:', error);
        alert('An error occurred. Please try again.');
      },
      onPaymentError: function(error) {
        console.error('Payment error:', error);
        alert('An error occurred. Please try again.');
      }
    });
  
    handler.openIframe();
  }
  document.getElementById('payBtn').addEventListener('click', e=>{
    e.preventDefault()
  })
document.getElementById('payBtn').addEventListener('click', payWithPaystack)

const paymentModalWrapper = document.getElementById('payment-modal-wrapper');
const subscribeToggler2 = document.getElementById('subscribeToggler2');

subscribeToggler2.addEventListener('click', (e) => {
  e.preventDefault()
  paymentModalWrapper.classList.add('active');
});
closeDonateBtn.addEventListener('click', (e) => {
  e.preventDefault()
  paymentModalWrapper.classList.remove('active');
});

