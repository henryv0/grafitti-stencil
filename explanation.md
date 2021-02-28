# Grafitti - A StencilJS based component library

This file is to document any findings and record comments throughout the task. I find this is a good way to keep track of my progress and for communicating my thought process in these sort of tasks.

## First steps

My first steps were to bootstrap the project with StencilJS. Stencil's docs look great, and I was able to get up to speed relatively quickly. The name Grafitti is more of a pun on Stencil if anything, but I like to think that it could eventually become a component library that embodies the bold and colourful aspects of street art.

I started by creating a Button component, aiming to achieve an MVP to hit all the requirements in the brief. I started simple, progressing to Props and Slots in order to achieve the user customisability. I relied on these to apply classes to which I would style them with Sass. Stencil did a lot of heavy lifting with CSS scoping and naming collisions but I did try to maintain consistency with naming, adopting a BEM like approach using Sass nesting. I injected some global variables as well in order to use, which would likely be used if this design system were expanded to include grids, utility classes etc.

I went with a no-frills SVG icon approach, though an icon library would make the most sense going forward, as a component library should probably have control over brand and what iconography is used.

As for accessibility, using the base button was the way to go due to its inherent qualities built in, like tabbing. I took the "No Aria is better than bad Aria" approach given the simplicity of the button and its lack of actions/methods.

Some further improvements I would make to the project given enough time:
- Extend use of Storybook to contain knobs/actions
- Add icon library, as mentioned earlier.
- Add Integration testing.
- Add linting and pre-commit hooks for developer experience.

