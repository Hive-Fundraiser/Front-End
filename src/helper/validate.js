export const validate = ( data ) => {
    const errors = {};
    if ( ! data.name.trim () ) {
        errors.name = "نام کاربری ضروری است"
    } else {
        delete errors.name
    }
    if ( ! data.email ) {
        errors.email = "ایمیل ضروری است";
    } else if ( ! /\S+@\S+\.\S+/.test ( data.email ) ) {
        errors.email = "آدرس ایمیل درست نیست"
    } else {
        delete errors.email;
    }
    if ( ! data.password ) {
        errors.password = "رمز عبور ضروری است"
    } else if ( data.password.length < 2 ) {
        errors.password = "رمز عبوری کمتر از 6 حرف است"
    } else {
        delete errors.password
    }
    return errors;
}