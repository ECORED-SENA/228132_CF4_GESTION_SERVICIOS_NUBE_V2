<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Estrategias de migración
    .row.bg4.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center.mb-5           
          .col-lg-4
            img(src="@/assets/curso/temas/tema1/img-1.png")
          .col-lg-8
            .row.justify-content-center.align-items-center.mb-5           
              .col-lg-auto
                img.img-a.img-t(src="@/assets/curso/temas/tema1/1.png")
              .col
                p.ps-3.fw-bold.mb-0(style="color: #1565C0") La migración de información a la nube es un paso obligado para particulares y para empresas que se encuentren dotadas a nivel de infraestructura, con equipos de servidores, aplicaciones, redes, etc. Todo esto implica un largo, y a veces complejo proceso de migración.
            .cajon.color-acento-botones.p-4.ms-3.edit-cajon
              p.mb-0 <b>Este proceso de migración</b>, consiste en una serie de actividades para lograr una identificación, planificación, ejecución y evaluación de migración de servicios de TI locales a servicios en la nube dentro de una organización.

        separador
        .titulo-segundo.color-acento-contenido
          h2#t_1_1 1.1 Concepto
        
        p Todo proyecto de implementación de servicios en la nube debe estar orientado o dirigido por una estrategia definida de migración, la cual varía según múltiples factores, por lo que no hay una única estrategia para una cartera de productos TI.

        p En relación con las estrategias de migración, tenga presente:
      
        .row.justify-content-center.mb-4           
          .col-lg-4.my-3
            .bg5.p-4.h-100.brad
              img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/2.svg', alt='')
              h4 Beneficios
              p.mb-0 Una de las principales ventajas de la infraestructura #[i cloud] es permitir combinar servicios que consoliden las necesidades de la organización.

          .col-lg-4.my-3
            .bg5.p-4.h-100.brad
              img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/3.svg', alt='')
              h4 Seis erres
              p.mb-0 En el #[i cloud computing] se suele utilizar la fórmula de "las seis erres" para identificar distintas estrategias de migración a aplicar.

          .col-lg-4.my-3
            .bg5.p-4.h-100.brad
              img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/4.svg', alt='')
              h4 Especificidad
              p.mb-0 Las estrategias de migración, se aplicarán en función de las características del proyecto TI. 
        p.mb-5 El siguiente esquema infográfico presenta, a grandes rasgos, las generalidades más destacadas del proceso de migración de información a la nube:
        .titulo-sexto.color-acento-contenido
          h5 Figura 1. 
          span Migración a la nube
        img(src="@/assets/curso/temas/tema1/img-3.svg", alt="Mapa de conceptos que expone de manera amplia, la identificación de distintas estrategias de migración, en determinado proyecto TI.").mb-5

        p.mb-5 En relación con las seis erres, la siguiente figura las presenta, de manera simplificada:
        .titulo-sexto.color-acento-contenido
          h5 Figura 2. 
          span Estrategias de migración: las seis erres 
        img.d-none.d-lg-block(src="@/assets/curso/temas/tema1/img-5.svg", alt="Esquema que enuncia las seis erres de dicha técnica de migración: Re-hospedaje, Re-plataforma, Re-compra, Retirada, Retención, Re-diseño.")
        img.d-block.d-lg-none.img-a.img-t(src="@/assets/curso/temas/1.svg", alt="Esquema que enuncia las seis erres de dicha técnica de migración: Re-hospedaje, Re-plataforma, Re-compra, Retirada, Retención, Re-diseño.")        
    separador
    .titulo-segundo.color-acento-contenido.mb-5
      h2#t_1_2 1.2 Tipos y características
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-4
        img.img-a.img-t(src="@/assets/curso/temas/tema1/img-6.png")

      .col-lg-8
        p La técnica de las seis erres permite la identificación de estrategias para la migración de información a la nube. Estas estrategias corresponden con unos tipos y características particulares, de acuerdo con los costes que implica:
        .d-flex.flex-wrap.text-center
          .col-12.col-lg-6.col-xl-3.p-2
            .bg5.p-4.brad.h-100
              img.img-a.img-t(src="@/assets/curso/temas/tema1/img-card-1.svg")
              p.mb-0 El traslado
          .col-12.col-lg-6.col-xl-3.p-2
            .bg5.p-4.brad.h-100
              img.img-a.img-t(src="@/assets/curso/temas/tema1/img-card-2.svg")
              p.mb-0 Las necesidades de la organización
          .col-12.col-lg-6.col-xl-3.p-2
            .bg5.p-4.brad.h-100
              img.img-a.img-t(src="@/assets/curso/temas/tema1/img-card-3.svg")
              p.mb-0 El tiempo permitido o posible para llevarlo a cabo
          .col-12.col-lg-6.col-xl-3.p-2
            .bg5.p-4.brad.h-100
              img.img-a.img-t(src="@/assets/curso/temas/tema1/img-card-4.svg")
              p.mb-0 La misma estrategia de negocio
    p La técnica de las seis erres permite la identificación de estrategias para la migración de información a la nube. Estas estrategias corresponden con unos tipos y características particulares, de acuerdo con los costes, que implica:

    h4.mb-5.t1 Las seis erres, se pueden explicar y definir así:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        LineaTiempoD.color-acento-botones.acordeon-t-1
          .container-acordeon-vertical(numero="1" titulo="<em>(R)ehosting</em>")
            p.mb-3 Refiere a la estrategia de <em>lift-and-shift</em>, en donde se trasladan las aplicaciones a la nube sin rediseño de ningún tipo (a veces de forma literal), podría decirse que como una copia <em>bit a bit</em>. 
            .d-flex.mb-4
              img(src="@/assets/curso/temas/tema1/decorador-3.svg" style="max-width: 44px").mx-4
              p.ps-3.fw-bold.mb-0 De esta forma no hay grandes beneficios a corto plazo, sin embargo, posibilita una migración relativamente rápida (hay automatizaciones al respecto), y se espera que un posible rediseño posterior sea más sencillo una vez las aplicaciones se encuentren ya en la nube.
            img(src="@/assets/curso/temas/tema1/img-acordeon-1.svg" style="max-width: 580px").px-2.mx-auto
          .container-acordeon-vertical(numero="2" titulo="<em>(R)eplatforming</em>")
            p.mb-3 Corresponde con el escenario <em>lift-tinker-and-shift</em>, es decir, el medio del artículo anterior, donde no se cambia de forma fundamental la arquitectura de la aplicación, pero se introduce alguna pequeña mejora.
            img(src="@/assets/curso/temas/tema1/img-acordeon-2.svg" style="max-width: 553px").px-2.mx-auto
          .container-acordeon-vertical(numero="3" titulo="<em>(R)epurchasing</em>")
            p Es una estrategia totalmente diferente, pues ya no se trata de migrar la aplicación existente, sino de adoptar una nueva aplicación que se encuentre en la nube. Por ejemplo, podríamos abandonar nuestro CRM legado y migrar hacia <em>Salesforce</em>. Si bien es cierto, no existe una migración de aplicación propiamente dicha, son necesarias las acciones como migrar datos, rediseñar interfaces, etc.
            img(src="@/assets/curso/temas/tema1/img-acordeon-3.svg" style="max-width: 514px").px-2.mx-auto
          .container-acordeon-vertical(numero="4" titulo="<em>(R)efactoring/(R)-arquitecting</em>")
            p.mb-3 Esta estrategia consiste en hacer un rediseño profundo de la aplicación que sea realmente #[i cloud] nativa. Se considera la llamada “reingeniería” (cambios profundos en la aplicación), como se indica, semejante al desarrollo de <em>cloud</em> nativo, que consiste en la construcción desde cero.
            img(src="@/assets/curso/temas/tema1/img-acordeon-4.svg" style="max-width: 514px").px-2.mx-auto
          .container-acordeon-vertical(numero="5" titulo="<em>(R)etire</em>")
            p Esta estrategia, realmente no se trata de una migración, sino más bien de aprovechar el esfuerzo y análisis de la realidad de sistemas disponibles para prescindir de alguno que realmente no aporte valor o que su funcionalidad permite ser absorbida por otro. Es idóneo para simplificar el mapa de sistemas, permitiendo ahorro en el costo, aporte en agilidad y mayor facilidad en la gestión.
            img(src="@/assets/curso/temas/tema1/img-acordeon-5.svg" style="max-width: 553px").px-2.mx-auto
          .container-acordeon-vertical(numero="6" titulo="<em>(R)etain</em>")
            p En realidad es una no migración, es decir, es una decisión consciente de no migrar una aplicación a la nube.
            img(src="@/assets/curso/temas/tema1/img-acordeon-6.svg" style="max-width: 553px").px-2.mx-auto
      .col-lg-3
        img(src="@/assets/curso/temas/tema1/img-7.svg")


    p.mb-5 Con el fin de llevar a cabo una mayor precisión del concepto, así como un breve resumen de las seis erres, se presenta la siguiente tabla, la cual incorpora las características de cada una de estas:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1. 
      span Estrategias de migración
    .tabla-b.color-acento-contenido
      .tabla-b
      table
        tr.bgt1
          td.text-center.fw-bold Estrategia
          td.text-center.fw-bold Definición
        tr.bgt2
          th.fw-normal Re-hospedaje<br> <em>(“lift and shift”)</em>
          td.text-start Esta estrategia es una de las más comunes y sencilla de implementar, aunque también se considera que presenta más probabilidades de generar problemas, incrementar los costes y alinear los #[i stakeholders] clave. El re-hospedaje, consiste en replicar un sistema existente en una infraestructura #[i cloud].
        tr.bgt3
          th.fw-normal Re-plataforma
          td.text-start Estrategia que implica análisis de negocio para identificación de procesos y servicios que puedan ser excluidos de la migración, requiere un conocimiento de la arquitectura originaria y procesos para la toma de decisiones.
        tr.bgt2
          th.fw-normal Re-compra
          td.text-start Estrategia asociada a la recompra de versiones <em>SaaS</em> de una aplicación utilizada por la organización, por ejemplo:  <em>Microsoft Exchange</em> migrar a <em>Office 365</em> obteniendo las funcionalidades y beneficios de un producto novedoso y seguro. <br><br>Este modelo requiere de una importante justificación para ser presentado ante la alta dirección, ya que es común escuchar que no se debe comprar algo con lo que ya se cuenta, de ahí la importancia de presentar los beneficios y bondades de la nueva adquisición. 
        tr.bgt3
          th.fw-normal Re-diseño
          td.text-start Estrategia de mayor complejidad y de mayor costo, ya que implica re arquitecturizar sistemas de información y procesos, buscando aprovechar los beneficios de la tecnología #[i cloud]. Considera que puede requerir diseñar la infraestructura desde cero, pero esto se puede ver beneficiado con una optimización de recursos, y evitar gastos innecesarios en la operación de la infraestructura <em>cloud</em>.
        tr.bgt2
          th.fw-normal Retención
          td.text-start Esta estrategia considera la posibilidad de no tener que migrar hacia la nube toda una infraestructura. Ya sea por costos, restricciones de licenciamiento o compatibilidad. Para este caso, se conserva la aplicación o algún componente de la misma en el entorno original, identificando que, en algunas ocasiones, no todo puede ser llevado hacia la nube.
        tr.bgt3
          th.fw-normal Retirada 
          td.text-start Busca retirar de la arquitectura #[i cloud], aquellos componentes que ya no se utilizan y que generan carga o costo operativo.



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.container-bg-t1
  display: flex
  flex-wrap: wrap
  margin-right: -3rem
