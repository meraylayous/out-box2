// switch tab
function changeTab(tabId) {
    const tabs = document.querySelectorAll('.tab-link');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
  
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.add('opacity-0');
        content.classList.add('-translate-y-4');
        content.classList.add('hidden');
    });
  
    const activeContent = document.getElementById('content-' + tabId);
    activeContent.classList.remove('hidden');
    activeContent.classList.remove('-translate-y-4');
    activeContent.classList.remove('opacity-0');
  
    document.getElementById(tabId).classList.add('active');
  }
  
  

  
  window.onload = function() {
    changeTab('tab1');
  }; 
  