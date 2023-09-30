export const getTodaysDate = () => {
    const today = new Date();
    const options:any = { year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('en-US', options);
} 
