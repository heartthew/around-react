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

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
                headers: this._headers
            })
            .then(res => this._checkResponse(res))
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
                headers: this._headers
            })
            .then(res => this._checkResponse(res))
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
            .then(res => this._checkResponse(res))

    }

    setAvatar(avatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
                headers: this._headers,
                method: "PATCH",
                body: JSON.stringify({
                    avatar
                })
            })
            .then(res => this._checkResponse(res))
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
            .then(res => this._checkResponse(res))
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/` + cardId, {
                headers: this._headers,
                method: "DELETE",
            })
            .then(res => this._checkResponse(res))
    }

    addLike(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/` + cardId, {
                method: "PUT",
                headers: this._headers
            })
            .then(res => this._checkResponse(res))
    }

    removeLike(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/` + cardId, {
                method: "DELETE",
                headers: this._headers
            })
            .then(res => this._checkResponse(res))
    }
}

export const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-7",
    headers: {
      authorization: "cd1cfdf8-4aa7-46c5-9465-44c7c15c403b",
      "Content-Type": "application/json"
    }});
