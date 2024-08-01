

export const indexPageController = (req,resp)=>{
    resp.render('index',{title:"Netflix-clone",movies:[]});
}


export const loginPageController = (req,resp)=>{
    resp.render('login')
<<<<<<< HEAD
}

export const signUpPageController = (req,resp)=>{
    resp.render('signup')
}


export const dashboardController = (req,resp,next)=>{
    console.log("here in dashboard",req.decoded);
    resp.render('dashboard')
}

export const errorController = (req,resp)=>{
    const message = req.query.message
    resp.render('errorPage',{
        errorMessage:message
    })
=======
>>>>>>> 8a578585069878f529a4bb7e70820d864c8dee28
}