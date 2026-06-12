const API = "http://localhost:5000";

/* ================= LOAD DATA ================= */

async function loadPatients() {
    loadData("patients");
}

async function loadDoctors() {
    loadData("doctors");
}

async function loadAppointments() {
    loadData("appointments");
}

async function loadBills() {
    loadData("bills");
}

/* ================= GENERIC LOAD FUNCTION ================= */

async function loadData(type) {
    const res = await fetch(`${API}/${type}`);
    const data = await res.json();

    const list = document.getElementById("data");
    list.innerHTML = "";

    data.forEach(item => {
        const li = document.createElement("li");

        let id = item.patientid || item.doctorid || item.appointmentid || item.billid;

        li.innerHTML = `
          ${Object.values(item).join(" | ")}
<button onclick="editPatient(${item.patientid})">Edit</button>
<button onclick="deleteRecord('${type}', ${id})">Delete</button>
        `;

        list.appendChild(li);
    });
}

/* ================= DELETE ================= */

async function deleteRecord(type, id) {
    await fetch(`${API}/${type}/${id}`, {
        method: "DELETE"
    });

    alert("Deleted Successfully");
    loadData(type);
}

/* ================= ADD PATIENT ================= */

async function addPatient() {
    const data = {
        name: document.getElementById("pname").value,
        age: document.getElementById("page").value,
        gender: document.getElementById("pgender").value,
        phone: document.getElementById("pphone").value,
        address: document.getElementById("paddress").value
    };

    await fetch(`${API}/patients`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    alert("Patient Added Successfully");
    loadPatients();
}
async function editPatient(id) {

    const name = prompt("Enter new name:");
    const age = prompt("Enter new age:");
    const gender = prompt("Enter new gender:");
    const phone = prompt("Enter new phone:");
    const address = prompt("Enter new address:");

    const data = {
        name,
        age,
        gender,
        phone,
        address
    };

    await fetch(`http://localhost:5000/patients/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    alert("Patient Updated Successfully");
    loadPatients();
}