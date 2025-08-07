/**
 * Extracts all email addresses from the given text using regex.
 * @param {string} text
 * @returns {string[]} Array of email addresses found
 */
export function extractEmails(text) {
  const emailRegex = /[\w.-]+@[\w.-]+\.\w+/g;
  return text.match(emailRegex) || [];
}

/**
 * Cleans phone numbers in the text by replacing them with [PHONE].
 * @param {string} text
 * @returns {string} Text with phone numbers replaced
 */
export function cleanPhoneNumbers(text) {
  const phoneRegex =
    /(\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4})|(\d{1}-\d{3}-[A-Z]{3}-[A-Z]{4})/g;
  return text.replace(phoneRegex, "[PHONE]");
}
