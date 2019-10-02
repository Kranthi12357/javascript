const array = [{
    title:"hello",
    isDone:true
},{
    title: "hi",
    isDone: false
},{
    title:"how are you",
    isDone:true
}]

const thingsdone = array.filter((todo) => todo.isDone === false)


thingsdone.forEach((todos) => console.log(todos.title))

const hi = array.map((todo) => todo.isDone = "hi" )
console.log(hi)
console.log(array)


