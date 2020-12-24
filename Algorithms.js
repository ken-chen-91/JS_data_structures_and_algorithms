function friend(friends) {
    //your code here
    let count = friends.filter(name => name.length === 4)
    console.log(count)
    return count

}

friend(["Ryan", "Kieran", "Mark"]);