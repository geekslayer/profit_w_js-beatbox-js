class Beat {
    constructor(audioSrc){
        this.audio = new Audio(audioSrc);
    }

    play = () => {
        this.audio.currentTime = 0;
        this.audio.play();
    }
}

class Button {
    constructor(color, keyCode){
        this.element = '#'+keyCode;
        this.keyCode = keyCode;
        this.color = color;
        this.createTransitionEndListener();
        this.setButtonColorInHTML();
    }

    setButtonColorInHTML = () => {
        $(this.element).css('borderColor', this.color);
    }

    createTransitionEndListener = () => {
        $(this.element).on("transitionend", ()=>{
            this.deselect();
        })
    }

    select = () => {
        $(this.element).css('backgroundColor',this.color);
        $(this.element).css('boxShadow',`0px 0px 17px 0px ${this.color}`);
    }

    deselect = () => {
        $(this.element).css('backgroundColor','transparent');
        $(this.element).css('boxShadow', 'none');
    }
}