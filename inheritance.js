// This block of code is setting the inheritance between Media and Movie
function Media(title, duration) {
    this.title = title;
    this.duration = duration;
    this.isPlaying = false;
}

Media.prototype.play = function() {
    this.isPlaying = true;
    return this;
};

Media.prototype.stop = function() {
    this.isPlaying = false;
    return this;
};

function Movie(title, year, duration) {

    //-- add Media properties to Movie
    Media.call(this, title, duration);

    //-- Set song-specific properties
    this.year = year;
}

//-- Set the inheritance from Media
Movie.prototype = Object.create(Media.prototype);

