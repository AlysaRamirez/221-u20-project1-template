function feedItem (Title,Body,linkUrl,imageUrl) {
    this.Title=Title;
    this.Body=Body;
    this.linkUrl=linkUrl;
    this.imageUrl=imageUrl;

}


exports.createfeedItem = function(Title, Body, linkUrl,imageUrl) {
    return new feedItem(Title, Body, linkUrl, imageUrl);
}