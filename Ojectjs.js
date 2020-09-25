const alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function stringValue(str) {
    // ici split me permet de creer un tableau en séparant les éléments avec la ""
    // str a la valeur "er"
    const re = str.split("");
    // ["e", "r"]
    console.log("re =>",re);
    //ici je cree un tableau vide qui contiendra les différentes valeurs 
    const tab = [];
    // []  
    console.log("tab =>", tab);
    re.forEach(cat => {
        // "e"
        const val = alph.findIndex(chr => chr === cat)+1;
        // []
        console.log("re =>", re[chr]);
        console.log("re =>", chr);
        console.log("val =>", val);
        
        // ici il ne faut pas oublier la maniere permettant d'inseré quelque chose dans un tableau en algorithmie
        //tab[i] = val;
        tab.push(val);  
    }
    )
    return tab;
}

//console.log(stringValue("er"));

function anagramValue(arr) {
   
    
    
                                                                                                                                                                                                                                                                                                                                  
 
}

function tabNbre_tabChr(arr) {
    return arr.map(number => alph[number -1]);
    // const tab = [];
    // console.log("tab => ", tab);
    // for (let i = 0; i < alph.length; i++) {
    //     console.log("i => ", i);
    //     for(let j = 0; j < arr.length; j++){
    //         if ( i === alph[]){
    //                 tab[i] = alph[i+1];
    //         }
    //     }
    // } 
    // return tab;

}


//console.log(tabNbre_tabChr([3, 2, 5]));
// [5, 2 , 4]


function returnObject(str) {
    const tab = str.split("");
    occurence(tab);

    


}

function occurence(arr) {

    let result = {};
    for(let j = 0; j < arr.length; j++){
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] in result){
                result[arr[i]] = result[arr[i]] + 1;
                result.occur = result[arr[i]] + 1;

            }else{
                result.valeur = arr[i];
                result[arr[i]] = 1;
            }
        }
        return result;
    }    
}


//console.log(occurence(["z", "c", "a", "b", "a", "a", "z"]));

function str_val(str) {

    
}

function toObject(arr) {

    var rv = {};
    for (var i = 0; i < arr.length; i++)
        //rv[i] = arr[i];
        rv[arr[i]] = i + 1;
    return rv;
}

console.log(toObject(["a", "b", "z"]));




