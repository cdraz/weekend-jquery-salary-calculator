App must include:
- Input form
    - first name
    - last name
    - id number
    - job title
    - annual salary
- Submit button on form that collects and stores data. On submit:
    - Calculate monthly cost of employee with stored data
    - Append info to DOM
        - If total monthly cost > $20k, red background color
        - Include delete button that removes an employee from DOM
            - *STRETCH* Removes salary from reported total
- Styling

[X] Setup
    [X] index.html
    [X] jquery.js
    [X] script.js
    [X] style.css
    [X] link all to html
[X] HTML Mockup
[X] Form setup - employee name, number, title, salary
[X] Submit button
    [X] HTML setup
    [X] jQuery event handler
    [X] Clear form fields and stores values to global variable
    [X] appends new info to DOM
[X] Delete button
    [X] jQuery event handler
    [X] Removes item from DOM
    [X] Removes employee info from global variable
[X] Styling


TO DO LATER:
[X] Fix rounding for monthly cost


$('#formID').on('submit', onFormSubmission);

function onFormSubmission(event) {
    event.preventDefault();
}

LOOK INTO HTML5 VALIDATION - for forms
