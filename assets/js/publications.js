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
        // Visual feedback: show text above icon
        const textSpan = document.createElement('span');
        textSpan.textContent = 'Copied!';
        textSpan.style.display = 'block';
        textSpan.style.fontSize = '10px';
        textSpan.style.marginBottom = '2px';
        textSpan.className = 'copied-text';
        button.insertBefore(textSpan, button.firstChild);
        
        // Reset after 1.5 seconds
        setTimeout(function() {
          textSpan.remove();
        }, 1500);
      }).catch(function(err) {
        console.error('Failed to copy BibTeX:', err);
      });
    });
  });
});
