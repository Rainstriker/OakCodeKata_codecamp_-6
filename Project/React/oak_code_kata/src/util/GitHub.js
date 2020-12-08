const api = 'https://api.github.com/';

const GitHub = {
  search(username) {
    let url = `${api}search/users?q=${username}`;
    return fetch(url
      ).then(response => {
        return response.json();
      }).then(jsonResponse => {
          if (!jsonResponse.items) {
            return [];
          }
          return jsonResponse.items.map(data => ({
            user: data.login,
            url: data.url,
            score: data.score,
            img: data.avatar_url
          }))
        }) 
  } 
}

export default GitHub;