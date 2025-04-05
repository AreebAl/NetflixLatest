export const flattenMovies = (categories) => {
  return categories.reduce((allMovies, category) => {
    return [...allMovies, ...category.movies];
  }, []);
};

// Calculate similarity between two strings (0-1)
const stringSimilarity = (a, b) => {
  const len = Math.max(a.length, b.length);
  if (len === 0) return 1.0;
  
  const distance = levenshteinDistance(a, b);
  return (len - distance) / len;
};

// Levenshtein distance implementation
const levenshteinDistance = (a, b) => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      const cost = a[j - 1] === b[i - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[b.length][a.length];
};

export const searchMovies = (movies, term) => {
  if (!term.trim()) return [];
  
  // Normalize search term
  const normalizedTerm = term.toLowerCase()
    .replace(/\b(the|a|an)\b/g, '')
    .trim();
  
  return movies.filter(movie => {
    // Normalize movie title
    const normalizedTitle = movie.title.toLowerCase()
      .replace(/\b(the|a|an)\b/g, '')
      .trim();
    
    // Check for direct matches
    if (normalizedTitle.includes(normalizedTerm) || 
        movie.genre.toLowerCase().includes(normalizedTerm)) {
      return true;
    }
    
    // Split into words
    const termWords = normalizedTerm.split(/\s+/);
    const titleWords = normalizedTitle.split(/\s+/);
    
    // Fuzzy match each search word against title words
    return termWords.every(termWord => 
      titleWords.some(titleWord => {
        // Check for direct inclusion
        if (titleWord.includes(termWord) || termWord.includes(titleWord)) {
          return true;
        }
        
        // Check for similar words (like grey/gray)
        return stringSimilarity(termWord, titleWord) > 0.7;
      })
    );
  });
};

export const getYouTubeId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};
