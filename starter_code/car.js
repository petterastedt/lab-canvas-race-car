class Car {
    constructor() {
        this.position = 157
        this.objPosition = Math.floor(Math.random() * 140) + 40 
    }
    moveLeft () {
        if (this.position < 30) {
            return false
        } else {
            this.position -= 30
            startGame()
    }
    }
    moveRight () {
        if (this.position > 330) {
            return false 
        } else {
            this.position += 30
            startGame()
        }
    }
}