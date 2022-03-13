export const getLibrary = () => {
    fetch('https://api.discogs.com/users/DJEdgarHoover/collection/folders/0/releases').then(response => response.json())
        .then(data => console.log(data)).catch(error => console.log(error))
}
