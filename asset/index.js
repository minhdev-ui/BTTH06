const createArray = document.getElementById('create_btn')
const createValue = document.querySelector('.array_value')
const sortIncrease = document.getElementById('increase')
const sortDecrease = document.getElementById('decrease')
const modifiedValue = document.querySelector('.modified_array_value')
const addBtn = document.getElementById('add_btn')
const pos = document.getElementById('pos')
const val = document.getElementById('val')

const array = []

createArray.onclick = () => {
    array.length !== 0 && array.splice(0, array.length)
    let randomLength = Math.floor(Math.random()*10 + 10)
    for(let i = 0; i < randomLength; i++) {
        array.push(Math.floor(Math.random() * 90 + 10))
    }
    createValue.innerHTML = [...array]
}

sortIncrease.onclick = () => {
    array.sort();
    modifiedValue.innerHTML = [...array]
}

sortDecrease.onclick = () => {
    array.sort().reverse();
    modifiedValue.innerHTML = [...array]
}

addBtn.onclick = () => {
    let Pos = Number(pos.value)
    let Val = Number(val.value)
    array.splice(Pos, 0, Val)
    modifiedValue.innerHTML = [...array]
}

// Time O'Clock

const timer = document.querySelector('.time_counter')
const greeting = document.querySelector('.greeting_sentence')

const showGreeting = (hour) => {
    let text;
    if(hour >= 0 && hour < 12) {
        text = 'Chào Buổi Sáng'
    }else if (hour < 17){
        text = 'Chào Buổi Chiều'
    }else{
        text = 'Chào Buổi Tối'
    }
    return text
}

const checkTime = (i) => i < 10 ? '0' + i : i

const counterTime = () => {
    setInterval(() => {
        let time
        const d = new Date()
        let h = checkTime(d.getHours())
        showGreeting(h) !== greeting.textContent ? greeting.textContent = showGreeting(h) : greeting.textContent = greeting.textContent
        let m = checkTime(d.getMinutes())
        let s = checkTime(d.getSeconds())
        time = h + ':' + m + ':' + s
        timer.textContent = time
    }, 1000)
}

counterTime()