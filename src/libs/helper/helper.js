export const formatDateToDayMonthYear = (date) => {
    // Ensure 'date' is a valid Date object
    if (!(date instanceof Date)) {
        throw new Error('Invalid date');
    }

    // Define arrays for month and day names
    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Extract day, month, and year from the date object
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    // Create the formatted string
    const formattedDate = `${day} ${month} ${year}`;

    return formattedDate;
}


