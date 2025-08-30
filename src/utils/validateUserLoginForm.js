export const validateUserLoginForm = ({username, password}) => {
    const errors = {};

    if(!username){
        errors.username= 'Required';        
    }else if (username.length < 6) {
        errors.username = 'Must be at least 6 characters.';
    }else if (username.length > 15) {
        errors.username = 'Must be 15 characters or less';
    }

    const reg = /^.{8,}$/;
    if(!password){
        errors.password= 'Required';        
    }else if (!reg.test(password)) {
        errors.password = 'The Password should be at least 8 characters long.';
    }

    return errors;
};
