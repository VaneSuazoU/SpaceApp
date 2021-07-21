import React from 'react'
import OfficeImg from "../img/office.png";
import '../components/oficce.css'

const OfficeMap = () => {
    return   (
        <div>
            { OfficeImg}
            <div>
            <h1>Oficinas</h1>
                <ul className= "userListA">
                    <li>
                        <h3> oficina G1 </h3> <br/>
                    </li>
                    <li>
                        <p> Vanessa Suazo </p>
                    </li>
                    <li>
                        <p> Nicole Perisc </p>
                    </li>
                    <li>
                        <p> Marjorie Lagos </p>
                    </li>
                    <li>
                        <p> Mailys Brizuela </p>
                    </li>
                </ul>
                <hr size="2px"  color="black" width="50%" />
                <ul className= "userListB">
                    <li>
                        <h3> oficina G2 </h3><br/>
                    </li>
                    <li>
                        <p> Luis Patria </p>
                    </li>
                    <li>
                        <p> Carlos Rodriguez </p>
                    </li>
                    <li>
                        <p> Marcos Luna </p>
                    </li>
                    <li>
                        <p> María Medrano </p>
                    </li>
                </ul>

            </div>
        
        </div>
    )
}

export default OfficeMap