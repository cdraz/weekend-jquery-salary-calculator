console.log('js ready');
$(document).ready(onReady);

// Declare global employees array and global monthly cost variable
let employees = [];
let monthlyCost = 0;

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

    // Loop through employees array and render to DOM the employee and update monthly total

    monthlyCost = 0 // Set monthly cost to zero to prepare for recalculation
    for ( let employee of employees ) {
        $('#employeeTable').append(`
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td> 
            <td class="employee-id">${employee.id}</td>
            <td>${employee.title}</td>
            <td>$${employee.annualSalary}</td>
            <td>
                <button class="deleteBtn">Delete</button>
            </td>
        </tr>
        `);
        monthlyCost += employee.annualSalary / 12;
    }

    // Updated DOM with recalculated monthlyCost
    $('#totalMonthly').html(`$${monthlyCost.toLocaleString('en-US')}`);

    // Check monthlyCost to determine background color (Red if > $20k, white if < $20k)
    if ( monthlyCost > 20000 ) {
        $('#totalMonthly').css({
            'background-color': '#FF7777',
            'color': '#550000'
        })
    }
    else {
        $('#totalMonthly').css({
            'background-color': '#FFFFFF',
            'color': '#000000'
        })
    }

} // end onSubmit

// Declare onDelete
function onDelete() {
    console.log('in onDelete');
    
    // Remove employee from DOM
    $(this).parents('tr').remove();

    // Get employee ID with jQuery .text()
    let idToDelete = $(this).parent().siblings('td.employee-id').text();
    console.log('ID Found that will be deleted: ', idToDelete);

    // Using found ID, loop through array and delete employee with matching ID
    for (let employee of employees) {
        if (employee.id === idToDelete) {
            console.log('Employee being deleted: ', employee);
            let i = employees.indexOf(employee);
            employees.splice(i, 1);
        }
    }

} // end onDelete