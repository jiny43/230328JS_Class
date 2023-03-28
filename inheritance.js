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
class Triangle extends Shape{
  draw(){
    super.draw(); //shape에 정의된 함수가 호출되지 않아서 같이 쓰려면 사용
    console.log('☹︎');
  }

  getArea(){
    return(this.width * this.height)/2;
  }
}

const rectangle = new Rectangle(20,20,'blue');

rectangle.draw(); //?drawing blue color ! 
console.log(rectangle.getArea()); //?400

const triangle = new Triangle(20,20,'red');

triangle.draw();//? drawing red color!
console.log(triangle.getArea());  //?200
