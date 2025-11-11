import {createSlice, nanoid} from '@reduxjs/toolkit'


const initialState = {
    todos: [{id:1, text:"Hello World"}]
} //how store will lookinitially

export const todoSlice = createSlice({
    name: 'todo',//name is a property in createSlice in redux
    initialState,            //every slice has a initial state
    reducers: {             //we created a reducer here and it holds properties and functions 
        addTodo: (state, action)=>{  
            console.log("remove todo has this actions : "+actions)
            console.log("remove todo has this state: "+state)    //can pass a reference function 
            const todo = {
                id:nanoid(),
                text:action.payload //payload is object and it can contain things like id text and etc
            }
            state.todos.push(todo)
        },
        removeTodo: (state,actions)=>{
            console.log("remove todo has this actions : "+actions)
            console.log("remove todo has this state: "+state)
            state.todos = state.todos.filter((todo)=>{
                todo.id !== action.payload
            })
        }           
    }               
}) 

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer
// bigger version of reducer , reducer is functionality.

//in context apis we do the declaration inside the  context boox and write the funcitonality later .
//but in redux we write the function definitions.

//from reducers our function will always recieve two things first is state and second is action
//state will return the current state whatever is it. after the initial state
//values used to perform some actions will be recieved from action . for ex : id needed for deleting a particular element