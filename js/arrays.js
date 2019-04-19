let hobbiesArray = ['coding',
'not testing',
'viddy games'];

function printHobbies(params) {
    console.log(`I Like 3 things:`);
    params.forEach(element => {
        console.log("I like " + element);
    });
}

printHobbies(hobbiesArray);