function feedItem (Title,Body,linkUrl,imageUrl) {
    this.Title=Title;
    this.Body=Body;
    this.linkUrl=linkUrl;
    this.imageUrl=imageUrl;

}

var story1 = new feedItem('story 1', 'this is marist story 1','http://google.com/','/images/campus.png' );
var story2 = new feedItem('story 2','this is marist story 2','http://google.com/','/images/news_pic.jpg');
var story3 = new feedItem('story 3','this is marist story 3','http://google.com/','/images/hancock.jpeg');

var currentStories = [story1,story2,story3];

function displayItem() {
    for (let i = 0; i < currentStories.length; i++){
        let item = currentStories[i];

    document.getElementById("newsfeed").innerHTML += "<a href = " +item.linkUrl+" story 1 >";
    document.getElementById("newsfeed").innerHTML += "<p>  " +item.Body+ "this is marist story 1";
    document.getElementById("newsfeed").innerHTML += "<a href = " +item.imageUrl+ "campus picture";
    document.getElementById("newsfeed").innerHTML += "<p> = " +item.Title+ "STORY 1";
    
    }
}

window.addEventListener('load', displayItem);