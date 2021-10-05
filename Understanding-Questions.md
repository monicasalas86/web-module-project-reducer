# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* onClick happens making the event handler run, which runs the addOne action
* in the actions folder, addOne returns the ADD_ONE action
* in the reducers folder, ADD_ONE case returns
* in App.js, ADD_ONE is renders to the UI
...

* TotalDisplay shows the total plus 1.
