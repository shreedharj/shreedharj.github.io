document.addEventListener('DOMContentLoaded', function() {
  // BibTeX toggle functionality
  const bibtexToggles = document.querySelectorAll('.bibtex-toggle');
  bibtexToggles.forEach(function(button) {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Find the next .bibtex-content element
      const content = button.closest('li').querySelector('.bibtex-content');
      if (content) {
        content.classList.toggle('open');
      }
    });
  });

  // Copy to clipboard functionality
  const copyButtons = document.querySelectorAll('.btn-copy-bibtex');
  copyButtons.forEach(function(button) {
    let currentTimeout = null;
    
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Clear previous timeout if exists
      if (currentTimeout) {
        clearTimeout(currentTimeout);
      }
      
      // Remove any existing "Copied!" text
      const existingText = button.querySelector('.copied-feedback');
      if (existingText) {
        existingText.remove();
      }
      
      // Get the BibTeX text from the pre element
      const preElement = button.closest('.bibtex-content').querySelector('pre');
      const bibtexText = preElement.textContent;
      
      // Copy to clipboard
      navigator.clipboard.writeText(bibtexText).then(function() {
        // Visual feedback: show text to the left of icon
        const textSpan = document.createElement('span');
        textSpan.textContent = 'Copied!';
        textSpan.className = 'copied-feedback';
        textSpan.style.fontSize = '10px';
        textSpan.style.marginRight = '4px';
        textSpan.style.whiteSpace = 'nowrap';
        textSpan.style.display = 'inline';
        button.insertBefore(textSpan, button.firstChild);
        
        // Reset after 1 second
        currentTimeout = setTimeout(function() {
          textSpan.remove();
          currentTimeout = null;
        }, 1000);
      }).catch(function(err) {
        console.error('Failed to copy BibTeX:', err);
      });
    });
  });
});
