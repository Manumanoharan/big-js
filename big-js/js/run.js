
   function numbers(a,b,c)
   {
      
      if(a>b&&a>c)
      {
         return 'a is biggest number';
      }
      else if(b>a&&b>c)
      {
         return 'b is biggest number';
      }
      else if (c>b&&c>a)
      {
         return 'c is biggest number';
      }
   }
   
   
   var a=23;
   var b=43;
   var c=53;
    
   var compare=numbers(a,b,c);
   console.log(compare)