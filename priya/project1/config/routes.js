var express=require("express");
var routes=express.Router();
   

   routes.use=("/",require("../controller/home"))
   routes.use=("about",require("../controller/about"));
   routes.use=("contact",require("../controller/contact"));
   routes.use=("login",require("../controller/login"));
   routes.use=("signup",require("../controller/signup"));
   routes.use("/user", backdoor, require("../controller/user"));
   routes.use("/logout", require("../controller/logout"));
   routes.use("/admin", require("../controller/admin/routes"));

   function backdoor(req, res, next)
{
    if(! req.session.is_user_logged_in)
    {
    res.redirect("/login");
    return;
    }
    next();
}

// routes.get("/logout", function(req, res){
// 	req.session.destroy();
// 	res.redirect("/login");
// });
module.exports = routes;



