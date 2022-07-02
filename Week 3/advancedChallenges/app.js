function showRating(rating) {
    let newRating = '';
    for (let i = 0; i < Math.floor(rating); ++i) {
        newRating += '*';
        if (i !== Math.floor(rating) - 1) {
            newRating += ' '
        }
    }
    if (!Number.isInteger(rating)) {
        newRating += ' .'
    }
    return newRating
}

console.log(showRating(.5))