function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('Finished function');
}

function clickHandler() {
    console.log('Click event!');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');