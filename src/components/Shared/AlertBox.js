import {Alert} from 'react-bootstrap';

const AlertBox = (props) => {
    return ( 
        <Alert className="text-center m-5 fixed-bottom" 
            variant={props.type ? props.type : 'danger'}>
                {props.message}
        </Alert>
    );
}
 
export default AlertBox;