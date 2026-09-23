// Rectangle ka area
function area(length, width) {
    return length * width;
}

console.log("Area =", area(10, 5));


// Voter eligibility
const checkVote = (age) => {
    if (age > 18) {
        return "Can Vote";
    } else {
        return "Not Eligible";
    }
};

console.log(checkVote(20));
