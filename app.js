import { cleanPhoneNumbers, extractEmails } from "./utils.js";
import chalk from "chalk";

const messyText = `
  Contact us at info@example.com or support@domain.org.
  Call (425) 555-1212 or 1-800-GET-HELP.
`;

console.log(chalk.hex("#186d62").underline.bold("Extracted Emails:\n"));
console.log(chalk.rgb(190, 45, 67)(extractEmails(messyText)));

console.log(chalk.hex("#186d62").underline.bold("\nCleaned Phone Numbers:"));
console.log(chalk.rgb(190, 45, 67)(cleanPhoneNumbers(messyText)));
