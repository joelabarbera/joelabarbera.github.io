

  function regist() {
    let fname = prompt("Enter your first name:");
    let lname = prompt("Enter your last name:");
    let dob = prompt("Enter your date of birth (YYYY-MM-DD):");
    let email = prompt("Enter your email:");
    let pass = prompt("Enter your password (must include ! or ?):");

    let myPerson = Object.assign({},Register)

    function isValidInput(fname, lname, dob, email, pass) {
        if (!fname || !lname || !dob || !email || !pass) {
            return {
                success: false,
                message: " Registration Failed: All fields must be entered."
            };
        }


        if (!pass.includes("!")) {
            return {
              success: false,
              message: "❌ Password must contain at least one '!'."
            };
        }


        return { success: true };
    }


    myPerson.setFName(fname)
    myPerson.setFName(fname);
    myPerson.setLName(lname);
    myPerson.setDOB(dob);
    myPerson.setEmail(email);
    myPerson.setPassword(pass);

    document.getElementById("output").innerText = myPerson.display()
}

const Register = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    dob: "",

    setFName: function (x) {
        this.fName = x;
    },

    setLName: function (x) {
        this.lName = x;
    },

    setEmail: function (x) {
        this.email = x;
    },

    setPassword: function (x) {
        this.password = "*".repeat(x.length);
    },

    setDOB: function (x) {
        this.dob = x;
    },

    display: function () {
        return`
            Registration Successful!
            First Name: ${this.fName}
            Last Name: ${this.lName}
            Email: ${this.email}
            Password: ${this.password}
            Date of Birth: ${this.dob}
        `;
    }
};