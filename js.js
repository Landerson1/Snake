
    var height=document.getElementById("myVar");
            document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        height++
    }
    else if(event.keyCode == 39) {
        alert('Right was pressed');
    }
    });