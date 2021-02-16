export class storyPage {
    constructor(id, text) {
        this.id = id;
        this.text = text;
        this.options = [];
        }
    set addOption (option) {
        this.options.push(option);
    }
}

export class Option {
    constructor(text, nextPath, setState, requiredState){
        this.text = text; //Just text
        this.nextPath = nextPath; //Just a number
        this.setState = setState; // Object, no class defined
        this.requiredState = requiredState; // the product of required state must be true to be displayed
    }
}