 // try, catch and finally

try {
    console.log("Start of try runs")

    unicycle; // error hai ye

    console.log("End of try runs --  never reached")

} catch (err) {

    console.log("error has occured: " + err)

} finally {
    console.log("This always run")
}

console.log("...then the execution continues")

// x --- x --- x

// throw statement usecase

const json = '{ "age": 30 }'; // data from server

try {
    const user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name")
    }

    console.log(user.name)
    
} catch (err) {
    console.log("JSON error: " + err);
}