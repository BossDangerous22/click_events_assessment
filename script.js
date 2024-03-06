// References to the buttons
const fooButton = document.getElementById('foo');
const barButton = document.getElementById('bar');
const foobarButton = document.getElementById('foobar');

// Click event listeners
fooButton.addEventListener('click', () => {
    const h3 = document.createElement('h3');
    h3.textContent = 'Foo';
    document.querySelector('main').appendChild(h3);
});

barButton.addEventListener('click', () => {
    const h3 = document.createElement('h3');
    h3.textContent = 'Bar';
    document.querySelector('main').appendChild(h3);
});

foobarButton.addEventListener('click', () => {
    const h2 = document.createElement('h2');
    h2.textContent = 'FooBar';
    document.querySelector('main').appendChild(h2);
});
