var Books = [
    {
        author: 'Bill',
        title: 'The Road Ahead',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 10)
    },
    {
        author: 'Steve',
        title: 'Walter Isaacson',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 5)
    },
    {
        author: 'Jhon',
        title:  'The Hunger Games', 
        haveRead: false,
        dateOfRead: NaN
    }
];

function readingStatus(books) {
    let size = Object.keys(books).length;
    for (let i=0; i<size; i++){
        if (books[i]['haveRead']) {
            Object.defineProperty(books[i], 'daysAgo', {
                get () {
                    let today = new Date();
                    let date = books[i]['dateOfRead'];
                    let Difference_In_Time = today.getTime() - date.getTime();
                    let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
                    return Difference_In_Days;
                }
            });
            console.log(books[i]['author'] + " has read the " + books[i]['title'] + " book " + books[i]['daysAgo'] + " days ago");
        } else console.log(books[i]['author'] + " hasn't read the " + books[i]['title'] + " book yet");
    }
}

readingStatus(Books);