let users = [];
let admins = [];
let guests = [];

function checkLogin() {
    const employeeId = document.getElementById('employeeId').value;
    if (employeeId === 'KevAdmin') {
        document.getElementById('passwordSection').style.display = 'block';
    } else {
        const user = users.find(user => user.id === employeeId);
        const admin = admins.find(admin => admin.id === employeeId);
        if (user || admin) {
            document.getElementById('passwordSection').style.display = 'block';
        } else {
            alert('ID incorrecto');
        }
    }
}

function login() {
    const employeeId = document.getElementById('employeeId').value;
    const password = document.getElementById('password').value;
    if (employeeId === 'KevAdmin' && password === '1234') {
        showAdminPanel();
    } else {
        const user = users.find(user => user.id === employeeId && user.password === password);
        const admin = admins.find(admin => admin.id === employeeId && admin.password === password);
        if (user || admin) {
            showCheckInOut();
        } else {
            alert('Contraseña incorrecta');
        }
    }
}

function showAdminPanel() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'block';
}

function showCreateUser() {
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('createUser').style.display = 'block';
}

function showCreateAdmin() {
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('createAdmin').style.display = 'block';
}

function guestLogin() {
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('guest').style.display = 'block';
}

function showLogin() {
    document.getElementById('login').style.display = 'block';
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('createUser').style.display = 'none';
    document.getElementById('createAdmin').style.display = 'none';
    document.getElementById('guest').style.display = 'none';
    document.getElementById('checkInOut').style.display = 'none';
    document.getElementById('allUsers').style.display = 'none';
}

function createUser() {
    const user = {
        id: document.getElementById('newUserId').value,
        name: document.getElementById('newUserName').value,
        phone: document.getElementById('newUserPhone').value,
        email: document.getElementById('newUserEmail').value,
        password: document.getElementById('newUserPassword').value,
        dob: document.getElementById('newUserDOB').value,
        age: document.getElementById('newUserAge').value,
        gender: document.getElementById('newUserGender').value,
        department: document.getElementById('newUserDepartment').value
    };
    users.push(user);
    alert('Usuario creado');
    showAdminPanel();
}

function createAdmin() {
    const admin = {
        id: document.getElementById('newAdminId').value,
        name: document.getElementById('newAdminName').value,
        phone: document.getElementById('newAdminPhone').value,
        email: document.getElementById('newAdminEmail').value,
        password: document.getElementById('newAdminPassword').value,
        dob: document.getElementById('newAdminDOB').value,
        age: document.getElementById('newAdminAge').value,
        gender: document.getElementById('newAdminGender').value,
        department: document.getElementById('newAdminDepartment').value
    };
    admins.push(admin);
    alert('Administrador creado');
    showAdminPanel();
}

function guestCheckIn() {
    const guest = {
        name: document.getElementById('guestName').value
    };
    guests.push(guest);
    alert('Invitado registrado');
    showAdminPanel();
}

function checkIn() {
    const logTable = document.getElementById('logTable');
    const newRow = logTable.insertRow();
    newRow.insertCell(0).innerText = 'ID';
    newRow.insertCell(1).innerText = 'Nombre';
    newRow.insertCell(2).innerText = new Date().toLocaleTimeString();
    newRow.insertCell(3).innerText = '';
}

function checkOut() {
    const logTable = document.getElementById('logTable');
    const lastRow = logTable.rows[logTable.rows.length - 1];
    lastRow.cells[3].innerText = new Date().toLocaleTimeString();
}

function showAllUsers() {
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('allUsers').style.display = 'block';

    const usersTable = document.getElementById('usersTable');
    usersTable.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Correo Electrónico</th>
            <th>Fecha de Nacimiento</th>
            <th>Edad</th>
            <th>Sexo</th>
            <th>Departamento</th>
        </tr>
    `;

    users.forEach(user => {
        const newRow = usersTable.insertRow();
        newRow.insertCell(0).innerText = user.id;
        newRow.insertCell(1).innerText = user.name;
        newRow.insertCell(2).innerText = user.phone;
        newRow.insertCell(3).innerText = user.email;
        newRow.insertCell(4).innerText = user.dob;
        newRow.insertCell(5).innerText = user.age;
        newRow.insertCell(6).innerText = user.gender;
        newRow.insertCell(7).innerText = user.department;
    });

    admins.forEach(admin => {
        const newRow = usersTable.insertRow();
        newRow.insertCell(0).innerText = admin.id;
        newRow.insertCell(1).innerText = admin.name;
        newRow.insertCell(2).innerText = admin.phone;
        newRow.insertCell(3).innerText = admin.email;
        newRow.insertCell(4).innerText = admin.dob;
        newRow.insertCell(5).innerText = admin.age;
        newRow.insertCell(6).innerText = admin.gender;
        newRow.insertCell(7).innerText = admin.department;
    });

    guests.forEach(guest => {
        const newRow = usersTable.insertRow();
        newRow.insertCell(0).innerText = '';
        newRow.insertCell(1).innerText = guest.name;
        newRow.insertCell(2).innerText = '';
        newRow.insertCell(3).innerText = '';
        newRow.insertCell(4).innerText = '';
        newRow.insertCell(5).innerText = '';
        newRow.insertCell(6).innerText = '';
        newRow.insertCell(7).innerText = 'Invitado';
    });
}

function showCheckInOut() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('checkInOut').style.display = 'block';
    updateCurrentTime();
}

function updateCurrentTime() {
    const currentTime = new Date().toLocaleString();
    document.getElementById('currentTime').innerText = `Hora actual: ${currentTime}`;
    setTimeout(updateCurrentTime, 1000);
}
