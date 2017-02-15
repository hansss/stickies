//a data structure for storing information about the team
class aSticky {
    constructor(text){
        this.text = text;
    }
}


function createNote(){
    var oldStorage = JSON.parse(localStorage.getItem('notes'));
    // console.log(oldStorage);
    oldStorage.stickies.push(new aSticky("new"));    
    localStorage.setItem('notes', JSON.stringify(oldStorage));
    displayStickies();
}

function removeNote(){
    var oldStorage = JSON.parse(localStorage.getItem('notes'));
    oldStorage.stickies.splice(event.target.getAttribute("data-index"),1);
    localStorage.setItem('notes', JSON.stringify(oldStorage));
    displayStickies(); 
}

function saveNotes(){
    // console.log("saved");
    var parsedStickies = JSON.parse(localStorage.getItem('notes'));

    var allNotes = $('textarea.sticky');
    for (var i=0; i< allNotes.length; i++) {
        parsedStickies.stickies[i].text = allNotes[i].value;
    }

    localStorage.setItem('notes', JSON.stringify(parsedStickies));
    displayStickies(); 
}

function displayStickies() { 
    if (localStorage.notes) {
        // localStorage.notes = Number(localStorage.clickcount) + 1;
    } else {
        // localStorage.notes = [];
        arr = [];
        localStorage.setItem("notes", JSON.stringify(arr));
    }


    var stickiesHtml = "";
    var parsedStickies = JSON.parse(localStorage.getItem('notes'));
    // console.log(parsedStickies);
    // console.log(parsedStickies.stickies);
    for (var i=0; i< parsedStickies.stickies.length; i++) {
        stickiesHtml += "<a class='glyphicon glyphicon-remove removeButton' data-index='" + i + "' />" + "<br>";
        stickiesHtml += '<textarea class="sticky">' + parsedStickies.stickies[i].text + '</textarea>';
    }

    $("#stickiesList").empty().append(stickiesHtml);

    $(".removeButton").click(function () {
        removeNote();
    });

}



$(function() {
    // displayStickies(); //generate and render the html divs for the team
    // if (localStorage.notes) {
    //     // localStorage.notes = Number(localStorage.clickcount) + 1;
    // } else {
    //     // localStorage.notes = [];
    //     arr = [];
    //     localStorage.setItem("notes", JSON.stringify(arr));
    // }

    $("#newButton").click(function () {
        createNote();
    });

    $("#saveButton").click(function () {
        saveNotes();
    });



    displayStickies();

});