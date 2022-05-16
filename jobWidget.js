export default class JobWidget {
    constructor(id, job, htmlElement, posX, posY) {
        this.id = id;
        this.job = job;
        this.htmlElement = htmlElement;
        this.pos = {x:0, y:0};
        this.setPos(posX, posY);
    }

    // getX() {
    //     var leftNumbers = this.htmlElement.style.left.replace('px', '');
    //     return parseInt(leftNumbers, 10);
    // }

    // getY() {
    //     var topNumbers = this.htmlElement.style.top.replace('px', '');
    //     return parseInt(topNumbers, 10);
    // }

    getX() {return this.pos.x;}
    getY() {return this.pos.y;}

    getPos() {
        let x = this.getX(), y = this.getY();
        return {x, y};
    }

    // setX(newX) {this.htmlElement.style.left = `${newX}px`;}
    // setY(newY) {this.htmlElement.style.top = `${newY}px`;}

    setX(newX) {this.pos.x = newX;}
    setY(newY) {this.pos.y = newY;}

    updateSize() {
        let absY = Math.abs(this.getY());
        let size = 95.8333 - (0.375 * absY);
        this.htmlElement.style.width = `${size}%`;
        this.htmlElement.style.height = `${size}%`;
    }

    setPos(newX, newY) {
        this.setX(newX);
        this.setY(newY);
        this.updateSize();
        let translated3dValue = `translate3d(${newX}px,${newY}px,0)`;
        this.htmlElement.style.transform = translated3dValue;
    }
}