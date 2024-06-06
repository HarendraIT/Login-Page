// Remove elements by class name
function removeElementsByClassName(className) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
      elements[i].remove();
    }
  }
  
  // Remove elements by tag name
  function removeElementsByTagName(tagName) {
    var elements = document.getElementsByTagName(tagName);
    for (var i = 0; i < elements.length; i++) {
      elements[i].remove();
    }
  }
  
  // Remove ads when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Remove common ad elements by class name or tag name
    removeElementsByClassName('ad');
    removeElementsByClassName('ads');
    removeElementsByTagName('iframe');
  });
  