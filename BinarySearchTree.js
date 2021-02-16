//A binary search tree (BST) is a binary tree where each node has a Comparable key (and an associated value) and satisfies the restriction that the key in any node is larger than the keys in all nodes in that node's left subtree and smaller than the keys in all nodes in that node's right subtree.

class Node{
    constructor(data,left=null,right=null){
        this.data=data;
        this.left=left;
        this.right=right;
    }
}

class BST{
    constructor(){
        this.root=null;
    }

    add(data){
        const node=this.root;
        if(node===null){
            this.root=new Node(data);
            return;
        }else{
            const searchTree=function(node){
                if(data<node.data){
                    if(node.left===null){
                        node.left=new Node(data);
                        return;
                    }else if(node.left !==null){
                        return searchTree(node.left);
                    }
                }else if(data>node.data){
                    if(node.right===null){
                        node.right=new Node(data);
                        return;
                    }else if(node.right !==null){
                        return searchTree(node.right);
                    }
                }else{
                    return null;
                }
            }
            return searchTree(node);
        }
    }

    //find min
    findMin(){
      let current=this.root;
      while(current.left !=null){
          current=current.left;
      }
      return current.data;
  }

  //find max
  findMax(){
      let current=this.root;
      while(current.right !==null){
          current=current.right;
      }
      return current.data;
  }

  find(data){
      let current=this.root;
      while(current.data !== data){
          if(data<current.data){
              current=current.left;
          }else{
              current=current.right;
          }

          if(current===null){
              return null;
          }
      }
      return current;
  }

  //remove node
  remove(data){
    const removeNode=function(node,data){
      if(node==null){
        return null;
      }

      if(data==node.data){
        if(node.left==null && node.right==null){
          return null;
        }

        //node has no left child
        if(node.left==null){
          return node.right;
        }

        //node has no right child
        if(node.right==null){
          return node.left;
        }

        //node has two children
        let tempNode=node.right;
        while(tempNode.left !==null){
          tempNode=tempNode.left;
        }
        node.data=tempNode.data;
        node.right=removeNode(node.right,tempNode.data);
        return node;
      }else if(data<node.data){
          node.left=removeNode(node.left,data);
          return node;
      }else{
        node.right=removeNode(node.right,data);
        return node;
      }
    }
    this.root=removeNode(this.root,data);
  }

  isPresent(data){
    let current=this.root;
    while(current){
        if(data==current.data){
            return true;
        }

        if(data<current.data){
            current=current.left;
        }else{
            current=current.right;
        }
    }
    return false;
  }

  //find min height of the binary tree
  findMinHeight(node=this.root){
      if(node==null){
          return -1;
      }

      let left=this.findMinHeight(node.left);
      let right=this.findMinHeight(node.right);
      if(left<right){
          return left+1;
      }else{
          return right+1;
      }

  }

  //find max height
  findMaxHeight(node=this.root){
      if(node==null){
          return -1;
      }

      let left=thisfindMaxHeight(node.left);
      let right=thisfindMaxHeight(node.right);
      if(left > right){
          return left+1;
      }else{
          return right+1;
      }
  }

  isBalanced(){
      return (this.findMinHeight() >=this.findMaxHeight()-1);
  }
    
    
}

const bst= new BST();
bst.add(30);
bst.add(25);
bst.add(35);
console.log(bst);
bst.remove(30);
console.log(bst);