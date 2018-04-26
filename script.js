function loadDoc() {
    var xhttp;
    var urlapi;
    urlapi = "https://www.instagram.com/explore/tags/" + document.getElementById("inputtext").value + "/?__a=1"
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(xhttp.responseText);

            var seccion = document.createElement("section");
            seccion.id = "photos"
            document.body.appendChild(seccion);
            for (var i = 0; i < objeto.graphql.hashtag.edge_hashtag_to_media.edges.length; i++) {
                var newImage = document.createElement("img");
                seccion.appendChild(newImage);

            }
            for (var i = 0; i < 11; i++) {
                console.log(i)
                document.getElementById("foto" + i).src = objeto.graphql.hashtag.edge_hashtag_to_media.edges[i].node.display_url;
            }

            /*
            srcinstagram1 = objeto.graphql.hashtag.edge_hashtag_to_media.edges["0"].node.display_url;
            srcinstagram2 = objeto.graphql.hashtag.edge_hashtag_to_media.edges["1"].node.display_url;
            srcinstagram3 = objeto.graphql.hashtag.edge_hashtag_to_media.edges["2"].node.display_url;
            srcinstagram4 = objeto.graphql.hashtag.edge_hashtag_to_media.edges["3"].node.display_url;
            srcinstagram5 = objeto.graphql.hashtag.edge_hashtag_to_media.edges["4"].node.display_url;
            srcinstagram6 = objeto.graphql.hashtag.edge_hashtag_to_media.edges["5"].node.display_url;
            srcinstagram7 = objeto.graphql.hashtag.edge_hashtag_to_media.edges["6"].node.display_url;
            srcinstagram8 = objeto.graphql.hashtag.edge_hashtag_to_media.edges["7"].node.display_url;
            srcinstagram9 = objeto.graphql.hashtag.edge_hashtag_to_media.edges["8"].node.display_url;
            srcinstagram10 = objeto.graphql.hashtag.edge_hashtag_to_media.edges["9"].node.display_url;
            srcinstagram11 = objeto.graphql.hashtag.edge_hashtag_to_media.edges["10"].node.display_url;
            document.getElementById("foto1").src = srcinstagram1;
            document.getElementById("foto2").src = srcinstagram2;
            document.getElementById("foto3").src = srcinstagram3;
            document.getElementById("foto4").src = srcinstagram4;
            document.getElementById("foto5").src = srcinstagram5;
            document.getElementById("foto6").src = srcinstagram6;
            document.getElementById("foto7").src = srcinstagram7;
            document.getElementById("foto8").src = srcinstagram8;
            document.getElementById("foto9").src = srcinstagram9;
            document.getElementById("foto10").src = srcinstagram10;
            document.getElementById("foto11").src = srcinstagram11;
            */

        }
    };
    xhttp.open("GET", urlapi, true);
    xhttp.send();
}
