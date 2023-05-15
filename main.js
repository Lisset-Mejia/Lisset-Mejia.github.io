let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 80,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Estudiante en Ingeniería de Software. Desarrolladora de Frontend y Backend Junior.')
  .pauseFor(100)
  .deleteChars(10)
  .start();
