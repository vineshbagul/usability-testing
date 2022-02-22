class Stack
{
    top;
    array;
    capacity;

    constructor(capacity)
    {
        this.array=[];
        this.top = -1;
        this.capacity=capacity;
    }

/***********************************
******pushing into stack **********
***********************************/




    push(value)
    {
        if(this.top==this.capacity-1)
        {
            console.log("Overflow");
        }
        else
        {
            this.top +=1;
            this.array[this.top]=value;
            console.log(`${this.array[this.top]} is inserted`);
            return this.top;
        }

    }
/***********************************
******popping into stack **********
***********************************/
    pop()
    {
        if(this.top==-1)
        {
            console.log("underflow");
        }
        else
        {
            this.top -=1;
            console.log("element is popped");
            return this.top;
        }
    }

/***********************************
******peek element in stack ********
***********************************/
    peek()
    {   
        if(this.top==-1)
        {
            console.log("stack is empty");
        }
        else
        {
        console.log(`${this.array[this.top]} is top element`);
        }
    }

}

let s = new Stack(1);
s.push(2);
s.peek();
s.pop();



