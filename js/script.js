
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + ', ' + cityStr;

    $greeting.text('Set background ' + address);
    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=1024x768&location=' + address + '';
    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');
    // YOUR CODE GOES HERE!
    //var nytimeUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + cityStr + '&sort=newest&api-key=8ceea2a4b545a8e06ab8b78fd177e3b8:9:72796340';
    var nytimeUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + cityStr + '&api-key=8ceea2a4b545a8e06ab8b78fd177e3b8:9:72796340';
    
    
    $.getJSON(nytimeUrl, function(data) {
        $nytHeaderElem.text('New York Times Articles About ' + cityStr);
        articles = data.response.docs;
        console.log(articles);
        for (var i = 0; i < articles.length; ++i) {
            var article = articles[i];
            console.log(i)
            $nytElem.append('<li class="article">'+'<a href="' + article.web_url + '">' + article.headline.main + '</a>' + '<p>' + article.snippet + '</p>' + '</li>');
        };
    }); 
    
    
    return false;
};

$('#form-container').submit(loadData);

// loadData();
