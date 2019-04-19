const hobbiesArray = [
    { name: 'sleeping', lengthInYearsAtHobby: 30 },
    { name: 'coding', lengthInYearsAtHobby: 3},
    { name: 'viddy games', lengthInYearsAtHobby: 25}
];

function printHobby(hobby) {
    console.log(`${hobby.name} enjoyed for ${hobby.lengthInYearsAtHobby}`)
}

hobbiesArray.forEach(hobby => {
    printHobby(hobby);
});

const band1 ={
    name:"Yeah"
}

const band2 = new Object();
band2.name = "Yeah 2"

band1.test1 = "testing1";
band2.test2 = "testing2";

console.log(`${band1.name}
${band2.name}
${band1.test1}
${band2.test2}`)
