import Meme from "./Meme.js";
import Memecollection from "./Memecollection.js";

let mm1 = new Meme(1,"WTF","https://kenh14cdn.com/thumb_w/660/203336854389633024/2020/12/21/confusednickyoung-16085260310741369924969.jpg","22/04/2021");
let mm2 = new Meme(2,"How to","https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg","30/4/2021");
let mm3 = new Meme(3,"IQ vô cực", "https://www.meme-arsenal.com/memes/7f3d4be8fbd0d14a5e310b0c974633db.jpg","1/5/2021");

let memes1 = new Memecollection(4,"I dont't care", "Khánh",[mm1,mm2]);

// mm1.show();
// mm1.update(mm2);

console.log(memes1);
memes1.add(mm3);
memes1.delete(2);
memes1.show();
memes1.update(1,mm2);
