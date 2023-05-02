// const token = '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';
// const options = {
//     headers: {
//         'Authorization': `token ${token}`
//     }
// }

const url = 'https://api.github.com/users?per_page=100'

const fetchFollowers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export default fetchFollowers;