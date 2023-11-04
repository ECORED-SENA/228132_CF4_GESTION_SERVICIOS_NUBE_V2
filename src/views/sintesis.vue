<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.bg1.px-4.mb-5(data-aos="fade-right")        
      .col-lg-4(data-aos="fade-left")
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .bg2.p-3.brad.mb-4 
          p(data-aos="fade-down").mb-0 El diseño y documentación requerida para la formulación de propuestas de servicios en la nube, debe involucrar de manera clara las condiciones en las cuales se va a prestar el servicio, por esta razón, la claridad en la negociación, así como los derechos y deberes de cada uno de los actores es fundamental en la comunicación establecida entre las partes.

        h5(data-aos="fade-down").mb-0 No es un secreto que el #[i cloud computing], es útil como modelo de negocio, puesto que el #[i software] reduce los costos mediante servidores centralizados en internet, en lugar de servidores locales, al eliminar gastos de mantenimiento, licencias y #[i hardware] necesario para mantener los servidores, permite que las empresas puedan ejecutar aplicaciones fluida y eficientemente. Por lo que los proyectos formulados en este entorno posibilitan un mejor desarrollo del uso de las tecnologías, manteniendo vigencia en su aplicación y conocimiento:

    h5(data-aos="fade-down").mb-5 El siguiente mapa ofrece una vista rápida de los contenidos de este componente formativo:            
    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Esquema general de contenidos de este componente formativo. Tema principal: Diseño y documentación para propuestas de servicios en la nube. Temas integradores: Estrategias de migración, Contratación, Proveedores de servicios en la nube, Comunicación, Proyectos de TI.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
