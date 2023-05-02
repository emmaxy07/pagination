const paginate = (followers) => {
    const itemsPerPage = 9;
    const numberOfPages = followers.length / itemsPerPage;
    const roundedNumOfPages = Math.ceil(numberOfPages);
    const newFollowers = Array.from({ length: roundedNumOfPages }, (_, index) => {
        const start = index * itemsPerPage;
        console.log(start);
        return followers.slice(start, start + itemsPerPage)
    })
    console.log(newFollowers);
    return newFollowers;
}

export default paginate