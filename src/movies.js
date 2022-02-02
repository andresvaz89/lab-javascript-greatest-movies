// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map((movie) => movie.director);
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramasBySteven = movies.filter(
    (movies) =>
      movies.director === 'Steven Spielberg' && movies.genre.includes('Drama')
  );
  return dramasBySteven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }

  const averageScore = movies.reduce((acc, movie) => acc + movie.score, 0);
  return parseFloat((averageScore / movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  /* if (movies.genre.includes('Drama')=== 0){                no sé por qué no funciona
    return 0;
  } */
  const dramaMovies = movies.filter((movies) => movies.genre.includes('Drama'));
  const averageDramaScore = dramaMovies.reduce(
    (acc, dramaMovies) => acc + dramaMovies.score,
    0
  );
  return parseFloat((averageDramaScore / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const orderedMovies = movies.sort(function (a, b) {
    if (a.year - b.year !== 0) {
      return a.year - b.year;
    } else {
      return a.year > b.year ? 1 : -1;
    }
  });

  return [...orderedMovies];
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const alphabeticalMovies = movies.sort(function (a, b) {
    if (a.title - b.title !== 0) {
      return a.title - b.title;
    } else {
      return a.title > b.title ? 1 : -1;
    }
  });

  if (alphabeticalMovies.length > 20) {
    alphabeticalMovies.length = 20;
  }
  return [...alphabeticalMovies];
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
