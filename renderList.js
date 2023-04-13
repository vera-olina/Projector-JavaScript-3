const listElement = document.querySelector('#output-list');

export const renderList = (outputList) => {
    listElement.innerHTML='';

    outputList.forEach((output) => {
        const outputElement = document.createElement('li');
        outputElement.innerHTML = `<p>${output}<p>`;
        listElement.append(outputElement);
    });
};