const liArray = Array.from(document.querySelectorAll('ul > li')) 

const toArr = (arr) => {
    const newArr = [];
    for (let i of arr) {
        newArr.push(i.innerHTML)
        console.log(i.innerHTML);
    }
    console.log(`Колличество элементов в массиве: ${newArr.length}`);
    return newArr
}

const solution = toArr(liArray)
    
    console.log(solution);




