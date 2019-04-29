# React Intro

## React

React is an open source framework originally developed by Facebook. It follows a component based architecture.

## Component Based Architecture

This means that your site is broken down into unique parts. This makes it easier to maintain and debug when an error occurs.

## Parent - Child Data Flow

Your React application should have a parent to child data flow meaning that data should flow down your app and not back up.
This of your App.js as the main parent component and everything works down from there.

## Component

There are two types of components in React; Function and Class based.

### Class Based

These components should be where your logic is handled. They can have things like state and (soon to be taught) lifecycle methods. They generally look like this

```jsx
import React, {Component} from 'react'

class MyComponent extends Component {
  constructor(
    super()
    this.state = {}
  )
  render(){
    return (
      // JSX GOES HERE
    )
  }
}

export default MyComponent

```

### Functional Components

Should be treated as purely presentational (this will all change soon though). No access to state. Generally look like this

```jsx
import React from 'react'

function MyComponent(){
  return (
      // JSX GOES HERE
  )
}

export default MyComponent

```

## Import/Export

We can import components, files, etc. into our application via an import statement. This is similar to using a link tag in HTML but not quite the same.

We export our component so we can make use of them in different components.

## State

Class based components have access to state. State is just data that is unique to our component. Think of it like the defaults for what our component needs. State should be treated as immutable.

## JSX
The representation of HTML in JavaScript. Stands for JavaScript XML