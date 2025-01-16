export const obtenerPeliculas = async () => {
    return new Promise((resolve, reject) => { //promesa 
        setTimeout(() => {
            resolve([ // resolve
                {
                    id: 1,
                    titulo: "Inception",
                    director: "Christopher Nolan",
                    anio: 2010,
                    descripcion:
                        "Un ladrón especializado en el subconsciente entra en los sueños de sus objetivos.",
                    imagen: "https://images.adsttc.com/media/images/53b5/d563/c07a/80a3/4300/016c/slideshow/inception_ver12_xlg.jpg?1404425564",
                },
                {
                    id: 2,
                    titulo: "Inception",
                    director: "Christopher Nolan",
                    anio: 2010,
                    descripcion:
                        "Un ladrón especializado en el subconsciente entra en los sueños de sus objetivos.",
                    imagen: "https://images.adsttc.com/media/images/53b5/d563/c07a/80a3/4300/016c/slideshow/inception_ver12_xlg.jpg?1404425564",
                },
                {
                    id: 3,
                    titulo: "Interstellar",
                    director: "Christopher Nolan",
                    anio: 2014,
                    descripcion:
                        "Un grupo de astronautas viaja a través de un agujero de gusano para salvar la humanidad.",
                    imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRdlal-DyX1hbPmmSWSRl6Gv8Ev0v8Ugk71D-TakxV3KPFwrojG05f4jLsgL1tcb1QgwXha9hzCPp73wvAzHJ7ZbQ6PWCuTzQHmXTVz6XDNmSlLi7hNjYxH_BcOMY1sma-nW5oIS-HZsB1/s1600/interstellar-imax-movie-poster.jpg",
                },
                {
                    id: 4,
                    titulo: "The Matrix",
                    director: "The Wachowskis",
                    anio: 1999,
                    descripcion:
                        "Un hacker descubre la verdad sobre su realidad simulada.",
                    imagen: "https://play-lh.googleusercontent.com/JCgd2EG9UkbJE9n1bWuBwsvwVr81mS7Ad2ve0K35_w10rqOtRlm9OlPAuAENQXVmh3YpHDGJbsKiT5iaqL8",
                },      
            ]);
        }, 0o200); //time out 
    });
};
