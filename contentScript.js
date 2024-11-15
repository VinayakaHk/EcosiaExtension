window.onload = () => {
    const cookieName = 'ECFG'; // Replace with the cookie name you want to retrieve
    const url = 'https://www.ecosia.org'; // Replace with the URL of the website

    chrome.runtime.sendMessage(
        {
            action: 'getCookie',
            url: url,
            name: cookieName,
        },
        (response) => {
            if (response.value) {
                const cookieValue = response.value;

                // Use a regular expression to extract the t=<Number> part
                const match = cookieValue.match(/:t=(\d+)/);
                const tValue = match ? match[1] : null;

                if (tValue) {
                    const targetDiv = document.querySelector(
                        '.main-header__install-cta'
                    );
                    console.log('targetDiv', targetDiv);

                    if (targetDiv) {
                        targetDiv.outerHTML = `
<style type ="text/css">
    .tree-counter {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 60px; /* Circular shape */
        padding: 10px;
        width: 100px; /* Adjust width and height as needed */
        height: 40px;
        cursor: pointer;
        transition: transform 0.3s ease, background-color 0.3s ease;
    }

    .tree-counter-not-working:hover {
        background-color: #3a3a3a; 
    }

    .tree-icon path {
        fill: #66bb6a; /* Green color for the tree */
    }
    .tree-icon {
        margin-top: 1px;
        margin-right: 10px;
    }
    .tree-count {
        margin-top: 1px;
    }
</style> 
<div class="tree-counter">
    <svg class="tree-icon" data-v-356ed200="" data-v-227c0261="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-test-id="personal-counter-tree" class="icon icon--icon-tree-color icon--size-m"><path data-v-356ed200="" d="M17.574 11.965a.028.028 0 01-.018-.026.028.028 0 01.018-.026c2.34-1.2 2.76-3.856 1.543-4.736-1.35-.972-3.01.168-3.346.4a.028.028 0 01-.044-.028c.569-3.547-2.653-6.54-6.532-5.24C4.659 3.839 6.39 9.442 6.69 10.342a.029.029 0 01-.008.04.029.029 0 01-.04-.008c-1.37-1.264-4.692.316-3.314 4.708.93 2.947 4.38 3.263 6.572 3.263h.377a23.519 23.519 0 00-.4 3.656h3.55a20.763 20.763 0 01-.75-3.656h1.05c1.386 0 4.484-.248 5.858-2.236 2.084-3.02-.492-4.363-2.011-4.143z" fill="currentColor"></path></svg>
    <span class="tree-count">${tValue}</span>
</div>`;
                        targetDiv.textContent = tValue;
                    }
                }
            }
        }
    );
};
