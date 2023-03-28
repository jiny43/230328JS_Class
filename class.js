class user {
  constructor(name,age,number){
    this.name = name;
    this.age = age;
    this.number = number;
  }


get age(){
  return this._age;
  //age와 중복되면 안되므로 _age라고 사용
  //이제 age 의 값을 가져오기전에 get->set 거쳐서 올라간다.
}
set age(value){
  // if (value<0){
  //   throw Error('age can not be negative');
  // } 나이는 -값이 될 수 없으므로 value 값을 setter로 제한
  this._age = value <0 ? 0: value; //좀 더 젠틀하게 사용하기 ->value<0 이면 0 아니면 value
  }
}
// public , private
const user1 =new user ('jieun','-1','20');
console.log(user1);

class Experiment{
  publicfield = 2;
  //외부에서 접근 가능
  #privateField = 0;
  //class 내부에서만 접근가능, 값 변경
}

const Experiment = new Experiment();
console.log(experiment.publicfield);
console.log(experiment.privateField);
