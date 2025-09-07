const students = [
    {
        name: "Ram Kumar",
        xender: "male",
        fatherName: "Raj kumar",
        id: 100,
        DOB: 20 + "-Aug-" + 2008,
        BloodGroup: "B+",
        Phone: 91 + "+ " + 7861971212,
        Address: {
            State: "Gujarat",
            City: "Surat",
            Village: "Kadodara",
            Pincode: 394327,
        },
        issueDate: 6 + "-" + 8 + "-" + 2020,
        validDate: 6 + "-" + 8 + "-" + 2021,
    }, {
        name: "Aman Singh",
        xender: "male",
        fatherName: "Vinod Singh",
        id: 101,
        DOB: 10 + "-March-" + 2006,
        BloodGroup: "B",
        Phone: 91 + "+ " + 7461971213,
        Address: {
            State: "Gujarat",
            City: "Surat",
            Village: "Vareli",
            Pincode: 394329,
        },
        issueDate: 6 + "-" + 8 + "-" + 2020,
        validDate: 6 + "-" + 8 + "-" + 2021,
    }, {
        name: "Vishal Choudhary",
        xender: "male",
        fatherName: "Ramesh Choudhary",
        id: 102,
        DOB: 20 + "-April-" + 2005,
        BloodGroup: "B",
        Phone: 91 + "+ " + 9861971513,
        Address: {
            State: "Gujarat",
            City: "Surat",
            Village: "Jolva",
            Pincode: 394324,
        },
        issueDate: 6 + "-" + 8 + "-" + 2020,
        validDate: 6 + "-" + 8 + "-" + 2021,
    }, {
        name: "Santanu Das",
        xender: "male",
        fatherName: "Vikas Das",
        id: 102,
        DOB: 22 + "-May-" + 2004,
        BloodGroup: "A",
        Phone: 91 + "+ " + 7435965662,
        Address: {
            State: "Gujarat",
            City: "Surat",
            Village: "Amroli",
            Pincode: 354020,
        },
        issueDate: 6 + "-" + 8 + "-" + 2020,
        validDate: 6 + "-" + 8 + "-" + 2021,
    }
];

students.forEach((students) => {
    document.getElementById("students").innerHTML += `
                <div class="card">
                <div class="banner">
                    <div class="avatar"></div>
                </div>
                <h3 class="heading">Student ID Card</h3>
                <p id="student1-name">Name : ${students.name}</p>
                <p id="student1-xender">Xender : ${students.xender}</p>
                <p id="student1-father">Father Name :${students.fatherName}</p>
                <p id="student1-id">Student ID : ${students.id}</p>
                <p id="student1-dob">DOB : ${students.DOB}</p>
                <p id="student1-blood">Blood Group : ${students.BloodGroup}</p>
                <p id="student1-phone">Phone No : ${students.Phone}</p>
                <p id="student1-ad-state">State : ${students.Address.State}</p>
                <p id="student1-ad-city">City : ${students.Address.City}</p>
                <p id="student1-ad-village">Village : ${students.Address.Village}</p>
                <p id="student1-ad-pin">Pincode : ${students.Address.Pincode}</p>
                <p id="student1-issue">Issue Date : ${students.issueDate}</p>
                <p id="student1-valid">Valid Date : ${students.validDate}</p>
            </div>
    `
})