# React Native Component Learning Project

This is my learning project where I am building React Native components and experimenting with different patterns. I am using Expo and React Native to understand how forms work and how to improve them step by step.

## What I Am Learning

I started with basic signup forms and kept upgrading them as I learned new techniques. Each version of the signup form shows my progress in understanding form validation and user experience.

### Signup Form Progress

signup1 - This is my first attempt at building a signup form. I learned how to collect user input like name email password phone and date of birth. I added basic validation by checking lengths and making sure passwords match. I also added a checkbox for terms and conditions. The submit button only works when all fields are valid.

signup2 - In this version I learned about showing error messages to users. I added touched state to track which fields the user has interacted with. Now errors only show up after you leave a field not while you are still typing. This makes the form feel less annoying. I also learned to calculate whether the button should be enabled based on whether there are any errors.

signup3 - This is where things got more interesting. I learned about debouncing which means waiting a bit before checking things like username availability or email validation. I created a custom useDebounce hook that delays the validation. I also learned regex for proper email validation. I added loading indicators so users know when the app is checking if their username is taken. I made the form smarter by knowing which fields are required and which are optional.

signup4 - This is the most advanced version. I learned about keyboard handling in React Native using KeyboardAvoidingView and ScrollView so the keyboard does not cover input fields. I added refs to move focus between fields when you press return on the keyboard. I also added password visibility toggle buttons so you can see what you typed. The form feels much more polished now with better user experience.

### Other Things I Built For Form

I also created a useDebounce hook in the Hooks folder which I use to delay expensive operations like checking username availability or validating emails. This prevents making too many checks while the user is still typing.

I set up types for the signup form data to make sure I use the right structure everywhere.

I created a common header component and a screen list component for the home screen to keep things organized.

### FlatList Progress

list 1 - This is my first attempt of fetching product and displaying it with the help of flat list here i used three properties of flatlist which is required no other feature first one is data where we put data we want to render it should be a list and then we have key extractor which help uniquely identify each item and then renderItem in which we draw the ui.

list 2 - In this screen i updated previous version i explored more properties of flatlist like refreshing , onEndReachThreshold, onEndReach this help us in pagination of the item i have two state from the api (useProduct) first i manage hasMore and second is refresing where i set the offSet according to that and with hasMore we finally reach end of the list without getting stuck in a loop

list 3 - Here i implemented the search feature with debounce of 900 and fade the list when its loading

### Other Things I Built For FlatList 

I also created useProduct where i fetch products form an mock api and stroring the product in a state and also keep the status of loading and also two more like hasMore in the list isRefreshing and offSet for pagination.

I set up types for the product to make sure I use the right structure everywhere.

I created ProductList so that i can reuse the component 




## How to Run

Install dependencies first

```bash
npm install
```

Start the development server

```bash
npx expo start
```

Then you can open the app on your phone with Expo Go or run it in an iOS simulator or Android emulator.

## What I Am Doing Next

I want to keep learning more about forms and might add things like date pickers file uploads or multi step forms. I am just experimenting and seeing what I can build.
