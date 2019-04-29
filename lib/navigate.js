var selectedPost = -1;
var selectedComment = -1;

var navigate = function(pageType, key) {
    if (pageType == "topic") {
        var topicsList = document.getElementsByClassName("topic");
        if (selectedPost >= 0) // only wipe style if selection
        {
            deselect(topicsList[selectedPost]);
        }

        if (key == "j") // go down
        {
            if (selectedPost < topicsList.length - 1) {
               selectedPost ++;
               scroll(selectedPost, topicsList);
            }
            else {
                scroll(-2, topicsList);
            }
        }
        else // go up
        {
            if (selectedPost > 0) {
                selectedPost --;
                scroll(selectedPost, topicsList);
            }
            else {
                scroll(-1, topicsList);
            }
        }
        select(topicsList[selectedPost]);
    }
    else {
        var commentList = $('.comment-itself:visible');

        if (selectedComment >= 0) // wipe style on previous element
        {
            deselect(commentList[selectedComment]);
        }

        if (key == "j") // go down
        {
            if (selectedComment < commentList.length - 1) {
                selectedComment ++;
                scroll(selectedComment, commentList);
            }
            else {
                scroll(-2, commentList);
            }
        }
        else // go up
        {
            if (selectedComment > 0) {
                selectedComment --;
                scroll(selectedComment, commentList);
            }
            else {
                scroll(-1, commentList);
            }
        }
        select(commentList[selectedComment]);
    }
}

var select = function(element) {
    let color = "#78d3e8"
    if (chrome) {
        let fetchedColor = chrome.storage.sync.get("color", function(items) {
            console.log(items);
        });
    }
    else {
        let fetchedColor = browser.storage.local.get("color");
        fetchedColor.then(
        (item) =>
        {
            if (item.color)
            {
                color = item.color
            }
            element.style.border = "3px solid " + color;
        },
        (err) =>
        {
            console.log(err);
        });
    }
    element.classList.add("selected-item");
}

var deselect = function(element) {
    element.style.border = "none";
    element.classList.remove("selected-item");
}

var scroll = function(selection, collection) {
    // -1 indicates top of page, -2 indicates bottom
    if (selection == -1) {
        window.scrollTo(0, 0);
    }
    else if (selection == -2) {
        window.scrollTo(0, document.body.scrollHeight);
    }
    else {
        zenscroll.intoView(collection[selection], 0);
    }
}
