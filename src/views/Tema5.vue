<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Proyectos de TI

    .row.justify-content-center.align-items-center.mb-5.bg17           
      .col-lg-4.p-0
        img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema5/1.png', alt='')
      .col-lg-8
        .p-4.j 
          p.mb-0 <span style="color: #1565C0; font-weight: bold">La gestión de proyectos de tecnologías de la información y la comunicación-TI</span>, puede ser abordada desde diversos aspectos de la gestión empresarial según el contexto, pero en cualquiera de los casos, escenarios o contextos, para una adecuada administración de los proyectos de TI se deben considerar los siguientes aspectos.


    .titulo-sexto.color-acento-contenido
      h5 Figura 4.
      span Aspectos contenidos en la administración de proyectos TI
    img.img-a.img-t.mb-5.d-none.d-lg-block(src="@/assets/curso/temas/2.svg", alt="Esquema gráfico que muestra, en secuencia, algunos aspectos clave de la administración de proyectos TI.")          
    img.img-a.img-t.mb-5.d-block.d-lg-none(src="@/assets/curso/temas/3.svg", alt="Esquema gráfico que muestra, en secuencia, algunos aspectos clave de la administración de proyectos TI.") 
    .row.mb-4 
      .col-auto
        .bgt.p-2.brad
          h4.mb-0.text-white Fases (Planeación, Ejecución, Verificación y Mejora)
    
    p.mb-5 <b>Para la buena administración de los proyectos de TI</b>, es importante que se realice una estructuración por fases, teniendo en cuenta la planeación, ejecución, verificación y mejora de actividades del proyecto. <b>Las actividades del proyecto son las acciones que se deben realizar para lograr los objetivos del mismo</b>, estas deben ser planificadas y asignadas a los responsables de ejecución.

    .d-flex.mb-5
      img.img-a.img-t(src="@/assets/curso/temas/tema5/decorador-4.svg").mx-3
      p.me-0.me-md-5.mb-0(style="color: #1565C0; font-weight: bold") En general, las fases de un proyecto se estructuran con base al ciclo Deming o PHVA, por sus siglas en español: Planificar, Hacer, Verificar y Actuar, pero no es camisa de fuerza.
    
    TabsB.color-acento-botones.mb-5.tabs-t5
      .py-4.py-md-5(titulo="Planear" :icono="require('@/assets/curso/temas/tema5/img-2.svg')")
        .row.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4 Planear
            p Es la primera fase o etapa donde se aborda el problema a resolver y se plantean los objetivos y alcances para solucionarlo. Asimismo, se designan las actividades para lograr los objetivos. En esta fase también se deben considerar los recursos necesarios, humanos, económicos, tecnológicos y de información.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema5/img-6.png' style="max-width: 324px")
      .py-4.py-md-5(titulo="Hacer" :icono="require('@/assets/curso/temas/tema5/img-3.svg')")
        .row.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4 Hacer
            p En esta fase se deben poner en marcha o ejecución las actividades de gestión y técnicas que se planearon por realizar. En los proyectos de TI, son aquellas actividades de instalación, implementación o apropiación de tecnologías #[i hardware] y #[i software]. También, pueden involucrar la adquisición de nuevos servicios de TI, como los servicios en la nube o aplicaciones de terceros.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema5/img-7.png' style="max-width: 324px")
      .py-4.py-md-5(titulo="Verificar" :icono="require('@/assets/curso/temas/tema5/img-4.svg')")
        .row.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4 Verificar
            p Consiste en realizar una validación posterior después de un tiempo de haber realizado las implementaciones, con el fin de verificar que se hayan logrado las acciones tomadas de manera adecuada según lo planificado y los objetivos del proyecto.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema5/img-8.png' style="max-width: 324px")
      .py-4.py-md-5(titulo="Actuar" :icono="require('@/assets/curso/temas/tema5/img-5.svg')")
        .row.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4 Actuar
            p En esta última fase se toman las acciones de mejora, con base en los resultados de verificación o evaluación, con el fin de demarcar las acciones correctivas para la mejora.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema5/img-9.png' style="max-width: 324px")

    p Para una adecuada planeación del proyecto, #[b.t1 se debe realizar un cronograma de actividades a ejecutar en cada fase], dicho cronograma debe ser realizado en la fase de planeación. Un ejemplo de este cronograma puede ser:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3. 
          span Cronograma de actividades de proyectos de TI
        .tabla-b.color-acento-contenido.text-center
          .tabla-b
          table
            tr.bgt1
              th(style="font-size: 20px") Fase
              td.text-center.fw-bold(style="font-size: 20px; border-right: 1px solid #e8e8e8;") Objetivo
              td.text-center.fw-bold(style="font-size: 20px; border-right: 1px solid #e8e8e8;") Actividad
              td.text-center.fw-bold(style="font-size: 20px; border-right: 1px solid #e8e8e8;") Fecha Inicio
              td.text-center.fw-bold(style="font-size: 20px;") Fecha Fin
            tr.bgt2
              th.fw-normal PLANEAR
              td(style="border-right: 1px solid #e8e8e8;") Objetivo 1
              td(style="border-right: 1px solid #e8e8e8; padding: 0;")
                tr.d-flex
                  td.text-center.w-100 Actividad 1
                tr.d-flex
                  td(style="border-top: 1px solid #e8e8e8; border-bottom: 1px solid #e8e8e8;").text-center.w-100 Actividad 2
                tr.d-flex
                  td.text-center.w-100 ...
              td(style="border-right: 1px solid #e8e8e8; padding: 0;") 
                tr.d-flex
                  td.text-center.w-100 01/11/2021
                tr.d-flex 
                  td(style=" border-top: 1px solid #e8e8e8; border-bottom: 1px solid #e8e8e8;").text-center.w-100 11/11/2021
                tr.d-flex 
                  td.text-center.w-100 ...
              td(style="padding: 0;") 
                tr.d-flex 
                  td.text-center.w-100 10/11/2021
                tr.d-flex 
                  td(style=" border-top: 1px solid #e8e8e8; border-bottom: 1px solid #e8e8e8;").text-center.w-100 18/11/2021
                tr.d-flex
                  td.text-center.w-100 ...
            tr.bgt3
              th.fw-normal HACER
              td(style="border-right: 1px solid #e8e8e8;") Objetivo 2
              td(style="border-right: 1px solid #e8e8e8; padding: 0;") 
                tr.d-flex
                  td(style="background-color: transparent !important").text-center.w-100 Actividad 1
                tr(style="background-color: transparent !important; border-top: 1px solid #e8e8e8; border-bottom: 1px solid #e8e8e8;").text-center.d-flex
                  td(style="background-color: transparent !important").text-center.w-100 Actividad 2
                tr.d-flex 
                  td(style="background-color: transparent !important").text-center.w-100 ...
              td(style="border-right: 1px solid #e8e8e8; padding: 0;") 
                tr.d-flex
                  td(style="background-color: transparent !important").text-center.w-100 25/11/2021
                tr(style="background-color: transparent !important; border-top: 1px solid #e8e8e8; border-bottom: 1px solid #e8e8e8;").text-center.d-flex
                  td(style="background-color: transparent !important").text-center.w-100 01/12/2021
                tr.d-flex 
                  td(style="background-color: transparent !important").text-center.w-100 ...
              td(style="padding: 0;") 
                tr.d-flex 
                  td(style="background-color: transparent !important").text-center.w-100 30/11/2021
                tr(style="background-color: transparent !important; border-top: 1px solid #e8e8e8; border-bottom: 1px solid #e8e8e8;").text-center.d-flex
                  td(style="background-color: transparent !important").text-center.w-100 15/12/2021
                tr.d-flex
                  td(style="background-color: transparent !important").text-center.w-100 ...
            tr.bgt2
              th.fw-normal VERIFICAR
              td(style="border-right: 1px solid #e8e8e8;" rowspan="2") Objetivo 3
              td(style="border-right: 1px solid #e8e8e8; padding: 0;")
                tr.d-flex
                  td.text-center.w-100 Actividad 1
                tr.d-flex 
                  td(style=" border-top: 1px solid #e8e8e8; border-bottom: 1px solid #e8e8e8;").text-center.w-100 Actividad 2
                tr.d-flex 
                  td.text-center.w-100 ...
              td(style="border-right: 1px solid #e8e8e8; padding: 0;") 
                tr.d-flex
                  td.text-center.w-100 16/12/2021
                tr.d-flex 
                  td(style=" border-top: 1px solid #e8e8e8; border-bottom: 1px solid #e8e8e8;").text-center.w-100 21/12/2021
                tr.d-flex 
                  td.text-center.w-100 ...
              td(style="padding: 0;") 
                tr.d-flex 
                  td.text-center.w-100 20/12/2021
                tr.d-flex 
                  td(style=" border-top: 1px solid #e8e8e8; border-bottom: 1px solid #e8e8e8;").text-center.w-100 23/12/2021
                tr.d-flex
                  td.text-center.w-100 ...
            tr.bgt3
              th.fw-normal ACTUAR
              td(style="border-right: 1px solid #e8e8e8; padding: 0;")
                tr.d-flex
                  td(style="background-color: transparent").w-100 Actividad 1
                tr.d-flex(style="background-color: transparent !important; border-top: 1px solid #e8e8e8; border-bottom: 1px solid #e8e8e8;")
                  td(style="background-color: transparent").w-100 Actividad 2
                tr.d-flex 
                  td(style="background-color: transparent").w-100 ...
              td(style="border-right: 1px solid #e8e8e8; padding: 0;") 
                tr.d-flex
                  td(style="background-color: transparent").w-100 25/12/2021
                tr.d-flex(style="background-color: transparent !important; border-top: 1px solid #e8e8e8; border-bottom: 1px solid #e8e8e8;")
                  td(style="background-color: transparent").w-100 29/12/2021
                tr.d-flex 
                  td(style="background-color: transparent").w-100 ...
              td(style="padding: 0;") 
                tr.d-flex 
                  td(style="background-color: transparent").w-100 28/12/2021
                tr.d-flex(style="background-color: transparent !important; border-top: 1px solid #e8e8e8; border-bottom: 1px solid #e8e8e8;")
                  td(style="background-color: transparent").w-100 31/12/2021
                tr.d-flex
                  td(style="background-color: transparent").w-100 ...

    .row.mb-4 
      .col-auto
        .bgt.p-2.brad
          h4.mb-0.text-white Criterios para la determinación de recursos
    p Los recursos de un proyecto de TI pueden estar agrupados en recursos humanos, económicos o financieros, tecnológicos, y de información.

    .d-flex.mb-5
      img.img-a.img-t(src="@/assets/curso/temas/tema5/decorador-4.svg").mx-3
      p.me-0.me-md-5.mb-0(style="color: #1565C0; font-weight: bold") En la gestión de proyectos de TI, y en especial en los proyectos de servicios en la nube, es importante la determinación de recursos necesarios, por lo que se deben considerar los siguientes criterios:
    
    .titulo-sexto.color-acento-contenido
        h5 Tabla 3. 
        span Cronograma de actividades de proyectos de TI
    .tabla-b.color-acento-contenido.text-center.mb-5
      .tabla-b
      table
        tr.bgt1
          th(style="font-size: 20px") Recurso
          td.text-center.fw-bold(style="font-size: 20px;") Criterio
        tr.bgt2
          th Humano
          td Conocimiento: profesión y especialidad que se requiere según el proyecto de TI (especialista, profesional, tecnólogo, técnico, etc.)
            br
            br
            | Experiencia: la experiencia que se requiere para tener mayor seguridad y confianza para la ejecución de las actividades del proyecto.
        tr.bgt3
          th Económico y finaciero
          td Costos de administración y seguimiento: se deben considerar los costos de personal, viáticos, maquinaria y equipo, vehículos, transporte, estudios y auditorías, materiales y suministros.
            br
            br
            | Costos Directos: considerar salarios, viáticos, mano de obra, materiales y suministros, transferencias, estudios y auditorías, consultorías, capacitación y divulgación, 
            br
            br
            | Costos concurrentes: considerar salarios, viáticos, servicios generales, insumos y materiales, mantenimiento, capacitación y concientización.
            br
            br
            | Imprevistos: rubros para afrontar posibles sucesos adversos.
        tr.bgt2
          th Tecnólogico
          td Aplicaciones: se deben considerar los requisitos de aplicaciones o <em>software</em>.
            br
            br
            | Usuarios: según la cantidad de usuarios actual y provista se deben asignar recursos tecnológicos.
            br
            br
            | Procesamiento: considerar la capacidad de procesamiento requerida para aplicaciones, según el uso y cantidad de usuarios concurrentes.
            br
            br
            | Memoria: considerar la capacidad de memoria para el procesamiento requerida para aplicaciones, según el uso y cantidad de usuarios concurrentes.
            br
            br
            | Almacenamiento: establecer la capacidad de almacenamiento requerida para aplicaciones y datos, según la información procesada, el uso y cantidad de usuarios concurrentes.
            br
            br
            | Conectividad: determinar la capacidad de conectividad requerida para aplicaciones, según el uso y cantidad de usuarios concurrentes.

        tr.bgt3
          th Información
          td Datos: considerar la información y datos necesaria para el correcto funcionamiento de las aplicaciones y una adecuada ejecución de los procesos por parte de los usuarios.
        tr.bgt2
          th Otros
          td Instalaciones y equipos: se debe considerar los recursos de instalaciones, maquinaria, dispositivos y equipos técnicos y tecnológicos que se requieren.

    
    .row.mb-4 
      .col-auto
        .bgt.p-2.brad
          h4.mb-0.text-white Criterios para la planeación de actividades
    
    p.mb-5 #[b.t1 Dentro de los proyectos de TI se establecen las actividades que están a un nivel más bajo y las cuales se crean en función del cumplimiento de los objetivos específicos del proyecto]. Para la planeación de actividades se deben considerar los siguientes criterios:

    .row.bg18.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .d-flex.flex-wrap.mb-5(style="position: relative; z-index: 1;")
          .col-12.col-md-6.d-flex.pe-0.pe-md-2.mb-4.mb-md-0
            .bg12.p-4.brad.h-100.text-white
              img.img-t(src="@/assets/curso/temas/tema5/img-10.svg").mb-4
              h4 Recursos disponibles
              p Se debe tener en cuenta los recursos que se disponen (humanos, económicos, tecnológicos, e información), de esta manera se pueden planear la realización de las actividades de manera objetiva.
              img(src="@/assets/curso/temas/tema2/decorador-1.svg" style="max-width: 86px").ms-auto
          .col-12.col-md-6.d-flex.ps-0.ps-md-2
            .bg13.p-4.brad.h-100.text-white
              img.img-t(src="@/assets/curso/temas/tema5/img-11.svg").mb-4
              h4 Tiempo estimado de realización
              p Establecer con base en los recursos disponibles, especialmente los humanos, el conocimiento y el esfuerzo que se requiere para realizar la actividad, el periodo de tiempo que tomaría realizar cada actividad del proyecto.
              img(src="@/assets/curso/temas/tema2/decorador-1.svg" style="max-width: 86px").ms-auto

        p La planeación de las actividades debe considerar también los siguientes atributos dentro de un cronograma de actividades:

      .row.justify-content-start.mb-4           
        .col-lg-3.my-3
          .bg16.p-4.h-100.brad
            .row.justify-content-center           
              .col-lg-auto        
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/tema5/11.png', alt='')
              .col.j
                p.mb-0 Nombre de la actividad

        .col-lg-3.my-3
          .bg16.p-4.h-100.brad
            .row.justify-content-center           
              .col-lg-auto        
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/tema5/2.png', alt='')
              .col.j
                p.mb-0 Descripción de la actividad

        .col-lg-3.my-3
          .bg16.p-4.h-100.brad
            .row.justify-content-center           
              .col-lg-auto        
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/tema5/3.png', alt='')
              .col.j
                p.mb-0 Responsable de la realización o ejecución

        .col-lg-3.my-3
          .bg16.p-4.h-100.brad
            .row.justify-content-center           
              .col-lg-auto        
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/tema5/4.png', alt='')
              .col.j
                p.mb-0 Objetivo específico relacionado

        .col-lg-3.my-3
          .bg16.p-4.h-100.brad
            .row.justify-content-center           
              .col-lg-auto        
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/tema5/5.png', alt='')
              .col.j
                p.mb-0 Fecha de inicio

        .col-lg-3.my-3
          .bg16.p-4.h-100.brad
            .row.justify-content-center           
              .col-lg-auto        
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/tema5/6.png', alt='')
              .col.j
                p.mb-0 Fecha de finalización

        .col-lg-3.my-3
          .bg16.p-4.h-100.brad
            .row.justify-content-center           
              .col-lg-auto        
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/tema5/7.png', alt='')
              .col.j
                p.mb-0 Porcentaje de avance

    .row.mb-4 
      .col-auto
        .bgt.p-2.brad
          h4.mb-0.text-white Aspectos legales
    p <b>En la gestión de proyectos de TI</b>, se deben tener en cuenta los aspectos legales según el contexto, para lo cual se recomienda tener claro una matriz de cumplimiento legal, en donde se pueda identificar dentro de cada proyecto qué requisitos legales se deben cumplir, esto con el fin de evitar incumplimientos que puedan generar impactos adversos de tipo económico, operativo o reputacional.

    p Es importante que se validen los siguientes aspectos legales:
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-7    
        LineaTiempoD.color-acento-botones.acordeon-t-5
          div(numero="1" titulo="Contexto jurídico")
            p El contexto jurídico, según la constitución política, corresponde con las leyes, decretos, entre otros lineamientos estatales del gobierno nacional y gobiernos locales, los cuales pueden ser prohibitivos o permisivos.
          div(numero="2" titulo="Validez legal")
            p La validez legal, refiere al cómo se realiza el procedimiento legal, y se lleva a su realización. 
          div(numero="3" titulo="Contratación de servicios")
            p En la contratación de servicio, se deben revisar las condiciones y acuerdos de nivel de servicio con proveedores, incluyendo el soporte, de tal manera que se cumplan con los requerimientos específicos del proyecto.
          div(numero="4" titulo="Protección de datos")
            p Protección de datos personales, es de vital importancia que los prestadores de servicios cuenten con las regulaciones de protección de datos personales y que el procesamiento y almacenamiento de datos e información se dé en países que cuenten con leyes o regulaciones sobre la protección de datos personales.
      .col-lg-5
        img.img-a.img-t(src="@/assets/curso/temas/tema5/12.png")

    .row.mb-4 
      .col-auto
        .bgt.p-2.brad
          h4.mb-0.text-white Riesgos

    p Un riesgo se define como aquello que puede generar una situación adversa a una meta, objetivo, propósito, proyecto, proceso o empresa. Dentro de la gestión de proyectos de TI, se deben gestionar los riesgos asociados a los mismos, para ello es importante que se identifiquen las posibles amenazas que generan riesgos al proyecto, de tal manera que se pueda establecer la probabilidad de ocurrencia, el impacto generado, para finalmente determinar el nivel de cada riesgo del proyecto, y así poder realizar las acciones de mitigación o tratamiento de riesgos del proyecto.

    .row.justify-content-center.align-items-center      
      .col-lg-5
        img.img-a.img-t(src="@/assets/curso/temas/tema5/13.png")
      .col-lg-7
        .bg17.p-4.mb-4
          p.mb-0 Las organizaciones establecen o utilizan diversos métodos y escalas de valoración de riesgos según su contexto y gustos, ya que no existe una única metodología de riesgos. Se recomienda investigar sobre metodologías de riesgo, entre ellas ISO/IEC 31000, COSO, Magerit v3.    
        p En cualquier caso, para #[b.t1 la determinación de riesgos de los proyectos de TI], se puede realizar siguiendo la siguiente fórmula:
        .bgt.p-4.brad
          .row.justify-content-center.align-items-center          
            .col-lg-auto 
              img.img-a.img-t(src="@/assets/curso/temas/tema5/14.png")
            .col
              h4.text-white.mb-0 Riesgo, R = Probabilidad, P. multiplicado por el Impacto, I. = R = P x I         
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
.container-bg-doble-50
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
    width: 50%
    left: 50%
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
    width: 100%
    text-align: center
    padding: 1.5rem 2rem
.container-box-2-5
  background: linear-gradient(-15deg, #2EC49F, #2B3990)
  padding: 2rem
  border-radius: 10px
  display: flex
  flex-wrap: wrap
  align-content: space-between
  p
    color: white
.container-texto-offset-1
  background-color: white
  padding: 1rem 2.1rem
  width: 130%
  margin-left: -30%
  span
    font-weight: bold
    color: #1565C0
  @media (max-width: 768px)
    margin-left: 0
    width: 100%
.slyde-t5
  .slyder-f__slyde
    padding: .5rem
  .horizontal-scroll
    align-items: stretch !important
.edit-cajon-2
  background-color: #FFFAD8 !important
  &.cajon.color-primario:before
    background-color: #FFCA28
.acordeon-t-5
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
.tabs-t5
  .tabs-b__tab__icon
    width: auto
</style>
