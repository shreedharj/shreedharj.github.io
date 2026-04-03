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
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get the BibTeX text from the pre element
      const preElement = button.closest('.bibtex-content').querySelector('pre');
      const bibtexText = preElement.textContent;
      
      // Copy to clipboard
      navigator.clipboard.writeText(bibtexText).then(function() {
        // Visual feedback: change button text temporarily
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        
        // Reset after 2 seconds
        setTimeout(function() {
          button.textContent = originalText;
        }, 2000);
      }).catch(function(err) {
        console.error('Failed to copy BibTeX:', err);
      });
    });
  });
});
