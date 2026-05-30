// script.js – handles complaint form submission and toast notifications
// Dummy API endpoint – replace with your own if needed
const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

/**
 * Show a temporary toast message.
 * @param {string} message – Text to display.
 * @param {boolean} [isError=false] – Show error styling when true.
 */
function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.style.backgroundColor = isError ? 'rgba(200,50,50,0.85)' : 'rgba(0,0,0,0.75)';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/**
 * Serialize form data into a plain object.
 * @param {HTMLFormElement} form
 * @returns {Object}
 */
function getFormData(form) {
  const data = new FormData(form);
  const obj = {};
  for (const [key, value] of data.entries()) {
    obj[key] = value.trim();
  }
  return obj;
}

// Main submission handler
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('complaintForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const payload = getFormData(form);

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      // For dummy API we just assume success
      showToast('Complaint submitted successfully!');
      form.reset();
    } catch (err) {
      console.error(err);
      showToast('Failed to submit complaint. Please try again.', true);
    }
  });
});
