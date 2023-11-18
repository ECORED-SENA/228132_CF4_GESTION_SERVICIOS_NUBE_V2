<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Contratación

    .position-relative
      img(src="@/assets/curso/temas/tema2/img-1.png").d-none.d-md-flex
      img(src="@/assets/curso/temas/tema2/img-1-movil.png").d-flex.d-md-none
      .container-text-introduccion.col-11.mx-auto
        p.mb-0 La contratación se da por la necesidad de contar con acuerdos (en términos de servicios) entre el cliente y el proveedor que entrega el servicio. Para lograr esto, al momento de planear la migración de servicios de computación tradicional a computación en la nube, las organizaciones #[b.tb deben responderse una serie de preguntas que ayudarán a definir los objetivos del nivel del servicio]. Tales interrogantes son:

    .row.justify-content-center.mb-4           
      .col-lg-4.my-3
        .bg5.p-4.h-100.brad
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/1.svg', alt='')
          p.mb-0 ¿Cuáles y en qué cantidad son los servicios a contratar?

      .col-lg-4.my-3
        .bg5.p-4.h-100.brad
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/2.svg', alt='')
          p.mb-0 ¿Qué nivel de soporte y respuesta a incidentes esperan por parte del proveedor?

      .col-lg-4.my-3
        .bg5.p-4.h-100.brad
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/3.svg', alt='')
          p.mb-0 ¿Cómo la organización puede validar la calidad en el servicio ofrecido por el proveedor?

    p #[b La respuesta a estas preguntas es lo que permite determinar los objetivos del acuerdo de nivel de servicios]. A partir de ello, se establece un contrato entre el proveedor (externo o interno) y el cliente. Así mismo, se establecen los servicios y las características de los mismos, según lo que el cliente espera de su proveedor.
    h5.mb-5 Un acuerdo de nivel de servicio puede contar, entre otras, con las siguientes características:

    .d-flex.flex-wrap(style="position: relative")
      .col-12.col-lg-7.mx-auto.my-3
        img(src="@/assets/curso/temas/tema2/img-2.png" style="max-width: 681px; position: relative")
      .col-12.col-lg-4.mx-auto.container-slide-f.my-3
        SlyderF.justify-content-strtch(columnas="col-12")
          .tarjeta.color-acento-botones.m-3.p-4.h-100(style="background-color: #D9E7F5; box-shadow: 0 3px 6px #00000030")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/img-carousel-1.svg' alt='AvatarTop')
            p.text-center Una definición de los servicios que el proveedor de servicios proporcionará al cliente.

          .tarjeta.color-acento-botones.m-3.p-4.h-100(style="background-color: #D9E7F5; box-shadow: 0 3px 6px #00000030")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/img-carousel-2.svg' alt='AvatarTop')
            p.text-center Métodos para medir el rendimiento (indicadores de medición).

          .tarjeta.color-acento-botones.m-3.p-4.h-100(style="background-color: #D9E7F5; box-shadow: 0 3px 6px #00000030")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/img-carousel-3.svg' alt='AvatarTop')
            p.text-center Protocolos para administrar problemas (métodos y canales de atención y soporte a usuarios, tiempos de respuesta y solución de incidentes).
          .tarjeta.color-acento-botones.m-3.p-4.h-100(style="background-color: #D9E7F5; box-shadow: 0 3px 6px #00000030")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/img-carousel-4.svg' alt='AvatarTop')
            p.text-center Una lista de tareas de cliente (responsabilidades).

          .tarjeta.color-acento-botones.m-3.p-4.h-100(style="background-color: #D9E7F5; box-shadow: 0 3px 6px #00000030")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/img-carousel-5.svg' alt='AvatarTop')
            p.text-center Garantías que debe respetar el proveedor de servicios.

          .tarjeta.color-acento-botones.m-3.p-4.h-100(style="background-color: #D9E7F5; box-shadow: 0 3px 6px #00000030")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/img-carousel-6.svg' alt='AvatarTop')
            p.text-center Procedimientos necesarios para la recuperación ante desastres (continuidad del negocio).

          .tarjeta.color-acento-botones.m-3.p-4.h-100(style="background-color: #D9E7F5; box-shadow: 0 3px 6px #00000030")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/img-carousel-7.svg' alt='AvatarTop')
            p.text-center Proceso y directivas con respecto a la terminación del contrato.
    

    p.mt-5 Este manejo de las características del servicio, permite:
    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0
            h4 Optimización de costos
            p Se alcanzará una optimización de asignación y costos de recursos, en cuanto al tratamiento de la información, pues no se requiere una inversión en infraestructura, ya que es utilizada la del prestador del servicio.       
          .col-lg-3
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/4.png', alt='')
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0
            h4 Garantía
            p A la vez, se asegura una garantía en dicha prestación, en cuanto a fallas o exceso de recursos, o los costos que pueden acarrear situaciones como estas.    
          .col-lg-3
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/5.png', alt='')
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0
            h4 Acceso
            p Como sabemos, la gestión de la información se encuentra de manera virtual, en manos del cliente o la organización contratante de servicios en la nube, que puede ser accedida a través de internet, mediante bases de datos, correo electrónico, nóminas o gestión de recursos humanos.       
          .col-lg-3
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/6.png', alt='')
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0
            h4 Mantenimiento y soporte
            p Sin embargo, puede que los datos no estén necesariamente en manos del contratista, dependiendo del modelo utilizado, por lo que el mantenimiento y soporte físico de la información, los procesos y las comunicaciones, pueden regularse por medio de terceros.     
          .col-lg-3
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/7.png', alt='')   
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0
            h4 Deslocalización
            p Quien regula el servicio, puede hacerlo desde cualquier parte del mundo, a través de recursos como prácticas de deslocalización, compartición de recursos y movilidad. Si es el caso, con contratos adicionales AT&T &TA T 6.      
          .col-lg-3
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/8.png', alt='')
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0
            h4 Innovación y usanza 
            p Es decir, #[i cloud computing], puede usar tecnologías de la información y las comunicaciones, mediante técnicas ya existentes, pero de forma innovadora y a una nueva escala.      
          .col-lg-3
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/9.png', alt='')                                                         
    p #[mark.m1 No obstante, la transformación de negocio puede hacer que las personas u organizaciones contratantes del servicio, desconozcan la localización precisa de sus datos, o no tengan control directo sobre el acceso a estos, el borrado o la portabilidad. En relación con este aspecto, en Colombia, la legislación vigente a nivel de regulaciones más responsables, aún está en diseño.]

    .row.justify-content-center.align-items-center.mb-4       
      .col-lg-7.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/10.png', alt='')                                                         

      .col-lg-5.my-3
        .row.justify-content-center.align-items-start.bg6.p-3      
          .col-lg-auto.my-3      
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/11.png', alt='')
          .col.my-3                                 
            p.mb-0 En virtud de estas regulaciones, en el orden nacional e internacional, es necesario que las partes tengan claro cuáles son las condiciones, acuerdos o reglas, para la prestación y consumo de productos y/o servicios, basados en las políticas y documentos contractuales establecidos para tal fin, en el orden de la prestación de servicios de #[i cloud computing]. 

    Separador

    .titulo-segundo.color-acento-contenido.mb-5
      h2#t_2_1 2.1 Concepto
    .row.bg7.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4    
        .row.justify-content-center.align-items-center.mb-5           
          .col-lg-5
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/12.png', alt='')
          .col-lg-7
            .bloque-texto-c.color-secundario.p-4.bg-gradient-1
              img(src="@/assets/curso/temas/tema2/decorador-bg-1.svg")
              p Se define contratación como <b>“Pacto o convenio, oral o escrito, entre partes que se obligan sobre materia o cosa determinada, y a cuyo cumplimiento pueden ser compelidas”</b>.
              span Según la RAE (Real Academia Española)
        
            .cajon.color-primario.p-4.mb-4.edit-cajon-2
              p La contratación de servicios de <em><b>cloud computing</b></em> se lleva a cabo mediante un contrato de prestación de servicios, que se define como el contrato mediante el cual una persona, normalmente un especialista, en algún área, se obliga con respecto a otra a realizar una serie de servicios a cambio de un precio. <b>Es importante señalar que el pago del contrato está dirigido al cumplimiento de metas, horas, objetivos, proyectos, etc.</b> Se trata de un contrato oneroso, y  la contraprestación de pago es en dinero o especie, la cual será pagada proporcionalmente conforme a las actividades realizadas.

        p.mb-5 Un contrato oneroso, se define como un tipo de contrato en que ambas partes tienen obligaciones y ventajas económicas recíprocas. Entre los más comunes están:
        .row.justify-content-center
          .col-6.col-md-4.col-xl-2.px-2
            .bg5.brad.p-4
              img(src="@/assets/curso/temas/tema2/img-card-12-1.svg" style="max-width: 72px").mx-auto.mb-3
              p.mb-0.text-center Compraventa
          .col-6.col-md-4.col-xl-2.px-2.mb-4
            .bg5.brad.p-4
              img(src="@/assets/curso/temas/tema2/img-card-12-2.svg" style="max-width: 72px").mx-auto.mb-3
              p.mb-0.text-center Arrendamiento
          .col-6.col-md-4.col-xl-2.px-2.mb-4
            .bg5.brad.p-4
              img(src="@/assets/curso/temas/tema2/img-card-12-3.svg" style="max-width: 72px").mx-auto.mb-3
              p.mb-0.text-center Sociedad
          .col-6.col-md-4.col-xl-2.px-2.mb-4
            .bg5.brad.p-4
              img(src="@/assets/curso/temas/tema2/img-card-12-4.svg" style="max-width: 72px").mx-auto.mb-3
              p.mb-0.text-center Permuta
          .col-6.col-md-4.col-xl-2.px-2.mb-4
            .bg5.brad.p-4
              img(src="@/assets/curso/temas/tema2/img-card-12-5.svg" style="max-width: 72px").mx-auto.mb-3
              p.mb-0.text-center Transporte
          .col-6.col-md-4.col-xl-2.px-2.mb-4
            .bg5.brad.p-4
              img(src="@/assets/curso/temas/tema2/img-card-12-6.svg" style="max-width: 72px").mx-auto.mb-3
              p.mb-0.text-center Contrato de trabajo

    Separador

    .titulo-segundo.color-acento-contenido.mb-5
      h2#t_2_2 2.2 Tipos de contrato

    p Dado que la contratación de servicios de #[i cloud computing] se realiza a través del modelo contractual de prestación de servicios, resulta imprescindible que ese contrato incorpore entre sus cláusulas las garantías a las que obliga la Ley de Protección de Datos.

    h4.t1 Las siguientes, son dos elementos normativos de ley que orientan la contratación:
    .row.justify-content-center.mb-4
      .col-12.col-lg-6.my-3
        .bg12.brad.h-100.p-4.text-white
          img.img-t(src="@/assets/curso/temas/tema2/img-6.svg").mb-4
          h4 Ley de Protección de Datos
          p Ley 1581 de 2012, la presente ley tiene por objeto desarrollar el derecho constitucional que tienen todas las personas a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bases de datos o archivos, y los demás derechos, libertades y garantías constitucionales a que se refiere el artículo 15 de la Constitución Política; así como el derecho a la información consagrado en el artículo 20 de la misma.
          img(src="@/assets/curso/temas/tema2/decorador-1.svg" style="max-width: 86px").ms-auto
      .col-12.col-lg-6.my-3
        .bg13.brad.h-100.p-4
          div.text-white
            img.img-t(src="@/assets/curso/temas/tema2/img-7.svg").mb-4
            h4 Decreto Número 1317 DE 2013
            p El Decreto tiene como objeto reglamentar parcialmente la Ley 1581 de 2012, por la cual se dictan disposiciones generales para la protección de datos personales.
          img(src="@/assets/curso/temas/tema2/decorador-1.svg" style="max-width: 86px").ms-auto

    p Otras generalidades que se deben tener en cuenta, en relación con los contratos de servicios de #[i cloud computing], son:    
    .row.justify-content-center.align-items-center    
      .col-lg-6.my-3
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg8") 
          div(titulo="Contratación negociada o de adhesión") Atendiendo a la relación contractual establecida entre el cliente y el proveedor de la nube, también este contrato se puede clasificar como negociado o de adhesión.
          div(titulo="Condiciones de clasificación contractual") Podemos decir que un contrato entre el cliente y el proveedor es negociado si el primero tiene, o se le ofrece, la capacidad para fijar las condiciones de contratación en función del tipo de datos que se van a procesar, las medidas de seguridad exigibles, el esquema de subcontratación, la localización de los datos, la portabilidad de los mismos y cualquier otro aspecto de adecuación a la regulación organizacional y a las restricciones que esta regulación implica.
          div(titulo="Clausulado") En la mayoría de los casos, sin embargo, lo que se oferta son contratos de adhesión, constituidos por cláusulas contractuales cerradas, en las que el proveedor de #[i cloud] fija las condiciones con un contrato tipo igual para todos sus clientes, sin que el usuario tenga ninguna opción para negociar sus términos.
          div(titulo="Responsabilidades de ley") Este último caso es el más común, sobre todo cuando se encuentra el cliente en una situación de desequilibrio; por ejemplo, una pyme frente a un gran proveedor. Aunque hay que tener en cuenta que esto no eximirá a ninguno de los dos, de las responsabilidades que determina la ley de protección de datos.
      .col-lg-6.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/13.png', alt='')

