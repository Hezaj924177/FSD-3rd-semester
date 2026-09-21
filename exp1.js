import EventEmitter from 'events';
class Button extends EventEmitter {
    click() {
        this.emit('click');
    }

    mouseover() {
        this.emit('mouseover');
    }
}
const button = new Button();
button.on('click', () => {
    console.log('Button clicked');
});

button.on('mouseover', () => {
    console.log('Mouse over button');
});

button.click();
button.mouseover();