import React from 'react';
import './tiny-footer.css';

// Css
import style from './tiny-footer.css';

const TinyFooter = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (

        <>

            {/* Tiny Footer */}
            <div className='tinyFooter'>

                <p>@ {year} All Rights Reserved </p>
                <p>System developed by <Link href='https://funnelliner.com/'>Funnel Liner</Link> </p>

            </div>

        </>

    )

}

export default TinyFooter
