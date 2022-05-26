import React from 'react'
import style from './country.module.css';

const Country = (props) => {
    const { country } = props;
    const { name, flags, population, area, capital, maps } = country;
    const handleRemoveCountry = (name) => {
        props.onRemoveCountry(name);
    }


    return (
        <section>
            <div className="container">



                {/* <div className={style.country}>
                <img className={style.flag} src={flags.png} alt={name.common} />
                <h4 className={style.h4}>Name : {name.common}</h4>
                <h4 className={style.h4}>Population : {population}</h4>
                <h4 className={style.h4}>Capital : {capital}</h4>
                <h4 className={style.h4}>Area : {area}</h4>
                <h4 className={style.h4}>Maps : <a className={style.a} href={maps.googleMaps}>Click Here</a></h4>
                <button className={style.btn} onClick={() => {
                    handleRemoveCountry(name.common)
                }}>Remove Country</button>
            </div> */}

                {/* <div>
                <img src={flags.png} alt={name.common} style={{ width: "300px", height: "250px" }} />
                <h3>Name : {name.common}</h3>
                <p class="title">Capital : {capital}</p>
                <p>Population : {population}</p>
                <p>Area : {area}</p>
                <p>Maps : <a className={style.a} href={maps.googleMaps}>Click Here</a></p>

                <p><button className={style.btn} onClick={() => {
                    handleRemoveCountry(name.common)
                }}>Remove Country</button></p>
            </div> */}


                <div className={style["flip-card"]}>
                    <div className={style["flip-card-inner"]}>
                        <div className={style["flip-card-front"]}>
                            <h5>{name.common}</h5>
                            <img src={flags.png} alt={name.common} style={{ width: "300px", height: "220px", paddingBottom: "60px" }} />
                        </div>
                        <div className={style["flip-card-back"]}>
                            <h5>{name.common}</h5>
                            <p>Capital : {capital}</p>
                            <p>Population : {population}</p>
                            <p>Area : {area}</p>
                            <p>Maps : <a style={{ textDecoration: "none", color: "black" }} className={style.a} href={maps.googleMaps}>Click Here</a></p>

                        </div>
                    </div>
                </div>

            </div >
            <div>
                <button style={{

                    border: "none",
                    outline: "0",
                    display: "inline-block",
                    padding: "8px",
                    color: "white",
                    backgroundColor: "orange",
                    textAlign: "center",
                    cursor: "pointer",
                    width: "300px",
                    fontSize: "18px",
                    borderRadius: "1rem",
                    marginTop: "20px",
                }}
                    onClick={() => {
                        handleRemoveCountry(name.common)
                    }}>Remove Country</button>
            </div>
        </section>
    )
}

export default Country
