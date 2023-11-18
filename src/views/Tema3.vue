<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Proveedores de servicio en la nube


    p(style="color: #1565C0; font-weight: bold;") Debido a la masificación y cada vez mayor adopción de tecnologías de <em>cloud computing</em>, han sido muchos los nuevos proveedores que han ido surgiendo y posicionando sus ofertas de servicios, sin embargo, en el mundo occidental podemos mencionar los siguientes como los más grandes y más importantes proveedores de servicios en la nube.

    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-5.my-3
        img.img-a.img-t(src="@/assets/curso/temas/tema3/1.png")
      .col-lg-7.my-3
        .bg10.p-4.mb-4
          p.mb-0 Los proveedores de servicios #[i cloud], han surgido para ofrecer a las organizaciones soluciones innovadoras y de vanguardia; contemplan funcionalidades tanto técnicas, que benefician la disponibilidad, así como herramientas para la gestión de los activos de información, a partir de modelos de negocio basados en servicios con componentes modulares. 
        .row.justify-content-center
          .col-6.col-md-4.col-xl-2.px-1.mb-2
            .bg5.brad.px-2.py-3
              img.img-a.img-t(src="@/assets/curso/temas/tema3/img-card-12-1.svg").mb-3
              p.mb-0.text-center.fw-bold Información
          .col-6.col-md-4.col-xl-2.px-1.mb-2
            .bg5.brad.px-2.py-3
              img.img-a.img-t(src="@/assets/curso/temas/tema3/img-card-12-2.svg").mb-3
              p.mb-0.text-center.fw-bold Conexión
          .col-6.col-md-4.col-xl-2.px-1.mb-2
            .bg5.brad.px-2.py-3
              img.img-a.img-t(src="@/assets/curso/temas/tema3/img-card-12-3.svg").mb-3
              p.mb-0.text-center.fw-bold Nube
          .col-6.col-md-4.col-xl-2.px-1.mb-2
            .bg5.brad.px-2.py-3
              img.img-a.img-t(src="@/assets/curso/temas/tema3/img-card-12-4.svg").mb-3
              p.mb-0.text-center.fw-bold Seguridad
          .col-6.col-md-4.col-xl-2.px-1.mb-2
            .bg5.brad.px-2.py-3
              img.img-a.img-t(src="@/assets/curso/temas/tema3/img-card-12-5.svg").mb-3
              p.mb-0.text-center.fw-bold Archivos


    p.mb-0.p-2.fw-bold(style="font-size: 22px; color: white;") Los siguientes fueron considerados los principales proveedores de servicios en la nube en el año 2021:
    ImagenInfografica.color-secundario.mb-5.d-none.d-md-flex
      template(v-slot:imagen)
        figure.col-12
          img(src='@/assets/curso/temas/tema3/img-2.png')

      .tarjeta.color-acento-botones.pt-3.infografia-t3(x="26%" y="6%" numero="+")
        .container-infografia-t3
          p.title Alibaba <span>Cloud</span>
          p Traducción del inglés -<em>Alibaba Cloud</em>-, también conocida como <em>Aliyun</em>, es una empresa de computación en la nube, una subsidiaria de <em>Alibaba Group. Alibaba Cloud</em> proporciona servicios de computación en la nube a empresas en línea y al propio ecosistema de comercio electrónico de <em>Alibaba</em>.

      .tarjeta.color-acento-botones.pt-3.infografia-t3(x="26%" y="29.5%" numero="+")
        .container-infografia-t3
          p.title Amazon Web <span>Services</span>
          p <em>Amazon Web Services</em> es una colección de servicios de computación en la nube pública que en conjunto forman una plataforma de computación en la nube, ofrecidas a través de Internet por <em>Amazon.com</em>. Es usado en aplicaciones populares como <em>Dropbox, Foursquare, HootSuite</em>.

      .tarjeta.color-acento-botones.pt-3.infografia-t3(x="26%" y="57%" numero="+")
        .container-infografia-t3
          p.title DigitalOcean
          p <em>DigitalOcean</em> es un proveedor estadounidense de servidores virtuales privados, con sede principal en la ciudad de Nueva York. La compañía alquila instalaciones de centros de cómputo existentes, incluyendo sitios como Nueva York, Toronto, Bangalore, Ámsterdam, San Francisco, Londres y Singapur.
      
      .tarjeta.color-acento-botones.pt-3.infografia-t3(x="26%" y="79.5%" numero="+")
        .container-infografia-t3
          p.title Google <span>Cloud</span>
          p <em>Google Cloud</em> es una plataforma que ha reunido todas las aplicaciones de desarrollo <em>web</em> que <em>Google</em> estaba ofreciendo por separado.

      .tarjeta.color-acento-botones.pt-3.infografia-t3(x="50%" y="99%" numero="+")
        .container-infografia-t3
          p.title Huawei  <span>Cloud</span>
          p Huawei <em>Mobile Cloud</em> es un sistema de almacenamiento nube o <em>cloud computing</em> desarrollado por Huawei. Fue lanzado el 27 de septiembre de 2017 para los dispositivos Huawei con el sistema operativo HarmonyOS y Android. 

      .tarjeta.color-acento-botones.pt-3.infografia-t3(x="74%" y="82%" numero="+")
        .container-infografia-t3
          p.title IBM <span>Cloud</span>
          p IBM <em>cloud computing</em> es un conjunto de servicios de computación en la nube para empresas que ofrece la compañía de tecnología de la información IBM. 

      .tarjeta.color-acento-botones.pt-3.infografia-t3(x="74%" y="57.5%" numero="+")
        .container-infografia-t3
          p.title Microsoft <span>Azure</span>
          p Microsoft Azure es un servicio de computación en la nube creado por Microsoft para construir, probar, desplegar y administrar aplicaciones y servicios mediante el uso de sus centros de datos.

      .tarjeta.color-acento-botones.pt-3.infografia-t3(x="74%" y="30%" numero="+")
        .container-infografia-t3
          p.title Oracle <span>Cloud</span>
          p Es un servicio de computación en nube ofrecido por <em>Oracle Corporation</em> que proporciona servidores, almacenamiento, redes, aplicaciones y servicios a través de una red global de centros de datos administrados por <em>Oracle Corporation</em>.

      .tarjeta.color-acento-botones.pt-3.infografia-t3(x="74%" y="5.5%" numero="+")
        .container-infografia-t3
          p.title Salesforce <span>Cloud</span>
          p <em>Salesforce</em> es una empresa estadounidense de <em>software</em> bajo demanda, más conocida por producir un CRM llamado Sales <em>Cloud</em>.

    .position-relative.d-block.d-md-none.mb-5(style="margin-right: -1.5rem; margin-right: -1.5rem; margin-left: -1.5rem;")
      img(src="@/assets/curso/temas/tema3/img-movil-1.svg" style="max-width: 481px").mx-auto.px-4.mb-5.pb-4
      img(src="@/assets/curso/temas/tema3/bg-movil-1.svg" style="position: absolute; z-index: 0; top: 340px")
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4" style="z-index: 1; position: relative;").slider-movil-t3
        .tarjeta.color-acento-botones.pt-3.infografia-t3
          .container-infografia-t3
            p.title Alibaba <span>Cloud</span>
            p Traducción del inglés- <em>Alibaba Cloud</em>-, también conocida como <em>Aliyun</em>, es una empresa de computación en la nube, una subsidiaria de <em>Alibaba Group. Alibaba Cloud</em> proporciona servicios de computación en la nube a empresas en línea y al propio ecosistema de comercio electrónico de <em>Alibaba</em>.

        .tarjeta.color-acento-botones.pt-3.infografia-t3
          .container-infografia-t3
            p.title Amazone web <span>Services</span>
            p <em>Amazon Web Services</em> es una colección de servicios de computación en la nube pública que en conjunto forman una plataforma de computación en la nube, ofrecidas a través de Internet por <em>Amazon.com</em>. Es usado en aplicaciones populares como <em>Dropbox, Foursquare, HootSuite</em>.

        .tarjeta.color-acento-botones.pt-3.infografia-t3
          .container-infografia-t3
            p.title DigitalOcean
            p <em>DigitalOcean</em> es un proveedor estadounidense de servidores virtuales privados, con sede principal en la ciudad de Nueva York. La compañía alquila instalaciones de centros de cómputo existentes, incluyendo sitios como Nueva York, Toronto, Bangalore, Ámsterdam, San Francisco, Londres y Singapur.
        
        .tarjeta.color-acento-botones.pt-3.infografia-t3
          .container-infografia-t3
            p.title Google <span>Cloud</span>
            p <em>Google Cloud</em> es una plataforma que ha reunido todas las aplicaciones de desarrollo <em>web</em> que <em>Google</em> estaba ofreciendo por separado.

        .tarjeta.color-acento-botones.pt-3.infografia-t3
          .container-infografia-t3
            p.title Huawei  <span>Cloud</span>
            p Huawei <em>Mobile Cloud</em> es un sistema de almacenamiento nube o <em>cloud computing</em> desarrollado por Huawei. Fue lanzado el 27 de septiembre de 2017 para los dispositivos Huawei con el sistema operativo HarmonyOS y Android. 

        .tarjeta.color-acento-botones.pt-3.infografia-t3
          .container-infografia-t3
            p.title IBM <span>Cloud</span>
            p IBM <em>cloud computing</em> es un conjunto de servicios de computación en la nube para empresas que ofrece la compañía de tecnología de la información IBM. 

        .tarjeta.color-acento-botones.pt-3.infografia-t3
          .container-infografia-t3
            p.title Microsoft <span>Azure</span>
            p Microsoft Azure es un servicio de computación en la nube creado por Microsoft para construir, probar, desplegar y administrar aplicaciones y servicios mediante el uso de sus centros de datos.

        .tarjeta.color-acento-botones.pt-3.infografia-t3
          .container-infografia-t3
            p.title Oracle <span>Cloud</span>
            p Es un servicio de computación en nube ofrecido por <em>Oracle Corporation</em> que proporciona servidores, almacenamiento, redes, aplicaciones y servicios a través de una red global de centros de datos administrados por <em>Oracle Corporation</em>.

        .tarjeta.color-acento-botones.pt-3.infografia-t3
          .container-infografia-t3
            p.title Salesforce <span>Cloud</span>
            p <em>Salesforce</em> es una empresa estadounidense de <em>software</em> bajo demanda, más conocida por producir un CRM llamado Sales <i>cloud</i>.


    .tarjeta.color-primario.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema3/v.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Public #[i cloud] Services Comparison
              p.mb-0 Conozca más sobre los proveedores de servicios en la nube, consultando la información de la página “Public #[i cloud] Services Comparison”.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://comparecloud.in/" target="_blank")
                span Ir al sitio
                i.fas.fa-link
