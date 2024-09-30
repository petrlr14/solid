class Rectangle{
  constructor(public width: number, public height: number) { }

  area(): number { 
    return this.width * this.height;
  }

}

export default Rectangle;

export class AreaCalculator {
  static calculateArea(rectangle: Rectangle): number {
    return rectangle.area();
  }
}