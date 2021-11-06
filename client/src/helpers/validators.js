export const required = value => {
    if(value) return  undefined;
    return "Field is required"; 
};

export const validateText = value => {
    if(value && /^[A-Za-z0-9(),-:/!]/i.test(value)) return  undefined;
    return "'A-Z', 'a-z', '0-9' and '(),-:/!'"; 
};