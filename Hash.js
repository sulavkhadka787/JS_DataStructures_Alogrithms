//HASH TABLE

let hash=(string,max)=>{
    let hash=0;
    for(let i=0;i<string.length;i++){
        hash +=string.charCodeAt(i);
    }
    console.log('index-hash',string,'=>',hash%max);
    return hash % max;
}

let HashTable=function(){
    let storage=[];
    const storageLimit=4;

    this.print=function(){
        console.log(storage);
    }

    this.add=function(key,value){
        let index=hash(key,storageLimit);
        if(storage[index]===undefined){
            storage[index]=[
                [key,value]
            ];
        }else{
            let inserted=false;
            for(let i=0;i<storage[index].length;i++){
                if(storage[index][i][0]===key){
                    storage[index][i][0]=value;
                    inserted=true;
                }
            }
            if(inserted===false){
                storage[index].push([key,value]);
            }
        }
    }


}

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin');
ht.print();
