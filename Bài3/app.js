// let ngocTrinh = {
//     name:"Ngoc Trinh",
//     age:32,
//     address:"HCM",
//     shopping: function(){

//     },
//     play: function(){

//     }
// };
// class Person {
//     name;
//     age;
//     address;
//     favorites;

//     constructor(_name,_age,_address,_favorites) {
//         this.name = _name;
//         this.age = _age;
//         this.address = _address;
//         this.favorites = _favorites;
        
//     }

//     speak() {
//         console.log(this.name + ", " + this.age+ " tuổi, nói gì đấy");
//     }
//     study() {
//         console.log("học gì đấy");
//     }
// }

// // let person_1 = new Person("Kahn",20,"HP",["game"]);
// // // person_1.name = "John";
// // // person_1.age = 22;
// // // person_1.address = "HCM";
// // // person_1.favorites = ["music","game"];

// // let person_2 = new Person("John", 32, "HN", ["game"]);


// // // console.log(person_1);
// // console.log(person_1,person_2);

// // person_2.speak();
// // person_1.speak();

// // hãy cài đặt claas NYC với các thuộc tính và phương thức sau
// /*
//    name;
//    character;
//    appearances;
//    age;
//    address;

//    boyfriends: [];
//    askForGift() -> in ra "name " + đòi quà
//    introduce() -> họ tên "name", tuổi "age", ngoại hình "appearances"
// */ 

// class NYC extends Person {
//     character;
//     appearances;
//     boyfriends;

//     constructor(_name,_character,_appearances,_age,_address,_boyfriend) {
//         super(_name,_age,_address);
//          this.character= _character;
//          this.appearances= _appearances;
//          this.boyfriend = _boyfriend;

//     }
//     askForGift() {
//           console.log(this.name + " đòi quà");

//     }
//     introduce() {
//          console.log(`
//              họ tên ${this.name},
//              tuổi ${this.age},
//              ngoại hình ${this.appearances},
//              `);
//     }
// };

// let nyc1 = new NYC("Messi", "thân thiện", "thấp bé nhẹ cân", 30, "Barcelona",["Ronaldo"]);
// let nyc2 = new NYC("Ronaldo", "gắt vl", "to cao đen hôi", 35, "Italia",["Messi"]);
// let nyc3 = new NYC("Ozil", "ngáo", "mắt trố", 29, "Turkey",["Ronaldo", "Messi"]);

// // console.log(nyc1);
// // nyc1.askForGift();
// // nyc2.askForGift();
// // nyc3.askForGift();
// // nyc1.introduce();
// // nyc2.introduce();
// // nyc3.introduce();


// class Animal {
//       name;
//       constructor(_name) {
//           this.name = _name;
//       }
// };
// class Mamal extends Animal {
//     leg;
//     constructor(_name,_leg) {
//         super(_name);
//         this.leg = _leg;
//     }
// };
// class Dog extends Mamal{
//     fur;
//     constructor(_name,_fur) {
//         super(_name, 4);
//         this.fur = _fur;
//     }
// };
// class Repitle extends Animal {
//     weight;
//     constructor(_name,_weight) {
//         super(_name);
//         this.weight = _weight;
//     }
// }
// class Snake extends Repitle{
//     poison;
//     constructor(_name,_weight,_poison) {
//         super(_name,_weight);
//         this.poison = _poison;
//     }
// }

// let shiba = new Dog("Shiba cậu vàng", "vàng" );
// console.log(shiba instanceof Animal);

/* 
*/

class Person {
    name;
    age;
    introduce(){
        console.log(`
        Tôi là ${this.name}
        Tôi năm nay hơn ${this.age} tuổi
    `)}
    constructor(_name,_age){
        this.name = _name;
        this.age = _age;
    }
};
class Boy extends Person {
    handsome;
    girlFriend;
    constructor(_name,_age,_handsome,_girlFriend) {
        super(_name,_age);
        this.handsome = _handsome;
        if(_girlFriend instanceof Girl){
             this.girlFriend = _girlFriend;
        }
        else{
            this.girlFriend = null;
        }
        this.girlFriend = _girlFriend;
        
    }

}
class Girl extends Person {
    beauty;
    boyFriend;
    constructor(_name,_age,_beauty,_boyFriend) {
        super(_name,_age);
        this.beauty = _beauty;
        if(_boyFriend instanceof Boy){
            this.boyFriend = _boyFriend;
        }
        else{
            this.boyFriend = null;
        }
        this.boyFriend = _boyFriend;
    }
}
class Pet {
    name;
    species;
    owner;
    constructor(_name,_species,_owner) {
        this.name = _name;
        this.species = _species;
        this.owner = _owner;
    }
}
let girl_1 = new Girl("Mỹ nữ",22,"nai xừ", null)
let tranDucBo = new Boy("Tran Duc Bo", 25, "cũng ok", girl_1);
console.log(tranDucBo);
