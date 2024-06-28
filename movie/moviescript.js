class MovieRating {
    constructor(Title,Studio, Rating) {
      this.Title = Title;
      this.Studio= Studio;
      this.Rating = Rating;
    }
      
    getPG()
    {
    return this.Rating="PG"; 
     }
      }
const movie1 = new MovieRating("Casino Royale", "Eon Productions", "PG13");
const movie2 = new MovieRating("Baahubali1", "Arka Media Works", "PG");
const movie3 = new MovieRating("Baahubali2", "Arka Media Works", "PG");

console.log(movie1.Title);
console.log(movie1.Studio);
console.log(movie1.Rating);

console.log(movie2.Title,movie2.getPG());
console.log(movie3.Title,movie3.getPG());
       
       
      
