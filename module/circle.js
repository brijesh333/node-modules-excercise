module.exports=class circle{
    
    constructor(r){
        this.r=r;
    }
    area(){
        return 3.14 * this.r ** 2;
    }
}