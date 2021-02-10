//no duplicates in set

function mySet(){
    let collection=[]; //this collection will hold the set

    //this method will check for presense of an element and return true or false

    this.has=function(element){
        return (collection.indexOf(element) !==-1);
    }

    //this method will return all the values in a set
    this.values=function(){
        return collection;
    }

    //this method will add an element to the set
    this.add=function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    }

    this.remove=function(element){
        if(this.has(element)){
            index=collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    }

    //this method will return the size of the collection
    this.size=function(){
        return collection.length;
    }

    //this method will return the union of two sets
    this.union=function(otherSet){
        let unionSet=new mySet();
        let firstSet=this.values();
        let secondSet=otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach((e)=>{
            unionSet.add(e);
        });
        return unionSet.values();
    }

    //this method will return the intersection  of the two sets
    this.intersection=function(otherSet){
        let interSectionSet=new mySet();
        let firstSet=this.values();
        firstSet.forEach((e)=>{
            if(otherSet.has(e)){
                interSectionSet.add(e);
            }
        });
        return interSectionSet.values();
    }

    //this method will return the difference of the new set as a new set
    this.difference=function(otherSet){
        let differenceSet= new mySet();
        let firstSet=this.values();
        firstSet.forEach((e)=>{
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet.values();
    }

    //this method will test if the set is a subset of another set
    this.subset=function(otherSet){
        let firstSet=this.values();
        return firstSet.every((e)=>{
            return otherSet.has(e);
        });
    }

}

const newSet=new mySet();
newSet.add('aa');
newSet.add('bb');
newSet.add('cc');

const bSet= new mySet();
bSet.add('cc');
bSet.add('dd');

//console.log(newSet.union(bSet));
//console.log(newSet.intersection(bSet));
//console.log(newSet.difference(bSet));
console.log(newSet.subset(bSet));

