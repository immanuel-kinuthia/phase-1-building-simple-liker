// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Add .hidden class to error modal on page load
document.getElementById('modal').classList.add('hidden');

// Add event listener to handle clicks on heart elements
document.addEventListener('click', (event) => {
  const heart = event.target;
  // Check if the clicked element is a heart (contains EMPTY_HEART or FULL_HEART)
  if (heart.textContent === EMPTY_HEART) {
    // Simulate server request for empty heart
    mimicServerCall()
      .then(() => {
        // On success, change to full heart and add activated-heart class
        heart.textContent = FULL_HEART;
        heart.classList.add('activated-heart');
      })
      .catch(() => {
        // On failure, show error modal
        const modal = document.getElementById('modal');
        modal.classList.remove('hidden');
        // Set error message (assuming a child element like #modal-message)
        const modalMessage = document.getElementById('modal-message');
        if (modalMessage) {
          modalMessage.textContent = 'Server error occurred';
        }
        // Hide modal after 3 seconds
        setTimeout(() => {
          modal.classList.add('hidden');
        }, 3000);
      });
  } else if (heart.textContent === FULL_HEART) {
    // Revert full heart to empty heart
    heart.textContent = EMPTY_HEART;
    heart.classList.remove('activated-heart');
  }
});