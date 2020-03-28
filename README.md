# Fitness Tracker

## Author
* Christopher Ellis


## Description

This application allows a user to create a new workout and add exercises to/complete/continue said workout. It was created using Mongo database with a Mongoose schema and it handles routes with Express.

## URL to application on Heroku




## Instructions

When the user loads the page, they are given the option to create a new workout, or continue with their last workout.

If a workout has not yet been created a message will be displayed saying "You have not created a workout yet!".

In order to create a new workout do the following:

  * Click the Green button that says "New Workout".
    * You will be taken to the "Add Your Exercise" page.
  * From the drop-down menu, select the type of exercise you would like to add to your workout.
    * Fill out all of the available input fields and then click "Add Exercise"; complete this step for all of the exercises you wish to add to your workout EXCEPT the last exercise in your workout. 
    * When you have filled out the information for the last exercise in your workout click "Complete" instead of "Add Exercise".
      * This will not only add the final exercise but it will also redirect you to the workout summary page and give you the stats of the workout your just completed.
  * If you have already completed a workout and you would like to add new exercises to it you can click the "Continue Workout" button rather than the "New Workout" button and add the exercises as you did before. *Remember to click "Complete" after inputting the details for your final exercise in the workout.
  * If you would like to view graphical statistics about your workouts/exercises you can click on the "Dashboard" link at the top of the page to be redirected to the stats page which will display a few graphs/charts representing the exercises you have entered.
  * To navigate back simply click the "Fitness Tracker" link at the top of the page.

## Screenshots
![image](https://user-images.githubusercontent.com/54122844/77833720-0d4ac300-7105-11ea-8619-59754a4e59bb.png)

![image](https://user-images.githubusercontent.com/54122844/77833732-2d7a8200-7105-11ea-9897-cd352cd6d8ba.png)

![image](https://user-images.githubusercontent.com/54122844/77833751-4125e880-7105-11ea-98a9-c4659844fbbb.png)

## Built With

* mongoDB
* mongoose.js
* node.js
* express.js
* chart.js
* semantic ui
* bootstrap
* HTML/CSS/JavaScript

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
