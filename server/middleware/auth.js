module.exports = {
    ensureAuth: (req , res , next) => {
        if(req.isAuthenticated()){
            console.log('Authenticated');
            return next();
        } else {
            console.log('Not Authenticated');
            res.redirect('/auth/login');
        }
    },

    ensureGuest: (req , res , next) => {
        if(req.isAuthenticated()){
            console.log('Authenticated');
            res.redirect('/frontpage');
        } else {
            console.log('Not Authenticated');
            return next();
        }
    }

}