class MoviesApi {
  constructor(options) {
    this._url = options.baseUrl;
  }

  _checkError (res) {
    return res.ok ? res.json() : Promise.reject()
  }

  getMovies(options) {
    return fetch(`${this._url}/`, options)
    .then(this._checkError)
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default moviesApi;