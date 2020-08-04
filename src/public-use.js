//随机选择数组一项的公共方法
function random(arr) {
    return arr[Math.floor(Math.random() * (arr.length - 1))];
}

export { random };