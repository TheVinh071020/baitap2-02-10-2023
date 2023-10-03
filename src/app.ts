// cach 1: giai phap chua toi uu
// - xác định vấn đề
// - xác định rõ input và output

// - xác định điều kiện của input

// - các bước xử lí vấn đề

// const same = (arr1: number[], arr2: number[]): boolean => {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex === -1) {
//             return false
//         }
//         console.log(arr2);
//         arr2.splice(correctIndex, 1)
//     }
//     return true
// }

// console.log(same([1, 2, 3], [1, 4, 9]));


// Cách 2:giải pháp tối ưu

// interface IObject {
//    [key: number]: number
// }
// const same = (arr1: number[], arr2: number[]): boolean => {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     const object1 : IObject = {}
//     const object2: IObject = {}
    
//     for (let key of arr1) {
//         object1[key] = (object1[key] || 0) + 1
//     }
//     for (let key of arr2) {
//         object2[key] = (object2[key] || 0) + 1
//     }
//     console.log(object1);
//     console.log(object2);
//     for (let key in object1) {
//         if (!((+key) ** 2 in object2)) {
//             return false
//         }
//         if(object2[(+key) ** 2] !== object1[key]) {
//             return false
//         }
//     }
    

//     return true
// }
// console.log(same([1, 2, 3], [1, 4, 9]));



interface IObject {
    [key: string]: number
}
const bai1 = (str1: string, str2: string): boolean => {
    str1 = str1.replace(/\s/g, '').toLowerCase()
    str2 = str2.replace(/\s/g, '').toLowerCase()
    if(str1.length !== str2.length) {
        return false
    }
    const obj: IObject = {};

    for(const char of str1) {
        obj[char] = (obj[char] || 0) + 1
    }

    for (const char of str2) {
        if (!obj[char]) {
            return false
        }       
        obj[char]--
    }
    
    return true
}
console.log(bai1('', ''));
console.log(bai1('aaz', 'aaz'));
console.log(bai1('anagram', 'nagaram'));
console.log(bai1("rat","car"));
console.log(bai1('texttwisttime', 'timetwisttext'));












