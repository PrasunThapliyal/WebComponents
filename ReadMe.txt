28 Dec 2022
===========

WebComponents - Javascript

(#) Create a new github repository
(#) Clone repository
(#) Drag and Drop folder WebComponents in VS Code
(#) Already installed extension - Live Server


ref: Web Components Crash Course
    Traversy Media
	https://www.youtube.com/watch?v=PCWaFLy3VUo&t=421s

ref: Intro to Web Components - Full Walkthrough
    Before Semicolon
    https://www.youtube.com/watch?v=PFpUCnyztJk

(#) Create boilerplate HTML/JS
(#) Create a basic component <game-board>, add it to HTML
(#) Use shadowRoot to encapsulate (make inaccessible from outside) the component's content and style
(#) Lifecycle methods: connectedCallback, disconnectedCallback, attributeChangedCallback
        attributeChangedCallback is called before connectedCallback
        so its important to check whether the DOM elements are loaded at that point or not before making any code references

        Passing attributes is very limited because you can pass only strings
            Using attributes you could pass numbers (etc) as strings and then parse them,
            but there's a better alternative - Properties
    Properties - since a DOM element is an object itself, you could define Properties
(#) Add some style
(#) Add a base grid - use CSS display:grid with grid-area
        Gotcha: Grid areas must be contiguous
