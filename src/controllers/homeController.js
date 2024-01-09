const connection = require('../config/database')

const getHomePage = (req, res) => {
    return res.render('CreateUser.ejs');
}

const getHomeProduct = (req, res) => {
    res.render('Home.ejs');
}

const getAllProduct = (req, res) => {
    res.send('hello kteam free education');
}

const creatNewUser = async (req, res) => {

    let { FirstName, LastName, email, City } = req.body
    console.log('req.body =', FirstName, LastName, email, City)
    // connection.query(
    //     `INSERT INTO Users (FirstName , LastName , email , City)  VALUES (?,?,?,?)`,
    //     [FirstName, LastName, email, City],
    //     function (err, results) {
    //         console.log(results);
    //         res.send('create a new user success');
    //     }
    // )
    let [results, fields] = await connection.query(
        `INSERT INTO Users (FirstName , LastName , email , City)  VALUES (?,?,?,?)`,
        [FirstName, LastName, email, City],
    );
    console.log(' check results', results);
    res.send('create a new user success');


}







module.exports = { getHomePage, getHomeProduct, getAllProduct, creatNewUser };