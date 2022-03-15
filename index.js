var btnClimaHoy = document.getElementById("revisar-hoy");
var category_select = document.getElementById("category-select");
var spinner = document.getElementById("spinner");
var contenedor = document.getElementById("noticias-contenedor");

window.addEventListener('load', function(){
    fetch('https://inshortsapi.vercel.app/news?category=all')
    .then(res =>{
        res.json()
            .then(resJSON=>{
                spinner.classList.add('d-none');
                var news = resJSON.data;
                console.log(news);
                for(var i = 0; i < news.length; i++){
                    contenedor.innerHTML += '<div class="col-sm-4">\
                    <div class="card">\
                    <img class="card-img-top" src="'+ news[i].imageUrl +'" alt="Card image cap" height="100px" width="auto">\
                    <div class="card-body">\
                        <p class="card-text">Author: <strong>'+ news[i].author + '</strong></p>\
                        <p class="card-text">Date: <strong>'+ news[i].date + '</strong></p>\
                        <h5 class="card-title">'+ news[i].title +'</h5>\
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the .</p>\
                        <small class="text-primary">Category: <strong>'+ resJSON.category +'</strong></small>\
                    </div>\
                    </div>\
                    </div>';
                }
            })
    });
})

category_select.addEventListener('change', function(){
    console.log();
    spinner.classList.remove('d-none');
    spinner.classList.add('d-block');
    fetch('https://inshortsapi.vercel.app/news?category='+category_select.value)
    .then(res =>{
        res.json()
            .then(resJSON=>{
                contenedor.innerHTML = "";
                spinner.classList.add('d-none');
                var news = resJSON.data;
                console.log(news);
                for(var i = 0; i < news.length; i++){
                    contenedor.innerHTML += '<div class="col-sm-4">\
                    <div class="card">\
                    <img class="card-img-top" src="'+ news[i].imageUrl +'" alt="Card image cap" height="100px" width="auto">\
                    <div class="card-body">\
                        <p class="card-text">Author: <strong>'+ news[i].author + '</strong></p>\
                        <p class="card-text">Date: <strong>'+ news[i].date + '</strong></p>\
                        <h5 class="card-title">'+ news[i].title +'</h5>\
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the .</p>\
                        <small class="text-primary">Category: <strong>'+ resJSON.category +'</strong></small>\
                    </div>\
                    </div>\
                    </div>';
                }
            })
    });
});