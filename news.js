//7d835a726dc94ac5bb6dcd0d3a4eae6a
console.log("welcome to news website");

//initialize the news parameters
let source = "bbc-news";
let apiKey = '7d835a726dc94ac5bb6dcd0d3a4eae6a';

//grab news container
newsAccordion= document.getElementById('newsAccordian');

//create an ajax GET request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);


//what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        console.log(json);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml="";

        articles.forEach(function(element,index){
            console.log(element,index);
            let news = `<div class="card">
    <div class="card-header" id="heading${index}">
        <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                aria-expanded="false" aria-controls="collapse${index}">
                ${element.title}
            </button>
        </h2>
    </div>

    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordian">
        <div class="card-body"> ${element.content}.<a href="${element.url}">.Read more here</a> </div>
    </div>
</div>`;
newsHtml+=news;
});
newsAccordian.innerHTML =newsHtml;

    }
    else {
        console.log("Some error occured")
    }
    }

xhr.send();


