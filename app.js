'use strict'

const searchURL = 'https://api.github.com';

function fetchAPI(name) {
    const options = {
        headers: new Headers({
            "Accept": "application/vnd.github.mercy-preview+json"})
        };
    fetch(searchURL + '/users/' + name + '/repos', options)
    .then(response => response.json())
    .then(responseJson => renderHTML(responseJson)).catch(error => alert("error"))
}

function renderHTML(source) {
    $('.js-result').empty();
    for(let i=0; i<source.length; i++) {
        let {name, html_url} = source[i];
        $('.js-result').append(`<p>${name}<br><a href="${html_url}" target="_blank">${html_url}</a></p>`)
    }
    $('.js-result').prop('hidden', false)
}

function catchSubmit() {
    $('.searchById').on('submit', event => {
        event.preventDefault();
        let keyword= $('input[name="userID"]').val();
        fetchAPI(keyword);
    })
}

$(catchSubmit)