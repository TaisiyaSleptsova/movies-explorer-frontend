import { baseUrl } from "./Constants.js";

const BASE_URL = 'https://api.movies.tasyushka.nomoredomainsrocks.ru'

class MainApi {
  constructor(options) {
    this._url = options.baseUrl;
  }

  _checkError (res) {
    return new Promise((resolve, reject) => {
      res
        .json()
        .then((data) => {
          if (res.ok) {
            resolve(data);
          } else {
            reject({ data, status: res.status });
          }
        })
        .catch((error) => {
          reject({ error });
        });
    });
  }

  register ( name, email, password ) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({ name: name, email: email, password: password })
    })
    .then(this._checkError)
  };

  authorize (password, email) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ password, email })
    })
    .then(this._checkError)
  };

  changeProfileInfo(data, token) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          "Authorization" : `Bearer ${token}`
        },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      })
    })
    .then(this._checkError)
  }

  checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => data)
  }

  getUserInfo(token) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(this._checkError)
  }
  
  getMovies(token) {
      return fetch(`${this._url}/movies`, {
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      })
    .then(this._checkError)
  }

  addMovie(data, token) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization" : `Bearer ${token}`
        },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: baseUrl + data.image.url,
        trailerLink: data.trailerLink,
        thumbnail: baseUrl + data.image.formats.thumbnail.url,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN
      })
    })
    .then(this._checkError)
  }

  deleteMovie(movieId, token) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(this._checkError)
  }

}

const mainApi = new MainApi({
  baseUrl: 'https://api.movies.tasyushka.nomoredomainsrocks.ru',
});

export default mainApi;





