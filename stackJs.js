const Stack=function(){
    this.count=0;
    this.storage={};

    //Adds value onto the end of the stack
    this.push=function(value){
        this.storage[this.count]=value;
        this.count++;
    }

    this.pop=function(){
        if(this.count===0){
            return undefined;
        }

        this.count--;
        let result=this.storage[this.count];
        delete this.storage[this.count]
    }

    this.size=function(){
        return this.count
    }

    //returns the value at the end of the stack
    this.peek=function(){
        
        return this.storage[this.count-1];
    }
}

const stackObj=new Stack();
stackObj.push('aa');
stackObj.push('bb');
stackObj.push('cc');

console.log(stackObj.storage);

stackObj.pop();
console.log(stackObj.storage);
console.log('count',stackObj.size());
console.log('peek',stackObj.peek());