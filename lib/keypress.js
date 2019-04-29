const textAreas = ["INPUT", "TEXTAREA"];

document.addEventListener('keypress', (event) => {
    const key = event.key;

    if (chrome) {
        // handle special chrome scenarios, as browser is not accessible
    }

    const pageType = document.getElementsByClassName("topic-listing").length > 0 
        ? "topic" : "comment";

    if (textAreas.indexOf(document.activeElement.tagName) < 0) {
        if (key == "j" || key == "k"){
            navigate(pageType, key);
        }
        else if (key == "v") {
            vote(pageType);
        }
        else if (key == "Enter") {
            if (pageType == "topic") {
                if (event.shiftKey) {
                    let url = document.getElementsByClassName("selected-item")[0].getElementsByClassName("topic-info-comments")[0].getElementsByTagName("a")[0].href;
                    if (chrome) {
                        console.log("in chrome :(");
                    }
                    else {
                        window.open(url);
                    }
                }
                else {
                    let url = document.getElementsByClassName("selected-item")[0].getElementsByClassName("topic-title")[0].getElementsByTagName("a")[0].href;
                    window.open(url);
                }
            }
            else {
                collapse();
            }
        }
    }
});