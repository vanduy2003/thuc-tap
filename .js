// Lấy nút "Thêm nhân viên"
const addEmployeeButton = document.getElementById('add-employee-button');

// Gán sự kiện click cho nút "Thêm nhân viên"
addEmployeeButton.addEventListener('click', () => {
    openPopup('Thêm nhân viên', 0);
});

// Lấy danh sách nhân viên từ API
fetch('https://dummy.restapiexample.com/api/v1/employees')
    .then(response => response.json())
    .then(data => {
        const employeeGrid = document.getElementById('employee-grid');

        // Hiển thị danh sách nhân viên
        data.data.forEach(employee => {
            // Tạo một ô nhân viên
            const employeeCard = createEmployeeCard(employee);
            employeeGrid.appendChild(employeeCard);
        });
    });

// Hàm tạo một ô nhân viên
function createEmployeeCard(employee) {
    const employeeCard = document.createElement('div');
    employeeCard.classList.add('employee-card');
    employeeCard.setAttribute('data-id', employee.id);

    const employeeDetails = document.createElement('div');
    employeeDetails.classList.add('employee-details');
    employeeDetails.innerHTML = `
      <p>ID: ${employee.id}</p>
      <p>Name: ${employee.employee_name}</p>
      <p>Salary: ${employee.employee_salary}</p>
      <p>Age: ${employee.employee_age}</p>
    `;

    const employeeActions = document.createElement('div');
    employeeActions.classList.add('employee-actions');

    const editButton = document.createElement('button');
    editButton.textContent = 'Sửa';
    editButton.addEventListener('click', () => {
        openPopup('Sửa nhân viên', employee);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Xóa';
    deleteButton.addEventListener('click', () => {
        deleteEmployee(employee.id);
    });

    employeeActions.appendChild(editButton);
    employeeActions.appendChild(deleteButton);

    employeeCard.appendChild(employeeDetails);
    employeeCard.appendChild(employeeActions);

    return employeeCard;
}

// Hàm mở popup
function openPopup(title, employee) {
    console.log("mo popup");
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const employeeForm = document.getElementById('employee-form');
    const nameInput = document.getElementById('name');
    const salaryInput = document.getElementById('salary');
    const ageInput = document.getElementById('age');

    popupTitle.textContent = title;
    nameInput.value = employee ? employee.employee_name : '';
    salaryInput.value = employee ? employee.employee_salary : '';
    ageInput.value = employee ? employee.employee_age : '';

    employeeForm.onsubmit = function(event) {
        event.preventDefault();

        const formData = {
            name: nameInput.value,
            salary: salaryInput.value,
            age: ageInput.value
        };

        if (employee) {
            // Sửa nhân viên
            updateEmployee(employee.id, formData);
        } else {
            // Thêm nhân viên
            addEmployee(formData);
        }

        closePopup();
    };

    const cancelButton = document.getElementById('cancel-btn');
    cancelButton.addEventListener('click', closePopup);

    popup.style.display = 'block';
}

// Hàm đóng popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Hàm thêm nhân viên
function addEmployee(data) {
    const employeeGrid = document.getElementById('employee-grid');

    // Tạo một thẻ nhân viên tạm thời để hiển thị ngay lập tức
    const temporaryEmployeeCard = createEmployeeCard(data);
    employeeGrid.appendChild(temporaryEmployeeCard);

    fetch('https://dummy.restapiexample.com/api/v1/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(newEmployee => {
            // Xóa thẻ nhân viên tạm thời
            temporaryEmployeeCard.remove();

            // Tạo lại thẻ nhân viên với dữ liệu đã được cập nhật từ API
            const newEmployeeCard = createEmployeeCard(newEmployee);
            employeeGrid.appendChild(newEmployeeCard);
        })
        .catch(error => {
            // Xóa thẻ nhân viên tạm thời nếu có lỗi khi gọi API
            temporaryEmployeeCard.remove();
            console.error('Lỗi khi thêm nhân viên:', error);
        });
}

// Hàm sửa nhân viên
function updateEmployee(id, data) {
    const employeeCard = document.querySelector(`.employee-card[data-id="${id}"]`);
    const employeeDetails = employeeCard.querySelector('.employee-details');
    const previousDetails = employeeDetails.innerHTML;

    // Hiển thị dữ liệu tạm thời ngay lập tức
    employeeDetails.innerHTML = `
        <p>ID: ${id}</p>
        <p>Name: ${data.name}</p>
        <p>Salary: ${data.salary}</p>
        <p>Age: ${data.age}</p>
    `;

    fetch(`https://dummy.restapiexample.com/api/v1/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(updatedEmployee => {
            // Cập nhật thẻ nhân viên với dữ liệu đã được cập nhật từ API
            employeeDetails.innerHTML = `
                <p>ID: ${updatedEmployee.id}</p>
                <p>Name: ${updatedEmployee.employee_name}</p>
                <p>Salary: ${updatedEmployee.employee_salary}</p>
                <p>Age: ${updatedEmployee.employee_age}</p>
            `;
        })
        .catch(error => {
            // Khôi phục dữ liệu trước đó nếu có lỗi khi gọi API
            employeeDetails.innerHTML = previousDetails;
            console.error('Lỗi khi cập nhật nhân viên:', error);
        });
}

// Hàm xóa nhân viên
function deleteEmployee(id) {
    fetch(`https://dummy.restapiexample.com/api/v1/delete/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            const employeeCard = document.querySelector(`.employee-card[data-id="${id}"]`);
            employeeCard.remove();
        });
}
