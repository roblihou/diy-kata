const humanCatDogYears = (number) => {
    // 15 cat years for first human year
    // +9 cat years for second human year
    //+4 cat years for each human year after that
    let catYears = Math.min(Math.max(number - 1, 0), 1) * 15
                    + Math.min(Math.max(number - 2, 0), 1) * 9
                    + Math.max(number - 2, 0) * 4;

    // 15 dog years for first year
    // +9 dog years for second year
    // +5 dog years for each year after that
    let dogYears = Math.min(Math.max(number - 1, 0), 1) * 15
                    + Math.min(Math.max(number - 2, 0), 1) * 9
                    + Math.max(number - 2, 0) * 5;

    return [number, catYears, dogYears];
}

export default humanCatDogYears
