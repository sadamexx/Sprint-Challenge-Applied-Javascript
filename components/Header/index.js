// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('header');

    const mainDate = document.createElement('span');
    mainDate.classList.add('date');
    mainDate.textContent = 'March 28, 2019';
    mainDiv.appendChild(mainDate);


    const mainh1 = document.createElement('h1');
    mainDate.textContent = 'Lambda Times';
    mainDiv.appendChild(mainh1);

    const mainTemp = document.createElement('span');
    mainTemp.textContent = '98°'
    mainTemp.classList.add('temp');
    mainDiv.appendChild(mainTemp);

return mainDiv;
};

const headerOne = Header();
const parentHeader = document.querySelector('.header-container');
parentHeader.appendChild(headerOne);

