// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

const format = (value) => {
    return value < 10 ? '0' + value : value
}

const updateClock = () => {
    const now = new Date()

    const format24 = format(now.getHours()) + ':' + format(now.getMinutes()) + '::' + format(now.getSeconds())

    const hours12 = now.getHours() % 12 || 12
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM'
    const format12 = format(hours12) + ':' + format(now.getMinutes()) + '::' + format(now.getSeconds()) + ' ' + ampm

    console.clear()
    console.log(format24)
    console.log(format12)

    setTimeout(updateClock, 1000)
}

updateClock()
