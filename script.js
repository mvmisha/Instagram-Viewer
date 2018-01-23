function loadDoc() {
var d = new Date();
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var objeto = JSON.parse(xhttp.responseText);
        
        
        var srcinstagram;
        srcinstagram = objeto.graphql.hashtag.edge_hashtag_to_media.edges["0"].node.display_url;
        
        document.getElementById("foto").src = srcinstagram;
    }
  };
  xhttp.open("GET", 'https://www.instagram.com/explore/tags/photooftheday/?__a=1', true);
  xhttp.send();
}
