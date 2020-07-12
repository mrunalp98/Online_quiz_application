# Online_quiz_application

My online test application is a simple application with a short quiz designed to test the programming knowledge of the user. The user is provided an interface to choose an option from the given choices and an immediate feedback is provided with the results displayed to the user.
Working and flow of the application: 

Note: The use of a server is mandatory in order to load the data from JSON file. A localhost server or a live server can be used for hosting the website. For the purposes of this project, the Live Server extension from the VisualStudio Code editor was used.
1.	The set of questions and respective answers are stored in a json file called data.json written in JSON format which will be shared from a server using XMLHttpRequest() method.
2.	The parsed JSON data is stored in a local variable and used as a Javascript object throughout the function.
3.	 The index page of the quiz ‘quiz2.html’ gives the users options and the user has to select the desired option from the given answers. 
4.	 This html page is rendered on client side by dynamically rendering HTML tags using JavaScript.  The question is fetched from the json file shared from the server and displayed on the screen.
5.	The page contains two buttons one which submits quiz and the other is Review button. The Review button reviews the answers entered by the user and displays an alertDialog box which contains the list of answered and unanswered questions. Thus, the user is given the facility to review the answers and check which answers are yet to submit before final submission.
6.	The result page displays the score to the user.The evaluation of the score is done by comparing the value of the checked radioButton to that of the correct answer value stored in the JSON file.
7.	 The marks of unanswered questions are deducted from the total score. After submission and evaluation, the correctly answered questions are highlighted in green. The incorrect ones are displayed in red. Each question is provided with an explanation in order to review the question and its possible answer.

