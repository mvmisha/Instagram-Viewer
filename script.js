function loadDoc() {
    var d = new Date();
    var xhttp;
    var urlapi;
    console.log(document.getElementById("inputtext").value)
    urlapi =  "https://www.instagram.com/explore/tags/"+ document.getElementById("inputtext").value + "/?__a=1"
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        

        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(xhttp.responseText);

            var srcinstagram1,srcinstagram2,srcinstagram3,srcinstagram4,srcinstagram5,srcinstagram6;

            srcinstagram1 = objeto.graphql.hashtag.edge_hashtag_to_media.edges["0"].node.display_url;
            srcinstagram2 = objeto.graphql.hashtag.edge_hashtag_to_media.edges["1"].node.display_url;
            srcinstagram3 = objeto.graphql.hashtag.edge_hashtag_to_media.edges["2"].node.display_url;
            srcinstagram4 = objeto.graphql.hashtag.edge_hashtag_to_media.edges["3"].node.display_url;
            srcinstagram5 = objeto.graphql.hashtag.edge_hashtag_to_media.edges["4"].node.display_url;
            srcinstagram6 = objeto.graphql.hashtag.edge_hashtag_to_media.edges["5"].node.display_url;

            document.getElementById("foto1").src = srcinstagram1;
            document.getElementById("foto2").src = srcinstagram2;
            document.getElementById("foto3").src = srcinstagram3;
            document.getElementById("foto4").src = srcinstagram4;
            document.getElementById("foto5").src = srcinstagram5;
            document.getElementById("foto6").src = srcinstagram6;
        }
    };
    xhttp.open("GET", urlapi, true);
    xhttp.send();
}
