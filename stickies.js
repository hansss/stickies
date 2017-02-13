





//a data structure for storing information about the team
var stickyObject = {
    stickies: [
        {
            text: "",
        }
    ],
}

function createNote(){
    stickyObject.stickies.push({text:""})
    displayStickies();
}



// function createNote(notes) {
//     // add a new note to the list
//     notes.append("<li><div class='aNote'>" + 
//                     "<a class='glyphicon glyphicon-remove' />" +
//                     "<br>" +
//                     "<textarea class='note-content' placeholder='Your note'/>" +  
//                     "</div></li>"); 

//     // Close function
//     $(".glyphicon-remove").click(function () {
//         console.log($('this').closest('li'));
//         $(this).closest('li').remove();
//     });

//     }

//  $(document).ready(function () {
//     // get references to the 'notes' list
//     notes = $("#stickies");


//     // clicking the 'New Note' button adds a new note to the list
//     $("#newButton").click(function () {
//         createNote(notes);
//     });

// });

function removeNote(){
   stickyObject.stickies.splice(event.target.getAttribute("data-index"),1);
   displayStickies(); 
}

function displayStickies() { //creates the html elements to show the team
    // $("#teamName").html(team.teamName); //add the team name to the appropriate div
    // TODO 2: document lines 34-43 such that anyone reading your comment will understand what this code does
    var stickiesHtml = "";
    for (var i=0; i<stickyObject.stickies.length; i++) {
        stickiesHtml += "<a class='glyphicon glyphicon-remove removeButton' data-index='" + i + "' />" + "<br>";
        stickiesHtml += '<textarea class="sticky">' + stickyObject.stickies[i].text + '</textarea>';      
    }

    $("#stickiesList").empty().append(stickiesHtml);

      // Close function
      $(".removeButton").click(function () {
            // stickyObject.stickies.splice(event.target.getAttribute("data-index"),1);
            removeNote();
        });




    // // an event triggered when the cursor hovers over a teammate div
    // $(".aSticky").mouseenter(function(event) {
    //     $(this).addClass("spotlight"); //adds a "spotlight" (yellow highlighting) to the teammate
    // });

    // // TODO 9: add an event that removes the spotlight from a teammate when the cursor leaves the teammate's div
    // $(".aSticky").mouseleave(function(event) {
    //     $(this).removeClass("spotlight"); //adds a "spotlight" (yellow highlighting) to the teammate
    // });

    // $(".aSticky").click(function() { // TODO 8: write a comment explaining what this function does
    //     incrementPopularity($(this).attr("data-index"))

    // });
}



$(function() {
    displayStickies(); //generate and render the html divs for the team


    $("#newButton").click(function () {
        createNote();
    });

});