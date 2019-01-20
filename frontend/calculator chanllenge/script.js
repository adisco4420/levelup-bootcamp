class Calculator {
    constructor(params1, params2) {
        this.prop1 = params1;
        this.prop2 = params2;
    }
    areaOfParralogram() {
        const base = this.prop1;
        const height = this.prop2
        let area = base * height
        area = area.toFixed(2)
        return area
    }
    volumeOdCylinder() {
        const radius = this.prop1;
        const height = this.prop2;
        const pie = 3.142;
        let volume = pie * radius**2 * height;
        volume = volume.toFixed(3)
        return volume
    }
    areaOfRectangle() {
        const width = this.prop1;
        const length = this.prop2;
        const area = width * length
        return area
    }
}
const base = 3
const height = 5;
const radius = 6;
const length = 3
const width = 5;

const newCal = new Calculator(base, height)
console.log(newCal.areaOfParralogram());
const newCal2 = new Calculator(height, radius)
console.log(newCal2.volumeOdCylinder());
const newCal4 = new Calculator(length, width)
console.log(newCal4.areaOfRectangle());


