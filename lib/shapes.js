const svgBase = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

__SHAPE__

<text x="150" y="100" font-size="60" text-anchor="middle" fill="white">__TEXT__</text>

</svg>
`

module.exports.Triangle = class {
    constructor(color, text) {
        this.color = color;
        this.text = text;
    }

    render() {
        const shape = `<polygon points="0 0, 150 200, 300 0" fill="__COLOR__" />`;
        return svgBase.replace(/__SHAPE__/g, shape)
            .replace(/__COLOR__/g, this.color)
            .replace(/__TEXT__/g, this.text);
    }
}

module.exports.Square = class {
    constructor(color, text) {
        this.color = color;
        this.text = text;
    }

    render() {
        const shape = `<rect width="200" height="200" stroke="__COLOR__" fill="__COLOR__" />`
        return svgBase.replace(/__SHAPE__/g, shape)
            .replace(/__COLOR__/g, this.color)
            .replace(/__TEXT__/g, this.text);
    }
}

module.exports.Circle = class {
    constructor(color, text) {
        this.color = color;
        this.text = text;
    }

    render() {
        const shape = `<circle cx="150" cy="100" r="80" fill="__COLOR__"/>`
        return svgBase.replace(/__SHAPE__/g, shape)
            .replace(/__COLOR__/g, this.color)
            .replace(/__TEXT__/g, this.text);
    }
}
