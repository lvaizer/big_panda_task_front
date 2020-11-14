/**
 * Regex validation for email
 * @param {string} email
 * @return boolean
 * **/
export const isEmail = email => /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);

/**
 * Format string date
 * @param {string} dateString
 * @return {string} 'dd/mm/yyyy, hh:mm'
 * **/
export const formatDate = dateString => new Intl.DateTimeFormat("en-IL", {
    hour: "numeric",
    minute: "numeric",
    year: "numeric",
    month: "numeric",
    day: "numeric"
}).format(new Date(dateString));
