let albums = [
    { artist: 'Frank Zappa', title: 'Apostrophe' },
    { artist: 'Frank Zappa', title: 'One Size Fits All' }
];

// // map
// let mapAlbums = albums.map((element, index, array) => {
//     console.log(element, index, array);
//     return element;
// })

// console.log(mapAlbums);

// // shallow copy
// let albumsCopy = [...albums] 
// albumsCopy[0].artist = "Anas";
// console.log(albumsCopy);
// console.log("Original", albums); // original bhi change hogaya

// // deep copy
// let albumsCopy = JSON.parse(JSON.stringify(albums)); 
// albumsCopy[0].artist = "Anas";
// console.log("Copy", albumsCopy);
// console.log("Original", albums); // original change nhi hua

// // JSON method ki limitations
// const obj = {
//     a: 1,
//     b: undefined,
//     c: () => { },
//     d: new Date(),
// };

// const copy = JSON.parse(JSON.stringify(obj));
// console.log(copy);

// // // search inside an array
// // includes()
// let dMinor = ['D', 'E', 'F', 'G', 'A', 'B', 'C'];
// console.log(dMinor.includes('E')); // false
// console.log(dMinor.includes('E', 2)); // false

// // indexOf()
// let dMinor = ['D', 'E', 'F', 'G', 'A', 'B', 'C'];
// console.log(dMinor.indexOf('E')); 
// console.log(dMinor.indexOf('E', 2));

// // find & findLast
let animals = [
    { no: 1, track: 'Pigs on the Wing (Part One)' },
    { no: 2, track: 'Dogs' },
    { no: 3, track: 'Pigs (Three Different Ones)' },
    { no: 4, track: 'Sheep' },
    { no: 5, track: 'Pigs on the Wing (Part Two)' }
];

// animals.find(el => el['track'].includes('Pigs')); // first waala dega
// animals.findLast(el => el['track'].includes('Pigs')); // last waala dega
// animals.find(el => el['track'].includes('Horses')); // undefined

// // findIndex & findLastIndex
// let ans = animals.findIndex(el => el['track'].includes('Horses')); // -1
// console.log(ans);

// // // to Check if Array Elements Meet a Condition
// // every() & some() methods
// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];

// console.log(nobleGases.every(el => typeof el == 'string'));
// console.log(nobleGases.some(el => el == 'Ar'));
// console.log(nobleGases.some(el => el == 'Rn'))

// // filter()
// let onlyPigs = animals.filter(el => el['track'].includes('Pigs'));
// console.log(onlyPigs);

// // forEach() = returns undefined
// animals.forEach(el => delete el['no']);
// console.log(animals);

// // sort()
// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'];

// // sorting in ascending order
// nobleGases.sort((a, b) => {
//        return a === b ? 0 : a > b ? 1 : -1; 
// });
// console.log(nobleGases)

// // sorting in descending order
// nobleGases.sort((a, b) => {
//     return a === b ? 0 : a < b ? 1 : -1;
// });
// console.log(nobleGases)

// // reduce()
// let countPigs = animals.reduce((count, element) => {
//     return element.track.includes("Pigs") ? count + 1 : count;
// }, 0);
// console.log(countPigs)

