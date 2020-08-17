/********************
 * HELPER FUNCTIONS *
 ********************/


// -------------------------------------------------------------------//
// -------------------------------------------------------------------//

const justNotCompleteHelper = function (newTodos) {

  if (newTodos.complete === false) {
    return newTodos
  }
}
// -------------------------------------------------------------------//
// -------------------------------------------------------------------//

const justCompleteHelper = function (newTodos) {

  if (newTodos.complete === true) {
    return newTodos
  }
}
// -------------------------------------------------------------------//
// -------------------------------------------------------------------//

const isLowPriorityHelper = function (todo) {
  if (todo.priority > 1) {
    return false
  }
  return true
}
// -------------------------------------------------------------------//
// -------------------------------------------------------------------//

const namesAndPrioritiesHelper = function (todo) {
  const priority = (todo.priority === 2) ? 'High' : 'Low';

  return `${todo.text} - ${priority}`;
}

// -------------------------------------------------------------------//
// -------------------------------------------------------------------//
// -------------------------------------------------------------------//
// -------------------------------------------------------------------//


/*****************
 * GET TODO NAME *
 *****************/
const getTodoName = function (todo) {
  return todo.text;
}
// -------------------------------------------------------------------//
// -------------------------------------------------------------------//

/******************
 * NAMES FUNCTION *
 ******************/
// const names = function(todos) {
const names = (todos) => todos.map((todo) => todo.text)
// return todos.map(getTodoName)

// return todos.map((todo) => todo.text)


// return todos.map(function(todo){
//   return todo.text
// }) 
// }

// -------------------------------------------------------------------//
// -------------------------------------------------------------------//

/*************************
 * GET PRIORITY FUNCTION *
 *************************/
const getPriority = (todos) => todos.priority

// -------------------------------------------------------------------//
// -------------------------------------------------------------------//


/************************
 * IS COMPLETE FUNCTION *
 ************************/
const isComplete = (todo) => todo.complete


// -------------------------------------------------------------------//
// -------------------------------------------------------------------//



/*****************************
 * IS HIGH PRIORITY FUNCTION *
 *****************************/

const isHighPriority = function (todo) {
  if (todo.priority > 1) {
    return true
  }
  return false
}
// -------------------------------------------------------------------//
// -------------------------------------------------------------------//


/***********************
 * PRIORITIES FUNCTION *
 ***********************/

const priorities = (todos) => todos.map((getPriority))

// -------------------------------------------------------------------//
// -------------------------------------------------------------------//


/*********************************
 * NAMES AND PRIORITIES FUNCTION *
 *********************************/





const namesAndPriorities = (todos) => todos.map(namesAndPrioritiesHelper)

  // console.log(todos) 




// -------------------------------------------------------------------//
// -------------------------------------------------------------------//

/******************************
 * JUST NOT COMPLETE FUNCTION *
 ******************************/
// returns an array (filter)
// array includes todos that are not complete (complete === false)


const justNotComplete = function (todos) {
  return todos.filter(justNotCompleteHelper)
}

// -------------------------------------------------------------------//
// -------------------------------------------------------------------//

/**************************
 * JUST COMPLETE FUNCTION *
 **************************/
const justComplete = function (todos) {
  return todos.filter(justCompleteHelper)
}
// -------------------------------------------------------------------//
// -------------------------------------------------------------------//



/****************************
 * PRIORITY 2 ONLY FUNCTION *
 ****************************/
const priority2Only = function (todos) {
  return todos.filter(isHighPriority)
}

// -------------------------------------------------------------------//
// -------------------------------------------------------------------//

/****************************
 * PRIORITY 1 ONLY FUNCTION *
 ****************************/
const priority1Only = function (todos) {

  return todos.filter(isLowPriorityHelper)
}

/***********************
 * ITERATION FUNCTIONS *
 ***********************/














// Our code below

if (typeof getTodoName === 'undefined') {
  getTodoName = undefined;
}

if (typeof getPriority === 'undefined') {
  getPriority = undefined;
}

if (typeof isComplete === 'undefined') {
  isComplete = undefined;
}

if (typeof isHighPriority === 'undefined') {
  isHighPriority = undefined;
}

if (typeof names === 'undefined') {
  names = undefined;
}

if (typeof priorities === 'undefined') {
  priorities = undefined;
}

if (typeof namesAndPriorities === 'undefined') {
  namesAndPriorities = undefined;
}

if (typeof justNotComplete === 'undefined') {
  justNotComplete = undefined;
}

if (typeof justComplete === 'undefined') {
  justComplete = undefined;
}

if (typeof priority2Only === 'undefined') {
  priority2Only = undefined;
}

if (typeof priority1Only === 'undefined') {
  priority1Only = undefined;
}



module.exports = {
  getTodoName,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
}
