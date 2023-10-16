fetch('./blog/list.json')
    .then((response) => response.json())
    .then((json) => {

        for (post in json["posts"]) {
            document.getElementById("body").innerHTML += '<div class="card" id="' + post.toString() +'"></div>';
        }

        for (post in json["posts"]) {
            const myPost = post;
            fetch('./blog/posts/' + json["posts"][post]["content"])
                .then((response) => response.text())
                .then((text) => {
                    console.log(myPost);
                    document.getElementById(myPost.toString()).innerHTML = text;
                })
        }
    });