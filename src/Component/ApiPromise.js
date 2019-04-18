let today = () => {
    let d = new Date();
    return "".concat(d.getDay(), d.getMonth(), d.getFullYear())
}

const getKey = (name) => {
    let keys = Object.keys(localStorage)
    if (keys.length === 0) return false;
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].slice(0, 3) === name) {
            return keys[i];
        }
    }
}

export const getTopStories = () => {
    return new Promise((resolve, reject) => {
        if (localStorage.getItem(`topStories${today()}`) !== null) {
            resolve(JSON.parse(localStorage.getItem(`topStories${today()}`)));
        }
        else
            fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
                .then((body) => (body.json()))
                .then((storyId) => {
                    storyId = storyId.splice(0, 30)
                    resolve(Promise.all(storyId
                        .map((id) => fetch(` https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                            .then((body) => body.json())
                            .then((data) => data)
                            .catch((error) => { reject(error) })
                        )
                    ).then((storyData) => {
                        delete localStorage[getKey('top')];
                        localStorage.setItem(`topStories${today()}`, JSON.stringify(storyData));
                        return storyData;
                    }).catch((error) => { reject(error) }))
                })
                .catch((error) => { reject(error) })
    })
}

export const getBestStories = () => {
    return new Promise((resolve, reject) => {
        if (localStorage.getItem(`bestStories${today()}`) !== null) {
            resolve(JSON.parse(localStorage.getItem(`bestStories${today()}`)));
        }
        else
            fetch("https://hacker-news.firebaseio.com/v0/beststories.json")
                .then((body) => (body.json()))
                .then((storyId) => {
                    storyId = storyId.splice(0, 30)
                    resolve(Promise.all(storyId
                        .map((id) => fetch(` https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                            .then((body) => body.json())
                            .then((data) => data)
                            .catch((error) => { reject(error) })
                        )
                    ).then((storyData) => {
                        delete localStorage[getKey('bes')];
                        localStorage.setItem(`bestStories${today()}`, JSON.stringify(storyData));
                        return storyData;
                    }).catch((error) => { reject(error) }))
                })
                .catch((error) => { reject(error) })
    })
}
export const getNewStories = () => {
    return new Promise((resolve, reject) => {
        if (localStorage.getItem(`newStories${today()}`) !== null) {
            resolve(JSON.parse(localStorage.getItem(`newStories${today()}`)));
        }
        else
            fetch("https://hacker-news.firebaseio.com/v0/newstories.json")
                .then((body) => (body.json()))
                .then((storyId) => {
                    storyId = storyId.splice(0, 30)
                    resolve(Promise.all(storyId
                        .map((id) => fetch(` https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                            .then((body) => body.json())
                            .then((data) => data)
                            .catch((error) => { reject(error) })
                        )
                    ).then((storyData) => {
                        delete localStorage[getKey('new')];
                        localStorage.setItem(`newStories${today()}`, JSON.stringify(storyData));
                        return storyData;
                    }).catch((error) => { reject(error) }))
                })
                .catch((error) => { reject(error) })
    })
}