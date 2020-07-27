//Javascript/JQuery for making ajax calls

$document.ready(() => {
    //add a new burger
    $("#add-burger").on("submit", function(event) {
        event.preventDefault();

        //get the name of the new burger
        var aBurger= {
            burgerName: $("#burger").val().trim(),
        };

        //send POST request
        $.ajax("/add", {
            type: "POST",
            data: aBurger
        }).then(
            function(res) {
                console.log("Added a burger");
                //reload the page to get the updated list
                location.reload();
            }
        );
    });

    //remove a burger on button click
    $(".remove").on("click", function(event) {
        event.preventDefault();

        //find the "id" of this burger to be removed
        var burgerId = $(this).attr("burgerId");
        var aBurger = {
            devoured = true
        };

        //send the DELETE request
        $.ajax("/remove/" + burgerId, {
            type: "DELETE",
            data: aBurger
        }).then(res => {
            console.log("burger id(" + burgerId + ") is removed");
            //reload the page to get the updated list
            location.reload();
        });
    });

});