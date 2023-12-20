function generateUniqueId() {
    // Combine current timestamp with a random number to create a unique ID
    const uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2, 5)

    return uniqueId
}

module.exports = generateUniqueId
