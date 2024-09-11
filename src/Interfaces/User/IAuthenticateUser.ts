interface IRequestUser{
    email:string;
    password:string;
}

interface IResponseUser{
    user:{
        name:string
        email:string
    };
    token:string;

}

export {IRequestUser, IResponseUser};