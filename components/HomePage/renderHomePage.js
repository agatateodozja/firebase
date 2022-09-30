// W funkcji poniżej:
// 1. Przy uźyciu querySelector wybieracie sekcje o klasie "content" i od razu czyścicie przy pomocy innerHTML.
// 2. Stwórz element <h2> i nadaj mu textContent 'Welcome!'
// 3. Stwórz element <p> i nadaj mu textContent "This is a simple web page written in vanilla JavaScript, used as a practice project in frontend courses at Software Development Academy. Block subject: Firebase."
// 4. Podpinacie h2 i p do sekcji content


export default function () {

  const section = document.querySelector('.content');
  section.innerHTML = '';
  const h2 = document.createElement('h2');
  h2.textContent = 'Welcome!';
  const paragraph = document.createElement('p');
  paragraph.setAttribute ('id', 'p-home-page')
  paragraph.textContent = 'This is a simple web page written in vanilla JavaScript, used as a practice project in frontend courses at Software Development Academy. Block subject: Firebase.'
  section.appendChild(h2);
  section.appendChild(paragraph);
}

//nazywam funkcje przy imporcie
//index.js
//import renderHomePage from './components/HomePage/renderHomePage.js
