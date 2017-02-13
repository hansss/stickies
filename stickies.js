//a data structure for storing information about the team
var stickyObject = {
    stickies: [
        {
            text: ,
        }
    ],
}

function createNote(){
    stickyObject.stickies.push({text:""})
    localStorage.setItem(notes, stickyObject);
    localStorage.setItem('notes', JSON.stringify(stickyObject));
    displayStickies();
}

function removeNote(){
   stickyObject.stickies.splice(event.target.getAttribute("data-index"),1);
   localStorage.setItem('notes', JSON.stringify(stickyObject));
   displayStickies(); 
}

function saveNotes(){
    console.log("saved");
    var parsedStickies = JSON.parse(localStorage.getItem('notes'));


    $('textarea').each(function(i, e) {
        console.log(e);  
        // 0: <div id="outer"><div id="inner"></div></div>
        // 1: <div id="inner"></div>
    });

    // for (var i=0; i< parsedStickies.stickies.length; i++) {
    //     parsedStickies.
    // }

}

function displayStickies() { 
    var stickiesHtml = "";
    var parsedStickies = JSON.parse(localStorage.getItem('notes'));
    for (var i=0; i< parsedStickies.stickies.length; i++) {
        stickiesHtml += "<a class='glyphicon glyphicon-remove removeButton' data-index='" + i + "' />" + "<br>";
        // stickiesHtml += '<textarea class="sticky">' + stickyObject.stickies[i].text + '</textarea>';
        stickiesHtml += '<textarea class="sticky">' + parsedStickies.stickies[i].text + '</textarea>';      
    }

    $("#stickiesList").empty().append(stickiesHtml);

    // Close function
    $(".removeButton").click(function () {
        removeNote();
    });

}



$(function() {
    displayStickies(); //generate and render the html divs for the team


    $("#newButton").click(function () {
        createNote();
    });

    $("#saveButton").click(function () {
    saveNotes();
    });

});