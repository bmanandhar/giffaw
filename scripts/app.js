/*
URL -> http://api.giphy.com/v1/gifs/search?q=cats&api_key=
Key -> dc6zaTOxFJmzC
*/

$('form').on('submit', function(e){
    e.preventDefault();

    let
        key = 'dc6zaTOxFJmzC',
        search = $('#search').val(),
        url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=5`;

    onSuccess = (res) => {
        $('.gif-gallery').empty();
        res.data.forEach(gif => {
            let elem = `<img src=${gif.images.original.url} alt=${gif.title}/>`
            $('.gif-gallery').append(elem);
        });
    }

    onError = (e1, e2, e3) => {
        console.log(e2);
    }
    $.ajax({
        method: 'GET',
        url: url,
        success: onSuccess,
        error: onError,
    });
});