# Dog Breed Quiz
<img src="Screenshot.png" alt="Screenshot" width="1000"/>
This is the week 3 assignment for the ITP class Dynamic Web Development.<br />
This week, the assignment was to created a dynamic front end web application. This means that it must:

* Connect with an API (e.g. weather, time)
* Include an interactive element that responds to an event (e.g. click, scroll, mouseover, etc.)
* Be responsive to the screen size

I decided to create a simple educational quiz app to test the user's knowledge in dog breed using the [Dog API](https://dog.ceo/dog-api/documentation/).

Here's the [Live Demo on Glitch](https://cuinjune-dog-breed-quiz.glitch.me/)

## Design
I started with drawing a rough sketch to determine how the contents should be placed and then I used [Figma](https://www.figma.com/file/4tPv71U0E7AkBKHCRknwd4/Dog-Breed-Quiz?node-id=0%3A1) to create wireframe, visual design, and style guide. 
<img src="Figma.png" alt="Figma" width="1000"/>

### Sketch
<img src="Sketch.png" alt="Sketch" width="500"/>

### Wireframe
<img src="Wireframe.png" alt="Wire Frame" width="500"/>

### Visual Design
<img src="Visual Design.png" alt="Visual Design" width="500"/>

### Style Guides
<img src="Style Guides.png" alt="Style Guides" width="500"/>

## Building the Website
I structured the HTML page with flex boxes that are essentially made of rows and columns and based on the wireframe sketch.

<img src="Debug.png" alt="Debug" width="1000"/>

I tried to make the page responsive to the page size by changing the flex-direction.

```
@media screen and (max-width: 800px) {
    .row1 {
        flex-direction: column;
    }
}
```
But it didn't seem to work properly for some reason. I need to ask and learn how to fix this.

<img src="Wrong.png" alt="Wrong" width="300"/>

## Author
* [Zack Lee](https://www.cuinjune.com/about): MPS Candidate at [NYU ITP](https://itp.nyu.edu)
