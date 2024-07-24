# React.js & Redux

## Magesh Kuppan
- tkmagesh77@gmail.com

## Schedule
- Commence      : 09:30 AM 
- Tea Break     : 11:00 AM (15 mins)
- Lunch Break   : 01:00 PM (1 hour)
- Tea Break     : 3:30 PM (15 mins)
- Wind up       : 5:30 PM

## Methodology
- No powerpoint
- Discussion & Code

## Repository
- https://github.com/tkmagesh/sincro-react-jul-2024

## Software Requirements
- Node.js
- Chrome Browser
- Visual Studio Code (or any other editor)

## Pre-requisites
- Experience in JS (including ES6)

## CWA (Classical Web Apps) vs RIA (Rich Internet Apps)
![image](./images/cwa-vs-ria.png)


## Why React.js?
- Rich Internet Applications


## JSX vs HTML
### JSX
- Every element has to have the corresponding close element
- Use "htmlFor" in place of "for" attribute
- Use "className" in place of "class" attribute

## View
- Presentation (VDOM (JSX)) + UI Behaviour + UI State = Component

## Component
- a function that returns VDOM
- component function names must start with uppercase

## Hooks 
- functions with name 'use'

## State
### Application State
- Data that supports the 'domain' logic of our application
- It is highly LIKELY that a change in this data need to recognized and acted up on by other parts of the application as well
- DO NOT maintain this in the component (using useState())
### UI State
- Data that supports the 'presentation' needs of the 'component'
- It is highly UNLIKELY that a change in this data need to be recognized by other parts of the application
- Feel free to maintain this in the component itself

## State Manager
![image](./images/state-manager.png)