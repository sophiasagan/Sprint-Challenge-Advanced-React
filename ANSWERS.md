- [ ] Why would you use class component over function components (removing hooks from the question)?

It provides greater functionality that you would not normally get from function components w/o hooks. 

- [ ] Name three lifecycle methods and their purposes.
1. Mounting Phase: When the component is being built. Any initial data will be defined on the constructor, render() method is used and componentDidMount is also called

2. Updating Phase: Re-rendering is forced when the component's data is changed. This is when you use setState to update the component's data, if you need to stop a component from calling render() shouldComponentUpdate() method can be used

3. Unmounting Phase: The component is removed from the screen using componentDidMount() 

- [ ] What is the purpose of a custom hook?

 Allows you to apply stateful logic and have DRY code

- [ ] Why is it important to test our apps?

It helps at catching bugs, reducing regression, it also acts as a safety net as changes are made.