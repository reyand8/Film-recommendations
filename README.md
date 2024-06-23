# Film Recommendations


## Contents
1. [Main Information](#📜-Main-Information)
2. [Stack](#Stack)
3. [Installation and Usage](#Installation-and-Usage)
4. [Examples](#Examples)
    1. [Main page](#Main-page)
    2. [Single item](#Film-details)
    3. [Selected films](#Selected-films)
    4. [Genres](#Genres)
    5. [Search bar](#Search-bar)
    6. [User Authentication and Profile](#User-Authentication-and-Profile)


____

## 📜 Main Information

Film Recommendations is a multilingual pet-project supporting English, Spanish, 
German, Ukrainian, and Russian languages and was built using the API from themoviedb.org. 

The project consists of:
- **Main Page.** On the main page users can see a list of films. 
Each film card includes: Poster, Title, Rating, Age category, Release date.
If a user clicks on a film title, a page with detailed information about the film opens.
Users can also add films to the 'Selected Films' section. Later they can name this list 
and share it with others. Following this link, the list of selected films will be opened.
    In addition, on the main page users can also use the filter that allows to specify certain 
parameters to search films. It's also possible to search films by title.

- **Genres Page.** This page displays film genres. Users can click on any genre, and they will see
a list of films in that category.

- **Account.** Users can sign up or sign in if they already have an account. 
In the profile, they can edit personal information, see their list of selected films and delete 
their account. If users select films and then log into their account, the list of selected films 
will be fetched from the local storage, saved in the database and displayed in their profile.

____

## Stack

### Client stack

✅ HTML (JSX), CSS, SCSS

✅ JavaScript ES6+

✅ React

✅ react-intl

✅ React Router

✅ GraphQL

✅ Apollo GraphQL

✅ Material UI

✅ Storybook

✅ ESlint

✅ Jest


### Server stack

✅ axios

✅ express

✅ graphql

✅ apollo-server

✅ apollo-server-express

✅ prisma

✅ sqlite3

____

## Installation and Usage

The project consists of two parts: the server and the client.

**Installation:**

* Clone the repository: git clone https://github.com/reyand8/Film-recommendations.git

**Usage:**

* Client
    - Navigate to the project directory: cd client
    - Install dependencies: npm install
        - Run the project: npm run start
        - Open a browser and navigate to: http://localhost:3000
* Server
  - Navigate to the server directory: cd server
  - Install dependencies: npm install
  - Generate your API key on https://api.themoviedb.org 
  and add your key to the config file
  - Run the server: npm run server  
  - Server will run on http://localhost:4000/graphql
  
____

## Examples


### Main page

![1.png](readmeScr/1.png)
![2.png](readmeScr/2.png)

____
____

### Film details

![3.png](readmeScr/3.png)

____
____

### Selected films

![5.png](readmeScr/5.png)
![6.png](readmeScr/6.png)

____
____

### Genres

![7.png](readmeScr/7.png)

____
____

### Search bar

![4.png](readmeScr/4.png)

____
____

### User Authentication and Profile

![10.png](readmeScr/10.png)
![11.png](readmeScr/11.png)
![8.png](readmeScr/8.png)
![9.png](readmeScr/9.png)
![12.png](readmeScr/12.png)

____
____