@media (max-width: 768px)
  .container-bg-t1
    margin-right: 0
.edit-cajon
  background-color: #B6EADD !important
  &.cajon.color-acento-botones:before
    background-color: #2EC49F
.containe-bg-2
  margin-top: -14rem
  padding-top: 15rem
  margin-left: -3rem
  margin-right: -3rem
  padding-right: 3rem
  padding-left: 3rem
  background-repeat: no-repeat
.edit-bloque-texto-1
  background-color: #F6F6F6 !important
  &::before
    background: linear-gradient(180deg, #039BE5, #027FBC)
    left: 40%
.img-offset-1
  margin-top: -2rem
.container-texto-offset-1
  background-color: white
  padding: 1rem 2.1rem
  width: 112%
  margin-left: -12%
  span
    font-weight: bold
    color: #1565C0
.container-card
  background-color: #FFFFFF
  box-shadow: 0 3px 6px #00000030
  border-radius: 10px
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-content: flex-start
  text-align: center
  height: 100%
  p
    font-size: 15px
    padding-right: .3rem
    padding-left: .3rem
    padding-bottom: .3rem
  img
    margin-top: 1rem
    margin-bottom: 1rem
.acordeon-t-1
  .linea-tiempo-d__item
    .linea-tiempo-d__item__content__title
      background-color: #E5E5E5
      border-radius: 5px
  .linea-tiempo-d__item--selected
    .linea-tiempo-d__item__content__title
      background-color: #F6F6F6
  .linea-tiempo-d__item__number
    span
      color: black
</style>
