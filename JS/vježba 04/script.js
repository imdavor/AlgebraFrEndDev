/*
Koristeći metode rada nad stringovima iz zadanog stringa:
  1. Spremite duljinu stringa u varijablu.
  2. Izdvojite riječ 'sit' u zasebnu varijablu.
  3. Zamijenite riječ 'amet' sa riječi 'elit'.
  4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.
  5. Konvertirajte sve riječi u orginalnom stringu u velika slova
  6. Maknite počenu prazninu u stringu
  7. Nađite slovo na poziciji 12
*/

var text = " Lorem ipsum dolor sit amet";
var textLenght = text.length;
var sit = text.substring(19, 22);
var replacedtext = text.replace("amet", "elit");

console.log(textLenght);
console.log(sit);
console.log(text.replace("amet", "elit"));
console.log(replacedtext + ", consectetur adipiscing elit");
console.log(text.toUpperCase());
console.log(text.trim());
console.log(text.charAt(12));
