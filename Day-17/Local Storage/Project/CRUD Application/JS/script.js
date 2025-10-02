let regForm = document.querySelector(".register-form");
let allInput = regForm.querySelectorAll("INPUT");
let closeBtn = document.querySelector(".btn-close");
let regList = document.querySelector(".reg-list");
let allRegData = [];
let url = "";

if (localStorage.getItem("allRegData") != null) {
    allRegData = JSON.parse(localStorage.getItem("allRegData"))
}

// Adding Data
regForm.onsubmit = (e) => {
    e.preventDefault();
    let checkEmail = allRegData.find((data) => data.email == allInput[1].value);
    if (checkEmail == "") {
        allRegData.push({
            name: allInput[0].value,
            email: allInput[1].value,
            mobile: allInput[2].value,
            dob: allInput[3].value,
            profile: url == "" ? "profile.jpg" : url
        });
        localStorage.setItem("allRegData", JSON.stringify(allRegData));
        swal("Data Inserted", "Successfully!", "success");
        closeBtn.click();
        regForm.reset("");
        getRegData();
    } else {
        swal("Email already exists", "failed", "warning");
    }
}

const getRegData = () => {
    regList.innerHTML = "";
    allRegData.forEach((data, index) => {
        regList.innerHTML += `
    <tr>
        <td>${index + 1}</td>
        <td>
        <img src="${data.profile}" width="30" alt="">
        </td>
        <td>${data.name}</td>
        <td>${data.email}</td>
        <td>${data.mobile}</td>
        <td>${data.dob}</td>
        <td>
        <button class="btn p-1 px-2 btn-primary">
        <i class="fa fa-edit"></i>
        </button>
        <button class="btn p-1 px-2 btn-danger">
        <i class="fa fa-trash"></i>
        </button>
        </td>
    </tr>
        `
    });
}
getRegData();

// Reading Profile
allInput[5].onchange = () => {
    let fReader = new FileReader();
    fReader.readAsDataURL(allInput[5].files[0]);
    fReader.onload = (e) => {
        url = e.target.result;
    }
}