<template>
  <div class="container my-5">
    <h1 class="text-center mb-4">Películas Populares</h1>

    <!-- Barra de busqueda -->
    <div class="mb-4">
      <input
        type="text"
        class="form-control"
        placeholder="Buscar películas..."
        v-model="terminoBusqueda"
      />
    </div>

    <div class="row">
      <div
        v-for="(pelicula, index) in peliculasFiltradas"
        :key="pelicula.id"
        class="col-md-4 mb-4"
      >
        <div class="card h-100">
          <img
            :src="pelicula.imagen"
            class="card-img-top"
            :alt="pelicula.titulo"
          />
          <div class="card-body">
            <h5 class="card-title">{{ pelicula.titulo }}</h5>
            <button
              class="btn btn-primary"
              @click="verDetalles(pelicula)"
              data-bs-toggle="modal"
              data-bs-target="#detallesModal"
            >
              Ver detalles
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL -->
    <div
      class="modal fade"
      id="detallesModal"
      tabindex="-1"
      aria-labelledby="detallesModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="detallesModalLabel">
              {{ peliculaSeleccionada.titulo }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p><strong>Director:</strong> {{ peliculaSeleccionada.director }}</p>
            <p><strong>Año:</strong> {{ peliculaSeleccionada.anio }}</p>
            <p><strong>Descripción:</strong> {{ peliculaSeleccionada.descripcion }}</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logic from './controllers/peliculasController';

export default {
  mixins: [logic], // Usa la lógica modularizada
};
</script>
