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
        if (books[i]['haveRead']) console.log(books[i]['author'] + " has read the " + books[i]['title'] + " book");
        else console.log(books[i]['author'] + " hasn't read the " + books[i]['title'] + " book yet");
    }
}

readingStatus(Books);