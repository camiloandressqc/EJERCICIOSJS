import styles from './about.module.css'
import { Children } from 'react';


function About({children}){

    console.log(styles);

    return(
        <>
            {/* <div className="containerAbout"> */}
            <div className={styles.containerAbout}>
                <h2>Historia de los Videojuegos</h2>
                <p>
                    Los orígenes del videojuego se remontan a la década de 1950, cuando poco después de la aparición de las primeras computadoras electrónicas tras el fin de la Segunda Guerra Mundial, se llevaron a cabo los primeros intentos por implementar programas de carácter lúdico. Así, fueron creados el Nimrod (1951) o el Oxo (1952), juegos electrónicos que aún no pueden ser denominados videojuegos, y el Tennis for Two (1958) o el Spacewar! (1962), auténticos pioneros del género. Todos ellos eran todavía prototipos, juegos muy simples y de carácter experimental que no llegaron a comercializarse, entre otras cosas, porque funcionaban en unas máquinas que solo estaban disponibles en universidades o en institutos de investigación.
                </p>

                {children}

            </div>
        </>
    )

}

export default About