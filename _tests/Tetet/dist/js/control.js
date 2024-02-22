(() => {
    const testId = "Tetet";
    const utils = window["optimizely"].get("utils");
    utils.waitForElement("").then(function(element) {
        try {
            document.documentElement.classList.add(testId);
        } catch (error) {
            console.log(error);
        }
    });
})();