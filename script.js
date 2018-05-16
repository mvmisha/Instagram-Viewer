function loadDoc() {
    if (document.getElementById("photos")) {
        document.getElementById("photos").remove();
    }

    var xhttp;
    var urlapi;
    urlapi = "https://www.instagram.com/explore/tags/" + document.getElementById("inputtext").value + "/?__a=1"
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(xhttp.responseText);

            var seccion = document.createElement("section");
            seccion.id = "photos";
            seccion.class="row";
            document.body.appendChild(seccion);
            for (var i = 0; i < objeto.graphql.hashtag.edge_hashtag_to_media.edges.length; i++) {
                console.log("aaa");
                var newImage = document.createElement("img");
                newImage.width="120";
                newImage.src = objeto.graphql.hashtag.edge_hashtag_to_media.edges[i].node.display_url;
                newImage.id = "foto" + i;

                seccion.appendChild(newImage);

            }
        }
    };
    xhttp.open("GET", urlapi, true);
    xhttp.send();
}
