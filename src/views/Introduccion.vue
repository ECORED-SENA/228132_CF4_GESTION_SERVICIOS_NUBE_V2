<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .position-relative
      img(src="@/assets/curso/img1.png").d-none.d-md-flex
      img(src="@/assets/curso/img1-movil.png").d-flex.d-md-none
      .container-text-introduccion.col-11.mx-auto
        p.mb-0 Le damos la bienvenida al componente formativo “Diseño y documentación de propuesta para servicios en la nube”. Para comenzar el recorrido por el mismo, visite el recurso didáctico que se muestra a continuación:
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/CP-AuxoKxyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figcaption Video. Diseño y documentación de propuesta para servicios en la nube: introducción
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
