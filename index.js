function distanceFromHqInBlocks(someValue) {
    const blockDistance = Math.abs(someValue - 42);
    return blockDistance;
}

function distanceFromHqInFeet(someValue) {
    const feetDistance = distanceFromHqInBlocks(someValue) * 264;
    return feetDistance;
}

function distanceTravelledInFeet(start, destination) {
    const travelFeet = Math.abs(destination - start) * 264;
    return travelFeet;
}

function calculatesFarePrice(start, destination) {
    const travelFeet = distanceTravelledInFeet(start, destination);
    if (travelFeet <= 400) {
        const farePrice = 0;
        return farePrice;
    } else if (travelFeet > 400 && travelFeet <= 2000) {
        const farePrice = (travelFeet - 400) * .02;
        return farePrice;
    } else if (travelFeet > 2000 && travelFeet < 2500) {
        const farePrice = 25;
        return farePrice;
    } else {
        const farePrice = 'cannot travel that far'
        return farePrice;
    }
}