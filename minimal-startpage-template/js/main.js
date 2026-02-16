/**
 * Interval which the clock will be updated (in milliseconds).
 */
const clockInterval = 1000;

/**
 * Search engine query url
 */
const searchEngineUrl = 'https://duckduckgo.com/?q=';

const tabKeyCode = 9;
const enterKeyCode = 13;
const escapeKeyCode = 27;
let searchBarElement;
let clockElement;
let formElement;

/**
 * Return a string containing the formatted current date and time.
 */
function getDateTime() {
    const now = new Date();
    const date = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(now);
    const time = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    }).format(now);

    return date + '\n' + time;
}

function setClock() {
    if (!clockElement) {
        return;
    }

    clockElement.innerText = getDateTime();
}

function search() {
    let value = searchBarElement.value;
    if (!value) {
        return;
    }

    if (value.startsWith('https://') || value.startsWith('http://')) {
        window.location = value;
    } else {
        window.location = searchEngineUrl + encodeURIComponent(value);
    }
}


function initDashboard() {
    searchBarElement = document.getElementById('search-bar');
    clockElement = document.getElementById('clock');
    formElement = document.getElementById('search-form');

    setClock();
    setInterval(setClock, clockInterval);

    if (searchBarElement) {
        searchBarElement.focus();
        searchBarElement.value = '';
    }

    if (formElement) {
        formElement.addEventListener('submit', (ev) => {
            ev.preventDefault();
            search();
        });
    }

    document.addEventListener('keypress', (event) => {
        if (!searchBarElement) {
            return;
        }

        if (event.keyCode == escapeKeyCode) {
            searchBarElement.blur();
            searchBarElement.value = '';
        } else if (event.keyCode != tabKeyCode && event.keyCode != enterKeyCode) {
            searchBarElement.focus();
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDashboard);
} else {
    initDashboard();
}