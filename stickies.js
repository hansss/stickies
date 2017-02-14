//a data structure for storing information about the team
class aSticky {
    constructor(text){
        this.text = text;
    }
}


function createNote(){
    var oldStorage = JSON.parse(localStorage.getItem('notes'));
    oldStorage.push(new aSticky("new"));    
    localStorage.setItem('notes', JSON.stringify(oldStorage));
    displayStickies();
}

function removeNote(){
   // stickyObject.stickies.splice(event.target.getAttribute("data-index"),1);
   // localStorage.setItem('notes', JSON.stringify(stickyObject));
   // displayStickies(); 
}

function saveNotes(){
    // console.log("saved");
    var parsedStickies = JSON.parse(localStorage.getItem('notes'));
    console.log("parsed");
    console.log(parsedStickies);

    var allNotes = $('textarea.sticky');
    for (var i=0; i< allNotes.length; i++) {
        parsedStickies[i].text = allNotes[i].value;
    }

    localStorage.setItem('notes', JSON.stringify(parsedStickies));
    // $('textarea').each(function(i, e) {
    //     console.log(e);  
    // });


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
    console.log(parsedStickies);
    for (var i=0; i< parsedStickies.length; i++) {
        console.log("HI");
        console.log(parsedStickies[i].text);
        stickiesHtml += "<a class='glyphicon glyphicon-remove removeButton' data-index='" + i + "' />" + "<br>";
        stickiesHtml += '<textarea class="sticky">' + parsedStickies[i].text + '</textarea>';
             
    }

    $("#stickiesList").empty().append(stickiesHtml);

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