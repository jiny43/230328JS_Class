class usrs {
  constructor(name,age,number){
    this.name = name;
    this.age = age;
    this.number = number;
  }


get age(){
  return this._age
  //age와 중복되면 안되므로 _age라고 사용
}
set age(value){
  // if (value<0){
  //   throw Error('age can not be negative');
  // } 나이는 -값이 될 수 없으므로 value 값을 setter로 제한
  this._age = value<0 ? 0: value; //좀 더 젠틀하게 사용하기 ->value<0 이면 0 아니면 value
}
}

