var somelist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
var nextItem = async function() {
   var item = somelist.pop();
   if (item) {
       
       await nextItem();

   }
};

nextItem();