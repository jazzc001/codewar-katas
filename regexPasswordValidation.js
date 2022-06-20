const validate = (password) => {
    const symbols = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/
    return password.length>=6 && 
    /[a-z]/.test(password) && 
    /[A-Z]/.test(password) && 
    /[0-9]/.test(password) && 
    !symbols.test(password)
};

console.log(validate('djI38D55'));

module.exports = {validate}