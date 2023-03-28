class Shape {
  constructor(width, height, color){
    this.width = width;
    this.height = height;
    this.color  = color;

  }
//함수1
draw() {
  console.log(`drawing ${this.color} color!`);
}
//함수2
//너비와 높이의 곱을 반환해 너비를 계산
getArea(){
  return this.width * this.height;
}
}
//extends Rectangle 의 클래스를 만들고 싶다면 Shape 를 연장해서 사용하는 extends
class Rectangle extends Shape {}
class Triangle extends Shape{}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw(); //?drawing blue color ! 