</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass">
.texto-final-decorador-t3
  background-color: white
  box-shadow: 0 3px 6px #00000030
  padding: 1rem 2rem
  margin-left: -6rem
  @media (max-width: 768px)
    margin-left: 0
    margin-right: 0
.container-card-12
  background-color: white
  box-shadow: 0 3px 6px #00000030
  border-radius: 10px
.img-infografica__card, .img-infografica-b__card
  width: auto
.infografia-t3
  width: 498px
  .container-infografia-t3
    background-color: white
    padding: 1.7rem
    border-bottom-right-radius: 20px
    border-bottom-left-radius: 20px
    box-shadow: 0 3px 6px #00000030
    .title
      font-size: 40px
      span
        background: linear-gradient(170deg, #039BE5, #027FBC)
        font-weight: bold
        color: white
        padding-right: .5rem
        padding-left: .5rem
  @media (max-width: 768px)
    width: auto
    height: 100%
    .container-infografia-t3
      height: 100%
.slider-movil-t3
  .horizontal-scroll__wrapper
    padding: .5rem
    .horizontal-scroll
      align-items: stretch
.container-bg-doble
  display: flex
  align-items: center
  position: relative
  background-color: #F6F6F6
  padding: 2rem
  overflow: hidden
  &::after
    content: ''
    position: absolute
    height: 100%
    width: 70%
    left: 30%
    background: #F59D36
    @media (max-width: 768px)
      height: 200%
      width: 200%
      left: 50%
      top: 50%
      transform: rotate(38deg) translateX(-28%)
  .container-p
    position: relative
    z-index: 1
    background-color: white
    height: 100%
    padding: 1.5rem 2rem
</style>
