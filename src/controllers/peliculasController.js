import { obtenerPeliculas } from '../services/peliculaService';

export default {
    data() {
        return {
            peliculas: [],
            peliculaSeleccionada: {},
            terminoBusqueda: '', // Propiedad reactiva para la búsqueda
        };
    },
    computed: {
        peliculasFiltradas() {
            if (!this.terminoBusqueda.trim()) {
                return this.peliculas;
            }
            return this.peliculas.filter((pelicula) =>
                pelicula.titulo.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
            );
        },
    },
    methods: {
        async cargarPeliculas() {
            try {
                this.peliculas = await obtenerPeliculas();
            } catch (error) {
                console.error('Error al cargar las películas', error);
            }
        },
        verDetalles(pelicula) {
            this.peliculaSeleccionada = pelicula;
        },
    },
    mounted() {
        this.cargarPeliculas();
    },
};
