class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
    }

    getCards() {
        return fetch(`${this._baseUrl}/cards`, {
                headers: this._headers
            })
            .then(this._checkResponse)
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
                headers: this._headers
            })
            .then(this._checkResponse)
    }

    setUserInfo({ name, about }) {
        return fetch(`${this._baseUrl}/users/me`, {
                headers: this._headers,
                method: "PATCH",
                body: JSON.stringify({
                    name,
                    about
                })
            })
            .then(this._checkResponse)

    }

    setAvatar(avatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
                headers: this._headers,
                method: "PATCH",
                body: JSON.stringify({
                    avatar
                })
            })
            .then(this._checkResponse)
    }

    addCard({ name, link }) {
        return fetch(`${this._baseUrl}/cards`, {
                headers: this._headers,
                method: "POST",
                body: JSON.stringify({
                    name,
                    link
                })
            })
            .then(this._checkResponse)
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/` + cardId, {
                headers: this._headers,
                method: "DELETE",
            })
            .then(this._checkResponse)
    }

    addLike(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/` + cardId, {
                method: "PUT",
                headers: this._headers
            })
            .then(this._checkResponse)
    }

    removeLike(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/` + cardId, {
                method: "DELETE",
                headers: this._headers
            })
            .then(this._checkResponse)
    }
}

const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-7",
    headers: {
      authorization: "cd1cfdf8-4aa7-46c5-9465-44c7c15c403b",
      "Content-Type": "application/json"
    }});

    export default api;