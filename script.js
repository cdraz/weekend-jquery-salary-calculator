console.log('js ready');
$(document).ready(onReady);

// Declare global employees array
let employees = [];

// Declare onReady
function onReady() {
    console.log('jquery ready');
    $(document).on('click', '#submitBtn', onSubmit );
    $(document).on('click', '.deleteBtn', onDelete );
} // end onReady


// Declare onSubmit
function onSubmit(event) {
    event.preventDefault();
    console.log('Employee added');

    // Pull info from inputs and store data for use
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let employeeID = $('#idInput').val();
    let title = $('#titleInput').val();
    let annualSalary = $('#salaryInput').val();

    // Clear inputs once stored
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');

    // Turn stored data into an object for use
    let newEmployee = {
        firstName: firstName,
        lastName: lastName,
        id: employeeID,
        title: title,
        annualSalary: annualSalary
    };
    console.log( 'New employee: ', newEmployee );

    // Push new employee object to global array
    employees.push(newEmployee);
    console.log( 'Employee list: ', employees );

    // Clear #employeeTable to prepare for rendering
    $('#employeeTable').empty();

    // Loop through employees array and render to DOM
    for ( let employee of employees ) {
        $('#employeeTable').append(`
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td> 
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
            <td>
                <button class="deleteBtn">Delete</button>
            </td>
        </tr>
        `);
    }

} // end onSubmit

// Declare onDelete
function onDelete() {
    console.log('onDelete');
}