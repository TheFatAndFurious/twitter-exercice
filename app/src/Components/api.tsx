export const fetchUsers = async () => {
    try {
        const response = await fetch('http://localhost:3000/users');
        if(!response.ok) {
            throw new Error("erreur lors de la recuperation des users")
        }
        const data = await response.json()
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('erreur lors de la recuperation des users')
    }
};


export const fetchTweets = async () => {
    try {
        const response = await fetch('http://localhost:3000/tweets');
        if(!response.ok) {
            throw new Error("erreur lors de la recuperation des tweets")
        }
        const data = await response.json()
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('erreur lors de la recuperation des tweets')
    }
};