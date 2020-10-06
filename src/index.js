module.exports = function toReadable (number) {
    // function toReadable (number) {
        var DIGIT_SINGLE = {},
              DIGIT_TWO = {};
        number = String(number);
        DIGIT_SINGLE[0] = 'zero';
        DIGIT_SINGLE[1] = 'one';
        DIGIT_SINGLE[2] = 'two';
        DIGIT_SINGLE[3] = 'three';
        DIGIT_SINGLE[4] = 'four';
        DIGIT_SINGLE[5] = 'five';
        DIGIT_SINGLE[6] = 'six';
        DIGIT_SINGLE[7] = 'seven';
        DIGIT_SINGLE[8] = 'eight';
        DIGIT_SINGLE[9] = 'nine';
    
        DIGIT_TWO[10] = 'ten';
        DIGIT_TWO[11] = 'eleven';
        DIGIT_TWO[12] = 'twelve';
        DIGIT_TWO[13] = 'thirteen';
        DIGIT_TWO[14] = 'fourteen';
        DIGIT_TWO[15] = 'fifteen';
        DIGIT_TWO[16] = 'sixteen';
        DIGIT_TWO[17] = 'seventeen';
        DIGIT_TWO[18] = 'eighteen';
        DIGIT_TWO[19] = 'nineteen';
        DIGIT_TWO[20] = 'twenty';
        DIGIT_TWO[30] = 'thirty';
        DIGIT_TWO[40] = 'forty';
        DIGIT_TWO[50] = 'fifty';
        DIGIT_TWO[60] = 'sixty';
        DIGIT_TWO[70] = 'seventy';
        DIGIT_TWO[80] = 'eighty';
        DIGIT_TWO[90] = 'ninety';
       
       
        //console.log('number.length: '+number.length);
        if(number.length === 1)
            return DIGIT_SINGLE[number];
        else{
            let two_symbols = number.substr(number.length - 2);
            //console.log('Два последние символа: '+two_symbols);
            if (two_symbols === '00') 
                res = '';
            else if(two_symbols[0] === '0')
                res = DIGIT_SINGLE[two_symbols[1]];
            else{
                if(DIGIT_TWO[two_symbols])
                    res = DIGIT_TWO[two_symbols];
                else{
                    res = DIGIT_TWO[two_symbols[0]+'0'] + ' ' + DIGIT_SINGLE[two_symbols[1]];
                }
            }
        }
      
      //console.log('2) number.length: '+number.length);
      
      if (number.length === 3){
        res = DIGIT_SINGLE[number[0]] + ' hundred ' + res;
      }
    
     
      return res.trim();
     }
    
    // toReadable('539');