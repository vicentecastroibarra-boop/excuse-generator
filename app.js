let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function generarExcusas() {
  // Seleccionar un elemento aleatorio de cada array
  let sujetoAleatorio = who[Math.floor(Math.random() * who.length)];
  let accionAleatoria = action[Math.floor(Math.random() * action.length)];
  let objetoAleatorio = what[Math.floor(Math.random() * what.length)];
  let momentoAleatorio = when[Math.floor(Math.random() * when.length)];

  // Unir las partes en una frase
  return `${sujetoAleatorio} ${accionAleatoria} ${objetoAleatorio} ${momentoAleatorio}.`;
}
console.log(generarExcusas());