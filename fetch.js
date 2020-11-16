const url = 'https://thesession.org/tunes/search?q=humours&format=json'

const createElem = (tag, cls, text) => {
    let thisElem = document.createElement(tag);
    thisElem.className = cls;
    thisElem.innerText = text;
    return thisElem;
}

const fetchData = async () => {
    try {
        const response = await fetch(url);
        //console.log(result);
        const result = await response.json();
        //console.log(result);
        const dataRoot = document.querySelector('#data');
        for (tune of result.tunes) {
            let tuneElem = document.createElement('div');
            tuneElem.className = 'tune';   
            tuneElem.appendChild(createElem('span', 'tune-id', tune.id));
            tuneElem.appendChild(createElem('span', 'tune-name', tune.name));
            dataRoot.appendChild(tuneElem);
        }
                
    }
    catch (ex) {
        console.log(ex.message);
    }
}


window.onload = () => {
    console.log('window.onload')
    try {
        fetchData();
    }
    catch (ex) {
        console.log(ex.message);
    }
}