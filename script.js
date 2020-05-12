let beats = {};

$(document).ready(() => {
    let allButtons = $('.button').toArray();
    
    allButtons.forEach(element => {
        beats[element.id] = {
            beat: new Beat($(element).attr('data-audio-file')),
            button: new Button($(element).attr('data-color'), element.id)
        };
    });
    
    $(document).on("keydown", this.triggerBeat);
});

triggerBeat = (event) => {
    let code = event.keyCode;
    if(code in beats){
        beats[code].button.select();
        beats[code].beat.play();
    }
}
