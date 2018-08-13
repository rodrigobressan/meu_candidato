/**
 * This function is used to set a received field as invalid
 * @param field to field to be changed
 */
function makeFieldInvalid(field) {
    $(field).attr("class", "form-control is-invalid");
}

/**
 * This function is used to set a received field as valid
 * @param field to field to be changed
 */
function makeFieldValid(field) {
    $(field).attr("class", "form-control is-valid");
}
