import { toast } from 'react-toastify';


export const notify = ( text , type ) => {
    if ( type === "success" ) {
        toast.success ( text );
    } else if ( type === "info" ) {
        toast.info ( text )
    } else {
        toast.error ( text )
    }
};