export const validate = ( data ) => {
    const errors = {};
    if ( ! data.name.trim () ) {
        errors.name = "Username Required"
    } else {
        delete errors.name
    }
    if ( ! data.email ) {
        errors.email = "Email required";
    } else if ( ! /\S+@\S+\.\S+/.test ( data.email ) ) {
        errors.email = "Email address is incorrect"
    } else {
        delete errors.email;
    }
    if ( ! data.password ) {
        errors.password = "Password is required"
    } else if ( data.password.length < 6 ) {
        errors.password = "Password is less than 6"
    } else {
        delete errors.password
    }
    return errors;
}