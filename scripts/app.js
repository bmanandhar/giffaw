console.log("js file!");

// var url = 'http://api.giphy.com/v1/gifs/search?q=cats&api_key=dc6zaTOxFJmzC';

// var giffyData = $.get(url);
// giffyData.done (function(response){
//     console.log('Wow, 25 data!', response);
// });
$('form').on('submit', function(e){
    e.preventDefault();

    let
        key = 'dc6zaTOxFJmzC',
        search = $('#search').val(),
        url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=5`

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