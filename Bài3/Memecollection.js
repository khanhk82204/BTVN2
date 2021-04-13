import Meme from "./Meme.js";
export default class Memecollection extends Meme {
    owner;
    memes;
    constructor(_id,_name,_owner,_memes){
        super(_id,_name);
        this.owner = _owner;
        this.memes = _memes;
    }
    add(meme){
        if(meme instanceof Meme){
            this.memes.push(meme);
        }
    }
    update(id,data){
        let viTri = -1;
        for(let i=0;i<this.memes.length;i++){
            if(this.memes[i].id == id){
                 viTri = i;
                 break;
            }

        }
        if(viTri == -1){
            console.log("Không có id tương ứng");
        }
        else{
            this.memes.splice(viTri,1,data);
        }
        

    }
    delete(id){
        let viTri = -1;
        for(let i=0;i<this.memes.length;i++){
            if(this.memes[i].id == id){
                 viTri = i;
                 break;
            }

        }
        if(viTri == -1){
            console.log("Không có id tương ứng");
        }
        else{
            this.memes.splice(viTri,1);
        }
    }
    show() {
        console.log(this.memes);
    }

};