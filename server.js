const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

/* ================= PATIENTS ================= */

// GET
app.get("/patients", (req, res) => {
    db.query("SELECT * FROM Patient", (err, result) => {
        if (err) res.send(err);
        else res.json(result);
    });
});

// POST
app.post("/patients", (req, res) => {
    const data = req.body;
    db.query("INSERT INTO Patient SET ?", data, (err, result) => {
        if (err) res.send(err);
        else res.send("Patient added");
    });
});

// UPDATE
app.put("/patients/:id", (req, res) => {
    db.query(
        "UPDATE Patient SET ? WHERE patientid=?",
        [req.body, req.params.id],
        (err) => {
            if (err) res.send(err);
            else res.send("Patient updated");
        }
    );
});

// DELETE
app.delete("/patients/:id", (req, res) => {
    db.query(
        "DELETE FROM Patient WHERE patientid=?",
        [req.params.id],
        (err) => {
            if (err) res.send(err);
            else res.send("Patient deleted");
        }
    );
});
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

/* ================= DOCTORS ================= */

app.get("/doctors", (req, res) => {
    db.query("SELECT * FROM Doctor", (err, result) => {
        if (err) res.send(err);
        else res.json(result);
    });
});

app.post("/doctors", (req, res) => {
    db.query("INSERT INTO Doctor SET ?", req.body, (err) => {
        if (err) res.send(err);
        else res.send("Doctor added");
    });
});

/* ================= APPOINTMENTS ================= */

app.get("/appointments", (req, res) => {
    db.query("SELECT * FROM Appointment", (err, result) => {
        if (err) res.send(err);
        else res.json(result);
    });
});
app.delete("/patients/:id", (req, res) => {
    db.query(
        "DELETE FROM Patient WHERE patientid=?",
        [req.params.id],
        (err) => {
            if (err) res.send(err);
            else res.send("Deleted");
        }
    );
});

app.post("/appointments", (req, res) => {
    db.query("INSERT INTO Appointment SET ?", req.body, (err) => {
        if (err) res.send(err);
        else res.send("Appointment created");
    });
});

/* ================= BILLS ================= */

app.get("/bills", (req, res) => {
    db.query("SELECT * FROM Bill", (err, result) => {
        if (err) res.send(err);
        else res.json(result);
    });
});

app.post("/bills", (req, res) => {
    db.query("INSERT INTO Bill SET ?", req.body, (err) => {
        if (err) res.send(err);
        else res.send("Bill created");
    });
});

/* ================= START SERVER ================= */

app.listen(5000, () => {
    console.log("Server running on port 5000");
});