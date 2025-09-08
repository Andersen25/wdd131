// Get current year
const currentYear = new Date().getFullYear();

// Output copyright year in the first footer paragraph
document.querySelector("footer p:first-of-type").textContent = `© ${currentYear} My Website`;

// Output last modified date in the second footer paragraph
document.querySelector("footer p:nth-of-type(2)").textContent = `Last Modified: ${document.lastModified}`;
