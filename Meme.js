export default class Meme {
         id;
         name;
         image;
         dateModified;
         constructor(_id, _name, _image, _dateModified){
             this.id = _id;
             this.name = _name;
             this.image = _image;
             this.dateModified = _dateModified;
         }
         show() {
             console.log(`
               Name: ${this.name}, 
               Image: ${this.image},
               DateModified: ${this.dateModified}
             `)

         }
         update(data){
             console.log(`
             ${this.id = data.id},
             ${this.name = data.name},
             ${this.image = data.image},
             ${this.dateModified = data.dateModified}
             `)
             

         }
};