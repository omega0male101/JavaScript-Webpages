var Film = require('./film');
var Review = require('./review');

var Films = function(){

  var review1 = new Review({
    comment: "Good film, would recomend!",
    rating: 40,
    author: "Val"
  });

  var review2 = new Review({
    comment: "This is a review!",
    rating: 20,
    author: "Val"
  });

  var movie1 = new Film({
    title: "ALien",
    actors: ["John Hurt", "Sigourney weaver"],
    genre: "Horror"
  });

  var movie2 = new Film({
    title: "The Hateful Eight",
    actors: ["Kurt Russel", "Samuel L Jackson"],
    genre: "Mystery"
  });

    movie1.addReview(review1);
    movie2.addReview(review2);

  return [movie1, movie2];
}


module.exports = Films;