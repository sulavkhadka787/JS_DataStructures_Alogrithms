//Queue is first in first out

function Queue(){
    collection=[];
    this.print=function(){
        console.log(collection);
    }

    this.enqueue=function(element){
        collection.push(element);
    }

    this.dequeue=function(){
        return collection.shift();
    };

    this.front=function(){
        return collection[0];
    }

    this.size=function(){
        return collection.length;
    }

    this.isEmpty=function(){
        return (collection.length===0);
    }
}

let queue=new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.print();
queue.dequeue();
console.log(queue.front());
queue.print();