
export function randomItems(items, itemsCount){
    console.log('selecting random items')
    var randomArray = new Array
    do {
        const random = Math.floor(Math.random() * items.length)
        if( randomArray.length > 0 ){
            var i;
            var isPesent = false
            for ( i = 0; i < randomArray.length; i++ ) {
                if ( randomArray[i] === items[random]) {
                    isPesent = true
                    break;
                }
            }
            if( !isPesent ){
                randomArray.push(items[random])
            }
        } else {
            randomArray.push(items[random])
        }  
     }
     while (randomArray.length < itemsCount )
     
     return (randomArray);
}