</template>

<script>
export default {
  name: 'Tema2',
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
.container-text-introduccion
  position: relative
  top: -50px
  padding: 2rem
  background: linear-gradient(0deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 35%, rgba(222,222,222,1) 100%)
  border-radius: 10px
  span
    color: #1565C0
    font-weight: bold
.container-step-card
  border-top-right-radius: 62px
  border-bottom-left-radius: 62px
  position: relative
  min-height: 221px
  padding-right: 2rem
  padding-left: 2rem
  display: flex
  flex-wrap: wrap
  align-content: center
  p
    margin-top: .5rem
    position: relative
    z-index: 1
  .img-number
    position: absolute
    max-width: 192px
    top: 0
    right: 0
    z-index: 0
    transition: all .5s linear
  &:hover
    .img-number
      right: 50%
      transform: translateX(50%)
.container-slide-f
  .horizontal-scroll
    align-items: stretch !important
    .slyder-f__slyde
      margin-bottom: 2rem !important
.bg-gradient-1
  background: linear-gradient(170deg, #039BE5, #027FBC)
  border-radius: 15px
  position: relative
  padding-top: 65px !important
  margin-bottom: 3rem
  box-shadow: 0 3px 6px #00000030
  img
    max-width: 73px
    position: absolute
    top: -15px
  p
    margin-bottom: 0
    color: white
  span
    position: relative
    margin-left: auto
    display: flex
    justify-content: flex-end
    padding-right: 3rem
    bottom: -1.7rem
    color: white
    font-weight: bold
.edit-cajon-2
  background-color: #B6EADD !important
  &.cajon.color-primario:before
    background-color: #2EC49F
.container-card-12
  background-color: white
  box-shadow: 0 3px 6px #00000030
  border-radius: 10px
.container-box-2-2
  background: linear-gradient(-15deg, #2EC49F, #2B3990)
  padding: 2rem
  border-radius: 10px
  display: flex
  flex-wrap: wrap
  align-content: space-between
  p
    color: white
.texto-final-decorador
  background-color: white
  box-shadow: 0 3px 6px #00000030
  padding: 1rem 2rem
  margin-left: -6rem
  @media (max-width: 768px)
    margin-left: 0
    margin-right: 0
</style>
