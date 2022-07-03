async function firstSixIncomplete() {
    const promise = await fetch ("https://jsonplaceholder.typicode.com/todos");

    const todos = await promise.json() 

    const incompTodos = todos.filter(element => !element.completed).slice(0, 6)

    console.log(incompTodos) 
}

firstSixIncomplete();







// async function firstSixIncomplete() {
//     const promise = await fetch ("https://jsonplaceholder.typicode.com/todos");

//     const result = await promise.json()

//     const todos = result.slice(0, 6).filter(element => element.completed === false)

//     console.log(todos)
// }

// firstSixIncomplete();



// async function postsByUser(uid) {
//     const promise = await fetch("https://jsonplaceholder.typicode.com/posts");

//     const result = await promise.json()

//     const posts = result.filter(element => element.userId === uid)

//     console.log(posts)
// }

// postsByUser(4)





// function sortByHighToLow(arr) {
//     return arr.sort((a, b) => b.price - a.price)
// }

// console.log(
//   sortByHighToLow([
//     { id: 1, price: 50 },
//     { id: 2, price: 0 },
//     { id: 3, price: 500 },
//   ])
// )



// function sortLowToHigh(arr) {
//     return arr.sort((a, b) => a - b)
// }

// console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]))

// function showRating(rating) {
//     let newRating = '';
//     for (let i = 0; i < Math.floor(rating); ++i) {
//         newRating += '*';
//         if (i !== Math.floor(rating) - 1) {
//             newRating += ' '
//         }
//     }
//     if (!Number.isInteger(rating)) {
//         newRating += ' .'
//     }
//     return newRating
// }

// console.log(showRating(.5))
