document.oncontextmenu = () => {
    alert("Don't try you will not get source code!")
    return false
}


document.onkeydown = e => {
    if(e.key == "F12") {
        alert("Don't try to view page sources!!")
        
    }

    if(e.ctrlKey && e.key == "u") {
        alert("Don't try to view page sources!")
        
    }
    if(e.ctrlKey && e.key == "c") {
        alert("Don't try to copy page element! ")
        
    }
    if (event.ctrlKey && event.key === 'p') {
        event.preventDefault(); // Block the print command
        alert("Printing is disabled on this website.");
        
    }
    
        // Block Ctrl + U
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            alert('This action is disabled.');
        }
    
        // Block F12
        if (e.key === 'F12') {
            e.preventDefault();
            alert('This action is disabled.');
        }
    
    
    
}
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();  // This prevents the right-click context menu from appearing
    alert('Right-click is disabled on this page.');
});



   
