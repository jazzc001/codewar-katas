const validate = (password) => {
    const symbols = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])\w{6,}$/.test(password)
};

console.log(validate('djI38D55'));

module.exports = {validate}