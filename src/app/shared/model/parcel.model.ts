

export  class   ParcelModel  { 
   id :   number ; 
   name :   string ; 
   email :   string ;
   destination :   string ;

    constructor (  name :   string ,  email :   string ,  destination :   string )   {
        this . id   =   this . generateId ();
        this . name   =   name ;
        this . email   =   email ;
        this . destination   =   destination ;
    }

    generateId ()   {
        return   Math . floor ( Math . random ()   *   1000000 );
    }
    }
