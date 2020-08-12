# Eat-Da-Burger
In this app, a burger logger is created, user will "create" and "eat" burgers using MySQL, Node, Express, Handlebars and ORM. The user can enter (create) a burger into the text box and that burger will then appear in a list of available burgers. The user can then "eat" the burger which sends it into a list of "devoured burgers". Lastly, the burger can be fully deleted from the app.

## Built With

### Technologies Used
- Express
- Express Handlebars
- ORM (Object Relational Modules)
- MVC (Model View Controller)
- JQuery
- Bootstrap
- MySQL
- Node


### How the app works

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* Your app will store every burger in a database, whether devoured or not.

## Screenshots

![Eat Da Burger App](https://github.com/slsmi285/Eat-Da-Burger/blob/master/public/assets/images/BrowserApp.PNG)

![Terminal Logs](https://github.com/slsmi285/Eat-Da-Burger/blob/master/public/assets/images/terminal%20entry%20logs.PNG)

![Sequel DB](https://github.com/slsmi285/Eat-Da-Burger/blob/master/public/assets/images/Sequel.PNG)

[Heroku Link](https://stark-sierra-31142.herokuapp.com)

#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── images
│          
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```





