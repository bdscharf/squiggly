var vote = function(pageType) {
    var selectedElement = document.getElementsByClassName("selected-item")[0];

    if (pageType == "topic") {
        selectedElement.getElementsByTagName("button")[0].click();
    }
    else {
        if (selectedElement.getElementsByClassName("post-button").vote) {
            selectedElement.getElementsByClassName("post-button").vote.click();
        }
        else {
            selectedElement.getElementsByClassName("post-button").unvote.click();
        }
    }
}