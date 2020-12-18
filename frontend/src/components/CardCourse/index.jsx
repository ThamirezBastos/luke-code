import React from 'react';
import './styles.css';

const CardCourse = (props) => {
    return (

        <article>
            <img src={props.image} alt={props.description} />
            <h4>{props.children}</h4>
        </article>
    );
    
    // exemplo desestruturação
    
    // const CardCourse = (image, description, children) => {
    //     return (

    //         <article>
    //             <img src={image} alt={description} />
    //             <h4>{children}</h4>
    //         </article>
    //     );



}
export default CardCourse;