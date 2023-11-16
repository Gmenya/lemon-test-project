export const validateEmail = (email:string) => {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!re.test(String(email).toLowerCase())) {
        return 'Invalid email address';
    }
    return '';
};

export const validatePassword = (password: string) => {
    if (!password || password.length < 6) {
        return 'Password must be at least 6 characters';
    }
    return '';
};
