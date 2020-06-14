import React from 'react';

function Course(props){
    return(
        <div>
            <table border="2" width="700" align="center">
            <tr>
                    
            </tr>
            <tr>
                <td>{props.sr}</td>
                <td>{props.name}</td>
                <td>{props.roll_no}</td>
                <td>{props.course}</td>
            </tr>
            </table>
        </div>
    );
}

export default Course;