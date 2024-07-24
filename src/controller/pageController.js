

export const indexPageController = (req,resp)=>{
    resp.render('index',{title:"Netflix-clone",movies:[]});
}


export const loginPageController = (req,resp)=>{
    resp.render('login')
}