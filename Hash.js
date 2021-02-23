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
                    console.log('this is hit');
                    storage[index][i][1]=value;
                    inserted=true;
                }
            }
            if(inserted===false){
                storage[index].push([key,value]);
            }
        }
    }

    this.remove=function(key){
        let index=hash(key,storageLimit);
        if(storage[index].length===1 && storage[index][0][0]===key){
            delete storage[index][i];
        }else{
            for(let i=0;i<storage[index].length;i++){
                if(storage[index][i][0]===key){
                    delete storage[index][i];
                }
            }
        }
    }

    this.lookup=function(key){
        let index=hash(key,storageLimit);
        if(storage[index]===undefined){
            return undefined;
        }else{
            for(let i=0;i<storage[index].length;i++){
                if(storage[index][i][0]===key){
                    return storage[index][i][1];
                }
            }
        }
    }


}

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin');
//ht.remove('beau');
ht.print();
console.log(ht.lookup('beau'))
