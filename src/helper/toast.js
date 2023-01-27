import { toast } from 'react-toastify';


export const notify = ( text , type ) => {
    if ( type === "success" ) {
        toast.success ( text , {
            position : "top-center" ,
            autoClose : 2000 ,
            hideProgressBar : false ,
            closeOnClick : true ,
            pauseOnHover : true ,
            draggable : true ,
            progress : undefined ,
            theme : "colored" ,
        } );
    } else if ( type === "info" ) {
        toast.info ( text , {
            position : "top-center" ,
            autoClose : 2000 ,
            hideProgressBar : false ,
            closeOnClick : true ,
            pauseOnHover : true ,
            draggable : true ,
            progress : undefined ,
            theme : "colored" ,
        } )
    } else {
        toast.error ( text , {
            position : "top-center" ,
            autoClose : 2000 ,
            hideProgressBar : false ,
            closeOnClick : true ,
            pauseOnHover : true ,
            draggable : true ,
            progress : undefined ,
            theme : "colored" ,
        } )
    }
};