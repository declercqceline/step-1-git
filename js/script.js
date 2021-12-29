{
    // fetch json file with an API key in the header
    const header = {
        headers: {
            Authorization: `put your key here`
        }
    };
    const response = await fetch(`https://api.pexels.com/v1/search/?page=1&per_page=12&query=cookies`,header);
    

    // random number with inclusive minimum and exclusive maximum
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min));
    }

    const init = () => {
       
    };

    init();
}