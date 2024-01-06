

const getHomepage = (req, res) => {
    res.send("Heloo Huy nem")
}

const getABC = (req, res) => {
    res.send("get ABC")
}

module.exports = {
    getHomepage,
    getABC
}