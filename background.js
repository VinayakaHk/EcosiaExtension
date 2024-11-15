chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getCookie') {
        chrome.cookies.get(
            { url: request.url, name: request.name },
            (cookie) => {
                if (cookie) {
                    sendResponse({ value: cookie.value });
                } else {
                    sendResponse({ value: null });
                }
            }
        );
        return true; // Keep the message channel open for sendResponse
    }
});
