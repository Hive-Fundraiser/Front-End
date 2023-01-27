export const validate = ( data,type ) => {
    const errors = {};
    if ( type === "login" ) {
        if ( ! data.name.trim () ) {
            errors.name = "نام کاربری ضروری است"
        } else {
            delete errors.name
        }

        if ( ! data.password ) {
            errors.password = "رمز عبور ضروری است"
        } else if ( data.password.length < 6 ) {
            errors.password = "رمز عبوری کمتر از 6 حرف است"
        } else {
            delete errors.password
        }
    }
    if ( type === "signup" ){
        if ( ! data.email ) {
            errors.email = "ایمیل ضروری است";
        } else if ( ! /\S+@\S+\.\S+/.test ( data.email ) ) {
            errors.email = "آدرس ایمیل درست نیست"
        } else {
            delete errors.email;
        }
        if ( ! data.name.trim () ) {
            errors.name = "نام کاربری ضروری است"
        } else {
            delete errors.name
        }

        if ( ! data.password ) {
            errors.password = "رمز عبور ضروری است"
        } else if ( data.password.length < 6 ) {
            errors.password = "رمز عبوری کمتر از 6 حرف است"
        } else {
            delete errors.password
        }
    }

    if ( type === "ResetPass" ){
        if ( ! data.email ) {
            errors.email = "ایمیل ضروری است";
        } else if ( ! /\S+@\S+\.\S+/.test ( data.email ) ) {
            errors.email = "آدرس ایمیل درست نیست"
        } else {
            delete errors.email;
        }
    }
    return errors;
}