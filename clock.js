class Clock { 
    #container
  
    constructor(id) { 
        this.#container = document.getElementById(id);
        this.#container.classList.add('clock')
    }

    #getCurrentHour() {
        this.#container.innerHTML = new Date().toLocaleTimeString()
    }

    start() {
        setInterval(() => {
            this.#getCurrentHour()
        }, 1000)
    }
}

new Clock('clockContainer').start();