// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘


console.log('#1 isAdmin');
console.log('\n');

function isAdmin(user){
    if (user.userRole === 'ADMIN'){
        return true;
    } else {
        return false;
    }
}

let user1 = {
    firstName: 'Enzo',
    lastName: 'Morales',
    userRole: 'ADMIN',
}

console.log(isAdmin(user1));

// ================================================


console.log('#2 getEmail');
console.log('\n');

function getEmail(user){
    let emailUser = (`${user.firstName}.${user.lastName}@codeimmersives.com`);
    return emailUser.toLowerCase();
}

let ciUser = {
    firstName: 'Enzo',
    lastName: 'Morales',
}

console.log(getEmail(ciUser));

// ================================================


console.log('#3 getPlaylistLength');
console.log('\n');

function getPlaylistLength(playlistFile){
    let songNum = playlistFile.songs.length;
    return songNum;
}

let playlistExample = {
    name: 'my jams',
    songs: ['Vienna', 'Hey Ya!'],
}

console.log(getPlaylistLength(playlistExample));

// ================================================

console.log('#4 getHardestHomework');
console.log('\n');

function getHardestHomework(homeworkArray){
    let lowestHW = homeworkArray[0]; // keep track of the same typeOf
    
    if (homeworkArray.length === 0){
        return "";
    }
    
    for (let i=0; homeworkArray.length > i; i++){
        
        if (homeworkArray[i].averageScore < lowestHW.averageScore){
            lowestHW = homeworkArray[i];
        }
    }
    return lowestHW.name;
}


let testHardHomework = [
    { name: 'homework 1',
    averageScore: 99 },
    { name: 'homework 2',
    averageScore: 1 }
]

console.log(getHardestHomework(testHardHomework))

// ================================================

console.log('#5 createPhonebook');
console.log('\n');

function createPhonebook(namesArray, numbersArray){
    let phonebook = {};

    for(let i = 0; i < namesArray.length; i++){
        phonebook[namesArray[i]] = numbersArray [i];

    }
    return phonebook
}

console.log(createPhonebook(['Jimothy', 'Maria', 'Karl'], ['123-456-7890', '000-000-0000', '999-888-7766']));


// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};