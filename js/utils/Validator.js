function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

function isNameValid(name) {
    return name.length < 255;
}

function isEmailValid(email) {
    console.log(email);
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function isAgeValid(birthday) {
    var age = calculateAge(birthday);
    console.log(age);
    return age >= 18;
}

/**
 * Code taken from: https://www.devmedia.com.br/validar-cpf-com-javascript/23916
 * @param cpf the cpf to be checked
 * @returns {boolean} wheter the cpf is valid or not
 */

function isCpfValid(cpf) {
    var soma;
    var resto;
    soma = 0;
    if (cpf == "00000000000") return false;

    for (i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;
    return true;
}

function calculateAge(birthday) { // birthday is a date
    var birthDayDate = new Date(birthday);
    var ageDifMs = Date.now() - birthDayDate.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function isBirthdayValid(date) {
    if (date < 1900) {
        return false;
    }

    return isAgeValid(date);
}

function isCadjusValid(cadjus) {
    if (cadjus >= 1 && cadjus <= 5000) return true;
}

function isPasswordMatching(pass1, pass2) {
    return pass1 === pass2;
}