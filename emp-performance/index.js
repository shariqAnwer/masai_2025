function performanceFn(emp) {
    const priority = {  //value is given to set the order
    "Excellent": 3,
    "Good": 2,
    "Needs Improvement": 1
  };
  let res = []
  const taskGreaterThanFive = emp?.filter((x) => x.tasksCompleted > 5)
  // console.log(taskGreaterThanFive)
  for (let i = 0; i < taskGreaterThanFive.length; i++) {
    let obj = {}
      obj['name'] = taskGreaterThanFive[i].name
    if (taskGreaterThanFive[i].rating > 4.5) {
      obj['performance'] = "Excellent"
    }
    if (
      taskGreaterThanFive[i].rating >= 3 &&
      taskGreaterThanFive[i].rating <= 4.5
    ) {
      obj['performance'] = "Good"
    }
    if (taskGreaterThanFive[i].rating < 3) {
      obj['performance'] = "Needs Improvement"
    }
    res.push(obj)
  }
  return res.sort((a, b) => priority[b.performance] - priority[a.performance])
}

const emp = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },

  { name: "Bob", tasksCompleted: 4, rating: 4.0 },

  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },

  { name: "David", tasksCompleted: 10, rating: 4.9 },

  { name: "Eve", tasksCompleted: 7, rating: 2.8 },
]

console.log(performanceFn(emp))
