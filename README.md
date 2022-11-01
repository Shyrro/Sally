# Sally
A Svelte component library that is fully-accessible and fully-customizable using @emotion/css ( WIP )

Currently not possible to move forward with this lib, due to this : 

- https://github.com/sveltejs/svelte/issues/7625
- https://github.com/sveltejs/svelte/issues/5112

ATM, it is not possible to dynamically get parent events. 

Having this :

```svelte
<!-- Parent  -->
<script>
    import MyComp from './MyComp'
    let msg = ''
</script>
<MyComp on:click={() => console.log('click')} on:keydown={() => console.log('keydown')} />
```

This won't work as there is currently no way to get parent events from the child component dynamically.
To achieve this, i would need to have `props` that have a `clickHandler` and `keydownHandler` to pass to the child component.
The more events you have, the more it is painful. 

This also blocks composing components heavily. As even if you can get the events, there is no way to spread them into your child component. 
Though, i we are able to get the events, i can get around this point by using the `use` directive and appending the events myself.

