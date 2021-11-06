export const required = value => {
    if(value) return  undefined;
    return "Field is required"; 
};

export const validateText = value => {
    if(value && /^[A-Za-z0-9(),-:/!]/i.test(value)) return  undefined;
    return "Please enter the following character set: 'A-Z', 'a-z', '0-9' and '(),-:/!'"; 
};

export const validateNumber = value => {
    if(value && /^[0-9]/i.test(value)) return  undefined;
    return "Please enter only a number"; 
};