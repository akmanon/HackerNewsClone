export const getTopStories = () => {
    return new Promise((resolve, reject) => {
        if (localStorage.getItem('topStories') !== null) {
            resolve(JSON.parse(localStorage.getItem('topStories')));
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
                        localStorage.setItem("topStories", JSON.stringify(storyData))
                        return storyData;
                    }).catch((error) => { reject(error) }))
                })
                .catch((error) => { reject(error) })
    })
}
export const getBestStories = () => {
    return new Promise((resolve, reject) => {
        if (localStorage.getItem('bestStories') !== null) {
            resolve(JSON.parse(localStorage.getItem('bestStories')));
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
                        localStorage.setItem("bestStories", JSON.stringify(storyData))
                        return storyData;
                    }).catch((error) => { reject(error) }))
                })
                .catch((error) => { reject(error) })
    })
}
export const getNewStories = () => {
    return new Promise((resolve, reject) => {
        if (localStorage.getItem('newStories') !== null) {
            resolve(JSON.parse(localStorage.getItem('newStories')));
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
                        localStorage.setItem("newStories", JSON.stringify(storyData))
                        return storyData;
                    }).catch((error) => { reject(error) }))
                })
                .catch((error) => { reject(error) })
    })
}
export const getJobStories = () => {
    return new Promise((resolve, reject) => {
        fetch("https://hacker-news.firebaseio.com/v0/newstories.json")
            .then((body) => (body.json()))
            .then((res) => {
                res = res.splice(0, 30)
                resolve(Promise.all(res
                    .map((id) => fetch(` https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                        .then((body) => body.json())
                        .then((data) => data)
                    )
                ).then((res) => res))
            })
            .catch((error) => { reject(error) })
    })
}
export const getShowStories = () => {
    return new Promise((resolve, reject) => {
        fetch("https://hacker-news.firebaseio.com/v0/newstories.json")
            .then((body) => (body.json()))
            .then((res) => {
                res = res.splice(0, 30)
                resolve(Promise.all(res
                    .map((id) => fetch(` https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                        .then((body) => body.json())
                        .then((data) => data)
                    )
                ).then((res) => res))
            })
            .catch((error) => { reject(error) })
    })
}
