const header = document.querySelector ('header');
const sections = document.querySelectorAll ('section');
const current = document.querySelector ('section.current');
const next = current.nextElementSibling;
const prevSectionH2 = current.previousElementSibling.querySelector (`h2`);
const highlight = document.querySelector ('h2.highlight');
const div = highlight.parentElement.parentElement;
const sectionsWithH2 = Array.from(document.querySelectorAll('h2')).map(function(h2){return h2.parentElement});

console.log (header);
console.log (sections);
console.log (current);
console.log (next);
console.log (prevSectionH2);
console.log (highlight);
console.log (div);
console.log (sectionsWithH2);