# Introductions

Hello! Welcome to the Developer Experience React interview mini project. Today we will doing a mini project to assess your React skills. 
Before getting started, you will need a GitHub account. If you do not have one, we have a secondary project that you can work on in CodePen. Just let us know. 

We will be time boxing each section to about 10 minutes. So after about 5-7 minutes, we will start giving hints and guiding you. This is so we can see your thought process and how you would go about tackling at minimun the first three sections! Please feel free to ask questions or for guidance at any time during this interview! Also, we want to hear what you are thinking, so don't be afraid to talk out loud. 

During this interview phase we will be allowing Google and the use of the internet. In each section if we are using a technology you may not be familiar with(or need an api), we have provided links to those. But we do need to see what you are searching for. 

Before beginning the project please complete the followiong:
* if you do not have it already, install node version 10 or greater
* clone this repo on your machine
* cd into this repo
* install the node modules using yarn
* open this repo in your favorite editor
* start this repo using yarn

# Step One Instructions

Uh oh, it looks like this website is broken! Using your React knowledge, please debug this repo. 
In the end you should see:
* A small introduction header
* A header saying `My Favorite Music Artist Is: Nat King Cole`
* Six boxes with a header, some ipsum and a pink button in each
* The click me button toggles between `Nat King Cole` and `Ella Fitzgerald` in the `My Favorite Music Artist Is: ` header

# Step Two Instructions

Phew. Great work debugging that code. I can now see all this super important ipsum data. But looking at the code base, it seems to be very repetitive. How can we make this better? Please build a reusable grid for the cards that display this data. 
Requirements: 
* Move the displayed cards to its own reusable component, The less code the better
* Make sure the `My favorite Music Artist Is: ` functions the same as it did before
* Stretch Goal: If there is time, make the `My favorite Music Artist Is: ` display that cards title when the button inside that card is clicked on

# Step Three Instructions

Nice! Now the code is reusable. So if I wanted to build this out with even more great ipsum data, I don't have to create cards over and over and over again. But now I am thinking, while this ipsum data is fun, I do want actual real data. Use the links below to instead of using the arrays of data provided, to pull from the API provided and display that data there. 
Requirements:
* Display the data based of what is received from the API
* Make sure the sections and structure of the card makes sense for what data you are displaying
* We want to see at least three different data pieces displayed on the cards(you can add more sections or components or anything you would like to the cards)
* We want the `Click Me!` button to function as it did in step 2
* Don't worry about CSS...yet
* When opening the links, please make sure we can see the page
* Stretch Goal: If you didn't do this in step 2, make the `My favorite Music Artist Is: ` display relevant data to that section from the card that is clicked on

Helpful Links:  
[API](https://5fced5c53e19cc00167c63a9.mockapi.io/api/v1/singers)  
[Material UI Cards](https://material-ui.com/components/cards/)  
[Material UI Typography](https://material-ui.com/components/typography/)  
# Step Four Instructions

I am so excited to see all this real data and not to display that ispum anymore. That cupcake ipsum was making me hungry. Now that you have real data here, how about if we style it!
Requirements:
* Style the page to make it look nice. Use coherent colors and display the data however you would like it to look. Explain your thought process

Helpful Link:
[Material UI](https://material-ui.com/)

# Step Five Instructions

Wow, does that page look great. I am really digging all this new styling. Let us talk about testing for a couple of minutes now. Wayyyyy nack in Step One, we had a completed single page app that had some working tests. Can we rewrite these?
Requirements:
* If time, rewrite the old tests to include the new code you have written and that makes sense for your file structure.
* If we are short on time, let us take 2-3 minutes and talk about your approach and what the tests would look like

Helpful Link:
[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)