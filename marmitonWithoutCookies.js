
checkForDocumentReady();


function checkForDocumentReady(){

    //get the cookies popup node element
    e = document.evaluate('//*[@id="didomi-host"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    
    //check if the node is present, if not, retry in 250ms
    if(e === null) {
        setTimeout(checkForDocumentReady, 100);
        return;
    }

    //the document is ready, lets disabling popup
    document.body.classList.remove("didomi-popup-open"); //active scrollbar
    document.body.removeChild(e); //delete the popup

}
