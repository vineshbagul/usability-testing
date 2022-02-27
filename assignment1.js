class Stack
{
    head;
    array;
    capacity;

    constructor(capacity)
    {
        this.array=[];
        this.head = -1;
        this.capacity=capacity;
    }

    /***********************************
******pushing into stack **********
***********************************/
push(value)
{
    if(this.head==this.capacity-1)
    {
        console.log("Overflow");
    }
    else
    {
        this.head +=1;
        this.array[this.head]=value;
        console.log(`${this.array[this.head]} is inserted`);
        return this.head;
    }

}

/***********************************
******popping into stack **********
***********************************/
pop()
{
    if(this.head==-1)
    {
        console.log("underflow");
    }
    else
    {
        this.head -=1;
        console.log("element is popped");
        return this.head;
    }
}


}