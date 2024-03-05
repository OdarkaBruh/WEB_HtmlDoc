import { useState } from 'react';
import './page.css'

export default function ShowLab3() {
    const [page, setPage] = useState(0);
    return(
        <>
        <sidebar>
            <div className='sideNav'>
                <h1>LAB 3</h1>
            </div>
        </sidebar>
        <div className="info">
        </div>
        </>
    )
}