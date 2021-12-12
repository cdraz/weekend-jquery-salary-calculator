# Salary Calculator

## Description

I was tasked with building an application that receives an employees information (name, ID, title, salary), stores the information, and calculates the total monthly expense for employee compensation. 

To do so, I created an interface using a form for submission, and jQuery event methods to handle the submit event. On submission, the information submitted into the form is stored as an object, added to an array of all employees, and displayed on the DOM. The monthly cost is adjusted and updated on the DOM simultaneously.

The ability to delete is present as well. An event handler is used to detect the employee ID of the employee that is requested for deletion, search through the employee array to find the matching employee object, and remove it from the array. The DOM is then updated with the revised employee list and monthly cost.

