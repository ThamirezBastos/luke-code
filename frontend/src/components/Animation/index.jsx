import React from 'react';

import './style.css';

const Animation = () => {

    setTimeout(() => {
        document.getElementById('bg-animation').style = "display:none";
    }, 3000)

    return (
        <>
            <div id="bg-animation" className="bg-animation">
                <div className="animation">
                    <h2>Luke Code</h2>
                </div>
            </div>
        </>
    )
}
export default Animation;