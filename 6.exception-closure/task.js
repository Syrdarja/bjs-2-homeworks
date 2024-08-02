function parseCount (count){
    let result = Number.parseFloat(count);
   if (Number.isNaN(parseFloat(count))) {
    throw new Error(`Невалидное значение`);
}
      return result;
}


    function validateCount (number) {
        try {
            parseCount(number);
    } catch(error) {
     return error
    }
}
