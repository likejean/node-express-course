const authorize = (req,res,next) =>{
    const {user} = req.query;
    if(user === 'sergey'){
        req.user = {name: 'sergey', id:2};
        console.log('authorized')
        next();
    }
    else{
        return res.status(401).send('Unauthorized');
    }
    
    next()
}

module.exports = authorize