import type { Short } from "../shorts";
/* Las portadas, empotradas: el artefacto que abre Pablo bloquea cualquier
   imagen de fuera, así que la que él ve tiene que viajar dentro. Las de
   Commons no llevan `import`: se piden por red y `movil.mjs` las empotra.

   SE IMPORTA LA COPIA DE `portadas/servir/`, NO LA MAESTRA. La maestra es
   de 2160 × 3840 y pesa un mega: guardarla así es lo que pidió Pablo y
   sigue en pie, pero servírsela al teléfono era pedirle que se bajara
   nueve veces más píxeles de los que caben en su pantalla. Lo dijo él con
   la app instalada: «tarda un montón en cargar las imágenes y va un poco
   lageado». La copia de servir va a 1290, el ancho del iPhone más grande
   que existe. Ver `scripts/portadas-servir.mjs`. */
import p_como_calienta_un_microondas from "../../portadas/servir/como-calienta-un-microondas.avif";
import p_como_cancelan_el_ruido_unos_auriculares from "../../portadas/servir/como-cancelan-el-ruido-unos-auriculares.avif";
import p_la_costra_no_esta_curando_nada from "../../portadas/servir/la-costra-no-esta-curando-nada.avif";
import p_como_de_bien_ve_un_aguila from "../../portadas/servir/como-de-bien-ve-un-aguila.avif";
import p_como_enfria_una_nevera from "../../portadas/servir/como-enfria-una-nevera.avif";
import p_los_de_la_cebada from "../../portadas/servir/los-de-la-cebada.avif";
import p_como_erupciona_un_volcan from "../../portadas/servir/como-erupciona-un-volcan.avif";
import p_como_funciona_el_wifi from "../../portadas/servir/como-funciona-el-wifi.avif";
import p_como_funciona_la_bolsa_de_valores from "../../portadas/servir/como-funciona-la-bolsa-de-valores.avif";
import p_la_gravedad_no_es_una_fuerza from "../../portadas/servir/la-gravedad-no-es-una-fuerza.avif";
import p_como_funciona_la_inteligencia_artificial from "../../portadas/servir/como-funciona-la-inteligencia-artificial.avif";
import p_como_funciona_un_coche from "../../portadas/servir/como-funciona-un-coche.avif";
import p_como_funciona_un_hormiguero from "../../portadas/servir/como-funciona-un-hormiguero.avif";
import p_como_funciona_un_iman from "../../portadas/servir/como-funciona-un-iman.avif";
import p_como_funciona_un_reloj_mecanico from "../../portadas/servir/como-funciona-un-reloj-mecanico.avif";
import p_como_funciona_un_tren_de_alta_velocidad from "../../portadas/servir/como-funciona-un-tren-de-alta-velocidad.avif";
import p_como_funciona_una_camara_de_fotos from "../../portadas/servir/como-funciona-una-camara-de-fotos.avif";
import p_como_funciona_una_cerilla from "../../portadas/servir/como-funciona-una-cerilla.avif";
import p_como_funciona_una_cerradura from "../../portadas/servir/como-funciona-una-cerradura.avif";
import p_como_funciona_una_pantalla_tactil from "../../portadas/servir/como-funciona-una-pantalla-tactil.avif";
import p_como_genera_electricidad_un_molino_de_viento from "../../portadas/servir/como-genera-electricidad-un-molino-de-viento.avif";
import p_como_genera_electricidad_una_placa_solar from "../../portadas/servir/como-genera-electricidad-una-placa-solar.avif";
import p_como_reconoce_un_pinguino_a_su_cria from "../../portadas/servir/como-reconoce-un-pinguino-a-su-cria.avif";
import p_como_se_aguanta_en_pie_un_rascacielos from "../../portadas/servir/como-se-aguanta-en-pie-un-rascacielos.avif";
import p_diario_de_a_bordo from "../../portadas/servir/diario-de-a-bordo.avif";
import p_como_se_construyo_el_canal_de_panama from "../../portadas/servir/como-se-construyo-el-canal-de-panama.avif";
import p_se_leyeron_al_reves from "../../portadas/servir/se-leyeron-al-reves.avif";
import p_como_se_descubrio_la_penicilina from "../../portadas/servir/como-se-descubrio-la-penicilina.avif";
import p_como_se_forma_dentro_de_una_gota from "../../portadas/servir/como-se-forma-dentro-de-una-gota.avif";
import p_como_se_forma_un_cometa from "../../portadas/servir/como-se-forma-un-cometa.avif";
import p_como_se_forma_un_tornado from "../../portadas/servir/como-se-forma-un-tornado.avif";
import p_como_se_forma_un_tsunami from "../../portadas/servir/como-se-forma-un-tsunami.avif";
import p_como_se_forma_una_cueva from "../../portadas/servir/como-se-forma-una-cueva.avif";
import p_como_se_hace_el_jamon_iberico from "../../portadas/servir/como-se-hace-el-jamon-iberico.avif";
import p_el_vino_se_hace_solo_y_lo_traen_las_avispas from "../../portadas/servir/el-vino-se-hace-solo-y-lo-traen-las-avispas.avif";
import p_la_cebada_no_tiene_azucar from "../../portadas/servir/la-cebada-no-tiene-azucar.avif";
import p_mas_antiguo_que_la_agricultura from "../../portadas/servir/mas-antiguo-que-la-agricultura.avif";
import p_como_un_simple_papel_tiene_valor from "../../portadas/servir/como-un-simple-papel-tiene-valor.avif";
import p_un_cohete_no_empuja_contra_nada from "../../portadas/servir/un-cohete-no-empuja-contra-nada.avif";
import p_como_vuelan_los_helicopteros from "../../portadas/servir/como-vuelan-los-helicopteros.avif";
import p_como_vuelan_los_pajaros from "../../portadas/servir/como-vuelan-los-pajaros.avif";
import p_dos_preguntas_distintas from "../../portadas/servir/dos-preguntas-distintas.avif";
import p_todos_la_misma_edad from "../../portadas/servir/todos-la-misma-edad.avif";
import p_cual_es_el_rio_mas_largo_del_mundo from "../../portadas/servir/cual-es-el-rio-mas-largo-del-mundo.avif";
import p_nadie_las_ha_contado from "../../portadas/servir/nadie-las-ha-contado.avif";
import p_cuanto_aguanta_un_cactus_sin_agua from "../../portadas/servir/cuanto-aguanta-un-cactus-sin-agua.avif";
import p_termino_en_1453 from "../../portadas/servir/termino-en-1453.avif";
import p_llevamos_57_anos_disparando_laseres_a_la_luna from "../../portadas/servir/llevamos-57-anos-disparando-laseres-a-la-luna.avif";
import p_es_un_arma_quimica from "../../portadas/servir/es-un-arma-quimica.avif";
import p_la_palabra_viajo_con_ella from "../../portadas/servir/la-palabra-viajo-con-ella.avif";
import p_de_donde_sale_el_oro from "../../portadas/servir/de-donde-sale-el-oro.avif";
import p_nacio_en_la_amazonia from "../../portadas/servir/nacio-en-la-amazonia.avif";
import p_de_que_esta_hecho_un_hueso from "../../portadas/servir/de-que-esta-hecho-un-hueso.avif";
import p_mas_grande_que_cualquier_dinosaurio from "../../portadas/servir/mas-grande-que-cualquier-dinosaurio.avif";
import p_el_auge_economico_de_china from "../../portadas/servir/el-auge-economico-de-china.avif";
import p_el_camino_de_santiago from "../../portadas/servir/el-camino-de-santiago.avif";
import p_ser_la_unica_especie_humana from "../../portadas/servir/ser-la-unica-especie-humana.avif";
import p_el_arbol_no_bombea_el_agua_la_cuelga from "../../portadas/servir/el-arbol-no-bombea-el-agua-la-cuelga.avif";
import p_la_historia_de_bugatti from "../../portadas/servir/la-historia-de-bugatti.avif";
import p_la_historia_de_ferrari from "../../portadas/servir/la-historia-de-ferrari.avif";
import p_la_historia_de_la_alhambra from "../../portadas/servir/la-historia-de-la-alhambra.avif";
import p_la_historia_de_lamborghini from "../../portadas/servir/la-historia-de-lamborghini.avif";
import p_la_historia_de_porsche from "../../portadas/servir/la-historia-de-porsche.avif";
import p_la_historia_del_titanic from "../../portadas/servir/la-historia-del-titanic.avif";
import p_la_sagrada_familia from "../../portadas/servir/la-sagrada-familia.avif";
import p_leyendo_las_sagas from "../../portadas/servir/leyendo-las-sagas.avif";
import p_los_samurais from "../../portadas/servir/los-samurais.avif";
import p_miguel_de_cervantes from "../../portadas/servir/miguel-de-cervantes.avif";
import p_no_sirven_para_agarrar from "../../portadas/servir/no-sirven-para-agarrar.avif";
import p_el_bostezo_no_tiene_que_ver_con_el_oxigeno from "../../portadas/servir/el-bostezo-no-tiene-que-ver-con-el-oxigeno.avif";
import p_una_contrasena_que_alguien_ha_robado from "../../portadas/servir/una-contrasena-que-alguien-ha-robado.avif";
import p_por_que_cambia_de_color_un_camaleon from "../../portadas/servir/por-que-cambia-de-color-un-camaleon.avif";
import p_casi_nadie_se_dio_cuenta from "../../portadas/servir/casi-nadie-se-dio-cuenta.avif";
import p_no_crecen_la_piel_se_retira from "../../portadas/servir/no-crecen-la-piel-se-retira.avif";
import p_una_burbuja_formandose from "../../portadas/servir/una-burbuja-formandose.avif";
import p_hay_un_sensor_dentro_del_diente from "../../portadas/servir/hay-un-sensor-dentro-del-diente.avif";
import p_el_dolor_no_esta_donde_lo_notas from "../../portadas/servir/el-dolor-no-esta-donde-lo-notas.avif";
import p_no_es_la_deshidratacion from "../../portadas/servir/no-es-la-deshidratacion.avif";
import p_no_es_el_acido_lactico from "../../portadas/servir/no-es-el-acido-lactico.avif";
import p_por_que_el_aceite_de_oliva_es_tan_saludable from "../../portadas/servir/por-que-el-aceite-de-oliva-es-tan-saludable.avif";
import p_el_chaval_y_el_helado from "../../portadas/servir/el-chaval-y-el-helado.avif";
import p_el_cafe_no_te_da_energia from "../../portadas/servir/el-cafe-no-te-da-energia.avif";
import p_el_cielo_deberia_ser_violeta from "../../portadas/servir/el-cielo-deberia-ser-violeta.avif";
import p_tres_preguntas_tres_ganadores from "../../portadas/servir/tres-preguntas-tres-ganadores.avif";
import p_la_nieve_y_el_hielo_azul_son_lo_mismo from "../../portadas/servir/la-nieve-y-el-hielo-azul-son-lo-mismo.avif";
import p_el_mar_no_refleja_el_cielo from "../../portadas/servir/el-mar-no-refleja-el-cielo.avif";
import p_la_sal_no_viene_del_mar from "../../portadas/servir/la-sal-no-viene-del-mar.avif";
import p_un_desague_sin_salida from "../../portadas/servir/un-desague-sin-salida.avif";
import p_lleno_de_semillas from "../../portadas/servir/lleno-de-semillas.avif";
import p_por_que_el_sahara_fue_verde from "../../portadas/servir/por-que-el-sahara-fue-verde.avif";
import p_empezo_en_orden_alfabetico from "../../portadas/servir/empezo-en-orden-alfabetico.avif";
import p_los_dias_no_los_anos_si from "../../portadas/servir/los-dias-no-los-anos-si.avif";
import p_por_que_estornudamos from "../../portadas/servir/por-que-estornudamos.avif";
import p_por_que_flota_un_barco_de_acero from "../../portadas/servir/por-que-flota-un-barco-de-acero.avif";
import p_el_color_te_dice_a_que_altura_ocurre from "../../portadas/servir/el-color-te-dice-a-que-altura-ocurre.avif";
import p_por_que_hay_personas_con_ojos_azules from "../../portadas/servir/por-que-hay-personas-con-ojos-azules.avif";
import p_por_que_hay_personas_con_ojos_marrones from "../../portadas/servir/por-que-hay-personas-con-ojos-marrones.avif";
import p_por_que_hay_personas_con_ojos_verdes from "../../portadas/servir/por-que-hay-personas-con-ojos-verdes.avif";
import p_por_que_hay_personas_rubias from "../../portadas/servir/por-que-hay-personas-rubias.avif";
import p_por_que_hay_terremotos from "../../portadas/servir/por-que-hay-terremotos.avif";
import p_por_que_la_estatua_de_la_libertad_es_verde from "../../portadas/servir/por-que-la-estatua-de-la-libertad-es-verde.avif";
import p_una_molecula_a_partir_de_los_cuarenta from "../../portadas/servir/una-molecula-a-partir-de-los-cuarenta.avif";
import p_la_luna_del_horizonte_es_mas_pequena from "../../portadas/servir/la-luna-del-horizonte-es-mas-pequena.avif";
import p_la_miel_no_se_conserva from "../../portadas/servir/la-miel-no-se-conserva.avif";
import p_moradas_y_amarillas from "../../portadas/servir/moradas-y-amarillas.avif";
import p_costo_dos_mil_anos_demostrar_que_acertaban from "../../portadas/servir/costo-dos-mil-anos-demostrar-que-acertaban.avif";
import p_las_rayas_no_son_un_camuflaje from "../../portadas/servir/las-rayas-no-son-un-camuflaje.avif";
import p_por_que_las_estatuas_griegas_son_blancas from "../../portadas/servir/por-que-las-estatuas-griegas-son-blancas.avif";
import p_el_amarillo_ya_estaba from "../../portadas/servir/el-amarillo-ya-estaba.avif";
import p_por_que_las_pelotas_de_golf_tienen_hoyuelos from "../../portadas/servir/por-que-las-pelotas-de-golf-tienen-hoyuelos.avif";
import p_la_cebolla_entera_no_lleva_nada from "../../portadas/servir/la-cebolla-entera-no-lleva-nada.avif";
import p_te_ensenaron_mal_como_se_forma_una_nube from "../../portadas/servir/te-ensenaron-mal-como-se-forma-una-nube.avif";
import p_giran_porque_no_pueden_mover_los_ojos from "../../portadas/servir/giran-porque-no-pueden-mover-los-ojos.avif";
import p_el_ala_no_bate_gira from "../../portadas/servir/el-ala-no-bate-gira.avif";
import p_el_sahara_esta_seco_por_lo_que_pasa_en_el_ecuador from "../../portadas/servir/el-sahara-esta-seco-por-lo-que-pasa-en-el-ecuador.avif";
import p_no_invierten_izquierda_derecha from "../../portadas/servir/no-invierten-izquierda-derecha.avif";
import p_un_flamenco_nace_gris from "../../portadas/servir/un-flamenco-nace-gris.avif";
import p_no_lo_siguen_se_le_anticipan from "../../portadas/servir/no-lo-siguen-se-le-anticipan.avif";
import p_los_pelirrojos_mas_anestesia from "../../portadas/servir/los-pelirrojos-mas-anestesia.avif";
import p_por_que_marte_es_rojo from "../../portadas/servir/por-que-marte-es-rojo.avif";
import p_la_frase_tal_como_se_dice_es_falsa from "../../portadas/servir/la-frase-tal-como-se-dice-es-falsa.avif";
import p_por_que_no_hemos_vuelto_a_la_luna from "../../portadas/servir/por-que-no-hemos-vuelto-a-la-luna.avif";
import p_no_es_que_no_lo_grabes_se_borra_hacia_atras from "../../portadas/servir/no-es-que-no-lo-grabes-se-borra-hacia-atras.avif";
import p_a_los_tres_anos_te_acordabas from "../../portadas/servir/a-los-tres-anos-te-acordabas.avif";
import p_por_que_nos_salen_canas from "../../portadas/servir/por-que-nos-salen-canas.avif";
import p_la_unica_especie_que_se_sonroja from "../../portadas/servir/la-unica-especie-que-se-sonroja.avif";
import p_el_picante_no_es_un_sabor from "../../portadas/servir/el-picante-no-es-un-sabor.avif";
import p_el_picor_lo_pones_tu from "../../portadas/servir/el-picor-lo-pones-tu.avif";
import p_perderse_en_un_centro_comercial from "../../portadas/servir/perderse-en-un-centro-comercial.avif";
import p_un_patinador_no_derrite_el_hielo from "../../portadas/servir/un-patinador-no-derrite-el-hielo.avif";
import p_no_solo_cuando_estan_contentos from "../../portadas/servir/no-solo-cuando-estan-contentos.avif";
import p_por_que_saturno_tiene_anillos from "../../portadas/servir/por-que-saturno-tiene-anillos.avif";
import p_por_que_se_abandono_machu_picchu from "../../portadas/servir/por-que-se-abandono-machu-picchu.avif";
import p_la_leche_cortada_es_queso_a_medio_empezar from "../../portadas/servir/la-leche-cortada-es-queso-a-medio-empezar.avif";
import p_el_pan_duro_no_se_ha_secado from "../../portadas/servir/el-pan-duro-no-se-ha-secado.avif";
import p_no_es_falta_de_riego from "../../portadas/servir/no-es-falta-de-riego.avif";
import p_tienen_una_forma_que_se_puede_medir from "../../portadas/servir/tienen-una-forma-que-se-puede-medir.avif";
import p_tu_sangre_nunca_es_azul from "../../portadas/servir/tu-sangre-nunca-es-azul.avif";
import p_por_que_son_caros_los_diamantes from "../../portadas/servir/por-que-son-caros-los-diamantes.avif";
import p_el_azul_no_es_un_color_es_una_estructura from "../../portadas/servir/el-azul-no-es-un-color-es-una-estructura.avif";
import p_por_que_sube_la_marea from "../../portadas/servir/por-que-sube-la-marea.avif";
import p_todas_las_explicaciones_que_te_han_dado_fallan from "../../portadas/servir/todas-las-explicaciones-que-te-han-dado-fallan.avif";
import p_el_conductor_no_se_marea_nunca from "../../portadas/servir/el-conductor-no-se-marea-nunca.avif";
import p_la_cicatriz_de_un_dano from "../../portadas/servir/la-cicatriz-de-un-dano.avif";
import p_en_invierno_estamos_mas_cerca_del_sol from "../../portadas/servir/en-invierno-estamos-mas-cerca-del-sol.avif";
import p_erizar_un_pelaje_que_ya_no_tienes from "../../portadas/servir/erizar-un-pelaje-que-ya-no-tienes.avif";
import p_tiritar_desperdiciar_energia from "../../portadas/servir/tiritar-desperdiciar-energia.avif";
import p_nadie_oyo_su_voz_hasta_1877 from "../../portadas/servir/nadie-oyo-su-voz-hasta-1877.avif";
import p_ve_en_blanco_y_negro_y_acierta_el_color from "../../portadas/servir/ve-en-blanco-y-negro-y-acierta-el-color.avif";
import p_el_destello_sube_del_suelo_a_la_nube from "../../portadas/servir/el-destello-sube-del-suelo-a-la-nube.avif";
import p_por_que_unos_paises_son_ricos_y_otros_pobres from "../../portadas/servir/por-que-unos-paises-son-ricos-y-otros-pobres.avif";
import p_por_que_vuelan_los_aviones_es_falso from "../../portadas/servir/por-que-vuelan-los-aviones-es-falso.avif";
import p_que_es_el_salar_de_uyuni from "../../portadas/servir/que-es-el-salar-de-uyuni.avif";
import p_que_es_exactamente_el_fuego from "../../portadas/servir/que-es-exactamente-el-fuego.avif";
import p_coladores_de_hace_7500_anos from "../../portadas/servir/coladores-de-hace-7500-anos.avif";
import p_que_es_realmente_un_hongo from "../../portadas/servir/que-es-realmente-un-hongo.avif";
import p_que_es_realmente_una_perla from "../../portadas/servir/que-es-realmente-una-perla.avif";
import p_que_es_un_agujero_de_gusano from "../../portadas/servir/que-es-un-agujero-de-gusano.avif";
import p_que_es_un_agujero_negro from "../../portadas/servir/que-es-un-agujero-negro.avif";
import p_que_es_un_laser from "../../portadas/servir/que-es-un-laser.avif";
import p_que_es_una_estrella_fugaz from "../../portadas/servir/que-es-una-estrella-fugaz.avif";
import p_hasta_1925_el_universo_era_esta_galaxia from "../../portadas/servir/hasta-1925-el-universo-era-esta-galaxia.avif";
import p_que_fue_antes_el_huevo_o_la_gallina from "../../portadas/servir/que-fue-antes-el-huevo-o-la-gallina.avif";
import p_que_fue_el_ejercito_de_terracota from "../../portadas/servir/que-fue-el-ejercito-de-terracota.avif";
import p_un_nombre_del_siglo_xix from "../../portadas/servir/un-nombre-del-siglo-xix.avif";
import p_las_lapidas_fechadas from "../../portadas/servir/las-lapidas-fechadas.avif";
import p_que_hay_debajo_de_la_antartida from "../../portadas/servir/que-hay-debajo-de-la-antartida.avif";
import p_mil_atmosferas from "../../portadas/servir/mil-atmosferas.avif";
import p_dos_mil_anos_antes_de_los_druidas from "../../portadas/servir/dos-mil-anos-antes-de-los-druidas.avif";
import p_quien_fue_cleopatra from "../../portadas/servir/quien-fue-cleopatra.avif";
import p_quien_fue_isaac_newton from "../../portadas/servir/quien-fue-isaac-newton.avif";
import p_quien_fue_la_persona_mas_rica_del_mundo from "../../portadas/servir/quien-fue-la-persona-mas-rica-del-mundo.avif";
import p_quien_fue_leonardo_da_vinci from "../../portadas/servir/quien-fue-leonardo-da-vinci.avif";
import p_quien_fue_nikola_tesla from "../../portadas/servir/quien-fue-nikola-tesla.avif";
import p_quien_invento_el_futbol from "../../portadas/servir/quien-invento-el-futbol.avif";
import p_quien_invento_el_submarino from "../../portadas/servir/quien-invento-el-submarino.avif";
import p_steve_jobs from "../../portadas/servir/steve-jobs.avif";

/* ==========================================================================
   CURIOSIDADES — LO ESCRIBE `scripts/catalogo.mjs`, NO SE EDITA A MANO

   Sale de los `.md` de Pablo, que están en
   `referencia/textos-de-pablo/shorts/` con su cabecera. Para
   rehacerlo:

       node scripts/catalogo.mjs > src/historias/curiosidades.ts

   NO HAY PÁGINAS AQUÍ: la historia viene en bloques seguidos y quien la
   reparte en pantallas es la app, midiendo el móvil de quien lee. Es la
   regla 3 de `.claude/skills/paginado-shorts/SKILL.md`.

   Hoy entran 178 de 496: solo los que tienen portada.
   ========================================================================== */

export const CURIOSIDADES: Short[] = [
  {
    id: "como-calienta-un-microondas",
    titulo: "Cómo calienta un microondas",
    categoria: "Tecnología",
    color: "var(--ochre)",
    /* Serie «como-calienta-un-microondas», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un microondas no calienta de dentro hacia fuera» */
    encargo: "Un microondas no calienta de dentro hacia fuera",
    fotos: [
      {
        local: p_como_calienta_un_microondas,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un microondas no calienta de dentro hacia fuera",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Las microondas solo penetran un centímetro en la comida",
      },
      {
        b: "parrafo",
        texto:
          "Es probablemente la idea más extendida sobre este aparato: que las microondas " +
          "atraviesan la comida y la calientan desde el centro hacia la superficie. Está " +
          "catalogada como lo que es, una idea equivocada.",
      },
      {
        b: "parrafo",
        texto:
          "El dato que la desmonta es de una sencillez desarmante. Las microondas de 2,45 " +
          "gigahercios, que son las que usa cualquier microondas doméstico, solo penetran " +
          "aproximadamente 1 centímetro en la mayoría de los alimentos. Ese centímetro es todo el " +
          "alcance directo que tienen.",
      },
      {
        b: "parrafo",
        texto:
          "De ahí hacia dentro no llega nada. El calor que aparece en el corazón de un plato " +
          "hondo viaja hasta allí exactamente igual que en una sartén o en un horno: por " +
          "conducción, pasando de molécula a molécula, y a la velocidad de siempre.",
      },
      {
        b: "parrafo",
        texto:
          "Es decir, un microondas calienta de fuera hacia dentro, como todo lo demás. Su ventaja " +
          "no es el sentido de la marcha, sino que en vez de empezar en la piel del alimento " +
          "empieza un centímetro más adentro, y lo hace en todo el volumen de ese centímetro a la " +
          "vez en lugar de esperar a que el calor cruce la superficie.",
      },
      {
        b: "rayo",
        texto:
          "El microondas no invirtió la dirección en que se calienta la comida. Lo único que hizo " +
          "fue saltarse el primer centímetro, que es donde un horno pierde la mayor parte del " +
          "tiempo.",
      },
      {
        b: "rotulo",
        texto:
          "Lo que confunde es que el centro sale más caliente que los bordes",
      },
      {
        b: "parrafo",
        texto:
          "Entonces, si calienta de fuera hacia dentro, ¿por qué al morder un bollo templado te " +
          "quemas con el relleno? La observación es real, y tiene dos explicaciones que se suman.",
      },
      {
        b: "parrafo",
        texto:
          "La primera es la superficie. Nada más apagarse el aparato, la parte exterior del " +
          "alimento está en contacto con el aire frío del plato, de la cocina y de tu mano, y " +
          "empieza a perder calor por todos lados. El centro, en cambio, no tiene por dónde " +
          "perderlo salvo a través del propio alimento, que es mal conductor. A los diez segundos " +
          "de sacarlo, la superficie ya se ha enfriado y el interior sigue igual.",
      },
      {
        b: "parrafo",
        texto:
          "La segunda es de qué está hecha cada parte. Las microondas actúan sobre las moléculas " +
          "de agua, así que calientan mucho más lo que tiene mucha agua. Un relleno de mermelada, " +
          "de tomate o de queso absorbe muchísima más energía que una masa de pan seca que lo " +
          "rodea, aunque las dos estén expuestas a lo mismo. Por eso el interior de una " +
          "empanadilla puede estar hirviendo con la masa apenas tibia.",
      },
      {
        b: "parrafo",
        texto:
          "Y ahí está el motivo de que los microondas recomienden un reposo después de calentar. " +
          "Ese minuto no es un capricho: es el tiempo que necesita el calor para repartirse por " +
          "conducción desde donde se generó hasta donde no llegó.",
      },
      {
        b: "rayo",
        texto:
          "La sensación de que el microondas calienta desde dentro no viene de las ondas, sino " +
          "del reparto de agua en la comida. Calienta el agua esté donde esté, y en la mayoría de " +
          "los platos el agua está en el relleno.",
      },
    ],
  },
  {
    id: "como-cancelan-el-ruido-unos-auriculares",
    titulo: "Cómo cancelan el ruido unos auriculares",
    categoria: "Tecnología",
    color: "var(--plum)",
    /* Serie «como-cancelan-el-ruido-unos-auriculares», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Unos auriculares con cancelación no tapan el ruido: fabrican el ruido contrario» */
    encargo: "Unos auriculares con cancelación no tapan el ruido: fabrican el ruido contrario",
    fotos: [
      {
        local: p_como_cancelan_el_ruido_unos_auriculares,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Unos auriculares con cancelación no tapan el ruido: fabrican el ruido contrario",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El silencio que oyes es la suma de dos sonidos",
      },
      {
        b: "parrafo",
        texto:
          "La intuición dice que unos auriculares con cancelación de ruido bloquean el sonido, " +
          "como un tapón muy bueno. Lo que hacen es lo contrario: añaden sonido.",
      },
      {
        b: "parrafo",
        texto:
          "El mecanismo es este. Un micrófono incorporado en el auricular mide el ruido ambiente " +
          "que hay a tu alrededor. El circuito lo analiza y genera una señal opuesta, y el " +
          "altavoz emite una onda con la misma amplitud que el ruido pero con la fase invertida. " +
          "Cuando las dos ondas se encuentran en tu oído se combinan y se anulan mutuamente, en " +
          "un proceso que se llama <strong>interferencia destructiva</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Detente un momento en lo que eso significa físicamente. En tu oído no hay menos aire " +
          "moviéndose que sin los auriculares: hay dos movimientos, uno del ruido del avión y " +
          "otro del altavoz, que van en sentidos contrarios y que se cancelan. Lo que percibes " +
          "como silencio es la suma de dos sonidos, no la ausencia de uno.",
      },
      {
        b: "rayo",
        texto:
          "La cancelación de ruido no quita nada. Pone encima exactamente lo mismo del revés, y " +
          "lo que llega a tu tímpano es lo que queda cuando dos ondas iguales y opuestas se " +
          "encuentran.",
      },
      {
        b: "rotulo",
        texto:
          "La idea se patentó en 1936, mucho antes de poder construirla",
      },
      {
        b: "parrafo",
        texto:
          "El concepto no tiene nada de moderno, y su fecha sorprende a casi todo el mundo.",
      },
      {
        b: "parrafo",
        texto:
          "La primera patente conocida sobre esto, la número 2.043.416 de Estados Unidos, se " +
          "concedió al inventor <strong>Paul Lueg</strong> en 1936. En los años cincuenta, " +
          "<strong>Lawrence Fogel</strong> patentó sistemas para cancelar el ruido en cabinas de " +
          "helicóptero y de avión, que es exactamente el uso en el que estos auriculares siguen " +
          "siendo mejores hoy.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que faltaba no era la idea, era la electrónica. Para que la cancelación funcione, " +
          "el aparato tiene que oír el ruido, calcular su inverso y emitirlo antes de que la onda " +
          "original llegue al tímpano, y eso son millonésimas de segundo de margen. Hacer eso con " +
          "componentes de 1936 era imposible, y hacerlo dentro de un auricular alimentado por una " +
          "pila diminuta fue imposible durante otro medio siglo.",
      },
      {
        b: "rayo",
        texto:
          "Entre saber cómo se cancela un ruido y poder cancelarlo pasaron sesenta años. Lo que " +
          "llegó tarde no fue el descubrimiento: fue un circuito lo bastante rápido y lo bastante " +
          "pequeño para caber en una oreja.",
      },
    ],
  },
  {
    id: "la-costra-no-esta-curando-nada",
    titulo: "Cómo cicatrizan las heridas",
    categoria: "Cuerpo humano",
    color: "var(--clay)",
    /* Serie «como-cicatrizan-las-heridas», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La costra no está curando nada» */
    encargo: "Un puño cerrado visto de cerca, con las costras oscuras de dos heridas recientes en los nudillos.",
    fotos: [
      {
        local: p_la_costra_no_esta_curando_nada,
        autor:
          "Fotografía de MART PRODUCTION, en Pexels.",
        licencia: "Pexels License",
        fuente:
          "https://www.pexels.com/photo/7699367/",
        alt:
          "Un puño cerrado visto de cerca, con las costras oscuras de dos heridas recientes en " +
          "los nudillos.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Hace 3.600 años ya sabíamos cerrar heridas, no repararlas",
      },
      {
        b: "parrafo",
        texto:
          "El papiro Edwin Smith, escrito en Egipto hacia el 1600 a.C. y probablemente copiado de " +
          "un texto bastante más antiguo, es el documento quirúrgico más viejo que se conserva. " +
          "Describe cuarenta y ocho casos de heridas, sobre todo en cabeza, cuello y torso, y lo " +
          "hace con una frialdad que sigue sorprendiendo: no hay conjuros ni intervención de los " +
          "dioses, sino exploración, diagnóstico, pronóstico y tratamiento, con vendajes, " +
          "entablillados y medidas para evitar que la herida se infecte. Aquellos médicos " +
          "entendían perfectamente que una herida abierta hay que cerrarla, y que cerrarla " +
          "deprisa salva vidas. Lo que no podían saber, porque nadie lo supo hasta que existieron " +
          "los microscopios, es que cerrar y reparar son dos operaciones distintas separadas por " +
          "meses de trabajo.",
      },
      {
        b: "parrafo",
        texto:
          "Porque la costra que se te forma encima de un corte no es la herida curándose. Es una " +
          "tapa provisional, y su única misión es ganar tiempo. Cuando te cortas, lo primero que " +
          "hace el cuerpo no es reparar nada, sino cerrar el grifo: los vasos de la zona se " +
          "contraen en cuestión de segundos para frenar la salida de sangre, y las plaquetas " +
          "acuden en masa al agujero y se enganchan unas a otras hasta taponarlo, formando un " +
          "coágulo que se refuerza con una malla de fibrina. Ese coágulo, al secarse en la " +
          "superficie en contacto con el aire, es exactamente lo que llamamos costra. Sella la " +
          "brecha, impide el paso a las bacterias y protege lo que hay debajo mientras empieza lo " +
          "importante.",
      },
      {
        b: "rayo",
        texto:
          "La costra es un tapón de emergencia. La reparación de verdad ocurre debajo, y tarda " +
          "muchísimo más de lo que parece.",
      },
      {
        b: "rotulo",
        texto:
          "Debajo hay cuatro fases, y se solapan entre sí",
      },
      {
        b: "parrafo",
        texto:
          "Lo que ocurre bajo esa tapa está bastante mejor organizado de lo que uno imagina, y " +
          "sigue un guion en cuatro etapas que no se turnan limpiamente sino que se pisan unas a " +
          "otras.",
      },
      {
        b: "lista",
        puntos: [
          "<strong>Hemostasia.</strong> Inmediata. Los vasos se contraen y se forma el coágulo. " +
            "Es cuestión de minutos, y es la única fase que se ve desde fuera.",
          "<strong>Inflamación.</strong> Arranca enseguida. Las células defensivas llegan a la " +
            "herida dentro de las primeras veinticuatro horas y se quedan trabajando varios días, " +
            "devorando bacterias y retirando los restos de tejido destrozado. Es la fase " +
            "responsable del enrojecimiento, el calor y la hinchazón, así que una herida que se " +
            "inflama un poco no está estropeándose: está haciendo justo lo que toca.",
          "<strong>Proliferación.</strong> Empieza cuando la limpieza está encaminada. Se " +
            "fabrica tejido nuevo, se tienden vasos sanguíneos para alimentarlo y los bordes de " +
            "la herida empiezan a tirar el uno del otro para reducir el hueco que hay que " +
            "rellenar.",
          "<strong>Remodelado.</strong> Arranca hacia la tercera semana, cuando la superficie " +
            "ya parece resuelta. Y puede durar hasta doce meses.",
        ],
      },
      {
        b: "parrafo",
        texto:
          "Ese último número es el que descoloca a todo el mundo. Cuando la herida ya «parece " +
          "curada», cuando la costra se ha caído sola y en su sitio hay una piel rosada de " +
          "aspecto aceptable, el cuerpo lleva apenas unas semanas de trabajo y le queda casi un " +
          "año por delante. Durante todo ese tiempo el tejido se está reorganizando por dentro " +
          "sin que tú notes absolutamente nada: se retira colágeno mal colocado, se deposita " +
          "otro, se reordenan las fibras y se van cerrando los vasos que sobran. Por eso las " +
          "cicatrices cambian de color y de textura durante meses, pasando del rojo intenso al " +
          "rosa y del rosa a un tono más pálido que el de la piel de alrededor, y por eso ningún " +
          "cirujano da una cicatriz por definitiva hasta que ha pasado un año entero desde la " +
          "lesión.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Arrancar la costra antes de tiempo retrasa el proceso de verdad, no solo " +
          "el estético. Al levantarla te llevas pegado el tejido nuevo que se estaba tendiendo " +
          "debajo, con sus vasos recién construidos, y esa parte hay que rehacerla entera desde " +
          "la fase de inflamación. Cada vez que se repite, el resultado final tiende a ser una " +
          "cicatriz más ancha.",
      },
    ],
  },
  {
    id: "como-de-bien-ve-un-aguila",
    titulo: "Cómo de bien ve un águila",
    categoria: "Naturaleza",
    color: "var(--ochre)",
    /* Serie «como-de-bien-ve-un-aguila», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un águila no ve ocho veces mejor que tú; ve unas dos» */
    encargo: "Un águila no ve ocho veces mejor que tú; ve unas dos",
    fotos: [
      {
        local: p_como_de_bien_ve_un_aguila,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un águila no ve ocho veces mejor que tú; ve unas dos",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La cifra que todo el mundo repite está inflada",
      },
      {
        b: "parrafo",
        texto:
          "La frase circula en todos los documentales: un águila ve ocho veces mejor que un " +
          "humano, y desde mil metros distingue un conejo. Conviene bajar eso a los números " +
          "medidos.",
      },
      {
        b: "parrafo",
        texto:
          "Las rapaces de ojo grande —el águila audaz australiana, los buitres del Viejo Mundo— " +
          "tienen una resolución espacial <strong>unas dos veces mayor</strong> que la humana. " +
          "Dos, no ocho. Es una ventaja real y considerable, pero está lejos de la cifra que se " +
          "repite.",
      },
      {
        b: "parrafo",
        texto:
          "Y hay un segundo dato que casi nunca se cuenta y que descoloca todavía más. Muchas " +
          "rapaces medianas y pequeñas tienen una resolución espacial comparable a la nuestra o " +
          "incluso más baja. Es decir, no es que las aves de presa vean mejor por ser aves de " +
          "presa: hay halcones que, en agudeza pura, ven peor que tú.",
      },
      {
        b: "rayo",
        texto:
          "La visión excepcional no viene con el oficio de cazador, viene con el tamaño del ojo. " +
          "Las rapaces que baten a un humano son las grandes, y su ventaja es de dos veces, no " +
          "del orden de magnitud que solemos imaginar.",
      },
      {
        b: "rotulo",
        texto:
          "Lo que sí tienen es más sensor y un segundo punto de mira",
      },
      {
        b: "parrafo",
        texto:
          "Entonces, si el multiplicador es modesto, ¿de dónde sale la fama? De dos cosas " +
          "concretas, y las dos se pueden nombrar.",
      },
      {
        b: "parrafo",
        texto:
          "La primera es la densidad de receptores. En la fóvea —la zona central de la retina, " +
          "donde la visión es más nítida— un cernícalo americano tiene 65.000 receptores por " +
          "milímetro cuadrado, frente a los 38.000 de un ser humano. Casi el doble de células " +
          "recogiendo la misma imagen, que es exactamente el mismo salto que hay entre una cámara " +
          "buena y una excelente.",
      },
      {
        b: "parrafo",
        texto:
          "La segunda es más rara y es la verdaderamente diferencial. Nosotros tenemos una sola " +
          "fóvea por ojo. Muchas aves tienen dos: una segunda fóvea dedicada a la visión lateral, " +
          "presente en el 54 % de las especies estudiadas, rapaces incluidas.",
      },
      {
        b: "parrafo",
        texto:
          "Piensa en lo que significa tener dos. Un ojo humano tiene un único punto de máxima " +
          "nitidez, y para mirar algo con detalle hay que dirigirlo hacia ahí. Un ave con dos " +
          "foveas por ojo tiene dos zonas afiladas apuntando a sitios distintos a la vez, y puede " +
          "mantener el detalle en dos direcciones sin mover la cabeza.",
      },
      {
        b: "rayo",
        texto:
          "La ventaja de una rapaz no está tanto en ver más lejos como en tener dos puntos de " +
          "mira por ojo en vez de uno. Ve con detalle donde nosotros solo tenemos visión " +
          "periférica.",
      },
      {
        b: "parrafo",
        texto:
          "¿Sabías que…? Los cernícalos vulgares localizan los rastros de los topillos con la " +
          "vista. Estos roedores dejan senderos de orina y excrementos que reflejan la luz " +
          "ultravioleta, y el ave, que sí ve ese ultravioleta, los distingue desde el aire como " +
          "si fueran caminos marcados.",
      },
    ],
  },
  {
    id: "como-enfria-una-nevera",
    titulo: "Cómo enfría una nevera",
    categoria: "Tecnología",
    color: "var(--slate)",
    /* Serie «como-enfria-una-nevera», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Una nevera no fabrica frío, saca calor» */
    encargo: "Una nevera no fabrica frío, saca calor",
    fotos: [
      {
        local: p_como_enfria_una_nevera,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Una nevera no fabrica frío, saca calor",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El frío no es una sustancia que se pueda producir",
      },
      {
        b: "parrafo",
        texto:
          "Aquí hay que corregir algo antes de mirar ninguna máquina, porque el error está en la " +
          "palabra y no en el aparato.",
      },
      {
        b: "parrafo",
        texto:
          "El frío no existe como cosa. No hay partículas de frío, ni un depósito de frío que se " +
          "pueda llenar. Lo que existe es el calor, que es agitación de las moléculas de un " +
          "cuerpo, y lo que llamamos frío es sencillamente tener menos de eso. Enfriar algo no " +
          "consiste en meterle nada dentro: consiste en quitarle el calor que ya tenía y " +
          "llevárselo a otra parte.",
      },
      {
        b: "parrafo",
        texto:
          "Por eso la pregunta correcta ante una nevera no es cómo fabrica frío, sino adónde " +
          "manda el calor de la comida que has metido. Y la respuesta está detrás del aparato, en " +
          "esa rejilla negra que quema al tocarla y que la mayoría de la gente ha visto sin " +
          "preguntarse nunca qué hace ahí.",
      },
      {
        b: "parrafo",
        texto:
          "Una nevera es una máquina de mover calor de un sitio a otro. Coge el que hay dentro " +
          "del armario, donde ya hay poco, y lo suelta fuera, donde ya hay más. Y como el calor " +
          "por sí solo nunca va en esa dirección, hay que empujarlo, y empujarlo cuesta " +
          "electricidad.",
      },
      {
        b: "rayo",
        texto:
          "Tu nevera no enfría la comida. Le quita el calor y lo tira a tu cocina, y por eso la " +
          "parte de atrás está caliente exactamente en la misma medida en que el interior está " +
          "frío.",
      },
      {
        b: "rotulo",
        texto:
          "Con la puerta abierta, una nevera calienta la habitación",
      },
      {
        b: "parrafo",
        texto:
          "De lo anterior sale una consecuencia que suena a broma y no lo es. Si dejaras una " +
          "nevera abierta en una habitación cerrada, la habitación no se enfriaría: se " +
          "calentaría.",
      },
      {
        b: "parrafo",
        texto:
          "Sigue el recorrido del calor y verás que no hay otra salida posible. La nevera saca " +
          "calor del aire de dentro del armario y lo suelta por la parte de atrás, al aire de la " +
          "habitación. Si el armario está abierto, ese aire es el mismo aire. Estás sacando calor " +
          "de un sitio para devolverlo al mismo sitio, y el resultado neto de esa parte es cero.",
      },
      {
        b: "parrafo",
        texto:
          "Pero es que además hay un extra. El motor que hace todo ese trabajo funciona con " +
          "electricidad, y toda la electricidad que consume acaba también convertida en calor " +
          "dentro de la habitación. Así que el balance no queda en cero, queda en positivo: la " +
          "habitación termina más caliente de lo que estaba, y la culpa es justo de la máquina " +
          "que se supone que enfría.",
      },
      {
        b: "parrafo",
        texto:
          "Lo mismo explica por qué un aire acondicionado necesita obligatoriamente una unidad en " +
          "la calle. No es una cuestión de espacio ni de ruido. Es que el calor que saca de tu " +
          "salón tiene que descargarse en algún lugar que no sea tu salón, y si no hay un fuera, " +
          "no hay enfriamiento posible.",
      },
      {
        b: "rayo",
        texto:
          "Ninguna máquina de las que tienes en casa destruye calor, porque el calor no se " +
          "destruye. Solo se puede cambiar de sitio, y siempre hay que pagar por moverlo en la " +
          "dirección que no le sale sola.",
      },
    ],
  },
  {
    id: "los-de-la-cebada",
    titulo: "Cómo era de verdad un gladiador romano",
    categoria: "Historia",
    color: "var(--ochre)",
    /* Serie «como-era-de-verdad-un-gladiador-romano», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «A los gladiadores los llamaban «los de la cebada»» */
    encargo: "A los gladiadores los llamaban «los de la cebada»",
    fotos: [
      {
        local: p_los_de_la_cebada,
        autor: "",
        licencia: "Pexels License",
        alt:
          "A los gladiadores los llamaban «los de la cebada»",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "En Éfeso hay un cementerio de gladiadores, y eso permite dejar de leer y empezar a " +
          "medir",
      },
      {
        b: "parrafo",
        texto:
          "Casi todo lo que creemos saber sobre los gladiadores viene de dos sitios: de lo que " +
          "escribieron autores romanos que iban al espectáculo como público, y de mosaicos y " +
          "relieves encargados para dejar constancia de una victoria. Las dos fuentes son " +
          "valiosas y las dos están contando lo que alguien quería contar.",
      },
      {
        b: "parrafo",
        texto:
          "En Éfeso, en la actual Turquía, apareció algo distinto: un cementerio de gladiadores " +
          "del siglo II y III de nuestra era. Ahí hay huesos, y los huesos no exageran ni " +
          "presumen. Un estudio analizó cincuenta y tres individuos, de los cuales " +
          "<strong>veintidós eran gladiadores</strong>, y comparó su química con la de romanos " +
          "corrientes de la misma ciudad y la misma época.",
      },
      {
        b: "parrafo",
        texto:
          "Los textos antiguos recogen un apodo despectivo que les daban: <em>hordearii</em>, que " +
          "se traduce más o menos como «los comedores de cebada». La pregunta que permitía " +
          "responder ese cementerio era si el mote decía la verdad.",
      },
      {
        b: "rayo",
        texto:
          "Un cementerio de gladiadores permite contrastar por primera vez lo que los romanos " +
          "contaban de ellos con lo que sus propios huesos registraron.",
      },
      {
        b: "rotulo",
        texto:
          "El análisis confirmó la cebada y desactivó la leyenda",
      },
      {
        b: "parrafo",
        texto:
          "Lo que se mide en un hueso son isótopos estables de carbono, nitrógeno y azufre, que " +
          "quedan fijados según lo que la persona comió durante años. Es un registro que no " +
          "depende de la memoria de nadie.",
      },
      {
        b: "parrafo",
        texto:
          "El resultado, en la parte que más se repite por ahí, fue el esperado: los gladiadores " +
          "de Éfeso comían sobre todo plantas, cereales como el trigo y la cebada, con muy poca " +
          "carne. De ahí sale el titular de que seguían una dieta vegetariana especial de " +
          "entrenamiento.",
      },
      {
        b: "parrafo",
        texto:
          "Y aquí está el matiz que ese titular se salta. Al comparar con los romanos normales de " +
          "la misma ciudad, <strong>no aparecieron diferencias significativas</strong> en ninguno " +
          "de los tres isótopos. ¿Qué significa eso? Es simple: <strong>los gladiadores comían " +
          "como todo el mundo</strong>. No seguían un régimen exótico diseñado para el combate. " +
          "Comían grano y legumbre porque en el siglo II eso era lo que comía la gente, y la " +
          "carne era cara.",
      },
      {
        b: "parrafo",
        texto:
          "El apodo, por tanto, no describe una dieta de atleta. Describe la comida de los de " +
          "abajo, dicha con desprecio por gente que sí podía permitirse otra cosa.",
      },
      {
        b: "rayo",
        texto:
          "El estudio confirmó que comían cebada y, a la vez, desmontó por qué. No era una dieta " +
          "de entrenamiento: era la dieta del pobre, y sus vecinos comían igual.",
      },
      {
        b: "rotulo",
        texto:
          "Sí había algo en sus huesos que no tenía nadie más",
      },
      {
        b: "parrafo",
        texto:
          "Ahora bien, cuando se pasa de los isótopos a los elementos traza, aparece una " +
          "diferencia enorme y muy difícil de explicar por casualidad.",
      },
      {
        b: "parrafo",
        texto:
          "La proporción entre estroncio y calcio en el hueso de los gladiadores dio un valor " +
          "medio de <strong>1,26 microgramos por miligramo</strong>. En los romanos no " +
          "gladiadores del mismo cementerio, <strong>0,67</strong>. Prácticamente el doble. Una " +
          "diferencia así indica que estaban metiendo en el cuerpo una fuente de calcio que los " +
          "demás no tomaban.",
      },
      {
        b: "parrafo",
        texto:
          "La explicación que propusieron los autores estaba escrita desde hacía dos mil años. " +
          "Plinio el Viejo menciona que los gladiadores bebían un preparado hecho con cenizas. " +
          "Ceniza vegetal disuelta: un chute de calcio, en una época sin farmacia, para gente que " +
          "se pasaba el día recibiendo golpes y necesitaba que sus huesos aguantaran.",
      },
      {
        b: "parrafo",
        texto:
          "Durante siglos ese detalle se leyó como una anécdota pintoresca de las que los autores " +
          "antiguos meten sin comprobar. Los huesos de Éfeso dicen que era verdad.",
      },
      {
        b: "rayo",
        texto:
          "Bebían cenizas disueltas, y sus esqueletos tienen el doble de estroncio que los de sus " +
          "vecinos. Una anécdota de Plinio confirmada dos mil años después por un espectrómetro.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Otro estudio del mismo cementerio examinó al menos sesenta y ocho " +
          "individuos. Once de ellos, un dieciséis por ciento, tienen traumatismos craneales " +
          "<strong>ya cicatrizados</strong>: golpes en la cabeza recibidos, tratados y superados. " +
          "Y cicatrizaron muy bien, que es lo esperable con el nivel de atención médica que " +
          "recibía gente tan cara de reponer.",
      },
    ],
  },
  {
    id: "como-erupciona-un-volcan",
    titulo: "Cómo erupciona un volcán",
    categoria: "Planeta Tierra",
    color: "var(--plum)",
    /* Serie «como-erupciona-un-volcan», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Lo que sale disparado no es la roca, sino el gas que llevaba disuelto» */
    encargo: "Lo que sale disparado no es la roca, sino el gas que llevaba disuelto",
    fotos: [
      {
        local: p_como_erupciona_un_volcan,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Lo que sale disparado no es la roca, sino el gas que llevaba disuelto",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Durante dos siglos se buscó el fuego, y el fuego no estaba",
      },
      {
        b: "parrafo",
        texto:
          "El nombre ya apuntaba en la dirección equivocada. <strong>Volcán</strong> viene de " +
          "Vulcano, el dios romano de la fragua, y durante siglos se dio por hecho que debajo de " +
          "la montaña había algo ardiendo. A finales del siglo XVIII la explicación con más " +
          "prestigio en Europa la firmaba Abraham Gottlob Werner, geólogo alemán y fundador de la " +
          "escuela llamada <strong>neptunismo</strong>: los volcanes se producían por la " +
          "combustión de capas de carbón subterráneas.",
      },
      {
        b: "parrafo",
        texto:
          "No era una idea ridícula. Explicaba el humo, explicaba el calor y explicaba por qué " +
          "algunos volcanes se apagaban para siempre. Lo único que no explicaba era de dónde " +
          "salía la roca líquida, y ese detalle acabó hundiendo la teoría entera.",
      },
      {
        b: "parrafo",
        texto:
          "Hoy sabemos que en un volcán no arde absolutamente nada. No hay combustión, no hay " +
          "llama y no hay combustible. Hay roca fundida que sube, y esa roca lleva algo disuelto " +
          "dentro.",
      },
      {
        b: "rayo",
        texto:
          "Un volcán no es un fuego que sale de la tierra. Es una botella a presión que se " +
          "destapa.",
      },
      {
        b: "rotulo",
        texto:
          "La roca líquida lleva agua dentro, y ahí está todo el mecanismo",
      },
      {
        b: "parrafo",
        texto:
          "Entonces, ¿qué es exactamente lo que sale disparado? Es simple: <strong>el " +
          "gas</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "El magma se forma en profundidad y sube porque pesa menos que la roca sólida que lo " +
          "rodea. Ahí abajo la presión es enorme, y bajo esa presión el magma mantiene disueltos " +
          "agua y dióxido de carbono, igual que una botella cerrada mantiene disuelto el gas de " +
          "un refresco. Mientras sube, la presión que lo aprieta va cayendo. Al caer la presión, " +
          "el agua deja de estar disuelta y se convierte en burbujas de vapor. Las burbujas " +
          "ocupan muchísimo más sitio que el agua que las formó, así que el magma se hincha y " +
          "empuja con más fuerza hacia arriba, sube más deprisa y pierde presión todavía más " +
          "rápido. Así se dispara una erupción.",
      },
      {
        b: "parrafo",
        texto:
          "La comparación con el refresco funciona mejor de lo que parece, y funciona sobre todo " +
          "por la mitad que nadie mira. Una botella no revienta porque el líquido se caliente: " +
          "revienta porque le quitas el tapón. A un volcán le pasa exactamente lo mismo, y su " +
          "tapón es el peso de la roca que tiene encima.",
      },
      {
        b: "parrafo",
        texto:
          "Cuando el magma es lo bastante espeso, las burbujas no consiguen subir solas y llegan " +
          "a la superficie todavía atrapadas, a más presión que el aire que las rodea. Al " +
          "liberarse de golpe desgarran el magma en fragmentos diminutos. A esos fragmentos los " +
          "llamamos ceniza volcánica.",
      },
      {
        b: "rayo",
        texto:
          "La ceniza de un volcán no es ceniza: no se ha quemado nada para producirla. Son " +
          "astillas de roca líquida rotas por burbujas.",
      },
      {
        b: "parrafo",
        texto:
          "¿Sabías que…? La lava del Kīlauea sale a unos 1.170 grados. Un horno doméstico a " +
          "máxima potencia no pasa de 250.",
      },
    ],
  },
  {
    id: "como-funciona-el-wifi",
    titulo: "Cómo funciona el wifi",
    categoria: "Tecnología",
    color: "var(--clay)",
    /* Serie «como-funciona-el-wifi», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El wifi es radio, y tu móvil también es la emisora» */
    encargo: "El wifi es radio, y tu móvil también es la emisora",
    fotos: [
      {
        local: p_como_funciona_el_wifi,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El wifi es radio, y tu móvil también es la emisora",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "No hay ninguna tecnología nueva debajo: son ondas de radio",
      },
      {
        b: "parrafo",
        texto:
          "Conviene empezar quitando el misterio. El wifi es radio. No es una variante ni un " +
          "pariente lejano: son ondas de radio de las de toda la vida, emitidas y recibidas por " +
          "antenas, exactamente igual que las de una emisora de FM.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que cambia es la frecuencia. El wifi usa sobre todo dos bandas: la de 2,4 " +
          "gigahercios, cuyas ondas miden 120 milímetros, y la de 5 gigahercios, con ondas de 60 " +
          "milímetros. Son ondas de un palmo y de medio palmo, respectivamente, y esa medida " +
          "física va a explicar todo lo demás.",
      },
      {
        b: "parrafo",
        texto:
          "Y hay una diferencia importante con la radio de siempre. Una emisora de FM habla y tú " +
          "escuchas. En el wifi la conversación va en los dos sentidos, así que tu teléfono no es " +
          "solo un receptor: es también un transmisor de radio, con su antena, emitiendo cada vez " +
          "que envía cualquier cosa.",
      },
      {
        b: "rayo",
        texto:
          "El router no reparte internet, reparte ondas de radio. Y no está hablando solo: cada " +
          "aparato conectado le está contestando desde su propia antena.",
      },
      {
        b: "parrafo",
        texto:
          "¿Sabías que…? El nombre no significa nada. Según uno de los miembros fundadores de la " +
          "asociación que lo creó, «Wi-Fi» no es la abreviatura de <em>wireless fidelity</em> ni " +
          "de ninguna otra cosa: se eligió simplemente porque era un nombre más fácil de " +
          "recordar.",
      },
      {
        b: "rotulo",
        texto:
          "Las dos bandas del router son un intercambio, no una escala de calidad",
      },
      {
        b: "parrafo",
        texto:
          "Casi todos los routers ofrecen dos redes, y mucha gente elige la de 5 gigahercios por " +
          "costumbre, dando por hecho que el número mayor es el mejor. Es un intercambio, no una " +
          "escala.",
      },
      {
        b: "parrafo",
        texto:
          "La regla general del asunto es esta: las frecuencias más bajas tienen más alcance pero " +
          "menos capacidad. Es decir, la banda de 2,4 gigahercios llega más lejos y transporta " +
          "menos datos por segundo; la de 5 llega menos lejos y transporta más.",
      },
      {
        b: "parrafo",
        texto:
          "Y hay un segundo factor que decide la partida en cualquier casa. Las ondas de 5 " +
          "gigahercios son absorbidas en mucha mayor medida por los materiales de construcción " +
          "habituales que las de 2,4, así que su alcance real es todavía más corto en cuanto hay " +
          "tabiques por medio.",
      },
      {
        b: "parrafo",
        texto:
          "Traducido a la vida diaria, la conclusión es bastante clara. En el salón, con el " +
          "router a la vista, la banda de 5 va a ir mejor. En la habitación del fondo, con dos " +
          "paredes de por medio, la de 2,4 puede ser la única que llegue, aunque sobre el papel " +
          "sea la lenta. La banda buena no es una de las dos: es la que corresponda al sitio " +
          "donde estés.",
      },
      {
        b: "rayo",
        texto:
          "Elegir banda de wifi no es elegir entre rápido y lento. Es elegir entre llegar lejos y " +
          "llevar mucho, y ningún router puede darte las dos cosas a la vez.",
      },
    ],
  },
  {
    id: "como-funciona-la-bolsa-de-valores",
    titulo: "Cómo funciona la bolsa de valores",
    categoria: "Economía",
    color: "var(--teal)",
    /* Serie «como-funciona-la-bolsa-de-valores», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La bolsa se inventó porque el dinero no se podía sacar» */
    encargo: "La bolsa se inventó porque el dinero no se podía sacar",
    fotos: [
      {
        local: p_como_funciona_la_bolsa_de_valores,
        autor: "",
        licencia: "Pexels License",
        alt:
          "La bolsa se inventó porque el dinero no se podía sacar",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Una expedición a Asia necesitaba un dinero que nadie pudiera retirar",
      },
      {
        b: "parrafo",
        texto:
          "El 20 de marzo de 1602, los Estados Generales de los Países Bajos crearon la Compañía " +
          "Neerlandesa de las Indias Orientales agrupando en una sola empresa a las compañías " +
          "comerciales que ya operaban por su cuenta.",
      },
      {
        b: "parrafo",
        texto:
          "El problema que tenía delante era de calendario, no de dinero. Un barco que salía " +
          "hacia Asia tardaba años en volver, si volvía. Comprar los barcos, armarlos, pagar " +
          "tripulaciones y mantener puestos comerciales al otro lado del mundo exigía un capital " +
          "enorme puesto por adelantado y disponible durante muchísimo tiempo.",
      },
      {
        b: "parrafo",
        texto:
          "Por eso el contrato fundacional fijó una duración de veintiún años, con cuentas " +
          "cerradas solo al final de cada década. Traducido: quien ponía dinero no podía pedirlo " +
          "de vuelta. No había manera de decir «me arrepiento» al segundo año y recuperar lo " +
          "invertido, porque ese dinero estaba en forma de barcos navegando por el océano Índico.",
      },
      {
        b: "rayo",
        texto:
          "El obstáculo de las grandes empresas comerciales nunca fue encontrar dinero. Fue " +
          "encontrar dinero que aguantara quieto todos los años que tarda un barco en dar " +
          "beneficios.",
      },
      {
        b: "rotulo",
        texto:
          "La solución fue separar el dinero de quien lo había puesto",
      },
      {
        b: "parrafo",
        texto:
          "Aquí llega la invención, y es de esas ideas que parecen obvias cuando ya están hechas.",
      },
      {
        b: "parrafo",
        texto:
          "Si el problema es que el inversor quiere poder salir y la empresa necesita que el " +
          "dinero se quede, se pueden satisfacer las dos cosas a la vez con una condición: que el " +
          "que salga sea el inversor, no el dinero. Tú no retiras tu capital de la compañía; le " +
          "vendes tu parte a otra persona, que ocupa tu sitio. La compañía no nota nada, porque " +
          "su caja no se ha movido. Lo único que ha cambiado es un nombre en un registro.",
      },
      {
        b: "parrafo",
        texto:
          "Para que eso funcionara hicieron falta dos piezas más. La primera: que cualquier " +
          "ciudadano de la República neerlandesa pudiera comprar participaciones, y no solo un " +
          "círculo de socios conocidos. La segunda: la responsabilidad limitada, es decir, que " +
          "quien ponía dinero arriesgaba lo que había puesto y nada más, de modo que un desastre " +
          "en el otro extremo del mundo no podía arruinarle la casa.",
      },
      {
        b: "parrafo",
        texto:
          "Con las tres piezas juntas apareció el mercado donde esas participaciones cambiaban de " +
          "mano, al principio literalmente al aire libre. Aquellos corros acabaron siendo la " +
          "Bolsa de Ámsterdam.",
      },
      {
        b: "rayo",
        texto:
          "La bolsa no se inventó para especular ni para enriquecerse deprisa. Se inventó para " +
          "resolver una contradicción: que el dinero se quedara y el dueño se pudiera marchar.",
      },
    ],
  },
  {
    id: "la-gravedad-no-es-una-fuerza",
    titulo: "Cómo funciona la gravedad",
    categoria: "Ciencia",
    color: "var(--plum)",
    /* Serie «como-funciona-la-gravedad», número 3. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La gravedad no es una fuerza» */
    encargo: "Decenas de líneas finas en rojo, magenta y violeta sobre negro, girando en espiral hacia un punto oscuro.",
    fotos: [
      {
        local: p_la_gravedad_no_es_una_fuerza,
        autor: "",
        licencia: "Pendiente de confirmar con Pablo",
        alt:
          "Decenas de líneas finas en rojo, magenta y violeta sobre negro, girando en espiral " +
          "hacia un punto oscuro.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    /* Imagen que pide su texto para DENTRO, todavía sin hacer:
       IMAGEN — lámina tensa deformada por una esfera pesada en el centro, en corte lateral, sin fondo estrellado. Lo importante es la deformación de la malla. Diagrama propio en SVG. */
    bloques: [
      {
        b: "rotulo",
        texto:
          "Nada tira de la Tierra",
      },
      {
        b: "parrafo",
        texto:
          "En 1915 Einstein contestó a la pregunta que Newton había dejado abierta doscientos " +
          "años antes, y lo hizo de la manera más radical posible: tirando la pregunta a la " +
          "basura. Newton quería saber qué fuerza produce la gravedad y por qué actúa a " +
          "distancia. Einstein respondió que no hay tal fuerza, de modo que la pregunta estaba " +
          "mal planteada desde el principio.",
      },
      {
        b: "parrafo",
        texto:
          "Su propuesta fue que la gravedad <strong>no es una fuerza que tire de las " +
          "cosas.</strong> No hay nada agarrando la manzana, ni cuerdas invisibles sujetando a la " +
          "Tierra en su órbita, ni acción a distancia que explicar. Lo que hay es espacio y " +
          "tiempo deformados. La masa curva el espacio-tiempo a su alrededor, igual que una bola " +
          "pesada hunde una lona tensada, y los objetos que pasan por ahí no están siendo " +
          "empujados ni atraídos por nada: siguen el camino más recto disponible en un terreno " +
          "que ha dejado de ser plano. Se mueven en línea recta, solo que la línea recta ya no es " +
          "lo que era.",
      },
      {
        b: "parrafo",
        texto:
          "Así que la Tierra no orbita al Sol porque el Sol la sujete de algún modo. Orbita " +
          "porque el Sol ha hundido el espacio a su alrededor, y en ese espacio hundido la " +
          "trayectoria más recta que existe resulta ser una elipse cerrada. Nadie tira de nada; " +
          "el planeta simplemente va todo lo derecho que se puede ir en el sitio donde está.",
      },
      {
        b: "parrafo",
        texto:
          "Conviene avisar de que la metáfora de la lona tiene una trampa importante, y es de " +
          "esas que conviene señalar en voz alta. Para que la bola hunda la tela hace falta que " +
          "algo tire de ella hacia abajo, es decir, hace falta una gravedad previa: la imagen usa " +
          "la gravedad para explicar la gravedad. Sirve estupendamente para hacerse una idea de " +
          "qué significa que un espacio esté deformado, y no sirve en absoluto como explicación " +
          "literal del mecanismo.",
      },
      {
        b: "rayo",
        texto:
          "Según Einstein nada tira de la Tierra. El Sol ha hundido el espacio a su alrededor, y " +
          "la órbita es la línea más recta que queda disponible.",
      },
      {
        b: "rotulo",
        texto:
          "Un eclipse decidió quién tenía razón",
      },
      {
        b: "parrafo",
        texto:
          "Una teoría tan contraria al sentido común necesitaba algo más que elegancia " +
          "matemática, y afortunadamente hacía una predicción que se podía comprobar. Si lo que " +
          "se curva es el espacio, entonces <strong>la luz también debería torcerse</strong> al " +
          "pasar cerca de algo muy masivo, a pesar de no tener masa y de que ninguna fuerza " +
          "gravitatoria clásica pudiera tirar de ella. Y lo mejor es que la predicción no era " +
          "cualitativa sino numérica, así que distinguía a los dos rivales con una cifra: con la " +
          "gravedad de Newton, la luz de una estrella que pasara rozando el borde del Sol debía " +
          "desviarse 0,83 segundos de arco; con la de Einstein, 1,75. Exactamente el doble.",
      },
      {
        b: "parrafo",
        texto:
          "El problema práctico era considerable, porque para ver estrellas justo al lado del Sol " +
          "hace falta que el Sol se apague, y eso solo ocurre durante los pocos minutos de un " +
          "eclipse total. Así que el 29 de mayo de 1919, dos expediciones británicas se " +
          "repartieron el planeta para cazar uno: una viajó a la isla de Príncipe, frente a la " +
          "costa africana, y otra a Sobral, en el interior de Brasil. Fotografiaron las estrellas " +
          "que rodeaban al Sol tapado y compararon después sus posiciones con las que tenían esas " +
          "mismas estrellas en fotografías tomadas meses antes, cuando el Sol estaba en otra " +
          "parte del cielo.",
      },
      {
        b: "parrafo",
        texto:
          "La luz se había desviado. Y se había desviado el doble de lo que decía Newton, que era " +
          "justo lo que Einstein había predicho cuatro años antes sobre el papel. El anuncio de " +
          "los resultados, en noviembre de 1919, convirtió a Einstein en una celebridad mundial " +
          "en cuestión de días, y lo hizo además en un momento muy particular: un científico " +
          "alemán acababa de ser confirmado por astrónomos británicos apenas un año después de " +
          "que sus dos países terminaran de matarse en las trincheras.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Tu móvil depende de esto. Los satélites del GPS llevan relojes que, por " +
          "estar más lejos de la masa de la Tierra, se adelantan respecto a los de la superficie, " +
          "y el efecto de su velocidad orbital los atrasa un poco menos de lo que aquello los " +
          "adelanta. Si no se corrigiera el desfase neto, el mapa se te iría desviando kilómetros " +
          "cada día.",
      },
      {
        b: "rayo",
        texto:
          "En 1919 dos expediciones fotografiaron un eclipse para medir si la luz se torcía. Se " +
          "torció el doble de lo que predecía Newton.",
      },
    ],
  },
  {
    id: "como-funciona-la-inteligencia-artificial",
    titulo: "Cómo funciona la inteligencia artificial",
    categoria: "Tecnología",
    color: "var(--sage)",
    /* Serie «como-funciona-la-inteligencia-artificial», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Una red neuronal no guarda información, guarda números» */
    encargo: "Una red neuronal no guarda información, guarda números",
    fotos: [
      {
        local: p_como_funciona_la_inteligencia_artificial,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Una red neuronal no guarda información, guarda números",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Una neurona artificial hace una suma y poco más",
      },
      {
        b: "parrafo",
        texto:
          "La idea es más vieja de lo que parece. En 1958, el psicólogo <strong>Frank " +
          "Rosenblatt</strong> describió el perceptrón, una de las primeras redes neuronales que " +
          "llegaron a construirse, financiada por la Oficina de Investigación Naval de Estados " +
          "Unidos. Hace casi setenta años de eso.",
      },
      {
        b: "parrafo",
        texto:
          "El elemento básico sigue siendo el mismo hoy y es de una simplicidad que descoloca. " +
          "Una neurona artificial recibe señales de otras neuronas conectadas a ella. Esas " +
          "señales son números reales, sin más. La neurona las procesa y emite a su vez una señal " +
          "hacia las siguientes.",
      },
      {
        b: "parrafo",
        texto:
          "El detalle importante está en las conexiones, no en las neuronas. La fuerza de la " +
          "señal que viaja por cada conexión la determina un número llamado " +
          "<strong>peso</strong>, y la salida de cada neurona se calcula aplicando al total de " +
          "sus entradas una función no lineal, que es lo que impide que toda la red se reduzca a " +
          "una suma gigante.",
      },
      {
        b: "parrafo",
        texto:
          "Cambia los pesos y cambias lo que hace la red entera, sin tocar ni una sola de sus " +
          "neuronas.",
      },
      {
        b: "rayo",
        texto:
          "En una red neuronal el conocimiento no está en las piezas, está en la fuerza de las " +
          "conexiones entre ellas. Las neuronas son idénticas; lo único que distingue a una red " +
          "que reconoce caras de otra que traduce del ruso son sus números.",
      },
      {
        b: "rotulo",
        texto:
          "Entrenar significa corregir esos números millones de veces",
      },
      {
        b: "parrafo",
        texto:
          "Entonces, ¿cómo se llega a los números correctos? Nadie los escribe. Se buscan a base " +
          "de equivocarse.",
      },
      {
        b: "parrafo",
        texto:
          "El procedimiento se llama <strong>retropropagación</strong> y consiste en algo " +
          "bastante intuitivo cuando se cuenta despacio. Se le da un ejemplo a la red, la red " +
          "produce una respuesta, y se compara esa respuesta con la correcta. La diferencia entre " +
          "las dos es el error. Entonces ese error se propaga hacia atrás, desde los nodos de " +
          "salida hasta los de entrada, ajustando los pesos por el camino.",
      },
      {
        b: "parrafo",
        texto:
          "Para saber en qué dirección moverlos se calcula la pendiente de la función de error " +
          "respecto a cada peso, es decir, se pregunta a cada número si subiendo un poco el error " +
          "crece o disminuye, y se le mueve hacia donde disminuye. Repite eso millones de veces, " +
          "con millones de ejemplos, y los pesos van cayendo hacia una combinación que funciona.",
      },
      {
        b: "parrafo",
        texto:
          "Y aquí está la consecuencia que casi nadie tiene presente. Cuando el entrenamiento " +
          "termina, lo que queda guardado no son los textos ni las imágenes que se le enseñaron. " +
          "Es un montón de números. El modelo no contiene una biblioteca que consulta: contiene " +
          "el resultado de haber sido corregido muchísimas veces mientras la leía.",
      },
      {
        b: "rayo",
        texto:
          "Un modelo de inteligencia artificial no es un archivo con lo que aprendió dentro. Es " +
          "la forma en que quedaron sus conexiones después de equivocarse millones de veces, y " +
          "ese es todo su contenido.",
      },
    ],
  },
  {
    id: "como-funciona-un-coche",
    titulo: "Cómo funciona un coche",
    categoria: "Tecnología",
    color: "var(--ochre)",
    /* Serie «como-funciona-un-coche», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «En un motor de cuatro tiempos, solo uno de los cuatro empuja» */
    encargo: "En un motor de cuatro tiempos, solo uno de los cuatro empuja",
    fotos: [
      {
        local: p_como_funciona_un_coche,
        autor: "",
        licencia: "Pexels License",
        alt:
          "En un motor de cuatro tiempos, solo uno de los cuatro empuja",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "De los cuatro tiempos, tres consumen energía en vez de darla",
      },
      {
        b: "parrafo",
        texto:
          "Cuando pensamos en el motor de un coche, la imagen que aparece es la de una explosión " +
          "que empuja. La imagen es correcta, pero se queda en la cuarta parte de lo que ocurre " +
          "ahí dentro.",
      },
      {
        b: "parrafo",
        texto:
          "El ciclo que sigue usando hoy casi cualquier coche de gasolina lo cerró el ingeniero " +
          "alemán <strong>Nikolaus Otto</strong>, que llevaba quince años detrás de ello: en 1861 " +
          "probó una réplica del motor de Lenoir, en 1864 montó su propia empresa, y en 1876 " +
          "consiguió por fin un motor que comprimía la mezcla antes de encenderla. De ahí viene " +
          "el nombre con el que aún se conoce el ciclo. Lo que aportó Otto no fue la explosión, " +
          "sino el orden: cuatro movimientos que el pistón repite sin parar y siempre en la misma " +
          "secuencia.",
      },
      {
        b: "parrafo",
        texto:
          "Vayamos uno por uno. En la <strong>admisión</strong>, el pistón baja y aspira aire y " +
          "combustible hacia el interior del cilindro. En la <strong>compresión</strong>, sube y " +
          "aprieta esa mezcla contra la parte alta del cilindro hasta dejarla en una fracción del " +
          "volumen que ocupaba. En la <strong>combustión</strong> salta la chispa, la mezcla arde " +
          "y la presión de los gases empuja el pistón hacia abajo con fuerza. Y en el " +
          "<strong>escape</strong>, el pistón vuelve a subir para expulsar los gases quemados y " +
          "dejar el cilindro libre para la siguiente admisión.",
      },
      {
        b: "parrafo",
        texto:
          "Ahora fíjate en la cuenta, porque es donde está la sorpresa. De los cuatro " +
          "movimientos, solo el tercero produce trabajo. Los otros tres lo consumen: aspirar " +
          "cuesta, comprimir cuesta bastante y expulsar cuesta. Durante tres cuartas partes del " +
          "recorrido, el motor no está empujando el coche. Está empujándose a sí mismo.",
      },
      {
        b: "rayo",
        texto:
          "Un motor de cuatro tiempos no es una máquina que empuje sin parar. Es una máquina que " +
          "empuja una vez de cada cuatro y tiene que pagar los otros tres movimientos con lo que " +
          "ganó en el primero.",
      },
      {
        b: "rotulo",
        texto:
          "El volante de inercia devuelve la energía justo cuando hace falta",
      },
      {
        b: "parrafo",
        texto:
          "Entonces, ¿quién sube el pistón para comprimir la mezcla siguiente, si en ese momento " +
          "no hay ninguna explosión empujándolo? Es simple: la energía sobrante de la explosión " +
          "anterior, guardada durante unos milisegundos en una pieza que gira.",
      },
      {
        b: "parrafo",
        texto:
          "En el extremo del cigüeñal hay un disco pesado, el <strong>volante de " +
          "inercia</strong>, y su único trabajo es almacenar movimiento. Cuando el pistón baja " +
          "empujado por la combustión, no toda esa fuerza sale hacia las ruedas: una parte se " +
          "queda acelerando ese disco. Y cuando llega el tiempo de compresión, el disco, que " +
          "sigue girando por pura inercia, arrastra al pistón hacia arriba y le devuelve prestada " +
          "la energía que necesita para apretar la mezcla nueva. El volante no crea nada; solo " +
          "reparte en el tiempo lo que llega de golpe.",
      },
      {
        b: "parrafo",
        texto:
          "Ahí aparece además la razón de que los motores tengan varios cilindros, que rara vez " +
          "se explica. Un ciclo completo ocupa dos vueltas de cigüeñal, es decir, 720 grados. Si " +
          "repartes esos 720 grados entre cuatro cilindros a partes iguales, sale una explosión " +
          "cada 180 grados. Y como el tiempo de combustión dura exactamente 180 grados, la " +
          "consecuencia es limpia: en un motor de cuatro cilindros siempre hay, en cualquier " +
          "instante, un pistón en plena explosión. Nunca queda un hueco.",
      },
      {
        b: "parrafo",
        texto:
          "Un motor de un solo cilindro no tiene esa suerte. Recibe un empujón cada dos vueltas y " +
          "depende por completo del volante para llegar al siguiente, y por eso entrega su fuerza " +
          "a tirones.",
      },
      {
        b: "rayo",
        texto:
          "Los cilindros de más no están solo para dar potencia. Están para que nunca deje de " +
          "haber uno empujando mientras los otros tres hacen el trabajo que cuesta dinero.",
      },
    ],
  },
  {
    id: "como-funciona-un-hormiguero",
    titulo: "Cómo funciona un hormiguero",
    categoria: "Naturaleza",
    color: "var(--slate)",
    /* Serie «como-funciona-un-hormiguero», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «En un hormiguero no manda nadie, y la reina tampoco» */
    encargo: "En un hormiguero no manda nadie, y la reina tampoco",
    fotos: [
      {
        local: p_como_funciona_un_hormiguero,
        autor: "",
        licencia: "Pexels License",
        alt:
          "En un hormiguero no manda nadie, y la reina tampoco",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La palabra «reina» nos hizo buscar una jerarquía que no existe",
      },
      {
        b: "parrafo",
        texto:
          "Quizá te imagines el hormiguero como una fábrica bien organizada: una jefa en el " +
          "centro, unas obreras que reciben instrucciones y un reparto de tareas decidido desde " +
          "arriba. Es la imagen que arrastra la propia palabra <strong>reina</strong>, y es la " +
          "que hace que la respuesta real resulte tan difícil de creer.",
      },
      {
        b: "parrafo",
        texto:
          "La reina no reparte tareas. No supervisa, no decide y no da órdenes. Puso los huevos " +
          "de los que salieron todas las demás y sigue poniéndolos: ese es su trabajo completo. " +
          "Si desapareciera mañana, el hormiguero no se quedaría sin dirección, porque no la " +
          "tenía; se quedaría sin recambio, que es otra cosa muy distinta y mucho más lenta.",
      },
      {
        b: "parrafo",
        texto:
          "Deborah M. Gordon, bióloga de la Universidad de Stanford, lleva más de treinta años " +
          "estudiando colonias de hormigas cosechadoras en el desierto de Arizona, y lo dice sin " +
          "ningún rodeo:",
      },
      {
        b: "cita",
        texto:
          "Una colonia de insectos sociales funciona sin ningún control central: nadie está al " +
          "mando, y ningún miembro de la colonia dirige la conducta de otro.",
        autor: "Deborah M. Gordon",
      },
      {
        b: "rayo",
        texto:
          "El hormiguero hace cosas complicadas sin que exista en ningún punto un plan de esas " +
          "cosas.",
      },
      {
        b: "rotulo",
        texto:
          "El sistema funciona contando encuentros, no obedeciendo",
      },
      {
        b: "parrafo",
        texto:
          "Entonces, ¿cómo decide una hormiga concreta si hoy sale a buscar comida o se queda " +
          "arreglando el nido? Es simple: <strong>por la frecuencia con la que se cruza con " +
          "otras</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Cuando dos hormigas se encuentran se tocan con las antenas, y en ese contacto " +
          "brevísimo cada una percibe el olor de la otra. Lo que importa no es el mensaje, porque " +
          "no hay mensaje. Lo que importa es el ritmo. Una recolectora que está esperando dentro " +
          "del nido decide salir en función de la frecuencia con la que le llegan compañeras que " +
          "vuelven con comida. Si vuelven muchas y vuelven seguidas, salen más. Si el goteo se " +
          "espacia, salen menos.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en lo que consigue esa regla tan tonta. Cuando hay mucha comida ahí fuera, las " +
          "recolectoras vuelven rápido, los encuentros se aceleran y la colonia manda más " +
          "hormigas al campo. Cuando no hay, tardan, los encuentros se espacian y la colonia " +
          "frena sola. El hormiguero ajusta cuántas obreras trabajan según lo que hay disponible, " +
          "sin que ninguna hormiga sepa cuánta comida hay ni cuántas compañeras han salido.",
      },
      {
        b: "rayo",
        texto:
          "Ninguna hormiga tiene una idea del hormiguero. La coordinación no está en las " +
          "hormigas: está en el ritmo con el que se tropiezan.",
      },
    ],
  },
  {
    id: "como-funciona-un-iman",
    titulo: "Cómo funciona un imán",
    categoria: "Ciencia",
    color: "var(--plum)",
    /* Serie «como-funciona-un-iman», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un imán no tiene nada dentro que no tenga cualquier trozo de hierro» */
    encargo: "Un imán no tiene nada dentro que no tenga cualquier trozo de hierro",
    fotos: [
      {
        local: p_como_funciona_un_iman,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un imán no tiene nada dentro que no tenga cualquier trozo de hierro",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Cada electrón es ya un imán diminuto",
      },
      {
        b: "parrafo",
        texto:
          "El magnetismo no es una sustancia que unos materiales tengan y otros no. Empieza mucho " +
          "más abajo, en cada electrón por separado.",
      },
      {
        b: "parrafo",
        texto:
          "Cada electrón de un átomo posee un <strong>momento magnético</strong> que depende de " +
          "su estado de espín, tal como lo describe la mecánica cuántica. Dicho en corto: todo " +
          "electrón es, por sí mismo, un imán minúsculo.",
      },
      {
        b: "parrafo",
        texto:
          "Entonces, ¿por qué no es magnético todo lo que existe? Porque los electrones van casi " +
          "siempre emparejados, y <strong>dos electrones emparejados cancelan mutuamente sus " +
          "momentos magnéticos</strong>. Uno apunta a un lado y el otro al contrario, y la suma " +
          "es cero.",
      },
      {
        b: "parrafo",
        texto:
          "De modo que solo aportan magnetismo los electrones <strong>desapareados</strong>, los " +
          "que se quedan solos en capas parcialmente llenas. Y eso ya no lo tiene cualquiera: los " +
          "materiales ferromagnéticos comunes son los metales de transición hierro, níquel y " +
          "cobalto, precisamente porque tienen muchos electrones desapareados en sus orbitales d.",
      },
      {
        b: "rayo",
        texto:
          "El magnetismo no aparece en unos pocos materiales por lo que tienen, sino por lo que " +
          "les falta: una pareja para cada electrón. En casi todo lo demás las parejas están " +
          "hechas y se anulan entre sí.",
      },
      {
        b: "rotulo",
        texto:
          "Un hierro sin imantar ya está lleno de imanes, solo que desordenados",
      },
      {
        b: "parrafo",
        texto:
          "Falta el paso decisivo, y es el que explica qué hace exactamente imantar algo.",
      },
      {
        b: "parrafo",
        texto:
          "Dentro de un material ferromagnético hay regiones diminutas llamadas <strong>dominios " +
          "magnéticos</strong>. Dentro de cada dominio, los espines se alinean espontáneamente y " +
          "apuntan todos en la misma dirección. Pero los espines de dominios distintos apuntan en " +
          "direcciones distintas, y sus campos magnéticos se cancelan entre sí.",
      },
      {
        b: "parrafo",
        texto:
          "Ahí está la clave. Un clavo corriente <strong>ya tiene dentro</strong> todos los " +
          "imanes necesarios, organizados en pequeños grupos perfectamente alineados. Lo que no " +
          "tiene es acuerdo entre esos grupos: cada uno mira hacia un lado, y a escala del clavo " +
          "entero el resultado se anula.",
      },
      {
        b: "parrafo",
        texto:
          "Imantarlo consiste solo en aplicar un campo externo que reoriente esos dominios y los " +
          "ponga a todos de acuerdo. No se le añade nada. Se le ordena lo que ya había.",
      },
      {
        b: "parrafo",
        texto:
          "Por eso funciona el truco de frotar un destornillador con un imán y dejarlo " +
          "magnetizado. No le estás pasando magnetismo de uno a otro, como quien transfiere un " +
          "líquido: le estás peinando los dominios.",
      },
      {
        b: "rayo",
        texto:
          "Imantar no es dar magnetismo, es poner de acuerdo el que ya estaba dentro. La " +
          "diferencia entre un imán y un trozo de hierro cualquiera no es de contenido, es de " +
          "organización.",
      },
    ],
  },
  {
    id: "como-funciona-un-reloj-mecanico",
    titulo: "Cómo funciona un reloj mecánico",
    categoria: "Tecnología",
    color: "var(--slate)",
    /* Serie «como-funciona-un-reloj-mecanico», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La pieza clave de un reloj no sirve para mover nada: sirve para frenar» */
    encargo: "La pieza clave de un reloj no sirve para mover nada: sirve para frenar",
    fotos: [
      {
        local: p_como_funciona_un_reloj_mecanico,
        autor: "",
        licencia: "Pexels License",
        alt:
          "La pieza clave de un reloj no sirve para mover nada: sirve para frenar",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Lo difícil de un reloj no es que ande, es que ande despacio",
      },
      {
        b: "parrafo",
        texto:
          "Empecemos por el problema, porque casi nadie lo plantea bien y todo lo demás depende " +
          "de él.",
      },
      {
        b: "parrafo",
        texto:
          "La energía de un reloj mecánico está en un muelle enrollado. Un muelle enrollado " +
          "quiere una sola cosa: desenrollarse, y hacerlo cuanto antes. Si conectaras ese muelle " +
          "directamente a las agujas, darían unas cuantas vueltas a toda velocidad y se pararían " +
          "en un par de segundos.",
      },
      {
        b: "parrafo",
        texto:
          "Así que el reto de un reloj nunca fue conseguir movimiento. Movimiento sobra. El reto " +
          "era <strong>administrarlo</strong>: soltar esa energía poquito a poco, durante un día " +
          "entero, y sobre todo soltarla siempre al mismo ritmo, porque de nada sirve que dure si " +
          "va más rápido cuando el muelle está apretado y más lento cuando se va aflojando.",
      },
      {
        b: "parrafo",
        texto:
          "La pieza que resuelve eso es la que da nombre a este short, y su trabajo consiste " +
          "íntegramente en estorbar.",
      },
      {
        b: "rayo",
        texto:
          "Un reloj no es una máquina de mover agujas, es una máquina de retener un muelle. Toda " +
          "su complejidad está al servicio de impedir que la energía salga de golpe.",
      },
      {
        b: "rotulo",
        texto:
          "El escape suelta un diente cada vez, y ese es el tic",
      },
      {
        b: "parrafo",
        texto:
          "La pieza se llama <strong>escape</strong>, y hace dos cosas a la vez que conviene " +
          "separar.",
      },
      {
        b: "parrafo",
        texto:
          "La primera: da impulsos al elemento regulador del tiempo y <strong>libera " +
          "periódicamente el tren de engranajes</strong> para que avance y mueva las agujas. La " +
          "segunda es la consecuencia: cada oscilación del volante o del péndulo libera " +
          "<strong>un diente</strong> de la rueda de escape, permitiendo que todo el mecanismo " +
          "avance una cantidad fija.",
      },
      {
        b: "parrafo",
        texto:
          "Un diente por oscilación. Ni más ni menos.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en lo que eso convierte. Por un lado entra un empuje continuo, el del muelle, " +
          "que no sabe de tiempo. Por el otro sale una serie de pasos idénticos y contables. El " +
          "escape es un traductor: transforma fuerza en cantidad.",
      },
      {
        b: "parrafo",
        texto:
          "Y de ahí sale también el sonido. Lo que produce el característico tictac de un reloj " +
          "mecánico es <strong>la detención brusca del diente</strong> del escape cada vez que la " +
          "rueda es retenida otra vez. Cada tic que oyes es un diente que ha sido atrapado, y por " +
          "tanto una unidad de tiempo contada.",
      },
      {
        b: "rayo",
        texto:
          "El tictac de un reloj no es un ruido de funcionamiento, es el sonido de la cuenta. " +
          "Cada uno de esos golpes es literalmente un diente frenado, y contar tics es contar " +
          "tiempo.",
      },
    ],
  },
  {
    id: "como-funciona-un-tren-de-alta-velocidad",
    titulo: "Cómo funciona un tren de alta velocidad",
    categoria: "Tecnología",
    color: "var(--clay)",
    /* Serie «como-funciona-un-tren-de-alta-velocidad», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Lo difícil de la alta velocidad no es el tren, es la vía» */
    encargo: "Lo difícil de la alta velocidad no es el tren, es la vía",
    fotos: [
      {
        local: p_como_funciona_un_tren_de_alta_velocidad,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Lo difícil de la alta velocidad no es el tren, es la vía",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "A partir de cierta velocidad, los defectos del trazado se multiplican",
      },
      {
        b: "parrafo",
        texto:
          "Se considera alta velocidad ferroviaria a las líneas construidas para al menos " +
          "<strong>250 kilómetros por hora</strong>, o a las líneas mejoradas para al menos 200. " +
          "Y lo primero que hay que entender es por qué no basta con poner un tren más rápido " +
          "sobre las vías que ya existen.",
      },
      {
        b: "parrafo",
        texto:
          "A esas velocidades cambia la física de todo el sistema. Los efectos de cualquier " +
          "defecto geométrico del trazado se intensifican, la adherencia entre rueda y carril " +
          "disminuye, y la resistencia aerodinámica aumenta enormemente. Una irregularidad que a " +
          "80 por hora es un traqueteo, a 300 es un golpe capaz de descarrilar un convoy.",
      },
      {
        b: "parrafo",
        texto:
          "Por eso una línea de alta velocidad exige unas condiciones muy estrictas: " +
          "<strong>radios de curva grandes</strong>, <strong>pendientes suaves</strong> y un " +
          "trazado completamente segregado, sin un solo paso a nivel.",
      },
      {
        b: "rayo",
        texto:
          "Un tren de alta velocidad no es un tren normal con más potencia. Es un tren normal " +
          "circulando por un terreno preparado con tolerancias que el ferrocarril del siglo XIX " +
          "no necesitaba ni de lejos.",
      },
      {
        b: "rotulo",
        texto:
          "Una vía rápida no puede seguir el terreno",
      },
      {
        b: "parrafo",
        texto:
          "De esas exigencias sale la consecuencia visible, la que se nota mirando por la " +
          "ventanilla.",
      },
      {
        b: "parrafo",
        texto:
          "Un ferrocarril clásico se adapta al paisaje. Bordea la montaña, sigue el valle del " +
          "río, hace una curva cerrada para esquivar un pueblo y sube por donde el terreno se lo " +
          "permite. Fue construido cuando la velocidad era baja y el dinero, escaso, así que se " +
          "plegó a lo que había.",
      },
      {
        b: "parrafo",
        texto:
          "Una línea de alta velocidad no puede hacer eso. Con la exigencia de radios grandes y " +
          "pendientes suaves, casi ningún terreno real le sirve tal como está. Donde una vía " +
          "antigua rodea una colina, la nueva la atraviesa. Donde la antigua baja al valle y " +
          "vuelve a subir, la nueva lo cruza por encima.",
      },
      {
        b: "parrafo",
        texto:
          "De ahí que estas líneas sean una sucesión de túneles y viaductos, y de ahí también su " +
          "coste. Lo caro de la alta velocidad no son los trenes: es tener que fabricar un " +
          "terreno recto y llano donde no lo había.",
      },
      {
        b: "parrafo",
        texto:
          "Y explica una cosa que confunde a mucha gente. Un tren de alta velocidad puede " +
          "circular por vías convencionales, pero entonces va despacio, como cualquier otro. La " +
          "velocidad no viaja con el tren, está construida en el suelo.",
      },
      {
        b: "rayo",
        texto:
          "La alta velocidad no es una máquina, es una obra pública. El tren es la parte barata y " +
          "la que se puede comprar hecha; lo que cuesta décadas y miles de millones es el camino " +
          "por el que va.",
      },
    ],
  },
  {
    id: "como-funciona-una-camara-de-fotos",
    titulo: "Cómo funciona una cámara de fotos",
    categoria: "Tecnología",
    color: "var(--teal)",
    /* Serie «como-funciona-una-camara-de-fotos», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La imagen de una cámara se conocía desde hacía 2.200 años; lo difícil era quedársela» */
    encargo: "La imagen de una cámara se conocía desde hacía 2.200 años; lo difícil era quedársela",
    fotos: [
      {
        local: p_como_funciona_una_camara_de_fotos,
        autor: "",
        licencia: "Pexels License",
        alt:
          "La imagen de una cámara se conocía desde hacía 2.200 años; lo difícil era quedársela",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La cámara oscura está documentada en el siglo IV antes de Cristo",
      },
      {
        b: "parrafo",
        texto:
          "Una cámara de fotos es, en su parte óptica, una caja cerrada con un agujero pequeño. " +
          "La luz que entra por ese agujero proyecta en la pared del fondo una imagen invertida " +
          "de lo que hay fuera. Eso es todo, y no hace falta ninguna lente para que ocurra.",
      },
      {
        b: "parrafo",
        texto:
          "Lo llamativo es desde cuándo se sabe. El registro escrito más antiguo de la cámara " +
          "oscura es del <strong>siglo IV a. C.</strong>, y aparece en dos sitios a la vez sin " +
          "ninguna relación entre ellos: en Grecia, en los textos de " +
          "<strong>Aristóteles</strong>, y en China, en los de <strong>Mozi</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Es decir, dos culturas separadas por medio mundo describieron el mismo fenómeno en el " +
          "mismo siglo, y desde entonces cualquiera con una habitación a oscuras y un agujero " +
          "pudo verlo.",
      },
      {
        b: "parrafo",
        texto:
          "Durante los veintidós siglos siguientes, la cámara oscura se usó para observar " +
          "eclipses sin quemarse los ojos y como ayuda para dibujar: se proyectaba la escena " +
          "sobre un papel y se calcaba el contorno.",
      },
      {
        b: "rayo",
        texto:
          "La imagen fotográfica no hubo que inventarla. Llevaba proyectándose en las paredes de " +
          "las habitaciones oscuras desde antes de que existiera Roma, y cualquiera podía verla; " +
          "lo único que no se podía era llevársela.",
      },
      {
        b: "rotulo",
        texto:
          "El problema no era hacer la imagen, era impedir que se borrara",
      },
      {
        b: "parrafo",
        texto:
          "Ahí está el desplazamiento que hay que hacer para entender qué se inventó de verdad en " +
          "el siglo XIX. Nadie inventó la fotografía en el sentido de conseguir la imagen: la " +
          "imagen estaba disponible desde Aristóteles. Lo que se inventó fue " +
          "<strong>fijarla</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Y ese era un problema endiablado, porque las sustancias que reaccionan a la luz no " +
          "dejan de hacerlo cuando a ti te conviene. Se conseguía una imagen y después seguía " +
          "oscureciéndose hasta desaparecer del todo en cuanto se sacaba a la luz para mirarla. " +
          "Había que encontrar la manera de detener la reacción en el momento exacto y dejarla " +
          "congelada para siempre.",
      },
      {
        b: "parrafo",
        texto:
          "La primera vez que alguien lo consiguió fue <strong>Nicéphore Niépce</strong>, en 1826 " +
          "o 1827. La fotografía más antigua que se conserva de una imagen formada en una cámara " +
          "está hecha sobre una plancha de peltre pulido, y la sustancia sensible era una capa " +
          "fina de betún.",
      },
      {
        b: "parrafo",
        texto:
          "El precio en tiempo da la medida de lo precaria que era la técnica: la exposición se " +
          "ha dicho tradicionalmente que fue de ocho horas, aunque hoy se cree que fueron " +
          "<strong>varios días</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Y la técnica que funcionó de verdad se anunció poco después. El <strong>7 de enero de " +
          "1839</strong>, el primer procedimiento fotográfico práctico y completo se presentó en " +
          "una reunión de la Academia de Ciencias francesa, y sus instrucciones se hicieron " +
          "públicas el 19 de agosto de ese mismo año.",
      },
      {
        b: "rayo",
        texto:
          "Entre ver la imagen y poder guardarla pasaron veintidós siglos. La fotografía no es un " +
          "invento óptico, es un invento químico, y esa es la razón de que llegara tan tarde.",
      },
    ],
  },
  {
    id: "como-funciona-una-cerilla",
    titulo: "Cómo funciona una cerilla",
    categoria: "Ciencia",
    color: "var(--clay)",
    /* Serie «como-funciona-una-cerilla», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La mitad de la cerilla no está en la cerilla» */
    encargo: "La mitad de la cerilla no está en la cerilla",
    fotos: [
      {
        local: p_como_funciona_una_cerilla,
        autor: "",
        licencia: "Pexels License",
        alt:
          "La mitad de la cerilla no está en la cerilla",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Frotar dos cosas cualesquiera no enciende nada",
      },
      {
        b: "parrafo",
        texto:
          "Cuando enciendes una cerilla das por hecho que lo que arde está en la cabeza, y que la " +
          "caja solo sirve para hacer fricción. Es lo lógico y no es así.",
      },
      {
        b: "parrafo",
        texto:
          "Una cerilla de seguridad moderna <strong>no lleva fósforo</strong>. El fósforo rojo " +
          "está incrustado en la banda rugosa del lateral de la caja. Cabeza y raspador no son un " +
          "objeto y una herramienta: son dos mitades de una misma reacción, guardadas por " +
          "separado.",
      },
      {
        b: "parrafo",
        texto:
          "Por eso una cerilla de seguridad no prende contra una pared, ni contra una piedra, ni " +
          "contra la suela de un zapato. No es que la caja raspe mejor: es que la caja tiene un " +
          "ingrediente que la cerilla no tiene.",
      },
      {
        b: "rayo",
        texto:
          "La cerilla no es un objeto que arde. Es media reacción química, y la otra media viaja " +
          "en la caja.",
      },
      {
        b: "rotulo",
        texto:
          "Del roce a la llama, en el orden correcto",
      },
      {
        b: "parrafo",
        texto:
          "¿Y qué pasa exactamente al frotar? Es simple: <strong>cada pieza enciende a la " +
          "siguiente</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "El roce calienta un punto minúsculo del raspador y hace arder algo de fósforo rojo. " +
          "Esa pequeña llama alcanza la cabeza de la cerilla, donde está el <strong>clorato de " +
          "potasio</strong>, un compuesto que al calentarse libera oxígeno. Ese oxígeno, liberado " +
          "justo ahí y en abundancia, permite que arda el azufre y las demás sustancias " +
          "combustibles de la cabeza, aunque el aire de alrededor no bastaría. La cabeza arde a " +
          "mucha temperatura y prende la madera del palo, que ha sido tratada para arder " +
          "despacio. Así se enciende una cerilla.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en el papel del clorato de potasio, porque es la pieza elegante del asunto. No " +
          "arde: aporta oxígeno. Una cerilla lleva su propio oxígeno encima, y por eso una cabeza " +
          "de cerilla puede arder en sitios donde una astilla no lo haría.",
      },
      {
        b: "rayo",
        texto:
          "Lo que hace posible la llama no es un combustible mejor. Es llevar el comburente " +
          "puesto, para no depender del aire.",
      },
    ],
  },
  {
    id: "como-funciona-una-cerradura",
    titulo: "Cómo funciona una cerradura",
    categoria: "Tecnología",
    color: "var(--plum)",
    /* Serie «como-funciona-una-cerradura», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Una llave no abre la cerradura: solo quita lo que la bloquea» */
    encargo: "Una llave no abre la cerradura: solo quita lo que la bloquea",
    fotos: [
      {
        local: p_como_funciona_una_cerradura,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Una llave no abre la cerradura: solo quita lo que la bloquea",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Todo depende de una línea que tiene que quedar despejada",
      },
      {
        b: "parrafo",
        texto:
          "Dentro de una cerradura corriente hay dos piezas encajadas: un cilindro exterior fijo " +
          "y, dentro de él, un tambor que es la parte que gira cuando metes la llave. El punto " +
          "exacto donde se tocan las dos piezas se llama <strong>línea de corte</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Atravesando ambas piezas hay varios agujeros verticales, y en cada uno una pareja de " +
          "pines: uno abajo, que toca la llave, y otro encima, empujado hacia abajo por un " +
          "muelle. En reposo, los muelles hunden esos pines de manera que cada pareja queda " +
          "atravesando la línea de corte, con una parte en el cilindro fijo y otra en el tambor. " +
          "Cada pareja es un pasador que cruza la junta.",
      },
      {
        b: "parrafo",
        texto:
          "Mete una llave equivocada y los pines suben, pero suben mal: no quedan alineados con " +
          "la línea de corte, así que siguen cruzándola y el tambor no puede girar. Mete la " +
          "correcta y cada diente levanta su pareja exactamente hasta que la unión entre los dos " +
          "pines coincide con la línea. En ese instante, y solo en ese, no hay ninguna pieza " +
          "cruzando la junta y el tambor queda libre para girar.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en lo que eso significa. La llave no acciona ningún mecanismo ni empuja ningún " +
          "cerrojo. Se limita a levantar cinco o seis pines a cinco o seis alturas distintas, y " +
          "la fuerza de abrir la pones tú con la muñeca.",
      },
      {
        b: "rayo",
        texto:
          "Una llave no es una orden, es una plantilla de alturas. Lo único que hace es dejar " +
          "despejada una línea, y a partir de ahí la cerradura ya no tiene motivo para seguir " +
          "cerrada.",
      },
      {
        b: "rotulo",
        texto:
          "El invento es antiguo; lo moderno es el tamaño de la llave",
      },
      {
        b: "parrafo",
        texto:
          "El principio no se le ocurrió a nadie hace poco. Los fundamentos de la cerradura de " +
          "pines pueden remontarse al año 2000 a. C. en Egipto, donde consistía en un poste de " +
          "madera fijado a la puerta y un cerrojo horizontal que se deslizaba dentro del poste. " +
          "La idea de bloquear un cerrojo con pasadores que caen por su propio peso tiene cuatro " +
          "mil años.",
      },
      {
        b: "parrafo",
        texto:
          "La versión moderna tiene dos fechas y dos hombres del mismo nombre. En 1848, " +
          "<strong>Linus Yale padre</strong> inventó la cerradura de pines tal como la conocemos. " +
          "Y en 1861, <strong>Linus Yale hijo</strong> inventó y patentó algo que parece un " +
          "detalle menor y que lo cambió todo: una llave plana, pequeña, con el borde dentado.",
      },
      {
        b: "parrafo",
        texto:
          "Detente en esa segunda fecha, porque es donde está lo interesante. Lo que aportó el " +
          "hijo no fue seguridad, fue tamaño. Las llaves anteriores eran piezas grandes y " +
          "pesadas; la suya cabía en un bolsillo y se podía fabricar en serie a bajo coste. Ese " +
          "es el motivo por el que hoy hay una cerradura de pines en cada puerta del mundo y no " +
          "un sistema mejor.",
      },
      {
        b: "rayo",
        texto:
          "Lo que convirtió la cerradura de pines en el estándar mundial no fue que fuera la más " +
          "segura. Fue que su llave era lo bastante pequeña como para que todos pudiéramos llevar " +
          "varias encima.",
      },
    ],
  },
  {
    id: "como-funciona-una-pantalla-tactil",
    titulo: "Cómo funciona una pantalla táctil",
    categoria: "Tecnología",
    color: "var(--slate)",
    /* Serie «como-funciona-una-pantalla-tactil», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Una pantalla táctil no nota que la tocas, nota que estás cerca» */
    encargo: "Una pantalla táctil no nota que la tocas, nota que estás cerca",
    fotos: [
      {
        local: p_como_funciona_una_pantalla_tactil,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Una pantalla táctil no nota que la tocas, nota que estás cerca",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El dedo entra en el circuito porque tu cuerpo conduce la electricidad",
      },
      {
        b: "parrafo",
        texto:
          "El invento es bastante más antiguo que el teléfono que lo hizo famoso. En 1965, " +
          "<strong>Eric Johnson</strong>, del Royal Radar Establishment británico, publicó un " +
          "artículo describiendo su trabajo sobre pantallas táctiles capacitivas, y en 1967 lo " +
          "detalló con fotografías y diagramas. Más de cuarenta años antes del primer iPhone.",
      },
      {
        b: "parrafo",
        texto:
          "El montaje que describía es el mismo que llevas hoy en el bolsillo. Se parte de un " +
          "aislante, normalmente cristal, y se recubre con un conductor transparente, casi " +
          "siempre óxido de indio y estaño. Ese recubrimiento tiene que cumplir dos exigencias " +
          "que normalmente no van juntas: conducir la electricidad y dejar pasar la luz de la " +
          "pantalla que hay debajo. Esa combinación es la que obliga a usar un material tan poco " +
          "corriente.",
      },
      {
        b: "parrafo",
        texto:
          "Sobre esa capa hay un campo electrostático. Y aquí entra la parte que hace funcionar " +
          "el conjunto: el cuerpo humano también es un conductor eléctrico, así que al acercar un " +
          "dedo a la superficie el campo se deforma, y esa deformación se puede medir como un " +
          "cambio de capacidad.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en que en toda la descripción no aparece la palabra presión. La pantalla no " +
          "detecta que la has empujado. Detecta que hay un conductor donde antes no había " +
          "ninguno.",
      },
      {
        b: "rayo",
        texto:
          "Cuando tocas la pantalla del móvil, tu cuerpo pasa a formar parte de su circuito " +
          "eléctrico. No estás pulsando nada: estás modificando un campo con la conductividad de " +
          "tu propia mano.",
      },
      {
        b: "rotulo",
        texto:
          "Por eso los guantes no valen, y por eso las pantallas antiguas sí funcionaban con " +
          "ellos",
      },
      {
        b: "parrafo",
        texto:
          "De ese mecanismo salen todas las rarezas conocidas de estas pantallas, empezando por " +
          "la más fastidiosa.",
      },
      {
        b: "parrafo",
        texto:
          "Un guante es un material eléctricamente aislante, y colocado entre tu dedo y el " +
          "cristal impide que la pantalla note lo que tiene que notar. Muchas pantallas " +
          "capacitivas sencillamente no detectan un dedo a través de él, que es la causa de esa " +
          "escena universal de invierno de quitarse el guante con los dientes para contestar un " +
          "mensaje. Por la misma razón un bolígrafo cualquiera tampoco sirve: el plástico no " +
          "conduce.",
      },
      {
        b: "parrafo",
        texto:
          "Las pantallas de las máquinas antiguas —cajeros, agendas electrónicas, terminales de " +
          "tienda— funcionaban al revés y con cualquier cosa. Eran <strong>resistivas</strong>: " +
          "dos capas transparentes conductoras enfrentadas y separadas por una rendija de aire, " +
          "que se tocan entre sí cuando algo las aprieta desde fuera. Ahí sí hacía falta presión, " +
          "y ahí sí valía un guante, una uña, la punta de un lápiz o cualquier objeto rígido, " +
          "porque lo único que se pedía era empujar.",
      },
      {
        b: "parrafo",
        texto:
          "La versión moderna del sistema capacitivo llega todavía más lejos en la dirección " +
          "contraria. La llamada capacitiva proyectada puede detectar un dedo que se acerca a la " +
          "pantalla sin llegar a tocarla, y permite además notarlo a través de guantes finos.",
      },
      {
        b: "rayo",
        texto:
          "Las dos tecnologías tienen defectos opuestos y por el mismo motivo. La antigua no " +
          "distinguía qué la estaba tocando y funcionaba con todo; la moderna solo reconoce " +
          "conductores, y a cambio no necesita que la toquen.",
      },
    ],
  },
  {
    id: "como-genera-electricidad-un-molino-de-viento",
    titulo: "Cómo genera electricidad un molino",
    categoria: "Tecnología",
    color: "var(--clay)",
    /* Serie «como-genera-electricidad-un-molino-de-viento», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El viento no empuja las palas de un aerogenerador: las hace volar» */
    encargo: "El viento no empuja las palas de un aerogenerador: las hace volar",
    fotos: [
      {
        local: p_como_genera_electricidad_un_molino_de_viento,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El viento no empuja las palas de un aerogenerador: las hace volar",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Una pala es un ala, no una vela",
      },
      {
        b: "parrafo",
        texto:
          "La imagen intuitiva es la del molino de toda la vida: el viento choca contra unas " +
          "aspas y las empuja, como empuja una vela. Los aerogeneradores modernos no funcionan " +
          "así.",
      },
      {
        b: "parrafo",
        texto:
          "Sus palas están perfiladas como el ala de un avión, con una cara más curva que la " +
          "otra, y lo que las mueve no es el choque del aire sino la " +
          "<strong>sustentación</strong>: la misma fuerza que levanta un avión, aplicada de lado " +
          "para hacer girar un eje en vez de para subir.",
      },
      {
        b: "parrafo",
        texto:
          "Y están afinadas hasta un extremo que sorprende. La relación entre la sustentación y " +
          "la resistencia que consigue una pala de aerogenerador puede llegar a 120, frente a 70 " +
          "en un planeador y 15 en un avión de línea. Es decir, en términos aerodinámicos puros, " +
          "una pala de molino está mejor diseñada que casi cualquier cosa que vuele.",
      },
      {
        b: "parrafo",
        texto:
          "De ahí sale la prueba visible de que no es un empujón. Si el viento simplemente " +
          "empujara la pala, la pala no podría ir más rápido que el viento, igual que una hoja " +
          "arrastrada nunca adelanta al aire que la arrastra. En un aerogenerador de tres palas " +
          "de buen rendimiento, la punta se mueve entre seis y siete veces más rápido que el " +
          "viento que la mueve.",
      },
      {
        b: "rayo",
        texto:
          "Una pala de aerogenerador no recibe el viento, lo aprovecha como un ala. Y la señal de " +
          "que es así está a la vista: sus puntas van varias veces más deprisa que el aire que " +
          "las está moviendo.",
      },
      {
        b: "rotulo",
        texto:
          "La pala está retorcida porque cada tramo ve un viento distinto",
      },
      {
        b: "parrafo",
        texto:
          "Aquí viene el detalle de diseño que se nota mirando una pala de cerca y que casi nadie " +
          "sabe explicar.",
      },
      {
        b: "parrafo",
        texto:
          "Una pala de aerogenerador está retorcida a lo largo, con el perfil cambiando de la " +
          "raíz a la punta. No es un adorno ni un refuerzo: es una necesidad geométrica.",
      },
      {
        b: "parrafo",
        texto:
          "Piénsalo desde la propia pala. La raíz, que está pegada al eje, recorre un círculo " +
          "pequeño y va despacio. La punta recorre un círculo enorme y va muy rápida. Como el " +
          "viento que sopla es el mismo para las dos, cada tramo de la pala recibe el aire desde " +
          "un ángulo distinto: la raíz lo recibe casi de frente, y la punta, que corre mucho, lo " +
          "recibe casi de lado.",
      },
      {
        b: "parrafo",
        texto:
          "Un ala solo funciona bien con el aire llegándole en un ángulo concreto. Así que si " +
          "quieres que la pala entera trabaje —y no solo un trozo—, hay que ir girando el perfil " +
          "poco a poco, de manera que cada sección esté colocada en el ángulo que le corresponde " +
          "a su propia velocidad.",
      },
      {
        b: "rayo",
        texto:
          "Una pala de aerogenerador no es un ala larga, son cientos de alas pequeñas puestas en " +
          "fila, cada una orientada de forma distinta porque cada una vuela a una velocidad " +
          "diferente.",
      },
    ],
  },
  {
    id: "como-genera-electricidad-una-placa-solar",
    titulo: "Cómo genera electricidad una placa solar",
    categoria: "Tecnología",
    color: "var(--teal)",
    /* Serie «como-genera-electricidad-una-placa-solar», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Una placa solar no calienta nada: la luz arranca electrones» */
    encargo: "Una placa solar no calienta nada: la luz arranca electrones",
    fotos: [
      {
        local: p_como_genera_electricidad_una_placa_solar,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Una placa solar no calienta nada: la luz arranca electrones",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La luz suelta cargas y un campo eléctrico las separa",
      },
      {
        b: "parrafo",
        texto:
          "Conviene deshacer primero una confusión muy común, porque hay dos aparatos distintos " +
          "que se ponen en el mismo tejado y no tienen nada que ver.",
      },
      {
        b: "parrafo",
        texto:
          "Uno es el panel solar térmico, que efectivamente calienta: el sol templa un circuito " +
          "de agua y esa agua caliente va al depósito. El otro es la <strong>placa " +
          "fotovoltaica</strong>, que es de la que hablamos aquí, y no calienta nada a propósito. " +
          "Convierte la luz en electricidad directamente, sin pasar por el calor en ningún " +
          "momento.",
      },
      {
        b: "parrafo",
        texto:
          "El mecanismo es este. Al absorber la luz, el material genera pares de electrón y hueco " +
          "sueltos, es decir, cargas libres: un electrón que se ha desprendido y el hueco que ha " +
          "dejado atrás. El problema es que si esas dos cargas se vuelven a juntar, no ha pasado " +
          "nada.",
      },
      {
        b: "parrafo",
        texto:
          "Ahí es donde entra la pieza clave, que se llama <strong>unión p-n</strong>. Es la " +
          "frontera entre dos capas de silicio tratadas de forma distinta, y en esa frontera " +
          "existe un campo eléctrico propio. Ese campo local barre las cargas y las separa hacia " +
          "electrodos opuestos, produciendo un exceso de electrones en un lado y un exceso de " +
          "huecos en el otro.",
      },
      {
        b: "parrafo",
        texto:
          "Y con eso ya está todo hecho. Un lado con exceso de electrones y otro con defecto es, " +
          "exactamente, una pila. Conecta un cable entre los dos y tienes corriente.",
      },
      {
        b: "rayo",
        texto:
          "Una placa solar no transforma la luz en calor y el calor en electricidad, que es como " +
          "funciona casi todo lo demás. Se salta los dos pasos intermedios: la luz suelta la " +
          "carga y un campo eléctrico interno la empuja hacia la salida.",
      },
      {
        b: "rotulo",
        texto:
          "Por eso no tiene piezas móviles ni se gasta como una máquina",
      },
      {
        b: "parrafo",
        texto:
          "De ese mecanismo sale la característica que hace de la fotovoltaica algo distinto de " +
          "cualquier otra forma de generar electricidad, y suele pasarse por alto.",
      },
      {
        b: "parrafo",
        texto:
          "Repasa mentalmente cómo se produce electricidad en casi todos los demás casos. En una " +
          "central de carbón, en una nuclear, en una térmica de gas, en una hidroeléctrica y en " +
          "un aerogenerador siempre hay lo mismo: algo que empuja unas aspas o unas palas, un eje " +
          "que gira y un alternador. Cambia la fuente, pero el final es siempre un eje dando " +
          "vueltas.",
      },
      {
        b: "parrafo",
        texto:
          "En una placa fotovoltaica no gira nada. No hay eje, ni turbina, ni rodamientos, ni " +
          "fluido circulando, ni una sola pieza que roce contra otra. Es una lámina quieta al " +
          "sol.",
      },
      {
        b: "parrafo",
        texto:
          "Y de ahí vienen dos cosas que se dan por hechas sin relacionarlas con esto. La primera " +
          "es que las garantías de estas placas se midan en décadas: lo que no se mueve, no se " +
          "desgasta. La segunda es que sea la forma de generar electricidad que se manda al " +
          "espacio, donde no se puede reparar nada y no hay quien cambie un rodamiento.",
      },
      {
        b: "rayo",
        texto:
          "Todas las formas clásicas de hacer electricidad terminan en un eje girando. La placa " +
          "solar es la excepción: hace el mismo trabajo estando completamente quieta.",
      },
    ],
  },
  {
    id: "como-reconoce-un-pinguino-a-su-cria",
    titulo: "Cómo reconoce un pingüino a su cría",
    categoria: "Naturaleza",
    color: "var(--sage)",
    /* Serie «como-reconoce-un-pinguino-a-su-cria», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un pingüino emperador no tiene nido, así que solo le queda la voz» */
    encargo: "Un pingüino emperador no tiene nido, así que solo le queda la voz",
    fotos: [
      {
        local: p_como_reconoce_un_pinguino_a_su_cria,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un pingüino emperador no tiene nido, así que solo le queda la voz",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Sin un sitio fijo, desaparece la forma normal de encontrarse",
      },
      {
        b: "parrafo",
        texto:
          "Casi todas las aves resuelven este problema sin pensarlo, porque tienen nido. El nido " +
          "es una dirección: está en esa rama, en ese hueco, en ese saliente, y quien vuelve solo " +
          "tiene que acordarse del sitio. Ni siquiera hace falta reconocer a nadie.",
      },
      {
        b: "parrafo",
        texto:
          "El pingüino emperador no tiene esa opción. La especie carece de lugares de " +
          "nidificación fijos que los individuos puedan usar para localizar a su pareja o a su " +
          "cría, así que debe apoyarse <strong>únicamente en sonidos vocales</strong> para " +
          "identificarse.",
      },
      {
        b: "parrafo",
        texto:
          "Y no es un detalle menor de su biología, es toda su vida reproductiva. El macho incuba " +
          "el huevo encima de sus propias patas, cubriéndolo con un pliegue de piel y plumas, de " +
          "modo que ni siquiera el huevo tiene una posición en el mapa: se mueve con el animal. " +
          "Las colonias reúnen hasta varios miles de individuos, y los adultos recorren entre 50 " +
          "y 120 kilómetros sobre el hielo para llegar a ellas.",
      },
      {
        b: "parrafo",
        texto:
          "Imagina volver de esa caminata, con comida en el buche, a un lugar donde hay miles de " +
          "animales prácticamente idénticos, todos moviéndose, sin ninguna referencia física, y " +
          "teniendo que dar con uno concreto.",
      },
      {
        b: "rayo",
        texto:
          "El pingüino emperador se quedó sin la solución que usan casi todas las aves. No puede " +
          "recordar dónde dejó a su cría, porque su cría no está en ningún sitio: está entre " +
          "miles, y se mueve.",
      },
      {
        b: "rotulo",
        texto:
          "La voz les sirve de documento de identidad",
      },
      {
        b: "parrafo",
        texto:
          "La respuesta a ese problema está en las llamadas, y en esta especie han llegado más " +
          "lejos que en ninguna otra.",
      },
      {
        b: "parrafo",
        texto:
          "Los emperadores usan un conjunto complejo de llamadas que resultan críticas para el " +
          "reconocimiento individual entre parejas, entre padres e hijos, y que presentan " +
          "<strong>la mayor variación individual de todas las especies de pingüino</strong>. No " +
          "es un canto de especie ni un canto de colonia: cada animal suena distinto de los " +
          "demás, y esa diferencia es el dato que se busca.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en el orden causal, porque es lo interesante del asunto y no es casualidad. La " +
          "especie que más ha perfeccionado el reconocimiento por voz es precisamente la que se " +
          "quedó sin nido. No desarrollaron voces reconocibles y luego prescindieron del nido: " +
          "prescindieron del nido —porque en la Antártida no hay con qué construirlo ni dónde " +
          "ponerlo— y la voz tuvo que cargar con todo el peso.",
      },
      {
        b: "parrafo",
        texto:
          "Los pollos, por su parte, tienen su propia llamada: un silbido modulado en frecuencia " +
          "que usan tanto para pedir comida como para mantener el contacto con sus padres.",
      },
      {
        b: "rayo",
        texto:
          "En la Antártida no hay ramas, ni barro, ni huecos donde meterse. Todo el sistema de " +
          "reconocimiento vocal de esta especie existe porque el paisaje no le dejó otra salida.",
      },
    ],
  },
  {
    id: "como-se-aguanta-en-pie-un-rascacielos",
    titulo: "Cómo se aguanta en pie un rascacielos",
    categoria: "Tecnología",
    color: "var(--sage)",
    /* Serie «como-se-aguanta-en-pie-un-rascacielos», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El edificio de ladrillo más alto del mundo tiene paredes de casi dos metros de grueso» */
    encargo: "El edificio de ladrillo más alto del mundo tiene paredes de casi dos metros de grueso",
    fotos: [
      {
        local: p_como_se_aguanta_en_pie_un_rascacielos,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El edificio de ladrillo más alto del mundo tiene paredes de casi dos metros de grueso",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El muro de carga se estrangula a sí mismo",
      },
      {
        b: "parrafo",
        texto:
          "Antes de que existiera el rascacielos, un edificio se sostenía de la única forma " +
          "conocida: las paredes aguantaban el peso de todo lo que tenían encima. Ese sistema " +
          "tiene un límite matemático, y en Chicago se ve dónde está.",
      },
      {
        b: "parrafo",
        texto:
          "El <strong>Monadnock Building</strong>, terminado en 1891, mide 66 metros y tiene " +
          "dieciséis plantas. Para sostenerlas, sus muros son de 1,8 metros de espesor abajo y de " +
          "46 centímetros arriba. Es el edificio de ladrillo o mampostería de carga más alto " +
          "jamás construido, y con él la construcción tradicional llegó a su límite práctico.",
      },
      {
        b: "parrafo",
        texto:
          "Sigue la escalera y verás que no hay salida. Cada planta que añades pesa, y ese peso " +
          "tiene que bajar por los muros hasta el suelo. Cuanto más alto, más peso soportan los " +
          "muros de abajo, así que hay que engordarlos. Pero un muro más gordo pesa más, y ese " +
          "peso extra hay que sostenerlo también, así que hay que engordarlo un poco más todavía. " +
          "Y mientras tanto cada centímetro de muro es un centímetro de suelo que no se puede " +
          "alquilar.",
      },
      {
        b: "parrafo",
        texto:
          "Al final el edificio se come a sí mismo: llega una altura en la que la planta baja " +
          "sería casi toda pared.",
      },
      {
        b: "rayo",
        texto:
          "El límite de la construcción de piedra y ladrillo no lo puso la resistencia del " +
          "material, sino su peso. Un muro alto acaba dedicando casi toda su fuerza a sostenerse " +
          "a sí mismo.",
      },
      {
        b: "rotulo",
        texto:
          "La solución fue separar el que aguanta del que cierra",
      },
      {
        b: "parrafo",
        texto:
          "Seis años antes del Monadnock, en la misma ciudad, ya se había construido lo que " +
          "resolvía el problema, aunque nadie supiera todavía lo que iba a significar.",
      },
      {
        b: "parrafo",
        texto:
          "En 1885 se levantó en Chicago el <strong>Home Insurance Building</strong>, con diez " +
          "plantas y 42 metros de altura, considerado el primer rascacielos de estructura de " +
          "acero. Su novedad se resume en una frase: un armazón de acero sostenía el peso entero " +
          "de las paredes, en lugar de que fueran las paredes las que soportaban el peso.",
      },
      {
        b: "parrafo",
        texto:
          "Es una inversión completa de papeles. En el edificio antiguo, la pared es la " +
          "estructura y las ventanas son agujeros que hay que abrir con cuidado en ella. En el " +
          "edificio nuevo, la estructura es un esqueleto de barras verticales y horizontales, y " +
          "la pared ya no sostiene nada: es una piel colgada por fuera para separar el interior " +
          "del exterior.",
      },
      {
        b: "parrafo",
        texto:
          "De ahí vienen los rascacielos acristalados de hoy. Un edificio puede ser de cristal de " +
          "arriba abajo porque el cristal no está aguantando nada; el peso viaja por dentro, por " +
          "el esqueleto.",
      },
      {
        b: "rayo",
        texto:
          "El rascacielos no nació de un material más resistente, sino de una división de tareas. " +
          "En cuanto la pared dejó de tener que sostener el edificio, dejó de haber un motivo " +
          "para que fuera gruesa, y con eso desapareció el techo de altura.",
      },
      {
        b: "parrafo",
        texto:
          "¿Sabías que…? Nada de esto habría servido de nada sin un invento anterior. En 1857, " +
          "Elisha Otis instaló su ascensor de seguridad en el Haughwout Building de Nueva York, " +
          "lo que permitió llegar cómodamente y sin riesgo a las plantas altas. Sin él la altura " +
          "no tenía sentido comercial: la mayoría de la gente no querría —o no podría— subir más " +
          "de unos pocos tramos de escaleras, y unas plantas superiores que nadie quiere no valen " +
          "lo que cuestan.",
      },
    ],
  },
  {
    id: "diario-de-a-bordo",
    titulo: "Cómo se construyeron las pirámides",
    categoria: "Historia",
    color: "var(--slate)",
    /* Serie «como-se-construyeron-las-piramides», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Tenemos el diario de a bordo de uno de sus constructores» */
    encargo: "Tenemos el diario de a bordo de uno de sus constructores",
    fotos: [
      {
        local: p_diario_de_a_bordo,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Tenemos el diario de a bordo de uno de sus constructores",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Durante cuatro mil años, de los constructores solo tuvimos la piedra",
      },
      {
        b: "parrafo",
        texto:
          "La Gran Pirámide de Guiza lleva a la vista de todo el mundo unos cuatro mil quinientos " +
          "años. Se puede medir, se puede rodear y se pueden contar sus bloques, que son " +
          "alrededor de dos millones y medio. Lo único que no había manera de recuperar era la " +
          "voz de la gente que la levantó.",
      },
      {
        b: "parrafo",
        texto:
          "Durante siglos, casi todo lo que se contaba sobre esa gente venía de una sola fuente, " +
          "y era una fuente tardía. Heródoto visitó Egipto en el siglo V antes de Cristo, más de " +
          "dos mil años después de que la pirámide estuviera terminada, y anotó lo que le " +
          "contaron los sacerdotes de allí. Es aproximadamente como si alguien escribiera hoy la " +
          "historia de una obra del año cien basándose en lo que le cuenten los vecinos del " +
          "barrio.",
      },
      {
        b: "parrafo",
        texto:
          "De ese relato salen las cifras que todos hemos oído alguna vez, y también, en buena " +
          "parte, la imagen del ejército de esclavos arrastrando bloques bajo el látigo. Es una " +
          "imagen que la arqueología lleva décadas desmontando, y que aguantó tanto tiempo por un " +
          "motivo bastante simple: no había nada mejor con lo que sustituirla.",
      },
      {
        b: "cita",
        texto:
          "Trabajaban cien mil hombres cada vez, durante tres meses seguidos cada uno. […] Para " +
          "la construcción de la pirámide misma transcurrió un periodo de veinte años.",
      },
      {
        b: "parrafo",
        texto:
          "— Heródoto, <em>Historia</em>, libro II",
      },
      {
        b: "rayo",
        texto:
          "Durante veinticinco siglos, casi todo lo que se decía sobre quién construyó la Gran " +
          "Pirámide venía de un viajero griego que llegó dos mil años tarde.",
      },
      {
        b: "rotulo",
        texto:
          "En 2013 apareció el cuaderno de trabajo de un inspector llamado Merer",
      },
      {
        b: "parrafo",
        texto:
          "En 2013, el egiptólogo Pierre Tallet excavaba en Wadi al-Yarf, un puerto antiguo en la " +
          "costa egipcia del mar Rojo. Era su tercera campaña en el yacimiento, y lo que salió de " +
          "la arena fue un conjunto de papiros de unos cuatro mil seiscientos años: <strong>los " +
          "papiros escritos más antiguos que se conocen en el mundo</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "El mejor conservado de todos ellos no es un poema, ni una crónica real, ni un texto " +
          "religioso. Es el cuaderno de trabajo de un hombre llamado Merer, un inspector al mando " +
          "de un equipo de unos doscientos hombres, que anotaba su jornada en tramos de medio " +
          "día, con la misma sequedad con la que hoy se rellena un parte.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que anotaba eran viajes en barco, uno detrás de otro. ¿Y qué transportaba en ellos? " +
          "Es simple: <strong>piedra</strong>. En concreto, la caliza blanca y fina del " +
          "revestimiento exterior, que no se sacaba en Guiza sino en las canteras de Tura, en la " +
          "otra orilla del Nilo. El equipo cargaba allí, remontaba el río, descargaba en las " +
          "obras de la pirámide y volvía a empezar. Ese era el trabajo, y esas son las " +
          "anotaciones.",
      },
      {
        b: "parrafo",
        texto:
          "Merer rendía cuentas a Anj-haf, medio hermano del faraón Keops y responsable de la " +
          "construcción. Sus notas corresponden al año veintisiete del reinado, que se considera " +
          "el último. Lo que tenemos delante, por tanto, es el parte de trabajo de la fase final " +
          "de la obra, escrito por alguien que estaba dentro de ella.",
      },
      {
        b: "parrafo",
        texto:
          "Conviene pararse un momento en lo que eso significa. No es un texto que hable de la " +
          "pirámide desde fuera y desde lejos: es un texto salido de la propia administración de " +
          "la obra, generado mientras la obra ocurría. Cuatro mil quinientos años después se " +
          "puede seguir a un hombre concreto río arriba y río abajo, semana a semana, cargando " +
          "piedra para un monumento que todavía sigue en pie.",
      },
      {
        b: "rayo",
        texto:
          "El documento que mejor explica la construcción de la Gran Pirámide no es una " +
          "inscripción monumental: es la hoja de trabajo de un capataz llevando piedra en barco.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Los papiros no aparecieron en Guiza, sino muy lejos de la obra que " +
          "describen, en un puerto del mar Rojo desde el que partían las expediciones del Estado " +
          "egipcio. Terminaron a cientos de kilómetros de la pirámide de cuya construcción " +
          "hablan.",
      },
    ],
  },
  {
    id: "como-se-construyo-el-canal-de-panama",
    titulo: "Cómo se construyó el canal de Panamá",
    categoria: "Historia",
    color: "var(--ochre)",
    /* Serie «como-se-construyo-el-canal-de-panama», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El primer intento de abrir el canal fracasó y dejó 22.000 muertos» */
    encargo: "El primer intento de abrir el canal fracasó y dejó 22.000 muertos",
    fotos: [
      {
        local: p_como_se_construyo_el_canal_de_panama,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El primer intento de abrir el canal fracasó y dejó 22.000 muertos",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Lo intentaron los franceses, y con el mejor currículum posible",
      },
      {
        b: "parrafo",
        texto:
          "El canal de Panamá no lo empezaron los estadounidenses. Lo empezaron los franceses, el " +
          "1 de enero de 1881, y lo dirigía el hombre con más autoridad del mundo para hacerlo.",
      },
      {
        b: "parrafo",
        texto:
          "<strong>Ferdinand de Lesseps</strong> venía de abrir el canal de Suez, una obra que " +
          "había parecido imposible y que él había sacado adelante. Llegó a Panamá con esa " +
          "reputación intacta, con capital reunido entre pequeños inversores franceses y con una " +
          "idea muy clara de cómo se hacía un canal, porque ya había hecho uno.",
      },
      {
        b: "parrafo",
        texto:
          "Ahí estaba el problema, y es de los errores más caros de la historia de la ingeniería. " +
          "Suez es un canal a nivel del mar excavado en un desierto llano y seco. Panamá es una " +
          "cordillera cubierta de selva, atravesada por un río que se desborda, con lluvias " +
          "torrenciales y una montaña de por medio. El método que había funcionado en un sitio no " +
          "valía en el otro, y la reputación del director hizo más difícil que alguien se lo " +
          "dijera a tiempo.",
      },
      {
        b: "rayo",
        texto:
          "El proyecto no fracasó por falta de experiencia, sino por exceso de la experiencia " +
          "equivocada. De Lesseps aplicó en Panamá exactamente lo que le había funcionado en " +
          "Egipto, que era lo peor que podía hacer.",
      },
      {
        b: "rotulo",
        texto:
          "Se hundió por dos motivos, y uno era la mortalidad",
      },
      {
        b: "parrafo",
        texto:
          "La empresa se derrumbó en 1889 por una combinación de problemas de ingeniería y de una " +
          "tasa de mortalidad altísima entre los trabajadores, que acabó con la confianza de los " +
          "inversores.",
      },
      {
        b: "parrafo",
        texto:
          "La cifra que dejó aquel primer intento es de 22.000 muertos, de los cuales hasta 5.000 " +
          "eran ciudadanos franceses. Para entender el ritmo al que ocurría: en 1884, la tasa de " +
          "muertes superaba las 200 al mes.",
      },
      {
        b: "parrafo",
        texto:
          "Detente en ese número un momento. Doscientas personas al mes, mes tras mes, en una " +
          "obra que además no avanzaba. No era un accidente puntual ni una epidemia que llegó y " +
          "pasó: era el funcionamiento normal de aquella obra, y nadie sabía cómo pararlo.",
      },
      {
        b: "parrafo",
        texto:
          "Y ese es el punto que hace de esta historia algo más que un desastre empresarial. Los " +
          "franceses no fracasaron por no trabajar bastante ni por falta de dinero al principio. " +
          "Fracasaron porque se estaban muriendo, y porque no sabían de qué.",
      },
      {
        b: "rayo",
        texto:
          "El primer canal de Panamá no lo derrotó la montaña. Lo derrotó algo que en 1881 nadie " +
          "sabía identificar y que se llevaba doscientas vidas al mes.",
      },
    ],
  },
  {
    id: "se-leyeron-al-reves",
    titulo: "Cómo se descifraron los jeroglíficos",
    categoria: "Historia",
    color: "var(--clay)",
    /* Serie «como-se-descifraron-los-jeroglificos», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Durante mil cuatrocientos años se leyeron los jeroglíficos al revés» */
    encargo: "Durante mil cuatrocientos años se leyeron los jeroglíficos al revés",
    fotos: [
      {
        local: p_se_leyeron_al_reves,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Durante mil cuatrocientos años se leyeron los jeroglíficos al revés",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Hubo un último egipcio capaz de leerlos, y después nadie más",
      },
      {
        b: "parrafo",
        texto:
          "En el año 394 de nuestra era, un sacerdote del templo de File, en el sur de Egipto, " +
          "grabó unas líneas en una pared. Es la última inscripción jeroglífica conocida. Después " +
          "de aquello, la escritura que Egipto había usado durante más de tres mil años dejó de " +
          "escribirse, y en algún momento del siglo siguiente dejó también de leerse.",
      },
      {
        b: "parrafo",
        texto:
          "Lo llamativo es que el material nunca faltó. Los jeroglíficos estaban a la vista, " +
          "tallados en templos enormes, en obeliscos que los romanos se llevaron a Italia, en " +
          "sarcófagos y en muros que cualquiera podía tocar. No era un idioma perdido en un " +
          "desierto sin excavar: era un idioma perdido delante de todo el mundo.",
      },
      {
        b: "parrafo",
        texto:
          "Y sin embargo pasaron unos mil cuatrocientos años sin que nadie consiguiera leer una " +
          "sola frase. El problema no era la falta de textos. Era otra cosa, y mucho más difícil " +
          "de detectar.",
      },
      {
        b: "rayo",
        texto:
          "No faltaban jeroglíficos que estudiar. Había miles a la vista, en monumentos que nunca " +
          "se enterraron. Lo que faltaba era la idea correcta sobre qué eran.",
      },
      {
        b: "rotulo",
        texto:
          "El obstáculo no fue la falta de textos, fue un libro equivocado",
      },
      {
        b: "parrafo",
        texto:
          "En 1419 se redescubrió un texto llamado <em>Hieroglyphica</em>, atribuido a Horapolo, " +
          "un sacerdote alejandrino del siglo V. Llegó a la Europa del Renacimiento como si fuera " +
          "el manual definitivo, escrito por alguien que había vivido en Egipto y que, se " +
          "suponía, sabía de qué hablaba.",
      },
      {
        b: "parrafo",
        texto:
          "Su tesis era clara y era falsa. Horapolo daba por hecho que cada jeroglífico era un " +
          "símbolo, una imagen cargada de significado sin ningún componente de sonido. Según él, " +
          "un buitre no representaba un sonido ni una palabra: representaba una idea, la " +
          "maternidad, y había que interpretarlo como se interpreta una alegoría.",
      },
      {
        b: "parrafo",
        texto:
          "¿Y por qué esa idea tan bonita bloqueó el asunto durante siglos? Es simple: " +
          "<strong>hace imposible leer</strong>. Si cada signo es un símbolo abierto a " +
          "interpretación, no hay manera de equivocarse y, por tanto, tampoco de acertar. " +
          "Cualquier lectura vale y ninguna se puede comprobar. Generaciones enteras de eruditos " +
          "europeos escribieron interpretaciones larguísimas y profundamente ingeniosas de textos " +
          "que en realidad decían cosas como el nombre de un rey y la fecha de una donación de " +
          "grano.",
      },
      {
        b: "parrafo",
        texto:
          "Conviene ser justo con Athanasius Kircher, el sabio jesuita del siglo XVII que dedicó " +
          "su vida a esto. Sus lecturas concretas eran fantasía pura, pero fue de los primeros en " +
          "sugerir que los signos podían representar sonidos además de ideas, y esa intuición " +
          "influyó en los estudiosos que vinieron después.",
      },
      {
        b: "rayo",
        texto:
          "Una premisa equivocada aguanta más que la falta de datos. Si cada signo es un símbolo " +
          "abierto, cualquier lectura vale y ninguna se puede desmentir.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? La palabra «jeroglífico» viene del griego y significa, más o menos, " +
          "«talla sagrada». El nombre con el que los conocemos ya arrastra la idea equivocada: la " +
          "de un texto reservado a los misterios en vez de una escritura corriente que también " +
          "servía para cobrar impuestos.",
      },
    ],
  },
  {
    id: "como-se-descubrio-la-penicilina",
    titulo: "Cómo se descubrió la penicilina",
    categoria: "Historia",
    color: "var(--teal)",
    /* Serie «como-se-descubrio-la-penicilina», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Fleming vio el moho, lo publicó y no consiguió sacar nada de él» */
    encargo: "Fleming vio el moho, lo publicó y no consiguió sacar nada de él",
    fotos: [
      {
        local: p_como_se_descubrio_la_penicilina,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Fleming vio el moho, lo publicó y no consiguió sacar nada de él",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Tres de septiembre de 1928, hospital de Saint Mary, Londres",
      },
      {
        b: "parrafo",
        texto:
          "Alexander Fleming volvió de vacaciones el 3 de septiembre de 1928 y se puso a ordenar " +
          "las placas de cultivo que había dejado apiladas antes de marcharse. En ellas había " +
          "estado creciendo <em>Staphylococcus</em>, y una de las placas se había contaminado con " +
          "un moho.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que le llamó la atención no fue el moho, que en un laboratorio de la época era una " +
          "molestia rutinaria. Fue el borde: alrededor de la mancha de moho había un anillo " +
          "limpio, sin bacterias. Algo que salía de aquel hongo estaba impidiéndoles crecer.",
      },
      {
        b: "parrafo",
        texto:
          "El moho resultó ser <em>Penicillium notatum</em>. Fleming llamó al líquido en que " +
          "crecía «jugo de moho», y a la sustancia activa la bautizó penicilina.",
      },
      {
        b: "rayo",
        texto:
          "El hallazgo no fue el moho en la placa, que le pasaba a todo el mundo. Fue mirar el " +
          "anillo vacío en vez de tirar la placa.",
      },
      {
        b: "rotulo",
        texto:
          "La historia se corta aquí, y esa es la parte que no se cuenta",
      },
      {
        b: "parrafo",
        texto:
          "Ahora bien, el relato popular termina más o menos donde acaba el párrafo anterior, y " +
          "por eso da una impresión equivocada de cómo funcionan estas cosas.",
      },
      {
        b: "parrafo",
        texto:
          "Fleming lo intentó. Sus ayudantes Stuart Craddock y Frederick Ridley trabajaron para " +
          "aislar penicilina pura del jugo de moho, y no lo consiguieron: la sustancia era " +
          "tremendamente inestable y solo podían preparar disoluciones bastas. Publicó sus " +
          "resultados en junio de 1929, pero sin defender apenas el uso terapéutico; sugería que " +
          "lo más útil sería emplearla en el laboratorio para aislar bacterias que no le fueran " +
          "sensibles.",
      },
      {
        b: "parrafo",
        texto:
          "Otros lo intentaron y también fracasaron, incluido Harold Raistrick, de la Escuela de " +
          "Higiene y Medicina Tropical de Londres.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en la distancia entre lo que se cuenta y lo que pasó. Entre la placa " +
          "contaminada y el primer paciente tratado pasaron doce años y medio, y durante casi " +
          "todos ellos la penicilina fue una curiosidad de laboratorio que nadie sabía fabricar.",
      },
      {
        b: "rayo",
        texto:
          "Ver el efecto y tener el medicamento son dos problemas distintos, y el segundo era " +
          "mucho más difícil. La penicilina estuvo descrita y publicada durante una década sin " +
          "curar a nadie.",
      },
    ],
  },
  {
    id: "como-se-forma-dentro-de-una-gota",
    titulo: "Cómo se forma un arcoíris",
    categoria: "Ciencia",
    color: "var(--ochre)",
    /* Serie «como-se-forma-un-arcoiris», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Cada gota de lluvia te manda un solo color» */
    encargo: "Cada gota de lluvia te manda un solo color",
    fotos: [
      {
        local: p_como_se_forma_dentro_de_una_gota,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Cada gota de lluvia te manda un solo color",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Dentro de la gota pasan tres cosas, y en este orden",
      },
      {
        b: "parrafo",
        texto:
          "Un arcoíris no se forma en el cielo ni en la nube: se forma dentro de cada gota de " +
          "agua, una por una, y siempre con la misma secuencia de tres pasos.",
      },
      {
        b: "parrafo",
        texto:
          "El primero es la <strong>refracción</strong>. Cuando un rayo de sol llega a una gota, " +
          "pasa del aire al agua, y al hacerlo cambia de velocidad; ese cambio lo obliga a " +
          "torcerse, a entrar en la gota con un ángulo distinto del que traía. Es el mismo efecto " +
          "por el que una cuchara metida en un vaso parece partida en dos justo en la superficie " +
          "del agua.",
      },
      {
        b: "parrafo",
        texto:
          "El segundo es la <strong>dispersión</strong>, y es el que pone los colores. La luz " +
          "blanca del Sol no es un color: es la mezcla de todos, y cada uno tiene su longitud de " +
          "onda. Resulta que el agua no los tuerce a todos por igual, sino que desvía más a los " +
          "de longitud de onda corta y menos a los de longitud de onda larga. El violeta se dobla " +
          "más que el rojo. De modo que, en el instante mismo de entrar, el rayo blanco deja de " +
          "ser blanco y se abre en abanico, con cada color siguiendo su propio camino ligeramente " +
          "distinto dentro de la gota.",
      },
      {
        b: "parrafo",
        texto:
          "El tercero es el <strong>rebote</strong>. Ese abanico de colores atraviesa la gota y " +
          "llega a la pared del fondo, y ahí se refleja en la cara interior, dando media vuelta " +
          "hacia el lado por el que había entrado. Al salir vuelve a cruzar la frontera entre " +
          "agua y aire, se refracta otra vez y los colores se separan todavía un poco más.",
      },
      {
        b: "parrafo",
        texto:
          "Y ese es todo el mecanismo. La luz entra y se tuerce, se abre en colores, rebota en el " +
          "fondo y sale por delante, ya desplegada en abanico. Lo que gobierna el resultado no es " +
          "ninguna propiedad exótica: es simplemente que una gota de agua es una esfera, y que " +
          "una esfera hace siempre lo mismo con la luz.",
      },
      {
        b: "rayo",
        texto:
          "El arcoíris no se forma en el cielo, se forma dentro de cada gota: la luz entra " +
          "torciéndose, se abre en colores, rebota en la pared del fondo y sale por delante.",
      },
      {
        b: "rotulo",
        texto:
          "Por eso una gota concreta solo puede mandarte un color",
      },
      {
        b: "parrafo",
        texto:
          "Ahora la parte que descoloca, y que cambia por completo la imagen mental que uno tiene " +
          "del asunto.",
      },
      {
        b: "parrafo",
        texto:
          "¿Qué le llega exactamente a tu ojo de una gota determinada? Es simple: un solo color, " +
          "y siempre el mismo. No un arcoíris en miniatura, ni un abanico completo, sino un único " +
          "color.",
      },
      {
        b: "parrafo",
        texto:
          "La razón está en los ángulos, que son distintos para cada uno. Después de todo el " +
          "recorrido, el rojo sale de la gota formando unos <strong>42 grados</strong> con la " +
          "línea que va hacia el punto antisolar, y el violeta sale formando unos <strong>40 " +
          "grados</strong>. Los demás colores se reparten entre esas dos cifras. Como el resto de " +
          "colores de esa misma gota salen en direcciones que no pasan por tu ojo, se pierden: le " +
          "llegarán a otra persona, o a nadie.",
      },
      {
        b: "parrafo",
        texto:
          "Piensa entonces en lo que estás viendo cuando miras un arco. La franja roja de arriba " +
          "está hecha con gotas que están precisamente a 42 grados de tu punto antisolar; esas " +
          "gotas te mandan rojo y solo rojo. La franja violeta de abajo está hecha con " +
          "<strong>otras gotas distintas</strong>, situadas un par de grados más cerca del " +
          "centro; esas te mandan violeta y solo violeta. Y las franjas intermedias son otras " +
          "tantas familias de gotas, cada una en su anillo.",
      },
      {
        b: "parrafo",
        texto:
          "De modo que el arcoíris no es un objeto que tenga colores: es un mosaico. Cada punto " +
          "de la banda que ves es una gota diferente aportando un único color, como los píxeles " +
          "de una pantalla, y el conjunto se ordena en franjas porque las gotas se ordenan por " +
          "ángulo. Además, como el rojo sale con el ángulo mayor, es la banda que queda por fuera " +
          "del arco, y el violeta, con el ángulo menor, la que queda por dentro.",
      },
      {
        b: "rayo",
        texto:
          "Ninguna gota te manda un arcoíris. Cada una te manda un solo color, y el arco es el " +
          "mosaico que forman millones de gotas ordenadas por ángulo.",
      },
    ],
  },
  {
    id: "como-se-forma-un-cometa",
    titulo: "Cómo se forma un cometa",
    categoria: "Ciencia",
    color: "var(--teal)",
    /* Serie «como-se-forma-un-cometa», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un cometa no se forma: se enciende» */
    encargo: "Un cometa no se forma: se enciende",
    fotos: [
      {
        local: p_como_se_forma_un_cometa,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un cometa no se forma: se enciende",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Lo que orbita ahí fuera no tiene cola ni brilla",
      },
      {
        b: "parrafo",
        texto:
          "La palabra «formarse» sugiere que en algún sitio se fabrica un cometa: que la cola " +
          "crece, que el brillo se enciende, que el objeto se construye. Y no es así. El cometa " +
          "lleva ahí miles de millones de años, quieto, oscuro y sin cola, y lo único que ocurre " +
          "es que en algún momento se acerca.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que orbita en las afueras del sistema solar es el <strong>núcleo</strong>: una bola " +
          "de hielo, roca y polvo, normalmente de menos de dieciséis kilómetros de lado. Hay " +
          "probablemente miles de millones de ellos, repartidos entre el cinturón de Kuiper y, " +
          "mucho más lejos, la nube de Oort. Son material sobrante de cuando se formaron los " +
          "planetas, y en el frío de allí fuera no les ha pasado nada desde entonces.",
      },
      {
        b: "rayo",
        texto:
          "Los cometas no son visitantes ocasionales que aparecen y desaparecen. Están siempre; " +
          "lo que aparece y desaparece es lo que les hace visibles.",
      },
      {
        b: "rotulo",
        texto:
          "El Sol hace todo el trabajo, y lo hace en orden",
      },
      {
        b: "parrafo",
        texto:
          "¿Y qué pasa exactamente cuando uno de esos núcleos se acerca? Es simple: <strong>el " +
          "hielo deja de ser hielo</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "En el vacío no hay presión que sostenga el estado líquido, así que el hielo calentado " +
          "no se funde: pasa directamente a gas. A medida que el núcleo se acerca al Sol, su " +
          "superficie se calienta y los hielos empiezan a sublimar. El gas que escapa arrastra " +
          "consigo el polvo que tenía atrapado, y ese gas y ese polvo forman alrededor del núcleo " +
          "una atmósfera provisional que puede llegar a cientos de miles de kilómetros de " +
          "diámetro. A esa envoltura se la llama <strong>coma</strong>. Después, la presión de la " +
          "luz solar y el viento de partículas que sale del Sol empujan ese material hacia fuera, " +
          "y lo estiran hasta convertirlo en una cola de millones de kilómetros. Así se enciende " +
          "un cometa.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en la desproporción. El objeto real mide unos pocos kilómetros; lo que se ve " +
          "desde la Tierra mide millones. Estamos mirando, casi siempre, algo que no es el cometa " +
          "sino lo que el cometa está perdiendo.",
      },
      {
        b: "rayo",
        texto:
          "Cada aparición le cuesta material. Un cometa se ve porque se está gastando, y solo se " +
          "ve mientras se gasta.",
      },
    ],
  },
  {
    id: "como-se-forma-un-tornado",
    titulo: "Cómo se forma un tornado",
    categoria: "Planeta Tierra",
    color: "var(--ochre)",
    /* Serie «como-se-forma-un-tornado», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un tornado empieza girando a kilómetros del suelo y mide varios kilómetros de ancho» */
    encargo: "Un tornado empieza girando a kilómetros del suelo y mide varios kilómetros de ancho",
    fotos: [
      {
        local: p_como_se_forma_un_tornado,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un tornado empieza girando a kilómetros del suelo y mide varios kilómetros de ancho",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La rotación existe mucho antes que el tornado, y es enorme",
      },
      {
        b: "parrafo",
        texto:
          "La imagen habitual es la de un embudo que se forma en la base de una nube y baja hasta " +
          "tocar el suelo. Lo que se ve es eso, pero lo que ocurre empezó antes y en otro sitio.",
      },
      {
        b: "parrafo",
        texto:
          "Los tornados se desarrollan a menudo a partir de una clase de tormentas llamadas " +
          "<strong>supercélulas</strong>, y lo que define a una supercélula es que contiene un " +
          "<strong>mesociclón</strong>: una zona de rotación organizada situada a unos cuantos " +
          "kilómetros de altura en la atmósfera.",
      },
      {
        b: "parrafo",
        texto:
          "Y ese mesociclón no es un remolino estrecho. Tiene típicamente entre 3 y 10 kilómetros " +
          "de diámetro. Es decir, antes de que exista ningún tornado, ya hay una masa de aire de " +
          "varios kilómetros de ancho girando dentro de la tormenta, a kilómetros del suelo, " +
          "donde nadie la ve.",
      },
      {
        b: "parrafo",
        texto:
          "Después, la corriente descendente de la parte trasera de la tormenta va arrastrando " +
          "ese mesociclón hacia abajo. Cuando desciende por debajo de la base de la nube, la " +
          "convergencia entre el aire cálido de la corriente ascendente y el aire frío forma una " +
          "nube de pared que gira. De ahí sale, ya al final del proceso, el embudo.",
      },
      {
        b: "rayo",
        texto:
          "Un tornado no crea la rotación al formarse: hereda una que ya llevaba un rato girando " +
          "kilómetros más arriba y varios kilómetros más ancha. Lo que baja no es un remolino " +
          "nuevo, es un remolino que se estrecha.",
      },
      {
        b: "rotulo",
        texto:
          "El origen del giro es que el viento cambia con la altura",
      },
      {
        b: "parrafo",
        texto:
          "Queda la pregunta de dónde sale esa rotación inicial, y la respuesta tiene una parte " +
          "bonita y una advertencia.",
      },
      {
        b: "parrafo",
        texto:
          "El ingrediente principal es la <strong>cizalladura del viento</strong>: cambios " +
          "fuertes en la velocidad del viento con la distancia y en su dirección con la altura. " +
          "Dicho de otro modo, que a mil metros el viento sople distinto de como sopla a tres " +
          "mil, en fuerza o en dirección.",
      },
      {
        b: "parrafo",
        texto:
          "La imagen que se usa para entenderlo es la de una rueda de paletas invisible, puesta " +
          "de canto en el aire, a la que esos vientos que cambian con la altura ponen a girar: el " +
          "de arriba empuja por un lado y el de abajo por el otro, y la rueda gira.",
      },
      {
        b: "parrafo",
        texto:
          "Y ahora la advertencia, que es la parte que casi nunca se cuenta. El paso siguiente " +
          "suele dibujarse como un tubo de aire que rueda en horizontal y que la corriente " +
          "ascendente levanta y pone de pie, como quien endereza un cilindro. Esa representación " +
          "se considera <strong>incorrecta</strong> en la literatura especializada, aunque siga " +
          "apareciendo en documentales y en libros de texto.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que sí ocurre es más gradual y menos gráfico: las porciones de aire que ascienden " +
          "se van encontrando, conforme suben, con aire desplazado a mayor velocidad, y eso hace " +
          "que su trayectoria se curve y acabe describiendo una espiral hacia arriba. No hay " +
          "nadie enderezando un tubo; hay aire subiendo por un medio que se mueve distinto a cada " +
          "altura.",
      },
      {
        b: "rayo",
        texto:
          "El dibujo del tubo horizontal que se pone de pie es de los errores mejor instalados de " +
          "la meteorología divulgativa. La rotación no se vuelca: se va curvando poco a poco " +
          "porque el aire de arriba no va donde el de abajo.",
      },
    ],
  },
  {
    id: "como-se-forma-un-tsunami",
    titulo: "Cómo se forma un tsunami",
    categoria: "Planeta Tierra",
    color: "var(--plum)",
    /* Serie «como-se-forma-un-tsunami», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un tsunami no lo hace el viento, y no tiene nada que ver con la marea» */
    encargo: "Un tsunami no lo hace el viento, y no tiene nada que ver con la marea",
    fotos: [
      {
        local: p_como_se_forma_un_tsunami,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un tsunami no lo hace el viento, y no tiene nada que ver con la marea",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Lo que lo provoca es un desplazamiento de agua, no un empujón",
      },
      {
        b: "parrafo",
        texto:
          "Empecemos deshaciendo el nombre, porque en varios idiomas es directamente falso. En " +
          "inglés se les llamó durante mucho tiempo <em>tidal waves</em>, olas de marea, y en " +
          "español se sigue usando «maremoto». Las dos expresiones apuntan en la dirección " +
          "equivocada.",
      },
      {
        b: "parrafo",
        texto:
          "Las causas de un tsunami no tienen nada que ver con las de las mareas, que las produce " +
          "la atracción gravitatoria de la Luna y el Sol y no el desplazamiento de agua.",
      },
      {
        b: "parrafo",
        texto:
          "Un tsunami es otra cosa: una serie de olas causadas por el <strong>desplazamiento de " +
          "un gran volumen de agua</strong>, generalmente en un océano o en un lago grande. " +
          "Alguien mueve el agua de sitio de golpe —el fondo marino que se levanta o se hunde en " +
          "un terremoto, una ladera que se desprende dentro del mar, un volcán que colapsa— y el " +
          "agua desplazada tiene que ir a alguna parte.",
      },
      {
        b: "rayo",
        texto:
          "Una ola normal la empuja el viento por encima. Un tsunami lo empuja el suelo por " +
          "debajo, y esa diferencia de origen lo cambia absolutamente todo.",
      },
      {
        b: "rotulo",
        texto:
          "La diferencia real es la profundidad a la que se mueve el agua",
      },
      {
        b: "parrafo",
        texto:
          "Y ahora la comparación que explica por qué son fenómenos incomparables, aunque las dos " +
          "cosas se llamen olas.",
      },
      {
        b: "parrafo",
        texto:
          "En una ola de viento, el movimiento es superficial. El viento roza la superficie del " +
          "mar y pone a girar las partículas de agua en órbitas circulares, y esas órbitas se van " +
          "apagando conforme se baja: unos metros más abajo el agua ya casi no se entera. Un " +
          "temporal descomunal agita la piel del océano y deja la mayor parte del volumen en " +
          "calma.",
      },
      {
        b: "parrafo",
        texto:
          "En un tsunami se desplaza <strong>toda la columna de agua</strong>, desde el fondo " +
          "marino hasta la superficie. Si el suelo del océano sube un metro en una fractura de " +
          "cien kilómetros, lo que se levanta no es una capa: son varios kilómetros de altura de " +
          "agua, en toda esa longitud, a la vez.",
      },
      {
        b: "parrafo",
        texto:
          "Ahí está la razón de que las dos cosas no se puedan comparar por su altura. Una ola de " +
          "viento de diez metros es una pared de agua alta y delgada, con poco detrás. Un tsunami " +
          "de un metro en alta mar es un metro que va acompañado de todo el océano que tiene " +
          "debajo.",
      },
      {
        b: "rayo",
        texto:
          "Medir un tsunami por su altura es como medir un tren por su ventanilla. Lo que hace el " +
          "daño no es lo que sobresale, es la cantidad de agua que viene detrás empujando.",
      },
    ],
  },
  {
    id: "como-se-forma-una-cueva",
    titulo: "Cómo se forma una cueva",
    categoria: "Planeta Tierra",
    color: "var(--slate)",
    /* Serie «como-se-forma-una-cueva», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Una cueva no la excava nadie: la roca se disuelve y se va en el agua» */
    encargo: "Una cueva no la excava nadie: la roca se disuelve y se va en el agua",
    fotos: [
      {
        local: p_como_se_forma_una_cueva,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Una cueva no la excava nadie: la roca se disuelve y se va en el agua",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El agua de lluvia se vuelve ácida por el camino",
      },
      {
        b: "parrafo",
        texto:
          "La imagen intuitiva es la de un río subterráneo que va desgastando la piedra a base de " +
          "arrastrarla, como una lija. El mecanismo real no es mecánico, es químico, y empieza " +
          "antes de que el agua toque el suelo.",
      },
      {
        b: "parrafo",
        texto:
          "Una gota de lluvia, mientras cae, atraviesa la atmósfera y va <strong>captando dióxido " +
          "de carbono</strong>, que se disuelve en el agua con mucha facilidad. Y al llegar abajo " +
          "la cosa se acentúa: si el agua atraviesa un suelo con vida, recoge todavía más dióxido " +
          "de carbono, el que producen las raíces y los microorganismos al respirar.",
      },
      {
        b: "parrafo",
        texto:
          "Agua más dióxido de carbono dan <strong>ácido carbónico</strong>, que es un ácido " +
          "flojo. Y ese ácido flojo se encuentra bajo tierra con la caliza, que es carbonato de " +
          "calcio, y la ataca: el carbonato deja de ser piedra y pasa a estar disuelto en el " +
          "agua, en forma de iones que el agua se lleva consigo.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en lo que eso significa. La roca que falta en una cueva no está amontonada en " +
          "ningún sitio. Se fue por el desagüe, literalmente disuelta, como el azúcar en un café.",
      },
      {
        b: "rayo",
        texto:
          "Una cueva no es un agujero excavado, es un volumen de piedra que se marchó en " +
          "solución. Lo que hoy es una sala enorme salió de ahí gota a gota, sin que nadie " +
          "moviera un solo escombro.",
      },
      {
        b: "rotulo",
        texto:
          "Por eso solo hay cuevas así en cierto tipo de piedra",
      },
      {
        b: "parrafo",
        texto:
          "De un mecanismo químico salen consecuencias que uno no esperaría de un mecanismo " +
          "mecánico, y la primera es que este solo funciona con un ingrediente muy concreto.",
      },
      {
        b: "parrafo",
        texto:
          "El ácido carbónico no disuelve cualquier roca. Ataca al carbonato de calcio, así que " +
          "hace cuevas en caliza, en dolomía y en yeso, y no hace prácticamente nada contra el " +
          "granito o el basalto. Por eso los grandes sistemas de cuevas del mundo están donde " +
          "están y no repartidos al azar: están sobre las regiones calizas. Ese tipo de paisaje " +
          "tiene nombre propio, <strong>karst</strong>, y se reconoce desde fuera por sus simas, " +
          "sus dolinas y sus ríos que desaparecen bajo tierra.",
      },
      {
        b: "parrafo",
        texto:
          "Hay otras clases de cuevas que se forman por otros caminos —tubos por donde corrió la " +
          "lava, huecos que el mar abre en un acantilado a golpes—, pero las grandes cavidades " +
          "con salas y galerías son casi siempre esto: caliza que se fue disolviendo.",
      },
      {
        b: "parrafo",
        texto:
          "Y la segunda consecuencia es el ritmo. El ácido carbónico es tan flojo que lo que se " +
          "lleva en un año es indetectable. Lo único que tiene a su favor es que no para nunca. " +
          "Una sala por la que hoy se pasea la gente es el resultado de esa reacción minúscula " +
          "repetida durante cientos de miles de años, con el agua que caía sobre el campo que hay " +
          "justo encima.",
      },
      {
        b: "rayo",
        texto:
          "Lo que abre una cueva no es la fuerza del agua, es su paciencia. Ninguna gota hace " +
          "nada apreciable, y la suma de todas ellas se lleva una montaña por dentro.",
      },
    ],
  },
  {
    id: "como-se-hace-el-jamon-iberico",
    titulo: "Cómo se hace el jamón ibérico",
    categoria: "Cocina",
    color: "var(--teal)",
    /* Serie «como-se-hace-el-jamon-iberico», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Para llamarse de bellota, el cerdo tiene que engordar 46 kilos comiendo del suelo» */
    encargo: "Para llamarse de bellota, el cerdo tiene que engordar 46 kilos comiendo del suelo",
    fotos: [
      {
        local: p_como_se_hace_el_jamon_iberico,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Para llamarse de bellota, el cerdo tiene que engordar 46 kilos comiendo del suelo",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La montanera está regulada hasta en las fechas",
      },
      {
        b: "parrafo",
        texto:
          "Lo que distingue a un jamón ibérico de bellota no ocurre en la bodega, ocurre meses " +
          "antes, en el campo, y está escrito en el Boletín Oficial del Estado con una precisión " +
          "que sorprende.",
      },
      {
        b: "parrafo",
        texto:
          "El periodo se llama <strong>montanera</strong>, y es el engorde final del animal en la " +
          "dehesa, de dos a cuatro meses entre noviembre y marzo, alimentándose de bellotas y " +
          "pastos. Para que un jamón pueda llevar la designación «de bellota», la norma exige que " +
          "el cerdo se alimente exclusivamente de bellotas, hierba y los recursos naturales de la " +
          "dehesa, <strong>sin aporte de pienso suplementario</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Y como una condición así es imposible de comprobar mirando al animal, la norma la " +
          "traduce en números y en fechas. El cerdo tiene que reponer un mínimo de <strong>46 " +
          "kilos</strong> de peso durante <strong>más de 60 días</strong>. La entrada en " +
          "montanera solo puede producirse entre el 1 de octubre y el 15 de diciembre, y el " +
          "sacrificio, entre el 15 de diciembre y el 31 de marzo.",
      },
      {
        b: "rayo",
        texto:
          "La calidad de un jamón de bellota no se decide catándolo, se decide en un calendario. " +
          "Si el animal no ganó 46 kilos en el campo dentro de esas fechas, el jamón no puede " +
          "llamarse así por bueno que esté.",
      },
      {
        b: "rotulo",
        texto:
          "El calendario no lo puso un legislador caprichoso, lo puso la encina",
      },
      {
        b: "parrafo",
        texto:
          "Ahora la pregunta obvia: ¿por qué esas fechas y no otras? La respuesta no está en el " +
          "cerdo, está en el árbol.",
      },
      {
        b: "parrafo",
        texto:
          "La bellota cae cuando cae. Las encinas y los alcornoques de la dehesa sueltan su fruto " +
          "en otoño e invierno, y ese fruto no se puede almacenar ni adelantar: se pudre, lo " +
          "comen otros animales o simplemente no está. La ventana de la montanera es la ventana " +
          "en que hay bellota en el suelo, y por eso la norma la fija ahí y no en primavera.",
      },
      {
        b: "parrafo",
        texto:
          "De modo que el calendario legal es en realidad un calendario agrícola copiado. Y de " +
          "ahí sale una consecuencia que no tiene ningún otro producto de consumo habitual: la " +
          "producción de jamón de bellota depende de una cosecha, y una mala temporada de bellota " +
          "se nota años después en el mercado, cuando aquellos jamones tendrían que estar " +
          "saliendo de la bodega.",
      },
      {
        b: "parrafo",
        texto:
          "Y hay una segunda razón por la que todo esto acaba en el plato. El cerdo ibérico tiene " +
          "una capacidad poco común entre las razas porcinas: infiltra la grasa dentro de la masa " +
          "muscular, en lugar de acumularla solo en una capa exterior. Eso es el veteado que se " +
          "ve al cortar. Y como esa grasa se forma con lo que el animal come, lo que pasó en la " +
          "dehesa en diciembre queda incorporado al tejido, no añadido después.",
      },
      {
        b: "rayo",
        texto:
          "Un jamón de bellota no lleva bellota, y sin embargo la bellota está dentro. No es un " +
          "aroma que se le eche al final: es de lo que está hecha la grasa que se ve entre las " +
          "fibras.",
      },
    ],
  },
  {
    id: "el-vino-se-hace-solo-y-lo-traen-las-avispas",
    titulo: "Cómo se hace el vino",
    categoria: "Ciencia",
    color: "var(--plum)",
    /* Serie «como-se-hace-el-vino», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El vino se hace solo, y la levadura la traen las avispas» */
    encargo: "El vino se hace solo, y la levadura la traen las avispas",
    fotos: [
      {
        local: p_el_vino_se_hace_solo_y_lo_traen_las_avispas,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El vino se hace solo, y la levadura la traen las avispas",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "No hay que añadirle nada",
      },
      {
        b: "parrafo",
        texto:
          "De todas las bebidas alcohólicas, el vino es la más sencilla de hacer, y por un margen " +
          "enorme. Estruja uvas, mete el zumo en un recipiente, espera. Eso es todo. No hace " +
          "falta añadir levadura, ni azúcar, ni cocer nada, ni ninguna operación intermedia.",
      },
      {
        b: "parrafo",
        texto:
          "Eso ocurre porque la uva reúne varias condiciones poco frecuentes al mismo tiempo. " +
          "Tiene <strong>muchísimo azúcar</strong> y además ya disponible, sin necesidad de " +
          "transformarlo. Tiene bastante <strong>acidez</strong>, que mantiene a raya a las " +
          "bacterias que estropearían el líquido. Y su jugo se libera con solo aplastarla, sin " +
          "herramientas. Casi ninguna otra fruta cumple las tres cosas a la vez.",
      },
      {
        b: "parrafo",
        texto:
          "Por eso el vino no se inventó: se <strong>encontró</strong>. Cualquier grupo humano " +
          "que recolectara uva y la guardara en un recipiente durante unos días acabó, tarde o " +
          "temprano, con vino sin haberlo pretendido. No hizo falta que a nadie se le ocurriera " +
          "nada; hizo falta que alguien probara lo que había quedado en el fondo y decidiera " +
          "repetirlo.",
      },
      {
        b: "parrafo",
        texto:
          "Todo lo demás que rodea al vino —las barricas, las variedades, las añadas, los " +
          "tiempos, la temperatura— es refinamiento sobre un proceso que ocurre solo.",
      },
      {
        b: "rayo",
        texto:
          "El vino no se inventó, se encontró. La uva es de las poquísimas frutas que tiene el " +
          "azúcar disponible, la acidez que la protege y el jugo al alcance de la mano.",
      },
      {
        b: "rotulo",
        texto:
          "¿Y de dónde sale la levadura que lo hace?",
      },
      {
        b: "parrafo",
        texto:
          "La explicación clásica dice que la levadura viaja en la piel de la uva, en esa capa " +
          "blanquecina que la recubre. Es simple, es memorable y es, como mínimo, incompleta.",
      },
      {
        b: "parrafo",
        texto:
          "Cuando los investigadores fueron a buscar la levadura del vino, la <em>Saccharomyces " +
          "cerevisiae</em>, se encontraron con un problema: en uvas intactas y sanas apenas " +
          "aparece. Solo se detecta de forma estacional, sobre fruta madura, en los meses " +
          "cálidos. Lo cual deja una pregunta sin responder que resulta ser la buena: si solo " +
          "está ahí unas semanas al año, <strong>¿dónde pasa el resto del tiempo?</strong>",
      },
      {
        b: "parrafo",
        texto:
          "En 2012, un equipo de la Universidad de Florencia dirigido por Irene Stefanini y " +
          "Leonardo Dapporto encontró una respuesta que nadie esperaba: dentro de las " +
          "<strong>avispas</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Las avispas comen uva en verano y se tragan la levadura con ella. Hasta ahí, normal. " +
          "Lo llamativo es que las hembras que hibernan conservan <strong>células de levadura " +
          "vivas en su aparato digestivo durante todo el invierno</strong>, y cuando en primavera " +
          "fundan una colonia nueva y alimentan a sus larvas, les transmiten también la levadura. " +
          "De ahí vuelve a salir el verano siguiente, con las avispas llevándola de racimo en " +
          "racimo. Los investigadores lo resumieron señalando que las avispas pueden mantener una " +
          "transmisión potencialmente interminable de cepas de levadura.",
      },
      {
        b: "parrafo",
        texto:
          "Conviene decir que el asunto no está cerrado. El especialista José Sampaio sostiene " +
          "que el hábitat natural real de esta levadura es la corteza de los robles, y que las " +
          "avispas serían el vehículo más que la casa. Sea una cosa u otra, el resultado práctico " +
          "es el mismo y bastante desconcertante: la continuidad del vino, año tras año, depende " +
          "de un insecto que casi todo el mundo intenta espantar.",
      },
      {
        b: "rayo",
        texto:
          "La levadura del vino pasa el invierno viva dentro del aparato digestivo de las avispas " +
          "hibernantes, que se la pasan a sus larvas y la devuelven a los viñedos en verano.",
      },
    ],
  },
  {
    id: "la-cebada-no-tiene-azucar",
    titulo: "Cómo se hace la cerveza",
    categoria: "Ciencia",
    color: "var(--slate)",
    /* Serie «como-se-hace-la-cerveza», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La cebada no tiene azúcar: hay que engañar a la semilla para que lo fabrique» */
    encargo: "La cebada no tiene azúcar: hay que engañar a la semilla para que lo fabrique",
    fotos: [
      {
        local: p_la_cebada_no_tiene_azucar,
        autor: "",
        licencia: "Pexels License",
        alt:
          "La cebada no tiene azúcar: hay que engañar a la semilla para que lo fabrique",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Con cebada no se puede hacer lo que se hace con la uva",
      },
      {
        b: "parrafo",
        texto:
          "Si el vino se hace estrujando uva y esperando, la pregunta lógica es por qué no se " +
          "puede hacer lo mismo con cebada. Se muele, se moja, se espera, y ya está.",
      },
      {
        b: "parrafo",
        texto:
          "No funciona, y el motivo es que <strong>la cebada no contiene azúcar</strong>. Lo que " +
          "contiene es <strong>almidón</strong>, que no es lo mismo aunque en el fondo esté hecho " +
          "de lo mismo. El almidón es la despensa de la semilla: cadenas larguísimas formadas por " +
          "muchas moléculas de azúcar enganchadas entre sí, empaquetadas para durar meses.",
      },
      {
        b: "parrafo",
        texto:
          "Y la levadura no sabe comer almidón. Solo puede meterse en el cuerpo moléculas de " +
          "azúcar sueltas o en trozos muy pequeños; ante una cadena larga no tiene nada que " +
          "hacer, igual que tú no puedes tragarte una cuerda entera por muy comestible que sea el " +
          "material. Así que un grano de cebada mojado no fermenta: se pudre.",
      },
      {
        b: "parrafo",
        texto:
          "Ahí está la diferencia de fondo entre las dos bebidas. La uva llega con el trabajo " +
          "hecho, con su azúcar libre y listo. La cebada llega con la despensa cerrada con llave, " +
          "y antes de fermentar nada hay que abrirla.",
      },
      {
        b: "rayo",
        texto:
          "La cebada no tiene azúcar, tiene almidón, y la levadura no sabe comerlo. Un grano de " +
          "cebada mojado no fermenta: se pudre.",
      },
      {
        b: "rotulo",
        texto:
          "La solución es hacerle creer que ha llegado la primavera",
      },
      {
        b: "parrafo",
        texto:
          "¿Y quién tiene la llave de esa despensa? Es simple: la propia semilla.",
      },
      {
        b: "parrafo",
        texto:
          "Una semilla guarda almidón precisamente para alimentar al brote cuando germine, y para " +
          "poder usarlo tiene que romperlo en azúcares. Para eso fabrica unas herramientas " +
          "químicas llamadas <strong>amilasas</strong> —alfa-amilasa y beta-amilasa— que van " +
          "cortando las cadenas de almidón en trozos pequeños y fermentables, como el maltosa. Es " +
          "decir, la cebada sabe perfectamente convertir su almidón en azúcar. Solo lo hace " +
          "cuando cree que ha llegado el momento de crecer.",
      },
      {
        b: "parrafo",
        texto:
          "De modo que lo que se hace es <strong>engañarla</strong>. Se moja el grano y se " +
          "mantiene templado, y la semilla concluye que es primavera y que hay humedad, y empieza " +
          "a germinar. Al germinar fabrica sus amilasas y empieza a desmontar su propio almidón.",
      },
      {
        b: "parrafo",
        texto:
          "Y justo entonces, antes de que el brote se lo coma todo, se la detiene en seco con " +
          "calor: el grano se seca en un horno, en la operación llamada <strong>tostado</strong>, " +
          "que interrumpe la germinación y deja las enzimas paradas y guardadas hasta que hagan " +
          "falta. El resultado es la <strong>malta</strong>: un grano lleno de almidón y, a la " +
          "vez, lleno de las herramientas necesarias para convertirlo en azúcar, todo ello " +
          "estable y almacenable durante meses.",
      },
      {
        b: "parrafo",
        texto:
          "El último paso ocurre ya en la fábrica. Se muele la malta y se mezcla con agua " +
          "caliente, y ese calor y esa humedad reactivan las amilasas que llevaban dormidas. Las " +
          "enzimas se ponen a trabajar y trocean el almidón en azúcares. Cuando terminan, se " +
          "tiene por fin un líquido dulce, y a partir de ahí el proceso es exactamente el mismo " +
          "que el del vino: entra la levadura y fermenta.",
      },
      {
        b: "parrafo",
        texto:
          "Dicho de golpe: el vino es una fruta que fermenta sola, y la cerveza es una semilla a " +
          "la que hay que convencer de que germine, dejarla empezar y matarla a media faena para " +
          "quedarse con sus herramientas.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Esas mismas amilasas las tienes tú en la saliva. Por eso, si masticas un " +
          "trozo de pan sin sabor durante un rato largo sin tragarlo, empieza a saberte dulce: " +
          "tus enzimas están haciendo exactamente lo mismo que hace la malta.",
      },
      {
        b: "rayo",
        texto:
          "Se moja el grano para que crea que es primavera y empiece a germinar, y en cuanto " +
          "fabrica las enzimas se le mata con calor. La cerveza empieza con una semilla engañada.",
      },
    ],
  },
  {
    id: "mas-antiguo-que-la-agricultura",
    titulo: "Cómo se hizo el primer pan",
    categoria: "Historia",
    color: "var(--clay)",
    /* Serie «como-se-hizo-el-primer-pan», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El pan es cuatro mil años más antiguo que la agricultura» */
    encargo: "El pan es cuatro mil años más antiguo que la agricultura",
    fotos: [
      {
        local: p_mas_antiguo_que_la_agricultura,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El pan es cuatro mil años más antiguo que la agricultura",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "En un hogar del desierto negro de Jordania",
      },
      {
        b: "parrafo",
        texto:
          "El orden que todos tenemos en la cabeza es este: primero se inventa la agricultura, " +
          "después hay cereal de sobra, y con ese cereal se hace pan. Es una secuencia lógica y " +
          "hay un yacimiento que la rompe.",
      },
      {
        b: "parrafo",
        texto:
          "Se llama Shubayqa 1 y está en el desierto negro del noreste de Jordania. Es un " +
          "asentamiento <strong>natufiense</strong>, de cazadores recolectores, y tiene " +
          "<strong>catorce mil cuatrocientos años</strong>. La Universidad de Copenhague lo " +
          "excavó entre 2012 y 2015 y sacó a la luz dos edificios bien conservados, cada uno con " +
          "un gran hogar circular de piedra en el centro.",
      },
      {
        b: "parrafo",
        texto:
          "Dentro de esos hogares había restos de comida carbonizados. Y entre ellos, pan.",
      },
      {
        b: "rayo",
        texto:
          "El pan no llegó después de la agricultura. Lo estaban haciendo cazadores recolectores " +
          "cuatro mil años antes de que nadie sembrara nada.",
      },
      {
        b: "rotulo",
        texto:
          "Veinticuatro migas quemadas, miradas con un microscopio electrónico",
      },
      {
        b: "parrafo",
        texto:
          "Se analizaron <strong>veinticuatro restos de comida carbonizados</strong>. El problema " +
          "técnico era serio: un grumo negro de catorce mil años puede ser pan, puede ser masa " +
          "cruda quemada, o pueden ser unas gachas que se secaron en el fuego, y a simple vista " +
          "no hay manera de distinguirlos.",
      },
      {
        b: "parrafo",
        texto:
          "¿Y cómo se diferencia entonces un trozo de pan quemado de un grumo de gachas quemadas? " +
          "Es simple: <strong>por dentro</strong>. Con un microscopio electrónico de barrido se " +
          "puede ver la microestructura del fragmento: cómo están dispuestos los granos de " +
          "almidón, hasta qué punto se han fundido unos con otros y qué huecos ha dejado el gas " +
          "al escapar. Ese interior es distinto en un pan plano que en una papilla, y en el " +
          "University College de Londres se establecieron los criterios para separarlos.",
      },
      {
        b: "parrafo",
        texto:
          "El resultado fue claro. Aquellos restos eran pan plano, hecho con antepasados " +
          "silvestres de la cebada, la escanda y la avena, <strong>molidos, cribados y " +
          "amasados</strong> antes de cocerlos. No es cereal tostado ni una pasta improvisada: es " +
          "un procedimiento con pasos, y con pasos que reconocerías.",
      },
      {
        b: "rayo",
        texto:
          "Molieron, cribaron, amasaron y cocieron. Eso es una receta, y tiene catorce mil " +
          "cuatrocientos años.",
      },
      {
        b: "cita",
        texto:
          "El pan plano hallado en Shubayqa 1 es la evidencia más antigua de elaboración de pan " +
          "recuperada hasta ahora, y demuestra que hornear se inventó antes de que tuviéramos " +
          "cultivos.",
      },
      {
        b: "parrafo",
        texto:
          "— Tobias Richter, Universidad de Copenhague",
      },
    ],
  },
  {
    id: "como-un-simple-papel-tiene-valor",
    titulo: "Cómo un simple papel tiene valor",
    categoria: "Economía",
    color: "var(--plum)",
    /* Serie «como-un-simple-papel-tiene-valor», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Desde 1971 no hay oro detrás de ningún billete» */
    encargo: "Desde 1971 no hay oro detrás de ningún billete",
    fotos: [
      {
        local: p_como_un_simple_papel_tiene_valor,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Desde 1971 no hay oro detrás de ningún billete",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Durante casi treinta años el dólar fue convertible en metal",
      },
      {
        b: "parrafo",
        texto:
          "Conviene empezar por lo que había antes, porque mucha gente cree que lo del oro es una " +
          "leyenda antigua y en realidad terminó hace poco más de medio siglo.",
      },
      {
        b: "parrafo",
        texto:
          "En 1944, representantes de 44 países se reunieron en Bretton Woods, en New Hampshire, " +
          "para diseñar un nuevo sistema monetario internacional. Lo que montaron allí funcionaba " +
          "en dos escalones. Las monedas del mundo tenían un tipo de cambio fijo con el dólar, y " +
          "el dólar era convertible en oro a un precio también fijo: 35 dólares la onza.",
      },
      {
        b: "parrafo",
        texto:
          "Encadena los dos escalones y sale lo que aquello significaba. Un banco central " +
          "extranjero con dólares en la caja podía presentarse en Estados Unidos y cambiarlos por " +
          "metal, a un precio conocido de antemano. Y como todas las demás monedas estaban " +
          "ancladas al dólar, todas ellas tenían detrás, de forma indirecta pero real, una " +
          "cantidad concreta de oro.",
      },
      {
        b: "rayo",
        texto:
          "El respaldo en oro no era una promesa hecha al ciudadano de a pie, sino a los bancos " +
          "centrales de otros países. Pero mientras esa ventanilla estuvo abierta, el sistema " +
          "entero descansaba sobre un metal que se podía pesar.",
      },
      {
        b: "rotulo",
        texto:
          "Lo que ocurrió el 15 de agosto de 1971 fue cerrar la ventanilla",
      },
      {
        b: "parrafo",
        texto:
          "El 15 de agosto de 1971, el presidente Richard Nixon anunció de forma unilateral la " +
          "cancelación de la convertibilidad internacional directa del dólar en oro.",
      },
      {
        b: "parrafo",
        texto:
          "Formalmente no abolió Bretton Woods. Pero al suspender uno de sus componentes " +
          "esenciales lo dejó inoperante, y ahí se acabó todo: aquello convirtió efectivamente al " +
          "dólar en una moneda fiduciaria, y hacia 1973 el régimen de tipos de cambio flotantes " +
          "había sustituido de hecho al sistema anterior para el resto de las monedas.",
      },
      {
        b: "parrafo",
        texto:
          "Es decir, la fecha en la que el dinero del mundo dejó de tener metal detrás no está en " +
          "un manual de historia antigua. Está a medio siglo escaso, y hay muchísima gente viva " +
          "que era adulta cuando pasó.",
      },
      {
        b: "parrafo",
        texto:
          "Y a partir de ese día, un billete dejó de ser un recibo. Antes era, en el fondo, un " +
          "resguardo por algo depositado en otro sitio. Después pasó a ser lo que es hoy: un " +
          "papel que no promete entregarte nada.",
      },
      {
        b: "rayo",
        texto:
          "El dinero no perdió su respaldo poco a poco ni por desgaste. Lo perdió en un anuncio, " +
          "un domingo por la noche, y el sistema siguió funcionando exactamente igual al día " +
          "siguiente. Esa continuidad es el dato incómodo del asunto.",
      },
    ],
  },
  {
    id: "un-cohete-no-empuja-contra-nada",
    titulo: "Cómo vuelan los cohetes",
    categoria: "Ciencia",
    color: "var(--plum)",
    /* Serie «como-vuelan-los-cohetes», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un cohete no empuja contra nada, y por eso funciona mejor en el vacío» */
    encargo: "Un cohete no empuja contra nada, y por eso funciona mejor en el vacío",
    fotos: [
      {
        local: p_un_cohete_no_empuja_contra_nada,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un cohete no empuja contra nada, y por eso funciona mejor en el vacío",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La intuición dice que empuja contra el aire, y es falsa",
      },
      {
        b: "parrafo",
        texto:
          "Cuando vemos despegar un cohete, con esa columna de fuego aplastándose contra la " +
          "plataforma, la lectura que hace el cerebro es inmediata: los gases empujan hacia abajo " +
          "contra el suelo y contra el aire, y ese empujón levanta la máquina. Es la misma idea " +
          "con la que entendemos a un nadador que aparta agua hacia atrás para avanzar, o a " +
          "alguien que se impulsa apoyándose en una pared.",
      },
      {
        b: "parrafo",
        texto:
          "Si eso fuera lo que ocurre, un cohete dejaría de funcionar en el espacio. Allí no hay " +
          "aire contra el que apoyarse, ni suelo, ni nada: la nave estaría agitando sus gases en " +
          "el vacío como quien intenta nadar sin agua. Y sin embargo funcionan perfectamente en " +
          "el espacio, que es precisamente donde tienen que trabajar.",
      },
      {
        b: "parrafo",
        texto:
          "La razón es que el empuje no viene de fuera, viene de dentro. Un cohete no se apoya en " +
          "nada externo: <strong>se apoya en el propio material que expulsa</strong>. Está " +
          "lanzando masa hacia atrás a enorme velocidad, y esa masa, al salir disparada, empuja " +
          "al cohete hacia delante con exactamente la misma fuerza. Es la tercera ley de Newton " +
          "en su versión más pura, y no necesita ningún medio alrededor para cumplirse.",
      },
      {
        b: "parrafo",
        texto:
          "Hay un experimento mental que lo deja claro. Imagínate de pie sobre un lago helado, " +
          "con patines y sin nada a mano de lo que agarrarte, sosteniendo una bola de bolos. No " +
          "puedes moverte: no hay rozamiento del que tirar ni pared que empujar. Ahora lanza la " +
          "bola hacia delante con todas tus fuerzas. Empezarás a deslizarte hacia atrás, y no " +
          "porque hayas empujado el hielo o el aire, sino porque has empujado la bola y la bola " +
          "te ha empujado a ti. Un cohete es eso mismo repetido: lanza bolas —moléculas de gas " +
          "caliente— millones de veces por segundo, y lo que retrocede eres tú.",
      },
      {
        b: "rayo",
        texto:
          "Un cohete no empuja contra el aire ni contra el suelo. Empuja contra sus propios " +
          "gases, y por eso el vacío no le estorba.",
      },
      {
        b: "rotulo",
        texto:
          "En el espacio no solo funciona: funciona mejor",
      },
      {
        b: "parrafo",
        texto:
          "Aquí está el giro que remata el asunto, porque el vacío no es un obstáculo que el " +
          "cohete supere a duras penas. El vacío es su mejor escenario, y un mismo motor entrega " +
          "<strong>más empuje</strong> fuera de la atmósfera que a nivel del mar.",
      },
      {
        b: "parrafo",
        texto:
          "Hay dos motivos, y los dos son fáciles de ver. El primero es la resistencia del aire: " +
          "al atravesar la atmósfera densa, un cohete gasta una parte considerable de su energía " +
          "simplemente en apartar aire de su camino, y cuanto más rápido va, más le cuesta. Fuera " +
          "de la atmósfera ese peaje desaparece por completo.",
      },
      {
        b: "parrafo",
        texto:
          "El segundo es más sutil y es el que de verdad da la vuelta a la intuición. En la boca " +
          "de la tobera, por donde salen los gases, la atmósfera está empujando hacia dentro con " +
          "su propia presión, oponiéndose a la salida del chorro. Ese aire de alrededor, que la " +
          "intuición imaginaba como el apoyo del cohete, en realidad está actuando como un freno " +
          "en la salida. En el vacío no hay nada que empuje hacia dentro, el chorro se expande " +
          "libremente y el motor rinde más. El aire no era el aliado: era el estorbo.",
      },
      {
        b: "parrafo",
        texto:
          "Por eso los cohetes de varias etapas llevan motores distintos arriba y abajo. Los de " +
          "la primera etapa están diseñados para trabajar dentro de la atmósfera y llevan toberas " +
          "relativamente cortas; los de las etapas superiores, que solo se encienden ya arriba, " +
          "llevan toberas enormes y acampanadas, con formas que serían contraproducentes a nivel " +
          "del mar y que en el vacío exprimen hasta el último gramo de empuje. Esa diferencia de " +
          "forma entre unas toberas y otras, que se ve a simple vista en cualquier fotografía de " +
          "un cohete despiezado, es la prueba física de que el vacío no es un problema a resolver " +
          "sino una ventaja a aprovechar.",
      },
      {
        b: "rayo",
        texto:
          "El aire no ayuda al cohete: le frena, y además presiona en contra a la salida de la " +
          "tobera. Un mismo motor da más empuje en el vacío que a nivel del mar.",
      },
    ],
  },
  {
    id: "como-vuelan-los-helicopteros",
    titulo: "Cómo vuelan los helicópteros",
    categoria: "Tecnología",
    color: "var(--slate)",
    /* Serie «como-vuelan-los-helicopteros», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un helicóptero no sube porque las palas giren más deprisa» */
    encargo: "Un helicóptero no sube porque las palas giren más deprisa",
    fotos: [
      {
        local: p_como_vuelan_los_helicopteros,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un helicóptero no sube porque las palas giren más deprisa",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El rotor va a velocidad constante casi todo el vuelo",
      },
      {
        b: "parrafo",
        texto:
          "Quizá te imagines que un helicóptero funciona como un ventilador: acelera las palas " +
          "para subir y las frena para bajar. Es lo intuitivo y es exactamente lo que no ocurre.",
      },
      {
        b: "parrafo",
        texto:
          "El rotor de un helicóptero gira <strong>a una velocidad prácticamente " +
          "constante</strong> durante todo el vuelo. Ni sube de vueltas para despegar ni baja " +
          "para descender. Un motor de pistón o una turbina tardan demasiado en cambiar de " +
          "régimen, y una máquina que dependiera de eso para no caerse sería incontrolable.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que cambia es otra cosa: <strong>el ángulo con el que cada pala ataca el " +
          "aire</strong>. Una pala de helicóptero no es una tabla fija, es un ala que puede girar " +
          "sobre su propio eje longitudinal.",
      },
      {
        b: "rayo",
        texto:
          "El mando que sube y baja un helicóptero no toca el motor. Toca la inclinación de las " +
          "palas, y el motor se limita a mantener el ritmo.",
      },
      {
        b: "rotulo",
        texto:
          "Y para avanzar, cada pala cambia de ángulo una vez por vuelta",
      },
      {
        b: "parrafo",
        texto:
          "¿Y cómo se mueve entonces hacia delante? Aquí está lo verdaderamente ingenioso, y es " +
          "simple: <strong>cada pala cambia de ángulo mientras gira, según por dónde vaya " +
          "pasando</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Imagina el círculo que dibujan las palas visto desde arriba, y divídelo en delante y " +
          "detrás. Si consigues que cada pala lleve <strong>menos</strong> ángulo justo cuando " +
          "pasa por la parte delantera y <strong>más</strong> cuando pasa por la trasera, la " +
          "parte de atrás del círculo empuja más fuerte que la de delante. El resultado es que el " +
          "plano del rotor se inclina hacia delante, y con él toda la sustentación.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en la consecuencia, porque le da la vuelta a lo que parece que pasa. Un " +
          "helicóptero no se inclina y luego avanza. <strong>El rotor se inclina primero, y el " +
          "aparato se inclina después porque cuelga de él.</strong>",
      },
      {
        b: "parrafo",
        texto:
          "Ese mando se llama <strong>cíclico</strong>, porque el cambio de ángulo se repite en " +
          "cada ciclo del rotor, y el otro, el que cambia el ángulo de todas las palas a la vez, " +
          "se llama <strong>colectivo</strong>. Con esos dos y el rotor de cola se vuela un " +
          "helicóptero entero.",
      },
      {
        b: "rayo",
        texto:
          "Las palas no dan vueltas todas iguales. Cada una va cambiando de forma de trabajar a " +
          "lo largo del giro, decenas de veces por segundo.",
      },
    ],
  },
  {
    id: "como-vuelan-los-pajaros",
    titulo: "Cómo vuelan los pájaros",
    categoria: "Naturaleza",
    color: "var(--sage)",
    /* Serie «como-vuelan-los-pajaros», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El ala de un pájaro solo empuja en la bajada; al subir deja pasar el aire» */
    encargo: "El ala de un pájaro solo empuja en la bajada; al subir deja pasar el aire",
    fotos: [
      {
        local: p_como_vuelan_los_pajaros,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El ala de un pájaro solo empuja en la bajada; al subir deja pasar el aire",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La bajada es la que hace el trabajo",
      },
      {
        b: "parrafo",
        texto:
          "Un ala de pájaro es un perfil aerodinámico, igual que el ala de un avión. La fuerza de " +
          "sustentación la produce la acción del flujo de aire sobre ella, que está conformada de " +
          "manera que el aire ejerce una fuerza neta hacia arriba mientras el propio aire sale " +
          "desviado hacia abajo.",
      },
      {
        b: "parrafo",
        texto:
          "Ese es el principio, y hasta aquí no hay diferencia con un avión. La diferencia es que " +
          "un avión tiene el ala quieta y un motor aparte que lo empuja hacia delante, mientras " +
          "que un pájaro tiene que sacar de la misma ala las dos cosas: sostenerse y avanzar. Por " +
          "eso la bate.",
      },
      {
        b: "parrafo",
        texto:
          "Y en ese batido, el reparto no es equitativo. Es el aleteo hacia abajo el que " +
          "proporciona la mayor parte del empuje. La bajada es el motor.",
      },
      {
        b: "rayo",
        texto:
          "Un pájaro no tiene un ala y una hélice, tiene una sola pieza que hace las dos cosas. Y " +
          "la hace casi toda en la mitad del recorrido.",
      },
      {
        b: "rotulo",
        texto:
          "Y entonces aparece el problema de tener que subir el ala otra vez",
      },
      {
        b: "parrafo",
        texto:
          "Aquí está la parte que casi nadie se plantea, y es un problema serio. Si el ala empuja " +
          "el aire hacia abajo al bajar, al subir haría exactamente lo contrario: empujar el aire " +
          "hacia arriba y al pájaro hacia abajo, deshaciendo lo que acaba de conseguir.",
      },
      {
        b: "parrafo",
        texto:
          "La solución son dos trucos que funcionan a la vez.",
      },
      {
        b: "parrafo",
        texto:
          "El primero es plegar. En cada aleteo hacia arriba el ala se recoge ligeramente hacia " +
          "dentro, lo que reduce el coste energético del vuelo batido. Menos superficie " +
          "desplegada es menos aire que mover en la dirección equivocada.",
      },
      {
        b: "parrafo",
        texto:
          "El segundo es más fino, y ocurre en cada pluma por separado. Las plumas de vuelo no " +
          "son simétricas: tienen un lado más estrecho y otro más ancho. Durante el aleteo, esa " +
          "forma hace que cada pluma <strong>gire sobre su propio folículo</strong>, y al girar, " +
          "el lado mayor queda apuntando hacia abajo. El resultado es que se abren huecos entre " +
          "plumas y el aire se cuela a través del ala.",
      },
      {
        b: "parrafo",
        texto:
          "Piensa en lo que eso significa mecánicamente. Al bajar, las plumas se cierran unas " +
          "contra otras y el ala es una superficie sólida que empuja. Al subir, las mismas plumas " +
          "se abren y el ala se vuelve una persiana por la que el aire pasa sin encontrar " +
          "resistencia.",
      },
      {
        b: "rayo",
        texto:
          "El ala de un pájaro es una válvula que solo funciona en un sentido, y no hace falta " +
          "ningún mecanismo para conmutarla. La propia forma asimétrica de cada pluma la abre y " +
          "la cierra sola según hacia dónde vaya el ala.",
      },
    ],
  },
  {
    id: "dos-preguntas-distintas",
    titulo: "Cuál es el animal más venenoso",
    categoria: "Naturaleza",
    color: "var(--teal)",
    /* Serie «cual-es-el-animal-mas-venenoso-del-mundo», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La pregunta esconde dos preguntas, y tienen respuestas distintas» */
    encargo: "La pregunta esconde dos preguntas, y tienen respuestas distintas",
    fotos: [
      {
        local: p_dos_preguntas_distintas,
        autor: "",
        licencia: "Pexels License",
        alt:
          "La pregunta esconde dos preguntas, y tienen respuestas distintas",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Hay dos maneras completamente distintas de envenenar",
      },
      {
        b: "parrafo",
        texto:
          "Antes de buscar un campeón hay que separar dos cosas que el castellano mete en la " +
          "misma palabra y que en biología son fenómenos opuestos.",
      },
      {
        b: "parrafo",
        texto:
          "Por un lado están los animales que <strong>inyectan</strong>. Tienen un aparato para " +
          "atravesar la piel de otro —colmillos, aguijón, arpón, células urticantes— y una " +
          "glándula que fabrica la sustancia. Serpientes, escorpiones, medusas, avispas, arañas.",
      },
      {
        b: "parrafo",
        texto:
          "Por otro están los animales que <strong>son tóxicos al tocarlos o al " +
          "comerlos</strong>. No inyectan nada ni tienen con qué. Llevan la sustancia en la piel, " +
          "en las vísceras o en la carne, y solo hace efecto si el otro entra en contacto o se " +
          "los come. Ranas, peces globo, algunas orugas.",
      },
      {
        b: "parrafo",
        texto:
          "El inglés distingue las dos cosas con dos palabras distintas, <em>venomous</em> y " +
          "<em>poisonous</em>. El castellano usa «venenoso» para ambas, y de ahí nace buena parte " +
          "del lío. Existe «ponzoñoso» para lo primero, pero casi nadie la usa.",
      },
      {
        b: "rayo",
        texto:
          "Una serpiente y una rana venenosa no hacen la misma cosa. Una tiene un arma; la otra " +
          "tiene una alarma.",
      },
      {
        b: "rotulo",
        texto:
          "No es un matiz de vocabulario: cambia quién tiene el problema",
      },
      {
        b: "parrafo",
        texto:
          "¿Y por qué importa tanto la distinción? Es simple: <strong>cambia para qué " +
          "sirve</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "El veneno inyectado es una herramienta de caza. La serpiente lo usa para inmovilizar a " +
          "una presa que se escapa, y por eso ha evolucionado para actuar rápido y desde una " +
          "glándula que puede recargar. Que además sirva para defenderse es un extra.",
      },
      {
        b: "parrafo",
        texto:
          "La toxina de contacto no puede cazar nada. Solo funciona cuando ya te han metido en la " +
          "boca, y su beneficio no es para el individuo que la lleva —a ese normalmente ya se lo " +
          "han comido— sino para su especie: el depredador aprende, escupe y no vuelve a " +
          "intentarlo. Por eso estos animales suelen ser de colores llamativos, mientras que los " +
          "que inyectan tienden a camuflarse. Uno necesita que lo vean; el otro necesita lo " +
          "contrario.",
      },
      {
        b: "parrafo",
        texto:
          "Así que la pregunta «cuál es el animal más venenoso» tiene dos respuestas legítimas, y " +
          "son dos bichos que no se parecen en nada.",
      },
      {
        b: "rayo",
        texto:
          "Los que inyectan se esconden porque necesitan acercarse. Los tóxicos al tacto van de " +
          "colores chillones porque necesitan que los reconozcas antes de morderlos.",
      },
    ],
  },
  {
    id: "todos-la-misma-edad",
    titulo: "Cuál es el idioma más antiguo",
    categoria: "Ciencia",
    color: "var(--sage)",
    /* Serie «cual-es-el-idioma-mas-antiguo-que-se-sigue-hablando», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Todos los idiomas del mundo tienen exactamente la misma edad» */
    encargo: "Todos los idiomas del mundo tienen exactamente la misma edad",
    fotos: [
      {
        local: p_todos_la_misma_edad,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Todos los idiomas del mundo tienen exactamente la misma edad",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La pregunta da por hecho que un idioma tiene fecha de nacimiento",
      },
      {
        b: "parrafo",
        texto:
          "Es una de esas preguntas que parecen tener respuesta y no la tienen, y el motivo es " +
          "interesante: falla la premisa. Preguntar cuál es el idioma más antiguo supone que los " +
          "idiomas empiezan en algún momento, como empieza una ciudad o una empresa. Y no " +
          "empiezan.",
      },
      {
        b: "parrafo",
        texto:
          "Piensa en el caso que tenemos más cerca. ¿Qué día dejó de hablarse latín y empezó a " +
          "hablarse castellano? No hay tal día. Hubo generaciones de personas que aprendieron a " +
          "hablar de sus padres, introdujeron cambios mínimos, y se los pasaron a sus hijos. En " +
          "ningún punto de esa cadena hubo nadie que hablara latín con unos padres que hablaran " +
          "castellano, ni al revés.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que llamamos «latín» y «castellano» son etiquetas que ponemos nosotros, mirando " +
          "hacia atrás, sobre dos tramos suficientemente separados de un mismo hilo continuo. Son " +
          "cómodas y son útiles, pero la frontera la ponemos nosotros, no la lengua.",
      },
      {
        b: "rayo",
        texto:
          "Ningún idioma tiene fecha de nacimiento, porque en ningún momento hubo unos padres y " +
          "unos hijos que no se entendieran entre sí.",
      },
      {
        b: "rotulo",
        texto:
          "La cadena de cada idioma llega exactamente igual de lejos",
      },
      {
        b: "parrafo",
        texto:
          "Si tiras del hilo del castellano hacia atrás, pasas por el latín vulgar, por el latín, " +
          "por las lenguas itálicas, por el protoindoeuropeo, y sigues. ¿Y hasta dónde llega esa " +
          "cadena? Es simple: <strong>hasta el principio</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Cada lengua viva del planeta desciende, sin una sola interrupción, de la lengua de los " +
          "primeros humanos que hablaron. No hay ninguna que se creara de cero en un momento " +
          "posterior: todas son la punta actual de un hilo que no se ha cortado nunca. En ese " +
          "sentido, el más literal y el más honesto, <strong>todas tienen la misma edad</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Conviene decir qué es lo que la gente quiere preguntar en realidad, porque suele ser " +
          "una de estas tres cosas, y son distintas entre sí. A veces se pregunta qué lengua " +
          "lleva más tiempo escribiéndose. A veces, cuál se parece más a como era hace mucho. Y a " +
          "veces, cuál lleva más tiempo hablándose en el mismo sitio. Son tres preguntas con tres " +
          "respuestas diferentes, y ninguna de las tres es «cuál es más antigua».",
      },
      {
        b: "rayo",
        texto:
          "La respuesta correcta a «cuál es el idioma más antiguo» es «todos». La pregunta " +
          "interesante es otra, y hay que elegir cuál.",
      },
    ],
  },
  {
    id: "cual-es-el-rio-mas-largo-del-mundo",
    titulo: "Cuál es el río más largo del mundo",
    categoria: "Planeta Tierra",
    color: "var(--clay)",
    /* Serie «cual-es-el-rio-mas-largo-del-mundo», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Nadie sabe con certeza cuál es el río más largo del mundo» */
    encargo: "Nadie sabe con certeza cuál es el río más largo del mundo",
    fotos: [
      {
        local: p_cual_es_el_rio_mas_largo_del_mundo,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Nadie sabe con certeza cuál es el río más largo del mundo",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Las medidas del mismo río no coinciden entre sí",
      },
      {
        b: "parrafo",
        texto:
          "La respuesta escolar es el Nilo. Y es la que se sigue dando: se suele decir que el " +
          "Nilo es el río más largo del mundo, con unos 6.650 kilómetros, y que el Amazonas es el " +
          "segundo, con al menos 6.400.",
      },
      {
        b: "parrafo",
        texto:
          "El problema aparece al mirar las otras mediciones. En 2007 y 2008, un equipo de " +
          "científicos sostuvo que el Amazonas medía 6.992 kilómetros y era más largo que el " +
          "Nilo, al que atribuían 6.853. Y en 2009 un estudio revisado por pares concluyó lo " +
          "contrario, dando 7.088 kilómetros al Nilo frente a 6.575 del Amazonas.",
      },
      {
        b: "parrafo",
        texto:
          "Ordena esos números y verás dónde está el asunto de verdad. Al Nilo se le han asignado " +
          "6.650, 6.853 y 7.088 kilómetros según quién lo mida: más de 400 kilómetros de " +
          "diferencia dentro del mismo río. Y la ventaja que el estudio de 2007 daba al Amazonas " +
          "sobre el Nilo era de menos de 140 kilómetros.",
      },
      {
        b: "parrafo",
        texto:
          "Es decir, la discrepancia entre distintas mediciones de un solo río llegó a triplicar " +
          "la diferencia que se estaba discutiendo entre los dos.",
      },
      {
        b: "rayo",
        texto:
          "La discusión sobre cuál es el río más largo no se puede resolver con una cinta métrica " +
          "más precisa. Los números que se comparan no miden la misma cosa.",
      },
      {
        b: "rotulo",
        texto:
          "El debate sigue abierto, y esa es la respuesta honesta",
      },
      {
        b: "parrafo",
        texto:
          "Hay un motivo por el que esto no se zanja, y no es que falte tecnología. Los satélites " +
          "llevan décadas fotografiando ambos ríos con todo detalle.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que falta es un acuerdo sobre qué hay que medir. Y como no lo hay, cada equipo " +
          "aplica sus propios criterios, obtiene un número distinto y todos son correctos dentro " +
          "de su definición. El estudio de 2009 daba ganador al Nilo, pero la propia literatura " +
          "reconoce que la longitud del Amazonas sigue abierta a interpretación y a debate.",
      },
      {
        b: "parrafo",
        texto:
          "Así que la respuesta a la pregunta no es «el Nilo» ni «el Amazonas». Es que la " +
          "longitud de un río no es un dato que exista ahí fuera esperando a ser leído, sino el " +
          "resultado de unas cuantas decisiones humanas tomadas antes de empezar a medir.",
      },
      {
        b: "parrafo",
        texto:
          "En las dos secciones siguientes están esas decisiones, y son solo dos: dónde empieza " +
          "un río y dónde acaba.",
      },
      {
        b: "rayo",
        texto:
          "Los ríos no tienen longitud del mismo modo que una mesa tiene largo. Tienen la " +
          "longitud que se deduce de las convenciones que uno acepte, y las convenciones no están " +
          "unificadas.",
      },
    ],
  },
  {
    id: "nadie-las-ha-contado",
    titulo: "Cuántas estrellas hay en el universo",
    categoria: "Ciencia",
    color: "var(--clay)",
    /* Serie «cuantas-estrellas-hay-en-el-universo», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Nadie ha contado nunca las estrellas del universo» */
    encargo: "Nadie ha contado nunca las estrellas del universo",
    fotos: [
      {
        local: p_nadie_las_ha_contado,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Nadie ha contado nunca las estrellas del universo",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Se cuenta un trozo diminuto y se multiplica",
      },
      {
        b: "parrafo",
        texto:
          "Cuando alguien te da una cifra de estrellas en el universo, conviene saber de dónde " +
          "sale, porque no sale de contarlas. Nadie ha contado jamás las estrellas del universo " +
          "ni va a hacerlo, y no por pereza: la inmensa mayoría son invisibles incluso para los " +
          "mejores telescopios, porque están demasiado lejos o son demasiado débiles.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que se hace es un truco de encuestador, y es de una elegancia notable. Se elige un " +
          "trozo de cielo minúsculo, aparentemente vacío, y se apunta ahí un telescopio potente " +
          "durante días acumulando luz. Al revelar la imagen, ese cuadrado que parecía negro " +
          "aparece lleno de galaxias, cientos o miles de ellas. Entonces se cuentan las de ese " +
          "recorte, se calcula cuántos recortes así caben en la esfera del cielo entera, y se " +
          "multiplica.",
      },
      {
        b: "parrafo",
        texto:
          "Con eso obtienes un número de galaxias. Después hay que estimar cuántas estrellas " +
          "tiene una galaxia de media, que es otro cálculo con sus propias suposiciones, y se " +
          "multiplica otra vez. El resultado es la cifra que luego circula por ahí como si " +
          "alguien la hubiera comprobado.",
      },
      {
        b: "parrafo",
        texto:
          "Un trabajo de 2016 estimó por esa vía unos dos billones de galaxias en el universo " +
          "observable. Multiplicando por una media razonable de estrellas por galaxia salen " +
          "números con veinte ceros o más detrás. Y conviene retener la palabra que gobierna toda " +
          "la operación: <strong>estimación</strong>. No es un recuento, es una extrapolación a " +
          "partir de una muestra minúscula.",
      },
      {
        b: "rayo",
        texto:
          "La cifra no sale de contar estrellas. Sale de contar galaxias en un recorte de cielo " +
          "del tamaño de un grano de arena a un brazo de distancia, y multiplicar.",
      },
      {
        b: "rotulo",
        texto:
          "Y lo que tú ves de todo eso son unos pocos miles",
      },
      {
        b: "parrafo",
        texto:
          "Ahora la parte que devuelve el asunto a la escala humana, y que descoloca bastante a " +
          "la gente.",
      },
      {
        b: "parrafo",
        texto:
          "Sal una noche despejada, lejos de las luces de la ciudad, mira hacia arriba y ten la " +
          "sensación habitual de que el cielo está infestado de estrellas, de que no caben más. " +
          "Ese cielo que te parece imposible de abarcar contiene unos pocos miles de estrellas " +
          "visibles. Con muy buenas condiciones y buena vista, del orden de dos o tres mil a la " +
          "vez, y contando todo lo que se puede ver desde cualquier punto del planeta a lo largo " +
          "del año, unos pocos miles más.",
      },
      {
        b: "parrafo",
        texto:
          "Compara esa cifra con la anterior y el resultado es difícil de asimilar. De un número " +
          "con veinte ceros, tú ves cuatro dígitos. Y no son una muestra representativa: son las " +
          "que están más cerca y las que brillan más, es decir, precisamente las excepcionales.",
      },
      {
        b: "parrafo",
        texto:
          "Y todas ellas, sin excepción, son de nuestra galaxia. Todo lo que has visto en el " +
          "cielo con tus ojos a lo largo de tu vida, cada estrella que has mirado alguna vez, " +
          "está dentro de la Vía Láctea. Lo único que se ve a simple vista más allá son unas " +
          "pocas manchas borrosas, y una de ellas es Andrómeda.",
      },
      {
        b: "rayo",
        texto:
          "De un número con veinte ceros, tus ojos ven cuatro dígitos. Y todas están dentro de " +
          "nuestra galaxia.",
      },
    ],
  },
  {
    id: "cuanto-aguanta-un-cactus-sin-agua",
    titulo: "Cuánto aguanta un cactus sin agua",
    categoria: "Naturaleza",
    color: "var(--teal)",
    /* Serie «cuanto-aguanta-un-cactus-sin-agua», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un cactus no aguanta por lo que guarda, sino por lo que no pierde» */
    encargo: "Un cactus no aguanta por lo que guarda, sino por lo que no pierde",
    fotos: [
      {
        local: p_cuanto_aguanta_un_cactus_sin_agua,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un cactus no aguanta por lo que guarda, sino por lo que no pierde",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Lo que guarda es muchísimo, y aun así no bastaría",
      },
      {
        b: "parrafo",
        texto:
          "La respuesta que todo el mundo da es que un cactus aguanta porque va lleno de agua, y " +
          "esa respuesta es cierta. El agua puede llegar a suponer el 90 % de la masa total de un " +
          "cactus.",
      },
      {
        b: "parrafo",
        texto:
          "Las cifras del saguaro, el cactus gigante de los desiertos de Norteamérica, dan la " +
          "escala del asunto. Se calcula que un ejemplar adulto puede absorber hasta 760 litros " +
          "de agua durante una sola tormenta. Completamente hidratado, ese mismo cactus llega a " +
          "pesar entre 1.500 y 2.200 kilos, es decir, más que un coche pequeño, y casi todo ese " +
          "peso es agua.",
      },
      {
        b: "parrafo",
        texto:
          "Para poder hacer eso, el tallo está construido como un fuelle. Las costillas " +
          "verticales que le dan ese aspecto acanalado no son decorativas: permiten que el tallo " +
          "se encoja durante la sequía y vuelva a hincharse cuando hay agua disponible, sin que " +
          "la piel se rompa. Un cactus sediento y uno lleno son, literalmente, de distinto " +
          "diámetro.",
      },
      {
        b: "parrafo",
        texto:
          "Pero aquí hay que parar, porque la pregunta interesante no es cuánta agua cabe dentro. " +
          "Es otra: cualquier planta corriente con 760 litros dentro y las hojas abiertas al sol " +
          "del desierto se quedaría seca en cuestión de semanas. Si el depósito fuera toda la " +
          "explicación, no habría cactus.",
      },
      {
        b: "rayo",
        texto:
          "El depósito es la parte fácil del problema. Guardar agua en un desierto no sirve de " +
          "nada si la planta la va soltando al aire mientras respira.",
      },
      {
        b: "rotulo",
        texto:
          "Los poros se abren de noche, cuando no hay sol",
      },
      {
        b: "parrafo",
        texto:
          "Toda planta tiene un problema de diseño que no puede resolver: para hacer la " +
          "fotosíntesis necesita dejar entrar dióxido de carbono del aire, y lo hace por unos " +
          "poros microscópicos. Por esos mismos poros se le escapa el agua. La puerta de entrada " +
          "del alimento es la puerta de salida del agua, y es la misma puerta.",
      },
      {
        b: "parrafo",
        texto:
          "Una planta normal la abre de día, que es cuando hay luz para fotosintetizar. En un " +
          "desierto eso significa abrirla justo en las horas de más calor y menos humedad, que es " +
          "el peor momento posible.",
      },
      {
        b: "parrafo",
        texto:
          "El cactus hace lo contrario, y ahí está el truco entero. Sus poros se abren únicamente " +
          "de noche, cuando la temperatura es más baja y la pérdida de agua es mínima. El dióxido " +
          "de carbono entra entonces y no se usa: se captura y se guarda dentro de las células en " +
          "forma de ácidos orgánicos. Al amanecer, los poros se cierran y permanecen cerrados " +
          "todo el día. Y con la planta completamente sellada al exterior, la fotosíntesis " +
          "funciona a pleno sol usando solo ese dióxido de carbono almacenado durante la noche.",
      },
      {
        b: "parrafo",
        texto:
          "Es decir: un cactus a mediodía, en el momento de máxima actividad, es un organismo " +
          "herméticamente cerrado. Está fabricando alimento sin intercambiar nada con el aire que " +
          "lo rodea.",
      },
      {
        b: "parrafo",
        texto:
          "Ese sistema tiene nombre y no es exclusivo de los cactus: se llama <strong>metabolismo " +
          "ácido de las crasuláceas</strong>.",
      },
      {
        b: "rayo",
        texto:
          "La adaptación decisiva de un cactus no está en el depósito, sino en el horario. Separó " +
          "en el tiempo las dos cosas que cualquier otra planta hace a la vez, y por eso puede " +
          "trabajar bajo el sol sin perder agua.",
      },
    ],
  },
  {
    id: "termino-en-1453",
    titulo: "Cuánto duró de verdad el Imperio romano",
    categoria: "Historia",
    color: "var(--plum)",
    /* Serie «cuanto-duro-de-verdad-el-imperio-romano», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El Imperio romano terminó en 1453, no en 476» */
    encargo: "El Imperio romano terminó en 1453, no en 476",
    fotos: [
      {
        local: p_termino_en_1453,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El Imperio romano terminó en 1453, no en 476",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "En el año 476 cayó la mitad de un imperio que llevaba tiempo teniendo dos",
      },
      {
        b: "parrafo",
        texto:
          "Todo el equívoco viene de una omisión en la frase. Se dice «en 476 cayó el Imperio " +
          "romano», y lo que ocurrió fue que en 476 cayó <strong>el Imperio romano de " +
          "Occidente</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Para entonces, el imperio llevaba mucho administrándose como dos mitades con dos " +
          "cortes, dos administraciones y dos emperadores. La occidental, con capital en Rávena, " +
          "es la que se deshizo entre invasiones, golpes militares y emperadores de quita y pon. " +
          "La oriental, con capital en Constantinopla, no solo no cayó: siguió funcionando " +
          "<strong>mil años más</strong> después de que la mitad occidental se hubiera " +
          "desmenuzado en reinos.",
      },
      {
        b: "parrafo",
        texto:
          "Mil años no es una nota a pie de página. Es más tiempo del que separa hoy a cualquiera " +
          "de nosotros de la conquista normanda de Inglaterra. Durante todo ese periodo hubo un " +
          "Estado romano, con emperador romano, leyes romanas y una capital que se consideraba a " +
          "sí misma la ciudad imperial.",
      },
      {
        b: "rayo",
        texto:
          "Cuando se dice que Roma cayó en 476, se está describiendo la mitad de un imperio y " +
          "olvidando la mitad que siguió gobernando otros mil años.",
      },
      {
        b: "rotulo",
        texto:
          "El final de verdad tiene fecha, y es el 29 de mayo de 1453",
      },
      {
        b: "parrafo",
        texto:
          "El Imperio romano sí terminó, y terminó con una escena tan clara como la del 476, solo " +
          "que casi mil años después.",
      },
      {
        b: "parrafo",
        texto:
          "En la primavera de 1453, el sultán otomano Mehmed II puso sitio a Constantinopla. La " +
          "ciudad estaba defendida por una muralla terrestre antigua, la mejor fortificación de " +
          "Europa durante siglos, y por el emperador <strong>Constantino XI</strong>, que murió " +
          "combatiendo. Tras <strong>cincuenta y cinco días de asedio</strong>, los otomanos " +
          "abrieron brecha en la muralla y el <strong>29 de mayo de 1453</strong> entraron en la " +
          "ciudad.",
      },
      {
        b: "parrafo",
        texto:
          "Ese día se acabó. Si contamos desde Augusto, que se convierte en el primer emperador " +
          "en el año 27 antes de Cristo, el Estado romano había durado alrededor de <strong>mil " +
          "quinientos años</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "¿Y por qué casi nadie nos lo cuenta así? Es simple: <strong>el relato lo escribió " +
          "Europa occidental</strong>. La historia que se enseña en Europa occidental organiza el " +
          "tiempo desde Europa occidental, y desde allí lo que se ve es que Roma desapareció y " +
          "empezó otra cosa. Vista desde Constantinopla, en cambio, no hay ninguna interrupción " +
          "que contar: hay un Estado que sigue funcionando hasta que un ejército entra por la " +
          "muralla.",
      },
      {
        b: "rayo",
        texto:
          "El Imperio romano no duró quinientos años. Duró unos mil quinientos, y su último día " +
          "tiene fecha exacta: 29 de mayo de 1453.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Cuando Constantinopla cayó, Cristóbal Colón era un niño de pocos años, " +
          "la Biblia de Gutenberg estaba a punto de imprimirse y en Florencia el Renacimiento " +
          "llevaba décadas en marcha. El Imperio romano y el Renacimiento italiano se solaparon " +
          "en el tiempo.",
      },
    ],
  },
  {
    id: "al-sol-le-quedan-cinco-mil-millones",
    titulo: "Cuánto de vida le queda al Sol",
    categoria: "Ciencia",
    color: "var(--ochre)",
    /* Serie «cuanto-le-queda-al-sol», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Al Sol le quedan cinco mil millones de años. A nosotros, mil» */
    encargo: "El disco del Sol en amarillo cálido, con la corona erizada de arcos brillantes alrededor del ecuador.",
    fotos: [
      {
        archivo: "Solar Orbiter’s widest high-res view of the Sun ESA508430.jpg",
        autor:
          "La corona solar en ultravioleta: doscientas tomas de la sonda Solar Orbiter cosidas en " +
          "una, 9 de marzo de 2025. Agencia Espacial Europea.",
        licencia: "CC BY-SA 3.0 igo",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Solar_Orbiter%E2%80%99s_widest_high-res_view_of_the_Sun_ESA508430.jpg",
        foco: "50% 50%",
        alt:
          "El disco del Sol en amarillo cálido, con la corona erizada de arcos brillantes " +
          "alrededor del ecuador.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Son dos relojes distintos y el nuestro corre más rápido",
      },
      {
        b: "parrafo",
        texto:
          "¿Alguna vez has mirado al Sol y te has preguntado cuánto tiempo le queda? La mayoría " +
          "damos por sentado que estará ahí siempre, o al menos tanto tiempo que no merece la " +
          "pena dedicarle un pensamiento. Y en parte es cierto: a nuestra estrella le quedan unos " +
          "cinco mil millones de años por delante, una cifra tan desproporcionada respecto a " +
          "cualquier cosa humana que efectivamente equivale a «siempre».",
      },
      {
        b: "parrafo",
        texto:
          "Pero hay un detalle que lo cambia todo, y es que la pregunta que nos interesa no es " +
          "esa. La Tierra habitable —este planeta con agua líquida, con plantas, con animales y " +
          "con nosotros— tiene un plazo mucho más corto: <strong>alrededor de mil millones de " +
          "años.</strong> Cinco veces menos. No estamos hablando del mismo reloj, y confundirlos " +
          "es el error que hace que la cifra grande resulte tranquilizadora. Nuestro plazo se " +
          "agota mucho antes de que a la estrella le ocurra absolutamente nada digno de mención; " +
          "para cuando el Sol empiece a tener problemas de verdad, aquí llevará muchísimo tiempo " +
          "sin haber nadie que lo note.",
      },
      {
        b: "rayo",
        texto:
          "La vida en la Tierra se acaba cinco veces antes que el Sol. No compartimos su " +
          "calendario.",
      },
      {
        b: "rotulo",
        texto:
          "El motivo es que el Sol se está volviendo más brillante",
      },
      {
        b: "parrafo",
        texto:
          "Para entender por qué los dos relojes van tan desacompasados hay que aceptar algo que " +
          "cuesta bastante, porque va contra la imagen que todos tenemos de una estrella estable: " +
          "el Sol no es una bombilla de intensidad fija. Lleva volviéndose más brillante desde el " +
          "día mismo en que se encendió, poquito a poco, sin pausa y sin posibilidad de marcha " +
          "atrás.",
      },
      {
        b: "parrafo",
        texto:
          "¿Y por qué le pasa eso? <strong>Es simple:</strong> en su centro el hidrógeno se " +
          "fusiona en helio, y el helio resultante ocupa menos espacio que el hidrógeno del que " +
          "procede, porque cuatro núcleos de hidrógeno se convierten en uno solo de helio. El " +
          "núcleo tiene entonces menos partículas empujando hacia fuera y el mismo peso encima, " +
          "así que se va comprimiendo bajo su propia gravedad. Al comprimirse se calienta, al " +
          "calentarse fusiona más deprisa, y al fusionar más deprisa alumbra más y aprieta " +
          "todavía un poco más el núcleo. Es un bucle que se alimenta a sí mismo y para el que no " +
          "existe freno posible: la propia manera que tiene el Sol de funcionar es la que lo va " +
          "empujando hacia el final.",
      },
      {
        b: "parrafo",
        texto:
          "Y aquí es donde el margen se vuelve angosto de una forma que sorprende. No hace falta " +
          "que el Sol cambie de fase ni que haga nada dramático. Falta poco más de un diez por " +
          "ciento de brillo para que la Tierra deje de ser habitable, y ese diez por ciento llega " +
          "dentro de unos mil millones de años. La estrella seguirá siendo, para cualquier " +
          "observador de fuera, exactamente la misma estrella amarilla y tranquila de siempre.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Cuando se formó la Tierra, el Sol brillaba un treinta por ciento menos " +
          "que hoy. Con aquella estrella más apagada y esta misma atmósfera, la temperatura media " +
          "del planeta habría sido de siete grados bajo cero, y sin embargo hay pruebas de que " +
          "había agua líquida y vida. Ese desajuste tiene nombre propio en astronomía, la " +
          "paradoja del Sol joven y débil, y la explicación más aceptada es que la atmósfera de " +
          "entonces retenía muchísimo más calor que la actual.",
      },
      {
        b: "rayo",
        texto:
          "El Sol no necesita morir para acabar con la vida en la Tierra. Le basta con seguir " +
          "haciendo exactamente lo que lleva haciendo desde el principio.",
      },
    ],
  },
  {
    id: "llevamos-57-anos-disparando-laseres-a-la-luna",
    titulo: "Cuánto tiempo le queda a la Luna",
    categoria: "Ciencia",
    color: "var(--teal)",
    /* Serie «cuanto-tiempo-le-queda-a-la-luna», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Llevamos 57 años disparando láseres a la Luna para ver cómo se aleja» */
    encargo: "Llevamos 57 años disparando láseres a la Luna para ver cómo se aleja",
    fotos: [
      {
        local: p_llevamos_57_anos_disparando_laseres_a_la_luna,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Llevamos 57 años disparando láseres a la Luna para ver cómo se aleja",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Los astronautas del Apolo dejaron espejos allí arriba, y siguen funcionando",
      },
      {
        b: "parrafo",
        texto:
          "Cuando se habla de lo que dejaron las misiones Apolo en la Luna, casi siempre se " +
          "mencionan las banderas y las huellas. Lo que casi nadie sabe es que dejaron también un " +
          "instrumento científico que sigue en marcha hoy, más de medio siglo después, y que es " +
          "con diferencia el experimento más longevo del programa.",
      },
      {
        b: "parrafo",
        texto:
          "Las tripulaciones del <strong>Apolo 11</strong>, el <strong>Apolo 14</strong> y el " +
          "<strong>Apolo 15</strong> instalaron en la superficie unos paneles llenos de prismas " +
          "de vidrio de cuarzo, cien en cada uno de los dos primeros y trescientos en el tercero. " +
          "Son <strong>retrorreflectores</strong>, y tienen una propiedad muy útil: devuelven la " +
          "luz exactamente en la dirección de la que ha venido, sea cual sea el ángulo con el que " +
          "les llegue. No hace falta orientarlos ni ajustarlos ni alimentarlos. Ahí siguen, " +
          "quietos en el polvo lunar, sin una sola pieza móvil y sin batería que se agote.",
      },
      {
        b: "parrafo",
        texto:
          "El experimento consiste en dispararles. Cuatro telescopios repartidos entre Nuevo " +
          "México, Francia, Italia y Alemania lanzan pulsos de láser contra esos paneles y " +
          "cronometran lo que tarda la luz en ir, rebotar y volver. Como la velocidad de la luz " +
          "se conoce con enorme exactitud, ese tiempo de ida y vuelta se convierte directamente " +
          "en distancia. Y la precisión que se alcanza así es la parte que cuesta creerse: la " +
          "separación entre la Tierra y la Luna, que ronda los 384.000 kilómetros, se mide con un " +
          "margen de unos pocos <strong>milímetros</strong>.",
      },
      {
        b: "rayo",
        texto:
          "Los espejos del Apolo no necesitan energía ni mantenimiento. Medio siglo después " +
          "siguen devolviendo cada pulso de láser que se les manda.",
      },
      {
        b: "rotulo",
        texto:
          "Y el resultado es que la Luna se está yendo",
      },
      {
        b: "parrafo",
        texto:
          "¿Y para qué sirve medir esa distancia con semejante finura, año tras año, durante " +
          "décadas? Es simple: para ver si cambia. Y cambia.",
      },
      {
        b: "parrafo",
        texto:
          "La cifra que ha salido de ese seguimiento es de <strong>3,8 centímetros al " +
          "año</strong>. Cada doce meses la Luna está algo menos de cuatro centímetros más lejos " +
          "de nosotros que el año anterior, lo que equivale a unos tres milímetros cada mes. Es " +
          "un ritmo aproximadamente igual al que te crecen las uñas: si te cortas las uñas y " +
          "esperas un año, lo que te ha crecido es más o menos lo que se ha alejado la Luna en " +
          "ese mismo tiempo.",
      },
      {
        b: "parrafo",
        texto:
          "Puesto así suena a nada, y conviene resistir la tentación de despacharlo como una " +
          "curiosidad menor, porque el interés de este dato no está en la magnitud sino en la " +
          "dirección. La Luna no oscila alrededor de una distancia fija: se aleja, siempre, sin " +
          "pausa y sin marcha atrás. Y un movimiento constante en una sola dirección, por pequeño " +
          "que sea, se acumula. Cuatro centímetros al año son cuarenta metros en un millón de " +
          "años, y cuarenta mil kilómetros en mil millones. En la escala de tiempo en la que " +
          "funciona el sistema solar, eso no es un detalle: es una mudanza.",
      },
      {
        b: "parrafo",
        texto:
          "Que además ese número se conozca no por una estimación teórica, sino por medición " +
          "directa y repetida contra unos espejos que unos hombres colocaron a mano en 1969 y " +
          "1971, es lo que convierte el asunto en algo más que un cálculo de pizarra.",
      },
      {
        b: "rayo",
        texto:
          "La Luna se aleja 3,8 centímetros al año, más o menos lo que te crecen las uñas. No es " +
          "una estimación: se mide rebotando láseres contra unos espejos del Apolo.",
      },
    ],
  },
  {
    id: "es-un-arma-quimica",
    titulo: "De dónde sale el alcohol",
    categoria: "Ciencia",
    color: "var(--slate)",
    /* Serie «de-donde-sale-el-alcohol», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El alcohol es un arma química, y la levadura la usa para matar rivales» */
    encargo: "El alcohol es un arma química, y la levadura la usa para matar rivales",
    fotos: [
      {
        local: p_es_un_arma_quimica,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El alcohol es un arma química, y la levadura la usa para matar rivales",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "No lo produce la uva ni la cebada: lo produce un hongo",
      },
      {
        b: "parrafo",
        texto:
          "Lo primero que conviene aclarar es de dónde sale materialmente el alcohol, porque el " +
          "lenguaje despista. Hablamos de que el vino viene de la uva y la cerveza de la cebada, " +
          "y eso hace pensar que el alcohol está de algún modo dentro de esas plantas, esperando " +
          "a que lo saquemos.",
      },
      {
        b: "parrafo",
        texto:
          "No está. Ni la uva ni la cebada contienen una gota de alcohol. Lo que aportan es " +
          "<strong>azúcar</strong>, y el alcohol lo fabrica otra cosa: un hongo microscópico, la " +
          "<strong>levadura</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "El proceso es sencillo de enunciar. La levadura se come el azúcar y, en lugar de " +
          "quemarlo del todo, lo transforma en dos productos de desecho: <strong>etanol y dióxido " +
          "de carbono</strong>. El etanol es el alcohol de todas las bebidas del mundo; el " +
          "dióxido de carbono es el gas que hace subir el pan y el que burbujea en la cerveza y " +
          "en el champán. Son exactamente el mismo proceso: la única diferencia entre hacer pan y " +
          "hacer cerveza es cuál de los dos productos te interesa conservar y cuál dejas escapar.",
      },
      {
        b: "parrafo",
        texto:
          "De modo que el alcohol es, literalmente, la orina de un hongo. No hay una manera más " +
          "elegante de decirlo y tampoco hace falta.",
      },
      {
        b: "rayo",
        texto:
          "Ni la uva ni la cebada contienen alcohol. Solo ponen el azúcar: el alcohol lo fabrica " +
          "un hongo microscópico como producto de desecho.",
      },
      {
        b: "rotulo",
        texto:
          "Y lo fabrica para envenenar a la competencia",
      },
      {
        b: "parrafo",
        texto:
          "Aquí está la pregunta que casi nadie hace y que da la vuelta a todo el asunto: ¿por " +
          "qué lo fabrica?",
      },
      {
        b: "parrafo",
        texto:
          "Porque desde el punto de vista energético es un disparate. Convertir azúcar en etanol " +
          "le saca a ese azúcar muchísimo menos rendimiento que quemarlo con oxígeno, que es lo " +
          "que hacemos nosotros y lo que hace casi todo ser vivo. La levadura está tirando la " +
          "mayor parte de la energía disponible. Y lo más raro: lo hace <strong>incluso cuando " +
          "tiene oxígeno de sobra</strong>. No es un apaño de emergencia, es su modo de funcionar " +
          "preferido.",
      },
      {
        b: "parrafo",
        texto:
          "¿Por qué renunciar a tanta energía? Es simple: porque no está fabricando comida. Está " +
          "fabricando <strong>veneno</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "El etanol es tóxico para prácticamente todos los microorganismos. Bacterias, otros " +
          "hongos, cualquiera que quisiera disputarle esa fruta madura, muere o deja de crecer " +
          "cuando la concentración de alcohol sube. La levadura, en cambio, lo tolera muchísimo " +
          "mejor que sus competidores. La estrategia tiene nombre propio en biología, y describe " +
          "exactamente lo que ocurre: <strong>fabricar, acumular y consumir</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Funciona en tres tiempos. Primero la levadura devora el azúcar más deprisa que nadie y " +
          "lo convierte en etanol, inundando el terreno. Ese etanol frena o mata a los demás " +
          "microbios, especialmente a las bacterias. Y cuando ya se ha quedado sola y no queda " +
          "competencia, la levadura vuelve sobre sus pasos y <strong>se come el alcohol que ella " +
          "misma fabricó</strong>, recuperando la energía que había aparcado.",
      },
      {
        b: "parrafo",
        texto:
          "Envenena el pozo y luego bebe de él. Y lleva haciéndolo desde hace unos <strong>125 " +
          "millones de años</strong>, más o menos desde que aparecieron las plantas con frutos " +
          "carnosos al final del Cretácico. La aparición de la fruta puso de golpe sobre la mesa " +
          "un recurso nuevo, concentrado y disputadísimo, y la levadura desarrolló un arma " +
          "química para quedárselo.",
      },
      {
        b: "rayo",
        texto:
          "La levadura tira la mayor parte de la energía del azúcar a propósito. No está " +
          "fabricando comida: está fabricando un veneno que mata a sus competidores y que después " +
          "se bebe ella.",
      },
    ],
  },
  {
    id: "la-palabra-viajo-con-ella",
    titulo: "De dónde sale el azúcar",
    categoria: "Historia",
    color: "var(--clay)",
    /* Serie «de-donde-sale-el-azucar», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El azúcar es una hierba, y la palabra viajó con ella» */
    encargo: "El azúcar es una hierba, y la palabra viajó con ella",
    fotos: [
      {
        local: p_la_palabra_viajo_con_ella,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El azúcar es una hierba, y la palabra viajó con ella",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La caña de azúcar es una gramínea, pariente del trigo y del bambú",
      },
      {
        b: "parrafo",
        texto:
          "Conviene empezar por lo que es la planta, porque no se parece nada a la idea que uno " +
          "tiene de una fábrica de dulzor. <em>Saccharum officinarum</em> es una " +
          "<strong>hierba</strong>: una gramínea gigante, de la misma familia que el trigo, el " +
          "arroz y el bambú, con un tallo macizo de varios metros donde acumula el azúcar en " +
          "lugar de repartirlo por toda la planta.",
      },
      {
        b: "parrafo",
        texto:
          "Su origen está en Papúa Nueva Guinea, donde a lo largo de unos tres mil años pasó de " +
          "ser una planta menor de los huertos domésticos al cultivo que conocemos. Desde allí se " +
          "fue extendiendo por Asia y por África, y no llegó a América hasta el siglo XV.",
      },
      {
        b: "parrafo",
        texto:
          "Es decir: durante casi toda la historia de la humanidad, el azúcar no existía como " +
          "producto. Existía una caña que se masticaba.",
      },
      {
        b: "rayo",
        texto:
          "El azúcar no sale de un árbol ni de una fruta. Sale del tallo de una hierba que guarda " +
          "concentrado lo que las demás plantas reparten.",
      },
      {
        b: "rotulo",
        texto:
          "Cristalizarlo se inventó en la India, y el nombre lo delata",
      },
      {
        b: "parrafo",
        texto:
          "El salto decisivo no fue cultivar la caña, sino convertir su jugo en un sólido. Un " +
          "jugo dulce se estropea en días; un cristal se guarda, se pesa, se transporta y se " +
          "vende. Ese paso convirtió un cultivo local en una mercancía mundial, y ocurrió en la " +
          "India.",
      },
      {
        b: "parrafo",
        texto:
          "¿Y cómo se sabe hoy por dónde pasó una mercancía hace mil quinientos años? Es simple: " +
          "<strong>por cómo se llama</strong>. La palabra viajó con el producto, deformándose en " +
          "cada boca por la que iba pasando, y ese recorrido todavía se puede leer.",
      },
      {
        b: "parrafo",
        texto:
          "En sánscrito era <em>śarkarā</em>, emparentada con la palabra que significa " +
          "<strong>grava o guijarro</strong>: bautizaron el producto por lo que parecía, un " +
          "puñado de piedrecillas. De ahí pasó al persa como <em>šakar</em>, del persa al árabe " +
          "como <em>sukkar</em>, y de los comerciantes árabes a las lenguas europeas. El español " +
          "dice azúcar, el francés <em>sucre</em>, el inglés <em>sugar</em>. Los tres están " +
          "diciendo, con distinto acento, la misma palabra india.",
      },
      {
        b: "parrafo",
        texto:
          "Y lo que llegaba a la Europa medieval al final de esa ruta larguísima no era un " +
          "alimento. Era <strong>una medicina rara y carísima</strong>, un condimento de lujo que " +
          "se guardaba con las especias y se dosificaba como un medicamento.",
      },
      {
        b: "rayo",
        texto:
          "La ruta comercial del azúcar sigue escrita dentro de la palabra «azúcar». Es un " +
          "itinerario de la India a Europa contado en cuatro idiomas.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Los indios llamaron al azúcar «grava» porque así se veía. Nosotros " +
          "seguimos usando ese nombre dos mil años y cuatro lenguas después, sin que a nadie le " +
          "suene raro echarse dos guijarros en el café.",
      },
    ],
  },
  {
    id: "de-donde-sale-el-oro",
    titulo: "De dónde sale el oro",
    categoria: "Ciencia",
    color: "var(--sage)",
    /* Serie «de-donde-sale-el-oro», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Ninguna estrella normal es capaz de fabricar oro» */
    encargo: "Ninguna estrella normal es capaz de fabricar oro",
    fotos: [
      {
        local: p_de_donde_sale_el_oro,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Ninguna estrella normal es capaz de fabricar oro",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Las estrellas fabrican elementos, pero se paran en el hierro",
      },
      {
        b: "parrafo",
        texto:
          "La frase de que somos polvo de estrellas es cierta y está bien contada: el carbono de " +
          "tus células, el oxígeno que respiras y el calcio de tus huesos se fabricaron dentro de " +
          "estrellas que fusionaron núcleos ligeros para formar otros más pesados.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que casi nunca se cuenta es dónde se detiene esa cadena. Fusionar núcleos libera " +
          "energía solo hasta llegar al <strong>hierro</strong>. A partir de ahí la operación " +
          "deja de compensar: unir núcleos más pesados que el hierro consume más energía de la " +
          "que produce, así que ninguna estrella lo hace para vivir. El Sol no ha fabricado ni un " +
          "átomo de oro, y no lo hará nunca por muchos miles de millones de años que le queden.",
      },
      {
        b: "parrafo",
        texto:
          "Y sin embargo el oro existe, en el suelo, en el mar y en los anillos de la gente.",
      },
      {
        b: "rayo",
        texto:
          "Todo lo que pesa más que el hierro no lo fabricó ninguna estrella funcionando con " +
          "normalidad. Hizo falta otra cosa, y durante décadas no se supo cuál.",
      },
      {
        b: "rotulo",
        texto:
          "Hace falta un sitio con neutrones a espuertas y muy poco tiempo",
      },
      {
        b: "parrafo",
        texto:
          "¿Entonces cómo se hace un átomo de oro? Es simple: <strong>hay que bombardear un " +
          "núcleo con neutrones más rápido de lo que le da tiempo a desintegrarse</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Un núcleo atómico puede capturar un neutrón que le pase cerca. Si captura muchos " +
          "seguidos y muy deprisa, se vuelve tan pesado e inestable que se transforma, y al " +
          "transformarse sube de elemento. Repetido decenas de veces en un instante, ese proceso " +
          "convierte núcleos corrientes en oro, platino, uranio y todo lo que ocupa la parte baja " +
          "de la tabla periódica. Se llama <strong>proceso r</strong>, por <em>rápido</em>.",
      },
      {
        b: "parrafo",
        texto:
          "La condición es dura: hace falta un sitio con una densidad de neutrones enorme y con " +
          "un tiempo disponible de segundos. En el interior de una estrella normal eso no se da. " +
          "Durante mucho tiempo la hipótesis principal fueron las supernovas, y no terminaba de " +
          "cuadrar del todo.",
      },
      {
        b: "rayo",
        texto:
          "El oro no es un elemento raro por casualidad. Es raro porque hace falta un tipo de " +
          "catástrofe muy concreta para producirlo, y esas catástrofes no ocurren a menudo.",
      },
    ],
  },
  {
    id: "nacio-en-la-amazonia",
    titulo: "De dónde viene el chocolate",
    categoria: "Historia",
    color: "var(--teal)",
    /* Serie «de-donde-viene-el-chocolate», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El chocolate no nació en México, nació en la Amazonía» */
    encargo: "El chocolate no nació en México, nació en la Amazonía",
    fotos: [
      {
        local: p_nacio_en_la_amazonia,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El chocolate no nació en México, nació en la Amazonía",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La versión de los libros lo situaba en Mesoamérica",
      },
      {
        b: "parrafo",
        texto:
          "Si buscas el origen del chocolate en casi cualquier sitio, la respuesta que sale es " +
          "Mesoamérica. Los mayas, los aztecas, y de ahí a España con los conquistadores. Es la " +
          "versión que llevaba décadas siendo la buena, y sigue estando escrita en museos y " +
          "enciclopedias.",
      },
      {
        b: "parrafo",
        texto:
          "Tiene sentido, además. Las pruebas mesoamericanas son abundantes: vasijas con residuos " +
          "de cacao, códices que lo representan, textos coloniales que describen cómo se " +
          "preparaba. Todo el peso documental estaba de ese lado.",
      },
      {
        b: "parrafo",
        texto:
          "El problema de esa versión es que el peso documental depende de dónde se ha excavado " +
          "más y de dónde ha sobrevivido más material escrito. Y la selva amazónica es, en los " +
          "dos sentidos, el peor sitio del mundo para conservar pruebas.",
      },
      {
        b: "rayo",
        texto:
          "El origen del chocolate se situó durante décadas donde había pruebas escritas, que no " +
          "siempre es lo mismo que donde ocurrió.",
      },
      {
        b: "rotulo",
        texto:
          "Un yacimiento de Ecuador movió el origen dos mil kilómetros al sur",
      },
      {
        b: "parrafo",
        texto:
          "En 2018 se publicó el análisis de un yacimiento llamado Santa Ana-La Florida, en el " +
          "sureste de Ecuador, en la parte alta de la cuenca amazónica. Es un asentamiento de la " +
          "cultura Mayo-Chinchipe, y lo que se encontró allí tiene <strong>unos cinco mil " +
          "trescientos años</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que convierte el hallazgo en algo sólido no es la antigüedad, sino que hay tres " +
          "pruebas independientes. ¿Y cómo se demuestra que en una vasija de hace cinco milenios " +
          "hubo cacao? Es simple: <strong>se queda pegado, de tres maneras distintas</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "- <strong>Granos de almidón</strong> de cacao atrapados en los poros de la cerámica, " +
          "con una forma reconocible al microscopio.",
      },
      {
        b: "parrafo",
        texto:
          "- <strong>Restos de teobromina</strong> absorbidos en la pared del recipiente. Es el " +
          "alcaloide característico del cacao, el pariente de la cafeína que le da su efecto.",
      },
      {
        b: "parrafo",
        texto:
          "- <strong>ADN antiguo</strong> de <em>Theobroma cacao</em> recuperado de los mismos " +
          "residuos.",
      },
      {
        b: "parrafo",
        texto:
          "Tres moléculas distintas, tres técnicas distintas, la misma respuesta. Los autores lo " +
          "formulan sin rodeos: son las pruebas más antiguas del uso de <em>Theobroma cacao</em> " +
          "en América, y sitúan la alta Amazonía como el centro de domesticación de cacao más " +
          "antiguo identificado hasta ahora.",
      },
      {
        b: "parrafo",
        texto:
          "Y encaja con algo que la genética ya venía diciendo por su cuenta. La mayor diversidad " +
          "genética de la especie está justamente ahí, en el alto Amazonas, que es el patrón que " +
          "se espera en el lugar de origen de una planta.",
      },
      {
        b: "rayo",
        texto:
          "El cacao se estaba usando en la Amazonía alrededor de mil años antes de lo que se " +
          "creía y antes de que aparezca en Mesoamérica. El chocolate no bajó de México: subió " +
          "desde el sur.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? La teobromina, la molécula que delata al cacao en una vasija de cinco " +
          "mil años, es la misma que hace que el chocolate sea peligroso para los perros. Ellos " +
          "no la metabolizan como nosotros, y cuanto más negro es el chocolate, mayor es el " +
          "riesgo.",
      },
    ],
  },
  {
    id: "de-que-esta-hecho-un-hueso",
    titulo: "De qué está hecho un hueso",
    categoria: "Cuerpo humano",
    color: "var(--ochre)",
    /* Serie «de-que-esta-hecho-un-hueso», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un hueso son dos materiales que por separado no servirían de nada» */
    encargo: "Un hueso son dos materiales que por separado no servirían de nada",
    fotos: [
      {
        local: p_de_que_esta_hecho_un_hueso,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un hueso son dos materiales que por separado no servirían de nada",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Setenta por ciento de mineral, treinta de proteína",
      },
      {
        b: "parrafo",
        texto:
          "La respuesta corta a de qué está hecho un hueso es que está hecho de dos cosas, y en " +
          "proporciones muy desiguales.",
      },
      {
        b: "parrafo",
        texto:
          "Alrededor del <strong>70 % de su masa</strong> es materia inorgánica: cristales de un " +
          "mineral llamado <strong>hidroxiapatita</strong>, que es fundamentalmente fosfato de " +
          "calcio. Es la parte que uno se imagina al pensar en un hueso, la dura y blanca.",
      },
      {
        b: "parrafo",
        texto:
          "El <strong>30 % restante</strong> es materia orgánica, y ahí no hay variedad: entre el " +
          "90 % y el 95 % de esa parte es <strong>colágeno de tipo I</strong>, la misma proteína " +
          "fibrosa que forma los tendones, la piel y los ligamentos. Un hueso, químicamente, es " +
          "una malla de fibras de proteína con cristales de mineral incrustados entre ellas.",
      },
      {
        b: "rayo",
        texto:
          "La parte blanda de un hueso no es un relleno ni un resto. Es un tercio de su masa, y " +
          "sin ella el hueso sería otro material completamente distinto.",
      },
      {
        b: "rotulo",
        texto:
          "Cada uno resiste una cosa que el otro no",
      },
      {
        b: "parrafo",
        texto:
          "Ahora el motivo de la mezcla, que es donde está lo interesante, porque los dos " +
          "materiales no hacen el mismo trabajo repartido: hacen trabajos opuestos.",
      },
      {
        b: "parrafo",
        texto:
          "Las fibras de colágeno le dan al hueso su <strong>resistencia a la tracción</strong>, " +
          "es decir, a ser estirado. Los cristales de hidroxiapatita repartidos entre ellas le " +
          "dan su <strong>resistencia a la compresión</strong>, o sea, a ser aplastado. Y esos " +
          "dos efectos son sinérgicos: juntos dan más de lo que darían sumados por separado.",
      },
      {
        b: "parrafo",
        texto:
          "Piensa qué pasaría quitando uno de los dos, porque es la forma más rápida de " +
          "entenderlo.",
      },
      {
        b: "parrafo",
        texto:
          "Un hueso hecho solo de mineral sería una tiza. Aguantaría muy bien que te apoyaras " +
          "encima y se partiría en cuanto se doblara un milímetro, que es exactamente lo que le " +
          "pasa a la tiza. Un hueso hecho solo de colágeno sería una goma: podrías tirar de él " +
          "con todas tus fuerzas sin romperlo, y no te sostendría de pie ni un segundo.",
      },
      {
        b: "parrafo",
        texto:
          "Y ahora fíjate en lo que has estado leyendo, porque lo tienes visto mil veces con otro " +
          "nombre. Barras flexibles que aguantan la tracción, embebidas en un material rígido que " +
          "aguanta la compresión: eso es hormigón armado. Los huesos llevan haciendo eso desde " +
          "antes de que existieran los vertebrados terrestres, y nosotros llegamos a la misma " +
          "solución en el siglo XIX creyendo que la inventábamos.",
      },
      {
        b: "rayo",
        texto:
          "La idea de combinar algo que resiste el estirón con algo que resiste el peso no se le " +
          "ocurrió a ningún ingeniero. Estaba dentro de nuestro propio esqueleto, y tardamos en " +
          "copiarla unos cuantos cientos de millones de años.",
      },
    ],
  },
  {
    id: "mas-grande-que-cualquier-dinosaurio",
    titulo: "El animal más grande del mundo",
    categoria: "Ciencia",
    color: "var(--sage)",
    /* Serie «el-animal-mas-grande-del-mundo», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Es más grande que cualquier dinosaurio y come animales de cinco centímetros» */
    encargo: "Es más grande que cualquier dinosaurio y come animales de cinco centímetros",
    fotos: [
      {
        local: p_mas_grande_que_cualquier_dinosaurio,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Es más grande que cualquier dinosaurio y come animales de cinco centímetros",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "No es el animal más grande que existe: es el más grande que ha existido",
      },
      {
        b: "parrafo",
        texto:
          "Cuando se dice que la ballena azul es el animal más grande del mundo, la frase se " +
          "queda corta por un lado que no se suele mencionar. No es solo el animal más grande " +
          "<strong>que hay ahora</strong>. Es el más grande que ha habido nunca, en toda la " +
          "historia de la vida en la Tierra.",
      },
      {
        b: "parrafo",
        texto:
          "Y eso incluye a los dinosaurios, que es donde la afirmación se vuelve difícil de " +
          "creer. La imagen que tenemos de los saurópodos gigantes, esos cuellilargos que llenan " +
          "la pantalla en cualquier documental, sugiere que ahí estaba el techo del tamaño " +
          "animal. No lo estaba: el mayor dinosaurio conocido rondaba las <strong>75 " +
          "toneladas</strong>, menos de la mitad de lo que pesa una ballena azul grande. La " +
          "ballena supera los treinta metros de longitud y puede acercarse a las doscientas " +
          "toneladas.",
      },
      {
        b: "parrafo",
        texto:
          "La razón de que la ballena pudiera llegar donde el dinosaurio no llegó está en dónde " +
          "vive. Un animal terrestre tiene que sostener su propio peso con las patas, y a partir " +
          "de cierta masa los huesos y las articulaciones no dan más de sí. En el agua eso " +
          "desaparece: la flotación sostiene el cuerpo, la gravedad deja de ser el problema, y el " +
          "límite de tamaño se traslada a otra parte. Un cuerpo de doscientas toneladas es " +
          "sencillamente imposible en tierra firme, y perfectamente viable flotando.",
      },
      {
        b: "rayo",
        texto:
          "El mayor dinosaurio conocido pesaba unas 75 toneladas. Una ballena azul grande pesa " +
          "más del doble, y puede hacerlo porque el agua le sostiene el peso.",
      },
      {
        b: "rotulo",
        texto:
          "Y se alimenta de bichos que caben en un dedo",
      },
      {
        b: "parrafo",
        texto:
          "¿Y qué come el animal más grande de la historia? Es simple, y es lo contrario de lo " +
          "que la lógica sugiere: <strong>krill</strong>. Unos crustáceos parecidos a gambas " +
          "diminutas, de apenas unos centímetros de largo.",
      },
      {
        b: "parrafo",
        texto:
          "Nada de cazar presas grandes. La ballena azul se alimenta filtrando: abre la boca, " +
          "engulle un volumen enorme de agua cargada de krill y expulsa el agua reteniendo a los " +
          "animales. En un solo bocado puede quedarse con unos <strong>360 kilos de " +
          "krill</strong>, y al cabo del día llega a comer alrededor de <strong>cuatro " +
          "toneladas</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Aquí está la parte que le da la vuelta al asunto, porque parece un despropósito " +
          "energético y resulta ser justo al revés. Un solo bocado le proporciona <strong>más de " +
          "doscientas veces</strong> la energía que ha gastado en darlo. Cazar presas grandes es " +
          "caro: hay que perseguirlas, alcanzarlas, dominarlas, y muchos intentos acaban en nada. " +
          "Filtrar una nube de krill no falla nunca y no requiere persecución. Por eso el " +
          "gigantismo y la comida diminuta van juntos y no separados: la ballena no es enorme " +
          "<strong>a pesar</strong> de comer krill, es enorme <strong>gracias</strong> a comer " +
          "krill.",
      },
      {
        b: "parrafo",
        texto:
          "De esa abundancia sale también un dato de crecimiento que cuesta procesar. Una cría de " +
          "ballena azul nace midiendo unos siete metros y medio y pesando hasta tres toneladas, " +
          "ya de entrada más grande que casi cualquier animal terrestre adulto. Y durante su " +
          "primer año gana alrededor de <strong>noventa kilos al día</strong>, alimentándose solo " +
          "de leche materna. Noventa kilos diarios son casi cuatro kilos por hora, sin parar, de " +
          "día y de noche, durante trescientos sesenta y cinco días.",
      },
      {
        b: "rayo",
        texto:
          "Un solo bocado de krill le devuelve doscientas veces la energía que gastó en darlo. Es " +
          "enorme gracias a comer diminuto, no a pesar de ello.",
      },
    ],
  },
  {
    id: "el-auge-economico-de-china",
    titulo: "El auge económico de China",
    categoria: "Economía",
    color: "var(--ochre)",
    /* Serie «el-auge-economico-de-china», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El despegue de China empezó con dieciocho campesinos firmando un papel a escondidas» */
    encargo: "El despegue de China empezó con dieciocho campesinos firmando un papel a escondidas",
    fotos: [
      {
        local: p_el_auge_economico_de_china,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El despegue de China empezó con dieciocho campesinos firmando un papel a escondidas",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Dieciocho familias se repartieron la tierra colectiva por su cuenta",
      },
      {
        b: "parrafo",
        texto:
          "La historia del crecimiento chino suele contarse desde arriba, con Deng Xiaoping y las " +
          "decisiones del partido. Un buen punto de partida es el contrario: una aldea pequeña de " +
          "la provincia de Anhui llamada Xiaogang.",
      },
      {
        b: "parrafo",
        texto:
          "En 1978, dieciocho familias de esa aldea hicieron un pacto entre ellas. La tierra era " +
          "colectiva y lo que se producía se repartía entre todos, con el resultado previsible de " +
          "que nadie tenía ningún motivo para esforzarse más que el vecino. Lo que acordaron " +
          "aquellas familias fue repartirse las parcelas y que <strong>cada casa respondiera de " +
          "sus propias ganancias y de sus propias pérdidas</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Aquello no estaba permitido. Era el primer ensayo de lo que después se llamaría " +
          "sistema de responsabilidad familiar, y se hizo en secreto porque contradecía " +
          "frontalmente la organización agrícola del país.",
      },
      {
        b: "parrafo",
        texto:
          "El efecto fue inmediato y uno de los firmantes lo explicó años después mejor de lo que " +
          "podría explicarlo cualquier informe.",
      },
      {
        b: "cita",
        texto:
          "Competíamos todos en secreto; cada uno quería producir más que el de al lado.",
        autor: "Yen Jingchang, uno de los campesinos de Xiaogang",
      },
      {
        b: "rayo",
        texto:
          "La reforma que cambió la economía más grande de Asia no salió de un despacho. Salió de " +
          "dieciocho familias que decidieron saltarse la norma porque el sistema anterior no les " +
          "daba ninguna razón para trabajar.",
      },
      {
        b: "rotulo",
        texto:
          "Cuatro años después, el país entero hacía lo mismo",
      },
      {
        b: "parrafo",
        texto:
          "Lo interesante de Xiaogang no es que aquellas familias produjeran más. Es la velocidad " +
          "a la que un delito local se convirtió en política nacional.",
      },
      {
        b: "parrafo",
        texto:
          "El marco general ya se estaba moviendo. El 18 de diciembre de 1978, en la tercera " +
          "sesión plenaria del undécimo Comité Central, arrancó formalmente el periodo de reforma " +
          "y apertura, guiado por Deng Xiaoping, a quien se suele llamar su arquitecto general. " +
          "Entre 1979 y 1981 el experimento de Anhui se fue extendiendo en forma de programas " +
          "piloto.",
      },
      {
        b: "parrafo",
        texto:
          "En 1982, el sistema quedó establecido oficialmente mediante el llamado documento " +
          "número 1 del Comité Central. Un año después se daba por implantado en todo el país.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en el recorrido completo, porque es lo que hace especial a este episodio. De un " +
          "acuerdo clandestino entre dieciocho familias a la política agrícola oficial de mil " +
          "millones de personas hay exactamente cuatro años.",
      },
      {
        b: "rayo",
        texto:
          "La reforma agraria china no se diseñó y luego se aplicó. Se aplicó primero, " +
          "ilegalmente y a pequeña escala, y el Estado la legalizó después de comprobar que " +
          "funcionaba.",
      },
    ],
  },
  {
    id: "el-camino-de-santiago",
    titulo: "El Camino de Santiago",
    categoria: "Historia",
    color: "var(--plum)",
    /* Serie «el-camino-de-santiago», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La primera guía de viaje de Europa es de hacia 1140 y era del Camino» */
    encargo: "La primera guía de viaje de Europa es de hacia 1140 y era del Camino",
    fotos: [
      {
        local: p_el_camino_de_santiago,
        autor: "",
        licencia: "Pexels License",
        alt:
          "La primera guía de viaje de Europa es de hacia 1140 y era del Camino",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Todo empieza con unas reliquias encontradas en el siglo IX",
      },
      {
        b: "parrafo",
        texto:
          "El Camino se creó y se estableció a principios del siglo IX, a raíz del hallazgo de " +
          "las reliquias atribuidas al apóstol <strong>Santiago el Mayor</strong> en el noroeste " +
          "de la península.",
      },
      {
        b: "parrafo",
        texto:
          "La leyenda que acompaña al hallazgo es de las que se recuerdan: un ermitaño vio una " +
          "estrella brillante sobre una ladera cercana a San Fiz de Solovio, y al ir a mirar " +
          "apareció el sepulcro.",
      },
      {
        b: "parrafo",
        texto:
          "Conviene decirlo como lo que es, una leyenda, y no como un hecho documentado. Pero lo " +
          "que sí es un hecho es la consecuencia: a partir de aquel hallazgo, un rincón perdido " +
          "del extremo noroeste de Europa se convirtió en uno de los tres grandes destinos de " +
          "peregrinación de la cristiandad, junto a Roma y a Jerusalén. Y a diferencia de los " +
          "otros dos, este no tenía detrás ninguna ciudad importante. Lo construyó el camino.",
      },
      {
        b: "rayo",
        texto:
          "Santiago no era un sitio al que se fuera por lo que había allí. Se convirtió en un " +
          "sitio porque mucha gente decidió ir, y todo lo que hoy existe en esa ciudad se levantó " +
          "después y para atenderlos.",
      },
      {
        b: "rotulo",
        texto:
          "El quinto libro del Códice Calixtino sigue funcionando ochocientos años después",
      },
      {
        b: "parrafo",
        texto:
          "Y aquí está el objeto que hace de este tema algo distinto de cualquier otra " +
          "peregrinación.",
      },
      {
        b: "parrafo",
        texto:
          "Hacia 1140 se compiló el <strong>Códice Calixtino</strong>, y su quinto libro es, en " +
          "la práctica, una guía de viaje. No un tratado devocional ni una crónica: una guía, con " +
          "las etapas del recorrido, los sitios donde parar, qué aguas se podían beber y cuáles " +
          "no, qué gente ibas a encontrarte en cada tramo y de qué convenía desconfiar.",
      },
      {
        b: "parrafo",
        texto:
          "El dato que lo remata es que no ha quedado obsoleto. Ese quinto libro se sigue " +
          "considerando la fuente definitiva de la que beben muchas guías modernas del Camino. " +
          "Ochocientos ochenta años después, una parte de lo que lee hoy un peregrino en su guía " +
          "procede de un manuscrito del siglo XII.",
      },
      {
        b: "parrafo",
        texto:
          "Y hay un motivo por el que eso puede ocurrir aquí y no con casi ningún otro viaje. El " +
          "recorrido no ha cambiado. Las montañas están donde estaban, los ríos se cruzan por " +
          "donde se cruzaban y las distancias que una persona puede andar en un día son las " +
          "mismas que en 1140. Un manual de carreteras de hace ochenta años no sirve; un manual " +
          "de caminar sigue sirviendo.",
      },
      {
        b: "rayo",
        texto:
          "La guía de viaje más antigua de Europa no ha envejecido porque describe el único medio " +
          "de transporte que no ha cambiado. Andar sigue costando lo mismo que costaba en el " +
          "siglo XII.",
      },
    ],
  },
  {
    id: "ser-la-unica-especie-humana",
    titulo: "Fuimos la única especie humana",
    categoria: "Historia",
    color: "var(--ochre)",
    /* Serie «fuimos-la-unica-especie-humana», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Ser la única especie humana es la rareza, no la norma» */
    encargo: "Ser la única especie humana es la rareza, no la norma",
    fotos: [
      {
        local: p_ser_la_unica_especie_humana,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Ser la única especie humana es la rareza, no la norma",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    /* Imagen que pide su texto para DENTRO, todavía sin hacer:
       IMAGEN — sección «Hace cincuenta mil años había varias clases de humano repartidas por el planeta». Diagrama propio en SVG: una línea de tiempo horizontal de los últimos 200.000 años, con una barra por especie (erectus, floresiensis, luzone */
    bloques: [
      {
        b: "rotulo",
        texto:
          "El árbol humano se ha ido llenando de ramas a medida que lo mirábamos mejor",
      },
      {
        b: "parrafo",
        texto:
          "Damos por hecho que «humano» y <em>Homo sapiens</em> significan lo mismo. Durante toda " +
          "nuestra vida ha sido cierto, y por eso cuesta mucho imaginar que haya sido de otra " +
          "manera. Pero esa coincidencia es reciente, y en la escala del linaje humano ha durado " +
          "muy poco.",
      },
      {
        b: "parrafo",
        texto:
          "Lo interesante es que ni siquiera los especialistas la vieron venir del todo. En 2003, " +
          "el paleoantropólogo Chris Stringer publicó un árbol de la familia humana que contenía " +
          "cuatro especies. Veintiún años después publicó otro diagrama que cubría exactamente el " +
          "mismo periodo de tiempo, y ya tenía más del doble. No es que hubiera cambiado el " +
          "pasado: es que en dos décadas aparecieron fósiles nuevos, se aplicaron técnicas que " +
          "antes no existían, y varias ramas que siempre habían estado ahí salieron por fin a la " +
          "luz.",
      },
      {
        b: "parrafo",
        texto:
          "Hoy el Museo de Historia Natural de Londres cuenta <strong>más de veinte especies de " +
          "homininos</strong> en nuestro árbol genealógico, y reconoce hasta nueve especies " +
          "humanas solo en el último millón de años. Al menos cuatro de ellas siguen apareciendo " +
          "en los últimos cien mil, que en términos evolutivos es anteayer.",
      },
      {
        b: "rayo",
        texto:
          "El árbol humano no se ha ido simplificando con el tiempo: se ha ido llenando. Cada " +
          "década de excavación añade ramas, no las quita.",
      },
      {
        b: "cita",
        texto:
          "En 2024 publiqué un diagrama nuevo que cubría el mismo periodo de tiempo. Muestra más " +
          "del doble de especies, incluidas al menos cuatro que estuvieron por aquí en los " +
          "últimos cien mil años.",
      },
      {
        b: "parrafo",
        texto:
          "— Chris Stringer, Museo de Historia Natural de Londres",
      },
      {
        b: "rotulo",
        texto:
          "Hace cincuenta mil años había varias clases de humano repartidas por el planeta",
      },
      {
        b: "parrafo",
        texto:
          "Si pudieras situarte hace cincuenta mil años y recorrer Eurasia de un extremo a otro, " +
          "te cruzarías con al menos cuatro tipos distintos de humano. No antepasados nuestros, " +
          "ni parientes remotos ya desaparecidos: contemporáneos, vivos al mismo tiempo, cada uno " +
          "instalado en su territorio.",
      },
      {
        b: "lista",
        puntos: [
          "<strong>Neandertales</strong> (<em>Homo neanderthalensis</em>): Europa y Asia " +
            "occidental. Cuerpos anchos y musculados, adaptados al frío, con un cerebro tan " +
            "grande como el nuestro. Se extinguieron hace unos cuarenta mil años.",
          "<strong>Denisovanos</strong>: Asia, y por lo que sabemos un territorio enorme, desde " +
            "Siberia hasta el Tíbet y el noreste de China. Robustos, de mandíbula pesada y muelas " +
            "grandes, y con frecuencia sin muelas del juicio.",
          "<strong><em>Homo floresiensis</strong></em>: únicamente la isla de Flores, en " +
            "Indonesia. Un metro y seis centímetros de estatura, treinta kilos, y un cerebro de " +
            "aproximadamente un tercio del nuestro. Sus huesos van de hace cien mil a sesenta mil " +
            "años, y las herramientas de piedra de su cueva llegan hasta hace cincuenta mil.",
          "<strong><em>Homo luzonensis</strong></em>: la cueva de Callao, en la isla de Luzón, " +
            "Filipinas. Se describió en 2019 a partir de varios dientes, huesos de dedos de la " +
            "mano y del pie y un fémur, de unos sesenta y siete mil años. Sus dientes no se " +
            "parecen a los de ninguna otra especie humana, y sus dedos son proporcionalmente más " +
            "largos que los nuestros.",
          "<strong><em>Homo sapiens</strong></em>: nosotros, ya repartidos por medio mundo y a " +
            "punto de llegar a los territorios de los demás.",
        ],
      },
      {
        b: "parrafo",
        texto:
          "Con <em>Homo luzonensis</em> conviene ser honesto: los fósiles que tenemos llegan " +
          "hasta hace sesenta y siete mil años, y no sabemos cuánto más aguantó la especie " +
          "después. Y si retrocedes otros cincuenta mil años, aparece además <em>Homo " +
          "erectus</em>, la especie humana más duradera de todas, cuya última presencia conocida " +
          "está en el yacimiento de Ngandong, en Java, fechada entre hace ciento diecisiete mil y " +
          "ciento ocho mil años.",
      },
      {
        b: "parrafo",
        texto:
          "Hay un detalle en esa lista que merece pararse a mirarlo. Dos de esas especies vivían " +
          "en islas, Flores y Luzón, que nunca estuvieron unidas al continente por tierra firme, " +
          "ni siquiera con el nivel del mar en su punto más bajo. ¿Cómo llegaron hasta allí? Es " +
          "simple: <strong>cruzaron agua</strong>. No sabemos si en algo parecido a una balsa o " +
          "arrastrados por accidente sobre masas de vegetación arrancadas por un tsunami, pero el " +
          "mar estuvo de por medio, y lo atravesaron.",
      },
      {
        b: "rayo",
        texto:
          "Ser la única especie humana del planeta no es un logro ni un destino. Es un estado de " +
          "cosas que tiene unos cuarenta mil años, y antes de eso nunca había ocurrido.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? En la cueva de Liang Bua, donde vivieron los <em>Homo floresiensis</em>, " +
          "aparecen cientos de fragmentos de hueso de <em>Stegodon</em>, unos elefantes enanos ya " +
          "extinguidos. Algunos de esos huesos tienen marcas de carnicería: aquellos humanos de " +
          "un metro cazaban elefantes.",
      },
    ],
  },
  {
    id: "el-arbol-no-bombea-el-agua-la-cuelga",
    titulo: "Hasta qué altura crece un árbol",
    categoria: "Ciencia",
    color: "var(--ochre)",
    /* Serie «hasta-que-altura-puede-crecer-un-arbol», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un árbol no bombea el agua hacia arriba: la cuelga» */
    encargo: "Un árbol no bombea el agua hacia arriba: la cuelga",
    fotos: [
      {
        local: p_el_arbol_no_bombea_el_agua_la_cuelga,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un árbol no bombea el agua hacia arriba: la cuelga",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "No hay ninguna bomba en ninguna parte",
      },
      {
        b: "parrafo",
        texto:
          "En la copa de una secuoya de cien metros hay hojas que necesitan agua, y el agua está " +
          "abajo, en el suelo. Hay que subirla cien metros, todos los días, sin descanso.",
      },
      {
        b: "parrafo",
        texto:
          "La pregunta obvia es qué la empuja, y la respuesta es que <strong>nada</strong>. No " +
          "existe ninguna bomba en un árbol. No hay un corazón, ni un músculo, ni ningún órgano " +
          "que impulse el agua hacia arriba. El árbol no empuja el agua.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que hace es <strong>tirar de ella desde arriba</strong>, y el motor está en las " +
          "hojas. Una hoja tiene poros diminutos por los que se evapora agua continuamente, y " +
          "cada molécula que se marcha deja un hueco. Ahí entra en juego una propiedad del agua " +
          "que se suele contar como una curiosidad y que resulta ser decisiva: las moléculas de " +
          "agua se atraen con una fuerza considerable entre sí, de modo que se agarran unas a " +
          "otras en cadena. Cuando una se evapora, tira de la que tiene detrás; esa tira de la " +
          "siguiente, y el tirón se transmite por el conducto hacia abajo, sin interrupción, " +
          "hasta la raíz.",
      },
      {
        b: "parrafo",
        texto:
          "De modo que dentro de un árbol enorme no hay agua siendo bombeada. Hay una " +
          "<strong>columna de agua colgando</strong>, sostenida desde arriba y estirada por la " +
          "evaporación de las hojas, exactamente como una cuerda de la que se tira desde un " +
          "extremo. Y como cualquier cuerda de la que se tira, está bajo " +
          "<strong>tensión</strong>: la presión en su interior es negativa.",
      },
      {
        b: "rayo",
        texto:
          "El agua sube porque la evaporación de las hojas tira de ella. Dentro de un tronco no " +
          "hay una bomba: hay una columna colgada y estirada desde arriba.",
      },
      {
        b: "rotulo",
        texto:
          "Y esa cuerda de agua a veces se rompe",
      },
      {
        b: "parrafo",
        texto:
          "¿Y qué impide que esa columna se parta? Es simple: solamente la atracción entre las " +
          "moléculas de agua. Nada más.",
      },
      {
        b: "parrafo",
        texto:
          "Merece la pena pararse a mirar lo que eso significa, porque suena a imposible cuando " +
          "se dice en voz alta. Dentro de un tronco hay hilos de agua continuos de más de cien " +
          "metros de largo y de un grosor microscópico, que se sostienen a sí mismos únicamente " +
          "porque sus moléculas se agarran entre ellas. Ningún ingeniero diseñaría un sistema " +
          "hidráulico así; en la práctica industrial, una columna de agua sometida a tensión se " +
          "rompe enseguida. En un árbol funciona porque los conductos son estrechísimos y las " +
          "paredes ayudan a sujetar el agua, y porque el sistema está lleno de conductos en " +
          "paralelo.",
      },
      {
        b: "parrafo",
        texto:
          "Aun así, a veces se rompe. Cuando la tensión se hace excesiva —en un día muy caluroso, " +
          "con la tierra seca, o simplemente muy arriba en un árbol muy alto—, dentro del " +
          "conducto puede aparecer de golpe una burbuja de vapor. En cuanto aparece, la cadena se " +
          "corta: por ahí ya no se transmite ningún tirón, y ese conducto queda inutilizado. El " +
          "fenómeno se llama <strong>cavitación</strong>, y a la burbuja resultante se le da el " +
          "mismo nombre que en medicina: <strong>embolia</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Un árbol grande sufre embolias constantemente, y sobrevive porque tiene miles de " +
          "conductos y puede permitirse perder unos cuantos. Pero cada metro que gana en altura " +
          "aumenta la tensión que debe soportar toda la columna, y con ella la probabilidad de " +
          "que se rompa. Y ahí está el germen de un límite físico: la altura de un árbol no la " +
          "decide su fuerza, sino hasta dónde aguanta sin partirse un hilo de agua colgado.",
      },
      {
        b: "rayo",
        texto:
          "La columna de agua de un árbol se sostiene solo porque las moléculas se agarran entre " +
          "sí. Cuando la tensión es excesiva aparece una burbuja, la cadena se corta y ese " +
          "conducto queda inservible.",
      },
    ],
  },
  {
    id: "la-historia-de-bugatti",
    titulo: "La historia de Bugatti",
    categoria: "Historia",
    color: "var(--plum)",
    /* Serie «la-historia-de-bugatti», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Bugatti la fundó un italiano en un pueblo que entonces era alemán» */
    encargo: "Bugatti la fundó un italiano en un pueblo que entonces era alemán",
    fotos: [
      {
        local: p_la_historia_de_bugatti,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Bugatti la fundó un italiano en un pueblo que entonces era alemán",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El fundador era milanés y venía de una familia de artistas, no de ingenieros",
      },
      {
        b: "parrafo",
        texto:
          "Cuando se habla de Bugatti se habla de lujo francés, y esa etiqueta es correcta hoy " +
          "pero no explica nada del origen.",
      },
      {
        b: "parrafo",
        texto:
          "<strong>Ettore Bugatti</strong> nació en Milán. Su padre, <strong>Carlo " +
          "Bugatti</strong>, no tenía relación alguna con la mecánica: fue un diseñador " +
          "importante de muebles y joyería del art nouveau, uno de esos nombres que aparecen en " +
          "los museos de artes decorativas. Su hermano <strong>Rembrandt Bugatti</strong> era " +
          "escultor, y llegaría a firmar la figura de elefante que corona el radiador del coche " +
          "más famoso de la marca.",
      },
      {
        b: "parrafo",
        texto:
          "Ese detalle familiar explica más de lo que parece. Bugatti no salió de un taller ni de " +
          "una escuela de ingenieros: salió de una casa donde el trabajo consistía en que un " +
          "objeto útil fuera además bello. Ettore aplicó al automóvil el criterio que había visto " +
          "aplicar a los muebles, y por eso sus coches tienen decisiones que ningún ingeniero " +
          "puro habría tomado, desde la forma de la herradura del radiador hasta ejes pulidos que " +
          "nadie iba a ver nunca.",
      },
      {
        b: "rayo",
        texto:
          "La marca que más se asocia con la exageración en el automóvil no nació de la " +
          "competición ni de la industria. Nació de una familia de artistas decorativos " +
          "milaneses.",
      },
      {
        b: "rotulo",
        texto:
          "La fábrica estaba en Alsacia, y en 1909 Alsacia no era Francia",
      },
      {
        b: "parrafo",
        texto:
          "La empresa se fundó en 1909 en <strong>Molsheim</strong>, en la región de Alsacia. Y " +
          "aquí está el segundo desajuste con la etiqueta, porque Alsacia formó parte del Imperio " +
          "alemán entre 1871 y 1919.",
      },
      {
        b: "parrafo",
        texto:
          "Es decir: durante sus primeros diez años de vida, la fábrica del que sería el gran " +
          "fabricante de lujo francés estaba en territorio alemán, dirigida por un italiano. " +
          "Molsheim pasó a ser francesa en 1919 sin que la fábrica se moviera un metro. Cambió la " +
          "frontera, no la dirección.",
      },
      {
        b: "parrafo",
        texto:
          "Puestas las tres nacionalidades en fila, el resultado es que la identidad nacional de " +
          "Bugatti es un accidente de calendario. Si preguntas de dónde es la marca, la respuesta " +
          "honesta es que depende del año por el que preguntes.",
      },
      {
        b: "rayo",
        texto:
          "Bugatti no se hizo francesa por una decisión de su fundador. Se hizo francesa porque " +
          "en 1919 la frontera se movió y la fábrica se quedó del otro lado.",
      },
    ],
  },
  {
    id: "la-historia-de-ferrari",
    titulo: "La historia de Ferrari",
    categoria: "Historia",
    color: "var(--slate)",
    /* Serie «la-historia-de-ferrari», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Ferrari fue un equipo de carreras casi veinte años antes de ser una fábrica» */
    encargo: "Ferrari fue un equipo de carreras casi veinte años antes de ser una fábrica",
    fotos: [
      {
        local: p_la_historia_de_ferrari,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Ferrari fue un equipo de carreras casi veinte años antes de ser una fábrica",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Primero hubo una escudería, y corría con coches de otro",
      },
      {
        b: "parrafo",
        texto:
          "La imagen habitual es la de un fabricante que, además, compite. En Ferrari el orden " +
          "fue exactamente el contrario, y esa inversión explica casi todo lo demás.",
      },
      {
        b: "parrafo",
        texto:
          "Enzo Ferrari fue primero piloto y después jefe de equipo. Lo que fundó no fue una " +
          "fábrica: fue la <strong>Scuderia Ferrari</strong>, una escudería que preparaba y hacía " +
          "correr coches de <strong>Alfa Romeo</strong>. Durante años, la marca que aparecía en " +
          "los coches que ganaban con su equipo era la de otra empresa.",
      },
      {
        b: "parrafo",
        texto:
          "La ruptura con Alfa Romeo trajo un detalle que dice mucho de la relación. El acuerdo " +
          "de separación le impidió durante un tiempo usar su propio apellido, así que montó su " +
          "siguiente empresa con un nombre que no significa nada para nadie: <strong>Auto Avio " +
          "Costruzioni</strong>.",
      },
      {
        b: "rayo",
        texto:
          "La palabra Ferrari empezó siendo el nombre de un equipo, no el de un coche. La fábrica " +
          "vino después, y vino a servir al equipo.",
      },
      {
        b: "rotulo",
        texto:
          "El primer coche con su nombre es de 1947",
      },
      {
        b: "parrafo",
        texto:
          "Aquella empresa pasó la Segunda Guerra Mundial construyendo y reparando material para " +
          "el ejército italiano. Y solo cuando terminó la guerra empezó a fabricar coches bajo el " +
          "nombre de Ferrari.",
      },
      {
        b: "parrafo",
        texto:
          "El primero fue el <strong>125 S</strong>, de 1947, y ya traía la marca de la casa: un " +
          "motor de doce cilindros en V, la configuración que la empresa convertiría en su firma " +
          "durante décadas.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en las fechas puestas en fila, porque cuentan la historia solas. La escudería " +
          "llevaba funcionando desde finales de los años veinte. El primer coche con el apellido " +
          "en el morro es de 1947. Entre una cosa y otra hay casi veinte años en los que Ferrari " +
          "existió, ganó y se hizo un nombre <strong>sin fabricar un solo coche propio</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Y ahí está el orden de prioridades que explica lo que vendría después. Vender coches " +
          "no era el negocio al que se le añadió un equipo de carreras. Era lo que había que " +
          "hacer para poder seguir compitiendo.",
      },
      {
        b: "rayo",
        texto:
          "Casi todos los fabricantes compiten para vender más coches. Ferrari vendía coches para " +
          "poder seguir compitiendo, y eso se nota en todo lo que hizo su fundador.",
      },
    ],
  },
  {
    id: "la-historia-de-la-alhambra",
    titulo: "La historia de la Alhambra",
    categoria: "Historia",
    color: "var(--clay)",
    /* Serie «la-historia-de-la-alhambra», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La Alhambra se llama así por el color del barro con el que está hecha» */
    encargo: "La Alhambra se llama así por el color del barro con el que está hecha",
    fotos: [
      {
        local: p_la_historia_de_la_alhambra,
        autor: "",
        licencia: "Pexels License",
        alt:
          "La Alhambra se llama así por el color del barro con el que está hecha",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El nombre es un adjetivo, y describe un color",
      },
      {
        b: "parrafo",
        texto:
          "El topónimo viene del árabe <strong>al-Ḥamrāʼ</strong>, que significa literalmente «la " +
          "roja». La forma completa era <strong>al-Qalʻah al-Ḥamrāʼ</strong>, «la fortaleza " +
          "roja».",
      },
      {
        b: "parrafo",
        texto:
          "Y el color no es una metáfora ni una alusión poética a los atardeceres de Granada. La " +
          "referencia al rojo se debe al tono rojizo de sus muros, que se construyeron con " +
          "<strong>tapial</strong>, es decir, con tierra apisonada dentro de encofrados. Ese tono " +
          "lo pone el óxido de hierro presente en la arcilla local.",
      },
      {
        b: "parrafo",
        texto:
          "Detente un momento en lo que eso significa. El edificio más visitado de España, " +
          "símbolo del refinamiento arquitectónico de al-Ándalus, se llama como se llama por el " +
          "color de la tierra que había en el cerro donde se levantó. No lo bautizaron por lo que " +
          "era, sino por el aspecto que tenía desde abajo: una mancha roja en lo alto.",
      },
      {
        b: "rayo",
        texto:
          "La Alhambra no tiene nombre propio. Tiene un apodo, y el apodo describe el material: " +
          "es la construcción de barro rojo que se veía desde la ciudad.",
      },
      {
        b: "rotulo",
        texto:
          "La empezó un rey el mismo año en que llegó a Granada",
      },
      {
        b: "parrafo",
        texto:
          "La otra sorpresa está en las prisas del fundador.",
      },
      {
        b: "parrafo",
        texto:
          "En 1238, <strong>Muhammad I ibn al-Ahmar</strong> se instaló en Granada. Al llegar se " +
          "alojó en la vieja alcazaba de los ziríes, en la colina del Albaicín, que era lo que " +
          "había. Y <strong>ese mismo año</strong> empezó a construir la Alhambra como nueva " +
          "residencia y ciudadela.",
      },
      {
        b: "parrafo",
        texto:
          "O sea, no fue un proyecto que madurara con el reinado ni el capricho de un monarca ya " +
          "asentado. Fue lo primero que hizo. Lo que se ve hoy son dos siglos y medio de obras " +
          "encadenadas por sus sucesores sobre esa decisión inicial, y de ahí que no sea un " +
          "palacio sino un conjunto de ellos: los más famosos y mejor conservados son el Mexuar, " +
          "el Palacio de Comares, el Palacio de los Leones y el Partal.",
      },
      {
        b: "rayo",
        texto:
          "La Alhambra no es un edificio, es una acumulación. Cada rey nazarí construyó el suyo " +
          "al lado del anterior, y lo que hoy se recorre como un solo palacio son en realidad " +
          "varios pegados.",
      },
      {
        b: "parrafo",
        texto:
          "¿Sabías que…? Existen exactamente diecisiete maneras distintas de repetir un dibujo " +
          "sobre un plano llenándolo entero, ni una más. Lo demostró el matemático ruso Evgraf " +
          "Fiódorov en 1891, y lo volvió a demostrar por su cuenta George Pólya en 1924. Los " +
          "alarifes que alicataron estos palacios en el siglo XIV llevaban seiscientos años de " +
          "adelanto: exploraban ese mismo repertorio con una regla y un compás, sin que nadie " +
          "hubiera demostrado todavía que tenía un final.",
      },
    ],
  },
  {
    id: "la-historia-de-lamborghini",
    titulo: "La historia de Lamborghini",
    categoria: "Historia",
    color: "var(--clay)",
    /* Serie «la-historia-de-lamborghini», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Lamborghini fabricó tractores durante quince años antes de fabricar un coche» */
    encargo: "Lamborghini fabricó tractores durante quince años antes de fabricar un coche",
    fotos: [
      {
        local: p_la_historia_de_lamborghini,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Lamborghini fabricó tractores durante quince años antes de fabricar un coche",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Los primeros Lamborghini se hicieron con material sobrante de la guerra",
      },
      {
        b: "parrafo",
        texto:
          "Italia salió de la Segunda Guerra Mundial con el campo arruinado y con una cosa que " +
          "sobraba por todas partes: vehículos militares abandonados. <strong>Ferruccio " +
          "Lamborghini</strong>, hijo de agricultores y mecánico de formación, vio en esas dos " +
          "circunstancias las dos mitades de un mismo negocio. Compraba los vehículos excedentes " +
          "del ejército y los transformaba en máquinas agrícolas.",
      },
      {
        b: "parrafo",
        texto:
          "En 1948 fundó Lamborghini Trattori, y la empresa se convirtió en poco tiempo en un " +
          "fabricante importante de maquinaria agrícola italiana. Los primeros tractores ni " +
          "siquiera llevaban motores propios: montaban propulsores de otras casas, y el mérito de " +
          "Lamborghini estaba en el aprovechamiento y en el montaje, no en el diseño desde cero.",
      },
      {
        b: "parrafo",
        texto:
          "Ahora pon las dos fechas juntas. Automobili Lamborghini se creó en 1963, en Sant'Agata " +
          "Bolognese. Entre una cosa y la otra hay quince años en los que el apellido que hoy va " +
          "en la trasera de un superdeportivo estaba escrito en el capó de tractores que araban " +
          "el norte de Italia, y en los que su dueño ya era un industrial rico y conocido en su " +
          "sector.",
      },
      {
        b: "parrafo",
        texto:
          "Ese orden importa más de lo que parece, porque explica una cosa que casi nunca se " +
          "cuenta: la fábrica de coches no nació buscando financiación, nació con ella. El dinero " +
          "del campo pagó la aventura.",
      },
      {
        b: "rayo",
        texto:
          "Uno de los fabricantes de superdeportivos más famosos del mundo se financió con " +
          "maquinaria agrícola. No fue un fabricante de coches que se hizo rico: fue un hombre " +
          "rico que se puso a fabricar coches.",
      },
      {
        b: "rotulo",
        texto:
          "La historia del embrague se cuenta en todas partes y nadie ha podido probarla",
      },
      {
        b: "parrafo",
        texto:
          "La versión que circula es demasiado buena para no repetirla. Ferruccio, dueño de un " +
          "Ferrari, se harta de que el embrague le dé problemas, va a quejarse personalmente a " +
          "Enzo Ferrari y este le contesta que se dedique a los tractores, que de coches no " +
          "entiende. Herido en el orgullo, decide fabricar uno mejor.",
      },
      {
        b: "parrafo",
        texto:
          "Y precisamente por ser tan buena conviene mirarla despacio. Casi todo lo que se sabe " +
          "de aquella conversación viene de un relato del propio Lamborghini, contado en 1991, " +
          "casi treinta años después de los hechos. No existe una versión de la otra parte. Y " +
          "quien la contaba tenía un motivo evidente para contarla así: la anécdota convierte una " +
          "decisión empresarial fría en un asunto de honor personal, y le regala a la marca un " +
          "origen que ninguna campaña de publicidad podría comprar.",
      },
      {
        b: "parrafo",
        texto:
          "Quienes han revisado el episodio con cuidado lo dicen sin rodeos: la historia tiene " +
          "tanto de leyenda como de hecho, y no se sabe si el enfado fue realmente la razón para " +
          "entrar en el negocio del automóvil, si solo inspiró la idea o si acabó siendo " +
          "simplemente una buena anécdota que contar.",
      },
      {
        b: "parrafo",
        texto:
          "Hay además un detalle que rara vez se menciona. Cuando la propia empresa cuenta su " +
          "historia oficial, la pelea no aparece. Atribuye el salto al automóvil a la afición de " +
          "su fundador y al número de deportivos que ya tenía aparcados en su garaje.",
      },
      {
        b: "parrafo",
        texto:
          "Así que quedan dos relatos posibles y ninguno de los dos se puede cerrar del todo. En " +
          "uno, un industrial rico y aficionado a los coches decide fabricar el gran turismo que " +
          "le gustaría conducir a él. En el otro, un hombre humillado monta una fábrica para " +
          "responder a un desaire. Lo único seguro es que el segundo se cuenta mucho mejor, y que " +
          "en más de sesenta años nadie ha logrado demostrarlo.",
      },
      {
        b: "rayo",
        texto:
          "El origen más famoso de la marca es también el peor documentado. La empresa que sí " +
          "está documentada empezó por un motivo mucho más aburrido: su fundador podía " +
          "permitírselo.",
      },
    ],
  },
  {
    id: "la-historia-de-porsche",
    titulo: "La historia de Porsche",
    categoria: "Historia",
    color: "var(--teal)",
    /* Serie «la-historia-de-porsche», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El primer coche que diseñó Ferdinand Porsche era eléctrico, y es de 1900» */
    encargo: "El primer coche que diseñó Ferdinand Porsche era eléctrico, y es de 1900",
    fotos: [
      {
        local: p_la_historia_de_porsche,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El primer coche que diseñó Ferdinand Porsche era eléctrico, y es de 1900",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Los cuatro motores iban metidos dentro de las ruedas",
      },
      {
        b: "parrafo",
        texto:
          "En diciembre de 1900, en la Exposición de París, se presentó un coche de aspecto " +
          "convencional para la época y de mecánica muy poco convencional. Lo firmaba la casa " +
          "vienesa Lohner, y lo había proyectado un joven ingeniero llamado <strong>Ferdinand " +
          "Porsche</strong>, que tenía veinticinco años.",
      },
      {
        b: "parrafo",
        texto:
          "El coche no llevaba motor en el sentido en que lo entendemos. Llevaba cuatro, uno " +
          "metido dentro del buje de cada rueda, cada uno capaz de dar entre 2,5 y 3,5 caballos y " +
          "de subir hasta 7 caballos en picos cortos. Es decir, las cuatro ruedas eran motrices, " +
          "y lo eran porque cada una tenía su propio motor pegado.",
      },
      {
        b: "parrafo",
        texto:
          "Piensa un momento en lo que desaparece de un coche cuando haces eso. Desaparece el eje " +
          "de transmisión, desaparece la caja de cambios, desaparecen las cadenas y las correas " +
          "que en 1900 llevaban la fuerza desde el motor hasta las ruedas y que eran, de lejos, " +
          "la parte más frágil de cualquier automóvil. La energía llega por un cable hasta el " +
          "sitio donde hace falta y ahí se convierte en giro.",
      },
      {
        b: "rayo",
        texto:
          "El primer proyecto importante de Ferdinand Porsche eliminó de un golpe toda la " +
          "transmisión de un automóvil. La fuerza no viajaba: se fabricaba en la propia rueda.",
      },
      {
        b: "rotulo",
        texto:
          "El motor de gasolina no movía las ruedas, movía un generador",
      },
      {
        b: "parrafo",
        texto:
          "El problema del coche eléctrico de 1900 era el mismo que hoy: las baterías pesaban " +
          "demasiado y duraban poco. Y la solución que ensayó Porsche en 1901 es la parte de esta " +
          "historia que conviene leer despacio.",
      },
      {
        b: "parrafo",
        texto:
          "En lugar de aumentar las baterías, montó un motor de combustión fabricado por Daimler " +
          "cuya misión no era mover el coche. Ese motor accionaba un generador, el generador " +
          "producía electricidad, y la electricidad alimentaba los motores que iban dentro de las " +
          "ruedas. El motor de gasolina no estaba conectado mecánicamente a nada que rodara.",
      },
      {
        b: "parrafo",
        texto:
          "Vale la pena decirlo con todas las letras, porque es contraintuitivo: en aquel coche " +
          "había un motor de gasolina funcionando y, aun así, lo único que hacía girar las ruedas " +
          "era corriente eléctrica. El invento se llamó <strong>Mixte</strong>, y su fecha es " +
          "1901.",
      },
      {
        b: "rayo",
        texto:
          "La disposición que Porsche ensayó en 1901 —un motor térmico que solo fabrica " +
          "electricidad y unos motores eléctricos que hacen todo el trabajo— tardó más de cien " +
          "años en llegar a los concesionarios.",
      },
    ],
  },
  {
    id: "la-historia-del-titanic",
    titulo: "La historia del Titanic",
    categoria: "Historia",
    color: "var(--clay)",
    /* Serie «la-historia-del-titanic», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El Titanic llevaba más botes salvavidas de los que exigía la ley» */
    encargo: "El Titanic llevaba más botes salvavidas de los que exigía la ley",
    fotos: [
      {
        local: p_la_historia_del_titanic,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El Titanic llevaba más botes salvavidas de los que exigía la ley",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Llevaba seis botes de más, no de menos",
      },
      {
        b: "parrafo",
        texto:
          "De todo lo que se cuenta del Titanic, el reproche que más se repite es el de los " +
          "botes: que iban escasos por avaricia o por descuido. Los números dicen otra cosa, y " +
          "esa otra cosa es peor.",
      },
      {
        b: "parrafo",
        texto:
          "El barco llevaba <strong>veinte botes salvavidas</strong> —catorce normales, dos " +
          "cúteres y cuatro plegables— con capacidad total para <strong>1.178 personas</strong>. " +
          "A bordo viajaban unas <strong>2.208</strong> entre pasaje y tripulación. La cuenta " +
          "salta a la vista: sitio para poco más de la mitad.",
      },
      {
        b: "parrafo",
        texto:
          "Y ahora el dato que le da la vuelta al reproche. La normativa de la Junta de Comercio " +
          "británica exigía <strong>catorce botes</strong> para un barco de 10.000 toneladas. El " +
          "Titanic llevaba <strong>seis más</strong> de los obligatorios, es decir, plazas para " +
          "338 personas por encima de lo que marcaba la norma.",
      },
      {
        b: "rayo",
        texto:
          "El Titanic no incumplió la ley de botes salvavidas: la superó. Y aun superándola, más " +
          "de mil personas se quedaban sin sitio antes de que el barco zarpara.",
      },
      {
        b: "rotulo",
        texto:
          "La norma estaba escrita para barcos cinco veces más pequeños",
      },
      {
        b: "parrafo",
        texto:
          "Entonces, ¿cómo puede una nave cumplir de sobra la ley y llevar botes para la mitad " +
          "del pasaje? Porque la ley medía lo que no era.",
      },
      {
        b: "parrafo",
        texto:
          "La tabla de la Junta de Comercio asignaba botes en función del " +
          "<strong>tonelaje</strong> del barco, no del número de personas que llevara. Y la tabla " +
          "se acababa en las 10.000 toneladas: a partir de ahí, todo entraba en la misma casilla. " +
          "El Titanic desplazaba más de 46.000.",
      },
      {
        b: "parrafo",
        texto:
          "Es decir, se aplicó a un barco de cuarenta y seis mil toneladas una exigencia " +
          "calculada para uno de diez mil, porque cuando se redactó aquella norma no existían " +
          "barcos de ese tamaño y nadie actualizó la tabla mientras crecían. La regulación se " +
          "quedó quieta y los astilleros no.",
      },
      {
        b: "parrafo",
        texto:
          "De ahí sale la conclusión incómoda de todo el asunto. Aquella noche se hicieron muchas " +
          "cosas mal —botes lanzados a medio llenar, avisos ignorados, un barco cercano que no " +
          "acudió—, pero incluso haciéndolo todo perfecto, con cada bote lleno hasta el borde y " +
          "sin perder un minuto, la mitad de la gente que iba a bordo se quedaba en el agua.",
      },
      {
        b: "parrafo",
        texto:
          "Y ese es el motivo por el que el Titanic cambió la navegación. Después del desastre, " +
          "las normas dejaron de contar toneladas y pasaron a contar personas.",
      },
      {
        b: "rayo",
        texto:
          "El fallo no estuvo en un armador que ahorró, sino en una tabla que nadie revisó " +
          "mientras los barcos se hacían cinco veces más grandes. La ley cumplida al pie de la " +
          "letra garantizaba que muriera la mitad del pasaje.",
      },
    ],
  },
  {
    id: "la-sagrada-familia",
    titulo: "La Sagrada Familia",
    categoria: "Historia",
    color: "var(--teal)",
    /* Serie «la-sagrada-familia», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Gaudí trabajó 43 años en ella y dejó menos de una cuarta parte hecha» */
    encargo: "Gaudí trabajó 43 años en ella y dejó menos de una cuarta parte hecha",
    fotos: [
      {
        local: p_la_sagrada_familia,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Gaudí trabajó 43 años en ella y dejó menos de una cuarta parte hecha",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El proyecto no era suyo: lo heredó al año siguiente",
      },
      {
        b: "parrafo",
        texto:
          "La obra empezó el 19 de marzo de 1882 bajo la dirección del arquitecto " +
          "<strong>Francisco de Paula del Villar</strong>. Gaudí no aparece hasta 1883, cuando " +
          "Villar dimite y él asume la dirección.",
      },
      {
        b: "parrafo",
        texto:
          "A partir de ahí le dedicó unos 43 años, hasta su muerte en 1926. Y el resultado de " +
          "esas cuatro décadas es el dato que descoloca a cualquiera: <strong>en el momento de su " +
          "muerte estaba terminado menos de un cuarto del proyecto</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Cuarenta y tres años de trabajo para dejar hecha menos de una cuarta parte. No porque " +
          "fuera lento, sino porque el proyecto que heredó lo transformó en algo de otra escala: " +
          "lo que Villar había empezado era una iglesia neogótica convencional.",
      },
      {
        b: "rayo",
        texto:
          "La Sagrada Familia no es la obra que Gaudí no llegó a terminar. Es la obra que Gaudí " +
          "sabía que no iba a terminar, y que diseñó igualmente a un tamaño que le sobrevivía por " +
          "siglos.",
      },
      {
        b: "rotulo",
        texto:
          "Avanza al ritmo de lo que la gente da",
      },
      {
        b: "parrafo",
        texto:
          "La explicación de la lentitud no está en la arquitectura, está en la contabilidad, y " +
          "es la característica que hace de este edificio un caso único.",
      },
      {
        b: "parrafo",
        texto:
          "La Sagrada Familia es un templo expiatorio, lo que significa que no se financia con " +
          "dinero público ni con el de la Iglesia: se sostiene <strong>solo con donaciones " +
          "privadas</strong>, y por eso su construcción avanzaba despacio. Hoy el dinero de las " +
          "entradas que compran los turistas es lo que paga las obras, además de las donaciones " +
          "que se siguen aceptando.",
      },
      {
        b: "parrafo",
        texto:
          "Piensa en lo que implica un modelo así. No hay un presupuesto cerrado ni un plazo " +
          "comprometido con nadie: hay un ritmo de ingresos, y la obra va a la velocidad que ese " +
          "ritmo permita. En los años de guerra y posguerra apenas se movió. En las últimas " +
          "décadas, con millones de visitantes al año, se ha acelerado más que en todo el siglo " +
          "anterior.",
      },
      {
        b: "parrafo",
        texto:
          "Y sobre el final de Gaudí conviene contar los hechos secos, porque explican por qué el " +
          "proyecto quedó donde quedó. El 7 de junio de 1926, caminando por la Gran Via de les " +
          "Corts Catalanes entre las calles Girona y Bailén, lo atropelló un tranvía de la línea " +
          "30 y perdió el conocimiento. Lo tomaron por un mendigo, y por eso tardó en recibir " +
          "atención médica. Murió el 10 de junio de 1926, a los 73 años.",
      },
      {
        b: "rayo",
        texto:
          "El edificio más visitado de Barcelona lo pagan sus propios visitantes, y esa es la " +
          "razón de que llevemos siglo y medio viéndolo en obras. No le faltó dinero: le faltó " +
          "tener a alguien obligado a dárselo.",
      },
    ],
  },
  {
    id: "leyendo-las-sagas",
    titulo: "Llegaron los vikingos antes que Colón",
    categoria: "Historia",
    color: "var(--sage)",
    /* Serie «llegaron-los-vikingos-a-america-antes-que-colon», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un matrimonio noruego encontró el yacimiento leyendo las sagas» */
    encargo: "Un matrimonio noruego encontró el yacimiento leyendo las sagas",
    fotos: [
      {
        local: p_leyendo_las_sagas,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un matrimonio noruego encontró el yacimiento leyendo las sagas",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Las sagas contaban el viaje, y durante siglos se leyeron como cuentos",
      },
      {
        b: "parrafo",
        texto:
          "Las sagas islandesas de Vinlandia llevan escritas desde la Edad Media. Cuentan que " +
          "unos noruegos asentados en Groenlandia navegaron hacia el oeste, encontraron tierra, " +
          "se instalaron una temporada y acabaron volviéndose. Cuentan incluso que uno de ellos " +
          "halló uvas creciendo salvajes en el bosque, y que por eso llamaron a aquella región " +
          "Vinlandia, la tierra del vino.",
      },
      {
        b: "parrafo",
        texto:
          "Durante siglos eso se leyó como lo que aparentaba ser: literatura. Las sagas mezclan " +
          "genealogías reales con episodios claramente fantásticos, y un texto que habla de " +
          "fantasmas y de profecías no es una fuente en la que uno confíe para trazar una ruta de " +
          "navegación.",
      },
      {
        b: "parrafo",
        texto:
          "Hubo además un problema añadido: la cantidad de material falso que circulaba. El caso " +
          "más sonado es el del llamado mapa de Vinlandia, un pergamino que Yale adquirió y " +
          "presentó en 1965 como una carta del siglo XV con Norteamérica dibujada antes de Colón. " +
          "En 2021, el análisis químico encontró en todas sus líneas y letras un compuesto de " +
          "titanio que no se empezó a usar en tintas hasta los años veinte del siglo pasado. «El " +
          "mapa de Vinlandia es falso. Aquí no hay ninguna duda razonable», concluyó el " +
          "conservador de la biblioteca. Cada episodio así hacía la hipótesis nórdica un poco " +
          "menos respetable.",
      },
      {
        b: "rayo",
        texto:
          "Las sagas decían dónde estaba desde hacía setecientos años. El problema es que también " +
          "decían otras cosas, y nadie sabía cómo separar una capa de la otra.",
      },
      {
        b: "rotulo",
        texto:
          "Un explorador y una arqueóloga decidieron tratarlas como un mapa",
      },
      {
        b: "parrafo",
        texto:
          "Helge Ingstad era explorador y escritor noruego; su mujer, Anne Stine Ingstad, era " +
          "arqueóloga. Su método consistió en tomarse las sagas en serio en un solo aspecto —la " +
          "navegación— e ignorar el resto. Si el texto decía tantos días de rumbo en tal " +
          "dirección, ¿dónde caía eso en un mapa real?",
      },
      {
        b: "parrafo",
        texto:
          "Esa lectura los llevó a la punta norte de Terranova, y allí hicieron lo que casi nadie " +
          "había hecho: preguntar a la gente del sitio. ¿Y cómo se encuentra un asentamiento de " +
          "mil años enterrado bajo la hierba? Es simple: <strong>preguntándole a quien vive " +
          "encima</strong>. Un vecino llamado George Decker llevó a Helge Ingstad hasta un grupo " +
          "de montículos y crestas cubiertos de vegetación que parecían restos de edificios.",
      },
      {
        b: "parrafo",
        texto:
          "Lo eran. Entre 1960 y 1968, las excavaciones dirigidas por Anne Stine Ingstad sacaron " +
          "a la luz <strong>ocho construcciones nórdicas del siglo XI</strong>, con paredes y " +
          "techo de turba sobre armazón de madera: tres viviendas, cuatro talleres y una fragua, " +
          "donde se fundió hierro por primera vez en el continente americano.",
      },
      {
        b: "rayo",
        texto:
          "El yacimiento no apareció por casualidad ni por prospección. Apareció porque alguien " +
          "leyó un texto medieval como si fuera una carta náutica y luego preguntó a un vecino.",
      },
      {
        b: "rotulo",
        texto:
          "Los objetos pequeños son los que cierran el caso",
      },
      {
        b: "parrafo",
        texto:
          "Ocho casas de turba demuestran que allí vivió gente. Para demostrar que era gente " +
          "nórdica hacen falta objetos, y de L'Anse aux Meadows salieron alrededor de " +
          "ochocientos.",
      },
      {
        b: "parrafo",
        texto:
          "La mayoría no impresionan a primera vista, y por eso convencen. Un alfiler de bronce " +
          "con la cabeza en forma de anillo, del tipo que los nórdicos usaban para sujetarse la " +
          "capa. Remaches de hierro de embarcación. Una lámpara de piedra para aceite. Una piedra " +
          "de afilar pequeña, de las de agujas y tijeras. Un fragmento de latón decorado y " +
          "dorado. Un trozo de aguja de hueso.",
      },
      {
        b: "parrafo",
        texto:
          "Y una <strong>fusayola</strong>: el volante de un huso de hilar a mano. Ese objeto, " +
          "junto con la aguja, dice algo que las casas no dicen. Hilar era trabajo de mujeres en " +
          "aquel mundo, así que en aquel campamento del fin del mundo no había solo hombres. No " +
          "era una partida de exploración: era gente que había ido a quedarse una temporada, con " +
          "su vida doméstica a cuestas.",
      },
      {
        b: "rayo",
        texto:
          "Lo que demuestra que los nórdicos vivieron en América no es una espada ni un casco. Es " +
          "un alfiler de capa, una aguja de hueso y el volante de un huso de hilar.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? L'Anse aux Meadows fue declarado Patrimonio de la Humanidad en 1978, y " +
          "sigue siendo el único asentamiento vikingo confirmado en Norteamérica. Mil años de " +
          "presencia nórdica al otro lado del Atlántico se sostienen, arqueológicamente, sobre un " +
          "solo yacimiento.",
      },
    ],
  },
  {
    id: "los-samurais",
    titulo: "Los samuráis",
    categoria: "Historia",
    color: "var(--ochre)",
    /* Serie «los-samurais», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El arma del samurái no era la espada: era el arco» */
    encargo: "El arma del samurái no era la espada: era el arco",
    fotos: [
      {
        local: p_los_samurais,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El arma del samurái no era la espada: era el arco",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Se llamaba «el camino del arco y el caballo»",
      },
      {
        b: "parrafo",
        texto:
          "Antes de que existiera ninguna palabra para el código moral del samurái, existía una " +
          "para describir su oficio. Y esa palabra dice exactamente en qué consistía.",
      },
      {
        b: "parrafo",
        texto:
          "El término es <strong>kyūba no michi</strong>, «el camino del arco y el caballo», y ya " +
          "estaba en uso en la época de la guerra Genpei, entre 1180 y 1185. No tenía ninguna " +
          "connotación moral: describía los métodos de combate y las costumbres de entrenamiento " +
          "de aquellos guerreros, sin más.",
      },
      {
        b: "parrafo",
        texto:
          "Léelo otra vez y fíjate en las dos cosas que nombra y en la que falta. Nombra el arco. " +
          "Nombra el caballo. No nombra la espada.",
      },
      {
        b: "parrafo",
        texto:
          "El samurái de los siglos en que hubo guerras de verdad era, ante todo, un " +
          "<strong>arquero montado</strong>: un hombre que disparaba desde un caballo en " +
          "movimiento, que es una de las habilidades más difíciles que se le han exigido nunca a " +
          "un combatiente. Eso era lo que se entrenaba durante años y lo que definía la clase.",
      },
      {
        b: "rayo",
        texto:
          "El oficio del samurái tenía nombre propio y ese nombre menciona un arco y un caballo. " +
          "La espada que hoy lo identifica en todo el mundo ni siquiera aparecía en la " +
          "descripción de lo que hacía.",
      },
      {
        b: "rotulo",
        texto:
          "La katana se convirtió en el símbolo mucho después",
      },
      {
        b: "parrafo",
        texto:
          "Entonces, ¿de dónde sale la imagen del guerrero cuya alma es su espada? De otra época, " +
          "y no es la de las batallas.",
      },
      {
        b: "parrafo",
        texto:
          "Conviene ordenar las fechas, porque explican el equívoco entero. Los siglos de guerra " +
          "continua en Japón son los que van del XII al XVI. La imagen del samurái como maestro " +
          "de la espada, con su ritual, su filosofía y su código, se forma sobre todo después, " +
          "durante los dos siglos y medio de paz que vienen a continuación.",
      },
      {
        b: "parrafo",
        texto:
          "Y ahí está la inversión que hace este tema interesante. La espada no se volvió central " +
          "mientras servía para ganar batallas. Se volvió central cuando <strong>dejó de haber " +
          "batallas</strong> y pasó a ser lo que distinguía a una clase de las demás: un objeto " +
          "de estatus, de ceremonia y de identidad, que se llevaba encima precisamente porque " +
          "nadie más podía llevarlo.",
      },
      {
        b: "parrafo",
        texto:
          "En el siguiente short está lo que ocurrió en esos dos siglos y medio, y explica " +
          "bastante más que la espada.",
      },
      {
        b: "rayo",
        texto:
          "La katana pasó de ser un arma secundaria a ser el símbolo de una clase justo cuando " +
          "esa clase dejó de combatir. Es un emblema de guerreros diseñado en tiempos de paz.",
      },
    ],
  },
  {
    id: "miguel-de-cervantes",
    titulo: "Miguel de Cervantes",
    categoria: "Historia",
    color: "var(--teal)",
    /* Serie «miguel-de-cervantes», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El manco de Lepanto tenía las dos manos» */
    encargo: "El manco de Lepanto tenía las dos manos",
    fotos: [
      {
        local: p_miguel_de_cervantes,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El manco de Lepanto tenía las dos manos",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Lo que perdió fue el movimiento, no la mano",
      },
      {
        b: "parrafo",
        texto:
          "El 7 de octubre de 1571, en el golfo de Lepanto, un soldado de veinticuatro años " +
          "llamado Miguel de Cervantes salió de la batalla naval con tres heridas: dos " +
          "arcabuzazos en el pecho y otro en una mano.",
      },
      {
        b: "parrafo",
        texto:
          "Los documentos de la época son precisos sobre lo que ocurrió después y merece la pena " +
          "leerlos despacio, porque contradicen el apodo. Quedó, dicen, <em>estropeado de la " +
          "dicha mano</em>. Un trozo de plomo le seccionó un nervio, la mano izquierda perdió el " +
          "movimiento y se le quedó anquilosada. No se la cortaron. La conservó, inerte, el resto " +
          "de su vida.",
      },
      {
        b: "parrafo",
        texto:
          "Es decir, el hombre al que la historia conoce como el manco de Lepanto tenía las dos " +
          "manos en su sitio. Lo que no tenía era el uso de una de ellas.",
      },
      {
        b: "rayo",
        texto:
          "El apodo más famoso de la literatura española describe mal la lesión que lo originó. " +
          "Cervantes no era manco: era un hombre con una mano paralizada.",
      },
      {
        b: "rotulo",
        texto:
          "Estaba enfermo con fiebre y se negó a quedarse bajo cubierta",
      },
      {
        b: "parrafo",
        texto:
          "Hay un detalle previo a la herida que explica bastante mejor a este hombre que " +
          "cualquier retrato.",
      },
      {
        b: "parrafo",
        texto:
          "El día de la batalla, Cervantes estaba enfermo, con fiebres, y sus superiores le " +
          "dijeron que se quedara resguardado bajo cubierta, que era lo razonable y lo que nadie " +
          "le habría reprochado. Un compañero dejó por escrito lo que contestó.",
      },
      {
        b: "cita",
        texto:
          "Que más quería morir peleando por Dios y por su rey, que no meterse so cubierta.",
        autor: "Respuesta de Cervantes en Lepanto, según el testimonio de un compañero",
      },
      {
        b: "parrafo",
        texto:
          "Pidió que lo pusieran en el puesto de más peligro y allí lo hirieron. Y lo llamativo " +
          "es que nunca se lamentó de aquello. Años después, presentándose a sus lectores en el " +
          "prólogo de las <em>Novelas ejemplares</em>, habló de la herida en tercera persona y " +
          "sin rastro de queja: «aunque parece fea, él la tiene por hermosa, por haberla cobrado " +
          "en la más memorable y alta ocasión».",
      },
      {
        b: "parrafo",
        texto:
          "Le costó cara. Un soldado con una mano inservible tenía muy pocas salidas en la España " +
          "del siglo XVI, y las cuatro décadas siguientes de su vida fueron una sucesión de " +
          "trabajos mal pagados y de peticiones desatendidas.",
      },
      {
        b: "rayo",
        texto:
          "La herida que le arruinó la carrera de soldado fue la única credencial que conservó " +
          "siempre. Cervantes se presentaba por lo que había perdido, no por lo que había " +
          "escrito.",
      },
    ],
  },
  {
    id: "no-sirven-para-agarrar",
    titulo: "Para qué sirven las huellas dactilares",
    categoria: "Cuerpo humano",
    color: "var(--plum)",
    /* Serie «para-que-sirven-las-huellas-dactilares», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Las huellas dactilares no sirven para agarrar mejor» */
    encargo: "Las huellas dactilares no sirven para agarrar mejor",
    fotos: [
      {
        local: p_no_sirven_para_agarrar,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Las huellas dactilares no sirven para agarrar mejor",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La explicación intuitiva es la de los neumáticos",
      },
      {
        b: "parrafo",
        texto:
          "La respuesta que da todo el mundo cuando le preguntan para qué sirven las huellas es " +
          "la misma, y llega en dos segundos: para agarrar. Los surcos de la yema harían lo mismo " +
          "que el dibujo de un neumático o la suela de una zapatilla, es decir, aumentar el " +
          "agarre sobre lo que tocas. Suena tan razonable que nadie pide comprobación.",
      },
      {
        b: "parrafo",
        texto:
          "Y hay un motivo por el que suena tan razonable: es la explicación correcta para los " +
          "neumáticos. Un dibujo tallado en el caucho sí mejora el agarre de un coche, aunque no " +
          "exactamente como la gente cree, y de ahí se traslada la idea a la mano sin más " +
          "comprobación que el parecido visual.",
      },
      {
        b: "parrafo",
        texto:
          "En 2009, dos investigadores de la Universidad de Mánchester decidieron medirlo en vez " +
          "de suponerlo, y publicaron el resultado en el <em>Journal of Experimental " +
          "Biology</em>. El montaje fue directo: apretar una lámina de plástico contra la yema de " +
          "un dedo con distintas fuerzas, arrastrarla, y medir la fricción real que se produce, " +
          "además del área de piel que quedaba efectivamente en contacto.",
      },
      {
        b: "rayo",
        texto:
          "La explicación del neumático es correcta para un neumático. Nadie había comprobado si " +
          "vale para un dedo.",
      },
      {
        b: "rotulo",
        texto:
          "Los surcos reducen la superficie de contacto",
      },
      {
        b: "parrafo",
        texto:
          "Lo que encontraron va justo en contra de la creencia. Las huellas no aumentan la " +
          "fricción: <strong>la reducen</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "La razón es geométrica y una vez la ves ya no se puede dejar de ver. La piel no se " +
          "comporta como un material rígido, sino más bien como el caucho: en ese tipo de " +
          "materiales, la fricción depende sobre todo del área que está realmente en contacto. Y " +
          "un dedo con surcos tiene menos superficie tocando el objeto que un dedo liso, porque " +
          "los valles entre las crestas no tocan nada. La medida fue clara: el área de piel en " +
          "contacto resultó un <strong>33 % menor</strong> de lo que habría sido con una yema " +
          "lisa.",
      },
      {
        b: "parrafo",
        texto:
          "Un tercio menos de contacto significa un tercio menos de agarre. Los propios autores " +
          "lo calificaron de mito urbano, y es de los buenos, porque lleva décadas repitiéndose " +
          "en libros de divulgación con la tranquilidad de lo que nadie va a comprobar.",
      },
      {
        b: "parrafo",
        texto:
          "Y eso deja abierta la pregunta interesante. Las crestas están ahí, son universales en " +
          "nuestra especie, se forman en el útero con un patrón complejísimo y las comparten " +
          "otros primates. Nada de eso ocurre por casualidad, así que tienen que servir para " +
          "algo. Los propios investigadores apuntaron varias posibilidades: agarrar superficies " +
          "rugosas como la corteza de un árbol, permitir que la piel se estire sin dañarse, " +
          "drenar el agua entre el dedo y el objeto cuando está mojado, y aumentar la " +
          "sensibilidad al tacto.",
      },
      {
        b: "parrafo",
        texto:
          "De esas cuatro, hay una que ha resultado tener detrás un mecanismo precioso.",
      },
      {
        b: "rayo",
        texto:
          "Un dedo con surcos toca un tercio menos de superficie que uno liso. Menos contacto es " +
          "menos agarre, no más.",
      },
    ],
  },
  {
    id: "el-bostezo-no-tiene-que-ver-con-el-oxigeno",
    titulo: "Por qué bostezamos",
    categoria: "Cuerpo humano",
    color: "var(--clay)",
    /* Serie «por-que-bostezamos», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El bostezo no tiene nada que ver con el oxígeno» */
    encargo: "Un gato atigrado bostezando con la boca muy abierta, visto de perfil.",
    fotos: [
      {
        local: p_el_bostezo_no_tiene_que_ver_con_el_oxigeno,
        autor:
          "Fotografía de Jenny Downing.",
        licencia: "CC BY-SA 2.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Tabby_cat-yawning-01.jpg",
        alt:
          "Un gato atigrado bostezando con la boca muy abierta, visto de perfil.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La explicación de siempre lleva décadas desmentida",
      },
      {
        b: "parrafo",
        texto:
          "Si le preguntas a cualquiera por qué bostezamos, te dirá lo mismo y con bastante " +
          "seguridad: porque al cuerpo le falta oxígeno, y el bostezo sirve para coger una " +
          "bocanada grande de aire que compense el déficit. Es la respuesta que se enseña en los " +
          "colegios, la que aparece en artículos de revistas y la que repite prácticamente todo " +
          "el mundo. También es la que se desmontó hace décadas, con un experimento que " +
          "cualquiera puede seguir sin saber nada de fisiología.",
      },
      {
        b: "parrafo",
        texto:
          "El psicólogo Robert Provine hizo el planteamiento evidente. Si la teoría fuese cierta, " +
          "tenía que cumplirse una predicción muy concreta: respirar aire cargado de oxígeno " +
          "debería reducir el número de bostezos, porque el supuesto déficit quedaría cubierto, y " +
          "respirar aire con más dióxido de carbono debería dispararlos, porque agravaría el " +
          "problema. Probó las dos cosas, midiendo los bostezos de sus sujetos en cada condición.",
      },
      {
        b: "parrafo",
        texto:
          "No pasó nada. Ni el oxígeno extra los redujo, ni el CO₂ los aumentó. La predicción " +
          "falló en las dos direcciones a la vez, que es la peor manera posible de fallar. " +
          "Después lo intentó por otra vía, con ejercicio físico, que duplica el ritmo " +
          "respiratorio y por tanto debería alterar el sistema de manera evidente, y el resultado " +
          "fue igual de tozudo: la gente respiraba el doble y bostezaba exactamente igual que " +
          "antes.",
      },
      {
        b: "rayo",
        texto:
          "Respirar oxígeno puro no reduce los bostezos, y respirar dióxido de carbono no los " +
          "aumenta. El bostezo y la respiración son sistemas distintos.",
      },
      {
        b: "rotulo",
        texto:
          "Y hay un detalle que remata el asunto",
      },
      {
        b: "parrafo",
        texto:
          "Por si quedaba alguna duda, hay una observación que cierra la puerta del todo: los " +
          "fetos bostezan dentro del útero. Se ve con claridad en las ecografías, es un " +
          "movimiento inconfundible y ocurre desde bastante antes del tercer trimestre. Lo hacen " +
          "cuando sus pulmones todavía no funcionan, cuando están llenos de líquido y no de aire, " +
          "y cuando el oxígeno les llega por el cordón umbilical y no por la boca. Difícilmente " +
          "pueden estar cogiendo aire con un aparato respiratorio que aún no ha entrado en " +
          "servicio.",
      },
      {
        b: "parrafo",
        texto:
          "Además, bostezar no es cosa nuestra ni de los mamíferos: lo hacen las aves, los " +
          "reptiles, los peces y prácticamente todos los vertebrados que se han estudiado a " +
          "fondo. Es uno de los comportamientos más antiguos y más extendidos que existen en el " +
          "árbol de la vida, lo cual sugiere que cumple una función bastante básica y bastante " +
          "importante, porque de lo contrario se habría perdido por el camino en alguna de las " +
          "miles de ramas donde persiste.",
      },
      {
        b: "parrafo",
        texto:
          "Y aquí llega lo verdaderamente incómodo. Después de décadas de estudios, de " +
          "experimentos ingeniosos y de varias hipótesis en competencia, <strong>la ciencia " +
          "todavía no tiene una respuesta con consenso</strong> sobre para qué sirve exactamente. " +
          "Hay candidatas, y alguna bastante sólida con pruebas a favor, pero ninguna se ha " +
          "impuesto del todo ni ha silenciado a sus críticos. Es de esas cosas que hacemos varias " +
          "veces al día, desde antes de nacer y en compañía de medio reino animal, y que siguen " +
          "siendo, en el sentido literal de la palabra, un misterio.",
      },
      {
        b: "rayo",
        texto:
          "Los fetos bostezan antes de que sus pulmones funcionen. Sea lo que sea el bostezo, no " +
          "es una forma de respirar.",
      },
    ],
  },
  {
    id: "una-contrasena-que-alguien-ha-robado",
    titulo: "Por qué brillan las luciérnagas",
    categoria: "Ciencia",
    color: "var(--plum)",
    /* Serie «por-que-brillan-las-luciernagas», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El destello es una contraseña, y hay quien la ha robado» */
    encargo: "El destello es una contraseña, y hay quien la ha robado",
    fotos: [
      {
        local: p_una_contrasena_que_alguien_ha_robado,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El destello es una contraseña, y hay quien la ha robado",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Cada especie tiene su propio código de destellos",
      },
      {
        b: "parrafo",
        texto:
          "Lo que parece un parpadeo aleatorio en una noche de verano es en realidad una " +
          "conversación muy estructurada, y bastante estricta.",
      },
      {
        b: "parrafo",
        texto:
          "Las luciérnagas usan la luz para encontrar pareja, y cada especie tiene su propio " +
          "código. El macho vuela emitiendo una secuencia concreta de destellos, con un número, " +
          "una duración y un ritmo característicos de su especie. Una hembra posada entre la " +
          "hierba lo ve, y si es de la misma especie responde con un destello propio. Pero lo " +
          "decisivo no es el destello de ella: es <strong>cuánto tarda en darlo</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Ese intervalo entre la señal del macho y la respuesta de la hembra está medido en " +
          "fracciones de segundo y es distinto en cada especie. Funciona como una contraseña, y " +
          "el biólogo Thomas Eisner la llamaba exactamente así. Si la pausa es la correcta, el " +
          "macho sabe que al otro lado hay una hembra de su especie y baja hacia ella. Si no lo " +
          "es, sigue volando.",
      },
      {
        b: "parrafo",
        texto:
          "Es un sistema elegante y económico. Permite que varias especies de luciérnaga " +
          "compartan el mismo prado la misma noche sin confundirse entre ellas, sin necesidad de " +
          "acercarse a comprobar nada y a oscuras.",
      },
      {
        b: "rayo",
        texto:
          "El macho no busca un destello, busca un ritmo. Lo que identifica a la hembra de su " +
          "especie es el tiempo exacto que tarda en contestar.",
      },
      {
        b: "rotulo",
        texto:
          "Y una hembra de otro género aprendió a contestar bien",
      },
      {
        b: "parrafo",
        texto:
          "Aquí llega el problema evidente de cualquier sistema basado en una contraseña: que " +
          "alguien la averigüe.",
      },
      {
        b: "parrafo",
        texto:
          "Las hembras del género <em>Photuris</em> han aprendido a imitar la respuesta de las " +
          "hembras del género <em>Photinus</em>, reproduciendo con precisión el retardo " +
          "característico de la especie a la que quieren engañar. El macho de <em>Photinus</em> " +
          "recibe la contraseña correcta, concluye que ahí abajo hay una hembra receptiva de su " +
          "especie y desciende. Y lo que se encuentra es una depredadora de otro género, más " +
          "grande, que se lo come.",
      },
      {
        b: "parrafo",
        texto:
          "Por eso se las conoce como las <strong>femmes fatales</strong> de las luciérnagas. " +
          "Pero la parte verdaderamente interesante no es la emboscada, sino el motivo, que no es " +
          "simplemente alimentarse.",
      },
      {
        b: "parrafo",
        texto:
          "En 1997, un equipo de la Universidad Cornell dirigido por Thomas Eisner publicó en las " +
          "actas de la Academia Nacional de Ciencias de Estados Unidos qué está buscando " +
          "realmente esa hembra. Los machos de <em>Photinus</em> llevan en la sangre unos " +
          "esteroides defensivos llamados <strong>lucibufaginas</strong>, que los hacen " +
          "desagradables para sus depredadores. Las <em>Photuris</em> no saben fabricar esa " +
          "sustancia. Y la obtienen comiéndose a los machos que han engañado.",
      },
      {
        b: "parrafo",
        texto:
          "Los investigadores lo comprobaron de la forma más directa: una <em>Photuris</em> sin " +
          "lucibufaginas en el cuerpo, ofrecida a una araña, es devorada; una que las ha " +
          "adquirido comiéndose a un <em>Photinus</em> es rechazada.",
      },
      {
        b: "parrafo",
        texto:
          "Piensa en la cadena completa, porque tiene varios pisos. Un macho emite una contraseña " +
          "luminosa para reproducirse. Una hembra de otro género ha descifrado esa contraseña y " +
          "la responde correctamente. El macho acude, es devorado, y con él se transfiere una " +
          "defensa química que la depredadora no sabe sintetizar y que a partir de ese momento la " +
          "protege de las arañas. Está robando a la vez la señal, la vida y la armadura.",
      },
      {
        b: "rayo",
        texto:
          "La <em>Photuris</em> no imita la contraseña solo para comer. Come para robar el veneno " +
          "defensivo que ella no sabe fabricar, y que la salva de las arañas.",
      },
    ],
  },
  {
    id: "por-que-cambia-de-color-un-camaleon",
    titulo: "Por qué cambia de color un camaleón",
    categoria: "Naturaleza",
    color: "var(--ochre)",
    /* Serie «por-que-cambia-de-color-un-camaleon», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un camaleón no cambia de color para esconderse» */
    encargo: "Un camaleón no cambia de color para esconderse",
    fotos: [
      {
        local: p_por_que_cambia_de_color_un_camaleon,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un camaleón no cambia de color para esconderse",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El cambio de color es un mensaje dirigido a otro camaleón",
      },
      {
        b: "parrafo",
        texto:
          "La imagen que todo el mundo tiene es la del animal que se posa sobre una hoja y se " +
          "vuelve verde, o sobre un tronco y se vuelve marrón, para desaparecer. Es la idea que " +
          "ha dado nombre a la palabra «camaleónico», y es equivocada.",
      },
      {
        b: "parrafo",
        texto:
          "El cambio de color señala a otros camaleones cuál es la condición fisiológica y cuáles " +
          "son las intenciones del animal. Es decir, no está hablando con el paisaje: está " +
          "hablando con los de su especie. Un macho que se enciende de amarillos y naranjas ante " +
          "otro macho está diciendo algo muy concreto, y lo que quiere justamente es que se le " +
          "vea.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en que el sentido queda invertido respecto a lo que creíamos. El camuflaje " +
          "sirve para no ser percibido; esto sirve para lo contrario. Un camaleón que cambia de " +
          "color no está intentando desaparecer, está intentando comunicar, y el momento en que " +
          "más colores despliega es precisamente aquel en que menos le interesa pasar " +
          "inadvertido.",
      },
      {
        b: "rayo",
        texto:
          "El camaleón no se disfraza de su entorno. Se pone de colores para que lo vean, y lo " +
          "hace justo cuando quiere dejar de pasar desapercibido.",
      },
      {
        b: "rotulo",
        texto:
          "El segundo motivo es la temperatura, y ese es puro cálculo",
      },
      {
        b: "parrafo",
        texto:
          "Hay una segunda función, menos vistosa y probablemente más importante en el día a día " +
          "del animal.",
      },
      {
        b: "parrafo",
        texto:
          "Los camaleones cambian de color para regular su temperatura corporal. Cuando necesitan " +
          "calentarse, se oscurecen: un color oscuro absorbe más luz y más calor, y les sube la " +
          "temperatura. Cuando necesitan lo contrario, se aclaran, porque un color claro refleja " +
          "la luz y el calor en lugar de absorberlos.",
      },
      {
        b: "parrafo",
        texto:
          "Es exactamente el mismo principio por el que un coche negro se pone al rojo vivo en " +
          "agosto y uno blanco no. La diferencia es que el camaleón puede elegir de qué color es " +
          "esa mañana.",
      },
      {
        b: "parrafo",
        texto:
          "Y ahí está lo que convierte a este animal en algo distinto de un simple reptil " +
          "vistoso. Es de sangre fría, así que depende del exterior para alcanzar su temperatura " +
          "de funcionamiento, y no tiene forma de generar calor por dentro como hacemos nosotros. " +
          "Lo único que puede controlar es cuánto absorbe. Cambiar de color es su termostato.",
      },
      {
        b: "rayo",
        texto:
          "Las dos funciones reales del cambio de color no tienen nada que ver con esconderse: " +
          "una es hablar y la otra es un termostato. El camuflaje que le dio fama es la única " +
          "cosa para la que no lo usa.",
      },
    ],
  },
  {
    id: "casi-nadie-se-dio-cuenta",
    titulo: "Por qué cayó el Imperio romano",
    categoria: "Historia",
    color: "var(--ochre)",
    /* Serie «por-que-cayo-el-imperio-romano», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «En el año 476 casi nadie se dio cuenta de nada» */
    encargo: "En el año 476 casi nadie se dio cuenta de nada",
    fotos: [
      {
        local: p_casi_nadie_se_dio_cuenta,
        autor: "",
        licencia: "Pexels License",
        alt:
          "En el año 476 casi nadie se dio cuenta de nada",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Lo que ocurrió de verdad fue un motín por un reparto de tierras",
      },
      {
        b: "parrafo",
        texto:
          "La fecha se aprende como si fuera un cataclismo: 476, cae el Imperio romano. Conviene " +
          "mirar de cerca qué pasó exactamente ese año, porque el episodio no se parece nada al " +
          "titular.",
      },
      {
        b: "parrafo",
        texto:
          "Odoacro era un guerrero germano, probablemente de la tribu de los esciros, que llegó a " +
          "Italia hacia el año 470, se alistó en el ejército romano y fue ascendiendo. Es decir: " +
          "un militar de carrera del propio imperio, no un invasor que venía de fuera.",
      },
      {
        b: "parrafo",
        texto:
          "En el verano del 476, el general romano Orestes incumplió una promesa de reparto de " +
          "tierras a sus tropas, y esas tropas se sublevaron. El <strong>23 de agosto</strong> " +
          "proclamaron rey a Odoacro. Cinco días después, Orestes fue capturado y ejecutado. Y a " +
          "continuación Odoacro depuso y mandó al exilio al hijo joven de Orestes, que resultaba " +
          "ser el emperador.",
      },
      {
        b: "parrafo",
        texto:
          "Visto así, no es la caída de una civilización. Es un motín militar por unas tierras " +
          "prometidas, del tipo que el imperio llevaba viviendo un siglo largo.",
      },
      {
        b: "rayo",
        texto:
          "El año en que cayó el Imperio romano de Occidente empezó con unos soldados enfadados " +
          "porque su general no les había dado las parcelas que les había prometido.",
      },
      {
        b: "rotulo",
        texto:
          "El emperador destronado no era ni siquiera un emperador reconocido",
      },
      {
        b: "parrafo",
        texto:
          "El nombre del último emperador de Occidente es tan redondo que parece inventado: " +
          "Rómulo Augústulo, el que junta al fundador de Roma con el primer emperador, en " +
          "diminutivo. La realidad detrás del nombre es bastante menos solemne.",
      },
      {
        b: "parrafo",
        texto:
          "Rómulo Augústulo era un chaval al que su propio padre, Orestes, había sentado en el " +
          "trono. En Constantinopla, el emperador Zenón nunca lo reconoció: para el Oriente, el " +
          "emperador legítimo de Occidente seguía siendo Julio Nepote, al que Zenón respaldaba. " +
          "Cuando Odoacro depuso al muchacho, estaba quitando de en medio a alguien que para " +
          "media administración imperial no ocupaba ningún cargo.",
      },
      {
        b: "parrafo",
        texto:
          "Y lo que hizo Odoacro después es la clave del asunto. No se proclamó emperador ni " +
          "rompió con Roma. Se hizo llamar rey, reconociendo de forma nominal la autoridad de " +
          "Zenón en Constantinopla, y Zenón le concedió el rango de patricio. El Senado siguió " +
          "reuniéndose. La administración siguió funcionando. Las leyes siguieron siendo romanas.",
      },
      {
        b: "parrafo",
        texto:
          "¿Y por qué entonces nadie vivió aquello como el fin de una civilización? Es simple: " +
          "<strong>desde dentro no parecía un final</strong>. Parecía otro general poniendo y " +
          "quitando emperadores, que era lo que llevaba pasando cincuenta años seguidos. No hubo " +
          "ninguna crónica de la época anunciando que Roma acababa de terminarse, porque nadie lo " +
          "pensó.",
      },
      {
        b: "rayo",
        texto:
          "Odoacro no acabó con el imperio: se colocó dentro de él, con permiso nominal de " +
          "Constantinopla y un título que el propio emperador le concedió.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? A ese hijo de Orestes se le conoce como Augústulo, «augustito», y el " +
          "diminutivo no era su nombre: era una burla que le pusieron por su edad y por lo poco " +
          "que pintaba. El último emperador de Roma pasó a la historia con un mote.",
      },
    ],
  },
  {
    id: "no-crecen-la-piel-se-retira",
    titulo: "Por qué crecen las uñas después de morir",
    categoria: "Cuerpo humano",
    color: "var(--ochre)",
    /* Serie «por-que-crecen-las-unas-despues-de-morir», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Las uñas no siguen creciendo después de morir» */
    encargo: "Las uñas no siguen creciendo después de morir",
    fotos: [
      {
        local: p_no_crecen_la_piel_se_retira,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Las uñas no siguen creciendo después de morir",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Lo que crece no es la uña: lo que se encoge es la piel",
      },
      {
        b: "parrafo",
        texto:
          "Es de las creencias más repetidas que existen sobre el cuerpo, y tiene además el punto " +
          "macabro que garantiza que se cuente en cualquier sobremesa: que después de morir, el " +
          "pelo y las uñas siguen creciendo un tiempo. Se dice con la seguridad de quien repite " +
          "un dato médico, y suele venir acompañada de la imagen de un cadáver con las uñas " +
          "largas.",
      },
      {
        b: "parrafo",
        texto:
          "No ocurre. Ni el pelo ni las uñas crecen un milímetro después de la muerte, y la razón " +
          "es de una lógica bastante básica. Una uña no es un mineral que se deposite solo: crece " +
          "porque hay células dividiéndose en la matriz, debajo de la piel, y esas células " +
          "necesitan glucosa para funcionar, además de una regulación hormonal que coordina todo " +
          "el proceso. Al morir el organismo, no llega glucosa, no hay circulación y no hay " +
          "señales hormonales. Las células dejan de dividirse en cuestión de poco tiempo, y sin " +
          "división no hay uña nueva. Lo mismo con el folículo del pelo.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que sí pasa, y es lo que la gente ve, es otra cosa completamente distinta. El " +
          "cuerpo pierde agua deprisa, y al deshidratarse la piel se contrae y se retira. Al " +
          "retraerse alrededor del dedo, deja al descubierto una parte de la uña que antes " +
          "quedaba oculta bajo el pliegue. En la cara ocurre igual: la piel se encoge, el pelo " +
          "que estaba dentro del folículo queda más expuesto y aparece una barba de dos días que " +
          "no existía.",
      },
      {
        b: "parrafo",
        texto:
          "Es exactamente la misma ilusión que hace parecer más largos los dientes de una persona " +
          "muy mayor. No le han crecido los dientes: se le han retraído las encías. Aquí es lo " +
          "mismo, acelerado y en otro sitio.",
      },
      {
        b: "rayo",
        texto:
          "No es que la uña avance. Es que la piel se retira y deja a la vista lo que ya estaba " +
          "ahí.",
      },
      {
        b: "rotulo",
        texto:
          "Un dato falso que se sostiene sobre buena literatura",
      },
      {
        b: "parrafo",
        texto:
          "Merece la pena preguntarse por qué una creencia tan fácil de desmontar ha llegado " +
          "hasta aquí, y en este caso se puede rastrear parte del camino.",
      },
      {
        b: "parrafo",
        texto:
          "Uno de los responsables es un pasaje muy conocido de <em>Sin novedad en el " +
          "frente</em>, la novela de Erich Maria Remarque publicada en 1929, donde el narrador " +
          "imagina las uñas de un amigo muerto siguiendo su crecimiento bajo tierra. Es una " +
          "imagen literaria potentísima, de esas que se quedan grabadas, y millones de lectores " +
          "la recibieron como si fuera información y no como lo que era. Después la repitieron " +
          "cómicos, guionistas y conversaciones de sobremesa hasta convertirla en un lugar común.",
      },
      {
        b: "parrafo",
        texto:
          "Y funciona tan bien porque tiene el mejor aval posible: hay quien lo ha visto. " +
          "Cualquiera que haya estado presente en una exhumación, o simplemente haya velado un " +
          "cuerpo, puede confirmar que las uñas se ven más largas. La observación es cierta. Lo " +
          "que está mal es la explicación que se le puso encima, que era la única que se le " +
          "ocurría a alguien sin saber que la piel se contrae al deshidratarse.",
      },
      {
        b: "parrafo",
        texto:
          "Ese es el patrón que se repite en casi todos los mitos de esta clase, y merece la pena " +
          "tenerlo a mano: rara vez la gente se inventa lo que ve. Lo que se inventa es el " +
          "porqué.",
      },
      {
        b: "rayo",
        texto:
          "Nadie mintió sobre lo que veía. Las uñas se ven más largas de verdad. Lo inventado fue " +
          "el motivo.",
      },
    ],
  },
  {
    id: "una-burbuja-formandose",
    titulo: "Por qué crujen los nudillos",
    categoria: "Cuerpo humano",
    color: "var(--plum)",
    /* Serie «por-que-crujen-los-nudillos», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El ruido no es una burbuja reventando: es una formándose» */
    encargo: "El ruido no es una burbuja reventando: es una formándose",
    fotos: [
      {
        local: p_una_burbuja_formandose,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El ruido no es una burbuja reventando: es una formándose",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Cuarenta años discutiendo un sonido que oye todo el mundo",
      },
      {
        b: "parrafo",
        texto:
          "Dentro de cada articulación de los dedos hay una cápsula cerrada con un líquido " +
          "viscoso, el líquido sinovial, que la lubrica. En ese líquido hay gases disueltos, " +
          "sobre todo dióxido de carbono, igual que hay gas disuelto en una botella de agua con " +
          "gas sin abrir. Y cuando tiras del dedo, la articulación se separa de golpe, la presión " +
          "ahí dentro cae y ese gas deja de poder seguir disuelto. Hasta ahí, acuerdo general " +
          "desde hace décadas.",
      },
      {
        b: "parrafo",
        texto:
          "La discusión estaba en el paso siguiente, que es el que produce el ruido. La " +
          "explicación clásica, que se propuso en 1971 y fue la aceptada durante más de cuarenta " +
          "años, decía que el gas forma una burbuja y que el chasquido es esa burbuja " +
          "<strong>colapsando</strong>, reventando hacia dentro cuando la presión se recupera. " +
          "Sonaba lógico y encajaba con la intuición de que un crujido es algo que se rompe.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que faltaba era mirarlo. Y mirarlo es complicado, porque el fenómeno dura " +
          "milisegundos y ocurre dentro de una cápsula cerrada de pocos milímetros.",
      },
      {
        b: "rayo",
        texto:
          "Durante cuarenta años se dio por hecho que el chasquido era algo reventando. Nadie lo " +
          "había visto ocurrir.",
      },
      {
        b: "rotulo",
        texto:
          "Lo grabaron dentro de un resonador, dedo a dedo",
      },
      {
        b: "parrafo",
        texto:
          "En 2015, un equipo dirigido por Greg Kawchuk lo resolvió de la manera más directa " +
          "posible: metieron dedos en una máquina de resonancia magnética y los estiraron con un " +
          "cable hasta que crujían, grabando en tiempo real. Analizaron diez articulaciones " +
          "metacarpofalángicas, capturando imágenes a algo más de tres fotogramas por segundo, " +
          "con imágenes fijas antes y después.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que vieron contradice la explicación clásica. En el instante exacto del chasquido " +
          "aparece una cavidad oscura dentro de la articulación, y aparece <strong>a la vez que " +
          "el sonido</strong>, no después. Y el detalle definitivo: esa cavidad no se colapsa. " +
          "Sigue ahí después del ruido, perfectamente visible mientras se mantenga la tracción " +
          "sobre el dedo. Si el sonido fuera el colapso de la burbuja, la burbuja no debería " +
          "estar ahí un segundo después. Está.",
      },
      {
        b: "parrafo",
        texto:
          "La conclusión de los autores es que el crujido corresponde a la " +
          "<strong>formación</strong> de la cavidad y no a su desaparición. Las superficies de la " +
          "articulación resisten separarse, se mantienen pegadas por el propio líquido hasta un " +
          "punto crítico, y entonces ceden de golpe: esa separación brusca genera la cavidad de " +
          "gas y el ruido a la vez. El fenómeno tiene nombre, tribonucleación, y ocurre también " +
          "en otros sistemas donde dos superficies lubricadas se separan de repente.",
      },
      {
        b: "parrafo",
        texto:
          "Eso explica de paso algo que cualquiera ha comprobado sin saber por qué: que no puedes " +
          "hacer crujir el mismo nudillo dos veces seguidas. Hay un periodo de unos veinte " +
          "minutos en que la articulación no vuelve a sonar. Es el tiempo que necesita el gas " +
          "para volver a disolverse en el líquido y que las superficies vuelvan a quedar en " +
          "contacto estrecho. Hasta que no se recarga, no hay ruido posible.",
      },
      {
        b: "rayo",
        texto:
          "La cavidad sigue ahí después del chasquido. Si el sonido fuera su colapso, no debería " +
          "quedar nada que ver.",
      },
    ],
  },
  {
    id: "hay-un-sensor-dentro-del-diente",
    titulo: "Por qué duele el frío en un diente",
    categoria: "Cuerpo humano",
    color: "var(--slate)",
    /* Serie «por-que-duele-el-frio-en-un-diente», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Hay un sensor de frío dentro de tus dientes» */
    encargo: "Hay un sensor de frío dentro de tus dientes",
    fotos: [
      {
        local: p_hay_un_sensor_dentro_del_diente,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Hay un sensor de frío dentro de tus dientes",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Durante sesenta años la explicación fue el movimiento de un líquido",
      },
      {
        b: "parrafo",
        texto:
          "Que un sorbo de agua helada te dispare un latigazo en una muela es una experiencia tan " +
          "común que uno da por hecho que está resuelta desde siempre. No lo estaba. Hasta 2021 " +
          "no se supo cómo funciona, y la explicación que se manejaba mientras tanto era muy " +
          "distinta de lo que uno imaginaría.",
      },
      {
        b: "parrafo",
        texto:
          "La versión clásica se llama <strong>teoría hidrodinámica</strong> y viene de los años " +
          "sesenta. La dentina, la capa que hay bajo el esmalte, no es maciza: está atravesada " +
          "por miles de conductos microscópicos llenos de líquido, que van desde la superficie " +
          "hasta la pulpa, donde están los nervios. La idea era que el frío hace que ese líquido " +
          "se mueva dentro de los túbulos, y que ese movimiento arrastra y deforma mecánicamente " +
          "las terminaciones nerviosas del interior, que responden con dolor. Es decir, el diente " +
          "no notaría el frío: notaría un empujón provocado por el frío.",
      },
      {
        b: "parrafo",
        texto:
          "Encajaba bien con lo que se observa. Explica por qué duele más cuando el esmalte está " +
          "desgastado o hay caries, porque entonces los túbulos quedan abiertos al exterior. " +
          "Explica por qué también molesta el aire frío, o el azúcar, que altera el líquido por " +
          "ósmosis. Y explica por qué el dolor es tan inmediato y tan agudo. Durante sesenta años " +
          "fue la respuesta, aunque nadie hubiera encontrado el mecanismo molecular que la " +
          "sostuviera.",
      },
      {
        b: "rayo",
        texto:
          "La explicación clásica decía que el diente no siente el frío: siente un líquido " +
          "moviéndose por dentro por culpa del frío.",
      },
      {
        b: "rotulo",
        texto:
          "Y en 2021 encontraron el detector",
      },
      {
        b: "parrafo",
        texto:
          "En marzo de 2021, un equipo dirigido por Katharina Zimmermann, en la Universidad de " +
          "Erlangen-Núremberg, publicó en <em>Science Advances</em> algo que nadie había buscado " +
          "en ese sitio. Fueron a mirar los <strong>odontoblastos</strong>, unas células que " +
          "forman una capa entre la pulpa y la dentina y cuyo trabajo conocido era fabricar " +
          "dentina. Células de construcción, no de sensores.",
      },
      {
        b: "parrafo",
        texto:
          "Y resulta que llevan encima un canal iónico llamado <strong>TRPC5</strong> que " +
          "responde al frío. Cuando la temperatura baja, ese canal se abre, la célula se activa y " +
          "dispara una señal que llega a los nervios de la pulpa. O sea que en el diente hay un " +
          "detector de frío de verdad, molecular y específico, en unas células que se creían " +
          "dedicadas a otra cosa.",
      },
      {
        b: "parrafo",
        texto:
          "Lo comprobaron por varios lados. En ratones sin ese canal, la sensibilidad al frío en " +
          "los dientes desaparecía, y en dientes con la dentina expuesta la respuesta era mucho " +
          "mayor, que es exactamente el cuadro clínico de un diente sensible.",
      },
      {
        b: "parrafo",
        texto:
          "Conviene decir cómo queda la teoría antigua, porque no ha caído. Los propios autores " +
          "lo dicen con claridad: el hallazgo no descarta el movimiento de líquido en los " +
          "túbulos, sino que añade un mecanismo que hasta ahora faltaba. Lo más probable es que " +
          "las dos cosas ocurran a la vez y se refuercen.",
      },
      {
        b: "parrafo",
        texto:
          "Y hay un detalle que dice mucho sobre lo poco que sabemos de nuestro propio cuerpo. " +
          "Los dientes son de las partes que más nos duelen, la odontología es una profesión " +
          "antiquísima y estas células estaban perfectamente descritas al microscopio desde hace " +
          "más de un siglo. Nadie había pensado en preguntarles si además sentían.",
      },
      {
        b: "rayo",
        texto:
          "Unas células que se creían dedicadas a fabricar dentina llevaban encima un detector de " +
          "frío, y nadie lo había mirado.",
      },
    ],
  },
  {
    id: "el-dolor-no-esta-donde-lo-notas",
    titulo: "Por qué duele la cabeza al comer helado",
    categoria: "Cuerpo humano",
    color: "var(--plum)",
    /* Serie «por-que-duele-la-cabeza-al-comer-helado», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El dolor del helado no está donde lo notas» */
    encargo: "El dolor del helado no está donde lo notas",
    fotos: [
      {
        local: p_el_dolor_no_esta_donde_lo_notas,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El dolor del helado no está donde lo notas",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Te duele la frente y el problema está en el paladar",
      },
      {
        b: "parrafo",
        texto:
          "El fenómeno es tan universal que tiene nombre médico, y uno de los mejores que " +
          "existen: <strong>ganglioneuralgia esfenopalatina</strong>. Comes un helado demasiado " +
          "rápido, das un trago largo de granizado, y en cuestión de segundos te llega un dolor " +
          "intenso justo detrás de la frente o en las sienes, que dura entre unos segundos y un " +
          "minuto y se va tan rápido como vino.",
      },
      {
        b: "parrafo",
        texto:
          "Lo primero que hay que deshacer es la localización, porque es completamente engañosa. " +
          "En tu frente no ha pasado absolutamente nada. Ahí no ha llegado nada frío, no hay " +
          "ningún tejido dañado y no hay ningún nervio quejándose de su propia situación. El " +
          "problema entero está ocurriendo unos centímetros más abajo, en el " +
          "<strong>paladar</strong>, que es lo que ha tocado el helado.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que sientes es lo que en medicina se llama <strong>dolor referido</strong>: una " +
          "señal que se genera en un sitio y que el cerebro coloca en otro. Ocurre porque la " +
          "información de una zona amplia de la cara viaja por el nervio trigémino, que recoge lo " +
          "que pasa en el paladar y también lo que pasa en la frente y las sienes, y todo eso " +
          "llega a un mismo destino. Cuando le entra una señal de alarma brutal desde una zona " +
          "que casi nunca protesta, el cerebro se equivoca al asignarle un origen y la coloca en " +
          "el territorio del que sí recibe quejas habitualmente. Es el mismo motivo por el que un " +
          "infarto se siente en el brazo izquierdo.",
      },
      {
        b: "rayo",
        texto:
          "En tu frente no ha ocurrido nada. Todo pasa en el paladar, y el cerebro se confunde de " +
          "sitio al colocar el dolor.",
      },
      {
        b: "rotulo",
        texto:
          "Y lo que ocurre en el paladar es un vaivén de vasos",
      },
      {
        b: "parrafo",
        texto:
          "¿Y qué pasa exactamente ahí arriba? El frío extremo y repentino provoca una reacción " +
          "vascular en dos tiempos.",
      },
      {
        b: "parrafo",
        texto:
          "Primero, los vasos sanguíneos de la zona se contraen de golpe. Es la respuesta normal " +
          "al frío en cualquier parte del cuerpo: cerrar el grifo para no perder calor. Y a " +
          "continuación, en cuanto el estímulo frío pasa y el tejido empieza a recuperar " +
          "temperatura, esos mismos vasos se dilatan bruscamente, con un rebote más grande de lo " +
          "que estaban antes. Ese vaivén rápido, ocurriendo justo al lado de terminaciones " +
          "nerviosas muy sensibles, es lo que dispara la señal.",
      },
      {
        b: "parrafo",
        texto:
          "Esto se ha medido, y esa es la parte que lo eleva de anécdota a fisiología. Usando " +
          "ecografía Doppler transcraneal, que permite ver el flujo de sangre en las arterias del " +
          "interior del cráneo en tiempo real, el investigador Jorge Serrador observó un aumento " +
          "brusco y muy marcado del flujo en la <strong>arteria cerebral anterior</strong> " +
          "coincidiendo con la aparición del dolor. Y el dato que cierra el argumento: cuando esa " +
          "arteria volvía a contraerse, el dolor desaparecía. Aparece con la dilatación y se va " +
          "con la constricción, en tiempo real.",
      },
      {
        b: "parrafo",
        texto:
          "De ahí sale también el remedio que sí funciona, y que ahora se entiende: presionar la " +
          "lengua contra el paladar o beber algo templado. No estás distrayéndote del dolor, " +
          "estás calentando la zona y devolviendo los vasos a su estado normal antes de que se " +
          "produzca el rebote.",
      },
      {
        b: "rayo",
        texto:
          "Se ve en el Doppler: el dolor aparece cuando la arteria se dilata y desaparece cuando " +
          "vuelve a cerrarse.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Ese trabajo no se hizo por curiosidad sobre los helados. Las personas " +
          "que sufren migrañas son más propensas a este dolor, y la sospecha es que parte de lo " +
          "que ocurre aquí se parece a lo que ocurre en una migraña. La gracia es que este se " +
          "puede provocar a voluntad en un laboratorio, en segundos y sin dañar a nadie, y eso lo " +
          "convierte en un modelo utilísimo para estudiar un dolor de cabeza que de otro modo hay " +
          "que esperar a que llegue.",
      },
    ],
  },
  {
    id: "no-es-la-deshidratacion",
    titulo: "Por qué duele la resaca",
    categoria: "Cuerpo humano",
    color: "var(--slate)",
    /* Serie «por-que-duele-la-resaca», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La resaca no es deshidratación» */
    encargo: "La resaca no es deshidratación",
    fotos: [
      {
        local: p_no_es_la_deshidratacion,
        autor: "",
        licencia: "Pexels License",
        alt:
          "La resaca no es deshidratación",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La explicación de siempre describe un síntoma, no la causa",
      },
      {
        b: "parrafo",
        texto:
          "Pregunta por ahí qué es una resaca y te contestarán todos lo mismo: deshidratación. El " +
          "alcohol te deshidrata, por eso te levantas con la boca seca y con dolor de cabeza, y " +
          "por eso hay que beber agua antes de acostarse. Es tan aceptado que ni se discute.",
      },
      {
        b: "parrafo",
        texto:
          "La primera parte es cierta. El alcohol inhibe la hormona antidiurética, que es la que " +
          "le dice al riñón que retenga agua, y al inhibirla orinas bastante más de lo que has " +
          "bebido. Sales del bar con menos líquido del que tenías, y de ahí la sed y la boca " +
          "pastosa de la mañana siguiente. Hasta ahí, ningún problema.",
      },
      {
        b: "parrafo",
        texto:
          "El problema es el salto siguiente, que es dar por hecho que esa pérdida de líquido " +
          "explica el resto del cuadro. Y no lo explica. Los intentos de relacionar la intensidad " +
          "de una resaca con el grado de deshidratación de la persona no encuentran gran cosa: " +
          "hay quien está bastante deshidratado y se siente razonablemente bien, y quien lo está " +
          "poco y se encuentra fatal. Y el remedio que se deduce de la teoría tampoco funciona " +
          "como debería: beber agua alivia la sed y algo del dolor de cabeza, pero no evita la " +
          "resaca. Si la deshidratación fuera la causa, rellenar el depósito tendría que " +
          "resolverla, y no la resuelve.",
      },
      {
        b: "rayo",
        texto:
          "Beber agua quita la sed y no quita la resaca. Si la deshidratación fuera la causa, " +
          "rellenar el depósito bastaría.",
      },
      {
        b: "rotulo",
        texto:
          "Lo que hay debajo es una intoxicación y una inflamación",
      },
      {
        b: "parrafo",
        texto:
          "Si no es el agua que falta, ¿qué es? La explicación que hoy se maneja tiene dos patas " +
          "y ninguna tiene que ver con la hidratación.",
      },
      {
        b: "parrafo",
        texto:
          "La primera es <strong>acetaldehído</strong>, que es en lo que tu hígado convierte el " +
          "alcohol en el primer paso de su procesamiento. Y ahí está el detalle importante: el " +
          "acetaldehído es bastante más tóxico que el propio alcohol. Es una molécula reactiva " +
          "que ataca proteínas y genera estrés oxidativo, y el hígado tiene que darle un segundo " +
          "empujón para convertirla en acetato, que ya es inofensivo. Mientras el primer paso va " +
          "más rápido que el segundo, ese compuesto se acumula.",
      },
      {
        b: "parrafo",
        texto:
          "La segunda es la <strong>inflamación</strong>. Durante una resaca se miden aumentos " +
          "claros de citocinas, que son las moléculas con las que el sistema inmunitario coordina " +
          "una respuesta inflamatoria. Y ahí está la clave para reconocer lo que te pasa: dolor " +
          "de cabeza, malestar general, náuseas, sensibilidad a la luz y al ruido, cansancio y " +
          "ganas de no ver a nadie. Esa lista no es la de una deshidratación. Es la de estar " +
          "incubando una gripe, porque son los mismos mensajeros químicos produciendo los mismos " +
          "efectos.",
      },
      {
        b: "parrafo",
        texto:
          "Merece la pena quedarse con eso, porque cambia la manera de entender la mañana " +
          "siguiente. No estás seco: estás intoxicado e inflamado. La sed es real, pero es el " +
          "síntoma más visible y el menos importante de todos los que tienes encima.",
      },
      {
        b: "rayo",
        texto:
          "Los síntomas no son los de estar seco: son los de estar incubando una gripe. Y es " +
          "literalmente la misma maquinaria química.",
      },
    ],
  },
  {
    id: "no-es-el-acido-lactico",
    titulo: "Por qué duelen las agujetas",
    categoria: "Cuerpo humano",
    color: "var(--clay)",
    /* Serie «por-que-duelen-las-agujetas», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Las agujetas no son ácido láctico, y basta con mirar el reloj» */
    encargo: "Las agujetas no son ácido láctico, y basta con mirar el reloj",
    fotos: [
      {
        local: p_no_es_el_acido_lactico,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Las agujetas no son ácido láctico, y basta con mirar el reloj",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El desmentido no necesita laboratorio: necesita un reloj",
      },
      {
        b: "parrafo",
        texto:
          "De todos los mitos que se siguen enseñando en clase de educación física, este es " +
          "probablemente el más resistente. Las agujetas, dice la versión popular, son ácido " +
          "láctico acumulado en el músculo después del esfuerzo. Y en España hay además una " +
          "variante todavía más gráfica: que ese ácido cristaliza formando agujitas microscópicas " +
          "que arañan el músculo por dentro, de donde vendría el nombre. Hay incluso un remedio " +
          "asociado, el del vaso de agua con azúcar, que supuestamente disolvería esos cristales.",
      },
      {
        b: "parrafo",
        texto:
          "Para desmontarlo no hace falta ningún experimento sofisticado. Basta con poner las dos " +
          "cosas en una línea de tiempo. El lactato que produce tu músculo durante un esfuerzo " +
          "intenso se aclara de la sangre en cuestión de minutos, y como mucho de una hora tras " +
          "terminar. Las agujetas, en cambio, ni siquiera han empezado en ese momento: aparecen " +
          "al día siguiente, alcanzan su punto máximo entre las veinticuatro y las setenta y dos " +
          "horas, y pueden durar varios días.",
      },
      {
        b: "parrafo",
        texto:
          "O sea que cuando empieza el dolor hace muchísimo que no queda lactato ahí. Y cuando " +
          "había lactato de sobra, justo al terminar el ejercicio, no dolía nada. La supuesta " +
          "causa desaparece antes de que exista el efecto, y eso, en cualquier investigación, es " +
          "motivo suficiente para descartar a un sospechoso.",
      },
      {
        b: "parrafo",
        texto:
          "Lo de los cristales tiene todavía menos recorrido: el lactato es muy soluble y a la " +
          "temperatura y el pH de un músculo vivo no cristaliza. No hay agujas. Y el azúcar del " +
          "vaso de agua no llega a disolver nada porque no hay nada que disolver.",
      },
      {
        b: "rayo",
        texto:
          "El lactato se ha ido en menos de una hora. Las agujetas llegan al día siguiente. La " +
          "causa desaparece antes de que aparezca el efecto.",
      },
      {
        b: "rotulo",
        texto:
          "De dónde salió la idea, que también tiene su historia",
      },
      {
        b: "parrafo",
        texto:
          "Un mito tan extendido casi siempre tiene un origen respetable, y este lo tiene. A " +
          "principios del siglo XX, el fisiólogo británico Archibald Hill y el alemán Otto " +
          "Meyerhof estudiaron la relación entre el ácido láctico y la contracción muscular, " +
          "trabajando con músculo de rana aislado. Sus experimentos eran buenos y les valieron un " +
          "Nobel; el problema es lo que se hizo después con ellos.",
      },
      {
        b: "parrafo",
        texto:
          "Aquellos resultados describían el comportamiento de un músculo de anfibio separado del " +
          "animal, y se extrapolaron sin más a un mamífero vivo y entero, que es un sistema con " +
          "circulación, con hígado, con corazón y con una capacidad de retirar y reutilizar " +
          "lactato que un músculo aislado en una cubeta no tiene. Y de ahí se dio un segundo " +
          "salto todavía más largo: pasar de «el lactato tiene que ver con la fatiga durante el " +
          "esfuerzo» a «el lactato causa el dolor que aparece dos días después». Son dos " +
          "afirmaciones distintas y solo la primera tenía algo detrás.",
      },
      {
        b: "parrafo",
        texto:
          "Esa explicación fue la aceptada en los círculos científicos hasta los años setenta, y " +
          "el mecanismo real de las agujetas no empezó a perfilarse hasta los ochenta. Es decir, " +
          "no estamos ante una tontería popular: estamos ante una hipótesis científica seria que " +
          "se quedó anticuada y que la cultura general no se ha enterado de jubilar. Cincuenta " +
          "años después sigue en los gimnasios.",
      },
      {
        b: "rayo",
        texto:
          "No es una tontería popular. Es una hipótesis científica de hace un siglo que se jubiló " +
          "en los años setenta y que nadie avisó de retirar.",
      },
    ],
  },
  {
    id: "por-que-el-aceite-de-oliva-es-tan-saludable",
    titulo: "Por qué el aceite de oliva es tan sano",
    categoria: "Cocina",
    color: "var(--plum)",
    /* Serie «por-que-el-aceite-de-oliva-es-tan-saludable», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El mérito no está en la grasa, sino en lo que pica» */
    encargo: "El mérito no está en la grasa, sino en lo que pica",
    fotos: [
      {
        local: p_por_que_el_aceite_de_oliva_es_tan_saludable,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El mérito no está en la grasa, sino en lo que pica",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Lo que casi todo el mundo cree, y lo que dice la etiqueta europea",
      },
      {
        b: "parrafo",
        texto:
          "Quizá pienses que el aceite de oliva es sano por su grasa, porque es lo que se repite " +
          "desde hace cuarenta años: grasa monoinsaturada, ácido oleico, bueno para el corazón. " +
          "Es verdad a medias, y la mitad que falta resulta ser la interesante.",
      },
      {
        b: "parrafo",
        texto:
          "Hay una comparación sencilla que lo deja claro, y no hace falta salir del aceite de " +
          "oliva para hacerla. El refinado se obtiene tratando aceites que no llegan a virgen " +
          "extra, y en ese proceso se les quita el sabor, el color y, de paso, los polifenoles. " +
          "La grasa se queda prácticamente donde estaba. Lo que desaparece es todo lo demás.",
      },
      {
        b: "parrafo",
        texto:
          "Si el mérito estuviera en la grasa, refinar un aceite no cambiaría gran cosa. Pero la " +
          "única declaración de salud que la Unión Europea autoriza para el aceite de oliva no " +
          "habla de grasa: habla de polifenoles, y solo se puede escribir en la botella si el " +
          "aceite lleva al menos 5 miligramos de hidroxitirosol y derivados por cada 20 gramos.",
      },
      {
        b: "rayo",
        texto:
          "La parte del aceite de oliva que comparte con cualquier aceite barato es la grasa. La " +
          "parte que lo distingue es la que se destruye al refinarlo.",
      },
      {
        b: "rotulo",
        texto:
          "Los polifenoles son exactamente lo que amarga y lo que pica",
      },
      {
        b: "parrafo",
        texto:
          "¿Y qué son esos polifenoles? Aquí conviene ir al revés de lo habitual y empezar por la " +
          "sensación en vez de por el nombre. Cuando un buen aceite de oliva te raspa la garganta " +
          "al tragarlo, o cuando amarga en el paladar, no estás notando un defecto del aceite. " +
          "Estás notando directamente los compuestos de los que habla la etiqueta.",
      },
      {
        b: "parrafo",
        texto:
          "El amargor viene sobre todo de la <strong>oleuropeína</strong> y el picor de garganta " +
          "del <strong>oleocantal</strong>. Son dos de los polifenoles que la aceituna fabrica " +
          "para defenderse del ataque de insectos y hongos, que pasan al aceite cuando se prensa " +
          "la aceituna entera, y que el refinado elimina precisamente porque el objetivo del " +
          "refinado es quitar sabores fuertes.",
      },
      {
        b: "parrafo",
        texto:
          "Esto le da la vuelta a algo que mucha gente asume en la cocina sin pensarlo demasiado. " +
          "Un aceite de oliva suave no es un aceite más fino ni más cuidado: es un aceite con " +
          "menos de aquello por lo que la norma europea lo distingue de los demás.",
      },
      {
        b: "rayo",
        texto:
          "En el aceite de oliva el amargor y el picor no son defectos. Son la señal de lo que el " +
          "refinado se lleva por delante.",
      },
    ],
  },
  {
    id: "el-chaval-y-el-helado",
    titulo: "Por qué el agua caliente se congela antes",
    categoria: "Ciencia",
    color: "var(--teal)",
    /* Serie «por-que-el-agua-caliente-se-congela-antes», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un estudiante al que su profesor humilló tiene su nombre en la física» */
    encargo: "Un estudiante al que su profesor humilló tiene su nombre en la física",
    fotos: [
      {
        local: p_el_chaval_y_el_helado,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un estudiante al que su profesor humilló tiene su nombre en la física",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Se saltó un paso porque tenía prisa por coger sitio",
      },
      {
        b: "parrafo",
        texto:
          "En 1963, en un internado de Tanzania, un chaval llamado Erasto Mpemba estaba haciendo " +
          "helado casero en clase de cocina. La receta era sencilla: hervir leche con azúcar, " +
          "dejarla enfriar y meterla en el congelador. El problema era que había un solo " +
          "congelador y muchos alumnos, y ese día el sitio se estaba acabando.",
      },
      {
        b: "parrafo",
        texto:
          "Mpemba se saltó el paso de dejar enfriar. Metió su mezcla directamente hirviendo, " +
          "junto a las bandejas de sus compañeros, que habían hecho las cosas bien. Y cuando " +
          "fueron a mirar, la suya se había convertido en helado mientras las demás seguían " +
          "siendo un líquido espeso.",
      },
      {
        b: "parrafo",
        texto:
          "Le preguntó a su profesor de ciencias cómo era posible aquello. La respuesta que " +
          "recibió está registrada y es de esas que a uno le gustaría no haber dado: le dijo que " +
          "eso sería la física de Mpemba, no la física universal. La frase se convirtió en la " +
          "broma de la clase, y a partir de entonces, cada vez que el chaval se equivocaba en " +
          "algo, sus compañeros lo atribuían a las matemáticas de Mpemba o a la física de Mpemba.",
      },
      {
        b: "rayo",
        texto:
          "«Eso será la física de Mpemba, no la física universal». Es lo que le contestó su " +
          "profesor, y hoy el efecto se llama así.",
      },
      {
        b: "rotulo",
        texto:
          "Lo que hizo después es lo que merece contarse",
      },
      {
        b: "parrafo",
        texto:
          "Lo interesante de la historia no es la anécdota del helado, que es una casualidad. Es " +
          "lo que hizo el chico con la burla, que fue exactamente lo contrario de lo que hace " +
          "casi todo el mundo: en vez de dejarlo estar, repitió el experimento. Y no ya con leche " +
          "y azúcar, sino con agua, que era la manera de quitar de en medio los ingredientes y " +
          "quedarse con el fenómeno limpio. Siguió obteniendo el mismo resultado.",
      },
      {
        b: "parrafo",
        texto:
          "Un tiempo después, un físico llamado Denis Osborne visitó el instituto para dar una " +
          "charla, y al terminar Mpemba le hizo la pregunta delante de todos. Y aquí está el " +
          "segundo personaje de la historia, porque Osborne podría haberse reído igual que el " +
          "profesor y no lo hizo: le pareció un asunto interesante, le dijo que no lo sabía y se " +
          "lo llevó al laboratorio de la Universidad de Dar es Salaam para comprobarlo en serio.",
      },
      {
        b: "parrafo",
        texto:
          "En 1969 publicaron juntos un artículo en una revista de enseñanza de la física, " +
          "firmado por los dos, alumno y científico. De ahí viene el nombre con el que el " +
          "fenómeno se conoce en todo el mundo.",
      },
      {
        b: "parrafo",
        texto:
          "Conviene añadir un detalle que le quita solemnidad al asunto y no se la quita al " +
          "chico. La observación no era nueva en absoluto: Aristóteles ya la había recogido, y " +
          "siglos después la mencionaron también Francis Bacon y René Descartes. Llevaba más de " +
          "dos mil años apareciendo y desapareciendo de los textos sin que nadie la resolviera. " +
          "Lo que hizo Mpemba fue devolverla al laboratorio, y lo hizo desde el peor sitio " +
          "posible para que te tomen en serio.",
      },
      {
        b: "rayo",
        texto:
          "Aristóteles ya lo había escrito. Hicieron falta dos mil trescientos años y un " +
          "adolescente al que se rieron para que alguien lo midiera.",
      },
    ],
  },
  {
    id: "el-cafe-no-te-da-energia",
    titulo: "Por qué el café te despierta",
    categoria: "Cuerpo humano",
    color: "var(--teal)",
    /* Serie «por-que-el-cafe-te-despierta», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El café no te da energía: te tapa el cansancio» */
    encargo: "El café no te da energía: te tapa el cansancio",
    fotos: [
      {
        local: p_el_cafe_no_te_da_energia,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El café no te da energía: te tapa el cansancio",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Un poeta le regaló los granos al químico que la encontró",
      },
      {
        b: "parrafo",
        texto:
          "La cafeína la aisló Friedlieb Ferdinand Runge en 1819, y el encargo se lo hizo Goethe. " +
          "La escena está documentada por el propio Runge y es magnífica: el químico, que " +
          "entonces era un desconocido, le demostró al poeta cómo un extracto de belladona " +
          "dilataba la pupila de un gato. Goethe se quedó impresionado, le dio una caja de granos " +
          "de café y le dijo que también podía usarlos en sus investigaciones. Unos meses " +
          "después, Runge había aislado la sustancia.",
      },
      {
        b: "parrafo",
        texto:
          "Doscientos años más tarde es la droga psicoactiva más consumida del planeta, y casi " +
          "todo el mundo se equivoca sobre lo que hace. La creencia general es que aporta " +
          "energía, que es una especie de gasolina que le echas al organismo por la mañana. Y no " +
          "es eso en absoluto: la cafeína no aporta absolutamente nada. Lo que hace es impedir " +
          "que te enteres de lo cansado que estás.",
      },
      {
        b: "parrafo",
        texto:
          "Para entenderlo hay que conocer a la molécula a la que le roba el sitio. Se llama " +
          "<strong>adenosina</strong>, y es un producto del propio funcionamiento de tus " +
          "neuronas: cuanto más rato llevas despierto y más trabaja tu cerebro, más adenosina se " +
          "va acumulando. Esa adenosina se acopla a unos receptores concretos de las neuronas y, " +
          "al hacerlo, las frena. Ese frenado es exactamente la sensación de sueño. La adenosina " +
          "es el contador que lleva la cuenta de cuánto llevas funcionando, y el sueño es la " +
          "factura.",
      },
      {
        b: "parrafo",
        texto:
          "La cafeína se parece lo bastante a la adenosina como para encajar en esos mismos " +
          "receptores, pero no lo bastante como para activarlos. Entra, ocupa el sitio y no hace " +
          "nada, como una llave que entra en la cerradura y no gira. Mientras esté ahí, la " +
          "adenosina que llega no encuentra dónde acoplarse y el freno no se aplica.",
      },
      {
        b: "rayo",
        texto:
          "La cafeína no te acelera. Ocupa el sitio donde tendría que acoplarse la señal de " +
          "sueño, y esa señal no llega.",
      },
      {
        b: "rotulo",
        texto:
          "El cansancio sigue acumulándose detrás de la puerta",
      },
      {
        b: "parrafo",
        texto:
          "Y aquí está la parte que casi nadie tiene en cuenta, que es lo que ocurre con la " +
          "adenosina bloqueada. Porque no desaparece: sigue produciéndose y sigue acumulándose " +
          "todo el rato que dura el efecto, solo que no puede acoplarse a ningún sitio y por " +
          "tanto no la notas.",
      },
      {
        b: "parrafo",
        texto:
          "Cuando el hígado va metabolizando la cafeína y los receptores empiezan a quedarse " +
          "libres, toda esa adenosina acumulada durante horas encuentra sitio de golpe. Y de " +
          "golpe es la expresión exacta: no vuelves al nivel de cansancio que tenías antes del " +
          "café, sino al que te correspondería por todo el tiempo transcurrido, entregado de una " +
          "vez. Eso es el bajón de media tarde, y no es que el café «se gaste»: es la factura que " +
          "se había quedado esperando en el buzón.",
      },
      {
        b: "parrafo",
        texto:
          "Ese es también el motivo por el que un café a última hora sale caro aunque te ayude en " +
          "el momento. La cafeína tiene una vida media de unas cinco horas, lo que significa que " +
          "la mitad de lo que te tomaste a las cuatro de la tarde sigue circulando a las nueve de " +
          "la noche, y una cuarta parte a las dos de la madrugada. No está haciendo nada bueno " +
          "por ti a esas horas; simplemente sigue ocupando receptores.",
      },
      {
        b: "rayo",
        texto:
          "El bajón de la tarde no es que se te acabe el café. Es toda la adenosina que se había " +
          "quedado esperando, entrando a la vez.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Con el consumo habitual, el cerebro responde a ese bloqueo permanente " +
          "fabricando más receptores de adenosina, para compensar. Eso explica las dos cosas que " +
          "le pasan a cualquier cafetero: que cada vez necesite más para notar lo mismo, y que el " +
          "día que no lo toma le duela la cabeza y se sienta hecho polvo. No es que el café le " +
          "siente bien; es que ya solo con él llega a su estado normal.",
      },
    ],
  },
  {
    id: "el-cielo-deberia-ser-violeta",
    titulo: "Por qué el cielo es azul",
    categoria: "Ciencia",
    color: "var(--sage)",
    /* Serie «por-que-el-cielo-es-azul», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Según la física, el cielo debería ser violeta» */
    encargo: "Según la física, el cielo debería ser violeta",
    fotos: [
      {
        local: p_el_cielo_deberia_ser_violeta,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Según la física, el cielo debería ser violeta",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La regla que explica el azul explica demasiado",
      },
      {
        b: "parrafo",
        texto:
          "La explicación estándar de por qué el cielo es azul es correcta y se puede resumir en " +
          "una línea: las moléculas del aire dispersan mucho más las longitudes de onda cortas " +
          "que las largas, así que el azul rebota por todo el cielo mientras el rojo sigue de " +
          "largo. La proporción exacta la fijó lord Rayleigh, y es brutal: la dispersión es " +
          "inversamente proporcional a la cuarta potencia de la longitud de onda. Eso significa " +
          "que una diferencia pequeña en el color se convierte en una diferencia enorme en cuánto " +
          "se dispersa.",
      },
      {
        b: "parrafo",
        texto:
          "El problema aparece en cuanto aplicas esa regla hasta el final, y es una de esas " +
          "objeciones que un niño hace sin esfuerzo y un adulto se salta sin darse cuenta. El " +
          "azul está en torno a los 450 nanómetros. El violeta, en torno a los 400, es decir, " +
          "todavía más corto. Si la regla dice que cuanto más corta es la onda más se dispersa, " +
          "entonces el violeta debería dispersarse aproximadamente una vez y media más que el " +
          "azul. El cielo no debería ser azul: debería ser violeta, y bastante intenso.",
      },
      {
        b: "parrafo",
        texto:
          "Y no lo es. Así que la explicación de manual, siendo cierta, está incompleta, y lo que " +
          "falta no es un detalle: es todo un segundo capítulo.",
      },
      {
        b: "rayo",
        texto:
          "El violeta se dispersa más que el azul. Si la dispersión fuera lo único que cuenta, el " +
          "cielo sería violeta.",
      },
      {
        b: "rotulo",
        texto:
          "Faltan tres cosas, y una de ellas eres tú",
      },
      {
        b: "parrafo",
        texto:
          "La respuesta completa tiene tres piezas, y ninguna está en el aire.",
      },
      {
        b: "parrafo",
        texto:
          "La primera está en el Sol. La luz solar no lleva la misma cantidad de cada color: su " +
          "emisión no es plana, y hay bastante menos violeta que azul saliendo de la estrella. Da " +
          "igual que el violeta se disperse una vez y media mejor si de entrada hay menos violeta " +
          "con el que trabajar. La regla multiplica, pero multiplica sobre lo que hay.",
      },
      {
        b: "parrafo",
        texto:
          "La segunda está en la parte alta de la atmósfera, que absorbe una porción de la luz " +
          "más energética antes de que llegue abajo. Otro mordisco al violeta que ya venía " +
          "escaso.",
      },
      {
        b: "parrafo",
        texto:
          "Y la tercera está en tu ojo, que es la que hace que esto deje de ser un problema de " +
          "física y pase a ser también un problema de percepción. Tu retina no mide longitudes de " +
          "onda: tiene tres tipos de conos con sensibilidades distintas y solapadas, y el color " +
          "que percibes es el resultado de comparar cuánto se ha excitado cada uno. Ante la " +
          "mezcla que llega del cielo —mucho azul, algo de violeta, un poco de todo lo demás— tus " +
          "conos responden de una manera que el cerebro traduce como azul. La sensibilidad al " +
          "violeta puro, además, es notablemente más baja que al azul.",
      },
      {
        b: "parrafo",
        texto:
          "Así que la pregunta «¿de qué color es el cielo?» no tiene una respuesta que dependa " +
          "solo del cielo. El cielo emite una mezcla concreta de longitudes de onda, y azul es el " +
          "nombre que le pone tu sistema visual a esa mezcla. Un animal con otros conos vería " +
          "otra cosa mirando exactamente el mismo aire.",
      },
      {
        b: "rayo",
        texto:
          "El color del cielo no está solo en el cielo. La mitad de la respuesta está en cómo son " +
          "el Sol y tus ojos.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? De la misma regla salen los atardeceres. Cuando el Sol está bajo, su luz " +
          "atraviesa muchísimo más aire para llegar a ti, y por el camino se va dispersando lo " +
          "que más se dispersa, que es el azul. Lo que sobrevive al viaje y te llega directo es " +
          "lo que menos se dispersaba: el rojo y el naranja. El atardecer no es un fenómeno " +
          "distinto del cielo azul, es el mismo visto desde el otro lado.",
      },
    ],
  },
  {
    id: "tres-preguntas-tres-ganadores",
    titulo: "Por qué el Everest no es la más alta",
    categoria: "Planeta Tierra",
    color: "var(--teal)",
    /* Serie «por-que-el-everest-no-es-la-mas-alta», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El Everest solo gana una de las tres maneras de medir» */
    encargo: "El Everest solo gana una de las tres maneras de medir",
    fotos: [
      {
        local: p_tres_preguntas_tres_ganadores,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El Everest solo gana una de las tres maneras de medir",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La pregunta parece una sola y en realidad son tres",
      },
      {
        b: "parrafo",
        texto:
          "«¿Cuál es la montaña más alta del mundo?» suena a pregunta con una respuesta, de esas " +
          "que vienen en los libros de récords y no admiten discusión. Pero esconde una trampa " +
          "que nadie señala, y es que no dice desde dónde se mide. Y resulta que hay tres formas " +
          "razonables de medir la altura de una montaña, cada una responde a una pregunta " +
          "distinta, y cada una tiene un ganador diferente.",
      },
      {
        b: "parrafo",
        texto:
          "La primera es la que todos damos por supuesta: <strong>la altura sobre el nivel del " +
          "mar</strong>. Ahí gana el Everest, con unos 8.848 metros, y por eso es el que sale en " +
          "los libros. Es la medida que le importa a un montañero, porque es la que determina " +
          "cuánto oxígeno hay arriba y lo que cuesta llegar.",
      },
      {
        b: "parrafo",
        texto:
          "La segunda es la que usaría cualquiera que mirase una montaña como se mira un " +
          "edificio: <strong>desde su base hasta su cumbre</strong>. Y ahí el Everest pierde, " +
          "porque su base ya está a más de cinco mil metros de altitud, sobre una meseta que le " +
          "regala la mitad del trabajo. El ganador es el Mauna Kea, en Hawái, que sobresale del " +
          "agua solo unos 4.200 metros pero cuya base está en el fondo del Pacífico. Medido " +
          "entero, de base a cumbre, pasa de los diez mil metros y le saca más de un kilómetro al " +
          "Everest. Lo que ocurre es que casi todo el edificio está bajo el agua.",
      },
      {
        b: "parrafo",
        texto:
          "Y la tercera es la que haría alguien que mirase el planeta desde fuera: <strong>qué " +
          "punto está más lejos del centro de la Tierra</strong>. Ahí no gana ninguno de los dos.",
      },
      {
        b: "rayo",
        texto:
          "Tres formas de medir una montaña y tres ganadores distintos. El Everest solo gana en " +
          "una.",
      },
      {
        b: "rotulo",
        texto:
          "El punto más alejado del centro está en Ecuador",
      },
      {
        b: "parrafo",
        texto:
          "El tercer ganador es el Chimborazo, un volcán de Ecuador que se queda en 6.268 metros " +
          "sobre el nivel del mar, es decir, más de dos kilómetros y medio por debajo del " +
          "Everest. Y aun así, su cumbre está <strong>2.072 metros más lejos del centro de la " +
          "Tierra</strong> que la del Everest.",
      },
      {
        b: "parrafo",
        texto:
          "La explicación es que la Tierra no es una esfera. Gira, y esa rotación la abomba por " +
          "el ecuador, dejándola más ancha por la cintura que de polo a polo. La diferencia es de " +
          "unos veintiún kilómetros, que sobre el tamaño del planeta es poco en proporción y es " +
          "muchísimo comparado con cualquier montaña. El Chimborazo está prácticamente encima de " +
          "esa panza, a un grado del ecuador, y el Everest está bastante más al norte, sobre una " +
          "zona del planeta que ya se ha estrechado.",
      },
      {
        b: "parrafo",
        texto:
          "Así que el Chimborazo parte con una ventaja enorme antes de empezar a subir: el suelo " +
          "sobre el que se apoya ya está más lejos del centro que la cumbre del Everest. Es una " +
          "carrera en la que uno de los dos empieza dos kilómetros por delante.",
      },
      {
        b: "parrafo",
        texto:
          "Y de ahí sale la frase que mejor lo resume: la cumbre del Chimborazo es el punto de la " +
          "superficie terrestre más cercano al espacio. Si te subes ahí, ningún ser humano en el " +
          "planeta está en ese momento más lejos del centro de la Tierra que tú, ni siquiera el " +
          "que esté haciendo cumbre en el Everest.",
      },
      {
        b: "rayo",
        texto:
          "El Chimborazo es dos kilómetros y medio más bajo que el Everest, y su cumbre está dos " +
          "kilómetros más lejos del centro del planeta.",
      },
    ],
  },
  {
    id: "la-nieve-y-el-hielo-azul-son-lo-mismo",
    titulo: "Por qué el hielo de los glaciares es azul",
    categoria: "Ciencia",
    color: "var(--clay)",
    /* Serie «por-que-el-hielo-de-los-glaciares-es-azul», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La nieve blanca y el hielo azul son exactamente lo mismo» */
    encargo: "La nieve blanca y el hielo azul son exactamente lo mismo",
    fotos: [
      {
        local: p_la_nieve_y_el_hielo_azul_son_lo_mismo,
        autor: "",
        licencia: "Pexels License",
        alt:
          "La nieve blanca y el hielo azul son exactamente lo mismo",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La misma sustancia da dos colores distintos",
      },
      {
        b: "parrafo",
        texto:
          "En una montaña con glaciar puedes ver las dos cosas a la vez y a pocos metros de " +
          "distancia: la nieve reciente de la superficie, de un blanco absoluto, y las grietas " +
          "del hielo antiguo, de un azul intenso que parece iluminado desde dentro. Da la " +
          "impresión de ser dos materiales diferentes, y no lo son. Los dos son exactamente lo " +
          "mismo: agua congelada, sin ningún añadido, sin ningún mineral, sin nada disuelto que " +
          "pueda teñir.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que cambia entre uno y otro no es la sustancia, es su estructura interna. Y para " +
          "entenderlo hay que recordar de dónde viene el color azul del agua: de que las " +
          "moléculas absorben la luz roja, dejando pasar el resto. Esa absorción es lenta y " +
          "necesita distancia, de modo que la luz tiene que recorrer un buen trecho " +
          "<strong>dentro del hielo</strong> para que el efecto se note.",
      },
      {
        b: "parrafo",
        texto:
          "Ahí está toda la explicación. La nieve reciente está llena de aire. Es una acumulación " +
          "de cristales sueltos con huecos entre ellos, y en volumen es mayoritariamente aire. " +
          "Cuando un rayo de luz entra, no atraviesa hielo: choca casi inmediatamente con la " +
          "primera frontera entre hielo y aire y rebota, choca con la siguiente y rebota otra " +
          "vez, y repite eso cientos de veces en cuestión de milímetros hasta que sale despedido " +
          "de nuevo hacia fuera. En ese recorrido a saltos apenas ha atravesado hielo de verdad, " +
          "así que la absorción del rojo no ha tenido ocasión de actuar. Salen todos los colores " +
          "por igual, y la mezcla de todos los colores es blanco.",
      },
      {
        b: "rayo",
        texto:
          "La nieve no es blanca por ser nieve: es blanca porque está llena de aire y la luz " +
          "rebota y sale antes de haber atravesado hielo suficiente.",
      },
      {
        b: "rotulo",
        texto:
          "El hielo del glaciar es nieve a la que le han sacado el aire",
      },
      {
        b: "parrafo",
        texto:
          "¿Y qué le ha pasado entonces al hielo del glaciar? Es simple: lleva encima el peso de " +
          "todo lo que cayó después.",
      },
      {
        b: "parrafo",
        texto:
          "Un glaciar se forma por acumulación. La nieve de cada invierno se deposita sobre la " +
          "del anterior y no llega a fundirse del todo, así que se van apilando capas, y cada " +
          "capa nueva aprieta a las de abajo. Bajo esa presión sostenida durante años y décadas, " +
          "los cristales de nieve se compactan, se sueldan entre sí y <strong>el aire que había " +
          "entre ellos va siendo expulsado</strong>. Lo que empezó siendo una masa esponjosa " +
          "acaba convertido en hielo denso, compacto y sin apenas burbujas.",
      },
      {
        b: "parrafo",
        texto:
          "Y eso lo cambia todo desde el punto de vista de la luz. En un hielo sin burbujas no " +
          "hay fronteras internas contra las que rebotar, así que la luz que entra puede viajar " +
          "en línea recta a través del hielo durante metros antes de volver a salir. Por primera " +
          "vez ha recorrido distancia suficiente dentro del material, y en ese trayecto la " +
          "absorción del rojo sí actúa. Lo que sale es luz a la que le falta el rojo: azul. El " +
          "Servicio Geológico de Estados Unidos lo resume en una frase que sirve de regla " +
          "general: cuanto más largo es el camino que la luz recorre dentro del hielo, más azul " +
          "se ve.",
      },
      {
        b: "parrafo",
        texto:
          "Por eso el azul aparece justo donde aparece. En las grietas profundas, donde miras " +
          "hacia el interior de la masa. En las cuevas de hielo. En las paredes recién partidas " +
          "de un frente glaciar. En los icebergs, cuya parte azul es hielo que se formó a mucha " +
          "profundidad. Siempre en sitios donde la luz ha tenido que atravesar mucho hielo " +
          "compacto, y nunca en la superficie recién nevada.",
      },
      {
        b: "parrafo",
        texto:
          "De modo que el azul de un glaciar no es un color distinto del azul del mar: es la " +
          "misma molécula absorbiendo el mismo rojo por el mismo motivo. Una vez en estado " +
          "líquido y otra en estado sólido.",
      },
      {
        b: "rayo",
        texto:
          "El hielo azul es nieve a la que la presión le ha sacado el aire. Sin burbujas, la luz " +
          "atraviesa metros de hielo, pierde el rojo y sale azul.",
      },
    ],
  },
  {
    id: "el-mar-no-refleja-el-cielo",
    titulo: "Por qué el mar es azul",
    categoria: "Ciencia",
    color: "var(--sage)",
    /* Serie «por-que-el-mar-es-azul», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El mar no refleja el cielo: el agua es azul de verdad» */
    encargo: "El mar no refleja el cielo: el agua es azul de verdad",
    fotos: [
      {
        local: p_el_mar_no_refleja_el_cielo,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El mar no refleja el cielo: el agua es azul de verdad",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La explicación de siempre se cae con mirar por la ventana",
      },
      {
        b: "parrafo",
        texto:
          "Pregunta por ahí por qué el mar es azul y la respuesta llegará casi siempre igual de " +
          "rápida y de segura: porque refleja el cielo. Es una de esas explicaciones que suenan " +
          "tan sensatas que nadie las examina, y basta con asomarse a una playa en un día malo " +
          "para verla derrumbarse.",
      },
      {
        b: "parrafo",
        texto:
          "Un día completamente encapotado, con el cielo gris de punta a punta y sin una brecha " +
          "de azul en ninguna parte, el mar <strong>sigue siendo azul</strong>. Más apagado, más " +
          "oscuro, con menos brillo, pero azul. Si el color fuera un reflejo del cielo, ese día " +
          "el agua tendría que verse gris, exactamente igual que un espejo puesto bajo un techo " +
          "gris se ve gris. No pasa. Y no pasa tampoco en una piscina cubierta, bajo techo y con " +
          "luz artificial, donde el agua sigue tirando a azul aunque no haya ni rastro de cielo " +
          "por ninguna parte.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que ocurre es mucho más interesante que un reflejo: <strong>el agua tiene color " +
          "propio</strong>. No es un líquido transparente e incoloro que toma prestado el aspecto " +
          "de su entorno, sino una sustancia azul, como lo es un cristal tintado. Y la razón de " +
          "que no lo hayas notado nunca es puramente de cantidad.",
      },
      {
        b: "parrafo",
        texto:
          "En un vaso, el color es imperceptible, porque la luz solo atraviesa unos centímetros " +
          "de agua y en ese recorrido tan corto apenas se absorbe nada. Para que el azul se " +
          "manifieste hace falta que la luz recorra <strong>metros</strong> de agua. Por eso el " +
          "mar es azul y el vaso de tu mesa no lo es: no son sustancias distintas, son distancias " +
          "distintas.",
      },
      {
        b: "rayo",
        texto:
          "Un día encapotado el mar sigue siendo azul y el cielo es gris. Si fuera un reflejo, " +
          "eso sería imposible.",
      },
      {
        b: "rotulo",
        texto:
          "El experimento que lo demuestra cabe en un tubo",
      },
      {
        b: "parrafo",
        texto:
          "¿Y cómo se comprueba que el color es del agua y no de lo que la rodea? Es simple: se " +
          "coge agua, se le quita todo lo demás y se mira a través de una columna larga.",
      },
      {
        b: "parrafo",
        texto:
          "Eso es exactamente lo que hicieron los químicos Charles Braun y Sergei Smirnov en un " +
          "trabajo publicado en 1993 que se ha convertido en la referencia sobre este asunto. " +
          "Montaron un tubo de aluminio de <strong>tres metros de largo y cuatro centímetros de " +
          "diámetro</strong>, lo llenaron de agua purificada —sin sales, sin algas, sin " +
          "partículas, sin nada que pudiera dispersar la luz de forma engañosa— y pidieron a " +
          "varios observadores que miraran por un extremo. Todos informaron de lo mismo: veían " +
          "azul.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en lo que elimina ese montaje. Dentro de un tubo de aluminio no hay cielo que " +
          "reflejar, ni fondo marino, ni plancton, ni sedimento en suspensión, ni profundidad que " +
          "insinúe oscuridad. Solo hay tres metros de agua pura y una luz atravesándolos. Y lo " +
          "que sale por el otro extremo es azul.",
      },
      {
        b: "parrafo",
        texto:
          "Tienes una versión doméstica del mismo experimento en cualquier piscina grande. Las " +
          "paredes son blancas, el fondo es blanco, los azulejos son blancos, y aun así la zona " +
          "profunda se ve claramente más azul que la zona de poca profundidad. Nadie ha pintado " +
          "nada de azul: lo único que cambia entre un extremo y el otro es cuánta agua tiene que " +
          "atravesar la luz antes de llegar a tu ojo.",
      },
      {
        b: "parrafo",
        texto:
          "Conviene matizar una cosa para no pasarse de rosca, porque el reflejo del cielo " +
          "existe. Cuando miras el mar en ángulo muy bajo, casi rasante, la superficie sí " +
          "funciona como un espejo y el cielo aporta lo suyo. Lo que es falso es que ese reflejo " +
          "explique el color: es un añadido encima de un azul que ya estaba ahí.",
      },
      {
        b: "rayo",
        texto:
          "Tres metros de agua pura dentro de un tubo de aluminio, sin cielo ni fondo ni nada en " +
          "suspensión, se ven azules. El color es del agua.",
      },
    ],
  },
  {
    id: "la-sal-no-viene-del-mar",
    titulo: "Por qué el mar es salado",
    categoria: "Planeta Tierra",
    color: "var(--ochre)",
    /* Serie «por-que-el-mar-es-salado», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La sal del mar no viene del mar» */
    encargo: "La sal del mar no viene del mar",
    fotos: [
      {
        local: p_la_sal_no_viene_del_mar,
        autor: "",
        licencia: "Pexels License",
        alt:
          "La sal del mar no viene del mar",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La trajo la lluvia, piedra a piedra",
      },
      {
        b: "parrafo",
        texto:
          "Uno da por hecho que la sal es una propiedad del mar, algo que forma parte de su " +
          "naturaleza igual que el agua o el oleaje. Y no es así en absoluto: casi toda esa sal " +
          "estuvo antes en tierra firme, dentro de las rocas, y hasta el mar la llevaron los " +
          "ríos. Los mismos ríos que llamamos de agua dulce.",
      },
      {
        b: "parrafo",
        texto:
          "El proceso empieza con la lluvia, y empieza porque la lluvia no es agua pura. Al caer, " +
          "el agua disuelve dióxido de carbono de la atmósfera y se vuelve ligeramente ácida. No " +
          "lo bastante para notarlo, pero sí lo bastante para atacar la roca sobre la que cae, " +
          "lentamente y sin parar. Ese ataque va arrancando iones de los minerales —sodio, cloro, " +
          "calcio, magnesio, potasio— y esos iones quedan disueltos en el agua que escurre.",
      },
      {
        b: "parrafo",
        texto:
          "Después llega la parte de logística. El agua de escorrentía baja a los arroyos, los " +
          "arroyos a los ríos y los ríos al mar, arrastrando en disolución todo lo que han ido " +
          "arrancando por el camino. Un río lleva una cantidad de sal tan pequeña que no la notas " +
          "al beber, y por eso lo llamamos dulce; pero lleva algo, y lleva ese algo todos los " +
          "días desde hace miles de millones de años.",
      },
      {
        b: "parrafo",
        texto:
          "Y en el mar ocurre lo que cierra el circuito. El agua se evapora y vuelve a la " +
          "atmósfera, pero la sal no se evapora: se queda. Entra agua con sal disuelta, sale agua " +
          "sin sal, y lo que queda dentro se va concentrando. El océano funciona, en ese sentido, " +
          "como una olla puesta al fuego a la que no dejas de añadirle caldo.",
      },
      {
        b: "rayo",
        texto:
          "El mar no fabrica sal. Lleva miles de millones de años recibiéndola de tierra firme y " +
          "quedándosela cuando el agua se evapora.",
      },
      {
        b: "rotulo",
        texto:
          "Y hay una segunda fuente en el fondo",
      },
      {
        b: "parrafo",
        texto:
          "La historia de los ríos es la principal y es la que explica el grueso del asunto, pero " +
          "se quedaría coja sin la otra mitad, que ocurre donde nadie la ve.",
      },
      {
        b: "parrafo",
        texto:
          "En las dorsales oceánicas, esas cordilleras submarinas donde la corteza se está " +
          "creando, el agua del mar se filtra por las grietas de la roca, baja hasta zonas " +
          "próximas al magma y se calienta muchísimo. El agua caliente y a presión es un " +
          "disolvente extraordinariamente agresivo, así que ataca la roca volcánica que atraviesa " +
          "y le arranca minerales. Y luego vuelve a salir por las fuentes hidrotermales cargada " +
          "con todo eso. Es la misma operación que hace la lluvia sobre los continentes, hecha " +
          "bajo el agua, a temperaturas absurdas y con la roca recién salida del horno.",
      },
      {
        b: "parrafo",
        texto:
          "El resultado global de las dos vías es un mar con unos 35 gramos de sal por cada kilo " +
          "de agua. Esa cifra cuesta de dimensionar hasta que la conviertes en algo que se pueda " +
          "ver, así que aquí va la conversión del Servicio Geológico de Estados Unidos: si " +
          "sacaras toda la sal disuelta en los océanos y la extendieras uniformemente sobre la " +
          "superficie de todas las tierras emergidas del planeta, formaría una capa de más de " +
          "ciento sesenta metros de espesor. Un edificio de cuarenta plantas, sobre cada metro " +
          "cuadrado de tierra firme del mundo.",
      },
      {
        b: "rayo",
        texto:
          "Toda la sal del océano, repartida sobre las tierras emergidas, formaría una capa de " +
          "más de ciento sesenta metros.",
      },
    ],
  },
  {
    id: "un-desague-sin-salida",
    titulo: "Por qué el mar Muerto se está secando",
    categoria: "Naturaleza",
    color: "var(--plum)",
    /* Serie «por-que-el-mar-muerto-se-esta-secando», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El Mar Muerto no es un mar: es un desagüe sin salida» */
    encargo: "El Mar Muerto no es un mar: es un desagüe sin salida",
    fotos: [
      {
        local: p_un_desague_sin_salida,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El Mar Muerto no es un mar: es un desagüe sin salida",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Es un lago cerrado en el punto más bajo de la tierra firme",
      },
      {
        b: "parrafo",
        texto:
          "Lo primero que hay que quitarle al Mar Muerto es el nombre. No es un mar: es un " +
          "<strong>lago salado sin salida al océano</strong>, encajado entre Israel y Jordania, y " +
          "ocupa la elevación más baja de la superficie terrestre. No hay tierra firme más abajo " +
          "en ningún sitio del planeta.",
      },
      {
        b: "parrafo",
        texto:
          "Lo decisivo no es la altura, sino que <strong>el agua entra y no sale</strong>. No " +
          "tiene río de desagüe. Lo que llega por el Jordán y por la lluvia solo puede marcharse " +
          "de una manera: evaporándose.",
      },
      {
        b: "parrafo",
        texto:
          "Y ahí está el mecanismo entero de este lugar. Cuando el agua se evapora, se va el agua " +
          "y se queda todo lo que llevaba disuelto. Repite eso durante miles de años en un " +
          "recipiente que no se vacía nunca por abajo, y lo que obtienes es un depósito de sal " +
          "con un poco de agua.",
      },
      {
        b: "rayo",
        texto:
          "El Mar Muerto no es salado por casualidad geológica: es salado porque es un cuenco sin " +
          "desagüe donde el agua lleva milenios saliendo solo por evaporación.",
      },
      {
        b: "rotulo",
        texto:
          "Con más de un 30 % de sal, flotar no tiene mérito",
      },
      {
        b: "parrafo",
        texto:
          "La concentración de sal del Mar Muerto supera el <strong>30 %</strong>, casi " +
          "<strong>diez veces</strong> la del océano. Es el segundo lago más salado del mundo.",
      },
      {
        b: "parrafo",
        texto:
          "De ahí viene la imagen que todos hemos visto, la del turista leyendo el periódico " +
          "tumbado boca arriba sin hacer nada. ¿Y por qué se flota ahí de esa manera? Es simple: " +
          "<strong>el agua pesa más que tú</strong>. Un cuerpo humano tiene una densidad muy " +
          "parecida a la del agua dulce, y por eso en una piscina hay que mover los brazos para " +
          "no hundirse. Con un tercio de sal disuelta, el agua se vuelve mucho más densa que el " +
          "cuerpo, el empuje supera claramente al peso y el resultado es que sobra flotabilidad.",
      },
      {
        b: "parrafo",
        texto:
          "La otra consecuencia del nombre también merece un matiz. El Mar Muerto no está del " +
          "todo muerto: no hay peces ni plantas, pero sí hay comunidades microbianas adaptadas a " +
          "esa salinidad, del tipo de organismos que aguantan condiciones extremas. Lo que no hay " +
          "es nada que se vea.",
      },
      {
        b: "rayo",
        texto:
          "No flotas en el Mar Muerto por hacer algo bien. Flotas porque a esa salinidad el agua " +
          "es más densa que tú y hundirse cuesta trabajo.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? En el fondo del lago se está formando una costra de sal que crece unos " +
          "diez centímetros cada año desde hace cuatro décadas. La sal cristaliza y cae por un " +
          "fenómeno llamado convección de doble difusión: se forman «dedos de sal» que descienden " +
          "por el agua y se depositan abajo.",
      },
    ],
  },
  {
    id: "lleno-de-semillas",
    titulo: "Por qué el plátano no tiene semillas",
    categoria: "Naturaleza",
    color: "var(--slate)",
    /* Serie «por-que-el-platano-no-tiene-semillas», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El plátano salvaje está lleno de semillas negras y duras» */
    encargo: "El plátano salvaje está lleno de semillas negras y duras",
    fotos: [
      {
        local: p_lleno_de_semillas,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El plátano salvaje está lleno de semillas negras y duras",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El antepasado del plátano prácticamente no se puede comer",
      },
      {
        b: "parrafo",
        texto:
          "Un fruto sin semillas es una contradicción biológica. La fruta existe para envolver la " +
          "semilla y conseguir que alguien se la lleve lejos: ese es el trato entre la planta y " +
          "el animal que se la come. Un plátano, visto así, es una planta que ha dejado de " +
          "cumplir su parte.",
      },
      {
        b: "parrafo",
        texto:
          "El plátano silvestre sí la cumple, y de sobra. Sus frutos están <strong>llenos de " +
          "semillas negras</strong>, duras y del tamaño de un guisante pequeño, apretadas dentro " +
          "de una pulpa escasa. Es incómodo de comer hasta el punto de que casi no merece la pena " +
          "intentarlo.",
      },
      {
        b: "parrafo",
        texto:
          "Todo lo que reconoces como un plátano —la pulpa continua, la textura blanda, la " +
          "ausencia de tropiezos— es el resultado de siglos de selección humana sobre esa planta. " +
          "Y el mecanismo que lo hizo posible no es una mejora, sino una avería.",
      },
      {
        b: "rayo",
        texto:
          "El plátano no perdió las semillas porque nos gustara más así. Las perdió porque se " +
          "estropeó un mecanismo, y a nosotros nos convino.",
      },
      {
        b: "rotulo",
        texto:
          "La esterilidad viene de tener tres juegos de cromosomas",
      },
      {
        b: "parrafo",
        texto:
          "Los plátanos de cultivo son <strong>triploides</strong>: llevan tres juegos completos " +
          "de cromosomas en vez de los dos habituales. Y ese número impar lo cambia todo.",
      },
      {
        b: "parrafo",
        texto:
          "¿Por qué? Es simple: <strong>tres no se reparte en dos partes iguales</strong>. Para " +
          "fabricar polen u óvulos, una célula tiene que emparejar sus cromosomas y repartirlos " +
          "en dos mitades idénticas. Con dos juegos, cada cromosoma tiene su pareja y el reparto " +
          "sale limpio. Con tres, siempre sobra uno, el emparejamiento se descuadra y las células " +
          "reproductoras que salen son casi todas inviables.",
      },
      {
        b: "parrafo",
        texto:
          "El resultado es una planta funcionalmente estéril. El fruto sigue creciendo y " +
          "madurando, porque la planta ha dejado de esperar a que haya fecundación para " +
          "desarrollarlo, pero dentro no llega a formarse ninguna semilla. Esas motitas oscuras " +
          "que ves en el centro cuando cortas un plátano en rodajas son óvulos que empezaron y no " +
          "llegaron a nada.",
      },
      {
        b: "parrafo",
        texto:
          "Y de ahí sale la pregunta obvia. ¿Cómo se planta algo que no da semillas? No se " +
          "planta: <strong>se trasplanta</strong>. De la base de cada planta salen hijuelos, " +
          "brotes laterales que se separan y se replantan. Cada platanera nueva es, literalmente, " +
          "un trozo de la anterior.",
      },
      {
        b: "rayo",
        texto:
          "El plátano no es estéril por casualidad ni por diseño: es estéril porque tiene un " +
          "número impar de juegos de cromosomas y no puede repartirlos.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Un trabajo publicado en 2023 desmontó el genoma del plátano cultivado y " +
          "encontró que sus tres juegos de cromosomas no vienen de un solo antepasado silvestre, " +
          "sino de tres subespecies distintas de <em>Musa acuminata</em>. El plátano que te comes " +
          "es un híbrido a tres bandas.",
      },
    ],
  },
  {
    id: "por-que-el-sahara-fue-verde",
    titulo: "Por qué el Sáhara fue verde",
    categoria: "Planeta Tierra",
    color: "var(--clay)",
    /* Serie «por-que-el-sahara-fue-verde», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Hay hipopótamos pintados donde ahora no hay ni un charco» */
    encargo: "Hay hipopótamos pintados donde ahora no hay ni un charco",
    fotos: [
      {
        local: p_por_que_el_sahara_fue_verde,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Hay hipopótamos pintados donde ahora no hay ni un charco",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Quince mil dibujos en mitad del desierto argelino",
      },
      {
        b: "parrafo",
        texto:
          "En la meseta de <strong>Tassili n'Ajjer</strong>, en el sureste de Argelia, entre " +
          "paredones de arenisca erosionada y a cientos de kilómetros de cualquier río, hay más " +
          "de quince mil pinturas y grabados repartidos por las rocas. Los más antiguos se " +
          "remontan a alrededor del año 6000 antes de Cristo y la serie continúa durante " +
          "milenios.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que representan es lo que descoloca. Hay hipopótamos, que necesitan pasar el día " +
          "metidos en agua. Hay cocodrilos. Hay peces. Hay rebaños de vacas pastando y escenas de " +
          "vida cotidiana en torno al ganado, con un realismo que permite distinguir razas.",
      },
      {
        b: "parrafo",
        texto:
          "No son símbolos ni fantasías. Son animales que alguien tenía delante.",
      },
      {
        b: "rayo",
        texto:
          "La prueba más sólida de que el Sáhara fue verde no la dieron los geólogos. La dejó " +
          "gente que pintaba lo que veía por la mañana.",
      },
      {
        b: "rotulo",
        texto:
          "El desierto lleva menos tiempo siendo desierto de lo que parece",
      },
      {
        b: "parrafo",
        texto:
          "Ahora bien, conviene poner la escala en su sitio, porque el error habitual es imaginar " +
          "el Sáhara como algo eterno que siempre estuvo ahí.",
      },
      {
        b: "parrafo",
        texto:
          "Aquellas pinturas tienen entre siete y ocho mil años. La agricultura ya existía. En " +
          "Mesopotamia estaban a punto de aparecer las primeras ciudades. Estamos hablando de un " +
          "momento perfectamente histórico, no de una era geológica remota.",
      },
      {
        b: "parrafo",
        texto:
          "Y en ese momento, buena parte del Sáhara era una sabana con pastos, lagos y ríos. " +
          "Había ganado, había pesca y había población suficiente como para dejar quince mil " +
          "obras repartidas por un macizo.",
      },
      {
        b: "parrafo",
        texto:
          "Si visitas hoy el Tassili, lo que verás es roca desnuda, arena y un cielo sin una " +
          "nube. Las pinturas siguen ahí, en las mismas paredes, describiendo un sitio que ya no " +
          "existe.",
      },
      {
        b: "rayo",
        texto:
          "El Sáhara no es un desierto antiguo con un pasado verde. Es un sitio verde con un " +
          "presente desértico, y el presente es la parte corta.",
      },
    ],
  },
  {
    id: "empezo-en-orden-alfabetico",
    titulo: "Por qué el teclado está en QWERTY",
    categoria: "Tecnología",
    color: "var(--clay)",
    /* Serie «por-que-el-teclado-esta-en-qwerty», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El teclado empezó estando en orden alfabético» */
    encargo: "El teclado empezó estando en orden alfabético",
    fotos: [
      {
        local: p_empezo_en_orden_alfabetico,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El teclado empezó estando en orden alfabético",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El primer teclado de Sholes iba de la A a la Z",
      },
      {
        b: "parrafo",
        texto:
          "Tienes uno delante ahora mismo, y su orden es tan raro que parece que alguien lo pensó " +
          "mucho. Merece la pena empezar por el principio, porque el principio es justo lo " +
          "contrario de lo que uno esperaría.",
      },
      {
        b: "parrafo",
        texto:
          "Christopher Latham Sholes construyó en Milwaukee la máquina que acabaría siendo la " +
          "primera de éxito comercial, y su teclado de <strong>1868</strong> tenía veintiocho " +
          "teclas colocadas en el orden más obvio del mundo: <strong>de la A a la Z</strong>. Las " +
          "letras de la A a la N iban de izquierda a derecha, y de la O a la Z volvían de derecha " +
          "a izquierda.",
      },
      {
        b: "parrafo",
        texto:
          "O sea que el diseño de partida era el alfabético. Lo que hay que explicar no es por " +
          "qué el teclado no está ordenado: es por qué dejó de estarlo.",
      },
      {
        b: "rayo",
        texto:
          "El QWERTY no fue el punto de partida, fue el punto de llegada. Sholes empezó por el " +
          "alfabeto, que es exactamente donde empezaría cualquiera.",
      },
      {
        b: "rotulo",
        texto:
          "El orden cambió una y otra vez durante diez años",
      },
      {
        b: "parrafo",
        texto:
          "Lo que vino después no fue un rediseño, fue una sucesión de parches. La secuencia está " +
          "documentada y es muy reveladora.",
      },
      {
        b: "parrafo",
        texto:
          "En <strong>1870</strong> el teclado tenía cuatro filas y seguía casi en orden " +
          "alfabético, con una anomalía: la U estaba junto a la O. En <strong>1872</strong> la " +
          "máquina había crecido a cuarenta y dos teclas, y varios cambios de esa versión " +
          "respondían a peticiones concretas de las compañías de telégrafos. En " +
          "<strong>1873</strong>, cuando Remington asumió la fabricación, la Y se movió junto a " +
          "la T. Y todavía en <strong>1878</strong> hubo un último retoque: la M pasó al lado de " +
          "la N y la C se intercambió con la X. Eso ya es el teclado que estás tocando.",
      },
      {
        b: "parrafo",
        texto:
          "¿Y por qué tanto cambio en diez años, en vez de un diseño hecho de una vez? Es simple: " +
          "<strong>no había un diseño, había clientes</strong>. Cada versión respondía a lo que " +
          "pedía quien estaba comprando las máquinas en ese momento, y las peticiones fueron " +
          "cambiando. El resultado no lo decidió nadie: se acumuló.",
      },
      {
        b: "parrafo",
        texto:
          "Merece la pena quedarse con esa idea, porque es la que explica todo lo demás. El " +
          "QWERTY no es una solución a un problema. Es el sedimento de diez años de retoques que " +
          "en algún momento dejaron de hacerse.",
      },
      {
        b: "rayo",
        texto:
          "Nadie diseñó el QWERTY. Se depositó, capa sobre capa, hasta que un día alguien dejó de " +
          "tocarlo y se quedó así para siempre.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? El arreglo se congeló porque saltó de máquina en máquina. En los años " +
          "diez del siglo XX lo adoptó el teletipo, y el teletipo se convirtió después en el " +
          "terminal habitual de los ordenadores. De ahí pasó al teclado de tu portátil sin que " +
          "nadie volviera a preguntarse por qué estaba así.",
      },
    ],
  },
  {
    id: "los-dias-no-los-anos-si",
    titulo: "Por qué el tiempo pasa más rápido",
    categoria: "Cuerpo humano",
    color: "var(--plum)",
    /* Serie «por-que-el-tiempo-pasa-mas-rapido», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Los días no se te pasan más rápido: se te pasan los años» */
    encargo: "Los días no se te pasan más rápido: se te pasan los años",
    fotos: [
      {
        local: p_los_dias_no_los_anos_si,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Los días no se te pasan más rápido: se te pasan los años",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Una contradicción que casi nadie nota",
      },
      {
        b: "parrafo",
        texto:
          "Hay una frase que la gente repite sin darse cuenta de que se contradice: que los días " +
          "se hacen eternos y los años vuelan. Un martes cualquiera de febrero puede resultar " +
          "interminable, y sin embargo diciembre llega con la sensación de que el año entero ha " +
          "durado tres semanas. Las dos cosas se dicen a la vez y las dos se sienten como verdad.",
      },
      {
        b: "parrafo",
        texto:
          "No es una contradicción: son dos operaciones distintas del cerebro. Una es la " +
          "percepción del tiempo <strong>mientras pasa</strong>, que depende sobre todo de cuánta " +
          "atención le estás prestando al propio paso del tiempo; por eso una cola aburrida se " +
          "hace larguísima y una conversación buena se pasa volando, y por eso mirar el reloj lo " +
          "empeora todo. La otra es el juicio <strong>retrospectivo</strong>, la estimación que " +
          "haces al mirar hacia atrás sobre cuánto ha durado un periodo que ya terminó. Y es en " +
          "esta segunda donde ocurre lo de la edad.",
      },
      {
        b: "parrafo",
        texto:
          "La explicación clásica de por qué los años se aceleran la propuso el filósofo Paul " +
          "Janet en 1877, y es puramente aritmética. Cada año que vives es una fracción menor de " +
          "todo lo que has vivido. Para un niño de cinco años, un año es la quinta parte de su " +
          "vida entera, un bloque enorme. Para alguien de cincuenta es la quincuagésima parte, un " +
          "dos por ciento. Si el cerebro mide los periodos en proporción a lo que ya tiene " +
          "almacenado, cada año se va empequeñeciendo por pura división.",
      },
      {
        b: "rayo",
        texto:
          "Un año es el veinte por ciento de la vida de un niño de cinco años. Para uno de " +
          "cincuenta es el dos por ciento.",
      },
      {
        b: "rotulo",
        texto:
          "Y ahora la parte incómoda: el efecto es más pequeño de lo que crees",
      },
      {
        b: "parrafo",
        texto:
          "La teoría proporcional es elegante, se cuenta muy bien y tiene un problema serio: no " +
          "la respalda gran cosa. Es una analogía matemática, no un mecanismo. Nadie ha " +
          "demostrado que el cerebro divida periodos entre la edad, y de hecho la explicación " +
          "predice una aceleración suave y constante que no encaja del todo con lo que la gente " +
          "describe.",
      },
      {
        b: "parrafo",
        texto:
          "Pero el problema mayor está antes, y afecta al fenómeno entero. En 2005, Marc Wittmann " +
          "y Sandra Lehnhoff hicieron el estudio que faltaba: preguntaron a <strong>499 personas " +
          "de entre catorce y noventa y cuatro años</strong> por su percepción del paso del " +
          "tiempo, tanto en el momento como en retrospectiva. El resultado confirma que la " +
          "sensación existe y que efectivamente aumenta con la edad. Y añade un dato que casi " +
          "nunca se cita: la edad explicaba, como mucho, un diez por ciento de la variación entre " +
          "unas personas y otras.",
      },
      {
        b: "parrafo",
        texto:
          "Léelo despacio, porque cambia bastante el tamaño del asunto. El noventa por ciento " +
          "restante de la diferencia entre una persona que siente que el tiempo vuela y otra que " +
          "no depende de otras cosas: de cómo vive, de cuánta presión tiene, de a qué dedica los " +
          "días. La edad participa, pero no manda. Los propios autores advierten de que sus " +
          "interpretaciones hay que tomarlas con cautela por las limitaciones del método.",
      },
      {
        b: "parrafo",
        texto:
          "O sea que la frase «cuanto mayor eres, más rápido se te pasa el tiempo» es cierta como " +
          "tendencia general y bastante floja como explicación de tu caso concreto. Es un efecto " +
          "real y modesto que se cuenta habitualmente como si fuera una ley.",
      },
      {
        b: "rayo",
        texto:
          "La edad explica como mucho un diez por ciento de la diferencia. El otro noventa " +
          "depende de cómo vives, no de los años que tienes.",
      },
    ],
  },
  {
    id: "por-que-estornudamos",
    titulo: "Por qué estornudamos",
    categoria: "Cuerpo humano",
    color: "var(--slate)",
    /* Serie «por-que-estornudamos», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un estornudo no lo decide la nariz, lo dispara el tronco del encéfalo» */
    encargo: "Un estornudo no lo decide la nariz, lo dispara el tronco del encéfalo",
    fotos: [
      {
        local: p_por_que_estornudamos,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un estornudo no lo decide la nariz, lo dispara el tronco del encéfalo",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La orden sale de muy abajo y va a muchos sitios a la vez",
      },
      {
        b: "parrafo",
        texto:
          "Un estornudo parece un asunto local: algo molesta en la nariz y la nariz reacciona. El " +
          "recorrido real es bastante más largo y explica por qué es tan difícil de contener.",
      },
      {
        b: "parrafo",
        texto:
          "Empieza donde uno espera. Un irritante en la mucosa nasal estimula el <strong>nervio " +
          "trigémino</strong>, que es el gran nervio sensitivo de la cara. Pero ese nervio no " +
          "resuelve nada por su cuenta: lleva la señal hasta el <strong>tronco del " +
          "encéfalo</strong>, la parte más antigua y más automática del cerebro, la que también " +
          "se ocupa de que respires y de que te lata el corazón sin que tengas que acordarte.",
      },
      {
        b: "parrafo",
        texto:
          "Y desde ahí, concretamente desde el <strong>bulbo raquídeo</strong>, sale la " +
          "respuesta. No es una orden, son varias a la vez: se envían señales por los nervios " +
          "motores a varios grupos musculares distintos —los de la faringe, los de la laringe, " +
          "los respiratorios y los abdominales— para que actúen coordinados.",
      },
      {
        b: "parrafo",
        texto:
          "Ahí está la explicación de una cosa que todo el mundo ha notado. Un estornudo no se " +
          "siente en la nariz, se siente en el pecho y en el abdomen, y te dobla el cuerpo. No es " +
          "una reacción de la nariz: es una maniobra de todo el tronco que la nariz se ha " +
          "limitado a pedir.",
      },
      {
        b: "rayo",
        texto:
          "Estornudar no es un acto de la nariz, es una orden del cerebro más automático que " +
          "tienes. La nariz solo avisa; quien coordina el golpe es la misma parte que se ocupa de " +
          "que respires dormido.",
      },
      {
        b: "rotulo",
        texto:
          "Los ojos se cierran solos, pero no porque tengan que hacerlo",
      },
      {
        b: "parrafo",
        texto:
          "De ese paquete de músculos que se disparan a la vez sale el detalle más comentado del " +
          "estornudo, y también el más mal explicado.",
      },
      {
        b: "parrafo",
        texto:
          "Durante el estornudo, los músculos de los párpados también se contraen de forma " +
          "involuntaria y fuerzan el cierre de los ojos. Eso es cierto y le pasa a todo el mundo: " +
          "forma parte del mismo lote de órdenes motoras que salen del bulbo.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que no es cierto es la conclusión que se saca de ahí. La afirmación de que es " +
          "imposible estornudar con los ojos abiertos es inexacta, sencillamente. Se puede, " +
          "aunque cueste, y hay gente que lo hace.",
      },
      {
        b: "parrafo",
        texto:
          "Y de ahí se cae también la historia que suele acompañarla, esa de que los ojos se " +
          "cierran para que no se te salgan de las órbitas por la presión. No hay nada que " +
          "sostenga eso. El cierre de los párpados no es una medida de protección diseñada para " +
          "nada: es simplemente un músculo más de la lista de músculos que reciben la orden a la " +
          "vez, igual que los del abdomen.",
      },
      {
        b: "rayo",
        texto:
          "Los ojos no se cierran para protegerte de nada. Se cierran porque están en la misma " +
          "lista de órdenes que el resto, y el cerebro las manda todas juntas sin distinguir " +
          "cuáles hacen falta.",
      },
      {
        b: "parrafo",
        texto:
          "¿Sabías que…? Hay gente que estornuda al salir a la luz del sol. La tendencia a " +
          "estornudar por exposición a una luz brillante es un rasgo autosómico dominante, se " +
          "hereda de padres a hijos y afecta a entre el 18 % y el 35 % de la población. Tiene " +
          "nombre propio y unas siglas evidentemente buscadas: síndrome ACHOO.",
      },
    ],
  },
  {
    id: "por-que-flota-un-barco-de-acero",
    titulo: "Por qué flota un barco de acero",
    categoria: "Ciencia",
    color: "var(--clay)",
    /* Serie «por-que-flota-un-barco-de-acero», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un barco no flota por el material del que está hecho, flota por su forma» */
    encargo: "Un barco no flota por el material del que está hecho, flota por su forma",
    fotos: [
      {
        local: p_por_que_flota_un_barco_de_acero,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un barco no flota por el material del que está hecho, flota por su forma",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Lo que empuja hacia arriba es el agua que has apartado",
      },
      {
        b: "parrafo",
        texto:
          "La pregunta suele plantearse mal, y por eso no tiene respuesta. No es que el acero " +
          "flote: el acero no flota. Lo que flota es una determinada forma hecha de acero, y la " +
          "diferencia está en el agua que esa forma aparta.",
      },
      {
        b: "parrafo",
        texto:
          "El principio lo dejó establecido Arquímedes hace más de dos mil años y se enuncia en " +
          "una frase: <strong>la fuerza de empuje hacia arriba que se ejerce sobre un cuerpo " +
          "sumergido en un fluido, total o parcialmente, es igual al peso del fluido que ese " +
          "cuerpo desplaza</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en lo que dice y en lo que no dice. No habla del material del cuerpo, ni de su " +
          "peso, ni de su densidad. Solo habla del <strong>volumen de agua que ha tenido que " +
          "apartarse</strong> para hacerle sitio. El agua desplazada empuja hacia arriba con " +
          "exactamente el peso que ella misma tenía.",
      },
      {
        b: "parrafo",
        texto:
          "De ahí sale la regla de flotar, que es igual de corta: cualquier objeto que flota " +
          "desplaza su propio peso de fluido. Si consigues apartar tantos kilos de agua como " +
          "pesas, flotas. Si no lo consigues ni sumergiéndote del todo, te hundes.",
      },
      {
        b: "rayo",
        texto:
          "El agua no distingue de qué está hecho lo que le entra dentro. Solo cuenta cuánta de " +
          "ella has tenido que echar a un lado, y empuja hacia arriba exactamente con ese peso.",
      },
      {
        b: "rotulo",
        texto:
          "Una tonelada de hierro se hunde; la misma tonelada, ahuecada, flota",
      },
      {
        b: "parrafo",
        texto:
          "El experimento mental que lo aclara todo está en el propio enunciado clásico, y " +
          "consiste en coger un mismo material y cambiarle la forma.",
      },
      {
        b: "parrafo",
        texto:
          "Toma un bloque macizo de hierro de una tonelada y échalo al agua: se va al fondo. El " +
          "bloque es compacto, ocupa poco volumen y aparta muy poca agua, muchísimo menos de una " +
          "tonelada. El empuje no le llega ni de lejos.",
      },
      {
        b: "parrafo",
        texto:
          "Ahora coge exactamente el mismo hierro, la misma tonelada, y dale forma de cuenco. Al " +
          "ponerlo en el agua desplaza un volumen mucho mayor que cuando era un bloque, porque el " +
          "hueco de dentro también cuenta: el agua ha tenido que apartarse para dejar sitio al " +
          "casco <strong>y al aire que encierra</strong>. Y cuanto más se hunde el cuenco, más " +
          "agua desplaza y mayor es el empuje que recibe, hasta que ese empuje iguala su peso y " +
          "ahí se queda.",
      },
      {
        b: "parrafo",
        texto:
          "Aplicado a un barco, la regla es literal: un casco de 10.000 toneladas tiene que " +
          "construirse lo bastante ancho, lo bastante largo y lo bastante profundo como para " +
          "desplazar 10.000 toneladas de agua. Esa es toda la condición de diseño.",
      },
      {
        b: "parrafo",
        texto:
          "Y por eso un barco es en su mayor parte aire. Un carguero es una cáscara metálica " +
          "delgada alrededor de un volumen enorme de nada, y esa nada es justamente la que hace " +
          "el trabajo.",
      },
      {
        b: "rayo",
        texto:
          "La pregunta correcta no es cómo flota el acero, sino cuánta agua aparta la forma que " +
          "le has dado. Un buque de guerra y un bloque de su mismo peso pesan igual; solo uno de " +
          "los dos ha hecho sitio suficiente.",
      },
    ],
  },
  {
    id: "el-color-te-dice-a-que-altura-ocurre",
    titulo: "Por qué hay auroras boreales",
    categoria: "Ciencia",
    color: "var(--ochre)",
    /* Serie «por-que-hay-auroras-boreales», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El color de una aurora te dice a qué altura está ocurriendo» */
    encargo: "El color de una aurora te dice a qué altura está ocurriendo",
    fotos: [
      {
        local: p_el_color_te_dice_a_que_altura_ocurre,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El color de una aurora te dice a qué altura está ocurriendo",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Una aurora es aire golpeado, no luz que viene del Sol",
      },
      {
        b: "parrafo",
        texto:
          "Lo primero que conviene deshacer es la imagen mental que casi todos tenemos, que es la " +
          "de una luz de colores llegando desde el espacio y colándose por el cielo polar. No es " +
          "eso lo que pasa. La luz de una aurora <strong>se fabrica aquí</strong>, en nuestra " +
          "propia atmósfera, y lo que llega de fuera no es luz sino materia.",
      },
      {
        b: "parrafo",
        texto:
          "El Sol expulsa continuamente un chorro de partículas cargadas, el viento solar, que " +
          "viaja por el sistema solar y llega hasta nosotros. El campo magnético terrestre desvía " +
          "a la inmensa mayoría de esas partículas y las manda de largo, y esa es la razón de que " +
          "la vida en la superficie sea posible; pero el campo magnético tiene dos puntos por " +
          "donde las líneas entran hacia el planeta, que son los polos, y por ahí una parte de " +
          "esas partículas se cuela y baja hacia la atmósfera. Por eso las auroras se ven en " +
          "Noruega, Islandia o Alaska y no en Madrid: no es que allí haya más viento solar, es " +
          "que allí está la puerta.",
      },
      {
        b: "parrafo",
        texto:
          "Cuando esas partículas llegan al aire de las capas altas, chocan con los átomos que " +
          "encuentran. El golpe empuja a un electrón del átomo a un estado de más energía, y al " +
          "cabo de un rato ese electrón vuelve a su sitio y suelta la energía sobrante en forma " +
          "de un destello de luz. Multiplica eso por billones de átomos y tienes la cortina. Una " +
          "aurora es, literalmente, aire excitado que se está desexcitando.",
      },
      {
        b: "rayo",
        texto:
          "La luz de una aurora no viene del Sol. Del Sol vienen las partículas; la luz la " +
          "fabrica el aire de nuestra atmósfera al recibir el golpe.",
      },
      {
        b: "rotulo",
        texto:
          "Cada color es un gas distinto a una altura distinta",
      },
      {
        b: "parrafo",
        texto:
          "¿Y por qué salen esos colores concretos y no otros? Es simple: porque cada gas emite " +
          "en su propio color, y cada gas está a su propia altura. El color no es decorativo, es " +
          "información.",
      },
      {
        b: "parrafo",
        texto:
          "- <strong>Verde.</strong> Lo produce el oxígeno atómico, con una emisión de " +
          "<strong>557,7 nanómetros</strong>, por encima de los cien kilómetros de altitud. Es el " +
          "color dominante y el que sale en casi todas las fotografías, hasta el punto de que " +
          "mucha gente cree que las auroras son verdes y punto.",
      },
      {
        b: "parrafo",
        texto:
          "- <strong>Rojo.</strong> Lo produce también el oxígeno, pero desde un estado excitado " +
          "distinto, con una emisión de <strong>630,0 nanómetros</strong>. Aparece mucho más " +
          "arriba, entre los doscientos y los trescientos kilómetros, y por eso es el color que " +
          "corona las auroras grandes.",
      },
      {
        b: "parrafo",
        texto:
          "- <strong>Violeta y azul.</strong> Los produce el nitrógeno molecular, y aparecen en " +
          "la parte de abajo, hacia los noventa y cinco kilómetros, cuando las partículas llegan " +
          "con suficiente energía para penetrar tan hondo.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en lo que significa esa lista puesta en orden. Una aurora grande con rojo " +
          "arriba, verde en el medio y un ribete violeta abajo no es una combinación bonita " +
          "elegida al azar: es <strong>un corte vertical de la atmósfera</strong>, con cada " +
          "franja de color marcando a qué altura y contra qué gas están chocando las partículas. " +
          "Estás viendo un mapa de altitudes dibujado en el cielo.",
      },
      {
        b: "parrafo",
        texto:
          "Y hay un detalle que refuerza la lectura. La aurora tiene un borde inferior " +
          "sorprendentemente nítido, como si alguien la hubiera recortado por abajo, y eso llama " +
          "la atención en las fotos. Ese borde no lo marca el haz de partículas: lo marca la " +
          "densidad del aire, en un punto muy concreto que merece su propia explicación.",
      },
      {
        b: "rayo",
        texto:
          "El verde es oxígeno a más de cien kilómetros, el rojo es oxígeno por encima de " +
          "doscientos, y el violeta es nitrógeno a noventa y cinco. Una aurora es un mapa de " +
          "alturas.",
      },
    ],
  },
  {
    id: "por-que-hay-personas-con-ojos-azules",
    titulo: "Por qué hay personas con ojos azules",
    categoria: "Cuerpo humano",
    color: "var(--clay)",
    /* Serie «por-que-hay-personas-con-ojos-azules», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Todos los ojos azules del mundo vienen de una sola persona» */
    encargo: "Todos los ojos azules del mundo vienen de una sola persona",
    fotos: [
      {
        local: p_por_que_hay_personas_con_ojos_azules,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Todos los ojos azules del mundo vienen de una sola persona",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La pista no fue el color: fue la falta de variación",
      },
      {
        b: "parrafo",
        texto:
          "Hans Eiberg, genetista de la Universidad de Copenhague, llevaba desde los años noventa " +
          "rastreando qué parte del genoma decide el color de los ojos. En 2008 publicó en la " +
          "revista <em>Human Genetics</em> el resultado que cerró el asunto, y lo que lo cerró no " +
          "fue encontrar la mutación, sino comprobar algo raro sobre ella.",
      },
      {
        b: "parrafo",
        texto:
          "Cuando una característica aparece varias veces por separado, cada aparición trae su " +
          "propia versión, con pequeñas diferencias alrededor. Eiberg encontró lo contrario: en " +
          "las personas de ojos azules, el trozo de genoma implicado era prácticamente idéntico " +
          "en todas ellas, de Escandinavia a Oriente Medio. Sin variación.",
      },
      {
        b: "parrafo",
        texto:
          "Eso solo tiene una explicación posible. El cambio ocurrió <strong>una vez</strong>, en " +
          "una persona, y todos los ojos azules que existen hoy descienden de aquel individuo. " +
          "Vivió, según los cálculos del propio equipo, hace entre seis mil y diez mil años.",
      },
      {
        b: "rayo",
        texto:
          "Los ojos azules no son una forma de tener los ojos. Son un apellido: la señal de que " +
          "compartes un antepasado con todas las demás personas de ojos azules del planeta.",
      },
      {
        b: "rotulo",
        texto:
          "El cambio no rompió nada: bajó un interruptor",
      },
      {
        b: "parrafo",
        texto:
          "¿Y qué hace exactamente esa mutación? Aquí está la parte elegante, y es simple: " +
          "<strong>no toca el gen del pigmento</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "El gen que fabrica melanina en el iris se llama <strong>OCA2</strong>, y en las " +
          "personas de ojos azules funciona perfectamente. Lo que cambió está en un gen vecino, " +
          "<strong>HERC2</strong>, dentro de un tramo que no fabrica nada y que se limita a " +
          "regular: es el trozo de ADN que enciende y apaga la actividad de OCA2. Una sola letra " +
          "distinta en ese regulador basta para que OCA2 se quede funcionando a un volumen mucho " +
          "más bajo.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en la diferencia, porque explica lo que se ve. Si la mutación hubiera roto el " +
          "gen, no habría melanina en absoluto y el resultado sería albinismo, con problemas de " +
          "visión asociados. Lo que hace es bajar el volumen, no apagar el aparato: queda " +
          "melanina en el resto del cuerpo y queda muy poca en la capa delantera del iris. " +
          "Suficiente para que el ojo funcione igual de bien, y suficientemente poca para que se " +
          "vea azul.",
      },
      {
        b: "rayo",
        texto:
          "La naturaleza no inventó un ojo azul. Bajó el volumen de un gen que ya existía y el " +
          "azul salió solo, por óptica.",
      },
    ],
  },
  {
    id: "por-que-hay-personas-con-ojos-marrones",
    titulo: "Por qué hay personas con ojos marrones",
    categoria: "Cuerpo humano",
    color: "var(--teal)",
    /* Serie «por-que-hay-personas-con-ojos-marrones», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El marrón es el color original, y el único que existe de verdad» */
    encargo: "El marrón es el color original, y el único que existe de verdad",
    fotos: [
      {
        local: p_por_que_hay_personas_con_ojos_marrones,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El marrón es el color original, y el único que existe de verdad",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El ojo humano fabrica un solo pigmento, y es marrón",
      },
      {
        b: "parrafo",
        texto:
          "Quizá des por hecho que en un ojo azul hay algo azul, y en uno verde algo verde, igual " +
          "que en uno marrón hay algo marrón. Es lo lógico, y es falso en dos tercios de los " +
          "casos.",
      },
      {
        b: "parrafo",
        texto:
          "En el iris humano solo hay un pigmento: la <strong>melanina</strong>, la misma " +
          "sustancia que da color a la piel y al pelo, y que en el ojo tira a marrón oscuro. No " +
          "existe un pigmento azul en el cuerpo humano. Tampoco uno verde ni uno gris. Lo único " +
          "que cambia de una persona a otra es cuánta melanina hay en la capa delantera del iris, " +
          "y esa cantidad basta para producir toda la gama de colores de ojos que existen.",
      },
      {
        b: "parrafo",
        texto:
          "Cuando hay bastante melanina delante, la luz que entra se absorbe y lo que vuelve es " +
          "marrón. Ese es el único caso en el que el color que ves es literalmente el color de " +
          "algo. Un ojo marrón es marrón por la misma razón por la que un ladrillo es rojo: " +
          "porque el material lo es.",
      },
      {
        b: "rayo",
        texto:
          "De todos los colores de ojos que existen, solo uno está hecho de un pigmento de ese " +
          "color. Los demás son efectos ópticos sobre la falta de pigmento.",
      },
      {
        b: "rotulo",
        texto:
          "Al principio todos los teníamos así",
      },
      {
        b: "parrafo",
        texto:
          "¿Y por qué el marrón y no otro? Es simple: <strong>es el estado de partida</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Durante la mayor parte de la historia de nuestra especie, todos los seres humanos " +
          "tuvieron los ojos marrones. Es lo que sigue teniendo la mayoría de la población " +
          "mundial y lo que tienen prácticamente todos nuestros parientes primates. Los demás " +
          "colores aparecieron después, y aparecieron por sustracción: por mutaciones que reducen " +
          "la cantidad de melanina que se deposita en el iris, no por mutaciones que añadan un " +
          "color nuevo.",
      },
      {
        b: "parrafo",
        texto:
          "Hans Eiberg, genetista de la Universidad de Copenhague que dedicó décadas a rastrear " +
          "esas mutaciones, lo resume en cuatro palabras: originalmente, todos teníamos los ojos " +
          "marrones.",
      },
      {
        b: "parrafo",
        texto:
          "Conviene fijarse en la dirección del cambio, porque cambia cómo se lee todo el asunto. " +
          "Los ojos claros no son una variante añadida al catálogo. Son el catálogo original con " +
          "una pieza quitada.",
      },
      {
        b: "rayo",
        texto:
          "Un ojo azul no tiene nada que un ojo marrón no tenga. Tiene menos.",
      },
    ],
  },
  {
    id: "por-que-hay-personas-con-ojos-verdes",
    titulo: "Por qué hay personas con ojos verdes",
    categoria: "Cuerpo humano",
    color: "var(--sage)",
    /* Serie «por-que-hay-personas-con-ojos-verdes», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El verde no es un color: es un punto medio muy difícil de acertar» */
    encargo: "El verde no es un color: es un punto medio muy difícil de acertar",
    fotos: [
      {
        local: p_por_que_hay_personas_con_ojos_verdes,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El verde no es un color: es un punto medio muy difícil de acertar",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Dos de cada cien personas, y ningún pigmento verde",
      },
      {
        b: "parrafo",
        texto:
          "De todos los colores de ojos, el verde es el más raro: lo tiene alrededor de un 2 % de " +
          "la población mundial. Para hacerse una idea de la desproporción, más de la mitad de " +
          "los seres humanos tienen los ojos marrones.",
      },
      {
        b: "parrafo",
        texto:
          "Y esa rareza no se explica porque haga falta un pigmento poco común. Se explica " +
          "precisamente por lo contrario: <strong>no existe ningún pigmento verde en el ojo " +
          "humano</strong>. En el iris solo hay melanina, que es marrón. Un ojo verde no tiene " +
          "una sustancia que le falte a los demás.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que tiene es una cantidad. Muy poca melanina en la capa delantera del iris deja el " +
          "ojo azul, porque el tejido dispersa la luz y devuelve sobre todo azul. Mucha melanina " +
          "lo deja marrón, porque el pigmento absorbe casi todo. El verde aparece cuando hay una " +
          "cantidad intermedia: la justa para que el pigmento amarillento-marrón tiña la luz azul " +
          "que devuelve la dispersión, y las dos cosas juntas se lean como verde.",
      },
      {
        b: "rayo",
        texto:
          "El verde no es un color que el ojo produzca. Es lo que se ve cuando dos mecanismos " +
          "distintos —dispersión y pigmento— se cruzan en el punto exacto.",
      },
      {
        b: "rotulo",
        texto:
          "Por eso los ojos verdes cambian y los marrones no",
      },
      {
        b: "parrafo",
        texto:
          "Ahora bien, si el verde depende de que dos efectos coincidan en una proporción " +
          "concreta, hay una consecuencia que cualquiera con ojos claros ha notado alguna vez.",
      },
      {
        b: "parrafo",
        texto:
          "El color parece cambiar. Con luz de mediodía se ven más verdes; en interior tiran a " +
          "gris o a avellana; según la ropa que lleve la persona parecen otra cosa. Y no es una " +
          "impresión: la mitad del color depende de cómo se disperse la luz que entra, así que " +
          "cambiar la luz cambia literalmente el resultado.",
      },
      {
        b: "parrafo",
        texto:
          "Un ojo marrón, en cambio, se ve igual a cualquier hora y con cualquier lámpara. El " +
          "pigmento absorbe y devuelve lo mismo pase lo que pase, sin depender de las " +
          "condiciones. Es la diferencia entre un color que está guardado en el material y un " +
          "color que se produce en el momento.",
      },
      {
        b: "rayo",
        texto:
          "Los ojos verdes y los azules no tienen un color: tienen un resultado. Por eso se los " +
          "describe distinto según la luz, y por eso a nadie le cambia el marrón.",
      },
    ],
  },
  {
    id: "por-que-hay-personas-rubias",
    titulo: "Por qué hay personas rubias",
    categoria: "Cuerpo humano",
    color: "var(--ochre)",
    /* Serie «por-que-hay-personas-rubias», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El pelo rubio europeo lo decide una letra que ni siquiera está en el gen» */
    encargo: "El pelo rubio europeo lo decide una letra que ni siquiera está en el gen",
    fotos: [
      {
        local: p_por_que_hay_personas_rubias,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El pelo rubio europeo lo decide una letra que ni siquiera está en el gen",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Buscaban el gen y lo encontraron a trescientas cincuenta mil letras de distancia",
      },
      {
        b: "parrafo",
        texto:
          "Durante años se buscó el responsable del pelo rubio donde parecía lógico: dentro de " +
          "algún gen relacionado con el pigmento. El equipo de David Kingsley, profesor de " +
          "biología del desarrollo en la Universidad de Stanford, con Catherine Guenther como " +
          "primera firmante, lo encontró en otro sitio.",
      },
      {
        b: "parrafo",
        texto:
          "El cambio está en el cromosoma 12, y consiste en una sola letra: donde la mayoría de " +
          "la gente tiene una adenina, las personas rubias tienen una guanina. Pero esa letra no " +
          "está dentro del gen al que afecta. Está a <strong>trescientas cincuenta mil letras de " +
          "distancia</strong>, en un tramo que no fabrica nada y que se dedica exclusivamente a " +
          "regular cuánto trabaja el gen <strong>KITLG</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "El efecto es minúsculo y quirúrgico a la vez: reduce la actividad de KITLG en un 20 % " +
          "aproximadamente, y solo en los folículos del pelo. En el resto del cuerpo el gen sigue " +
          "funcionando igual. El trabajo se publicó en <em>Nature Genetics</em> el 1 de junio de " +
          "2014.",
      },
      {
        b: "rayo",
        texto:
          "El pelo rubio no lo produce un gen del pelo rubio. Lo produce un regulador que baja un " +
          "20 % un gen que hace muchas otras cosas, y solo lo baja en la cabeza.",
      },
      {
        b: "rotulo",
        texto:
          "La prueba fue meter esa letra en un ratón",
      },
      {
        b: "parrafo",
        texto:
          "¿Y cómo se comprueba que una letra perdida en mitad del genoma hace algo? Aquí el " +
          "experimento es tan directo que casi da risa.",
      },
      {
        b: "parrafo",
        texto:
          "El equipo introdujo la versión con guanina en ratones de pelo marrón, sin tocar nada " +
          "más. Los ratones nacieron con el pelaje significativamente más claro. Una letra " +
          "cambiada, en una región que durante décadas se despachó como ADN sin función, y un " +
          "animal de otro color.",
      },
      {
        b: "parrafo",
        texto:
          "Kingsley resumió el hallazgo señalando lo fino del control: esa región regula con " +
          "enorme precisión dónde y cuánto se expresa KITLG, y una diferencia de expresión así de " +
          "pequeña basta para cambiar el color del pelo.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en lo que eso implica más allá del pelo. Durante mucho tiempo se llamó «ADN " +
          "basura» a las regiones que no fabrican proteínas, que son la inmensa mayoría del " +
          "genoma. Buena parte de lo que nos distingue a unos de otros no está en las " +
          "instrucciones, sino en los interruptores que deciden cuándo y dónde se leen.",
      },
      {
        b: "rayo",
        texto:
          "Lo que cambia entre dos personas casi nunca es la receta. Es el volumen al que se lee.",
      },
    ],
  },
  {
    id: "por-que-hay-terremotos",
    titulo: "Por qué hay terremotos",
    categoria: "Planeta Tierra",
    color: "var(--clay)",
    /* Serie «por-que-hay-terremotos», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Una falla no resbala: se atasca durante años y se rompe de golpe» */
    encargo: "Una falla no resbala: se atasca durante años y se rompe de golpe",
    fotos: [
      {
        local: p_por_que_hay_terremotos,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Una falla no resbala: se atasca durante años y se rompe de golpe",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El terreno se va cargando como un muelle antes de soltarse",
      },
      {
        b: "parrafo",
        texto:
          "La explicación que casi todo el mundo tiene en la cabeza es que las placas se rozan al " +
          "deslizarse y que ese roce hace temblar el suelo. Si fuera así, la Tierra vibraría " +
          "suavemente y sin parar, y no habría terremotos: habría un zumbido permanente.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que ocurre es lo contrario, y empieza porque la falla se <strong>bloquea</strong>. " +
          "Una vez bloqueada, el movimiento relativo entre las placas continúa igualmente, y como " +
          "el terreno no puede deslizarse, lo que hace es deformarse. Eso aumenta la tensión y va " +
          "acumulando energía elástica almacenada en todo el volumen de roca que rodea la falla.",
      },
      {
        b: "parrafo",
        texto:
          "Y así sigue, durante años o durante siglos, hasta que la tensión sube lo suficiente " +
          "para romper el punto que estaba aguantando. En ese instante la falla se desliza de " +
          "golpe sobre la parte que estaba trabada y suelta toda la energía guardada.",
      },
      {
        b: "parrafo",
        texto:
          "Ahí está la clave de todo el fenómeno. Un terremoto no es el momento en que las placas " +
          "se mueven. Es el momento en que <strong>dejan de estar quietas</strong> después de " +
          "llevar mucho tiempo empujando.",
      },
      {
        b: "rayo",
        texto:
          "La falla no genera el terremoto moviéndose, lo genera negándose a moverse. Todo lo que " +
          "se libera en unos segundos son décadas de deformación acumulada mientras el terreno " +
          "aguantaba.",
      },
      {
        b: "rotulo",
        texto:
          "Es el mismo mecanismo que hace chirriar una tiza",
      },
      {
        b: "parrafo",
        texto:
          "Aquí conviene poner nombre a lo que hace que la falla se trabe, porque no es que las " +
          "rocas estén pegadas.",
      },
      {
        b: "parrafo",
        texto:
          "Las superficies de una falla no son lisas: tienen irregularidades llamadas " +
          "<strong>asperezas</strong>, salientes y encajes que aumentan la fricción en puntos " +
          "concretos. La mayoría de las fallas las tienen, y eso produce un comportamiento de " +
          "tipo <strong>atasco y salto</strong>: se agarra, aguanta, cede de golpe, y vuelve a " +
          "agarrarse.",
      },
      {
        b: "parrafo",
        texto:
          "Y ese comportamiento no es exclusivo de la geología. Lo tienes en casa varias veces al " +
          "día. Una puerta que no cede y de pronto se abre de golpe. Una tiza que chirría en una " +
          "pizarra en lugar de deslizarse. El arco de un violín, que suena precisamente porque " +
          "engancha la cuerda, la arrastra un poco, la suelta y vuelve a engancharla cientos de " +
          "veces por segundo. Un armario pesado que se resiste a moverse por el suelo y de " +
          "repente pega un salto.",
      },
      {
        b: "parrafo",
        texto:
          "Todas esas cosas son el mismo fenómeno físico que un terremoto. La diferencia no está " +
          "en el mecanismo, está en la cantidad de roca implicada.",
      },
      {
        b: "rayo",
        texto:
          "El suelo de un terremoto se comporta exactamente igual que una tiza chirriando en una " +
          "pizarra. Es el mismo agarrarse y soltarse, con el mismo sonido de fondo, aplicado a un " +
          "trozo de corteza terrestre.",
      },
    ],
  },
  {
    id: "por-que-la-estatua-de-la-libertad-es-verde",
    titulo: "Por qué la Estatua de la Libertad es verde",
    categoria: "Historia",
    color: "var(--plum)",
    /* Serie «por-que-la-estatua-de-la-libertad-es-verde», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Llegó del color de una moneda de cobre y tardó veinte años en cambiar» */
    encargo: "Llegó del color de una moneda de cobre y tardó veinte años en cambiar",
    fotos: [
      {
        local: p_por_que_la_estatua_de_la_libertad_es_verde,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Llegó del color de una moneda de cobre y tardó veinte años en cambiar",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "En 1886 no era verde: era del color de un céntimo nuevo",
      },
      {
        b: "parrafo",
        texto:
          "La estatua se inauguró en 1886 y quienes la vieron aquel día no vieron nada parecido a " +
          "lo que hay en las fotografías de hoy. La piel es de cobre, y el cobre recién puesto es " +
          "de un marrón rojizo brillante, el color exacto de una moneda de céntimo sin usar.",
      },
      {
        b: "parrafo",
        texto:
          "Los números de la pieza explican por qué era una superficie tan grande de metal " +
          "desnudo. La estatua mide más de noventa metros desde el suelo hasta la antorcha, y " +
          "lleva encima ochenta toneladas de cobre —ciento setenta y seis mil libras— sostenidas " +
          "por una estructura interna de doscientas toneladas.",
      },
      {
        b: "parrafo",
        texto:
          "Y el detalle que descoloca a todo el mundo: ese cobre tiene un grosor de tres treinta " +
          "y dosavos de pulgada, unos dos milímetros y medio. El Servicio de Parques Nacionales " +
          "lo describe con la comparación más clara posible: <strong>el grosor de dos monedas " +
          "puestas una encima de otra</strong>.",
      },
      {
        b: "rayo",
        texto:
          "La estatua no es un bloque de metal. Es una lámina más fina que un par de monedas, " +
          "estirada sobre noventa metros de armazón.",
      },
      {
        b: "rotulo",
        texto:
          "En 1906 hubo dinero asignado para devolverla a su color",
      },
      {
        b: "parrafo",
        texto:
          "El cambio de color tardó unas dos décadas, y no fue uniforme: durante años la estatua " +
          "estuvo a medias, con zonas todavía cobrizas y zonas ya azuladas, según cómo le daban " +
          "el viento y la lluvia salada del puerto.",
      },
      {
        b: "parrafo",
        texto:
          "A mucha gente aquello le pareció un deterioro. En 1906 hubo llamamientos a repintarla " +
          "para devolverle el aspecto original, y la cosa fue en serio: el Congreso llegó a " +
          "asignar sesenta y dos mil dólares para la operación.",
      },
      {
        b: "parrafo",
        texto:
          "No se hizo, por dos motivos que conviene contar juntos. Hubo protestas públicas que " +
          "calificaron la idea de sacrilegio, así que la presión social pesó. Pero también pesó " +
          "un argumento práctico y bastante menos romántico: una estatua pintada hay que " +
          "repintarla cada veinticinco años más o menos, para siempre, y eso era una factura " +
          "recurrente que nadie quería asumir.",
      },
      {
        b: "rayo",
        texto:
          "El verde de la Estatua de la Libertad no fue una decisión estética. Es lo que pasó " +
          "cuando una propuesta impopular se cruzó con un presupuesto de mantenimiento.",
      },
    ],
  },
  {
    id: "una-molecula-a-partir-de-los-cuarenta",
    titulo: "Por qué la gente mayor huele distinto",
    categoria: "Cuerpo humano",
    color: "var(--slate)",
    /* Serie «por-que-la-gente-mayor-huele-distinto», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Hay una molécula que solo aparece a partir de los cuarenta» */
    encargo: "Hay una molécula que solo aparece a partir de los cuarenta",
    fotos: [
      {
        local: p_una_molecula_a_partir_de_los_cuarenta,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Hay una molécula que solo aparece a partir de los cuarenta",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Lo que parecía una impresión resultó ser un compuesto concreto",
      },
      {
        b: "parrafo",
        texto:
          "Que la gente mayor huele de una manera particular es de esas cosas que todo el mundo " +
          "ha notado alguna vez y casi nadie dice en voz alta. Y lo interesante es que durante " +
          "mucho tiempo se quedó exactamente ahí, en el terreno de la impresión subjetiva y la " +
          "incomodidad social, sin que nadie se molestara en comprobar si había algo medible " +
          "detrás.",
      },
      {
        b: "parrafo",
        texto:
          "Lo hubo. En 2001, un equipo japonés dirigido por Shinichiro Haze publicó en el " +
          "<em>Journal of Investigative Dermatology</em> el resultado de analizar el olor " +
          "corporal de personas de entre veintiséis y setenta y cinco años. Buscaban diferencias " +
          "químicas asociadas a la edad, y encontraron una muy limpia: un compuesto llamado " +
          "<strong>2-nonenal</strong>, un aldehído insaturado que describen con un olor grasiento " +
          "y herbáceo.",
      },
      {
        b: "parrafo",
        texto:
          "El dato que lo convierte en un hallazgo y no en una curiosidad es dónde aparecía. El " +
          "2-nonenal se detectó <strong>únicamente en los sujetos de cuarenta años o " +
          "más</strong>. En los más jóvenes no estaba, y no es que estuviera en menor cantidad: " +
          "no aparecía. Hay un compuesto que sencillamente no formaba parte de tu olor y que en " +
          "algún momento empieza a formar parte de él.",
      },
      {
        b: "rayo",
        texto:
          "No es una impresión ni un prejuicio. Es una molécula concreta que en los menores de " +
          "cuarenta no aparece.",
      },
      {
        b: "rotulo",
        texto:
          "Y sale de la piel oxidándose",
      },
      {
        b: "parrafo",
        texto:
          "El mecanismo también quedó bastante claro en el mismo trabajo, y no tiene nada que ver " +
          "con la higiene, que es lo primero que la gente supone.",
      },
      {
        b: "parrafo",
        texto:
          "En la superficie de la piel hay una capa de lípidos, grasas que el propio cuerpo " +
          "segrega y que cumplen su función protectora. Con la edad cambia la composición de esa " +
          "capa: aumentan unos ácidos grasos insaturados concretos, los llamados omega-7, y " +
          "aumentan también los peróxidos lipídicos, que son el producto de que esas grasas se " +
          "vayan oxidando. Los dos crecen con los años, y el estudio encontró que los niveles de " +
          "2-nonenal correlacionan con ambos.",
      },
      {
        b: "parrafo",
        texto:
          "La cadena completa es sencilla: la piel acumula un tipo de grasa que antes tenía en " +
          "menor cantidad, esa grasa se oxida al contacto con el aire, y de esa degradación " +
          "oxidativa sale el 2-nonenal. Es decir, el olor no lo produce ninguna glándula ni " +
          "ninguna bacteria: se produce en la superficie, por oxidación, más o menos igual que se " +
          "pone rancio un aceite. Y por eso no se quita frotando: no es suciedad acumulada, es " +
          "química ocurriendo encima.",
      },
      {
        b: "parrafo",
        texto:
          "Un apunte cultural que dice bastante sobre por qué el estudio salió de allí y no de " +
          "otro sitio. En japonés existe una palabra para esto, <em>kareishu</em>, que se podría " +
          "traducir como olor de la edad, y no es un término técnico sino corriente. Hay toda una " +
          "categoría de productos de higiene dirigida específicamente a ese compuesto, y el " +
          "equipo que publicó el trabajo venía del sector de la cosmética. En otras culturas el " +
          "fenómeno se percibe igual y no se nombra, que es probablemente el motivo de que " +
          "tardara tanto en estudiarse.",
      },
      {
        b: "rayo",
        texto:
          "No es suciedad ni falta de higiene. Es grasa de la piel oxidándose, más parecido a un " +
          "aceite que se pone rancio que a nada que se quite frotando.",
      },
    ],
  },
  {
    id: "la-luna-del-horizonte-es-mas-pequena",
    titulo: "Por qué la Luna se ve enorme en el horizonte",
    categoria: "Ciencia",
    color: "var(--slate)",
    /* Serie «por-que-la-luna-se-ve-enorme-en-el-horizonte», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La Luna del horizonte no es más grande: es más pequeña» */
    encargo: "La Luna del horizonte no es más grande: es más pequeña",
    fotos: [
      {
        local: p_la_luna_del_horizonte_es_mas_pequena,
        autor: "",
        licencia: "Pexels License",
        alt:
          "La Luna del horizonte no es más grande: es más pequeña",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Fotografíala y la ilusión se cae sola",
      },
      {
        b: "parrafo",
        texto:
          "Es de las experiencias más convincentes que ofrece el cielo. La Luna sale por detrás " +
          "de los edificios y aparece descomunal, anaranjada, tan grande que uno tiene la " +
          "sensación de que ha pasado algo raro esa noche. Horas después está alta, pequeña y " +
          "blanca, y parece otra cosa completamente distinta.",
      },
      {
        b: "parrafo",
        texto:
          "Pues no ha pasado nada. La Luna que ves saliendo y la que ves en lo alto son " +
          "idénticas, y no en el sentido vago de «parecidas»: son idénticas en el sentido medible " +
          "del término. Ocupan en el cielo el mismo ángulo, unos <strong>0,52 grados</strong>, " +
          "más o menos lo que tapa la yema del pulgar con el brazo estirado. Y lo tapa igual de " +
          "bien en el horizonte que en el cenit.",
      },
      {
        b: "parrafo",
        texto:
          "Hay tres maneras de comprobarlo tú mismo, y cualquiera de las tres derriba la " +
          "impresión en cinco segundos. La primera es la fotografía: retrata la Luna saliendo y " +
          "vuelve a retratarla horas después con el mismo objetivo, y al poner las dos imágenes " +
          "juntas verás dos discos exactamente del mismo tamaño. La segunda es el tubo: enrolla " +
          "un folio hasta que la Luna recién salida llene justo el agujero, pega el cilindro con " +
          "cinta para que no cambie, y vuelve a mirar por él cuando esté arriba; sigue llenándolo " +
          "igual. Y la tercera es la más ridícula y la más contundente: agáchate y mira la Luna " +
          "del horizonte entre tus propias piernas, cabeza abajo. Recupera su tamaño normal de " +
          "golpe.",
      },
      {
        b: "parrafo",
        texto:
          "Eso significa que el fenómeno no está en el cielo. Está entero dentro de tu cabeza, y " +
          "por eso la cámara, que no tiene cabeza, no lo registra.",
      },
      {
        b: "rayo",
        texto:
          "La Luna del horizonte y la Luna alta miden lo mismo, 0,52 grados. Ninguna cámara ha " +
          "fotografiado nunca la diferencia, porque no existe.",
      },
      {
        b: "rotulo",
        texto:
          "Y la física va en la dirección contraria a lo que ves",
      },
      {
        b: "parrafo",
        texto:
          "Ahora la parte que le da la vuelta al asunto, porque no es solo que la Luna del " +
          "horizonte no sea más grande: es que además es <strong>más pequeña</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "¿Por qué iba a serlo, si es la misma Luna la misma noche? Es simple: cuando la tienes " +
          "justo encima de la cabeza, estás mirándola desde lo alto de la Tierra, y cuando está " +
          "en el horizonte la estás mirando desde el costado del planeta. Entre una posición y " +
          "otra hay un radio terrestre de diferencia, unos 6.400 kilómetros. La Luna en el cenit " +
          "está más cerca de ti que la Luna en el horizonte, y por tanto se ve algo mayor.",
      },
      {
        b: "parrafo",
        texto:
          "La diferencia real es de aproximadamente un <strong>1,5 %</strong>, a favor de la Luna " +
          "alta. Así que la percepción no solo exagera: se equivoca de signo. Tú ves enorme " +
          "precisamente la posición en la que el objeto está más lejos y ocupa menos cielo.",
      },
      {
        b: "parrafo",
        texto:
          "Para calibrar hasta qué punto engaña la impresión, conviene compararla con un fenómeno " +
          "real que sí sale en las noticias. Una superluna —esa que se anuncia como " +
          "acontecimiento— es apenas un 14 % mayor que una luna corriente, y la inmensa mayoría " +
          "de la gente no nota absolutamente nada si no se lo dicen antes. La ilusión del " +
          "horizonte, en cambio, se siente muchísimo más fuerte que ese 14 %, y su tamaño real es " +
          "cero. El cerebro te está mostrando una diferencia gigantesca donde el mundo no tiene " +
          "ninguna.",
      },
      {
        b: "rayo",
        texto:
          "La Luna del horizonte es un 1,5 % más pequeña que la del cenit, porque está un radio " +
          "terrestre más lejos. La ilusión no exagera un efecto real: lo invierte.",
      },
    ],
  },
  {
    id: "la-miel-no-se-conserva",
    titulo: "Por qué la miel nunca caduca",
    categoria: "Cocina",
    color: "var(--clay)",
    /* Serie «por-que-la-miel-nunca-caduca», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La miel no se conserva: mata lo que se le acerca» */
    encargo: "La miel no se conserva: mata lo que se le acerca",
    fotos: [
      {
        local: p_la_miel_no_se_conserva,
        autor: "",
        licencia: "Pexels License",
        alt:
          "La miel no se conserva: mata lo que se le acerca",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Tres defensas montadas una encima de otra",
      },
      {
        b: "parrafo",
        texto:
          "Abre el armario de la cocina y compara dos tarros. La mermelada que abriste hace tres " +
          "meses tiene que vivir en la nevera y aun así acabará criando moho en la superficie. El " +
          "bote de miel lleva ahí dos años, a temperatura ambiente, con la cuchara metida más de " +
          "una vez, y no le ha pasado absolutamente nada. Las dos cosas son azúcar disuelto en " +
          "agua, y sin embargo una se estropea y la otra no. La diferencia no es que la miel " +
          "«aguante mejor»: es que la miel es un sitio activamente hostil para cualquier cosa que " +
          "intente vivir en ella.",
      },
      {
        b: "parrafo",
        texto:
          "La primera defensa es el agua, o mejor dicho su ausencia. El néctar que recogen las " +
          "abejas es agua en su mayor parte, en torno a un setenta u ochenta por ciento, y lo que " +
          "sale del panal tiene menos de un veinte. Esa diferencia no la pone el sol: la ponen " +
          "las abejas, que van deshidratando el néctar en las celdas batiendo las alas para mover " +
          "el aire hasta que el líquido se espesa. Lo que importa no es solo cuánta agua queda, " +
          "sino cuánta de esa agua está disponible para alguien más, y esa magnitud tiene nombre " +
          "técnico: la <strong>actividad de agua</strong>. En la miel ronda el 0,56 y el 0,62, " +
          "por debajo del mínimo que necesitan las bacterias y los mohos para funcionar. Una " +
          "bacteria que caiga ahí dentro no solo no encuentra agua: la miel se la saca a ella por " +
          "ósmosis y la deja seca.",
      },
      {
        b: "parrafo",
        texto:
          "La segunda defensa es la acidez. La miel tiene un pH de entre 3,2 y 4,5, más ácida que " +
          "muchas cosas que consideramos ácidas, y a esos niveles la mayor parte de los " +
          "microorganismos que estropean alimentos ni siquiera arrancan.",
      },
      {
        b: "parrafo",
        texto:
          "Y la tercera es la que casi nadie espera. Las abejas, mientras procesan el néctar, le " +
          "añaden una enzima propia llamada <strong>glucosa oxidasa</strong>. Esa enzima está " +
          "inactiva mientras la miel está concentrada, pero en cuanto se diluye un poco entra en " +
          "funcionamiento y produce dos cosas: ácido glucónico, que es de donde viene buena parte " +
          "de esa acidez, y <strong>peróxido de hidrógeno</strong>, que es exactamente el agua " +
          "oxigenada del botiquín. En cantidades pequeñísimas y liberado poco a poco, pero es " +
          "eso.",
      },
      {
        b: "rayo",
        texto:
          "La miel no es un alimento que se conserva bien. Es un desinfectante que además está " +
          "bueno.",
      },
      {
        b: "rotulo",
        texto:
          "Por eso hay miel en los hospitales",
      },
      {
        b: "parrafo",
        texto:
          "Con esa combinación no sorprende que la miel se haya usado sobre heridas desde la " +
          "Antigüedad, y sí sorprende un poco que haya vuelto a hacerlo la medicina moderna " +
          "después de décadas dándola por superstición. Hoy existen apósitos de <strong>miel de " +
          "grado médico</strong> con autorización sanitaria para tratar heridas y quemaduras, y " +
          "se emplean sobre todo en úlceras difíciles y lesiones que no terminan de cerrar.",
      },
      {
        b: "parrafo",
        texto:
          "Conviene subrayar bien la diferencia, porque aquí es fácil hacerse daño. La miel de " +
          "esos apósitos no es la del bote de tu cocina: procede normalmente de un tipo concreto " +
          "de planta, se produce en condiciones controladas y se esteriliza por irradiación antes " +
          "de envasarla. La miel de mesa no está esterilizada, y esa es una distinción con " +
          "consecuencias serias, no un tecnicismo.",
      },
      {
        b: "parrafo",
        texto:
          "De hecho, ese mismo detalle está detrás de la única advertencia sanitaria importante " +
          "que arrastra la miel. Puede contener esporas de <em>Clostridium botulinum</em>, que a " +
          "un adulto no le hacen nada porque su flora intestinal las mantiene a raya, pero que en " +
          "un bebé de menos de un año pueden germinar y producir botulismo infantil. Por eso " +
          "ninguna miel, por buena que sea, debe dársele a un niño antes del año de vida. Un " +
          "ambiente que mata bacterias no es lo mismo que un ambiente estéril.",
      },
      {
        b: "rayo",
        texto:
          "La miel impide que las bacterias crezcan, pero no elimina lo que ya trae dentro. Por " +
          "eso ningún bebé de menos de un año debe probarla.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Haz la cuenta de lo que cuesta secar el néctar. Si entra con un setenta " +
          "y cinco por ciento de agua y sale con menos de un veinte, para producir un solo kilo " +
          "de miel las abejas han tenido que evaporar del orden de tres kilos de agua, celda a " +
          "celda y batiendo las alas. Esa deshidratación es la mitad del trabajo de una colmena, " +
          "y es también la mitad de la razón por la que el resultado no se estropea.",
      },
    ],
  },
  {
    id: "moradas-y-amarillas",
    titulo: "Por qué la zanahoria es naranja",
    categoria: "Naturaleza",
    color: "var(--teal)",
    /* Serie «por-que-la-zanahoria-es-naranja», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Las primeras zanahorias eran moradas y amarillas» */
    encargo: "Las primeras zanahorias eran moradas y amarillas",
    fotos: [
      {
        local: p_moradas_y_amarillas,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Las primeras zanahorias eran moradas y amarillas",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La zanahoria salvaje es blanca, delgada y leñosa",
      },
      {
        b: "parrafo",
        texto:
          "<em>Daucus carota</em> crece silvestre por media Europa y buena parte de Asia, y su " +
          "raíz no se parece en nada a la del supermercado: es pálida, fina, fibrosa y sin ningún " +
          "interés culinario. Ese es el punto de partida.",
      },
      {
        b: "parrafo",
        texto:
          "La domesticación ocurrió, según el análisis genético más reciente, <strong>en la Alta " +
          "Edad Media</strong>, en la franja que va de Asia occidental a Asia central. El origen " +
          "concreto apunta a Afganistán, y posiblemente al norte de Irán y a Pakistán. La " +
          "expansión de las poblaciones de zanahoria oriental arranca hace unos mil trescientos " +
          "años.",
      },
      {
        b: "parrafo",
        texto:
          "Y aquellas primeras zanahorias cultivadas no eran naranjas. Eran <strong>moradas y " +
          "amarillas</strong>. Entre los años 900 y 1000 se extendieron desde Afganistán hasta el " +
          "Mediterráneo oriental, y hacia el siglo XIV ya estaban en Europa occidental y en " +
          "China. Siempre moradas y amarillas.",
      },
      {
        b: "rayo",
        texto:
          "Durante los primeros siglos de su historia como cultivo, la zanahoria fue morada o " +
          "amarilla. El naranja no estaba en el catálogo.",
      },
      {
        b: "rotulo",
        texto:
          "El naranja llegó tarde, y no fue un homenaje a nadie",
      },
      {
        b: "parrafo",
        texto:
          "La versión que circula por todas partes es que los holandeses volvieron naranja la " +
          "zanahoria en honor a Guillermo de Orange y a la casa real. Es una historia estupenda y " +
          "no hay pruebas de ella.",
      },
      {
        b: "parrafo",
        texto:
          "John Stolarczyk, conservador del World Carrot Museum, lo dice sin rodeos: no existe " +
          "ninguna prueba documental de que los holandeses inventaran la zanahoria naranja para " +
          "honrar a su familia real. Y hay además un problema de fechas, porque hay indicios de " +
          "cultivo de zanahoria naranja en la España del siglo XIV, dos siglos antes de Guillermo " +
          "de Orange.",
      },
      {
        b: "parrafo",
        texto:
          "¿Y de dónde salió entonces el naranja? Es simple: <strong>de las amarillas</strong>. " +
          "Las variedades amarillas del grupo occidental fueron acumulando mutaciones que subían " +
          "la carga de pigmentos, los agricultores fueron quedándose con las más intensas, y de " +
          "ahí salió el naranja. El estudio genómico de 2023 sitúa esa selección en Europa " +
          "occidental, y el primer tipo naranja bien descrito aparece efectivamente en los Países " +
          "Bajos, pero varios siglos después de que el color existiera.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que sí hicieron los holandeses fue lo que mejor sabían hacer: cultivarlo bien y " +
          "venderlo por todo el continente hasta convertirlo en el estándar mundial. No " +
          "inventaron el color. Montaron la distribución.",
      },
      {
        b: "rayo",
        texto:
          "Los holandeses no crearon la zanahoria naranja: la comercializaron tan bien que hoy " +
          "nos parece que la zanahoria siempre fue de ese color.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Las variedades antiguas no desaparecieron del todo. Todavía se cultivan " +
          "zanahorias blancas en zonas de Europa, casi siempre para alimentar ganado, y " +
          "variedades rojas —no naranjas— en Japón, además de tipos tradicionales de distintos " +
          "colores desde Turquía hasta la India y China.",
      },
    ],
  },
  {
    id: "costo-dos-mil-anos-demostrar-que-acertaban",
    titulo: "Por qué las abejas hacen celdas hexagonales",
    categoria: "Ciencia",
    color: "var(--teal)",
    /* Serie «por-que-las-abejas-hacen-celdas-hexagonales», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Costó dos mil años demostrar que las abejas tenían razón» */
    encargo: "Costó dos mil años demostrar que las abejas tenían razón",
    fotos: [
      {
        local: p_costo_dos_mil_anos_demostrar_que_acertaban,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Costó dos mil años demostrar que las abejas tenían razón",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La cera es carísima, y ahí está el problema a resolver",
      },
      {
        b: "parrafo",
        texto:
          "Para entender por qué la forma de las celdas importa tanto hay que empezar por un dato " +
          "de contabilidad: <strong>la cera sale muy cara</strong>. Según la FAO, las abejas " +
          "consumen alrededor de <strong>ocho kilos de miel</strong> para producir un solo kilo " +
          "de cera. Ocho a uno. Cada gramo de pared que construyen es alimento que se han comido " +
          "y que no van a almacenar.",
      },
      {
        b: "parrafo",
        texto:
          "Con esa restricción encima, el problema al que se enfrenta una colmena es un problema " +
          "de optimización perfectamente formulable: hay que dividir una superficie en celdas de " +
          "igual capacidad usando la menor cantidad posible de pared. Cada milímetro de pared " +
          "ahorrado son gramos de miel que se quedan en la despensa.",
      },
      {
        b: "parrafo",
        texto:
          "Y la primera parte de la respuesta es sencilla. Si quieres cubrir un plano con una " +
          "figura regular repetida, sin dejar huecos y sin solapamientos, solo hay tres " +
          "candidatas posibles: el triángulo, el cuadrado y el hexágono. Ninguna otra encaja " +
          "consigo misma sin dejar espacio muerto; los pentágonos no valen, los octógonos " +
          "tampoco. Y de esas tres, para una misma área encerrada, la que necesita menos " +
          "perímetro es el hexágono. Además, al compartir cada pared entre dos celdas contiguas, " +
          "el ahorro se duplica.",
      },
      {
        b: "parrafo",
        texto:
          "Esto se sabía, o más bien se sospechaba, desde muy antiguo. Hacia el año 36 antes de " +
          "Cristo ya aparece la cuestión en un texto de Marco Terencio Varrón, y siglos después " +
          "Pappus de Alejandría la dejó formulada con una claridad que todavía se cita: " +
          "<strong>si se emplea la misma cantidad de material en construir estas figuras, es el " +
          "hexágono el que podrá contener más miel</strong>.",
      },
      {
        b: "rayo",
        texto:
          "Las abejas gastan ocho kilos de miel por cada kilo de cera. El hexágono no es un " +
          "capricho estético: es la forma que menos pared necesita.",
      },
      {
        b: "rotulo",
        texto:
          "Nadie consiguió demostrarlo hasta 1999",
      },
      {
        b: "parrafo",
        texto:
          "¿Y estaba entonces resuelto el asunto desde la Antigüedad? Es simple: no. Estaba " +
          "<strong>afirmado</strong>, que no es lo mismo.",
      },
      {
        b: "parrafo",
        texto:
          "Durante dos mil años, la superioridad del hexágono fue una de esas cosas que todo el " +
          "mundo daba por ciertas y que nadie había probado. Se repetía en los libros, se " +
          "enseñaba, se citaba como hecho consumado —incluso matemáticos de primera fila la " +
          "afirmaban sin más—, y sin embargo no existía ninguna demostración. Es un caso precioso " +
          "de algo evidente que resulta ser endiabladamente difícil de justificar.",
      },
      {
        b: "parrafo",
        texto:
          "La dificultad está en un detalle que casi nadie ve al principio. Comparar el hexágono " +
          "con el cuadrado y el triángulo es fácil, pero eso solo cubre las figuras " +
          "<strong>regulares</strong>. Para demostrar el teorema de verdad hay que descartar " +
          "absolutamente cualquier otra manera de dividir el plano, incluidas las que usan formas " +
          "irregulares, distintas entre sí, con lados curvos, entrando y saliendo unas en otras. " +
          "Y el conjunto de todas las particiones posibles del plano es infinito y salvaje.",
      },
      {
        b: "parrafo",
        texto:
          "Se avanzó por partes. En 1943, el matemático húngaro László Fejes Tóth logró " +
          "demostrarlo para el caso en que todas las celdas son convexas, es decir, sin " +
          "entrantes. Un resultado importante, pero incompleto: quedaba abierta la posibilidad de " +
          "que alguna configuración retorcida, con celdas de formas caprichosas, batiera al " +
          "hexágono.",
      },
      {
        b: "parrafo",
        texto:
          "La demostración completa no llegó hasta <strong>1999</strong>, y la firmó Thomas " +
          "Hales. Lo que probó es exactamente esto: cualquier partición del plano en regiones de " +
          "igual área tiene un perímetro al menos tan grande como el de la retícula hexagonal " +
          "regular. Sin suposiciones sobre la forma de las celdas, sin excepciones. Ninguna " +
          "manera de dividir un plano en trozos iguales gasta menos pared que un panal.",
      },
      {
        b: "parrafo",
        texto:
          "De modo que la solución que se ve en una colmena es la mejor que existe, y esa " +
          "afirmación es un teorema desde hace poco más de veinticinco años.",
      },
      {
        b: "rayo",
        texto:
          "Que el hexágono sea la forma más eficiente se afirmaba desde hace dos mil años, pero " +
          "no se demostró hasta 1999. Ninguna partición del plano gasta menos pared que un panal.",
      },
    ],
  },
  {
    id: "las-rayas-no-son-un-camuflaje",
    titulo: "Por qué las cebras tienen rayas",
    categoria: "Naturaleza",
    color: "var(--teal)",
    /* Serie «por-que-las-cebras-tienen-rayas», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Las rayas de la cebra no son un camuflaje» */
    encargo: "Las rayas de la cebra no son un camuflaje",
    fotos: [
      {
        local: p_las_rayas_no_son_un_camuflaje,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Las rayas de la cebra no son un camuflaje",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Cinco explicaciones, y cuatro se cayeron",
      },
      {
        b: "parrafo",
        texto:
          "Darwin y Wallace ya discutían sobre esto en el siglo XIX sin ponerse de acuerdo, y " +
          "desde entonces la pregunta ha acumulado una lista de respuestas razonables que " +
          "competían entre sí. Eran básicamente cinco. Que las rayas camuflan a la cebra entre la " +
          "hierba alta y la luz temblona de la sabana. Que confunden al depredador cuando la " +
          "manada arranca a correr, porque un montón de rayas en movimiento cuesta de seguir con " +
          "la vista. Que ayudan a regular la temperatura, creando corrientes de aire entre las " +
          "bandas blancas y las negras. Que sirven para reconocerse unas a otras, ya que el " +
          "patrón es único en cada animal como una huella dactilar. Y una quinta bastante menos " +
          "épica: que espantan a las moscas.",
      },
      {
        b: "parrafo",
        texto:
          "En 2014, un equipo dirigido por Tim Caro las puso a prueba de una manera que no se le " +
          "había ocurrido a nadie. En vez de discutir cuál sonaba mejor, cogieron el mapa. Fueron " +
          "especie por especie y subespecie por subespecie, anotaron cuánta raya tenía cada una y " +
          "en qué parte del cuerpo, y cruzaron ese dato con todo lo que podría explicarlo: la " +
          "presencia de bosque, el área de caza de los grandes depredadores, la temperatura, y la " +
          "distribución geográfica de las moscas que pican.",
      },
      {
        b: "parrafo",
        texto:
          "El resultado fue de una limpieza incómoda. Las rayas no aparecen donde hay más leones. " +
          "No aparecen donde hace más calor. No aparecen donde hay más árboles entre los que " +
          "esconderse. Aparecen exactamente donde se dan varios meses seguidos de condiciones " +
          "ideales para que se reproduzcan los tábanos. Cuatro hipótesis se quedaron sin apoyo, y " +
          "la que ganó fue la única que no tenía ninguna grandeza.",
      },
      {
        b: "rayo",
        texto:
          "Las rayas no coinciden con los leones, ni con el calor, ni con los bosques. Coinciden " +
          "con las moscas.",
      },
      {
        b: "rotulo",
        texto:
          "No es un depredador con dientes: es un insecto",
      },
      {
        b: "parrafo",
        texto:
          "Cuesta aceptar la respuesta porque estropea una imagen buenísima. La cebra rayada " +
          "huyendo de la leona en la sabana dorada es una de las estampas más repetidas de la " +
          "naturaleza, y resulta que las rayas no tienen mucho que ver con eso. De hecho, hay un " +
          "detalle que debería habernos hecho sospechar antes: los leones cazan sobre todo de " +
          "noche y al amanecer, cuando el contraste de las rayas apenas se percibe, y varios " +
          "trabajos han encontrado que a distancias medias un depredador ve la silueta de una " +
          "cebra perfectamente. Como sistema antileones, sería un desastre.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que sí encaja es la otra escala, la pequeña. Los tábanos y las moscas del género " +
          "<em>Glossina</em> no matan de una dentellada: chupan sangre, provocan heridas que se " +
          "infectan y transmiten enfermedades como la tripanosomiasis, que es capaz de arrasar " +
          "poblaciones enteras de ungulados. Una sola de esas moscas no impresiona a nadie. Un " +
          "verano entero con miles de ellas encima puede desangrar y enfermar a un animal grande, " +
          "y eso sí es una presión evolutiva sostenida, todos los días, durante millones de años.",
      },
      {
        b: "parrafo",
        texto:
          "La evolución no premia lo espectacular, premia lo que mata más. Y en la sabana lo que " +
          "mata más no siempre es lo que tiene dientes.",
      },
      {
        b: "rayo",
        texto:
          "El sistema de defensa más llamativo de África no está diseñado contra los leones. Está " +
          "diseñado contra unos insectos de dos centímetros.",
      },
    ],
  },
  {
    id: "por-que-las-estatuas-griegas-son-blancas",
    titulo: "Por qué las estatuas griegas son blancas",
    categoria: "Historia",
    color: "var(--slate)",
    /* Serie «por-que-las-estatuas-griegas-son-blancas», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «No lo eran: estaban pintadas de colores fuertes» */
    encargo: "No lo eran: estaban pintadas de colores fuertes",
    fotos: [
      {
        local: p_por_que_las_estatuas_griegas_son_blancas,
        autor: "",
        licencia: "Pexels License",
        alt:
          "No lo eran: estaban pintadas de colores fuertes",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Un templo griego se parecía más a una feria que a un museo",
      },
      {
        b: "parrafo",
        texto:
          "La imagen mental es la misma para casi todo el mundo: mármol blanco, sobrio, " +
          "silencioso, con esa dignidad fría que asociamos a lo clásico. Museos enteros están " +
          "montados alrededor de esa idea, y buena parte de la arquitectura de los últimos tres " +
          "siglos la copia.",
      },
      {
        b: "parrafo",
        texto:
          "Aquellas estatuas estaban pintadas. No con veladuras suaves ni con toques discretos: " +
          "con colores planos y saturados, aplicados sobre toda la superficie, incluidos la piel, " +
          "el pelo, la ropa y los ojos. Los templos también, hasta la cornisa.",
      },
      {
        b: "parrafo",
        texto:
          "La paleta se conoce porque se han identificado los materiales. El verde salía de la " +
          "<strong>malaquita</strong>, un mineral de cobre. El azul, de la " +
          "<strong>azurita</strong>. Los amarillos y los ocres, de compuestos de arsénico. El " +
          "rojo intenso, del <strong>cinabrio</strong>, un mineral de mercurio. Y el negro, de " +
          "hueso quemado y de sarmientos de vid carbonizados.",
      },
      {
        b: "rayo",
        texto:
          "Lo que hoy nos parece la esencia del buen gusto clásico —la piedra desnuda— era en " +
          "realidad el soporte, no la obra terminada.",
      },
      {
        b: "rotulo",
        texto:
          "Lo que desapareció fue la pintura, no la intención",
      },
      {
        b: "parrafo",
        texto:
          "¿Y por qué no queda nada a la vista? Es simple: <strong>el mármol aguanta y el " +
          "pigmento no</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Una estatua enterrada, o expuesta a la intemperie durante dos mil años, pierde primero " +
          "las capas de color, que son finísimas y de naturaleza orgánica o mineral pero mucho " +
          "más frágil que la piedra. La lluvia, el sol, el suelo ácido y, más tarde, las " +
          "limpiezas de los museos se llevaron por delante casi todo.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que se conserva es el esqueleto. Y aquí ocurre algo que merece pararse a pensar: " +
          "hemos construido una idea entera de la Antigüedad sobre lo que resistió mejor el paso " +
          "del tiempo, no sobre lo que aquella gente quiso hacer. El blanco no es una decisión " +
          "estética griega. Es lo que queda cuando se borra una decisión estética griega.",
      },
      {
        b: "rayo",
        texto:
          "No estamos viendo el arte griego. Estamos viendo lo que sobrevivió del arte griego, y " +
          "confundimos una cosa con la otra.",
      },
    ],
  },
  {
    id: "el-amarillo-ya-estaba",
    titulo: "Por qué las hojas cambian de color",
    categoria: "Naturaleza",
    color: "var(--sage)",
    /* Serie «por-que-las-hojas-cambian-de-color», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El amarillo llevaba ahí todo el año, escondido» */
    encargo: "El amarillo llevaba ahí todo el año, escondido",
    fotos: [
      {
        local: p_el_amarillo_ya_estaba,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El amarillo llevaba ahí todo el año, escondido",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La hoja no se vuelve amarilla: deja de ser verde",
      },
      {
        b: "parrafo",
        texto:
          "La manera natural de contarlo es decir que en otoño las hojas cambian de color, como " +
          "si el árbol pintara algo encima. Y en el caso del amarillo y del naranja, lo que " +
          "ocurre es exactamente lo contrario: no se añade nada, se quita.",
      },
      {
        b: "parrafo",
        texto:
          "Esos tonos los producen los <strong>carotenoides</strong>, los mismos pigmentos de la " +
          "zanahoria y del pimiento, y están dentro de la hoja durante toda la temporada, desde " +
          "que brota en primavera. Lo que pasa es que no se ven, porque encima hay una cantidad " +
          "enorme de clorofila, que es intensamente verde y lo tapa todo. La hoja del mes de " +
          "julio ya es amarilla por debajo; solo que hay demasiado verde delante.",
      },
      {
        b: "parrafo",
        texto:
          "En otoño, el árbol deja de mantener la clorofila y esta se degrada. Y al desaparecer " +
          "el verde queda a la vista lo que ya había. El álamo que se vuelve dorado en noviembre " +
          "no ha fabricado ese dorado: lo ha destapado.",
      },
      {
        b: "rayo",
        texto:
          "La hoja no se pone amarilla. Se le retira el verde que llevaba encima.",
      },
      {
        b: "rotulo",
        texto:
          "Y no se está muriendo: la están vaciando",
      },
      {
        b: "parrafo",
        texto:
          "Ahora la parte que cambia por completo la lectura de la escena. Uno mira un bosque en " +
          "otoño y ve una especie de muerte lenta y melancólica, cosa que además la literatura " +
          "lleva siglos alimentando. Lo que hay en realidad es una operación de desmontaje " +
          "bastante fría y muy bien planificada.",
      },
      {
        b: "parrafo",
        texto:
          "Una hoja es una inversión cara, y lo más caro que lleva dentro es el " +
          "<strong>nitrógeno</strong>, un elemento que la planta consigue con dificultad del " +
          "suelo y que necesita para casi todo. Y da la casualidad de que buena parte de ese " +
          "nitrógeno está precisamente en la clorofila. Así que cuando llega el otoño y la hoja " +
          "va a dejar de ser rentable —menos luz, menos horas, riesgo de heladas—, el árbol no la " +
          "abandona sin más: la desmonta pieza a pieza y se lleva el material de vuelta al tronco " +
          "y a las raíces, donde lo guarda para fabricar las hojas del año siguiente.",
      },
      {
        b: "parrafo",
        texto:
          "Es decir, la degradación de la clorofila no es un síntoma del deterioro: es el " +
          "objetivo de la maniobra. El árbol está recuperando su nitrógeno, y el color amarillo " +
          "que tanto nos gusta es simplemente lo que se ve cuando ya se ha llevado casi todo.",
      },
      {
        b: "parrafo",
        texto:
          "Solo cuando el vaciado está hecho, el árbol corta. En la base del pecíolo se forma una " +
          "capa de células de corcho, la <strong>capa de abscisión</strong>, que va cerrando los " +
          "conductos que llevaban agua y minerales hasta la hoja. Cuando termina de sellar, la " +
          "hoja queda desconectada y cae con el primer viento. No se desprende porque esté muerta " +
          "y se suelte: se suelta porque el árbol ha terminado de sacarle lo aprovechable y ha " +
          "decidido soltarla.",
      },
      {
        b: "rayo",
        texto:
          "El otoño no es el árbol muriéndose por partes. Es un desmontaje ordenado para " +
          "recuperar el material antes de tirar la pieza.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Eso explica por qué una helada fuerte y temprana estropea el otoño. Si " +
          "el frío mata la hoja de golpe, el árbol no llega a completar el desmontaje: la hoja se " +
          "queda marrón y cae con el nitrógeno dentro. Los otoños espectaculares son los de los " +
          "descensos de temperatura graduales, que le dan tiempo al árbol a hacer bien su " +
          "trabajo.",
      },
    ],
  },
  {
    id: "por-que-las-pelotas-de-golf-tienen-hoyuelos",
    titulo: "Por qué las pelotas de golf tienen hoyuelos",
    categoria: "Ciencia",
    color: "var(--ochre)",
    /* Serie «por-que-las-pelotas-de-golf-tienen-hoyuelos», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Los hoyuelos de una pelota de golf empezaron siendo desperfectos» */
    encargo: "Los hoyuelos de una pelota de golf empezaron siendo desperfectos",
    fotos: [
      {
        local: p_por_que_las_pelotas_de_golf_tienen_hoyuelos,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Los hoyuelos de una pelota de golf empezaron siendo desperfectos",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Los jugadores notaron que las pelotas gastadas iban mejor",
      },
      {
        b: "parrafo",
        texto:
          "Durante el siglo XIX se jugaba al golf con la llamada <em>guttie</em>, una pelota de " +
          "núcleo macizo de gutapercha, un material vegetal parecido al caucho. Salían de fábrica " +
          "perfectamente lisas, que era lo que parecía correcto: una esfera pulida, sin " +
          "imperfecciones.",
      },
      {
        b: "parrafo",
        texto:
          "Y entonces alguien se fijó en algo que contradecía el sentido común. Se descubrió que " +
          "las marcas y muescas que la pelota iba adquiriendo con el uso normal —los golpes de " +
          "palo, los roces, los impactos contra el suelo— le daban un vuelo más consistente que " +
          "el de una <em>guttie</em> de superficie perfectamente lisa.",
      },
      {
        b: "parrafo",
        texto:
          "Léelo otra vez, porque es contraintuitivo hasta para alguien que sepa física. La " +
          "pelota estropeada volaba mejor que la nueva. No un poco peor de forma tolerable: " +
          "mejor.",
      },
      {
        b: "parrafo",
        texto:
          "Los fabricantes tomaron nota e hicieron lo lógico, que es dejar de esperar a que la " +
          "pelota se estropeara y ponerle el estropicio de fábrica, ordenado y repetible. De ahí " +
          "a los hoyuelos moldeados hay un paso corto.",
      },
      {
        b: "rayo",
        texto:
          "Los hoyuelos no salieron de un laboratorio ni de una teoría aerodinámica. Salieron de " +
          "que unos jugadores se dieron cuenta de que las pelotas más castigadas eran las que " +
          "mejor se portaban.",
      },
      {
        b: "rotulo",
        texto:
          "Hoy son entre trescientos y quinientos, y todo lo demás está calculado",
      },
      {
        b: "parrafo",
        texto:
          "La superficie que empezó siendo un accidente es hoy uno de los elementos más " +
          "estudiados del equipamiento deportivo.",
      },
      {
        b: "parrafo",
        texto:
          "La mayoría de las pelotas modernas tienen entre 300 y 500 hoyuelos, aunque han " +
          "existido modelos con más de mil. Y no es solo el número: importan la profundidad, el " +
          "diámetro de cada uno, la forma y cómo se reparten por la esfera para que no quede " +
          "ninguna zona lisa.",
      },
      {
        b: "parrafo",
        texto:
          "Hay algo que merece la pena señalar sobre este caso, porque no es frecuente. El orden " +
          "habitual de la técnica es que primero se entiende un fenómeno y después se diseña algo " +
          "que lo aproveche. Aquí ocurrió al revés: durante décadas se fabricaron pelotas con " +
          "hoyuelos porque funcionaban, mucho antes de que la aerodinámica pudiera explicar por " +
          "qué.",
      },
      {
        b: "parrafo",
        texto:
          "Y la explicación, cuando llegó, resultó ser de las más elegantes de la física de " +
          "fluidos. Va en el siguiente short, y se resume en una frase que no parece que pueda " +
          "ser cierta: una superficie rugosa ofrece menos resistencia al aire que una lisa.",
      },
      {
        b: "rayo",
        texto:
          "La pelota de golf es uno de los pocos objetos cotidianos que se optimizó a base de " +
          "observar antes de entender. Primero se supo que funcionaba, y la teoría llegó después " +
          "a explicar lo que los jugadores ya hacían.",
      },
    ],
  },
  {
    id: "la-cebolla-entera-no-lleva-nada",
    titulo: "Por qué lloras al cortar cebolla",
    categoria: "Cocina",
    color: "var(--ochre)",
    /* Serie «por-que-lloras-al-cortar-cebolla», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La cebolla entera no lleva dentro nada que te haga llorar» */
    encargo: "La cebolla entera no lleva dentro nada que te haga llorar",
    fotos: [
      {
        local: p_la_cebolla_entera_no_lleva_nada,
        autor: "",
        licencia: "Pexels License",
        alt:
          "La cebolla entera no lleva dentro nada que te haga llorar",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Dos sustancias guardadas en armarios distintos",
      },
      {
        b: "parrafo",
        texto:
          "Coge una cebolla, pélala entera y acércatela a la cara. No pasa nada. Puedes tenerla " +
          "en la mano el rato que quieras, olerla de cerca y seguir con los ojos secos. Ese " +
          "detalle, que parece una tontería, es en realidad la clave de todo el asunto: la " +
          "sustancia que te hace llorar <strong>no está</strong> dentro de la cebolla. Se fabrica " +
          "en el momento en que la rompes, y se fabrica en unos segundos.",
      },
      {
        b: "parrafo",
        texto:
          "El montaje es el de un arma de dos componentes, de esas que se guardan separadas " +
          "precisamente porque juntas son peligrosas. Por un lado, las células de la cebolla " +
          "almacenan un compuesto de azufre bastante inofensivo, un derivado de aminoácido que el " +
          "bulbo ha ido construyendo con el azufre que absorbe del suelo. Por otro lado, en " +
          "compartimentos distintos dentro de la misma célula, guarda una enzima llamada " +
          "<strong>alinasa</strong>. Mientras las paredes celulares están intactas, cada cosa " +
          "vive en su armario y no ocurre absolutamente nada.",
      },
      {
        b: "parrafo",
        texto:
          "El cuchillo rompe esa separación. Al cortar revientas miles de células y mezclas lo " +
          "que estaba separado, la alinasa se encuentra por fin con su sustrato y empieza a " +
          "trabajar. El producto de esa primera reacción es un compuesto inestable que dura " +
          "poquísimo, y ahí entra la segunda enzima, la <strong>sintasa del factor " +
          "lacrimógeno</strong>, que lo transforma en la molécula que de verdad te interesa: el " +
          "<em>syn</em>-propanotial-S-óxido, un gas ligero que se evapora de inmediato y sube " +
          "derecho hacia tu cara.",
      },
      {
        b: "rayo",
        texto:
          "La cebolla no guarda el gas: guarda las piezas por separado y las monta cuando la " +
          "rompes.",
      },
      {
        b: "rotulo",
        texto:
          "Y en el ojo se convierte en ácido",
      },
      {
        b: "parrafo",
        texto:
          "Lo que ocurre cuando ese gas llega a tu ojo también tiene su parte de mala suerte. La " +
          "superficie del ojo está permanentemente cubierta por una película de lágrima, es " +
          "decir, por agua. Y el <em>syn</em>-propanotial-S-óxido reacciona con el agua " +
          "produciendo compuestos ácidos.",
      },
      {
        b: "parrafo",
        texto:
          "O sea que no es que el gas «irrite» de manera vaga: es que al tocarte el ojo se " +
          "convierte en un ácido suave, justo encima de la córnea, que es una de las superficies " +
          "con más terminaciones nerviosas por milímetro cuadrado de todo tu cuerpo. Esas " +
          "terminaciones disparan, el cerebro recibe un aviso de daño químico en el ojo y activa " +
          "la única respuesta rápida que tiene disponible: abrir las glándulas lagrimales y lavar " +
          "la zona a base de líquido. Por eso lloras, y por eso llorar funciona.",
      },
      {
        b: "parrafo",
        texto:
          "Todo esto, además, tiene un motivo desde el punto de vista de la planta, que no está " +
          "pensando en tu cena. Un bulbo pasa la vida enterrado, quieto y lleno de reservas, que " +
          "es exactamente el perfil de la víctima ideal para cualquier animal o insecto que " +
          "excave. No puede huir ni esconderse, así que su defensa consiste en garantizar que " +
          "morderla salga caro: en el instante en que algo le rompe los tejidos, se dispara la " +
          "reacción y el atacante recibe una descarga química en los ojos y en las mucosas. La " +
          "cebolla no te está atacando a ti. Está haciendo lo mismo que lleva haciendo con los " +
          "gusanos del suelo desde mucho antes de que existieran las cocinas.",
      },
      {
        b: "rayo",
        texto:
          "El gas se vuelve ácido al tocar la lágrima. No es una irritación difusa: es una " +
          "quemadura química diminuta sobre la córnea.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? De ahí sale el único truco casero que tiene fundamento real: cortar la " +
          "cebolla fría. El frío ralentiza las enzimas y reduce mucho la evaporación del gas, así " +
          "que una cebolla que ha pasado un rato en la nevera produce menos y lo lanza más " +
          "despacio. Cortarla bajo un chorro de agua funciona por lo mismo, porque el gas se " +
          "disuelve antes de llegar a tu cara.",
      },
    ],
  },
  {
    id: "te-ensenaron-mal-como-se-forma-una-nube",
    titulo: "Por qué llueve",
    categoria: "Naturaleza",
    color: "var(--slate)",
    /* Serie «por-que-llueve», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Te enseñaron mal cómo se forma una nube» */
    encargo: "Gotas de lluvia cubriendo un cristal, con un taxi amarillo desenfocado detrás.",
    fotos: [
      {
        local: p_te_ensenaron_mal_como_se_forma_una_nube,
        autor:
          "Fotografía de Sara Mazin, en Pexels.",
        licencia: "Pexels License",
        fuente:
          "https://www.pexels.com/photo/19860993/",
        alt:
          "Gotas de lluvia cubriendo un cristal, con un taxi amarillo desenfocado detrás.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El aire no funciona como una esponja",
      },
      {
        b: "parrafo",
        texto:
          "Casi todos hemos oído la misma explicación, probablemente en el colegio y " +
          "probablemente acompañada de un dibujo con flechas: el aire caliente «aguanta» más " +
          "agua, y cuando se enfría ya no le cabe tanta, así que suelta lo que le sobra en forma " +
          "de lluvia. Es una imagen cómoda, la de una esponja empapada que alguien escurre, y se " +
          "repite en libros de texto, en documentales y en los partes meteorológicos con una " +
          "fidelidad admirable. El problema es que no funciona así, y la imagen de la esponja no " +
          "es una simplificación afortunada sino una idea directamente equivocada.",
      },
      {
        b: "parrafo",
        texto:
          "El aire no aguanta nada, porque no hay nada que aguantar. Es, en su inmensa mayoría, " +
          "espacio vacío con moléculas diminutas volando sueltas a gran velocidad sin llegar casi " +
          "nunca a tocarse. Las moléculas de agua que van ahí dentro no están «sostenidas» por " +
          "las de nitrógeno y oxígeno; simplemente vuelan entre ellas, igual de sueltas. Y ahí " +
          "dentro sobra sitio para muchísima más agua de la que hay en el aire más húmedo que " +
          "hayas respirado nunca: la capacidad no ha sido jamás el problema, ni en un día de " +
          "agosto en Sevilla ni en ningún otro sitio.",
      },
      {
        b: "rayo",
        texto:
          "Las nubes no aparecen porque al aire se le acabe el sitio para el agua. Nunca le falta " +
          "sitio.",
      },
      {
        b: "rotulo",
        texto:
          "Lo que ocurre de verdad es un pulso entre dos bandos",
      },
      {
        b: "parrafo",
        texto:
          "¿Qué pasa entonces? <strong>Es simple:</strong> lo que hay no es una capacidad que se " +
          "llena, sino un forcejeo permanente entre dos procesos que ocurren a la vez y en " +
          "direcciones contrarias.",
      },
      {
        b: "parrafo",
        texto:
          "En todo momento hay moléculas de agua escapándose del estado líquido hacia el aire, " +
          "porque el calor las agita lo suficiente como para romper los enlaces que las mantenían " +
          "unidas a sus vecinas. Y en todo momento hay otras moléculas haciendo exactamente el " +
          "camino inverso, chocando con una superficie de agua o con otras moléculas y quedándose " +
          "pegadas. Las dos direcciones funcionan siempre, día y noche, sin que ninguna llegue a " +
          "detenerse. Lo que llamamos evaporación o condensación no son fenómenos separados: son " +
          "el resultado neto de quién va ganando el pulso.",
      },
      {
        b: "parrafo",
        texto:
          "Y ahí es donde entra la temperatura. Cuando hace calor, las moléculas se mueven " +
          "deprisa, se escapan muchas y muy pocas consiguen quedarse pegadas, de modo que gana la " +
          "fuga y el agua se evapora. Cuando el aire se enfría, esas mismas moléculas van más " +
          "lentas, cada vez menos consiguen soltarse y cada vez más se quedan enganchadas al " +
          "chocar, así que el pulso se decanta hacia el bando contrario. Ese momento exacto en " +
          "que empiezan a ganar las que vuelven es cuando aparece una nube. No porque al aire se " +
          "le haya acabado el sitio, sino porque <strong>al agua se le han acabado las fuerzas " +
          "para irse.</strong>",
      },
      {
        b: "parrafo",
        texto:
          "Y como el aire se enfría al subir —porque al ascender se expande y al expandirse se " +
          "enfría— ese punto de equilibrio se cruza siempre en altura. Por eso las nubes se " +
          "forman ahí arriba y no a la altura de tu ventana, aunque el aire de tu ventana lleve " +
          "prácticamente la misma cantidad de agua dentro.",
      },
      {
        b: "rayo",
        texto:
          "Una nube se forma cuando el agua deja de tener fuerza para escaparse, no cuando al " +
          "aire se le acaba el hueco.",
      },
    ],
  },
  {
    id: "giran-porque-no-pueden-mover-los-ojos",
    titulo: "Por qué los búhos giran tanto la cabeza",
    categoria: "Ciencia",
    color: "var(--teal)",
    /* Serie «por-que-los-buhos-giran-tanto-la-cabeza», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Giran la cabeza porque no pueden mover los ojos» */
    encargo: "Giran la cabeza porque no pueden mover los ojos",
    fotos: [
      {
        local: p_giran_porque_no_pueden_mover_los_ojos,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Giran la cabeza porque no pueden mover los ojos",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Sus ojos están atornillados al cráneo",
      },
      {
        b: "parrafo",
        texto:
          "Ese gesto tan característico del búho, girando la cabeza despacio para seguirte con la " +
          "mirada, se interpreta casi siempre como una demostración de habilidad. Y es justo lo " +
          "contrario: es una <strong>obligación</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "El ojo de un búho no es una esfera que rota dentro de la órbita, como el tuyo. Es " +
          "alargado, con forma de tubo, y está sujeto en su sitio por unas placas óseas llamadas " +
          "<strong>anillo esclerótico</strong>. Ese anillo lo mantiene fijo. El ojo de un búho no " +
          "se puede mover en la cuenca: ni un poco a la derecha, ni un poco a la izquierda, ni " +
          "arriba ni abajo. Está inmovilizado.",
      },
      {
        b: "parrafo",
        texto:
          "Piensa en lo que eso significa en la práctica. Tú estás moviendo los ojos " +
          "continuamente sin darte cuenta, decenas de veces por minuto, y esa es la manera normal " +
          "de repasar una escena: la cabeza quieta y la mirada saltando de un punto a otro. Un " +
          "búho no dispone de eso. Sus ojos son como dos faros atornillados al chasis de un " +
          "coche: apuntan siempre exactamente adonde apunta la cabeza, y ni un grado más allá.",
      },
      {
        b: "parrafo",
        texto:
          "Por eso gira. Cada vez que un búho quiere mirar otra cosa, la única manera que tiene " +
          "de conseguirlo es <strong>mover la cabeza entera</strong>. Lo que parece un alarde es " +
          "en realidad la solución a una limitación considerable.",
      },
      {
        b: "rayo",
        texto:
          "El búho no gira la cabeza porque pueda: la gira porque tiene los ojos inmovilizados " +
          "por un anillo de hueso y no le queda otra manera de mirar a otro lado.",
      },
      {
        b: "rotulo",
        texto:
          "Son 270 grados, no 360",
      },
      {
        b: "parrafo",
        texto:
          "¿Y cuánto gira exactamente? Es simple: <strong>270 grados</strong> hacia cada lado. " +
          "Tres cuartos de vuelta.",
      },
      {
        b: "parrafo",
        texto:
          "Conviene decirlo porque la cifra que circula por ahí suele ser 360, con la idea de que " +
          "el búho puede dar la vuelta completa a la cabeza como una peonza. Eso es falso. Con " +
          "270 grados le sobra de todos modos para mirar directamente hacia atrás y bastante más " +
          "allá, y desde fuera resulta indistinguible de una vuelta entera, que probablemente es " +
          "de donde viene la exageración.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que hace posible ese recorrido es un cuello que no se parece al nuestro. Un búho " +
          "tiene <strong>catorce vértebras cervicales</strong>, exactamente el doble que las " +
          "siete que tienes tú. Y no es una peculiaridad del búho frente al resto de los " +
          "mamíferos: es que siete son las que tenemos prácticamente todos los mamíferos, del " +
          "ratón a la ballena, e incluso la jirafa. Ese cuello larguísimo de la jirafa son siete " +
          "vértebras, muy alargadas. Los búhos juegan en otra liga, con el doble de piezas y, por " +
          "tanto, el doble de articulaciones en las que repartir el giro. A eso se suma un hueso " +
          "especial en la base del cráneo que aporta movilidad adicional.",
      },
      {
        b: "parrafo",
        texto:
          "Ahí está la clave de que el gesto se vea tan fluido. No es una articulación forzando " +
          "su límite, sino catorce articulaciones aportando cada una una porción pequeña del " +
          "giro. Ninguna de ellas hace nada extremo; lo extremo es la suma.",
      },
      {
        b: "parrafo",
        texto:
          "Y queda un problema serio por resolver, que es lo que ocurre con las arterias que " +
          "suben por ese cuello mientras se retuerce. En un cuerpo como el tuyo, un giro así " +
          "sería francamente peligroso.",
      },
      {
        b: "rayo",
        texto:
          "Un búho tiene catorce vértebras en el cuello; tú tienes siete, las mismas que un ratón " +
          "o una jirafa. El giro no lo hace una articulación: lo reparten catorce.",
      },
    ],
  },
  {
    id: "el-ala-no-bate-gira",
    titulo: "Por qué los colibríes se quedan parados en el aire",
    categoria: "Ciencia",
    color: "var(--sage)",
    /* Serie «por-que-los-colibries-pueden-quedarse-parados-en-el-aire», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Su ala no bate: gira, y también empuja al subir» */
    encargo: "Su ala no bate: gira, y también empuja al subir",
    fotos: [
      {
        local: p_el_ala_no_bate_gira,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Su ala no bate: gira, y también empuja al subir",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "En los demás pájaros, la mitad del aleteo no sirve para nada",
      },
      {
        b: "parrafo",
        texto:
          "Para entender lo que hace un colibrí conviene fijarse primero en lo que hacen todos " +
          "los demás pájaros, porque ahí está la limitación que él se ha saltado.",
      },
      {
        b: "parrafo",
        texto:
          "En un ave corriente, el aleteo tiene dos mitades muy desiguales. En el " +
          "<strong>descenso</strong>, el ala baja extendida y empuja el aire hacia abajo, y de " +
          "ahí sale prácticamente toda la sustentación. En el <strong>ascenso</strong>, el ala " +
          "tiene que volver a subir para poder repetir el movimiento, y ese trayecto de vuelta no " +
          "aporta nada; el pájaro lo hace plegando el ala y encogiéndola para ofrecer la menor " +
          "resistencia posible. Es tiempo muerto, aerodinámicamente inútil, un gesto de " +
          "recolocación.",
      },
      {
        b: "parrafo",
        texto:
          "De esa asimetría sale una consecuencia que quizá nunca te habías planteado: la mayoría " +
          "de las aves <strong>necesitan avanzar</strong> para volar. El ala funciona como el ala " +
          "de un avión, generando sustentación gracias al aire que la recorre, y para que ese " +
          "aire la recorra hay que ir hacia delante. Un pájaro parado en el aire, sin " +
          "desplazarse, es un pájaro cayendo.",
      },
      {
        b: "parrafo",
        texto:
          "El colibrí es la excepción, y no por tener más fuerza ni por batir más rápido, sino " +
          "porque ha resuelto el problema de la mitad inútil.",
      },
      {
        b: "rayo",
        texto:
          "En un pájaro normal, subir el ala no aporta nada: es tiempo muerto. Por eso casi todas " +
          "las aves necesitan avanzar para poder volar.",
      },
      {
        b: "rotulo",
        texto:
          "Él le da la vuelta al ala y vuelve a empujar",
      },
      {
        b: "parrafo",
        texto:
          "¿Y qué hace el colibrí distinto? Es simple: al subir el ala, <strong>la gira</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Su articulación del hombro le permite rotar el ala casi por completo sobre su propio " +
          "eje, de modo que en el trayecto de vuelta el ala se voltea y presenta al aire la otra " +
          "cara. En lugar de recogerse para estorbar poco, vuelve a empujar. Y como la " +
          "trayectoria de la punta del ala combina esa ida y esa vuelta, el recorrido que dibuja " +
          "en el aire no es un arco arriba y abajo, sino un <strong>ocho tumbado</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "El equipo de Douglas Warrick midió en 2005 cuánto aporta cada mitad, y el reparto es " +
          "revelador: el descenso proporciona el <strong>75 %</strong> del sostén y el ascenso el " +
          "<strong>25 %</strong> restante. Compáralo con los dos extremos y verás dónde encaja. " +
          "Un insecto, con un movimiento casi simétrico, saca aproximadamente lo mismo de las dos " +
          "mitades. Un pájaro cualquiera saca del ascenso prácticamente cero. El colibrí está en " +
          "medio, y por eso su vuelo es un híbrido genuino: conserva el esqueleto y el cuerpo de " +
          "un ave, con todas sus limitaciones, pero ha adoptado recursos aerodinámicos de " +
          "insecto, incluidos los torbellinos que se forman en el borde de ataque del ala.",
      },
      {
        b: "parrafo",
        texto:
          "Con esa cuarta parte extra de empuje se sostiene sin avanzar. Y de ahí salen unas " +
          "capacidades que ningún otro vertebrado tiene: es el único capaz de mantener el vuelo " +
          "estacionario de forma sostenida, y además puede volar <strong>hacia atrás</strong> y " +
          "boca abajo. Cosas que un águila, con todo su poderío, no puede hacer.",
      },
      {
        b: "rayo",
        texto:
          "El colibrí saca un 25 % de su sostén del movimiento que a los demás pájaros no les " +
          "sirve de nada. Con esa cuarta parte se queda quieto en el aire.",
      },
    ],
  },
  {
    id: "el-sahara-esta-seco-por-lo-que-pasa-en-el-ecuador",
    titulo: "Por qué los desiertos están donde están",
    categoria: "Ciencia",
    color: "var(--clay)",
    /* Serie «por-que-los-desiertos-estan-donde-estan», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El Sáhara está seco por lo que ocurre sobre la selva del Congo» */
    encargo: "El Sáhara está seco por lo que ocurre sobre la selva del Congo",
    fotos: [
      {
        local: p_el_sahara_esta_seco_por_lo_que_pasa_en_el_ecuador,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El Sáhara está seco por lo que ocurre sobre la selva del Congo",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Están todos alineados en dos franjas",
      },
      {
        b: "parrafo",
        texto:
          "Coge un mapa del mundo y marca los grandes desiertos. El Sáhara, el desierto Arábigo, " +
          "el Thar en la India, el de Sonora y el de Chihuahua en Norteamérica, el Kalahari en el " +
          "sur de África, el Gran Desierto Victoria en Australia. Ahora fíjate en dónde han caído " +
          "las marcas.",
      },
      {
        b: "parrafo",
        texto:
          "No están repartidas al azar. Se ordenan en <strong>dos franjas horizontales</strong>, " +
          "una en el hemisferio norte y otra en el sur, ambas a la misma distancia del ecuador: " +
          "alrededor de los <strong>30 grados de latitud</strong>. Continentes distintos, océanos " +
          "distintos, historias geológicas distintas, y todos los grandes desiertos cayendo en " +
          "las mismas dos bandas.",
      },
      {
        b: "parrafo",
        texto:
          "Cuando un patrón se repite así de limpio en sitios sin relación entre sí, la causa no " +
          "puede ser local. No es que el norte de África tenga mala suerte con la lluvia: es que " +
          "a esa latitud, en cualquier continente, ocurre lo mismo.",
      },
      {
        b: "parrafo",
        texto:
          "Y lo que ocurre no pasa allí. Empieza a tres mil kilómetros de distancia, sobre el " +
          "ecuador.",
      },
      {
        b: "rayo",
        texto:
          "Los grandes desiertos del planeta no están repartidos al azar: se alinean en dos " +
          "franjas a treinta grados de latitud, una a cada lado del ecuador.",
      },
      {
        b: "rotulo",
        texto:
          "El aire que riega la selva es el mismo que reseca el desierto",
      },
      {
        b: "parrafo",
        texto:
          "¿Y qué tiene que ver el ecuador con el Sáhara? Es simple: son los dos extremos del " +
          "mismo circuito de aire.",
      },
      {
        b: "parrafo",
        texto:
          "Sobre el ecuador, el Sol calienta el aire más que en ningún otro sitio del planeta, y " +
          "el aire caliente sube. Al subir se enfría, y al enfriarse ya no puede sostener el " +
          "vapor de agua que llevaba, así que lo suelta. Eso es lo que produce las lluvias " +
          "tropicales, y por eso las selvas del mundo están donde están: en el ecuador llueve " +
          "muchísimo porque hay una columna de aire ascendiendo y descargando toda su humedad de " +
          "forma permanente.",
      },
      {
        b: "parrafo",
        texto:
          "Ahora sigue a ese aire. Cuando llega arriba ya no puede seguir subiendo, así que se " +
          "desplaza en horizontal hacia los polos, a gran altura, y va completamente seco: dejó " +
          "su agua sobre la selva. Después de recorrer unos treinta grados de latitud, se enfría " +
          "lo suficiente para volver a bajar, y desciende sobre la superficie.",
      },
      {
        b: "parrafo",
        texto:
          "Un aire que baja se comprime, y al comprimirse se calienta. Y un aire que se calienta " +
          "es capaz de retener más humedad de la que lleva, así que en lugar de soltar agua, la " +
          "absorbe: seca el terreno por el que pasa. El resultado es una zona de altas presiones " +
          "permanente donde prácticamente no puede formarse una nube. Ese circuito completo se " +
          "llama <strong>célula de Hadley</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Ahí está toda la explicación, y merece la pena decirla despacio porque es lo bonito " +
          "del asunto: <strong>el aire que reseca el Sáhara es exactamente el mismo aire que ha " +
          "llovido sobre la selva</strong>. Sube empapado en el ecuador, descarga allí toda su " +
          "agua, viaja seco por arriba y baja hecho una lija a treinta grados de latitud. La " +
          "selva y el desierto no son dos climas independientes: son el principio y el final del " +
          "mismo recorrido, y uno existe precisamente porque existe el otro.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? A esas franjas de altas presiones se las llama <strong>latitudes de los " +
          "caballos</strong>. El nombre viene de la época de la navegación a vela: al llegar ahí " +
          "los barcos se quedaban sin viento durante semanas y, según la explicación tradicional, " +
          "la tripulación acababa arrojando por la borda los caballos que transportaba para no " +
          "seguir gastando agua en ellos.",
      },
      {
        b: "rayo",
        texto:
          "El aire que reseca el Sáhara es el mismo que llovió sobre la selva. Deja el agua en el " +
          "ecuador, viaja seco por arriba y baja a treinta grados convertido en una lija.",
      },
    ],
  },
  {
    id: "no-invierten-izquierda-derecha",
    titulo: "Por qué los espejos invierten",
    categoria: "Ciencia",
    color: "var(--plum)",
    /* Serie «por-que-los-espejos-invierten», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El espejo no te cambia la izquierda por la derecha» */
    encargo: "El espejo no te cambia la izquierda por la derecha",
    fotos: [
      {
        local: p_no_invierten_izquierda_derecha,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El espejo no te cambia la izquierda por la derecha",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La pregunta lleva mal planteada desde el principio",
      },
      {
        b: "parrafo",
        texto:
          "Hay un acertijo clásico que la gente lleva siglos sin resolver del todo: si el espejo " +
          "invierte la izquierda y la derecha, ¿por qué no invierte también arriba y abajo? Tu " +
          "reflejo levanta la mano contraria, sí, pero no está boca abajo. Un espejo no debería " +
          "tener preferencias entre unos ejes y otros, así que algo no cuadra.",
      },
      {
        b: "parrafo",
        texto:
          "Y no cuadra porque la pregunta parte de un error. El espejo <strong>no invierte la " +
          "izquierda y la derecha</strong>. Tampoco invierte arriba y abajo. Solo invierte un " +
          "eje, y es el único que nadie menciona: el de delante y detrás, la profundidad, la " +
          "dirección perpendicular al cristal.",
      },
      {
        b: "parrafo",
        texto:
          "La demostración más limpia la propuso Richard Feynman y se hace en diez segundos " +
          "delante de cualquier espejo. Ponte enfrente y señala hacia el este, es decir, hacia " +
          "uno de los lados, paralelo al cristal. Tu reflejo señala <strong>también hacia el " +
          "este</strong>, no hacia el oeste. Señala hacia arriba: tu reflejo señala hacia arriba. " +
          "Y ahora señala hacia el propio espejo, de frente. Tu reflejo señala hacia ti, es " +
          "decir, en la dirección contraria.",
      },
      {
        b: "parrafo",
        texto:
          "Ahí está toda la respuesta. Dos de los tres ejes se conservan intactos y solo uno se " +
          "da la vuelta, y es precisamente el que va de tu pecho al cristal. El espejo no elige " +
          "entre izquierda y derecha, ni entre arriba y abajo, porque no toca ninguno de los dos.",
      },
      {
        b: "rayo",
        texto:
          "Señala a un lado y tu reflejo señala al mismo lado. Señala al espejo y señala al " +
          "revés. Solo se invierte un eje, y es la profundidad.",
      },
      {
        b: "rotulo",
        texto:
          "Tu reflejo no es una persona que se ha dado la vuelta",
      },
      {
        b: "parrafo",
        texto:
          "Si el espejo solo invierte la profundidad, ¿de dónde sale la sensación tan clara de " +
          "que te ha cambiado las manos? De una suposición que haces sin darte cuenta.",
      },
      {
        b: "parrafo",
        texto:
          "Cuando miras tu reflejo, tu cerebro lo interpreta como si fuera otra persona plantada " +
          "delante de ti. Y para que otra persona esté delante de ti mirándote, ha tenido que " +
          "<strong>girar sobre sí misma</strong>. Ese giro, que ocurre solo en tu cabeza, es el " +
          "que cambia la izquierda por la derecha. El espejo no lo ha hecho; lo has hecho tú al " +
          "imaginarte a alguien dándose la vuelta.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que hay en el cristal es otra cosa, y es bastante más rara. Tu reflejo no es una " +
          "copia tuya girada: es una copia tuya <strong>invertida en profundidad</strong>, como " +
          "si te hubieran vuelto del revés igual que un guante. Es una figura que no existe en el " +
          "mundo real y que no se puede obtener girando nada. Por eso, aunque parezca un tipo " +
          "mirándote, no podrías fabricarlo ni con un gemelo idéntico.",
      },
      {
        b: "parrafo",
        texto:
          "Y ahí está la prueba de que las manos no se han cambiado: si levantas la mano derecha, " +
          "la mano que se levanta en el espejo está <strong>en el mismo lado del espacio</strong> " +
          "que la tuya. No se ha movido de sitio. Lo único que ocurre es que, en una persona que " +
          "estuviera realmente ahí mirándote de frente, esa posición correspondería a su mano " +
          "izquierda. Estás aplicando a la imagen las reglas de un cuerpo que no está.",
      },
      {
        b: "rayo",
        texto:
          "La mano del espejo está en el mismo lado del espacio que la tuya. Solo la llamas «la " +
          "otra» porque imaginas a alguien girado.",
      },
    ],
  },
  {
    id: "un-flamenco-nace-gris",
    titulo: "Por qué los flamencos son rosas",
    categoria: "Naturaleza",
    color: "var(--slate)",
    /* Serie «por-que-los-flamencos-son-rosas», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un flamenco nace gris y se pinta comiendo» */
    encargo: "Un flamenco nace gris y se pinta comiendo",
    fotos: [
      {
        local: p_un_flamenco_nace_gris,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un flamenco nace gris y se pinta comiendo",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La prueba llegó cuando los flamencos de los zoos se volvieron blancos",
      },
      {
        b: "parrafo",
        texto:
          "Un flamenco recién salido del huevo no tiene nada de rosa. Es una bola de plumón gris, " +
          "con el pico recto y las patas hinchadas y rosadas que se le vuelven negras en cuestión " +
          "de una semana. El color por el que conocemos a la especie no viene de fábrica: se " +
          "adquiere después, y se adquiere comiendo.",
      },
      {
        b: "parrafo",
        texto:
          "De hecho, la manera en que se demostró tiene su gracia, porque fue un fracaso el que " +
          "dio la pista. Durante décadas, los flamencos de los zoológicos iban perdiendo el color " +
          "hasta quedarse de un blanco sucio bastante deprimente, y nadie sabía qué estaban " +
          "haciendo mal. Los animales comían, se reproducían y estaban sanos; simplemente dejaban " +
          "de ser rosas. La respuesta estaba en el menú. En libertad, un flamenco filtra agua " +
          "salobre y se alimenta de microalgas y de pequeños crustáceos cargados de " +
          "<strong>carotenoides</strong>, que son los mismos pigmentos que dan color a la " +
          "zanahoria y al pimiento rojo. En un zoo comían pienso, y en el pienso no había nada de " +
          "eso. Desde que se les empezó a suplementar la dieta con esos pigmentos, los flamencos " +
          "de cautividad volvieron a ser rosas.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que ocurre por dentro es más interesante que un simple teñido. El flamenco no " +
          "absorbe el color y ya está: su hígado descompone los carotenoides que llegan con la " +
          "comida y va depositando los pigmentos resultantes en las plumas mientras crecen, y " +
          "también en el pico y en las patas. Eso significa que el color se fabrica pluma a " +
          "pluma, con material importado del exterior, y que hay que reponerlo continuamente.",
      },
      {
        b: "rayo",
        texto:
          "El rosa del flamenco no lo produce el animal. Lo importa con la comida y lo va " +
          "colocando en cada pluma que le crece.",
      },
      {
        b: "rotulo",
        texto:
          "Por eso el color dice la verdad sobre el pájaro",
      },
      {
        b: "parrafo",
        texto:
          "Que el color venga de fuera tiene una consecuencia que la evolución no ha dejado " +
          "pasar. Un pigmento que hay que salir a buscar, filtrar del barro y procesar en el " +
          "hígado es caro, y por tanto no todos los individuos pueden permitírselo por igual.",
      },
      {
        b: "parrafo",
        texto:
          "Un flamenco muy rosa está anunciando, sin poder mentir, que come bien, que ocupa una " +
          "buena zona de alimentación y que su organismo está en condiciones de procesar todo ese " +
          "material. Uno pálido está anunciando lo contrario, aunque no quiera. Los biólogos " +
          "llaman a esto una <strong>señal honesta</strong>: una característica que no se puede " +
          "falsificar porque su producción cuesta exactamente aquello que pretende demostrar. Y " +
          "como cabía esperar, los flamencos se fijan. Los individuos más intensos tienden a " +
          "emparejarse antes y a conseguir mejores sitios en la colonia.",
      },
      {
        b: "parrafo",
        texto:
          "Merece la pena quedarse con el mecanismo completo, porque explica de golpe varias " +
          "cosas que parecían inconexas: por qué el color varía tanto entre unas poblaciones y " +
          "otras, por qué un mismo animal cambia de tono a lo largo del año, y por qué se apaga " +
          "cuando el bicho pasa por un mal momento. No es un adorno fijo pintado en el " +
          "nacimiento. Es un informe actualizado del estado del animal, colgado por fuera.",
      },
      {
        b: "rayo",
        texto:
          "Un flamenco pálido no puede fingir estar sano. El color cuesta exactamente lo que " +
          "demuestra.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? El mismo principio funciona en tu cocina. La yema de huevo, la carne del " +
          "salmón y la de las truchas de piscifactoría deben su color a carotenoides de la dieta " +
          "del animal, y en todos esos casos se ajusta el pienso para conseguir el tono que el " +
          "comprador espera. Un salmón de piscifactoría sin ese suplemento tendría la carne gris.",
      },
    ],
  },
  {
    id: "no-lo-siguen-se-le-anticipan",
    titulo: "Por qué los girasoles siguen al Sol",
    categoria: "Ciencia",
    color: "var(--ochre)",
    /* Serie «por-que-los-girasoles-siguen-al-sol», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «No siguen al sol: se le anticipan de noche y a oscuras» */
    encargo: "No siguen al sol: se le anticipan de noche y a oscuras",
    fotos: [
      {
        local: p_no_lo_siguen_se_le_anticipan,
        autor: "",
        licencia: "Pexels License",
        alt:
          "No siguen al sol: se le anticipan de noche y a oscuras",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El movimiento no lo dispara la luz",
      },
      {
        b: "parrafo",
        texto:
          "Un girasol joven pasa el día orientado hacia el sol: mira al este por la mañana, va " +
          "girando durante la jornada y termina la tarde mirando al oeste. Hasta ahí, lo que todo " +
          "el mundo sabe. La explicación que se da por buena es que la planta reacciona a la luz, " +
          "siguiéndola como una veleta sigue al viento.",
      },
      {
        b: "parrafo",
        texto:
          "Un equipo dirigido por Hagop Atamian lo comprobó en 2016, publicando el resultado en " +
          "<em>Science</em>, y la explicación de la veleta no se sostiene.",
      },
      {
        b: "parrafo",
        texto:
          "Hicieron dos experimentos que lo dejan claro. En el primero pasaron las plantas a una " +
          "iluminación constante y <strong>cenital</strong>, desde arriba, sin ningún este ni " +
          "ningún oeste. Si el movimiento fuera una reacción a la posición de la luz, ahí debería " +
          "detenerse. No se detuvo: las plantas siguieron balanceándose de un lado a otro con su " +
          "ritmo habitual durante varios días, apagándose poco a poco.",
      },
      {
        b: "parrafo",
        texto:
          "El segundo experimento es todavía más revelador. Sometieron a las plantas a ciclos de " +
          "luz y oscuridad de <strong>treinta horas</strong> en lugar de veinticuatro. Si el " +
          "movimiento dependiera de la luz, la planta se adaptaría sin problema al ciclo nuevo. " +
          "Lo que ocurrió es que el sistema se descuadró: el momento de máxima inclinación hacia " +
          "el oeste dejó de coincidir con el paso de la luz a la oscuridad, y los movimientos " +
          "nocturnos se volvieron erráticos.",
      },
      {
        b: "parrafo",
        texto:
          "La conclusión es que el girasol no está reaccionando al sol. Tiene un <strong>reloj " +
          "circadiano</strong> interno, calibrado a veinticuatro horas, y ese reloj es el que " +
          "dirige el movimiento.",
      },
      {
        b: "rayo",
        texto:
          "Bajo luz constante y desde arriba, sin este ni oeste, los girasoles siguen " +
          "balanceándose días enteros. No están siguiendo la luz: tienen un reloj.",
      },
      {
        b: "rotulo",
        texto:
          "Y la prueba está en lo que hacen por la noche",
      },
      {
        b: "parrafo",
        texto:
          "Aquí está el detalle que convierte todo el asunto en algo mucho mejor que una " +
          "curiosidad botánica.",
      },
      {
        b: "parrafo",
        texto:
          "El girasol termina el día mirando al oeste. Y a la mañana siguiente amanece mirando al " +
          "este, listo para el primer sol. La pregunta es cuándo hace ese viaje de vuelta, y la " +
          "respuesta es: <strong>durante la noche</strong>, en plena oscuridad, empezando horas " +
          "antes de que salga el sol.",
      },
      {
        b: "parrafo",
        texto:
          "No está siguiendo nada, porque no hay nada que seguir. Está " +
          "<strong>prediciendo</strong> dónde va a aparecer el sol y colocándose de antemano.",
      },
      {
        b: "parrafo",
        texto:
          "¿Y cómo gira una planta que no tiene articulaciones ni músculos? Es simple: creciendo " +
          "de manera desigual. Atamian midió el crecimiento de los dos lados del tallo por " +
          "separado y encontró un patrón limpio: el <strong>lado este</strong> del tallo crece " +
          "deprisa durante el día y muy poco de noche, mientras que el <strong>lado " +
          "oeste</strong> crece poco de día y más de noche. Al alargarse un lado más que el otro, " +
          "el tallo se arquea hacia el contrario.",
      },
      {
        b: "parrafo",
        texto:
          "De modo que el girasol no rota. Se <strong>tuerce</strong>, alternativamente, por " +
          "lados opuestos. De día se alarga por el este y eso lo inclina hacia el oeste; de noche " +
          "se alarga por el oeste y eso lo devuelve hacia el este. Es un movimiento hecho de " +
          "crecimiento, no de músculo, y por eso solo pueden permitírselo las plantas jóvenes que " +
          "todavía están creciendo.",
      },
      {
        b: "rayo",
        texto:
          "El girasol vuelve a mirar al este de noche, a oscuras y horas antes del amanecer. No " +
          "sigue al sol: se coloca donde va a salir.",
      },
    ],
  },
  {
    id: "los-pelirrojos-mas-anestesia",
    titulo: "Por qué los pelirrojos necesitan más anestesia",
    categoria: "Cuerpo humano",
    color: "var(--sage)",
    /* Serie «por-que-los-pelirrojos-necesitan-mas-anestesia», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Los pelirrojos necesitan más anestesia, y está medido» */
    encargo: "Los pelirrojos necesitan más anestesia, y está medido",
    fotos: [
      {
        local: p_los_pelirrojos_mas_anestesia,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Los pelirrojos necesitan más anestesia, y está medido",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Era una sospecha de quirófano antes de ser un estudio",
      },
      {
        b: "parrafo",
        texto:
          "Durante mucho tiempo esto fue lo que en medicina se llama sabiduría de pasillo: " +
          "anestesistas y dentistas que comentaban entre ellos que con los pelirrojos había que " +
          "cargar más la mano, que se despertaban antes, que la anestesia local les hacía menos " +
          "efecto. No estaba en ningún manual, no había número que lo respaldara, y tenía toda la " +
          "pinta de ser una de esas creencias de gremio que se repiten porque uno se acuerda de " +
          "los casos llamativos y olvida los normales.",
      },
      {
        b: "parrafo",
        texto:
          "En 2004 alguien decidió comprobarlo con un diseño serio, y el resultado se publicó en " +
          "la revista <em>Anesthesiology</em>. Compararon a mujeres pelirrojas con mujeres de " +
          "pelo oscuro y midieron cuánta cantidad de un anestésico inhalado hacía falta para " +
          "mantenerlas dormidas al nivel deseado. La medida es objetiva y no depende de la " +
          "impresión de nadie: es una concentración, y se lee en un aparato.",
      },
      {
        b: "parrafo",
        texto:
          "Las pelirrojas necesitaron en torno a un <strong>veinte por ciento más</strong> de " +
          "anestésico. No es una diferencia sutil ni un matiz estadístico que solo aparece con " +
          "miles de sujetos: es un salto que un anestesista nota en su trabajo diario, que es " +
          "exactamente lo que llevaban décadas diciendo.",
      },
      {
        b: "rayo",
        texto:
          "La sospecha de pasillo llevaba razón. Hizo falta un veinte por ciento más de " +
          "anestésico para el mismo efecto.",
      },
      {
        b: "rotulo",
        texto:
          "Y no es el pelo: es el gen que lo produce",
      },
      {
        b: "parrafo",
        texto:
          "Lo interesante es que el pelo rojo no puede ser la causa de nada. Un pigmento en el " +
          "tallo del pelo no tiene forma de influir en cómo responde tu cerebro a un anestésico. " +
          "El pelo es una señal, no un mecanismo, y lo que hay que buscar es qué lo produce.",
      },
      {
        b: "parrafo",
        texto:
          "Lo produce un gen llamado <strong>MC1R</strong>. En la mayoría de la gente, ese gen " +
          "fabrica un receptor que orienta a los melanocitos hacia la producción de un tipo de " +
          "melanina oscura. En los pelirrojos hay variantes de ese gen que hacen que se produzca " +
          "la variedad rojiza, y de ahí vienen el pelo, la piel muy clara y las pecas. Hasta ahí " +
          "es dermatología.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que convierte esto en una historia interesante es que MC1R no es un receptor " +
          "aislado, sino que pertenece a una familia, la de los receptores de melanocortina, y " +
          "otros miembros de esa familia trabajan en el cerebro y participan en la regulación del " +
          "dolor. La hipótesis que se maneja es que una variante que altera a uno de ellos pueda " +
          "estar afectando también a los demás, y que por ahí se cuele el efecto sobre la " +
          "anestesia.",
      },
      {
        b: "parrafo",
        texto:
          "Ahora la parte honesta, que aquí es importante. Aunque el estudio de 2004 fue sólido, " +
          "la literatura posterior no es unánime: hay trabajos que no han encontrado esa " +
          "asociación, incluido uno de 2012, y el asunto no está cerrado. Lo que sí puede decirse " +
          "es que la sospecha clínica dejó de ser una anécdota y pasó a ser una hipótesis con " +
          "base experimental y un mecanismo plausible detrás.",
      },
      {
        b: "rayo",
        texto:
          "El pelo no puede causar nada. Lo que importa es el gen que lo pone rojo, y ese gen " +
          "tiene parientes trabajando en el cerebro.",
      },
    ],
  },
  {
    id: "por-que-marte-es-rojo",
    titulo: "Por qué Marte es rojo",
    categoria: "Ciencia",
    color: "var(--clay)",
    /* Serie «por-que-marte-es-rojo», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Marte no es rojo por fuego ni por arena: está oxidado» */
    encargo: "Marte no es rojo por fuego ni por arena: está oxidado",
    fotos: [
      {
        local: p_por_que_marte_es_rojo,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Marte no es rojo por fuego ni por arena: está oxidado",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El planeta lleva el nombre del dios de la guerra por el color, no al revés",
      },
      {
        b: "parrafo",
        texto:
          "De todos los puntos que se mueven por el cielo nocturno, Marte es el único que se ve " +
          "claramente de color. Babilonios, egipcios, griegos y romanos lo miraron y llegaron " +
          "todos a la misma asociación: rojo, sangre, guerra. El nombre que nos ha quedado es el " +
          "del dios romano, y viene del color; no es que el planeta se pusiera rojo por llamarse " +
          "así.",
      },
      {
        b: "parrafo",
        texto:
          "Durante siglos esa fue toda la explicación disponible. Marte era rojo y punto. La " +
          "respuesta de verdad no llegó hasta que hubo instrumentos capaces de leer qué minerales " +
          "hay en una superficie a la que nadie ha ido, y resultó ser mucho más doméstica de lo " +
          "que el nombre prometía.",
      },
      {
        b: "parrafo",
        texto:
          "Marte está oxidado. La roca marciana es rica en hierro, ese hierro reaccionó y se " +
          "convirtió en <strong>óxido de hierro</strong>, que es exactamente la misma sustancia " +
          "que se forma en una bicicleta que se deja fuera todo el invierno. El polvo que cubre " +
          "el planeta entero es herrumbre molida.",
      },
      {
        b: "rayo",
        texto:
          "El color de Marte no es un rasgo exótico. Es el mismo proceso químico que estropea una " +
          "verja mal pintada, extendido sobre un planeta.",
      },
      {
        b: "rotulo",
        texto:
          "La herrumbre es un fósil químico, y por eso importa tanto",
      },
      {
        b: "parrafo",
        texto:
          "Ahora bien, aquí aparece la parte que convierte un dato de color en una pregunta " +
          "seria. ¿Qué hace falta para oxidar el hierro? Es simple: <strong>agua</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "En la Tierra el hierro se oxida porque hay agua y aire por todas partes. En Marte no " +
          "hay ninguna de las dos cosas en cantidad apreciable: la atmósfera es finísima y el " +
          "agua líquida no aguanta en la superficie. Un planeta seco no debería estar oxidándose, " +
          "y sin embargo el planeta entero está teñido del color de la oxidación.",
      },
      {
        b: "parrafo",
        texto:
          "La única salida a esa contradicción es que el óxido no se haya formado ahora. Se formó " +
          "cuando en Marte había agua líquida corriendo por la superficie, y lo que vemos desde " +
          "la Tierra es el residuo de aquello. El color no describe el Marte de hoy: describe el " +
          "Marte que hubo.",
      },
      {
        b: "rayo",
        texto:
          "Marte no está oxidándose. Está oxidado, en pasado, y el rojo que vemos es la marca que " +
          "dejó el agua al marcharse.",
      },
    ],
  },
  {
    id: "la-frase-tal-como-se-dice-es-falsa",
    titulo: "Por qué no hay dos copos de nieve iguales",
    categoria: "Ciencia",
    color: "var(--plum)",
    /* Serie «por-que-no-hay-dos-copos-de-nieve-iguales», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La frase, tal como se dice, es falsa» */
    encargo: "La frase, tal como se dice, es falsa",
    fotos: [
      {
        local: p_la_frase_tal_como_se_dice_es_falsa,
        autor: "",
        licencia: "Pexels License",
        alt:
          "La frase, tal como se dice, es falsa",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Los copos pequeños se repiten constantemente",
      },
      {
        b: "parrafo",
        texto:
          "«No hay dos copos de nieve iguales» es de esas frases que se repiten con total " +
          "seguridad y que casi nadie ha examinado. Como afirmación general es falsa, y quien " +
          "mejor lo explica es la gente que se dedica a fabricarlos.",
      },
      {
        b: "parrafo",
        texto:
          "Kenneth Libbrecht, físico del Caltech que lleva décadas cultivando cristales de hielo " +
          "en laboratorio, lo cuenta sin ceremonias:",
      },
      {
        b: "cita",
        texto:
          "En el laboratorio hacemos copos de nieve diminutos, del diámetro de un pelo humano, y " +
          "la mayoría son simplemente hexágonos sencillos, y todos se parecen entre sí.",
      },
      {
        b: "parrafo",
        texto:
          "— Kenneth Libbrecht",
      },
      {
        b: "parrafo",
        texto:
          "Ahí está la trampa de la frase célebre. Un cristal de nieve pequeño, formado en " +
          "condiciones estables y con poco tiempo de crecimiento, no es una filigrana barroca: es " +
          "un hexágono liso, un prisma corto, una plaquita sin adornos. Y esas formas simples se " +
          "repiten sin ningún problema, porque hay pocas maneras de ser un hexágono pequeño y " +
          "muchísimos cristales fabricándose a la vez. En una nevada normal caen incontables " +
          "cristales de ese tipo.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que sí es cierto es la versión matizada, y conviene formularla bien porque es la " +
          "que sostiene la ciencia: la probabilidad de que dos cristales <strong>grandes y " +
          "complejos</strong> sean idénticos es esencialmente cero. Cuanto más crece un cristal y " +
          "más ramificaciones desarrolla, más detalles tiene que coincidir, y el número de " +
          "combinaciones se dispara hasta lo absurdo. Un solo cristal de nieve contiene del orden " +
          "de <strong>10¹⁸ moléculas de agua</strong>, un trillón, y cada una colocada en una " +
          "posición concreta.",
      },
      {
        b: "rayo",
        texto:
          "Los cristales de nieve pequeños son hexágonos sencillos y se parecen todos. La frase " +
          "famosa solo vale para los grandes y ramificados.",
      },
      {
        b: "rotulo",
        texto:
          "Y en 1988 alguien encontró dos iguales",
      },
      {
        b: "parrafo",
        texto:
          "Ahora el episodio que la mayoría de la gente no conoce, y que le quita a la frase su " +
          "último resto de solemnidad.",
      },
      {
        b: "parrafo",
        texto:
          "En 1988, Nancy Knight, investigadora del Centro Nacional de Investigación Atmosférica " +
          "en Boulder, Colorado, estaba examinando al microscopio cristales de nieve recogidos " +
          "durante una tormenta en Wisconsin. Y encontró dos ejemplares idénticos. El hallazgo " +
          "figura registrado como el primer caso documentado de cristales de nieve iguales.",
      },
      {
        b: "parrafo",
        texto:
          "Esto invita a hacer una distinción importante, porque hay dos preguntas distintas " +
          "metidas en la misma frase y conviene separarlas. Una es si dos cristales pueden tener " +
          "el mismo aspecto: la respuesta es que sí, y está documentado. Otra es si dos cristales " +
          "pueden ser idénticos molécula a molécula: ahí la respuesta práctica es que no, porque " +
          "incluso dos cristales con la misma forma tendrán distinta disposición interna, " +
          "distintas impurezas y distintos átomos de deuterio repartidos.",
      },
      {
        b: "parrafo",
        texto:
          "Pero el punto más interesante no es ninguno de los dos. Es que la afirmación, tal como " +
          "se enuncia, <strong>no se puede demostrar</strong>. Nadie ha examinado ni una fracción " +
          "significativa de los cristales de nieve que caen, ni podría hacerlo: en una sola " +
          "nevada caen más cristales de los que la humanidad entera podría mirar en toda su " +
          "historia. Lo que hay detrás de la frase no es una comprobación, es un argumento de " +
          "probabilidad: hay tantas configuraciones posibles que repetir una exactamente sería " +
          "como volver a sacar el mismo orden en dos barajas mezcladas al azar. Sumamente " +
          "improbable, pero eso es una inferencia, no una observación.",
      },
      {
        b: "rayo",
        texto:
          "Nadie ha comprobado nunca que no haya dos copos iguales, y nadie podría. La frase no " +
          "es un resultado experimental: es un cálculo de probabilidades.",
      },
    ],
  },
  {
    id: "por-que-no-hemos-vuelto-a-la-luna",
    titulo: "Por qué no hemos vuelto a la Luna",
    categoria: "Historia",
    color: "var(--teal)",
    /* Serie «por-que-no-hemos-vuelto-a-la-luna», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El presupuesto empezó a bajar tres años antes de que Armstrong pisara» */
    encargo: "El presupuesto empezó a bajar tres años antes de que Armstrong pisara",
    fotos: [
      {
        local: p_por_que_no_hemos_vuelto_a_la_luna,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El presupuesto empezó a bajar tres años antes de que Armstrong pisara",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La cifra que explica por qué aquello no era sostenible",
      },
      {
        b: "parrafo",
        texto:
          "Entre 1960 y 1973, Estados Unidos gastó 25.800 millones de dólares de la época en el " +
          "programa Apolo. Ajustado a dinero de hoy, son en torno a <strong>309.000 millones de " +
          "dólares</strong>. Durante esos trece años, tres de cada cinco dólares del programa " +
          "espacial completo fueron a Apolo y a lo que giraba a su alrededor.",
      },
      {
        b: "parrafo",
        texto:
          "Y hay un detalle en la curva del gasto que reordena toda la historia: el máximo no se " +
          "alcanzó en 1969, ni en 1968. Se alcanzó en <strong>1966</strong>, tres años antes de " +
          "que nadie pisara la Luna.",
      },
      {
        b: "parrafo",
        texto:
          "Es decir, cuando Armstrong bajó la escalerilla, el programa que lo había llevado hasta " +
          "allí llevaba ya tres años perdiendo dinero. Lo que se vio en televisión aquella noche " +
          "no era el principio de algo: era la entrega de un encargo que ya se estaba cerrando.",
      },
      {
        b: "rayo",
        texto:
          "Apolo no se canceló después del éxito. Estaba encogiendo desde antes, y el alunizaje " +
          "llegó cuando la retirada ya había empezado.",
      },
      {
        b: "rotulo",
        texto:
          "Un gasto así solo se sostiene mientras haya un motivo así",
      },
      {
        b: "parrafo",
        texto:
          "¿Y por qué se aceptó semejante desembolso durante unos años y después no? Es simple: " +
          "<strong>el objetivo no era la Luna</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Conviene ir a las palabras del propio Kennedy, porque están grabadas. El 21 de " +
          "noviembre de 1962 hubo una reunión en la Casa Blanca con James Webb, administrador de " +
          "la NASA, y otros responsables, para revisar el coste del programa. Kennedy dijo dos " +
          "cosas que rara vez se citan juntas.",
      },
      {
        b: "cita",
        texto:
          "No me interesa tanto el espacio. […] La Unión Soviética ha convertido esto en una " +
          "prueba del sistema. Por eso lo estamos haciendo.",
        autor: "John F. Kennedy, 21 de noviembre de 1962",
      },
      {
        b: "parrafo",
        texto:
          "Lo que buscaba, según explicó en esa misma conversación, era la prueba espectacular de " +
          "que Estados Unidos era preeminente en el espacio. La Luna era el escenario, no el " +
          "asunto.",
      },
      {
        b: "parrafo",
        texto:
          "Y un objetivo así tiene una propiedad incómoda: se puede cumplir. En cuanto se " +
          "cumplió, el gasto dejó de tener justificación política, y lo que quedaba era ciencia " +
          "lunar, que interesa mucho a los geólogos y bastante menos a un presupuesto.",
      },
      {
        b: "rayo",
        texto:
          "La pregunta «por qué no hemos vuelto» da por hecho que fuimos por la Luna. Fuimos por " +
          "otra cosa, y esa otra cosa ya se consiguió.",
      },
    ],
  },
  {
    id: "no-es-que-no-lo-grabes-se-borra-hacia-atras",
    titulo: "Por qué no recuerdas cuándo te dormiste",
    categoria: "Cuerpo humano",
    color: "var(--teal)",
    /* Serie «por-que-no-recuerdas-el-momento-en-que-te-dormiste», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «No es que no lo grabes: es que se borra hacia atrás» */
    encargo: "No es que no lo grabes: es que se borra hacia atrás",
    fotos: [
      {
        local: p_no_es_que_no_lo_grabes_se_borra_hacia_atras,
        autor: "",
        licencia: "Pexels License",
        alt:
          "No es que no lo grabes: es que se borra hacia atrás",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Nadie ha visto nunca el momento en que se durmió",
      },
      {
        b: "parrafo",
        texto:
          "Es una experiencia perfectamente universal y a la vez muy poco comentada. Te acuestas, " +
          "apagas la luz, piensas en cosas. Y lo siguiente es la mañana. Entre esas dos cosas hay " +
          "una frontera que has cruzado miles de veces en tu vida y de la que no tienes ni un " +
          "solo recuerdo.",
      },
      {
        b: "parrafo",
        texto:
          "No es que el recuerdo sea borroso, como el de una cena de hace diez años. Es que " +
          "<strong>no existe</strong>. Puedes reconstruir con detalle lo que pensabas veinte " +
          "minutos antes de dormirte, y no tienes absolutamente nada de los instantes previos al " +
          "corte.",
      },
      {
        b: "parrafo",
        texto:
          "La explicación intuitiva es que el cerebro deja de grabar cuando se apaga la " +
          "consciencia, y que por tanto el momento del tránsito simplemente no queda registrado. " +
          "Suena razonable y explicaría un hueco pequeño, del tamaño justo del instante en que te " +
          "dormiste. Pero el hueco real es mucho mayor que eso, y lo que ocurre es bastante más " +
          "raro que un apagón.",
      },
      {
        b: "rayo",
        texto:
          "Has cruzado la frontera del sueño miles de veces y no tienes ni un solo recuerdo de " +
          "haberla cruzado. No es un recuerdo borroso: no existe.",
      },
      {
        b: "rotulo",
        texto:
          "Los últimos minutos despierto se borran después",
      },
      {
        b: "parrafo",
        texto:
          "¿Cuánto se pierde exactamente? Es simple, y ahí está la sorpresa: <strong>más de lo " +
          "que estaba pasando en ese momento</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "En los años noventa, los trabajos de Wyatt y su equipo midieron esto de la manera " +
          "directa. Presentaban material a personas mientras se iban durmiendo en un laboratorio " +
          "y después comprobaban qué recordaban. El resultado fue que lo presentado en los " +
          "<strong>tres minutos anteriores</strong> al inicio del sueño se olvidaba, mientras que " +
          "lo presentado antes de esa ventana se recordaba con normalidad.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en lo que eso implica, porque no es lo mismo que no grabar. Ese material sí se " +
          "grabó: la persona estaba despierta, atenta y consciente cuando lo recibió, y si la " +
          "hubieras despertado un minuto después te lo habría contado. Lo que ocurre es que " +
          "dormirse <strong>destruye lo que ya estaba almacenado</strong> en los minutos previos. " +
          "Es una amnesia que va hacia atrás, no hacia delante.",
      },
      {
        b: "parrafo",
        texto:
          "Y ahí está la respuesta a la pregunta original. No recuerdas el momento en que te " +
          "dormiste porque, en el instante en que te dormiste, tu cerebro borró los últimos " +
          "minutos de vigilia, incluido ese momento. El recuerdo no falta por no haberse creado: " +
          "falta porque se eliminó después.",
      },
      {
        b: "parrafo",
        texto:
          "Esto explica además algo que le pasa a todo el mundo y que suele achacarse al " +
          "cansancio. Cuando te quedas dormido leyendo, al despertarte tienes que retroceder un " +
          "buen trozo de página, porque no recuerdas nada de lo último que leíste aunque lo " +
          "estuvieras entendiendo perfectamente mientras lo leías. No se te escapó: se borró.",
      },
      {
        b: "rayo",
        texto:
          "Lo aprendido en los tres minutos previos a dormirse se olvida, y lo anterior no. " +
          "Dormirse no interrumpe la grabación: borra el final de la cinta.",
      },
    ],
  },
  {
    id: "a-los-tres-anos-te-acordabas",
    titulo: "Por qué no recuerdas tus primeros años",
    categoria: "Cuerpo humano",
    color: "var(--clay)",
    /* Serie «por-que-no-recuerdas-tus-primeros-anos», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «A los tres años te acordabas perfectamente» */
    encargo: "A los tres años te acordabas perfectamente",
    fotos: [
      {
        local: p_a_los_tres_anos_te_acordabas,
        autor: "",
        licencia: "Pexels License",
        alt:
          "A los tres años te acordabas perfectamente",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "No es que no grabaras: es que se te borró después",
      },
      {
        b: "parrafo",
        texto:
          "El nombre del fenómeno se lo puso Freud a principios del siglo XX. Le llamó " +
          "<strong>amnesia infantil</strong> y lo explicó como él explicaba casi todo: nuestros " +
          "primeros años estarían llenos de material tan incómodo que la mente adulta acaba " +
          "reprimiéndolos y sellándolos bajo llave. El nombre se quedó y sigue usándose en los " +
          "congresos de neurociencia; la explicación, en cambio, no ha resistido nada bien el " +
          "paso del tiempo.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que casi todos suponemos hoy es distinto pero igual de intuitivo: que un niño muy " +
          "pequeño todavía no tiene la maquinaria montada para grabar recuerdos, y que por eso no " +
          "queda nada de esa época. Suena razonable, y es fácil de comprobar que es falso. " +
          "Siéntate delante de un niño de tres años y pregúntale por su cumpleaños, por el día " +
          "que fue al zoo o por la vez que se cayó de la bici. Te lo cuenta. Con menos palabras y " +
          "menos orden que un adulto, pero te lo cuenta, y lo cuenta bien. La grabación estaba " +
          "hecha.",
      },
      {
        b: "parrafo",
        texto:
          "La prueba definitiva la montó un equipo dirigido por Patricia Bauer con un diseño que " +
          "resuelve el problema de raíz. Grabaron a 83 niños de tres años charlando con sus " +
          "madres sobre seis cosas que les habían pasado hacía poco: un cumpleaños, una " +
          "excursión, lo de siempre. Esas grabaciones son la clave del asunto, porque documentan " +
          "que el recuerdo existía y qué contenía exactamente. Después, cada niño volvió una sola " +
          "vez, a una edad de entre cinco y nueve años, y le preguntaron por aquellos mismos " +
          "episodios.",
      },
      {
        b: "parrafo",
        texto:
          "Entre los cinco y los siete años, los niños recordaban todavía entre el 63 y el 72 % " +
          "de aquellos sucesos. Entre los ocho y los nueve, la cifra se desplomaba a alrededor " +
          "del 35 %. Es decir, el olvido no ocurre en la cuna. Ocurre bastante más tarde, cuando " +
          "el niño ya va al colegio, ya sabe leer y ya tiene una vida perfectamente consciente.",
      },
      {
        b: "rayo",
        texto:
          "El olvido de tus primeros años no te pasó de bebé. Te pasó alrededor de los siete, " +
          "cuando ya ibas al colegio.",
      },
      {
        b: "rotulo",
        texto:
          "Los que sobreviven son los que se contaron bien",
      },
      {
        b: "parrafo",
        texto:
          "Hay un detalle del estudio que da un giro interesante al asunto, y es que los " +
          "recuerdos que aguantaban y los que se caían no eran iguales entre sí.",
      },
      {
        b: "parrafo",
        texto:
          "Los niños más pequeños del grupo conservaban muchos más episodios, pero los contaban " +
          "de manera pobre y desordenada, sin fechas ni lugar ni un hilo claro. Los mayores " +
          "conservaban muchísimos menos, y sin embargo los que les quedaban estaban mucho mejor " +
          "construidos, con principio, escenario y desenlace. Dicho de otro modo, lo que ocurre " +
          "entre los cinco y los nueve años no es solamente una pérdida: es una criba. Se cae la " +
          "mayoría del material y sobrevive una minoría que además está mejor montada.",
      },
      {
        b: "parrafo",
        texto:
          "¿Y qué distingue a los supervivientes? Es simple: parece que sobrevive lo que se " +
          "convirtió en relato. Los investigadores encontraron que los niños cuyas madres " +
          "charlaban con ellos siguiendo el hilo de lo que el crío contaba, en vez de " +
          "interrogarlos con preguntas cerradas, formaban desde el principio recuerdos más ricos " +
          "y mejor estructurados. Un episodio que se ha contado varias veces, con orden y con " +
          "detalles, se ancla; un episodio que nunca llegó a convertirse en historia se disuelve.",
      },
      {
        b: "parrafo",
        texto:
          "Eso encaja con algo que se sospecha desde hace tiempo: que el lenguaje y la memoria " +
          "autobiográfica crecen juntos, y que un niño empieza a conservar su propia vida cuando " +
          "aprende a narrarla. No es toda la explicación, ni mucho menos, pero es una pieza que " +
          "se puede medir.",
      },
      {
        b: "rayo",
        texto:
          "Los recuerdos que aguantan no son los más intensos. Son los que alguien convirtió en " +
          "una historia contada varias veces.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Este estudio pertenece a una categoría rarísima dentro de la " +
          "investigación sobre la memoria: aquellos en los que los científicos tienen la " +
          "grabación original del recuerdo. Casi siempre hay que fiarse de lo que la persona dice " +
          "que le pasó, sin manera de contrastarlo. Aquí sabían exactamente qué había recordado " +
          "cada niño a los tres años, y podían medir con precisión cuánto quedaba años después.",
      },
    ],
  },
  {
    id: "por-que-nos-salen-canas",
    titulo: "Por qué nos salen canas",
    categoria: "Cuerpo humano",
    color: "var(--teal)",
    /* Serie «por-que-nos-salen-canas», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un pelo no se vuelve blanco: nace blanco» */
    encargo: "Un pelo no se vuelve blanco: nace blanco",
    fotos: [
      {
        local: p_por_que_nos_salen_canas,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un pelo no se vuelve blanco: nace blanco",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El pelo que ves ya está muerto y no puede cambiar de color",
      },
      {
        b: "parrafo",
        texto:
          "La expresión «se le está poniendo el pelo blanco» describe muy mal lo que ocurre, y " +
          "entenderlo cambia toda la idea que uno tiene del asunto.",
      },
      {
        b: "parrafo",
        texto:
          "Un pelo es queratina muerta desde el momento en que asoma. La parte viva está abajo, " +
          "dentro del folículo, y es la única que hace algo: fabricar pelo y teñirlo mientras lo " +
          "fabrica. Lo que ya ha salido es material inerte, como una uña o como el cuerno de un " +
          "animal. No respira, no se alimenta y no puede cambiar de color por sí mismo.",
      },
      {
        b: "parrafo",
        texto:
          "Así que la canicie no consiste en que unos pelos existentes pierdan su color. Consiste " +
          "en el <strong>crecimiento de fibras de pelo nuevas y sin pigmentar</strong> dentro de " +
          "los folículos. El folículo deja de teñir, y a partir de ahí todo lo que produzca " +
          "saldrá blanco desde el primer milímetro.",
      },
      {
        b: "parrafo",
        texto:
          "El color de un pelo se decide una vez, en la raíz, en el momento de fabricarlo, y ya " +
          "no se revisa.",
      },
      {
        b: "rayo",
        texto:
          "Las canas no son pelos que hayan perdido el color. Son pelos distintos, fabricados " +
          "después, que salieron ya sin él. El pelo teñido de antes sigue teñido hasta que se " +
          "cae.",
      },
      {
        b: "rotulo",
        texto:
          "Y el gris no existe: es una mezcla vista de lejos",
      },
      {
        b: "parrafo",
        texto:
          "De lo anterior sale una consecuencia que explica por qué el proceso parece gradual " +
          "cuando en realidad no lo es.",
      },
      {
        b: "parrafo",
        texto:
          "Empecemos por el pigmento, porque tampoco es lo que parece. El pelo gris o blanco no " +
          "lo causa ningún pigmento gris ni blanco: lo causa la ausencia de pigmentación y de " +
          "melanina. No hay una sustancia que ponga el pelo blanco; hay una que faltaba y que " +
          "ponía el pelo oscuro.",
      },
      {
        b: "parrafo",
        texto:
          "Y entonces, ¿qué es una cabeza gris? Una mezcla. Cada folículo toma su decisión por " +
          "separado y en un momento distinto, así que en una cabeza conviven pelos que aún salen " +
          "pigmentados y pelos que ya salen blancos. Lo que tu ojo llama gris es la proporción " +
          "entre unos y otros, vista desde lejos, igual que una pared con puntos blancos y negros " +
          "se ve gris a dos metros.",
      },
      {
        b: "parrafo",
        texto:
          "Por eso el encanecimiento se percibe como un desvanecimiento suave cuando en realidad " +
          "es una decisión binaria repetida miles de veces. Ningún pelo se ha vuelto un poco más " +
          "claro. Lo único que ha cambiado es cuántos de ellos salen ya sin color.",
      },
      {
        b: "parrafo",
        texto:
          "Y de ahí sale también el problema de las historias de gente que encanece de golpe por " +
          "un susto. El pelo que esa persona tiene puesto ya está fabricado y no puede " +
          "descolorarse. Lo que le ocurra hoy solo podrá verse en lo que crezca a partir de hoy.",
      },
      {
        b: "rayo",
        texto:
          "No existe el pelo gris, solo cabezas grises. Cada pelo es blanco o es de color, y lo " +
          "que llamamos encanecer es el cambio de una proporción, no el desvanecimiento de nada.",
      },
    ],
  },
  {
    id: "la-unica-especie-que-se-sonroja",
    titulo: "Por qué nos sonrojamos",
    categoria: "Cuerpo humano",
    color: "var(--teal)",
    /* Serie «por-que-nos-sonrojamos», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Somos la única especie que se sonroja» */
    encargo: "Somos la única especie que se sonroja",
    fotos: [
      {
        local: p_la_unica_especie_que_se_sonroja,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Somos la única especie que se sonroja",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Darwin le dedicó un capítulo entero y lo dejó sin resolver",
      },
      {
        b: "parrafo",
        texto:
          "En 1872, en <em>La expresión de las emociones en el hombre y en los animales</em>, " +
          "Darwin se ocupó del rubor con una atención que sorprende. Recopiló testimonios de " +
          "médicos y misioneros de medio mundo para comprobar si ocurría en todas las poblaciones " +
          "humanas, preguntó por los ciegos de nacimiento, se interesó por si se podía provocar a " +
          "voluntad. Y lo describió con una frase que se ha citado desde entonces:",
      },
      {
        b: "cita",
        texto:
          "El rubor es la más peculiar y la más humana de todas las expresiones.",
        autor: "Charles Darwin, <em>La expresión de las emociones en el hombre y en los animales</em>, 1872",
      },
      {
        b: "parrafo",
        texto:
          "No lo decía por hacer literatura. Lo decía porque el rubor es un caso rarísimo dentro " +
          "de su propio marco explicativo. Casi todas las expresiones que estudió tienen " +
          "parientes claros en otros animales: la sonrisa se parece a un gesto de sumisión de los " +
          "primates, el ceño fruncido protege los ojos, el miedo eriza el pelo. El rubor no. " +
          "Ninguna otra especie conocida se pone roja de vergüenza, y no es que sea difícil de " +
          "detectar bajo el pelo: es que el circuito no existe.",
      },
      {
        b: "parrafo",
        texto:
          "Y hay una segunda rareza, que es la que lo hace tan incómodo de vivir. No se puede " +
          "fingir y no se puede reprimir. Puedes forzar una sonrisa, puedes fingir sorpresa, " +
          "puedes disimular el miedo con bastante éxito. El rubor no obedece a nadie: aparece " +
          "cuando quiere, normalmente en el peor momento posible, y el esfuerzo por evitarlo " +
          "tiende a empeorarlo. Es la única expresión facial humana que funciona con total " +
          "independencia de tu voluntad.",
      },
      {
        b: "rayo",
        texto:
          "Puedes fingir una sonrisa y disimular el miedo. El rubor es la única expresión que no " +
          "obedece a nadie.",
      },
      {
        b: "rotulo",
        texto:
          "Lo que hace la sangre en tu cara va a contracorriente",
      },
      {
        b: "parrafo",
        texto:
          "El mecanismo también tiene su parte extraña, y para verla hay que compararla con lo " +
          "que hace el resto del cuerpo en la misma situación.",
      },
      {
        b: "parrafo",
        texto:
          "Cuando te llevas un susto o entras en estado de alerta, se activa el sistema nervioso " +
          "simpático, y una de sus órdenes clásicas es cerrar los vasos sanguíneos de la piel. " +
          "Tiene toda la lógica: se retira sangre de la superficie, donde no hace falta, y se " +
          "manda a los músculos y a los órganos, que es donde va a hacer falta si hay que correr " +
          "o pelear. Por eso la gente se queda pálida al asustarse, y por eso se te quedan las " +
          "manos frías.",
      },
      {
        b: "parrafo",
        texto:
          "En la cara ocurre lo contrario. Ante la vergüenza, los vasos de las mejillas, el " +
          "cuello y las orejas se dilatan y dejan pasar más sangre, no menos, y por eso la piel " +
          "se enrojece y notas calor. Es la misma activación general del organismo produciendo, " +
          "en una zona muy concreta, el efecto opuesto al que produce en todas las demás.",
      },
      {
        b: "parrafo",
        texto:
          "Y esa excepción está bien delimitada: el rubor de la vergüenza afecta a la cara, al " +
          "cuello y a la parte alta del pecho, precisamente las zonas que quedan a la vista " +
          "cuando hablas con alguien. No te enrojecen las rodillas. Una respuesta corporal que " +
          "solo aparece donde otro puede verla es una pista bastante clara sobre para qué está.",
      },
      {
        b: "rayo",
        texto:
          "El susto te deja pálido porque el cuerpo retira sangre de la piel. En la cara, la " +
          "vergüenza hace justo lo contrario.",
      },
    ],
  },
  {
    id: "el-picante-no-es-un-sabor",
    titulo: "Por qué pica el picante",
    categoria: "Cuerpo humano",
    color: "var(--clay)",
    /* Serie «por-que-pica-el-picante», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El picante no es un sabor» */
    encargo: "Cientos de chiles rojos alargados extendidos para secarse, llenando la imagen entera.",
    fotos: [
      {
        local: p_el_picante_no_es_un_sabor,
        autor:
          "Fotografía de MacShamim, en Pexels.",
        licencia: "Pexels License",
        fuente:
          "https://www.pexels.com/photo/31464525/",
        alt:
          "Cientos de chiles rojos alargados extendidos para secarse, llenando la imagen entera.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "No está en la misma categoría que el dulce o el salado",
      },
      {
        b: "parrafo",
        texto:
          "Empecemos por deshacer un malentendido que arrastramos todos, y que además está " +
          "incrustado en el idioma: <strong>el picante no es un sabor.</strong> No pertenece al " +
          "mismo grupo que el dulce, el salado, el ácido, el amargo y el umami, que son los cinco " +
          "que la lengua detecta con papilas gustativas. Cuando decimos que un plato «sabe " +
          "picante» estamos mezclando dos categorías que el cuerpo tiene perfectamente separadas.",
      },
      {
        b: "parrafo",
        texto:
          "Y no es una distinción de manual ni un tecnicismo sin consecuencias, porque se nota en " +
          "la práctica constantemente. El picante lo notas en los labios, que no tienen papilas " +
          "gustativas. Lo notas en la garganta cuando ya has tragado. Lo notas dentro de la nariz " +
          "si el vapor de un guiso te llega ahí arriba. Puedes notarlo en la piel del antebrazo, " +
          "y desde luego lo notas si cortas un chile y luego te tocas la cara o los ojos, que es " +
          "como bastante gente lo descubre de la peor manera posible. Nada de eso ocurre con lo " +
          "dulce: el azúcar en el codo no sabe a nada, porque lo dulce necesita papilas y el " +
          "picante no.",
      },
      {
        b: "parrafo",
        texto:
          "La conclusión es que lo que sientes cuando comes picante no viaja por el sistema del " +
          "gusto en absoluto. Viaja por otro sistema completamente distinto, mucho más antiguo y " +
          "con otra finalidad: el que te avisa de que te estás quemando.",
      },
      {
        b: "rayo",
        texto:
          "El picante no es uno de los cinco sabores. Lo notas en los labios, en la nariz y hasta " +
          "en la piel, porque no usa el sistema del gusto.",
      },
      {
        b: "rotulo",
        texto:
          "Tu cerebro no lo distingue de una quemadura real",
      },
      {
        b: "parrafo",
        texto:
          "Aquí está el mecanismo, y es bastante más literal de lo que nadie espera al oírlo por " +
          "primera vez. Repartidos por tus terminaciones nerviosas hay unos receptores llamados " +
          "<strong>TRPV1</strong>, y su trabajo normal, el que llevan haciendo desde mucho antes " +
          "de que existieran los humanos, es avisarte del calor peligroso. Se activan cuando la " +
          "temperatura de la zona sube por encima de unos cuarenta y tres grados, que es más o " +
          "menos donde el calor deja de ser agradable y empieza a dañar tejido, y mandan al " +
          "cerebro un mensaje muy claro que significa <em>me estoy quemando</em>.",
      },
      {
        b: "parrafo",
        texto:
          "La capsaicina, la molécula responsable del picor de los chiles, encaja en ese mismo " +
          "receptor y lo abre sin necesidad de que haya calor alguno. Léelo despacio, porque el " +
          "matiz es lo importante: la comida picante no <em>se parece</em> a una quemadura, ni te " +
          "<em>recuerda</em> al calor, ni activa algo vagamente similar. Activa el mismo canal " +
          "iónico, dispara la misma señal eléctrica y llega al cerebro por la misma vía nerviosa " +
          "que una plancha ardiendo. Desde el punto de vista de tu sistema nervioso, un chile y " +
          "una sartén caliente son sencillamente indistinguibles.",
      },
      {
        b: "parrafo",
        texto:
          "Y por eso la respuesta de tu cuerpo tampoco es metafórica. Sudas, se te enrojece la " +
          "cara, te lloran los ojos, se te acelera el pulso y a veces te gotea la nariz. No son " +
          "reacciones al sabor: es el organismo entero intentando refrigerarse y protegerse de " +
          "una quemadura que no está ocurriendo, porque ha recibido un aviso que no tiene forma " +
          "de contrastar. Ese hallazgo, por cierto, no fue una curiosidad menor de laboratorio: " +
          "David Julius descubrió el receptor TRPV1 usando precisamente la capsaicina como " +
          "herramienta para localizarlo, y ese trabajo le valió el <strong>Premio Nobel de " +
          "Medicina de 2021</strong>.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Ahí está también la razón por la que el agua no alivia y la leche sí. La " +
          "capsaicina no se disuelve en agua, así que un vaso la reparte por toda la boca en vez " +
          "de arrastrarla. La leche lleva grasa, en la que sí se disuelve, y caseína, una " +
          "proteína que se engancha a la molécula y la despega de los receptores. No es una " +
          "creencia popular: es química.",
      },
      {
        b: "rayo",
        texto:
          "La capsaicina abre el mismo receptor que detecta el calor que quema. Para tu sistema " +
          "nervioso, un chile y una sartén mandan el mismo mensaje.",
      },
    ],
  },
  {
    id: "el-picor-lo-pones-tu",
    titulo: "Por qué pica la picadura de mosquito",
    categoria: "Cuerpo humano",
    color: "var(--ochre)",
    /* Serie «por-que-pica-la-picadura-de-mosquito», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El picor de la picadura lo pones tú, no el mosquito» */
    encargo: "El picor de la picadura lo pones tú, no el mosquito",
    fotos: [
      {
        local: p_el_picor_lo_pones_tu,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El picor de la picadura lo pones tú, no el mosquito",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El pinchazo no duele, y eso ya es una pista",
      },
      {
        b: "parrafo",
        texto:
          "Empecemos por algo que casi nadie se para a pensar: no notas la picadura mientras " +
          "ocurre. Un mosquito te clava un aparato bucal en la piel, perfora hasta encontrar un " +
          "capilar y se pasa un rato considerable bombeando sangre, y tú, mientras tanto, no " +
          "sientes absolutamente nada. Solo te enteras después, cuando ya se ha ido.",
      },
      {
        b: "parrafo",
        texto:
          "Eso no es casualidad ni mala suerte: es diseño. Un insecto que necesita quedarse " +
          "quieto sobre un animal grande durante casi un minuto no puede permitirse que lo noten, " +
          "así que su saliva lleva un cóctel bastante sofisticado. Hay anticoagulantes, para que " +
          "la sangre no se le coagule dentro del tubo mientras bebe. Hay vasodilatadores, para " +
          "que el capilar se abra y el flujo sea más generoso. Y hay compuestos que reducen la " +
          "sensación local durante el proceso. Todo eso lo inyecta antes y durante, y todo eso se " +
          "queda dentro de tu piel cuando termina.",
      },
      {
        b: "parrafo",
        texto:
          "Ahí está la respuesta a la pregunta. Lo que te pica no es el agujero, que es minúsculo " +
          "y se cierra solo. Lo que te pica es lo que se quedó dentro: unas cuantas proteínas " +
          "ajenas repartidas en tu tejido.",
      },
      {
        b: "parrafo",
        texto:
          "Por cierto, quien te pica es siempre una hembra. Los machos no pican a nadie y se " +
          "alimentan de néctar; ellas necesitan las proteínas de la sangre para poder producir " +
          "los huevos, y por eso pinchan.",
      },
      {
        b: "rayo",
        texto:
          "No notas el pinchazo porque el mosquito ha invertido en que no lo notes. Lo que sí " +
          "notas es lo que dejó dentro.",
      },
      {
        b: "rotulo",
        texto:
          "Tu sistema inmunitario monta una respuesta desproporcionada",
      },
      {
        b: "parrafo",
        texto:
          "Cuando tu organismo detecta esas proteínas extrañas, hace lo que hace siempre ante " +
          "algo ajeno: reacciona. Y en este caso reacciona bastante más de lo que el problema " +
          "merece.",
      },
      {
        b: "parrafo",
        texto:
          "La saliva del mosquito activa a los mastocitos de tu piel, unas células que guardan " +
          "gránulos cargados de <strong>histamina</strong> y de otros mediadores inflamatorios. " +
          "Al activarse los sueltan de golpe. La histamina dilata los vasos de la zona, que es lo " +
          "que produce el enrojecimiento; aumenta la permeabilidad de esos vasos, así que sale " +
          "líquido al tejido y se forma el habón hinchado; y estimula directamente las " +
          "terminaciones nerviosas responsables del picor.",
      },
      {
        b: "parrafo",
        texto:
          "Hay varias vías por las que puede ocurrir. En una, el cuerpo ha fabricado anticuerpos " +
          "de tipo IgE contra las proteínas de esa saliva y son ellos los que disparan a los " +
          "mastocitos, que es el mismo mecanismo de una alergia clásica. En otra, ciertos " +
          "componentes de la saliva activan a los mastocitos directamente. Y hay además rutas de " +
          "picor que no dependen de la histamina, razón por la cual un antihistamínico ayuda pero " +
          "no siempre lo apaga del todo.",
      },
      {
        b: "parrafo",
        texto:
          "El resumen es incómodo pero exacto: el mosquito te quitó una gota de sangre y se fue, " +
          "y el bulto rojo que llevas tres días rascándote lo has fabricado tú entero. Ni la " +
          "hinchazón, ni el rojo, ni el picor vienen del insecto. Vienen de tu respuesta a algo " +
          "que ya no está haciendo nada.",
      },
      {
        b: "rayo",
        texto:
          "El mosquito se llevó una gota de sangre. El bulto, el rojo y el picor los has " +
          "fabricado tú.",
      },
    ],
  },
  {
    id: "perderse-en-un-centro-comercial",
    titulo: "Por qué recuerdas mal cosas que juras haber vivido",
    categoria: "Ciencia",
    color: "var(--plum)",
    /* Serie «por-que-recuerdas-mal-cosas-que-juras-haber-vivido», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un tercio de los voluntarios recordó perderse en un centro comercial donde nunca se perdió» */
    encargo: "Un tercio de los voluntarios recordó perderse en un centro comercial donde nunca se perdió",
    fotos: [
      {
        local: p_perderse_en_un_centro_comercial,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un tercio de los voluntarios recordó perderse en un centro comercial donde nunca se " +
          "perdió",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El experimento consiste en plantar un recuerdo y ver si arraiga",
      },
      {
        b: "parrafo",
        texto:
          "La psicóloga Elizabeth Loftus diseñó en los años noventa uno de los experimentos más " +
          "incómodos de su disciplina, y su montaje es de una sencillez desarmante.",
      },
      {
        b: "parrafo",
        texto:
          "Se pide a la familia de cada voluntario que cuente episodios reales de su infancia. " +
          "Con esos episodios se prepara un cuadernillo con cuatro relatos breves, y ahí está el " +
          "truco: <strong>tres son verdad y uno es inventado</strong>. El falso siempre cuenta lo " +
          "mismo, que la persona se perdió de pequeña en un centro comercial, pasó un rato " +
          "llorando y acabó siendo devuelta a su familia por una señora mayor.",
      },
      {
        b: "parrafo",
        texto:
          "Luego se le pide al voluntario que lea los cuatro y escriba lo que recuerde de cada " +
          "uno. Y en una segunda y una tercera entrevista se le vuelve a preguntar.",
      },
      {
        b: "parrafo",
        texto:
          "En el estudio original, de <strong>veinticuatro participantes</strong>, siete —el " +
          "veintinueve por ciento— recordaban el episodio falso de forma parcial o completa. " +
          "Seis, el <strong>veinticinco por ciento</strong>, seguían recordándolo en las " +
          "entrevistas de seguimiento.",
      },
      {
        b: "rayo",
        texto:
          "A una de cada cuatro personas le bastó leer un párrafo inventado sobre su propia " +
          "infancia para empezar a recordarlo.",
      },
      {
        b: "rotulo",
        texto:
          "No es un resultado antiguo que haya quedado en nada",
      },
      {
        b: "parrafo",
        texto:
          "Con un experimento así, la reacción sensata es preguntar si aguanta. Muchos hallazgos " +
          "llamativos de la psicología de los años noventa no han sobrevivido a la comprobación " +
          "posterior, y es justo comprobarlo.",
      },
      {
        b: "parrafo",
        texto:
          "Este sí. En <strong>2023</strong> se publicó una réplica preregistrada —es decir, con " +
          "el método y el análisis fijados y públicos antes de recoger ni un solo dato, que es la " +
          "forma más exigente de hacerlo— con <strong>ciento veintitrés participantes</strong>. " +
          "El resultado no solo confirmó el original: lo superó. Un <strong>treinta y cinco por " +
          "ciento</strong> de los participantes fue codificado como portador de un recuerdo " +
          "falso, frente al veinticinco por ciento de 1995.",
      },
      {
        b: "parrafo",
        texto:
          "¿Y cómo puede alguien recordar con detalle algo que no le pasó? Es simple: <strong>el " +
          "cerebro rellena</strong>. No le entregas un recuerdo completo: le entregas un " +
          "escenario plausible, y él aporta el resto con material propio. Centros comerciales que " +
          "sí conoció, el miedo a perderse que sí sintió alguna vez, la cara de alguna señora " +
          "mayor. Todo eso es real. Lo único falso es el montaje.",
      },
      {
        b: "rayo",
        texto:
          "El experimento no instala un recuerdo entero en la cabeza de nadie. Solo pone la " +
          "percha, y el propio recuerdo lo fabrica el que lo tiene.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Muchos participantes de este tipo de estudios añaden por su cuenta " +
          "detalles que nadie les sugirió: la ropa que llevaban, el pasillo donde ocurrió, lo que " +
          "les dijo la señora. Cuanto más se les pregunta, más rico se vuelve el recuerdo falso.",
      },
    ],
  },
  {
    id: "un-patinador-no-derrite-el-hielo",
    titulo: "Por qué resbala el hielo",
    categoria: "Ciencia",
    color: "var(--sage)",
    /* Serie «por-que-resbala-el-hielo», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un patinador no derrite el hielo que pisa» */
    encargo: "Un patinador no derrite el hielo que pisa",
    fotos: [
      {
        local: p_un_patinador_no_derrite_el_hielo,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un patinador no derrite el hielo que pisa",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La explicación de siempre lleva un siglo desmontada",
      },
      {
        b: "parrafo",
        texto:
          "La versión que todos hemos oído es tan redonda que da pena tocarla. El hielo resbala, " +
          "dicen, porque el peso del patinador concentrado en el filo de la cuchilla ejerce una " +
          "presión enorme, y esa presión baja el punto de fusión y derrite una película de agua " +
          "sobre la que uno se desliza. Tiene la ventaja de sonar a física de verdad, y encima es " +
          "física de verdad: la idea la propuso James Thomson a mediados del siglo XIX y su " +
          "hermano, que era nada menos que lord Kelvin, la confirmó experimentalmente. El hielo, " +
          "efectivamente, se derrite si lo aprietas lo suficiente.",
      },
      {
        b: "parrafo",
        texto:
          "El problema aparece cuando alguien se molesta en calcular cuánto es «lo suficiente». " +
          "Lo hizo John Joly en 1886, y el resultado deja el asunto bastante claro. Con la " +
          "presión que ejerce una cuchilla de patinaje, unas 466 atmósferas, el punto de fusión " +
          "del hielo baja hasta los −3,5 °C. Es una bajada real y medible, y es del todo " +
          "insuficiente para explicar lo que vemos, porque el patinaje artístico se practica " +
          "idealmente en torno a los −5,5 °C y el hockey sobre pistas a unos −9 °C. A esas " +
          "temperaturas, según ese mecanismo, el hielo no debería derretirse en absoluto bajo la " +
          "cuchilla, y sin embargo la gente patina. Y si te vas a la nieve, el argumento se hunde " +
          "del todo: se puede esquiar perfectamente a −30 °C, donde harían falta presiones " +
          "absurdas que ningún esquiador podría generar ni acercándose.",
      },
      {
        b: "rayo",
        texto:
          "Con el peso de un patinador el hielo se derrite hasta los −3,5 °C. El hockey se juega " +
          "a −9 °C, y a esa temperatura la presión no derrite nada.",
      },
      {
        b: "rotulo",
        texto:
          "El rozamiento tampoco lo explica del todo",
      },
      {
        b: "parrafo",
        texto:
          "La siguiente candidata parece más sensata, y durante décadas fue la favorita. En 1939, " +
          "Frank Bowden y Terence Hughes propusieron que lo que funde el hielo no es la presión " +
          "sino el calor del rozamiento: al deslizarte generas fricción, la fricción calienta, el " +
          "calor derrite una capa finísima de agua y esa agua te lubrica. Lo pusieron a prueba en " +
          "una cueva de hielo de los Alpes suizos, comparando esquís de metal con esquís de " +
          "madera, y encontraron exactamente lo que la idea predecía, así que el mecanismo existe " +
          "y contribuye de verdad. Nadie discute esa parte.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que ocurre es que el rozamiento tiene un fallo de calendario difícil de esquivar. " +
          "Para que el rozamiento caliente hace falta que ya te estés moviendo, y el hielo " +
          "resbala desde el primer instante, antes de que hayas hecho nada. Piénsalo con un " +
          "ejemplo que habrás vivido: te bajas del coche en una mañana helada, apoyas un pie en " +
          "una placa de hielo y te vas al suelo sin haber deslizado un centímetro. Ahí no ha " +
          "habido fricción previa, no ha habido calor, no ha habido tiempo. La superficie ya " +
          "estaba resbaladiza cuando la pisaste.",
      },
      {
        b: "parrafo",
        texto:
          "Así que las dos explicaciones clásicas describen fenómenos reales que sí participan, y " +
          "ninguna de las dos llega a la conclusión. Falta algo que esté ahí antes de que " +
          "aparezca el peso y antes de que aparezca el movimiento, y ese algo tardó bastante en " +
          "tomarse en serio.",
      },
      {
        b: "rayo",
        texto:
          "El rozamiento calienta, pero necesita que ya te estés moviendo. El hielo te tira al " +
          "suelo desde el primer paso.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Lo de Joly no fue un cálculo teórico de despacho. Fue de los primeros en " +
          "medir experimentalmente la presión real que ejerce el filo de un patín sobre el hielo, " +
          "en vez de suponerla, y precisamente por eso su número resultó tan incómodo para la " +
          "explicación que él mismo estaba comprobando.",
      },
    ],
  },
  {
    id: "no-solo-cuando-estan-contentos",
    titulo: "Por qué ronronean los gatos",
    categoria: "Naturaleza",
    color: "var(--plum)",
    /* Serie «por-que-ronronean-los-gatos», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un gato también ronronea mientras se muere» */
    encargo: "Un gato también ronronea mientras se muere",
    fotos: [
      {
        local: p_no_solo_cuando_estan_contentos,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un gato también ronronea mientras se muere",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El ronroneo no significa lo que damos por hecho",
      },
      {
        b: "parrafo",
        texto:
          "La traducción que hacemos todos del ronroneo es inmediata: el gato está a gusto. Lo " +
          "acaricias, arranca ese motor y das por hecho que es su manera de decir que está " +
          "contento. Y en muchísimos casos lo está, así que la lectura funciona el noventa por " +
          "ciento del tiempo.",
      },
      {
        b: "parrafo",
        texto:
          "El problema es el otro diez por ciento, y es el que obliga a replantearlo todo. Los " +
          "veterinarios llevan décadas observando gatos que ronronean en situaciones que no " +
          "tienen nada de placenteras. Ronronean cuando están heridos. Ronronean en la consulta, " +
          "asustados y con el pulso disparado. Las gatas ronronean mientras paren. Y ronronean, y " +
          "esto es lo que más impresiona a quien lo ha visto, mientras se están muriendo.",
      },
      {
        b: "parrafo",
        texto:
          "Si un mismo sonido aparece cuando el animal está tumbado al sol y también cuando está " +
          "agonizando, entonces ese sonido no puede significar «estoy contento». Tiene que " +
          "significar otra cosa, o no significar nada concreto y ser más bien un mecanismo que se " +
          "activa en circunstancias muy distintas.",
      },
      {
        b: "parrafo",
        texto:
          "La hipótesis que se maneja es que sea algo así como una forma de autorregulación: un " +
          "comportamiento que el gato despliega en situaciones de alta demanda, sea buena o mala, " +
          "para calmarse a sí mismo. Encajaría con que aparezca en el placer y en el dolor, que " +
          "son dos estados opuestos en lo emocional y parecidos en lo fisiológico.",
      },
      {
        b: "rayo",
        texto:
          "Si el mismo sonido aparece tumbado al sol y agonizando, no puede querer decir «estoy " +
          "contento».",
      },
      {
        b: "rotulo",
        texto:
          "Y en 2023 se descubrió que ni siquiera sabíamos cómo lo hacen",
      },
      {
        b: "parrafo",
        texto:
          "Lo más desconcertante de este tema es que hasta hace muy poco tampoco estaba resuelto " +
          "el mecanismo, que parecería la parte fácil.",
      },
      {
        b: "parrafo",
        texto:
          "Durante unos cincuenta años, la explicación aceptada fue que el ronroneo lo produce el " +
          "propio cerebro del gato mandando pulsos rítmicos a los músculos de la laringe, que se " +
          "contraen y se relajan entre veinte y treinta veces por segundo. Un oscilador neuronal, " +
          "es decir, un metrónomo dentro del sistema nervioso ordenando cada ciclo. Encajaba con " +
          "que el sonido sea tan regular y con que el gato pueda ronronear mientras respira en " +
          "las dos direcciones.",
      },
      {
        b: "parrafo",
        texto:
          "En 2023, un equipo dirigido por Christian Herbst publicó en <em>Current Biology</em> " +
          "un resultado que descoloca esa explicación. Trabajando con laringes de gato aisladas, " +
          "sin ningún nervio conectado y por tanto sin ninguna orden posible del cerebro, " +
          "consiguieron que produjeran sonidos a frecuencias de ronroneo. Sin pulsos, sin " +
          "músculos contrayéndose a ritmo, sin metrónomo.",
      },
      {
        b: "parrafo",
        texto:
          "Al mirar la anatomía con detalle encontraron una estructura que puede explicarlo: unas " +
          "almohadillas de tejido incrustadas en las cuerdas vocales, que aumentan su masa y les " +
          "permiten vibrar a frecuencias bajísimas, de veinte a treinta hercios. Es un mecanismo " +
          "pasivo, más parecido al de la voz humana muy grave que a un músculo latiendo.",
      },
      {
        b: "parrafo",
        texto:
          "Conviene decir que el hallazgo no cierra el asunto: demuestra que la laringe " +
          "<strong>puede</strong> hacerlo sola, no que en un gato vivo se haga exactamente así, y " +
          "los propios autores señalan que el cuadro sigue incompleto. Pero deja una situación " +
          "curiosa: llevamos milenios conviviendo con este animal y seguimos discutiendo cómo " +
          "produce su sonido más característico.",
      },
      {
        b: "rayo",
        texto:
          "Una laringe de gato desconectada de todo nervio produce ronroneo. Cincuenta años de " +
          "explicación se quedaron cojos en 2023.",
      },
    ],
  },
  {
    id: "por-que-saturno-tiene-anillos",
    titulo: "Por qué Saturno tiene anillos",
    categoria: "Ciencia",
    color: "var(--sage)",
    /* Serie «por-que-saturno-tiene-anillos», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Los anillos son una hoja de papel de casi tres kilómetros de ancho» */
    encargo: "Los anillos son una hoja de papel de casi tres kilómetros de ancho",
    fotos: [
      {
        local: p_por_que_saturno_tiene_anillos,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Los anillos son una hoja de papel de casi tres kilómetros de ancho",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "No son un disco sólido: son miles de millones de trozos de hielo",
      },
      {
        b: "parrafo",
        texto:
          "Vistos desde lejos, los anillos parecen una lámina continua, y durante siglos se " +
          "discutió si serían un disco rígido. No lo son. Están formados por miles de millones de " +
          "fragmentos independientes, cada uno orbitando Saturno por su cuenta como si fuera una " +
          "luna diminuta.",
      },
      {
        b: "parrafo",
        texto:
          "El material es sobre todo <strong>hielo de agua</strong>, cubierto de polvo y otros " +
          "compuestos. Y los tamaños abarcan un rango que no cabe en la cabeza: desde granos más " +
          "pequeños que la arena hasta bloques del tamaño de una casa, y algunos tan grandes como " +
          "una montaña.",
      },
      {
        b: "rayo",
        texto:
          "Los anillos no son un objeto, sino una multitud. Cada punto de esa lámina es una " +
          "piedra de hielo dando vueltas sola.",
      },
      {
        b: "rotulo",
        texto:
          "La proporción es lo verdaderamente difícil de creer",
      },
      {
        b: "parrafo",
        texto:
          "¿Y qué grosor tiene esa lámina? Aquí es donde la escala se vuelve absurda.",
      },
      {
        b: "parrafo",
        texto:
          "El sistema de anillos se extiende hasta doscientos ochenta y dos mil kilómetros desde " +
          "el planeta. Su altura, en los anillos principales, ronda los <strong>diez " +
          "metros</strong>. No diez kilómetros: diez metros, la altura de un edificio de tres " +
          "plantas.",
      },
      {
        b: "parrafo",
        texto:
          "Para ver la proporción conviene bajarla a algo de andar por casa. Una hoja de papel " +
          "tiene una décima de milímetro de grosor. Si la estirásemos manteniendo la misma " +
          "proporción que los anillos de Saturno, mediría casi tres kilómetros de ancho.",
      },
      {
        b: "parrafo",
        texto:
          "Eso explica algo que ocurre cada quince años aproximadamente y que se puede ver desde " +
          "la Tierra: los anillos se colocan de canto respecto a nosotros y sencillamente " +
          "desaparecen. No es un fenómeno óptico raro. Es que a esa distancia una lámina de diez " +
          "metros no se ve.",
      },
      {
        b: "parrafo",
        texto:
          "Le pasó a Galileo Galilei, que en 1610 fue el primero en mirar Saturno con un " +
          "telescopio y creyó estar viendo un planeta con dos lunas pegadas o con asas. Años " +
          "después volvió a mirar, coincidiendo con uno de esos cruces, y las asas no estaban:",
      },
      {
        b: "cita",
        texto:
          "No sé qué decir en un caso tan sorprendente, tan inesperado y tan novedoso.",
        autor: "Galileo Galilei",
      },
      {
        b: "rayo",
        texto:
          "El objeto más reconocible del sistema solar es, mirado de canto, invisible.",
      },
    ],
  },
  {
    id: "por-que-se-abandono-machu-picchu",
    titulo: "Por qué se abandonó Machu Picchu",
    categoria: "Historia",
    color: "var(--ochre)",
    /* Serie «por-que-se-abandono-machu-picchu», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «No era una ciudad: era la finca de recreo de un emperador» */
    encargo: "No era una ciudad: era la finca de recreo de un emperador",
    fotos: [
      {
        local: p_por_que_se_abandono_machu_picchu,
        autor: "",
        licencia: "Pexels License",
        alt:
          "No era una ciudad: era la finca de recreo de un emperador",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La pregunta del abandono depende de qué era aquello",
      },
      {
        b: "parrafo",
        texto:
          "Antes de preguntar por qué se abandonó hay que resolver una cosa, porque la respuesta " +
          "depende entera de ella: qué era exactamente Machu Picchu.",
      },
      {
        b: "parrafo",
        texto:
          "La versión popular dice ciudadela perdida, último refugio de los incas frente a los " +
          "españoles. Esa idea la puso en circulación Hiram Bingham en 1911 y está descartada: el " +
          "último reducto inca fue Espíritu Pampa, en la selva, y allí sí llegaron los españoles " +
          "a combatir contra los gobernantes incas independientes durante el siglo XVI.",
      },
      {
        b: "parrafo",
        texto:
          "La interpretación más aceptada hoy es otra y bastante menos épica. Machu Picchu era " +
          "una <strong>finca real</strong>: una propiedad del emperador Pachacútec, construida en " +
          "el siglo XV, mantenida por el Estado y usada por la élite del Cuzco. Un sitio de " +
          "retiro, de ceremonia y de prestigio, no un núcleo urbano ni una fortaleza.",
      },
      {
        b: "rayo",
        texto:
          "El nombre de «ciudad perdida» hace pensar en mucha gente viviendo allí de forma " +
          "permanente. Lo que hubo fue una residencia de temporada para una corte que vivía en " +
          "otro sitio.",
      },
      {
        b: "rotulo",
        texto:
          "Ninguna de las teorías ha ganado del todo",
      },
      {
        b: "parrafo",
        texto:
          "Ahora bien, conviene decir hasta dónde llega el acuerdo, porque no llega tan lejos " +
          "como sugieren los folletos.",
      },
      {
        b: "parrafo",
        texto:
          "Junto a la finca real circulan otras lecturas serias. Que fuera un santuario de " +
          "peregrinación construido para representar el relato inca de la creación. Que se " +
          "levantara donde se levantó para alinearse con montañas sagradas y con acontecimientos " +
          "astronómicos. Y hubo teorías que ya se han caído, como la del convento de " +
          "sacerdotisas, descartada cuando el análisis de los esqueletos encontrados mostró que " +
          "había tantos hombres como mujeres.",
      },
      {
        b: "parrafo",
        texto:
          "Lo más probable es que varias de esas funciones convivieran, y ahí hay una idea que " +
          "cuesta ver desde fuera de aquella cultura: para los incas, la separación entre lo " +
          "residencial y lo sagrado no existía como la entendemos nosotros. Donde vivía el " +
          "emperador era sagrado, porque él lo era.",
      },
      {
        b: "rayo",
        texto:
          "Preguntar si Machu Picchu era una residencia o un santuario es aplicarle una " +
          "distinción que quienes lo construyeron no tenían.",
      },
    ],
  },
  {
    id: "la-leche-cortada-es-queso-a-medio-empezar",
    titulo: "Por qué se corta la leche",
    categoria: "Cocina",
    color: "var(--sage)",
    /* Serie «por-que-se-corta-la-leche», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La leche cortada es queso a medio empezar» */
    encargo: "Una jarra de cristal llena de leche sobre una tabla de madera, con luz suave de ventana.",
    fotos: [
      {
        local: p_la_leche_cortada_es_queso_a_medio_empezar,
        autor:
          "Fotografía de Ly, en Pexels.",
        licencia: "Pexels License",
        fuente:
          "https://www.pexels.com/photo/8183877/",
        alt:
          "Una jarra de cristal llena de leche sobre una tabla de madera, con luz suave de " +
          "ventana.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Llevamos 7.500 años cortándola a propósito",
      },
      {
        b: "parrafo",
        texto:
          "En la región de Kuyavia, al norte de Polonia, aparecieron hace décadas unas vasijas de " +
          "barro llenas de agujeros diminutos. Los arqueólogos sospechaban desde 1984 que eran " +
          "coladores de queso, pero era una sospecha basada solo en la forma: aquello se parecía " +
          "mucho a un utensilio de quesería, y punto. Una vasija agujereada puede haber servido " +
          "para otras diez cosas, así que la hipótesis se quedó ahí durante casi treinta años, " +
          "esperando una prueba que nadie sabía cómo conseguir. La prueba llegó en 2013, cuando " +
          "un equipo de la Universidad de Bristol analizó los restos de grasa que habían quedado " +
          "atrapados en los poros de la cerámica. Los lípidos delataron leche, y no leche " +
          "cualquiera: el perfil correspondía a la separación de una cuajada rica en grasa del " +
          "suero líquido que la rodea. Aquellos agujeros habían servido exactamente para lo que " +
          "parecía. Es la prueba directa más antigua que existe de que alguien estaba haciendo " +
          "queso, y tiene unos 7.500 años.",
      },
      {
        b: "parrafo",
        texto:
          "Ahí está el detalle que cambia la manera de mirar un cartón olvidado en la nevera. " +
          "Hacer queso <strong>es</strong> cortar la leche. No es que se parezca, ni que sea un " +
          "primo lejano del proceso: es el mismo fenómeno, la misma proteína separándose del " +
          "mismo líquido, con la única diferencia de que en la quesería ocurre cuando se quiere, " +
          "con las bacterias elegidas y parándolo en el punto exacto. Lo que en tu nevera es un " +
          "accidente desagradable fue durante milenios la principal tecnología de conservación de " +
          "alimentos de media Europa.",
      },
      {
        b: "rayo",
        texto:
          "La leche cortada no es leche rota. Es queso a medio empezar, sin nadie que decidiera " +
          "cuándo parar.",
      },
      {
        b: "rotulo",
        texto:
          "Todo depende de unos pelos de siete nanómetros",
      },
      {
        b: "parrafo",
        texto:
          "¿Y qué significa exactamente que la leche «se corte»? Es simple: es la proteína " +
          "dejando de flotar. La leche no es una disolución transparente, sino una suspensión, y " +
          "su aspecto blanco y opaco viene precisamente de que lleva partículas sólidas en el " +
          "líquido. Buena parte de esas partículas son las <strong>micelas de caseína</strong>, " +
          "unos grumos microscópicos de proteína que en condiciones normales se mantienen " +
          "separados unos de otros y repartidos por todo el vaso. Que sigan repartidos, y no " +
          "apelmazados en el fondo, no es casualidad: hay un mecanismo trabajando para que así " +
          "sea.",
      },
      {
        b: "parrafo",
        texto:
          "Cada micela va recubierta por una capa de cadenas de kappa-caseína que sobresalen " +
          "hacia fuera como pelos, con unos siete nanómetros de largo. Esa pelusa hace dos " +
          "trabajos a la vez, y los dos importan. El primero es puramente físico: los pelos " +
          "estorban, así que dos micelas no llegan nunca a tocarse aunque el azar las acerque. El " +
          "segundo es eléctrico: las cadenas llevan carga negativa, y como todas la llevan del " +
          "mismo signo, las partículas se repelen entre sí igual que dos imanes enfrentados por " +
          "el mismo polo. Mientras la leche se mantiene en su pH habitual, alrededor de 6,6, el " +
          "sistema aguanta sin problemas y todo permanece en suspensión.",
      },
      {
        b: "parrafo",
        texto:
          "Entonces entran en juego las bacterias lácticas, que llegan con la propia leche o del " +
          "aire, y que se dedican a comerse la lactosa. Al digerirla sueltan ácido láctico, y ese " +
          "ácido va acidificando el líquido poco a poco. El pH empieza a bajar desde 6,6 y, a " +
          "medida que baja, va neutralizando la carga negativa de los pelos. Al llegar a " +
          "<strong>4,6</strong>, la neutralización es completa. Las micelas dejan de repelerse, " +
          "chocan entre sí, se pegan unas a otras y acaban formando grumos lo bastante grandes " +
          "como para verse y para irse al fondo. Eso es la leche cortada.",
      },
      {
        b: "parrafo",
        texto:
          "Ese 4,6 no es un número aproximado ni una peculiaridad de la leche vieja: es el punto " +
          "isoeléctrico de la caseína, el pH exacto al que esa proteína tiene carga neta cero y " +
          "es menos soluble que a ningún otro. Es una constante de la molécula, la misma en tu " +
          "nevera que en una quesería de los Alpes o en un laboratorio. Por eso la leche no se " +
          "corta por el tiempo que pasa, sino por el número que alcanza.",
      },
      {
        b: "rayo",
        texto:
          "La leche no se corta porque caduque. Se corta al cruzar un pH exacto, y ese pH es 4,6.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? El yogur es este mismo proceso detenido antes de tiempo. Se enfría el " +
          "cultivo en torno a un pH de 4,5, con la cuajada todavía fina y repartida por todo el " +
          "bote, en vez de dejar que siga acidificando hasta separarse del suero. Un yogur al que " +
          "se le escapa el punto acaba con un charco amarillento encima: ese líquido es suero, y " +
          "significa que la separación había empezado.",
      },
    ],
  },
  {
    id: "el-pan-duro-no-se-ha-secado",
    titulo: "Por qué se pone duro el pan",
    categoria: "Cocina",
    color: "var(--slate)",
    /* Serie «por-que-se-pone-duro-el-pan», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El pan duro no se ha secado» */
    encargo: "El pan duro no se ha secado",
    fotos: [
      {
        local: p_el_pan_duro_no_se_ha_secado,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El pan duro no se ha secado",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La prueba está en que se puede resucitar con calor",
      },
      {
        b: "parrafo",
        texto:
          "Todo el mundo explica el pan duro de la misma manera: se ha secado, ha perdido el " +
          "agua, se ha quedado sin humedad. Es la respuesta inmediata y encaja perfectamente con " +
          "la sensación al morderlo, que es de sequedad y de textura correosa.",
      },
      {
        b: "parrafo",
        texto:
          "Y hay una manera muy simple de comprobar que no es eso. Coge una barra de ayer, dura " +
          "como una piedra, y métela unos minutos en el horno. Sale blanda otra vez, con la miga " +
          "tierna y la corteza crujiente, casi como recién hecha. El efecto no dura mucho y a las " +
          "pocas horas vuelve a endurecerse, pero mientras dura es real.",
      },
      {
        b: "parrafo",
        texto:
          "Ahora piensa en lo que acabas de hacer. Has metido en un horno un producto " +
          "supuestamente reseco, has aplicado calor —que es exactamente lo que se usa para " +
          "deshidratar cosas— y ha salido más blando. Si el problema hubiera sido la falta de " +
          "agua, el horno tendría que haberlo empeorado. Nada de lo que has secado alguna vez se " +
          "rehidrata metiéndolo en el horno.",
      },
      {
        b: "parrafo",
        texto:
          "Así que la explicación de la sequedad no se sostiene. El pan de ayer conserva buena " +
          "parte del agua que tenía; lo que ha cambiado es dónde está y cómo está colocada.",
      },
      {
        b: "rayo",
        texto:
          "Metes en el horno algo supuestamente reseco y sale más blando. Si fuera falta de agua, " +
          "el horno tendría que empeorarlo.",
      },
      {
        b: "rotulo",
        texto:
          "Lo que pasa se llama retrogradación, y es un problema de orden",
      },
      {
        b: "parrafo",
        texto:
          "Lo que endurece el pan es un fenómeno del almidón, que es el componente mayoritario de " +
          "la harina. Y para entenderlo hay que ver qué le hizo el horneado la primera vez.",
      },
      {
        b: "parrafo",
        texto:
          "El almidón crudo está formado por gránulos con sus moléculas empaquetadas de forma " +
          "ordenada, casi cristalina. Al hornear, con calor y agua, esos gránulos se hinchan y " +
          "esa estructura ordenada se deshace: las moléculas se desordenan, se separan y retienen " +
          "agua entre ellas. Eso es lo que da la textura blanda y esponjosa de un pan recién " +
          "hecho. La miga tierna es almidón desordenado y lleno de agua.",
      },
      {
        b: "parrafo",
        texto:
          "El problema es que ese desorden es un estado inestable. En cuanto el pan se enfría, " +
          "las moléculas empiezan poco a poco a recolocarse en su disposición ordenada de " +
          "siempre, y al hacerlo expulsan el agua que tenían entre ellas. Esa agua no se va del " +
          "pan: migra fuera de los gránulos y se reparte por otros huecos de la miga, e incluso " +
          "hacia la corteza, que por eso pierde el crujiente y se ablanda al mismo tiempo que la " +
          "miga se endurece. Los técnicos lo llaman <strong>retrogradación</strong> del almidón.",
      },
      {
        b: "parrafo",
        texto:
          "Y ahí encaja lo del horno. Al calentar, le devuelves energía al sistema y las " +
          "moléculas vuelven a desordenarse parcialmente, recuperando la textura. No has añadido " +
          "agua: has vuelto a desordenar lo que se había ordenado. Por eso funciona, y por eso el " +
          "efecto es temporal, porque en cuanto se enfría empieza a recolocarse otra vez.",
      },
      {
        b: "parrafo",
        texto:
          "Dicho en corto: el pan duro no es pan seco. Es pan al que se le ha ordenado el " +
          "almidón.",
      },
      {
        b: "rayo",
        texto:
          "La miga blanda es almidón desordenado reteniendo agua. Al enfriarse se recoloca y " +
          "suelta esa agua. Eso, y no la sequedad, es el pan duro.",
      },
    ],
  },
  {
    id: "no-es-falta-de-riego",
    titulo: "Por qué se te duerme una pierna",
    categoria: "Cuerpo humano",
    color: "var(--ochre)",
    /* Serie «por-que-se-te-duerme-una-pierna», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «No es que no te llegue la sangre a la pierna» */
    encargo: "No es que no te llegue la sangre a la pierna",
    fotos: [
      {
        local: p_no_es_falta_de_riego,
        autor: "",
        licencia: "Pexels License",
        alt:
          "No es que no te llegue la sangre a la pierna",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La explicación popular confunde el cable con el motor",
      },
      {
        b: "parrafo",
        texto:
          "Llevas veinte minutos sentado con las piernas cruzadas, te levantas y la pierna no " +
          "responde. Está ahí, la ves, pero no la sientes y no te obedece bien. La explicación " +
          "que da todo el mundo es siempre la misma: se ha cortado la circulación, la sangre no " +
          "llegaba y por eso la pierna «se ha dormido». Suena bien y tiene una parte de verdad, " +
          "pero se equivoca en lo esencial, porque señala al órgano equivocado.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que se ha quedado sin funcionar no es el músculo: es el nervio. Un nervio es un " +
          "cable, y su trabajo consiste en llevar señales eléctricas en las dos direcciones, del " +
          "cerebro a la pierna y de la pierna al cerebro. Cuando pasas mucho rato apoyando el " +
          "peso sobre un punto por el que discurre un nervio grande, lo estás aplastando contra " +
          "un hueso, y un nervio comprimido deja de transmitir. Deja de mandar hacia arriba la " +
          "información del tacto, la presión y la posición, y deja de bajar bien las órdenes de " +
          "movimiento.",
      },
      {
        b: "parrafo",
        texto:
          "La sensación de ausencia, ese vacío raro que no es dolor ni frío ni nada, es " +
          "exactamente eso: la falta de información. El cerebro no está recibiendo el flujo " +
          "constante de datos que le llega de una pierna normal, y esa ausencia se siente como " +
          "una especie de hueco. La pierna sigue perfectamente viva; lo que ha caído es la línea.",
      },
      {
        b: "rayo",
        texto:
          "La que se duerme no es la pierna: es el cable que la conecta con tu cerebro.",
      },
      {
        b: "rotulo",
        texto:
          "La sangre sí interviene, pero no como te la contaron",
      },
      {
        b: "parrafo",
        texto:
          "Ahora la parte honesta, porque la explicación popular no es del todo un disparate. " +
          "Cuando aplastas un nervio, también aplastas los pequeños vasos que lo alimentan a él, " +
          "y un nervio privado de oxígeno y glucosa también deja de conducir. O sea que en la " +
          "práctica intervienen las dos cosas a la vez: la deformación mecánica del nervio y la " +
          "falta de riego de ese mismo nervio.",
      },
      {
        b: "parrafo",
        texto:
          "Pero fíjate en la diferencia, porque cambia por completo la imagen mental del asunto. " +
          "La versión popular imagina una pierna entera desabastecida de sangre, con la carne " +
          "quedándose sin oxígeno; y eso, además de ser mucho más grave, tardaría muchísimo más " +
          "en producirse y no se arreglaría en treinta segundos como se arregla esto. Lo que " +
          "ocurre es algo mucho más localizado: un punto concreto de un cable concreto, del " +
          "grosor de un lápiz, que está siendo pinzado contra un hueso.",
      },
      {
        b: "parrafo",
        texto:
          "De hecho, la prueba está en la velocidad de la recuperación. Cambias de postura y en " +
          "menos de un minuto la pierna vuelve entera. Si el problema fuera un tejido muscular " +
          "privado de riego durante veinte minutos, no se resolvería con levantarse. Un nervio " +
          "que deja de estar pinzado, en cambio, recupera la conducción casi inmediatamente, " +
          "porque no ha habido daño: solo interrupción.",
      },
      {
        b: "rayo",
        texto:
          "Se arregla en medio minuto, y eso ya te dice que no era la carne. Era una " +
          "interrupción, no una avería.",
      },
    ],
  },
  {
    id: "tienen-una-forma-que-se-puede-medir",
    titulo: "Por qué se te queda una canción pegada",
    categoria: "Cuerpo humano",
    color: "var(--sage)",
    /* Serie «por-que-se-te-queda-una-cancion-pegada», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Las canciones que se pegan tienen una forma que se puede medir» */
    encargo: "Las canciones que se pegan tienen una forma que se puede medir",
    fotos: [
      {
        local: p_tienen_una_forma_que_se_puede_medir,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Las canciones que se pegan tienen una forma que se puede medir",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "No es cuestión de que te guste",
      },
      {
        b: "parrafo",
        texto:
          "El fenómeno tiene nombre técnico: <strong>imaginería musical involuntaria</strong>. Un " +
          "fragmento de música que aparece en tu cabeza sin que lo hayas llamado y se repite en " +
          "bucle durante horas o días.",
      },
      {
        b: "parrafo",
        texto:
          "Lo primero que llama la atención es que no guarda ninguna relación con el gusto. A " +
          "casi todo el mundo se le queda pegada alguna canción que detesta, y en cambio sus " +
          "discos favoritos no se le meten nunca en la cabeza de esa manera. Eso ya sugiere que " +
          "lo que decide no es la emoción ni la preferencia, sino algo de la propia música.",
      },
      {
        b: "parrafo",
        texto:
          "Un equipo dirigido por Kelly Jakubowski lo investigó de una forma bastante ingeniosa. " +
          "Preguntaron a <strong>3.000 personas</strong> cuáles eran las canciones que se les " +
          "quedaban pegadas con más frecuencia, reunieron esa lista, y después compararon sus " +
          "melodías con las de otras canciones de popularidad y época equivalentes que " +
          "<strong>no</strong> aparecían en las respuestas. Si el fenómeno dependiera solo de " +
          "haberlas oído mucho, los dos grupos deberían parecerse; si había algo distinto en la " +
          "música, ahí saldría.",
      },
      {
        b: "parrafo",
        texto:
          "Salió. Las canciones que se pegan comparten unos rasgos melódicos concretos y " +
          "medibles.",
      },
      {
        b: "rayo",
        texto:
          "La canción que se te pega no tiene por qué gustarte, y tus discos favoritos no suelen " +
          "pegarse. Lo que decide no es el gusto: es la forma de la melodía.",
      },
      {
        b: "rotulo",
        texto:
          "Familiar en el conjunto, rara en un detalle",
      },
      {
        b: "parrafo",
        texto:
          "¿Y cuáles son esos rasgos? Es simple: son tres, y funcionan combinados.",
      },
      {
        b: "parrafo",
        texto:
          "El primero es el <strong>tempo</strong>. Las melodías que se pegan van más rápido que " +
          "la media. Tiene sentido si piensas que lo que hace tu cabeza es repetirlas: cuanto más " +
          "corto es el ciclo, más veces cabe.",
      },
      {
        b: "parrafo",
        texto:
          "El segundo es el <strong>contorno melódico</strong>, que es la forma del dibujo que " +
          "traza la melodía al subir y bajar. Y aquí lo sorprendente es que las canciones " +
          "pegadizas tienen un contorno <strong>genérico</strong>, de los más comunes que " +
          "existen: una primera frase que sube de tono y una segunda que baja. Es el patrón de un " +
          "montón de canciones infantiles y populares, el que tu cerebro conoce de memoria y " +
          "puede reproducir sin ningún esfuerzo.",
      },
      {
        b: "parrafo",
        texto:
          "Y el tercero es el que da la vuelta al asunto: dentro de esa estructura tan corriente " +
          "hay <strong>algo raro</strong>. Un intervalo inesperado, un salto que no encaja con lo " +
          "que la forma te hacía prever, o más notas repetidas de las que suele tener una canción " +
          "pop.",
      },
      {
        b: "parrafo",
        texto:
          "Ahí está la combinación, y merece la pena verla junta porque es contraintuitiva. Lo " +
          "que se pega no es lo original ni lo sencillo, sino la mezcla: una estructura tan " +
          "familiar que tu cabeza la puede recorrer sola, con un detalle lo bastante extraño como " +
          "para llamar la atención cada vez que pasa por él. Fácil de repetir y difícil de " +
          "ignorar al mismo tiempo.",
      },
      {
        b: "parrafo",
        texto:
          "Jakubowski señalaba que, con esos rasgos en la mano, se puede predecir hasta cierto " +
          "punto qué canciones van a quedarse pegadas a partir de su contenido melódico. Las " +
          "cinco primeras de su lista fueron <em>Bad Romance</em> de Lady Gaga, <em>Can't Get You " +
          "Out Of My Head</em> de Kylie Minogue, <em>Don't Stop Believing</em> de Journey, " +
          "<em>Somebody That I Used To Know</em> de Gotye y <em>Moves Like Jagger</em> de Maroon " +
          "5.",
      },
      {
        b: "rayo",
        texto:
          "Se pegan las melodías con forma corriente y un detalle extraño dentro. Tan familiares " +
          "que tu cabeza las recorre sola, y lo bastante raras como para no poder ignorarlas.",
      },
    ],
  },
  {
    id: "tu-sangre-nunca-es-azul",
    titulo: "Por qué se ven azules las venas",
    categoria: "Cuerpo humano",
    color: "var(--clay)",
    /* Serie «por-que-se-ven-azules-las-venas», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Tu sangre no es azul ni lo ha sido nunca» */
    encargo: "Tu sangre no es azul ni lo ha sido nunca",
    fotos: [
      {
        local: p_tu_sangre_nunca_es_azul,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Tu sangre no es azul ni lo ha sido nunca",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El dibujo del colegio hizo mucho daño",
      },
      {
        b: "parrafo",
        texto:
          "La idea la aprendimos todos con el mismo dibujo: un cuerpo con dos redes de tuberías, " +
          "las arterias en rojo llevando sangre oxigenada y las venas en azul devolviéndola sin " +
          "oxígeno. Era un código de colores para no confundirse, y una generación entera lo " +
          "entendió como una descripción literal. De ahí sale la creencia de que la sangre sin " +
          "oxígeno es azul y de que se vuelve roja al contacto con el aire.",
      },
      {
        b: "parrafo",
        texto:
          "No hay nada de eso. La sangre venosa que sale por la aguja de una extracción es de un " +
          "rojo oscuro, tirando a granate o a púrpura, y quien haya donado sangre lo ha visto. Es " +
          "más oscura y menos brillante que la arterial, sí, pero es inequívocamente roja. Y no " +
          "cambia de color al salir: ya era así dentro.",
      },
      {
        b: "parrafo",
        texto:
          "La razón está en la propia hemoglobina, que en cualquiera de sus dos estados absorbe " +
          "muchísimo más en la parte azul del espectro que en la roja, entre diez y cien veces " +
          "más según la longitud de onda. Una sustancia que se traga el azul y devuelve el rojo " +
          "se ve roja. No hay ninguna configuración en la que la hemoglobina se vuelva azul.",
      },
      {
        b: "rayo",
        texto:
          "La hemoglobina absorbe entre diez y cien veces más azul que rojo. Con o sin oxígeno, " +
          "lo que devuelve es rojo.",
      },
      {
        b: "rotulo",
        texto:
          "Entonces, ¿por qué se ven azules las venas?",
      },
      {
        b: "parrafo",
        texto:
          "Aquí es donde el asunto se pone bonito, porque la respuesta no está en la sangre sino " +
          "en la piel que tienes por encima. Lo resolvió un trabajo publicado en 1996 con el " +
          "título exacto de esta pregunta, y la explicación es puramente óptica.",
      },
      {
        b: "parrafo",
        texto:
          "Cuando la luz cae sobre tu brazo, no rebota sin más: entra en la piel y se dispersa " +
          "dentro de ella, y hasta dónde llega depende del color. La luz roja, de onda larga, " +
          "penetra bastante y puede alcanzar zonas profundas antes de volver a salir. La azul, de " +
          "onda corta, se dispersa mucho más en las capas superficiales y sale de nuevo sin haber " +
          "llegado muy lejos.",
      },
      {
        b: "parrafo",
        texto:
          "Ahora compara dos trozos de piel. En uno no hay nada debajo salvo tejido: la luz roja " +
          "entra, rebota en la profundidad y vuelve hacia tu ojo, así que ese trozo se ve rosado " +
          "o rojizo, del color habitual de la piel. En el otro hay una vena, y la vena está llena " +
          "de sangre, que es exactamente lo que <strong>absorbe el rojo</strong>. La luz roja que " +
          "llega hasta allí se queda dentro y no vuelve. Lo que sí vuelve de ese punto es sobre " +
          "todo la luz azul dispersada en las capas de encima, que nunca llegó a bajar tanto.",
      },
      {
        b: "parrafo",
        texto:
          "Así que el resultado no es que la vena sea azul: es que en ese punto falta el rojo que " +
          "sí vuelve de todo lo demás. Es un efecto de <strong>contraste</strong>, y depende de " +
          "la profundidad. Un vaso muy superficial se ve rojizo, porque la luz roja no ha tenido " +
          "que recorrer casi nada. Uno a la profundidad adecuada se ve azulado. Y uno muy " +
          "profundo no se ve.",
      },
      {
        b: "parrafo",
        texto:
          "Eso explica de paso por qué las venas se marcan más en unas personas que en otras y en " +
          "unas zonas que en otras: no depende de la sangre, que es igual en todos, sino del " +
          "grosor y del tono de la piel que hay encima.",
      },
      {
        b: "rayo",
        texto:
          "La vena no se ve azul: se ve <strong>sin rojo</strong>. Ese punto se traga el rojo que " +
          "sí devuelve el resto de la piel.",
      },
    ],
  },
  {
    id: "por-que-son-caros-los-diamantes",
    titulo: "Por qué son caros los diamantes",
    categoria: "Ciencia",
    color: "var(--plum)",
    /* Serie «por-que-son-caros-los-diamantes», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Se forman a ciento cincuenta kilómetros de profundidad y suben en un ascensor volcánico» */
    encargo: "Se forman a ciento cincuenta kilómetros de profundidad y suben en un ascensor volcánico",
    fotos: [
      {
        local: p_por_que_son_caros_los_diamantes,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Se forman a ciento cincuenta kilómetros de profundidad y suben en un ascensor " +
          "volcánico",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "No se forman en la corteza, y por eso no se pueden buscar",
      },
      {
        b: "parrafo",
        texto:
          "Un diamante es carbono, el mismo elemento del grafito de un lápiz y del hollín de una " +
          "chimenea. La diferencia está solo en cómo están colocados los átomos, y esa colocación " +
          "exige unas condiciones que en la superficie no se dan.",
      },
      {
        b: "parrafo",
        texto:
          "Los diamantes naturales se forman típicamente <strong>entre ciento cincuenta y " +
          "doscientos kilómetros bajo la superficie</strong>, en el manto terrestre. Algunos, los " +
          "llamados superprofundos, se forman todavía más abajo: en la zona de transición, entre " +
          "cuatrocientos diez y seiscientos sesenta kilómetros, y algunos por debajo de eso.",
      },
      {
        b: "parrafo",
        texto:
          "Ahí abajo pueden quedarse durante millones o miles de millones de años. La mayoría de " +
          "los diamantes que existen son considerablemente más antiguos que casi cualquier roca " +
          "de la superficie.",
      },
      {
        b: "rayo",
        texto:
          "Un diamante no se forma donde se encuentra. Se forma a una profundidad a la que " +
          "ninguna perforación humana ha llegado ni de lejos.",
      },
      {
        b: "rotulo",
        texto:
          "El único transporte posible es una erupción muy rara y muy rápida",
      },
      {
        b: "parrafo",
        texto:
          "Entonces, si se hacen tan abajo, ¿cómo llegan a la mano de alguien? Es simple: " +
          "<strong>los sube un tipo concreto de volcán</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Se llaman <strong>kimberlitas</strong>, y son erupciones poco frecuentes que salen " +
          "desde muchísima más profundidad que un volcán normal y que ascienden a gran velocidad, " +
          "arrastrando trozos del manto por el camino. Los diamantes son polizones en esa subida: " +
          "no se formaron por la erupción, simplemente estaban ahí y fueron arrancados.",
      },
      {
        b: "parrafo",
        texto:
          "La velocidad es parte esencial del asunto. A presiones bajas y con calor, el diamante " +
          "no es la forma estable del carbono: el grafito lo es. Si la subida fuera lenta, el " +
          "diamante tendría tiempo de transformarse por el camino y lo que llegaría arriba sería " +
          "grafito. Llegan porque el viaje es demasiado rápido para que les dé tiempo a cambiar.",
      },
      {
        b: "parrafo",
        texto:
          "Y ahí está la razón de que las minas de diamantes tengan esa forma tan reconocible de " +
          "embudo gigante: no se sigue una veta, se excava el conducto de un volcán apagado.",
      },
      {
        b: "rayo",
        texto:
          "Un diamante en la superficie es un objeto fuera de sitio y fuera de época, que solo " +
          "está entero porque el viaje fue demasiado deprisa para deshacerlo.",
      },
    ],
  },
  {
    id: "el-azul-no-es-un-color-es-una-estructura",
    titulo: "Por qué son tan bonitas las mariposas",
    categoria: "Ciencia",
    color: "var(--slate)",
    /* Serie «por-que-son-tan-bonitas-las-mariposas», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El azul de una mariposa no es un color: es una estructura» */
    encargo: "El azul de una mariposa no es un color: es una estructura",
    fotos: [
      {
        local: p_el_azul_no_es_un_color_es_una_estructura,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El azul de una mariposa no es un color: es una estructura",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La mariposa azul más famosa del mundo es marrón",
      },
      {
        b: "parrafo",
        texto:
          "La <em>Morpho</em> es esa mariposa tropical de un azul metálico tan intenso que parece " +
          "que le hayan dado un baño de pintura. Es la imagen que casi todo el mundo tiene en la " +
          "cabeza cuando piensa en una mariposa espectacular, y esconde una trampa: <strong>su " +
          "pigmento es marrón</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "No hay ninguna sustancia azul en esa ala. Si pudieras extraer y aislar el pigmento que " +
          "contiene, obtendrías un polvo pardo, del color del cartón mojado. El azul que ves no " +
          "está hecho de materia coloreada, sino de la forma que tiene el ala a escala diminuta.",
      },
      {
        b: "parrafo",
        texto:
          "Las alas de las mariposas están cubiertas de escamas superpuestas como tejas de un " +
          "tejado —de ahí el nombre científico del grupo, lepidópteros, que significa " +
          "literalmente «alas con escamas»— y en la <em>Morpho</em> esas escamas están recorridas " +
          "por hileras de estructuras microscópicas con forma de arbolito, de unos cien " +
          "nanómetros, con ramas de unos cuatrocientos nanómetros de largo. Cada arbolito tiene " +
          "entre seis y diez capas de esas ramas, hechas de cutícula, y entre capa y capa hay " +
          "aire.",
      },
      {
        b: "parrafo",
        texto:
          "Ahí está el mecanismo. La luz que llega se refleja un poco en cada una de esas capas " +
          "sucesivas, y las capas están separadas justo a la distancia adecuada para que las " +
          "reflexiones del azul salgan <strong>en fase</strong> y se refuercen entre sí, mientras " +
          "que las de los demás colores salen desfasadas y se anulan. Lo que llega a tu ojo es " +
          "azul no porque el ala lo contenga, sino porque el ala está construida con las medidas " +
          "exactas para que solo el azul sobreviva a esa interferencia. El pigmento marrón, por " +
          "cierto, cumple una función útil: absorbe la luz que consigue colarse hasta el fondo y " +
          "evita que estropee el efecto.",
      },
      {
        b: "rayo",
        texto:
          "Si extraes el pigmento del ala de una <em>Morpho</em>, obtienes polvo marrón. El azul " +
          "no está en el material: está en cómo está construido.",
      },
      {
        b: "rotulo",
        texto:
          "Se demuestra con una gota de alcohol",
      },
      {
        b: "parrafo",
        texto:
          "¿Y cómo se comprueba que un color viene de la estructura y no de un pigmento? Es " +
          "simple: cambias la estructura sin tocar el material y miras qué pasa.",
      },
      {
        b: "parrafo",
        texto:
          "La manera más elegante de hacerlo es poner una gota de alcohol sobre el ala. En cuanto " +
          "el líquido entra en esos huecos microscópicos y <strong>desplaza el aire</strong> que " +
          "había entre las capas, el azul se desplaza al verde. Nada más se ha modificado: el " +
          "mismo pigmento marrón, las mismas escamas, los mismos arbolitos de cutícula. Lo único " +
          "que ha cambiado es qué hay en los espacios entre las láminas, y eso cambia a qué " +
          "distancia efectiva quedan unas de otras y, por tanto, qué longitud de onda se " +
          "refuerza.",
      },
      {
        b: "parrafo",
        texto:
          "Piensa en lo que eso descarta. Ningún pigmento del mundo se vuelve verde porque lo " +
          "mojes con alcohol; un pigmento es una molécula que absorbe unas frecuencias concretas " +
          "y hace lo mismo esté seco, mojado o en el fondo de un frasco. Que el color se mueva al " +
          "cambiar el medio solo tiene una explicación posible, y es que el color lo estaba " +
          "produciendo la geometría.",
      },
      {
        b: "parrafo",
        texto:
          "De ahí se sigue una consecuencia que llama la atención. Los pigmentos se degradan: la " +
          "luz los rompe con los años y por eso los cuadros pierden intensidad, la ropa se " +
          "destiñe al sol y las flores prensadas acaban pardas. Un color estructural no tiene " +
          "nada que blanquear, porque no hay ninguna molécula coloreada que se pueda romper. " +
          "Mientras la estructura física aguante, el color sigue exactamente igual de vivo. Los " +
          "ejemplares de <em>Morpho</em> que llevan un siglo en las vitrinas de un museo " +
          "conservan el mismo azul del día que se capturaron.",
      },
      {
        b: "rayo",
        texto:
          "Una gota de alcohol vuelve verde el azul de una <em>Morpho</em>, y al secarse vuelve a " +
          "ser azul. Ningún pigmento hace eso.",
      },
    ],
  },
  {
    id: "por-que-sube-la-marea",
    titulo: "Por qué sube la marea",
    categoria: "Planeta Tierra",
    color: "var(--sage)",
    /* Serie «por-que-sube-la-marea», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Hay marea alta también en el lado de la Tierra opuesto a la Luna» */
    encargo: "Hay marea alta también en el lado de la Tierra opuesto a la Luna",
    fotos: [
      {
        local: p_por_que_sube_la_marea,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Hay marea alta también en el lado de la Tierra opuesto a la Luna",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La explicación fácil predice una marea al día, y hay dos",
      },
      {
        b: "parrafo",
        texto:
          "La versión que todo el mundo conoce es que la Luna tira del agua del mar y la levanta. " +
          "Es correcta a medias, y la mitad que falta es la interesante.",
      },
      {
        b: "parrafo",
        texto:
          "Si la Luna se limitara a tirar del agua que tiene enfrente, habría un solo " +
          "abultamiento en el planeta: el que mira hacia ella. La Tierra daría una vuelta cada " +
          "veinticuatro horas, cada punto pasaría una vez por ese abultamiento, y tendríamos " +
          "<strong>una</strong> marea alta al día.",
      },
      {
        b: "parrafo",
        texto:
          "Pero hay dos. Casi todas las costas del mundo tienen dos pleamares y dos bajamares " +
          "diarias, y eso no lo explica un solo tirón.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que hay en realidad es un <strong>doble abultamiento</strong> a lo largo del eje " +
          "que une la Tierra y la Luna, algo mayor en la cara más próxima a ella. Es decir: hay " +
          "marea alta donde está la Luna, y hay marea alta justo en el lado contrario, donde no " +
          "está.",
      },
      {
        b: "rayo",
        texto:
          "La marea no es el agua siguiendo a la Luna. Es un doble bulto fijo en el espacio, " +
          "apuntando a la Luna por un lado y dándole la espalda por el otro, mientras la Tierra " +
          "gira por debajo.",
      },
      {
        b: "rotulo",
        texto:
          "En una cara manda la gravedad y en la otra manda el giro",
      },
      {
        b: "parrafo",
        texto:
          "Entonces, ¿de dónde sale el segundo bulto? De que la Tierra y la Luna no están " +
          "quietas: giran juntas alrededor de su centro de masas común, y en ese giro hay dos " +
          "efectos que se reparten el planeta.",
      },
      {
        b: "parrafo",
        texto:
          "En la cara que mira a la Luna domina la atracción gravitatoria. Esa agua está más " +
          "cerca de la Luna que el centro de la Tierra, así que la Luna tira de ella con algo más " +
          "de fuerza y la levanta.",
      },
      {
        b: "parrafo",
        texto:
          "En la cara opuesta ocurre lo contrario: ahí es ligeramente más fuerte la fuerza " +
          "centrífuga del giro del sistema. Esa agua es la que está más lejos de la Luna, la que " +
          "menos siente su tirón, y se queda atrás. El resultado, visto desde fuera, es también " +
          "un abultamiento.",
      },
      {
        b: "parrafo",
        texto:
          "Ahora súmale la rotación y tienes el fenómeno entero. La Tierra gira sobre sí misma y " +
          "cada punto de su superficie atraviesa los dos bultos en cada vuelta. De ahí salen las " +
          "dos pleamares diarias, y no hace falta nada más.",
      },
      {
        b: "parrafo",
        texto:
          "Y ese giro deja una huella que cualquiera puede comprobar mirando una tabla de mareas. " +
          "El intervalo entre dos mareas del mismo tipo no es de doce horas exactas, sino de " +
          "<strong>12,4206 horas</strong>: unos veinticinco minutos de más. La razón es que, " +
          "mientras la Tierra da su vuelta, la Luna también ha avanzado un poco en su órbita, y " +
          "hay que girar un poquito más para volver a apuntarla. Por eso la marea se retrasa un " +
          "rato cada día.",
      },
      {
        b: "rayo",
        texto:
          "Las dos mareas diarias no vienen de que la Luna pase dos veces. Vienen de que hay dos " +
          "bultos y la Tierra los cruza los dos, y el retraso de cada día es la prueba de que " +
          "quien manda ahí es la Luna y no el reloj.",
      },
    ],
  },
  {
    id: "todas-las-explicaciones-que-te-han-dado-fallan",
    titulo: "Por qué te da flato al correr",
    categoria: "Cuerpo humano",
    color: "var(--ochre)",
    /* Serie «por-que-te-da-flato-al-correr», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Todas las explicaciones que te han dado sobre el flato fallan» */
    encargo: "Todas las explicaciones que te han dado sobre el flato fallan",
    fotos: [
      {
        local: p_todas_las_explicaciones_que_te_han_dado_fallan,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Todas las explicaciones que te han dado sobre el flato fallan",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Es tan común que casi nadie se ha librado",
      },
      {
        b: "parrafo",
        texto:
          "El flato tiene nombre técnico, y es tan poco memorable como cabía esperar: " +
          "<strong>dolor abdominal transitorio relacionado con el ejercicio</strong>. Ese " +
          "pinchazo bajo las costillas que aparece a mitad de carrera, te obliga a aflojar y " +
          "desaparece solo al cabo de un rato.",
      },
      {
        b: "parrafo",
        texto:
          "Lo primero que llama la atención al mirar los datos es lo extendidísimo que está. En " +
          "una encuesta a 439 corredores, un <strong>69 %</strong> había tenido flato en el " +
          "último año. Y en una carrera concreta, alrededor de uno de cada cinco participantes se " +
          "lo lleva ese día.",
      },
      {
        b: "parrafo",
        texto:
          "Pero el dato que de verdad importa es otro, y conviene mirarlo despacio porque es el " +
          "que va a desmontar media explicación popular. Al comparar deportes, el flato no " +
          "aparece sobre todo corriendo. Aparece sobre todo <strong>nadando</strong>:",
      },
      {
        b: "parrafo",
        texto:
          "- <strong>Natación:</strong> 75 %",
      },
      {
        b: "parrafo",
        texto:
          "- <strong>Carrera:</strong> 69 %",
      },
      {
        b: "parrafo",
        texto:
          "- <strong>Equitación:</strong> 62 %",
      },
      {
        b: "parrafo",
        texto:
          "- <strong>Gimnasia aeróbica:</strong> 52 %",
      },
      {
        b: "parrafo",
        texto:
          "- <strong>Baloncesto:</strong> 47 %",
      },
      {
        b: "parrafo",
        texto:
          "- <strong>Ciclismo:</strong> 32 %",
      },
      {
        b: "parrafo",
        texto:
          "La natación encabeza la lista y el ciclismo la cierra, con menos de la mitad de " +
          "incidencia. Cualquier explicación del flato tiene que dar cuenta de ese orden, y ahí " +
          "es donde empiezan a caerse las que todos hemos oído.",
      },
      {
        b: "rayo",
        texto:
          "El deporte donde más flato aparece no es correr: es nadar, con un 75 %. Y donde menos, " +
          "el ciclismo, con un 32 %.",
      },
      {
        b: "rotulo",
        texto:
          "Las tres explicaciones clásicas están descartadas",
      },
      {
        b: "parrafo",
        texto:
          "¿Y qué pasa con las razones de siempre? Es simple: se han puesto a prueba una por una " +
          "y ninguna aguanta.",
      },
      {
        b: "parrafo",
        texto:
          "La más repetida, la que dice todo el mundo, es que <strong>al diafragma le falta " +
          "riego</strong>: que el músculo con el que respiras se queda sin sangre suficiente " +
          "porque el cuerpo la está mandando a las piernas, y protesta. Suena convincente y es " +
          "falsa. El flato aparece también en actividades con muy poca exigencia respiratoria " +
          "—montar a caballo, montar en camello, ir en moto—, donde el diafragma no está " +
          "trabajando al límite ni de lejos. Y cuando se ha medido la función pulmonar durante un " +
          "episodio de dolor, no se ha encontrado ningún deterioro en las mediciones.",
      },
      {
        b: "parrafo",
        texto:
          "La segunda explicación habitual es que se trata de un <strong>calambre de la " +
          "musculatura abdominal</strong>, como el que te da en un gemelo. También se comprobó, " +
          "midiendo con electromiografía la actividad eléctrica de los músculos justo en el punto " +
          "donde duele durante un episodio. Si fuera un calambre, esa actividad estaría " +
          "disparada. No lo estaba: la actividad muscular en el sitio del dolor era normal.",
      },
      {
        b: "parrafo",
        texto:
          "La tercera es la más elaborada y la que más lejos ha llegado: que el <strong>traqueteo " +
          "tira de los ligamentos</strong> que sujetan las vísceras. Al correr, los órganos " +
          "internos suben y bajan a cada zancada colgando de sus anclajes, y esos tirones " +
          "repetidos irritarían las estructuras que los sostienen. Explica bien algunas cosas, " +
          "pero falla en otras. No da cuenta del flato que aparece en la parte baja del abdomen, " +
          "y además el dolor no guarda relación con el índice de masa corporal, cuando cabría " +
          "esperar que unas vísceras más pesadas tirasen más.",
      },
      {
        b: "parrafo",
        texto:
          "Y sobre todo tropieza con el dato del principio. Si el mecanismo fuera el traqueteo, " +
          "la natación tendría que estar al fondo de la tabla junto al ciclismo, porque nadando " +
          "el cuerpo va horizontal y no hay impacto contra el suelo en ningún momento. Y la " +
          "natación está la primera.",
      },
      {
        b: "rayo",
        texto:
          "El calambre se descartó midiendo la actividad muscular donde duele, y la falta de " +
          "riego porque el flato aparece montando a caballo. La teoría del traqueteo choca con la " +
          "natación.",
      },
    ],
  },
  {
    id: "el-conductor-no-se-marea-nunca",
    titulo: "Por qué te mareas en el coche",
    categoria: "Cuerpo humano",
    color: "var(--teal)",
    /* Serie «por-que-te-mareas-en-el-coche», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El conductor no se marea nunca, y eso lo explica todo» */
    encargo: "Un coche blanco antiguo detenido en una carretera recta que cruza una llanura seca, en tonos sepia.",
    fotos: [
      {
        local: p_el_conductor_no_se_marea_nunca,
        autor:
          "Fotografía de Elif, en Pexels.",
        licencia: "Pexels License",
        fuente:
          "https://www.pexels.com/photo/17729653/",
        alt:
          "Un coche blanco antiguo detenido en una carretera recta que cruza una llanura seca, en " +
          "tonos sepia.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Dos sistemas que dejan de ponerse de acuerdo",
      },
      {
        b: "parrafo",
        texto:
          "Vas de pasajero, sacas el móvil, lees dos mensajes y a los cinco minutos estás pálido, " +
          "sudando frío y pidiendo que bajen la ventanilla. El conductor, sentado a treinta " +
          "centímetros de ti, sometido exactamente al mismo movimiento, a las mismas curvas y a " +
          "los mismos frenazos, está estupendamente y te mira con una mezcla de lástima y " +
          "sospecha. Esa asimetría es la mejor pista que existe sobre lo que está ocurriendo, " +
          "porque descarta de golpe todas las explicaciones basadas en el movimiento del coche: " +
          "si el movimiento fuera la causa, os afectaría a los dos por igual.",
      },
      {
        b: "parrafo",
        texto:
          "La clave está en que tu sentido del equilibrio no vive en los ojos, como suele " +
          "suponerse, sino en el <strong>oído interno</strong>. Ahí dentro tienes tres conductos " +
          "semicirculares llenos de líquido, orientados en los tres planos del espacio, y unas " +
          "bolsas con piedrecitas microscópicas de carbonato de calcio apoyadas sobre células con " +
          "pelos sensibles. Cuando el coche acelera, frena o gira, el líquido se retrasa y las " +
          "piedrecitas se desplazan, y esos movimientos doblan los pelos y generan señales " +
          "nerviosas. Es un sistema mecánico, precioso y antiquísimo, que le va contando al " +
          "cerebro en tiempo real hacia dónde te estás moviendo y con qué intensidad.",
      },
      {
        b: "parrafo",
        texto:
          "El problema aparece cuando esa información no cuadra con lo que ven los ojos. Si estás " +
          "leyendo, tus ojos tienen delante una pantalla quieta a treinta centímetros de la cara, " +
          "que se mueve solidariamente contigo, y por tanto informan de que no te estás " +
          "desplazando en absoluto. Mientras tanto, el oído interno está notificando curvas a la " +
          "izquierda, frenazos, baches y aceleraciones. Dos sistemas que llevan toda tu vida " +
          "contando lo mismo empiezan a contradecirse frontalmente, y el cerebro no tiene manera " +
          "de decidir cuál miente. Eso es lo que se conoce como <strong>conflicto " +
          "sensorial</strong>, y es el punto de partida de todo lo demás.",
      },
      {
        b: "rayo",
        texto:
          "Tus ojos dicen que estás quieto y tu oído interno dice que estás girando. El mareo " +
          "empieza en esa contradicción.",
      },
      {
        b: "rotulo",
        texto:
          "Por eso el volante es la mejor cura",
      },
      {
        b: "parrafo",
        texto:
          "Lo bueno de esta explicación es que no solo cuenta cuándo aparece el mareo: predice " +
          "correctamente todas las maneras de quitarlo, incluidas las que la gente descubrió por " +
          "su cuenta mucho antes de que nadie hablara de conflictos sensoriales.",
      },
      {
        b: "parrafo",
        texto:
          "Explica por qué se alivia mirando al horizonte, que es el consejo clásico de las " +
          "abuelas. Al fijar la vista en un punto lejano y estable, le devuelves a los ojos la " +
          "información de movimiento que les faltaba: ahora sí ven el paisaje desplazarse, y su " +
          "informe vuelve a coincidir con el del oído interno. Explica también por qué leer lo " +
          "empeora tanto, porque es justamente la maniobra contraria: fijas la vista en algo que " +
          "viaja contigo y anulas del todo la señal visual de desplazamiento, con lo que la " +
          "contradicción se hace máxima. Y explica por qué el asiento delantero sienta mejor que " +
          "el trasero, donde el campo de visión es más pobre y el balanceo del coche es mayor.",
      },
      {
        b: "parrafo",
        texto:
          "Pero sobre todo explica por qué el conductor se libra. No es solo que vea la " +
          "carretera, que también. Es que <strong>anticipa</strong> cada giro, porque es él quien " +
          "lo va a dar: su cerebro emite la orden de mover el volante y sabe lo que va a sentir " +
          "un instante antes de sentirlo. Esa predicción llega siempre a tiempo y siempre encaja " +
          "con la sensación, así que en su cabeza nunca hay conflicto que resolver. Por eso, " +
          "cuando alguien se marea sistemáticamente de pasajero, ponerle al volante suele " +
          "funcionar mejor que cualquier pastilla. Y por eso mismo un copiloto que va mirando la " +
          "carretera y adivinando las curvas se marea mucho menos que uno que va mirando el " +
          "móvil.",
      },
      {
        b: "rayo",
        texto:
          "El conductor no se marea porque anticipa cada curva. Su cerebro sabe lo que va a pasar " +
          "antes de que su cuerpo lo sienta.",
      },
    ],
  },
  {
    id: "la-cicatriz-de-un-dano",
    titulo: "Por qué te pones moreno",
    categoria: "Cuerpo humano",
    color: "var(--sage)",
    /* Serie «por-que-te-pones-moreno», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El bronceado es la señal de un daño que ya está hecho» */
    encargo: "El bronceado es la señal de un daño que ya está hecho",
    fotos: [
      {
        local: p_la_cicatriz_de_un_dano,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El bronceado es la señal de un daño que ya está hecho",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El orden de los acontecimientos lo cambia todo",
      },
      {
        b: "parrafo",
        texto:
          "Solemos pensar en el bronceado como en una adaptación agradable: te da el sol, la piel " +
          "se pone morena y ese moreno te protege. Un mecanismo de defensa que se activa cuando " +
          "hace falta, más o menos como sudar cuando hace calor.",
      },
      {
        b: "parrafo",
        texto:
          "El orden real de los acontecimientos es otro, y conviene mirarlo despacio porque lo " +
          "cambia todo. La radiación ultravioleta llega a la piel y atraviesa las capas " +
          "superiores hasta alcanzar el núcleo de las células, donde está el ADN. Ahí produce " +
          "lesiones concretas: fragmentos de la cadena que se sueldan mal entre sí y estropean la " +
          "información. Eso ocurre <strong>antes</strong> de que empiece nada más, y ocurre desde " +
          "el primer minuto.",
      },
      {
        b: "parrafo",
        texto:
          "Es entonces cuando la célula detecta el destrozo y activa su sistema de respuesta al " +
          "daño, en el que participa la proteína p53, la misma que se ocupa de vigilar la " +
          "integridad del ADN en todo el cuerpo. Y una de las órdenes que salen de ahí es avisar " +
          "a los melanocitos, las células que fabrican pigmento, para que se pongan a producir " +
          "<strong>melanina</strong>. Esa melanina se reparte a las células vecinas, que la " +
          "colocan formando una especie de sombrilla justo encima de sus núcleos, protegiendo el " +
          "ADN de lo que venga después.",
      },
      {
        b: "parrafo",
        texto:
          "Así que el bronceado no precede al daño: lo sigue. Es la reacción, no el escudo. " +
          "Cuando te ves moreno estás viendo el resultado visible de una alarma que saltó porque " +
          "algo ya se había roto dentro.",
      },
      {
        b: "rayo",
        texto:
          "Primero se daña el ADN y después llega el color. El moreno no evitó nada: es la prueba " +
          "de que hubo algo que reparar.",
      },
      {
        b: "rotulo",
        texto:
          "Por eso tarda días en salir",
      },
      {
        b: "parrafo",
        texto:
          "Hay un detalle cotidiano que encaja con esto y que casi nadie relaciona: que el " +
          "bronceado de verdad no aparece el mismo día. Vuelves de la playa rojo o ligeramente " +
          "tostado, y el color bueno, el que dura, sale a los dos o tres días.",
      },
      {
        b: "parrafo",
        texto:
          "Ese retraso es exactamente lo que cabe esperar de una respuesta biológica y no de un " +
          "filtro. Hay que detectar el daño, activar la vía de señalización, avisar a los " +
          "melanocitos, fabricar el pigmento y repartirlo célula a célula. Eso lleva días. Un " +
          "filtro que se activara con la luz actuaría al instante; una respuesta que hay que " +
          "montar, no.",
      },
      {
        b: "parrafo",
        texto:
          "Sí existe un oscurecimiento inmediato, que es el que notas al salir del agua, pero es " +
          "otra cosa: es la melanina que ya tenías oxidándose por efecto de la radiación. Cambia " +
          "de tono en minutos, no implica pigmento nuevo, se va en horas y no aporta protección " +
          "apreciable. El moreno de verdad, el que se construye, viene después y viene con " +
          "factura.",
      },
      {
        b: "parrafo",
        texto:
          "Y hay una consecuencia lógica que merece decirse en voz alta, porque va contra el " +
          "sentido común de casi todo el mundo. Si el bronceado es la respuesta a una lesión en " +
          "el ADN, entonces <strong>no existe un bronceado sano</strong>. Puede haber uno que " +
          "duela poco y otro que duela mucho, pero para producir cualquiera de los dos ha tenido " +
          "que haber daño primero. La cantidad varía; el mecanismo no.",
      },
      {
        b: "rayo",
        texto:
          "El moreno tarda días en salir porque hay que fabricarlo. Un filtro actuaría al " +
          "instante; una reparación, no.",
      },
    ],
  },
  {
    id: "en-invierno-estamos-mas-cerca-del-sol",
    titulo: "Por qué tenemos estaciones",
    categoria: "Planeta Tierra",
    color: "var(--sage)",
    /* Serie «por-que-tenemos-estaciones», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «En invierno estamos más cerca del Sol que en verano» */
    encargo: "Una rama de hojas amarillas de otoño contra el cielo, con las copas verdes de los pinos al fondo.",
    fotos: [
      {
        local: p_en_invierno_estamos_mas_cerca_del_sol,
        autor:
          "Fotografía de Canan Cetin, en Pexels.",
        licencia: "Pexels License",
        fuente:
          "https://www.pexels.com/photo/29343620/",
        alt:
          "Una rama de hojas amarillas de otoño contra el cielo, con las copas verdes de los " +
          "pinos al fondo.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Recién licenciados por Harvard, y casi ninguno acertó",
      },
      {
        b: "parrafo",
        texto:
          "En 1987, un equipo del Harvard-Smithsonian Center for Astrophysics se plantó con una " +
          "cámara en el día de graduación de Harvard. La idea era sencilla y algo tramposa: parar " +
          "a licenciados con la toga todavía puesta, a antiguos alumnos y a algún profesor, y " +
          "hacerles una pregunta de niño de nueve años. ¿Por qué hay estaciones? La mayoría " +
          "contestó lo mismo, y lo hizo con la seguridad de quien está diciendo una obviedad: en " +
          "verano la Tierra está más cerca del Sol. Casi nadie acertó.",
      },
      {
        b: "parrafo",
        texto:
          "El documental que salió de aquello se llama <em>A Private Universe</em>, y lleva " +
          "décadas usándose para enseñar una idea incómoda a los profesores de ciencias. No " +
          "consiste en que la gente no sepa cosas, sino en algo bastante peor: se puede terminar " +
          "una de las mejores universidades del mundo arrastrando intacta la misma explicación " +
          "equivocada que uno se construyó en el colegio a los ocho años. Las ideas previas no se " +
          "borran cuando llega la información correcta; conviven con ella, y en cuanto te pillan " +
          "desprevenido y sin tiempo para pensar, salen ellas primero.",
      },
      {
        b: "parrafo",
        texto:
          "Y lo interesante es que la explicación equivocada no es absurda. Tiene una lógica " +
          "impecable: si te acercas a una hoguera pasas más calor, luego si la Tierra se acerca " +
          "al Sol debería hacer más calor. El razonamiento es correcto. Lo que falla es el dato " +
          "de partida, porque la órbita sí es ovalada, pero las fechas no son las que la " +
          "intuición supone.",
      },
      {
        b: "rotulo",
        texto:
          "Estamos más cerca en enero y más lejos en julio",
      },
      {
        b: "parrafo",
        texto:
          "La Tierra recorre una elipse, así que tiene un punto de máxima cercanía al Sol y otro " +
          "de máxima lejanía, y pasa por cada uno exactamente una vez al año. El más cercano cae " +
          "a <strong>principios de enero</strong>, a unos 147 millones de kilómetros. El más " +
          "lejano, a <strong>principios de julio</strong>, a unos 152. Léelo otra vez, porque va " +
          "justo al revés de lo que uno esperaría: en pleno invierno del hemisferio norte estamos " +
          "lo más cerca del Sol que vamos a estar en todo el año, y en pleno agosto, con cuarenta " +
          "grados en la calle, estamos lo más lejos.",
      },
      {
        b: "parrafo",
        texto:
          "Esa diferencia de unos cinco millones de kilómetros suena enorme, pero conviene " +
          "ponerla en proporción. Representa apenas un 3 % de la distancia total, y el efecto " +
          "sobre la energía que nos llega es de unos pocos puntos porcentuales. Es un cambio real " +
          "y medible, y es completamente insuficiente para fabricar la diferencia entre una playa " +
          "en agosto y un parabrisas helado en enero.",
      },
      {
        b: "rayo",
        texto:
          "Esos cinco millones de kilómetros de diferencia son apenas un 3 % de la distancia. " +
          "Demasiado poco para fabricar un verano.",
      },
      {
        b: "rotulo",
        texto:
          "El argumento que lo derriba sin un solo número",
      },
      {
        b: "parrafo",
        texto:
          "Y hay una forma de tumbar la idea que no necesita ninguna cifra, ni saber cuándo cae " +
          "el perihelio, ni recordar cuántos millones de kilómetros hay hasta el Sol. Basta con " +
          "mirar un mapa. Cuando en Madrid es agosto y hace cuarenta grados, en Buenos Aires es " +
          "invierno. Y en Sídney también, y en Ciudad del Cabo, y en Santiago de Chile. Medio " +
          "planeta está sacando los abrigos exactamente en el mismo instante en que el otro medio " +
          "se derrite.",
      },
      {
        b: "parrafo",
        texto:
          "Pero la Tierra es una sola. No tiene un hemisferio que orbite por su cuenta: en cada " +
          "momento el planeta entero está a una única distancia del Sol, la misma para Madrid que " +
          "para Sídney, con una diferencia entre ambas de unos pocos miles de kilómetros que no " +
          "significan nada frente a los ciento cincuenta millones que hay hasta el Sol. Si la " +
          "distancia fuera la responsable, todo el planeta tendría verano a la vez y todo el " +
          "planeta tendría invierno a la vez. Y no ocurre eso en absoluto: los dos hemisferios " +
          "tienen las estaciones perfectamente cambiadas, lo cual descarta la distancia como " +
          "causa sin necesidad de medir nada.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? El verano del hemisferio norte ocurre cuando la Tierra está más lejos " +
          "del Sol, y aun así es de media algo más cálido que el del hemisferio sur. La razón no " +
          "tiene que ver con la órbita sino con el reparto de tierra y agua: el norte tiene mucha " +
          "más superficie continental, y el suelo se calienta bastante más deprisa que el océano, " +
          "que se toma su tiempo para todo.",
      },
    ],
  },
  {
    id: "erizar-un-pelaje-que-ya-no-tienes",
    titulo: "Por qué tenemos piel de gallina",
    categoria: "Cuerpo humano",
    color: "var(--slate)",
    /* Serie «por-que-tenemos-piel-de-gallina», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Se te eriza un pelaje que perdiste hace millones de años» */
    encargo: "Se te eriza un pelaje que perdiste hace millones de años",
    fotos: [
      {
        local: p_erizar_un_pelaje_que_ya_no_tienes,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Se te eriza un pelaje que perdiste hace millones de años",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Darwin ya lo señaló como una reliquia",
      },
      {
        b: "parrafo",
        texto:
          "En 1872, en <em>La expresión de las emociones en el hombre y en los animales</em>, " +
          "Darwin dedicó un buen rato a un detalle que a casi nadie le parecía digno de estudio: " +
          "que a las personas se les erizara el vello. Le interesaba porque era exactamente el " +
          "tipo de rasgo que buscaba, uno que solo tiene sentido si miras a los parientes. Un " +
          "gato asustado se hincha. Un perro levanta el pelo del lomo. Un erizo entero es esa " +
          "idea llevada al extremo. Y nosotros hacemos el mismo gesto, con el mismo mecanismo, " +
          "sin nada que levantar.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que ocurre bajo la piel es de una sencillez casi mecánica. Cada folículo del que " +
          "sale un pelo tiene enganchado un músculo diminuto, el <strong>erector del " +
          "pelo</strong>, y cuando ese músculo se contrae tira de la base del folículo y lo " +
          "endereza. El pelo, que estaba tumbado, se pone de punta. Y como la base del folículo " +
          "se hunde al inclinarse el músculo, la piel de alrededor se abulta en ese punto: eso es " +
          "cada uno de los granitos que ves. La piel de gallina no es una reacción de la piel, es " +
          "el resultado visible de unos cuantos miles de músculos microscópicos tirando a la vez.",
      },
      {
        b: "parrafo",
        texto:
          "En un animal con pelaje, ese gesto hace dos cosas útiles y las hace bien. Con frío, el " +
          "pelo erguido atrapa una capa de aire entre los pelos y contra la piel, y ese aire " +
          "quieto es un aislante excelente: el animal se pone un abrigo más grueso sin cambiar de " +
          "abrigo. Y ante una amenaza, un pelaje erizado multiplica la silueta, que es la manera " +
          "más barata que existe de parecer más grande sin serlo.",
      },
      {
        b: "parrafo",
        texto:
          "En ti no hace ninguna de las dos. El vello que te queda es demasiado corto y demasiado " +
          "escaso para atrapar nada, y desde luego nadie te ha visto nunca más grande por tener " +
          "la piel de gallina. El mecanismo se conserva íntegro y el resultado es puramente " +
          "decorativo, que es la definición de manual de un rasgo vestigial.",
      },
      {
        b: "rayo",
        texto:
          "El músculo funciona perfectamente. Lo que falta es el pelaje que tendría que levantar.",
      },
      {
        b: "rotulo",
        texto:
          "Por eso te pasa con el frío y con el miedo, que no se parecen en nada",
      },
      {
        b: "parrafo",
        texto:
          "Hay un detalle de la piel de gallina que suele pasarse por alto y que encaja " +
          "perfectamente con lo anterior: la disparan cosas que no tienen nada que ver entre sí. " +
          "El frío al salir de la ducha, un susto, una escena de una película, una canción. Si " +
          "fuera un termostato, la segunda mitad de esa lista no debería estar ahí.",
      },
      {
        b: "parrafo",
        texto:
          "La explicación es que el músculo erector del pelo no obedece a la temperatura, sino al " +
          "<strong>sistema nervioso simpático</strong>, que es el que gestiona la respuesta de " +
          "alerta del organismo. Ese sistema se activa cuando hay que producir calor y también " +
          "cuando hay que prepararse para reaccionar deprisa, y en los dos casos ordena lo mismo " +
          "a lo largo de todo el cuerpo: acelerar el corazón, cerrar los vasos de la piel, " +
          "dilatar las pupilas, y de paso erizar el pelo. No son dos mecanismos distintos que " +
          "casualmente coinciden. Es un solo mecanismo con dos motivos para encenderse.",
      },
      {
        b: "parrafo",
        texto:
          "Y eso explica por qué la piel de gallina llega siempre acompañada. Casi nunca aparece " +
          "sola: viene con el escalofrío, con el corazón acelerado o con esa sensación de " +
          "recorrido por la espalda. Estás viendo la parte más visible de una respuesta que está " +
          "ocurriendo entera por debajo.",
      },
      {
        b: "rayo",
        texto:
          "El pelo no lo levanta la temperatura, lo levanta la alarma. Por eso el frío y el miedo " +
          "hacen exactamente lo mismo.",
      },
    ],
  },
  {
    id: "tiritar-desperdiciar-energia",
    titulo: "Por qué tiritamos",
    categoria: "Cuerpo humano",
    color: "var(--slate)",
    /* Serie «por-que-tiritamos», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Tiritar consiste en desperdiciar energía a propósito» */
    encargo: "Hojas cubiertas de escarcha blanca en primer plano, con la hierba helada difuminada detrás.",
    fotos: [
      {
        local: p_tiritar_desperdiciar_energia,
        autor:
          "Fotografía de Anzhela Svyrydiuk, en Pexels.",
        licencia: "Pexels License",
        fuente:
          "https://www.pexels.com/photo/29023988/",
        alt:
          "Hojas cubiertas de escarcha blanca en primer plano, con la hierba helada difuminada " +
          "detrás.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Tus músculos son máquinas malísimas, y ahí está el truco",
      },
      {
        b: "parrafo",
        texto:
          "¿Te has parado a pensar en lo absurdo que resulta tiritar? Tienes frío, que es una " +
          "situación en la que conviene ahorrar recursos, y la respuesta de tu cuerpo consiste en " +
          "ponerse a temblar sin que tú se lo pidas, quemando energía en un movimiento que no te " +
          "lleva a ninguna parte, no te tapa y ni siquiera te deja sujetar bien una taza. Visto " +
          "de fuera parece un fallo del sistema, una avería nerviosa provocada por el frío. Es " +
          "justo lo contrario: es una de las soluciones más ingeniosas que tiene tu organismo.",
      },
      {
        b: "parrafo",
        texto:
          "Para entenderlo hay que aceptar antes algo poco halagador sobre tus músculos, y es que " +
          "<strong>son máquinas malísimas.</strong> Cuando un músculo se contrae, solo una parte " +
          "de la energía química que consume acaba convertida en movimiento útil; la mayor parte " +
          "se disipa en forma de calor, sin más. Ese es el motivo por el que te acaloras subiendo " +
          "unas escaleras o por el que un gimnasio en invierno no necesita calefacción: hay un " +
          "montón de gente tirando energía por la ventana mientras intenta desplazar unas pesas. " +
          "En circunstancias normales esa ineficiencia es un incordio que hay que compensar " +
          "sudando. Cuando tienes frío, se convierte en la solución.",
      },
      {
        b: "parrafo",
        texto:
          "Porque tiritar consiste exactamente en eso: contraer músculos a toda velocidad, en " +
          "pulsos rápidos y alternos, <strong>sin ninguna intención de desplazarte</strong>, " +
          "precisamente para cobrar el calor sobrante. Es aprovechar el defecto en lugar de " +
          "sufrirlo. El movimiento no es el objetivo, sino el efecto secundario visible; lo que " +
          "de verdad se busca es el desperdicio, y por eso el temblor es rápido, corto y sin " +
          "dirección: no hace falta que vaya a ningún sitio.",
      },
      {
        b: "parrafo",
        texto:
          "La orden sale del <strong>hipotálamo posterior</strong>, la región del cerebro que " +
          "hace de termostato y que compara continuamente tu temperatura interna con el valor que " +
          "debería tener. En cuanto detecta que esa temperatura cae, pone a temblar la " +
          "musculatura empezando por la del tronco y el cuello, que es la más cercana a los " +
          "órganos que hay que proteger. Los dientes castañetean porque la mandíbula también " +
          "entra en el reparto, y las manos y los pies tiemblan al final o no tiemblan, porque " +
          "calentarlos no es prioritario.",
      },
      {
        b: "rayo",
        texto:
          "Tiritar no es un fallo. Es tu cuerpo explotando a propósito el hecho de que los " +
          "músculos desperdician la mayor parte de su energía en forma de calor.",
      },
      {
        b: "rotulo",
        texto:
          "Los recién nacidos no pueden hacer eso, y tienen otro sistema",
      },
      {
        b: "parrafo",
        texto:
          "Existe una excepción llamativa a todo lo anterior, y son los bebés. Un recién nacido " +
          "apenas puede tiritar, porque no tiene todavía masa muscular suficiente para generar " +
          "calor por esa vía, y sin embargo se enfría muchísimo más rápido que un adulto: tiene " +
          "mucha superficie de piel en proporción a su volumen, que es la peor combinación " +
          "posible para conservar temperatura. Y aun así son perfectamente capaces de mantenerse " +
          "calientes.",
      },
      {
        b: "parrafo",
        texto:
          "Lo hacen con un sistema completamente distinto, la <strong>termogénesis sin " +
          "temblor</strong>, cuyo combustible es un tejido especializado llamado <strong>grasa " +
          "parda</strong>. Se llama parda porque está repleta de mitocondrias, que le dan ese " +
          "color oscuro, y un bebé la tiene concentrada sobre todo en la espalda, el cuello y " +
          "alrededor de los riñones. Cuando se enfría, una señal química la activa, y esas " +
          "mitocondrias hacen algo peculiar: en lugar de usar la energía de la grasa para " +
          "fabricar el combustible celular habitual, la desvían directamente a calor mediante una " +
          "proteína que cortocircuita el proceso a propósito. No hay movimiento, no hay temblor, " +
          "no hay gasto muscular. Es una estufa química funcionando bajo la piel.",
      },
      {
        b: "parrafo",
        texto:
          "Dicho en corto: un adulto genera calor gastando músculo y un recién nacido lo genera " +
          "quemando grasa, dos caminos muy distintos que llegan al mismo sitio. Y durante mucho " +
          "tiempo se creyó que esa grasa parda desaparecía en la infancia, hasta que se comprobó " +
          "que los adultos conservamos depósitos activos, sobre todo en el cuello y por encima de " +
          "las clavículas, y que se encienden cuando pasamos frío de verdad.",
      },
      {
        b: "rayo",
        texto:
          "Un recién nacido casi no puede tiritar. Genera calor quemando grasa parda directamente " +
          "en sus mitocondrias, sin mover un solo músculo.",
      },
    ],
  },
  {
    id: "nadie-oyo-su-voz-hasta-1877",
    titulo: "Por qué tu voz grabada suena rara",
    categoria: "Ciencia",
    color: "var(--clay)",
    /* Serie «por-que-tu-voz-grabada-suena-rara», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Nadie oyó su propia voz hasta 1877» */
    encargo: "Nadie oyó su propia voz hasta 1877",
    fotos: [
      {
        local: p_nadie_oyo_su_voz_hasta_1877,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Nadie oyó su propia voz hasta 1877",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Doscientas mil generaciones sin saber cómo sonaban",
      },
      {
        b: "parrafo",
        texto:
          "Piensa en todo lo que un ser humano podía saber de sí mismo antes de la tecnología " +
          "moderna. Cómo era su cara, con solo asomarse a un charco quieto o a un espejo de " +
          "bronce. Cómo olía, cómo se movía, cómo eran sus manos. Todo eso estaba disponible " +
          "desde siempre y para cualquiera.",
      },
      {
        b: "parrafo",
        texto:
          "Su voz, no. Durante toda la historia de la especie, ningún ser humano tuvo manera de " +
          "oír su propia voz como la oían los demás. La escuchaba constantemente, desde dentro, " +
          "pero jamás desde fuera. Y como no había con qué compararla, nadie sospechaba siquiera " +
          "que hubiera dos versiones distintas.",
      },
      {
        b: "parrafo",
        texto:
          "Eso terminó en 1877, cuando Edison presentó el fonógrafo, el primer aparato capaz de " +
          "registrar un sonido y volver a reproducirlo. Hubo un intento anterior, el " +
          "fonoautógrafo de Édouard-Léon Scott de Martinville, que en 1857 ya conseguía dibujar " +
          "la forma de una onda sonora sobre papel ahumado, pero no podía reproducirla: servía " +
          "para ver el sonido, no para escucharlo. Con Edison, por primera vez, una persona pudo " +
          "oír su propia voz saliendo de un sitio que no era su cabeza.",
      },
      {
        b: "parrafo",
        texto:
          "Y con ese aparato apareció, de golpe, una sensación que ningún ser humano había tenido " +
          "antes: la de no reconocerse.",
      },
      {
        b: "rayo",
        texto:
          "Una persona podía verse la cara desde que existen los charcos. Oírse la voz solo es " +
          "posible desde hace siglo y medio.",
      },
      {
        b: "rotulo",
        texto:
          "Tu cráneo hace de altavoz de graves",
      },
      {
        b: "parrafo",
        texto:
          "La explicación de por qué no te reconoces está en que tu voz te llega por dos caminos " +
          "a la vez, y solo uno de ellos existe para los demás.",
      },
      {
        b: "parrafo",
        texto:
          "El primero es el evidente: el sonido sale de tu boca, viaja por el aire, entra por el " +
          "conducto auditivo y llega al oído interno. Ese es el único camino que tiene cualquier " +
          "otra persona para oírte, y es también el único que capta un micrófono.",
      },
      {
        b: "parrafo",
        texto:
          "El segundo es interno. Al hablar, las cuerdas vocales hacen vibrar el tejido y los " +
          "<strong>huesos de tu cráneo</strong>, y esa vibración llega directamente al oído " +
          "interno por dentro, sin pasar por el aire. Y aquí está la clave: el hueso no transmite " +
          "todas las frecuencias por igual. Conduce mucho mejor las graves que las agudas, así " +
          "que ese segundo canal te está entregando una versión de tu voz con los graves " +
          "reforzados.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que tú oyes cuando hablas es la suma de las dos cosas: la voz que sale de tu boca, " +
          "más un refuerzo de graves que te entrega tu propio esqueleto. Por eso tu voz te suena " +
          "más grave, más llena y más resonante de lo que es. Y por eso una grabación, que solo " +
          "contiene la mitad aérea, te suena más aguda y más delgada de lo que esperabas. No es " +
          "que el micrófono la deforme: es que le falta el bajo que ponías tú.",
      },
      {
        b: "rayo",
        texto:
          "Tu cráneo te está poniendo un refuerzo de graves que nadie más oye. La grabación no es " +
          "peor: le falta tu esqueleto.",
      },
    ],
  },
  {
    id: "ve-en-blanco-y-negro-y-acierta-el-color",
    titulo: "Por qué un pulpo se camufla si es daltónico",
    categoria: "Ciencia",
    color: "var(--teal)",
    /* Serie «por-que-un-pulpo-se-camufla-si-es-daltonico», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Ve en blanco y negro y aun así acierta el color» */
    encargo: "Ve en blanco y negro y aun así acierta el color",
    fotos: [
      {
        local: p_ve_en_blanco_y_negro_y_acierta_el_color,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Ve en blanco y negro y aun así acierta el color",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Solo tiene un tipo de receptor de luz en el ojo",
      },
      {
        b: "parrafo",
        texto:
          "El pulpo es probablemente el mejor camuflador del reino animal. No cambia de color en " +
          "cuestión de minutos como un camaleón: lo hace en menos de un segundo, y no solo el " +
          "color. Ajusta también el dibujo, imitando manchas y vetas, y llega a modificar la " +
          "<strong>textura</strong> de la piel levantando protuberancias para parecer roca rugosa " +
          "o alga. Se planta sobre un fondo y desaparece.",
      },
      {
        b: "parrafo",
        texto:
          "La maquinaria con la que lo hace está repartida por toda la piel. Son los " +
          "<strong>cromatóforos</strong>, unos sacos diminutos llenos de pigmento con músculos " +
          "dispuestos en radio a su alrededor: cuando esos músculos tiran, el saco se estira y el " +
          "pigmento se despliega en superficie; cuando se relajan, se contrae hasta ser " +
          "invisible. Debajo hay otras capas de células que reflejan y dispersan la luz y aportan " +
          "brillos e iridiscencias. El animal maneja todo eso con el sistema nervioso, " +
          "directamente, como quien mueve un músculo.",
      },
      {
        b: "parrafo",
        texto:
          "Y ahora el problema. El ojo del pulpo tiene <strong>un solo tipo de receptor de " +
          "luz</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Tú tienes tres, y de compararlos entre sí sale la sensación de color. Con un único " +
          "receptor esa comparación no existe: solo hay una señal, que dice cuánta luz llega y " +
          "nada más. En términos técnicos el pulpo es monocromático, y en términos corrientes es " +
          "<strong>daltónico total</strong>. Ve en blanco y negro.",
      },
      {
        b: "rayo",
        texto:
          "El pulpo iguala el color del fondo en menos de un segundo. Y su ojo tiene un solo tipo " +
          "de receptor de luz, así que no puede distinguir colores.",
      },
      {
        b: "rotulo",
        texto:
          "Es un problema de verdad, no una curiosidad",
      },
      {
        b: "parrafo",
        texto:
          "¿Y por qué es eso tan raro, en lugar de un simple detalle anatómico? Es simple: porque " +
          "para copiar un color hay que poder compararlo con el propio.",
      },
      {
        b: "parrafo",
        texto:
          "Piensa en cómo funcionaría contigo. Te dan una pared y un juego de botes de pintura, " +
          "todo visto a través de una cámara en blanco y negro, y te piden que la pintes del " +
          "mismo color exacto que tiene. Puedes acertar el brillo, distinguir si es claro u " +
          "oscuro, incluso copiar el dibujo de las manchas. Pero no tienes manera de saber si esa " +
          "pared es marrón, verde o rojiza, porque todas ellas te llegarían como el mismo gris. " +
          "Acertar el tono sería cuestión de suerte.",
      },
      {
        b: "parrafo",
        texto:
          "El pulpo no acierta por suerte. Se coloca sobre un alga parda y se pone pardo; se " +
          "coloca sobre coral rojizo y se pone rojizo; se coloca sobre arena clara y palidece. Lo " +
          "hace de forma consistente y con un fondo tras otro.",
      },
      {
        b: "parrafo",
        texto:
          "De modo que, o hay algo en esa afirmación de que es daltónico que se nos escapa, o hay " +
          "algún otro camino por el que la información del color llega hasta él sin pasar por " +
          "donde estamos mirando. Y esa contradicción entre una anatomía perfectamente medida y " +
          "un comportamiento perfectamente observado ha sido durante décadas uno de los " +
          "rompecabezas más citados de la biología marina.",
      },
      {
        b: "rayo",
        texto:
          "Copiar un color exige poder compararlo con el propio. Un animal con un solo tipo de " +
          "receptor no debería poder hacerlo, y sin embargo acierta una y otra vez.",
      },
    ],
  },
  {
    id: "el-destello-sube-del-suelo-a-la-nube",
    titulo: "Por qué un rayo hace zigzag",
    categoria: "Ciencia",
    color: "var(--sage)",
    /* Serie «por-que-un-rayo-hace-zigzag», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El destello que ves sube del suelo a la nube» */
    encargo: "El destello que ves sube del suelo a la nube",
    fotos: [
      {
        local: p_el_destello_sube_del_suelo_a_la_nube,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El destello que ves sube del suelo a la nube",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Lo primero que ocurre no lo ves",
      },
      {
        b: "parrafo",
        texto:
          "Un rayo parece el fenómeno más directo del mundo: algo cae de la nube al suelo, se ve " +
          "la línea brillante y se acabó. En realidad la secuencia tiene tres actos, y el que ves " +
          "no es el primero ni va en la dirección que crees.",
      },
      {
        b: "parrafo",
        texto:
          "El primer acto sí baja, pero es invisible. De la nube desciende un canal de carga " +
          "negativa que los meteorólogos llaman <strong>líder escalonado</strong>, y desciende de " +
          "una manera muy particular: no traza una línea continua, sino que avanza a saltos, en " +
          "tramos de unas pocas decenas de metros, ramificándose por el camino como una raíz que " +
          "busca. Su avance es rapidísimo, del orden de ciento cincuenta mil metros por segundo, " +
          "y aun así es tan tenue que a simple vista no se aprecia. Cuando miras una tormenta, " +
          "ese canal ya está bajando hacia el suelo y tú no ves absolutamente nada.",
      },
      {
        b: "parrafo",
        texto:
          "El segundo acto ocurre abajo. Conforme el líder cargado negativamente se aproxima al " +
          "suelo, la superficie responde: desde los objetos altos —un árbol, un poste, un tejado, " +
          "una torre— empiezan a ascender canales de carga positiva, buscando al que baja. Son " +
          "las llamadas <strong>descargas conectivas</strong>, y también son invisibles.",
      },
      {
        b: "rayo",
        texto:
          "Antes de que veas nada, un canal invisible ya ha bajado de la nube a saltos, y del " +
          "suelo ya están subiendo otros a su encuentro.",
      },
      {
        b: "rotulo",
        texto:
          "Y entonces el rayo se enciende hacia arriba",
      },
      {
        b: "parrafo",
        texto:
          "¿Y el destello, entonces? Es simple: se produce en el instante en que uno de los " +
          "canales que suben del suelo toca al que baja de la nube, y cuando eso ocurre el camino " +
          "queda cerrado y la corriente se dispara.",
      },
      {
        b: "parrafo",
        texto:
          "Esa corriente es lo que se llama <strong>descarga de retorno</strong>, y viaja " +
          "<strong>desde el suelo hacia la nube</strong> a unos noventa y seis mil kilómetros por " +
          "segundo, alrededor de un tercio de la velocidad de la luz. Es ella la que calienta el " +
          "canal hasta temperaturas enormes y lo hace brillar. De modo que la línea luminosa que " +
          "asocias con un rayo —la única parte del fenómeno que tus ojos registran— no cae: sube.",
      },
      {
        b: "parrafo",
        texto:
          "La razón de que no lo percibas así es puramente de velocidad. A noventa y seis mil " +
          "kilómetros por segundo, el recorrido completo entre el suelo y la nube se hace en unas " +
          "pocas diezmilésimas de segundo, muy por debajo del tiempo que tu sistema visual " +
          "necesita para distinguir un orden. Lo ves aparecer entero y de golpe, y tu cerebro lo " +
          "rellena con la dirección que tiene sentido según lo que sabe: las cosas caen. Pero la " +
          "cámara de alta velocidad sí lo distingue perfectamente, y lo que registra es un trazo " +
          "que se enciende de abajo arriba.",
      },
      {
        b: "parrafo",
        texto:
          "Hay dos detalles más que redondean el asunto. El primero es el parpadeo característico " +
          "de algunos rayos, esa sensación de que la línea tiembla o se repite: no es una " +
          "impresión, es literal. El proceso puede repetirse varias veces por el mismo canal ya " +
          "abierto, con <strong>hasta unas veinte descargas de retorno</strong> sucesivas, y cada " +
          "una es un destello independiente.",
      },
      {
        b: "parrafo",
        texto:
          "El segundo es el grosor. Viendo la fotografía de un rayo, con ese trazo ancho y " +
          "desbordado de luz, uno le supondría un diámetro considerable. El canal de corriente " +
          "real mide entre <strong>dos y cinco centímetros</strong>: menos que tu muñeca. Todo lo " +
          "demás que ves en la imagen es resplandor, el fogonazo desparramándose alrededor de un " +
          "hilo mucho más fino de lo que parece.",
      },
      {
        b: "rayo",
        texto:
          "El rayo que ves no cae: sube del suelo a la nube a un tercio de la velocidad de la " +
          "luz, por un canal de dos a cinco centímetros de grosor.",
      },
    ],
  },
  {
    id: "por-que-unos-paises-son-ricos-y-otros-pobres",
    titulo: "Por qué unos países son ricos y otros pobres",
    categoria: "Economía",
    color: "var(--plum)",
    /* Serie «por-que-unos-paises-son-ricos-y-otros-pobres», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Hay una ciudad partida por una valla con dos niveles de vida distintos» */
    encargo: "Hay una ciudad partida por una valla con dos niveles de vida distintos",
    fotos: [
      {
        local: p_por_que_unos_paises_son_ricos_y_otros_pobres,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Hay una ciudad partida por una valla con dos niveles de vida distintos",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Nogales está en dos países y es la misma ciudad",
      },
      {
        b: "parrafo",
        texto:
          "Para responder a por qué unos países son ricos y otros pobres hay un caso que vale más " +
          "que cualquier estadística, y es el que abre el libro más influyente que se ha escrito " +
          "sobre el asunto.",
      },
      {
        b: "parrafo",
        texto:
          "En la frontera entre Estados Unidos y México hay una ciudad llamada Nogales. En " +
          "realidad son dos: <strong>Nogales, Arizona</strong> y <strong>Nogales, " +
          "Sonora</strong>, separadas por una valla que atraviesa lo que era un solo núcleo " +
          "urbano. Y entre un lado y otro de esa valla hay una diferencia notable en el nivel de " +
          "vida.",
      },
      {
        b: "parrafo",
        texto:
          "Piensa un momento en todo lo que las dos mitades comparten, porque es prácticamente " +
          "todo. El mismo terreno, el mismo clima, la misma altitud, las mismas lluvias y las " +
          "mismas sequías. Los mismos antepasados, el mismo idioma en muchas familias, la misma " +
          "religión, la misma comida, las mismas enfermedades. Los habitantes de los dos lados " +
          "tienen primos al otro lado.",
      },
      {
        b: "rayo",
        texto:
          "Nogales es lo más parecido a un experimento controlado que ofrece la economía. Todas " +
          "las variables se mantienen constantes salvo una, y esa una es de qué lado de la valla " +
          "vives.",
      },
      {
        b: "rotulo",
        texto:
          "Lo interesante no es lo que explica, sino lo que descarta",
      },
      {
        b: "parrafo",
        texto:
          "Aquí hay que resistir la tentación de saltar a la conclusión, porque la fuerza del " +
          "ejemplo está en lo que elimina.",
      },
      {
        b: "parrafo",
        texto:
          "La explicación más antigua sobre la riqueza de las naciones es la geografía: el clima, " +
          "los ríos navegables, la tierra fértil, las enfermedades tropicales, la distancia al " +
          "mar. Es una explicación seria y tiene defensores excelentes. Pero en Nogales no " +
          "funciona, porque la geografía de los dos lados es literalmente la misma.",
      },
      {
        b: "parrafo",
        texto:
          "La segunda explicación clásica es la cultura: hay pueblos más trabajadores, más " +
          "ahorradores o más emprendedores que otros. En Nogales tampoco funciona, y el motivo es " +
          "todavía más contundente: en muchos casos hablamos de la misma familia repartida entre " +
          "las dos aceras.",
      },
      {
        b: "parrafo",
        texto:
          "Descartadas esas dos, lo único que queda para explicar la diferencia son las reglas. " +
          "Qué leyes te aplican, qué juzgado te atiende, con qué contrato compras una casa, quién " +
          "cobra los impuestos y qué hace con ellos, y qué le ocurre a alguien que monta un " +
          "negocio y le va bien.",
      },
      {
        b: "rayo",
        texto:
          "La geografía y la cultura pueden explicar diferencias entre continentes, pero no " +
          "pueden explicar una diferencia que aparece al cruzar una calle. Lo único que cambia en " +
          "esa calle es qué conjunto de normas te toca.",
      },
    ],
  },
  {
    id: "por-que-vuelan-los-aviones-es-falso",
    titulo: "Por qué vuelan los aviones",
    categoria: "Ciencia",
    color: "var(--teal)",
    /* Serie «por-que-vuelan-los-aviones», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Lo que te enseñaron sobre por qué vuelan los aviones es falso» */
    encargo: "Ocho reactores de la Patrouille de France en formación cerrada, dejando estelas de humo.",
    fotos: [
      {
        local: p_por_que_vuelan_los_aviones_es_falso,
        autor:
          "Fotografía de Łukasz Golowanow.",
        licencia: "Attribution",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Patrouille_de_France_Radom_3_1.JPG",
        alt:
          "Ocho reactores de la Patrouille de France en formación cerrada, dejando estelas de " +
          "humo.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La explicación del colegio, y por qué no se sostiene",
      },
      {
        b: "parrafo",
        texto:
          "¿Te acuerdas de cómo te lo contaron? El ala es curva por arriba y más o menos plana " +
          "por abajo, así que el aire que pasa por encima tiene que recorrer un camino más largo " +
          "que el que pasa por debajo. Como ambos deben llegar al final del ala al mismo tiempo, " +
          "el de arriba se ve obligado a ir más rápido, y al ir más rápido su presión baja. Con " +
          "menos presión arriba que abajo, el ala sube. Suena impecable, tiene un dibujo " +
          "estupendo que lo acompaña y está en libros de texto, en carteles de museos de ciencia " +
          "y en la mitad de los vídeos divulgativos de internet.",
      },
      {
        b: "parrafo",
        texto:
          "La propia NASA tiene una página dedicada exclusivamente a explicar por qué está mal, " +
          "lo cual ya dice bastante sobre la extensión del problema. Y los fallos no son matices: " +
          "son bastante gordos.",
      },
      {
        b: "lista",
        puntos: [
          "<strong>Nadie ha dicho que tengan que llegar a la vez.</strong> Esa condición es una " +
            "suposición inventada, sin ningún fundamento físico detrás. No hay ninguna ley que " +
            "obligue a dos moléculas separadas en el borde de ataque a reencontrarse al final. Y " +
            "además resulta que es falsa: cuando se mide, el aire de arriba llega al borde de " +
            "salida <em>antes</em> que el de abajo, no a la vez.",
          "<strong>Las alas simétricas vuelan perfectamente.</strong> Muchos aviones " +
            "acrobáticos llevan perfiles idénticos por arriba y por abajo, sin ninguna curvatura " +
            "diferencial. Según esta teoría no deberían generar la menor sustentación, y sin " +
            "embargo despegan, vuelan y aterrizan como cualquier otro.",
          "<strong>Una plancha completamente plana también vuela.</strong> Un avión de papel no " +
            "tiene curvatura ninguna, y se sostiene sin el menor problema. Una tabla lisa " +
            "inclinada al viento genera sustentación de sobra.",
        ],
      },
      {
        b: "rayo",
        texto:
          "El aire que pasa por encima del ala no espera al de abajo. Llega antes. Toda la " +
          "explicación se apoya en una suposición que nadie comprobó.",
      },
      {
        b: "rotulo",
        texto:
          "Y sobre todo: los aviones vuelan boca abajo",
      },
      {
        b: "parrafo",
        texto:
          "Pero el argumento definitivo no requiere ni medir ni calcular nada, y lo has visto en " +
          "cualquier exhibición aérea a la que hayas ido. Un avión se pone invertido, con la " +
          "panza mirando al cielo, y sigue volando tan tranquilo durante todo el tiempo que le " +
          "apetezca al piloto.",
      },
      {
        b: "parrafo",
        texto:
          "Piensa en lo que eso implica. Si la forma del ala fuese la causa de la sustentación, " +
          "un avión boca abajo tendría el perfil exactamente al revés: la cara curva mirando al " +
          "suelo y la plana al cielo. Según la teoría del colegio, la fuerza resultante apuntaría " +
          "hacia abajo, y el aparato debería salir disparado contra el suelo en cuanto se " +
          "invirtiera. No solo no lo hace, sino que hay pilotos que se pasan buena parte del " +
          "número de espaldas. Ese solo hecho, sin ninguna ecuación, basta para tumbar la " +
          "explicación entera.",
      },
      {
        b: "parrafo",
        texto:
          "Hay incluso un fallo más, más técnico y menos vistoso pero igual de contundente. " +
          "Aunque aceptaras la suposición de partida y te pusieras a echar cuentas con ella, los " +
          "números no cuadran: la velocidad que la teoría predice para el aire de arriba es " +
          "demasiado baja para generar la sustentación que se mide de verdad en un túnel de " +
          "viento. Es decir, que la explicación no solo parte de una premisa inventada, sino que " +
          "además, aun concediéndosela, da un resultado equivocado.",
      },
      {
        b: "rayo",
        texto:
          "Los aviones vuelan boca abajo en cualquier exhibición aérea. Eso, por sí solo, " +
          "desmonta la explicación de la forma del ala.",
      },
    ],
  },
  {
    id: "que-es-el-salar-de-uyuni",
    titulo: "Qué es el salar de Uyuni",
    categoria: "Planeta Tierra",
    color: "var(--slate)",
    /* Serie «que-es-el-salar-de-uyuni», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Es el fondo de un lago que se evaporó y dejó la sal encima» */
    encargo: "Es el fondo de un lago que se evaporó y dejó la sal encima",
    fotos: [
      {
        local: p_que_es_el_salar_de_uyuni,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Es el fondo de un lago que se evaporó y dejó la sal encima",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Diez mil kilómetros cuadrados de blanco en mitad del altiplano",
      },
      {
        b: "parrafo",
        texto:
          "En el sur del altiplano boliviano, a más de tres mil metros de altitud, hay una " +
          "superficie blanca de más de diez mil kilómetros cuadrados. Para hacerse una idea, es " +
          "una extensión mayor que la Comunidad de Madrid entera, y es toda del mismo color y de " +
          "la misma textura.",
      },
      {
        b: "parrafo",
        texto:
          "No es nieve, no es arena y no es un desierto en el sentido habitual. Es sal, una " +
          "costra sólida que se puede pisar y por la que circulan vehículos, y lo que hay debajo " +
          "es una salmuera saturada.",
      },
      {
        b: "parrafo",
        texto:
          "Aquello estuvo cubierto de agua. Hace unos cuarenta mil años esta zona formaba parte " +
          "de un lago enorme, y cuando el clima cambió el lago se fue secando. El agua se evaporó " +
          "y dejó atrás todo lo que llevaba disuelto, que era mucha sal.",
      },
      {
        b: "rayo",
        texto:
          "El Salar de Uyuni no es un paisaje que se formara así. Es el residuo sólido de un lago " +
          "que ya no está.",
      },
      {
        b: "rotulo",
        texto:
          "La sal marca el nivel del agua que hubo, no la roca de debajo",
      },
      {
        b: "parrafo",
        texto:
          "¿Y por qué acaba tan uniforme? Es simple: <strong>el agua siempre se queda " +
          "perfectamente horizontal</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "El terreno que hay debajo del salar es como cualquier otro terreno: irregular, con " +
          "hondonadas y salientes. Pero el lago que lo cubría tenía la superficie plana, porque " +
          "el agua en reposo siempre lo está. Al evaporarse, la sal fue precipitando y " +
          "depositándose desde arriba, rellenando primero lo hondo y nivelando después.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en lo que eso significa. La superficie que se ve hoy no reproduce la forma del " +
          "suelo: reproduce la forma que tenía la superficie del agua. La costra no está " +
          "siguiendo un relieve, está borrándolo.",
      },
      {
        b: "parrafo",
        texto:
          "Y como el proceso se repite —cada estación de lluvias vuelve a cubrir el salar con una " +
          "capa de agua que después se evapora—, la nivelación se rehace año tras año, como una " +
          "obra que se replantea sola.",
      },
      {
        b: "rayo",
        texto:
          "La sal no copió el terreno: copió el nivel del agua. Por eso hay una superficie " +
          "perfectamente plana encima de un suelo que no lo es.",
      },
    ],
  },
  {
    id: "que-es-exactamente-el-fuego",
    titulo: "Qué es exactamente el fuego",
    categoria: "Ciencia",
    color: "var(--ochre)",
    /* Serie «que-es-exactamente-el-fuego», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El fuego no es una cosa: es una reacción ocurriendo» */
    encargo: "El fuego no es una cosa: es una reacción ocurriendo",
    fotos: [
      {
        local: p_que_es_exactamente_el_fuego,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El fuego no es una cosa: es una reacción ocurriendo",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Es un proceso, y por eso no se puede tener un poco",
      },
      {
        b: "parrafo",
        texto:
          "Durante siglos, el fuego fue uno de los cuatro elementos, junto a la tierra, el agua y " +
          "el aire. Se le trataba como a una sustancia: algo que estaba hecho de algo, que se " +
          "podía tener y que pasaba de un sitio a otro.",
      },
      {
        b: "parrafo",
        texto:
          "La definición actual lo saca de esa categoría por completo. El fuego es la " +
          "<strong>oxidación rápida</strong> de un combustible en el proceso químico exotérmico " +
          "de la combustión, que libera calor, luz y diversos productos de reacción.",
      },
      {
        b: "parrafo",
        texto:
          "Léelo despacio y verás que ahí no hay ninguna sustancia. Hay un verbo. El fuego es " +
          "algo que <strong>está pasando</strong>, no algo que existe: es materia combinándose " +
          "con oxígeno a gran velocidad y soltando energía mientras lo hace.",
      },
      {
        b: "parrafo",
        texto:
          "De ahí sale la comprobación doméstica. Puedes tener un frasco de agua, un puñado de " +
          "tierra y un globo de aire. No puedes tener un frasco de fuego, porque no hay nada que " +
          "meter dentro. En cuanto lo aíslas, deja de ocurrir, y lo que queda no es fuego " +
          "guardado: es humo y ceniza.",
      },
      {
        b: "rayo",
        texto:
          "De los cuatro elementos clásicos, tres son sustancias y el cuarto es un suceso. El " +
          "fuego no está hecho de nada: es el nombre que le damos a una reacción química mientras " +
          "dura.",
      },
      {
        b: "rotulo",
        texto:
          "Necesita cuatro cosas, y apagarlo es quitarle una",
      },
      {
        b: "parrafo",
        texto:
          "Como es un proceso y no una cosa, se le puede describir por sus requisitos. Y son " +
          "exactamente cuatro.",
      },
      {
        b: "parrafo",
        texto:
          "Hace falta un material inflamable o combustible. Hace falta una cantidad suficiente de " +
          "un <strong>oxidante</strong>, que normalmente es el oxígeno del aire. Hace falta " +
          "exponerlo a una fuente de <strong>calor</strong>. Y hace falta que el conjunto pueda " +
          "sostener una velocidad de oxidación rápida que produzca una <strong>reacción en " +
          "cadena</strong>, es decir, que cada porción que arde encienda a la siguiente sin " +
          "ayuda.",
      },
      {
        b: "parrafo",
        texto:
          "A ese conjunto se le llama el <strong>tetraedro del fuego</strong>, y su utilidad es " +
          "inmediata: retira cualquiera de los cuatro y el fuego se para.",
      },
      {
        b: "parrafo",
        texto:
          "Repasa ahora todas las formas de apagar un fuego que conoces y verás que cada una " +
          "ataca una pata distinta. El agua se lleva el calor. Una manta o la tapa de una sartén " +
          "cortan el oxígeno. Cerrar la llave del gas retira el combustible. Y los extintores " +
          "químicos hacen lo cuarto, que es lo menos obvio de todo: interrumpen la reacción en " +
          "cadena sin quitar ni el calor, ni el aire, ni el combustible. El fuego se apaga con " +
          "todos sus ingredientes todavía presentes, sencillamente porque han dejado de " +
          "encadenarse.",
      },
      {
        b: "rayo",
        texto:
          "No existe una forma de apagar el fuego, existen cuatro, y cada extintor elige la suya. " +
          "La más elegante no le quita nada al fuego: se limita a romper la cadena por la que un " +
          "trozo enciende al siguiente.",
      },
    ],
  },
  {
    id: "coladores-de-hace-7500-anos",
    titulo: "Qué es realmente el queso",
    categoria: "Historia",
    color: "var(--plum)",
    /* Serie «que-es-realmente-el-queso», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Hay coladores de hace 7.500 años que demuestran que ya se hacía queso» */
    encargo: "Hay coladores de hace 7.500 años que demuestran que ya se hacía queso",
    fotos: [
      {
        local: p_coladores_de_hace_7500_anos,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Hay coladores de hace 7.500 años que demuestran que ya se hacía queso",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La leche fresca es un problema, no una solución",
      },
      {
        b: "parrafo",
        texto:
          "Para entender qué es el queso conviene ponerse en el sitio de un ganadero del " +
          "Neolítico. Ordeñas un animal y obtienes un líquido nutritivo, sí, pero también " +
          "extremadamente inestable: sin frío, la leche se estropea en cuestión de horas.",
      },
      {
        b: "parrafo",
        texto:
          "Es decir, ordeñar te da un alimento que no puedes guardar, no puedes transportar y no " +
          "puedes acumular para el invierno. Un recurso que hay que consumir entero en el mismo " +
          "día pierde buena parte de su valor.",
      },
      {
        b: "parrafo",
        texto:
          "El queso es la respuesta a ese problema, y por eso es tan antiguo. Convertir un " +
          "líquido perecedero en un sólido compacto que aguanta semanas o meses no es una idea " +
          "gastronómica: es una técnica de conservación, y probablemente una de las primeras que " +
          "inventamos.",
      },
      {
        b: "rayo",
        texto:
          "El queso no nació como un capricho de sabor. Nació como la manera de que la leche del " +
          "martes se pudiera comer en noviembre.",
      },
      {
        b: "rotulo",
        texto:
          "Unas vasijas agujereadas del norte de Europa lo demostraron",
      },
      {
        b: "parrafo",
        texto:
          "En yacimientos del norte de Europa aparecen desde hace décadas unas cerámicas raras " +
          "del sexto milenio antes de Cristo: recipientes de barro perforados por <strong>decenas " +
          "de agujeros de un milímetro</strong>, muy parecidos a los coladores de queso modernos.",
      },
      {
        b: "parrafo",
        texto:
          "En 1984, el arqueólogo Peter Bogucki propuso que eso era exactamente lo que eran. Era " +
          "una hipótesis razonable, y durante casi treinta años siguió siendo solo eso, porque un " +
          "objeto agujereado puede servir para muchas cosas.",
      },
      {
        b: "parrafo",
        texto:
          "¿Y cómo se comprueba lo que pasó por unos agujeros hace siete mil quinientos años? Es " +
          "simple: <strong>la grasa se queda en el barro</strong>. La cerámica sin vidriar es " +
          "porosa, y las grasas del alimento que contuvo se meten en esos poros y se quedan ahí, " +
          "protegidas del oxígeno y de las bacterias, durante milenios. Después basta con " +
          "extraerlas y mirar su composición molecular y su firma isotópica, que dicen de qué " +
          "animal y de qué tejido salieron.",
      },
      {
        b: "parrafo",
        texto:
          "Cuando se hizo ese análisis, los coladores estaban <strong>cargados de grasa de " +
          "leche</strong>. No de carne, no de pescado: leche. Es la prueba más antigua conocida " +
          "de elaboración de queso, y confirmó una intuición que llevaba tres décadas esperando.",
      },
      {
        b: "rayo",
        texto:
          "La prueba de que hace siete mil quinientos años se hacía queso no estaba en un texto " +
          "ni en un dibujo: estaba metida en los poros de un colador de barro.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? El queso más antiguo que se conserva de verdad, no como residuo sino " +
          "como queso, apareció en el cementerio de Xiaohe, en el noroeste de China. Tiene unos " +
          "tres mil seiscientos años y estaba untado alrededor del cuello de tres momias. En 2024 " +
          "se le secuenció el ADN: era kéfir, y sus bacterias resultaron emparentadas con las de " +
          "las variedades tibetanas actuales.",
      },
    ],
  },
  {
    id: "que-es-realmente-un-hongo",
    titulo: "Qué es realmente un hongo",
    categoria: "Naturaleza",
    color: "var(--slate)",
    /* Serie «que-es-realmente-un-hongo», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Una seta no es el hongo, es su fruta» */
    encargo: "Una seta no es el hongo, es su fruta",
    fotos: [
      {
        local: p_que_es_realmente_un_hongo,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Una seta no es el hongo, es su fruta",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El organismo entero está bajo tierra y se llama micelio",
      },
      {
        b: "parrafo",
        texto:
          "Cuando alguien dice «un hongo», casi todo el mundo piensa en una seta: el sombrero, el " +
          "pie y poco más. Eso es como pensar que un manzano es una manzana.",
      },
      {
        b: "parrafo",
        texto:
          "La seta es únicamente el <strong>cuerpo fructífero</strong>. El organismo es el " +
          "<strong>micelio</strong>, una red de filamentos finísimos llamados " +
          "<strong>hifas</strong> que se extiende por el sustrato —el suelo del bosque, la madera " +
          "muerta, la hojarasca— y que es donde el hongo vive, come y crece durante casi toda su " +
          "existencia. La seta es lo que produce en un momento concreto, y para una sola cosa: " +
          "soltar esporas al aire.",
      },
      {
        b: "parrafo",
        texto:
          "De ahí sale una consecuencia práctica que sorprende a mucha gente. Coger una seta no " +
          "mata al hongo. El organismo sigue entero debajo, exactamente igual que un manzano " +
          "sigue vivo después de que le quiten la fruta.",
      },
      {
        b: "parrafo",
        texto:
          "Y explica también por qué las setas aparecen de golpe y por tandas, siempre después de " +
          "las lluvias y en las mismas zonas año tras año. No es que el hongo haya nacido esa " +
          "semana: llevaba años ahí abajo, y esa semana se dieron las condiciones para " +
          "fructificar.",
      },
      {
        b: "rayo",
        texto:
          "Buscar setas no es buscar hongos. Es esperar a que un organismo que lleva años bajo " +
          "tus pies decida sacar la fruta a la superficie.",
      },
      {
        b: "rotulo",
        texto:
          "Un hongo no come: digiere fuera de sí mismo y luego absorbe",
      },
      {
        b: "parrafo",
        texto:
          "La otra diferencia de fondo con un animal está en el orden de las operaciones, y es " +
          "más rara de lo que parece.",
      },
      {
        b: "parrafo",
        texto:
          "Nosotros metemos la comida dentro y la digerimos ahí, con enzimas que trabajan en un " +
          "espacio cerrado. Un hongo hace exactamente lo contrario: obtiene su alimento " +
          "absorbiendo moléculas orgánicas ya disueltas, y para conseguirlas segrega enzimas " +
          "digestivas <strong>hacia el exterior</strong>, al medio que lo rodea.",
      },
      {
        b: "parrafo",
        texto:
          "Es decir, un hongo digiere primero y come después. Suelta sus jugos sobre el tronco " +
          "caído, la fruta o la hojarasca, espera a que la materia se descomponga en moléculas " +
          "pequeñas, y entonces las absorbe por la superficie de sus hifas.",
      },
      {
        b: "parrafo",
        texto:
          "Ahí está el motivo de que su cuerpo tenga la forma que tiene. A un organismo que " +
          "absorbe por toda su superficie no le interesa ser compacto: le interesa tener el " +
          "máximo de superficie posible en contacto con la comida. Por eso un hongo no es una " +
          "bola ni un bloque, sino una maraña de hilos finísimos que se ramifica sin parar. Su " +
          "forma es la consecuencia directa de su manera de comer.",
      },
      {
        b: "rayo",
        texto:
          "Un hongo no tiene estómago porque no lo necesita: convierte en estómago todo lo que le " +
          "rodea. Y como digiere por fuera, su cuerpo tiene que ser todo superficie.",
      },
    ],
  },
  {
    id: "que-es-realmente-una-perla",
    titulo: "Qué es realmente una perla",
    categoria: "Naturaleza",
    color: "var(--clay)",
    /* Serie «que-es-realmente-una-perla», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Una perla es una herida tapada con material de concha» */
    encargo: "Una perla es una herida tapada con material de concha",
    fotos: [
      {
        local: p_que_es_realmente_una_perla,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Una perla es una herida tapada con material de concha",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El animal no fabrica una joya: se defiende de algo",
      },
      {
        b: "parrafo",
        texto:
          "De todas las piedras que la gente lleva encima, la perla es la única que no es una " +
          "piedra. No se extrae de una mina, no se talla y no se pule: sale ya terminada del " +
          "interior de un animal vivo, y sale por un motivo que no tiene nada de ornamental.",
      },
      {
        b: "parrafo",
        texto:
          "Cuando una partícula extraña —un grano de arena, un parásito diminuto— entra en el " +
          "cuerpo del molusco y no consigue expulsarla, el tejido llamado <strong>manto</strong> " +
          "hace lo único que sabe hacer: la recubre. Segrega alrededor del intruso el mismo " +
          "material con el que fabrica la cara interna de su concha, capa sobre capa, como quien " +
          "envuelve un regalo.",
      },
      {
        b: "parrafo",
        texto:
          "Ese material se llama <strong>nácar</strong>, y está hecho sobre todo de aragonito, " +
          "una forma del carbonato cálcico, más una sustancia orgánica córnea llamada " +
          "conquiolina.",
      },
      {
        b: "rayo",
        texto:
          "Una perla no es un producto del animal: es una cicatriz. Está hecha del mismo material " +
          "que la concha, construida en el sitio equivocado.",
      },
      {
        b: "rotulo",
        texto:
          "Por qué son redondas, y por qué muchas no lo son",
      },
      {
        b: "parrafo",
        texto:
          "¿Y de dónde sale la forma esférica? Es simple: <strong>el molusco recubre en todas " +
          "direcciones a la vez</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Como el manto envuelve el intruso por todas partes y va depositando capas de grosor " +
          "parecido, la forma tiende a redondearse con el tiempo, del mismo modo que una bola de " +
          "nieve rodada se va haciendo esférica aunque el guijarro de dentro no lo fuera.",
      },
      {
        b: "parrafo",
        texto:
          "Pero eso solo pasa si el intruso queda suelto, flotando en el tejido. Si queda pegado " +
          "contra la concha, o si el manto lo cubre de forma desigual, el resultado es una perla " +
          "irregular, con bultos y aristas. A esas se las llama <strong>perlas barrocas</strong>, " +
          "y son mucho más frecuentes que las redondas.",
      },
      {
        b: "parrafo",
        texto:
          "Y ahí está el motivo real del precio histórico. Una perla perfectamente esférica no es " +
          "un ejemplar bonito dentro de una categoría: es el caso raro dentro de un proceso que " +
          "casi siempre sale torcido.",
      },
      {
        b: "rayo",
        texto:
          "Lo excepcional de una perla redonda no es la perla. Es que el accidente que la produjo " +
          "ocurriera exactamente en el sitio adecuado.",
      },
    ],
  },
  {
    id: "que-es-un-agujero-de-gusano",
    titulo: "Qué es un agujero de gusano",
    categoria: "Ciencia",
    color: "var(--teal)",
    /* Serie «que-es-un-agujero-de-gusano», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Einstein no estaba inventando un atajo: intentaba quitar los infinitos» */
    encargo: "Einstein no estaba inventando un atajo: intentaba quitar los infinitos",
    fotos: [
      {
        local: p_que_es_un_agujero_de_gusano,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Einstein no estaba inventando un atajo: intentaba quitar los infinitos",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El origen está en un problema que no tiene nada que ver con viajar",
      },
      {
        b: "parrafo",
        texto:
          "Un agujero de gusano suena a idea de guionista, y por eso sorprende de dónde salió. En " +
          "1935, Albert Einstein y su colaborador Nathan Rosen publicaron en la revista " +
          "<em>Physical Review</em> un artículo titulado «El problema de la partícula en la " +
          "teoría general de la relatividad». No iba de viajes ni de distancias. Iba de una " +
          "molestia matemática.",
      },
      {
        b: "parrafo",
        texto:
          "Las ecuaciones de la relatividad, en cuanto se aplicaban a una partícula puntual, " +
          "devolvían infinitos. Una densidad infinita, una curvatura infinita. Y un infinito, en " +
          "física, no es un resultado: es la señal de que la descripción se ha roto. Einstein y " +
          "Rosen buscaban una manera de describir las partículas sin que aparecieran esos puntos " +
          "imposibles, dentro de un proyecto más ambicioso: una teoría unificada de la gravedad y " +
          "el electromagnetismo hecha solo de campos, sin partículas puntuales.",
      },
      {
        b: "parrafo",
        texto:
          "Su idea fue reinterpretar la solución de Schwarzschild. En vez de leerla como una " +
          "región con un punto infinito en el centro, la leyeron como dos hojas de espacio " +
          "conectadas por un cuello. El infinito desaparecía porque no había centro: había un " +
          "paso.",
      },
      {
        b: "rayo",
        texto:
          "El agujero de gusano no se propuso como una puerta. Se propuso como una forma de que " +
          "la teoría dejara de dividir por cero.",
      },
      {
        b: "rotulo",
        texto:
          "La unificación fracasó y el pasadizo se quedó",
      },
      {
        b: "parrafo",
        texto:
          "El proyecto grande no salió. Nadie consiguió construir con aquello una teoría " +
          "unificada, y las partículas siguieron sin describirse así. Lo que se quedó, casi como " +
          "un residuo, fue esa figura geométrica: dos regiones del espacio-tiempo unidas por un " +
          "cuello, que se conoce desde entonces como <strong>puente de Einstein-Rosen</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en el orden de los acontecimientos, porque en la ciencia pasa más de lo que " +
          "parece. Primero apareció el objeto matemático, con un propósito que no tenía nada que " +
          "ver. Después fracasó ese propósito. Y solo mucho más tarde alguien se preguntó qué " +
          "pasaría si un objeto así existiera de verdad y algo intentara atravesarlo.",
      },
      {
        b: "rayo",
        texto:
          "La estructura llegó antes que la pregunta. Nadie la diseñó para viajar: se descubrió " +
          "lo que era treinta años después de escribirla.",
      },
    ],
  },
  {
    id: "que-es-un-agujero-negro",
    titulo: "Qué es un agujero negro",
    categoria: "Ciencia",
    color: "var(--sage)",
    /* Serie «que-es-un-agujero-negro», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Ni es un agujero ni aspira nada» */
    encargo: "Ni es un agujero ni aspira nada",
    fotos: [
      {
        local: p_que_es_un_agujero_negro,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Ni es un agujero ni aspira nada",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El nombre se equivoca dos veces en dos palabras",
      },
      {
        b: "parrafo",
        texto:
          "Quizá te imagines un agujero negro como un desagüe cósmico: un hueco en el espacio que " +
          "se traga todo lo que pasa cerca, y del que hay que mantenerse alejado como de una " +
          "corriente. Es la imagen que sugiere la palabra, y las dos mitades de la palabra están " +
          "mal.",
      },
      {
        b: "parrafo",
        texto:
          "No es un agujero, sino lo contrario. Un agujero es un sitio donde falta materia; un " +
          "agujero negro es un sitio donde hay demasiada, tanta y tan apretada que ya no cabe en " +
          "ninguna forma estable. Es el objeto más lleno que existe, no el más vacío.",
      },
      {
        b: "parrafo",
        texto:
          "Y no aspira. La gravedad de un agujero negro no es una fuerza distinta ni más ávida " +
          "que la de cualquier otra cosa con masa: es exactamente la misma gravedad, y depende " +
          "exactamente de lo mismo, de cuánta masa hay y a qué distancia estás.",
      },
      {
        b: "rayo",
        texto:
          "Lo peligroso de un agujero negro no es lo que hace a distancia, sino lo cerca que te " +
          "deja llegar.",
      },
      {
        b: "rotulo",
        texto:
          "La prueba está en que el sistema solar no notaría el cambio",
      },
      {
        b: "parrafo",
        texto:
          "¿Y cómo se demuestra que no aspira? Con un experimento mental que la propia NASA usa " +
          "para explicarlo.",
      },
      {
        b: "parrafo",
        texto:
          "Imagina que esta noche el Sol se convierte de golpe en un agujero negro con " +
          "exactamente la misma masa que tiene ahora. Todo lo demás sigue igual: la Tierra en su " +
          "sitio, la misma distancia, la misma velocidad. ¿Qué pasa con la órbita?",
      },
      {
        b: "parrafo",
        texto:
          "No pasa nada. La Tierra seguiría girando alrededor de ese punto igual que gira hoy, en " +
          "la misma órbita y en el mismo tiempo, porque la masa que la sujeta no habría cambiado. " +
          "Nos quedaríamos a oscuras y nos congelaríamos, que no es poco, pero nadie saldría " +
          "succionado hacia ninguna parte.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que sí cambiaría es otra cosa. El Sol mide un millón cuatrocientos mil kilómetros " +
          "de diámetro, así que lo más cerca que puedes ponerte de su centro sin dejar de existir " +
          "son unos setecientos mil kilómetros. Concentra esa misma masa en un punto y de repente " +
          "puedes acercarte muchísimo más, y ahí abajo la gravedad es brutal. El agujero negro no " +
          "atrae más: simplemente deja de estorbar el camino hacia su propio centro.",
      },
      {
        b: "rayo",
        texto:
          "Un agujero negro no cambia cuánta gravedad hay. Cambia hasta dónde puedes acercarte a " +
          "ella.",
      },
    ],
  },
  {
    id: "que-es-un-laser",
    titulo: "Qué es un láser",
    categoria: "Ciencia",
    color: "var(--plum)",
    /* Serie «que-es-un-laser», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Láser es un acrónimo, y describe exactamente lo que hace la máquina» */
    encargo: "Láser es un acrónimo, y describe exactamente lo que hace la máquina",
    fotos: [
      {
        local: p_que_es_un_laser,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Láser es un acrónimo, y describe exactamente lo que hace la máquina",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Emisión estimulada: la parte que predijo Einstein en 1917",
      },
      {
        b: "parrafo",
        texto:
          "La palabra no es un nombre, son unas siglas, y están en inglés: <strong>light " +
          "amplification by stimulated emission of radiation</strong>, amplificación de luz por " +
          "emisión estimulada de radiación. Cada palabra corresponde a una pieza del mecanismo, y " +
          "la que hay que entender es la del medio.",
      },
      {
        b: "parrafo",
        texto:
          "Empecemos por cómo emite luz un átomo normalmente. Si le das energía, uno de sus " +
          "electrones sube a un nivel superior y se queda ahí, incómodo. Al cabo de un rato cae " +
          "solo y suelta esa energía en forma de un fotón. Cuándo lo hace y en qué dirección sale " +
          "ese fotón es cosa del azar. Así funciona una bombilla, una vela y el Sol: montones de " +
          "átomos soltando luz cada uno por su cuenta, en todas direcciones y en todos los " +
          "colores.",
      },
      {
        b: "parrafo",
        texto:
          "La <strong>emisión estimulada</strong> es otra cosa, y es un fenómeno cuántico que " +
          "<strong>Albert Einstein predijo en 1917</strong>, más de cuarenta años antes de que " +
          "nadie construyera un láser. Consiste en lo siguiente: si un fotón pasa cerca de un " +
          "átomo que ya está excitado, lo obliga a caer en ese instante. Y el fotón que el átomo " +
          "suelta al caer sale <strong>idéntico</strong> al que lo provocó: misma dirección, " +
          "misma frecuencia, misma fase.",
      },
      {
        b: "parrafo",
        texto:
          "Ahí está la amplificación, y es literal. Entra un fotón y salen dos exactamente " +
          "iguales. Esos dos estimulan a otros dos átomos y salen cuatro. Y así.",
      },
      {
        b: "rayo",
        texto:
          "Un láser no fabrica una luz especial. Fabrica copias exactas del mismo fotón, una y " +
          "otra vez, y lo que llamamos rayo es el resultado de esa multiplicación en cadena.",
      },
      {
        b: "rotulo",
        texto:
          "Un medio, una bomba de energía y dos espejos",
      },
      {
        b: "parrafo",
        texto:
          "La máquina que aprovecha eso tiene tres partes, y ninguna es complicada.",
      },
      {
        b: "parrafo",
        texto:
          "Hace falta un <strong>medio de ganancia</strong>, que es el material cuyos átomos van " +
          "a emitir. Hace falta un <strong>mecanismo para energizarlo</strong>, que le suba los " +
          "electrones al nivel alto y los mantenga ahí, porque sin átomos excitados no hay nada " +
          "que estimular. Y hace falta algo que proporcione <strong>realimentación " +
          "óptica</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Esa tercera pieza es la más ingeniosa. En el diseño habitual son dos espejos, uno a " +
          "cada extremo del medio de ganancia, enfrentados. La luz que se genera dentro rebota " +
          "entre ellos y vuelve a atravesar el material una y otra vez, y en cada pasada estimula " +
          "más átomos y se multiplica.",
      },
      {
        b: "parrafo",
        texto:
          "Y entonces, ¿cómo sale? Porque uno de los dos espejos, el llamado <strong>acoplador de " +
          "salida</strong>, es parcialmente transparente. Deja escapar una fracción de la luz en " +
          "cada rebote, y esa fracción que se fuga es el rayo.",
      },
      {
        b: "parrafo",
        texto:
          "Detente en eso un momento, porque cambia la imagen que uno tiene del aparato. Lo que " +
          "ves salir por delante de un láser no es lo que produce: es lo que se le escapa. Dentro " +
          "hay muchísima más luz, atrapada entre dos espejos, rebotando.",
      },
      {
        b: "rayo",
        texto:
          "El rayo de un láser es una fuga controlada. La máquina está diseñada para que la luz " +
          "no salga, para que rebote y se multiplique, y el haz es la pequeña parte que se deja " +
          "marchar por el espejo que no cierra del todo.",
      },
    ],
  },
  {
    id: "que-es-una-estrella-fugaz",
    titulo: "Qué es una estrella fugaz",
    categoria: "Ciencia",
    color: "var(--ochre)",
    /* Serie «que-es-una-estrella-fugaz», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «No es una estrella, y casi siempre es un grano de arena» */
    encargo: "No es una estrella, y casi siempre es un grano de arena",
    fotos: [
      {
        local: p_que_es_una_estrella_fugaz,
        autor: "",
        licencia: "Pexels License",
        alt:
          "No es una estrella, y casi siempre es un grano de arena",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El nombre promete un objeto enorme y el objeto es diminuto",
      },
      {
        b: "parrafo",
        texto:
          "De todas las expresiones astronómicas que usamos a diario, «estrella fugaz» es la que " +
          "más se equivoca. No hay ninguna estrella implicada, y el objeto que produce el " +
          "fenómeno no solo no es grande: es de los más pequeños que somos capaces de ver a " +
          "simple vista desde la Tierra.",
      },
      {
        b: "parrafo",
        texto:
          "Un meteoro típico, de esos que se ven un segundo y desaparecen, lo produce <strong>un " +
          "objeto del tamaño de un grano de arena</strong>. Los que dejan un trazo largo y " +
          "brillante ya son excepcionales, y para eso hacen falta cuerpos de varios gramos, del " +
          "tamaño de una canica o mayores.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en la desproporción, porque es la clave del asunto. Una estrella es una bola de " +
          "gas de más de un millón de kilómetros de diámetro. Una estrella fugaz es una china que " +
          "pesa menos que un clip. Lo que iguala a las dos es la velocidad.",
      },
      {
        b: "rayo",
        texto:
          "Lo que ves en el cielo no es un objeto grande muy lejos. Es un objeto minúsculo muy " +
          "cerca, moviéndose muy deprisa.",
      },
      {
        b: "rotulo",
        texto:
          "Todo ocurre más cerca de lo que parece y termina muy alto",
      },
      {
        b: "parrafo",
        texto:
          "¿Y a qué altura pasa? La respuesta descoloca a casi todo el mundo, porque la escena " +
          "parece ocurrir «en el espacio».",
      },
      {
        b: "parrafo",
        texto:
          "El meteoro empieza a verse a unos cien kilómetros de altura o algo más, y la mayoría " +
          "se apagan por encima de los ochenta. Bajar de los cincuenta kilómetros es raro. Es " +
          "decir: toda la estrella fugaz ocurre dentro de la atmósfera terrestre, en una franja " +
          "bastante estrecha, más cerca de ti que muchas ciudades a las que has ido en coche.",
      },
      {
        b: "parrafo",
        texto:
          "La velocidad, en cambio, sí es de escala astronómica. Estos cuerpos entran a un mínimo " +
          "de 11,2 kilómetros por segundo —que es la velocidad de escape de la Tierra, el mínimo " +
          "con el que algo puede caer aquí— y pueden llegar hasta los 72. En el peor de los " +
          "casos, un grano de arena atraviesa el aire a más de doscientos cincuenta mil " +
          "kilómetros por hora.",
      },
      {
        b: "rayo",
        texto:
          "La estrella fugaz no es un fenómeno del espacio. Es un fenómeno atmosférico, y pasa " +
          "por encima de tu cabeza a la altura a la que vuelan los satélites más bajos.",
      },
    ],
  },
  {
    id: "hasta-1925-el-universo-era-esta-galaxia",
    titulo: "Qué es una galaxia",
    categoria: "Ciencia",
    color: "var(--sage)",
    /* Serie «que-es-una-galaxia», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Hasta 1925, el universo entero era esta galaxia» */
    encargo: "Hasta 1925, el universo entero era esta galaxia",
    fotos: [
      {
        local: p_hasta_1925_el_universo_era_esta_galaxia,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Hasta 1925, el universo entero era esta galaxia",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Una isla de estrellas, y durante siglos creímos que solo había una",
      },
      {
        b: "parrafo",
        texto:
          "Una galaxia es un conjunto de estrellas, gas, polvo y materia oscura que la gravedad " +
          "mantiene unido y girando en torno a un centro común. La nuestra, la Vía Láctea, " +
          "contiene del orden de doscientos mil millones de estrellas, y el Sol es una de ellas, " +
          "en un brazo cualquiera, a unos veintiséis mil años luz del centro. La banda " +
          "blanquecina que cruza el cielo en una noche oscura, lejos de las ciudades, es esa " +
          "misma galaxia vista desde dentro y de canto.",
      },
      {
        b: "parrafo",
        texto:
          "Hasta aquí, la definición de manual. Lo que casi nadie tiene presente es lo reciente " +
          "que es, porque la idea de que existen <em>otras</em> galaxias —el plural, " +
          "sencillamente— no llega a los cien años de antigüedad, y es más joven que la radio " +
          "comercial. Durante todo el siglo XIX y las primeras décadas del XX, la Vía Láctea no " +
          "era una galaxia entre muchas: era el universo, todo él. Los astrónomos veían en sus " +
          "telescopios unas manchas borrosas de forma espiral, las llamaban <strong>nebulosas " +
          "espirales</strong>, y la interpretación mayoritaria era que se trataba de nubes de gas " +
          "situadas dentro de nuestro propio sistema, quizá sistemas solares en formación. Ni " +
          "siquiera se planteaba en serio que hubiera algo <em>fuera</em>, sobre todo porque no " +
          "había un fuera donde ponerlo.",
      },
      {
        b: "parrafo",
        texto:
          "El desacuerdo estalló públicamente en 1920, en lo que la astronomía conoce desde " +
          "entonces como el <strong>Gran Debate</strong>. Harlow Shapley defendía que esas " +
          "nebulosas espirales eran objetos relativamente pequeños situados dentro de la Vía " +
          "Láctea; Heber Curtis sostenía justo lo contrario, que eran sistemas independientes, " +
          "enormes y lejanísimos, universos-isla completos por su cuenta. Los dos argumentaban " +
          "bien, los dos tenían observaciones a favor y ninguno pudo ganar, porque a la pregunta " +
          "le faltaba lo único que la habría zanjado de un golpe: nadie sabía medir a qué " +
          "distancia estaban aquellas manchas. Sin distancia, una nebulosa pequeña y cercana y " +
          "una galaxia gigantesca y remota se ven exactamente igual en la placa fotográfica.",
      },
      {
        b: "rayo",
        texto:
          "En 1920 la astronomía discutía en serio si el universo era una sola galaxia o muchas. " +
          "No era una cuestión filosófica: faltaba una medición.",
      },
      {
        b: "rotulo",
        texto:
          "Henrietta Leavitt construyó la regla de medir, y Hubble la apuntó a Andrómeda",
      },
      {
        b: "parrafo",
        texto:
          "¿Cómo se mide la distancia a algo que solo es una mancha difusa en una fotografía? Es " +
          "simple: necesitas encontrar dentro de ella una estrella cuyo brillo verdadero conozcas " +
          "de antemano. Si sabes cuánta luz emite en realidad y ves lo poquísima que te llega, la " +
          "diferencia entre las dos cantidades te da la distancia, igual que sabrías estimar a " +
          "cuántos metros está un faro si conocieras la potencia de su bombilla.",
      },
      {
        b: "parrafo",
        texto:
          "Esa estrella patrón la encontró <strong>Henrietta Leavitt</strong> en el Observatorio " +
          "de Harvard. Estudiando un tipo de estrella variable llamada <strong>cefeida</strong>, " +
          "que se enciende y se apaga con un ritmo regular, Leavitt descubrió que el periodo de " +
          "ese parpadeo estaba directamente relacionado con su brillo real: cuanto más despacio " +
          "late una cefeida, más luminosa es. Y eso convierte a cada cefeida en un faro de " +
          "potencia conocida. Basta con cronometrarla para saber cuánta luz emite, y comparar con " +
          "lo que llega para saber a qué distancia está. Era, por fin, una regla de medir para el " +
          "cosmos.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Leavitt formaba parte de las llamadas «computadoras» de Harvard, un " +
          "grupo de mujeres contratadas para examinar placas fotográficas. Llegó a cobrar treinta " +
          "centavos por hora —cinco más que la mayoría de sus compañeras— y no tenía permitido " +
          "manejar un telescopio ni dedicarse al trabajo teórico. La mujer que fabricó la regla " +
          "con la que se mide el universo no podía usar el instrumento con el que se mira.",
      },
      {
        b: "parrafo",
        texto:
          "Edwin Hubble apuntó con esa regla. Trabajando en Mount Wilson con el telescopio Hooker " +
          "de cien pulgadas, el mayor del mundo en aquel momento, fotografió la nebulosa de " +
          "Andrómeda y en 1923 encontró una cefeida dentro de ella. Se quedó tan impresionado que " +
          "escribió a mano un signo de exclamación sobre la placa fotográfica, junto a la " +
          "estrella.",
      },
      {
        b: "parrafo",
        texto:
          "A finales de 1924 tenía ya doce cefeidas identificadas en Andrómeda, suficientes para " +
          "cerrar la cuenta con confianza. El resultado fueron <strong>novecientos mil años " +
          "luz</strong>. Conviene poner esa cifra al lado de la otra para ver el golpe: la Vía " +
          "Láctea entera se estimaba en unos cien mil años luz de diámetro, de modo que Andrómeda " +
          "no solo no estaba dentro, sino que estaba nueve veces más lejos que el ancho completo " +
          "de todo lo que hasta ese día se consideraba el universo. Era otra galaxia entera, con " +
          "sus propios miles de millones de estrellas.",
      },
      {
        b: "parrafo",
        texto:
          "Hubble le escribió a Shapley para contárselo. Shapley leyó la carta, se la pasó a su " +
          "colega Cecilia Payne-Gaposchkin y dijo una frase que ha quedado como el resumen exacto " +
          "de lo que acababa de ocurrir:",
      },
      {
        b: "cita",
        texto:
          "Aquí está la carta que ha destruido mi universo.",
      },
      {
        b: "parrafo",
        texto:
          "— Harlow Shapley",
      },
      {
        b: "parrafo",
        texto:
          "El resultado se presentó en enero de 1925, en una reunión de la Sociedad Astronómica " +
          "Americana, y ni siquiera fue Hubble quien lo leyó: lo hizo un colega en su nombre, " +
          "mientras él seguía en el observatorio. Cinco semanas antes ya se lo había filtrado al " +
          "<em>New York Times</em>.",
      },
      {
        b: "parrafo",
        texto:
          "Y hay un último detalle que hace la historia todavía mejor: aquella cifra se quedaba " +
          "corta. Novecientos mil años luz era una subestimación considerable, porque Andrómeda " +
          "está en realidad a unos dos millones y medio. Con una sola medición —y equivocada por " +
          "defecto en un factor de casi tres— el universo pasó de ser una galaxia a contener " +
          "billones de ellas.",
      },
      {
        b: "rayo",
        texto:
          "Doce estrellas parpadeantes bastaron para que el universo dejara de ser un sitio y " +
          "pasara a ser billones de sitios.",
      },
    ],
  },
  {
    id: "que-fue-antes-el-huevo-o-la-gallina",
    titulo: "Qué fue antes, el huevo o la gallina",
    categoria: "Ciencia",
    color: "var(--slate)",
    /* Serie «que-fue-antes-el-huevo-o-la-gallina», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El huevo ganó por trescientos millones de años» */
    encargo: "El huevo ganó por trescientos millones de años",
    fotos: [
      {
        local: p_que_fue_antes_el_huevo_o_la_gallina,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El huevo ganó por trescientos millones de años",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Los huevos ya existían cuando aún faltaba casi todo",
      },
      {
        b: "parrafo",
        texto:
          "La pregunta se plantea siempre como un círculo sin salida, y no lo es. Tiene " +
          "respuesta, y no está ni siquiera reñida.",
      },
      {
        b: "parrafo",
        texto:
          "El primer huevo amniota —el de cáscara dura, que se podía poner en tierra firme en " +
          "lugar de tener que quedarse en el agua como los de peces y anfibios— apareció hace " +
          "unos 312 millones de años. Las gallinas, en cambio, son descendientes domesticados del " +
          "gallo bankiva y no surgieron hace más de unos ocho mil años como mucho.",
      },
      {
        b: "parrafo",
        texto:
          "Pon las dos cifras en fila y el resultado deja de ser una discusión. Entre un dato y " +
          "el otro hay una diferencia de casi cuarenta mil veces. Cuando apareció la primera " +
          "gallina, los huevos llevaban existiendo tanto tiempo que en ese intervalo cabe la " +
          "aparición de los dinosaurios, sus ciento sesenta millones de años de reinado y su " +
          "extinción completa, y todavía sobra sitio.",
      },
      {
        b: "rayo",
        texto:
          "No es que el huevo ganara por poco. Los reptiles, los dinosaurios y las primeras aves " +
          "pusieron huevos durante trescientos millones de años antes de que existiera nada " +
          "parecido a una gallina.",
      },
      {
        b: "rotulo",
        texto:
          "Y si te refieres al huevo de gallina, la respuesta sigue siendo el huevo",
      },
      {
        b: "parrafo",
        texto:
          "Aquí es donde la gente afina la pregunta, y con razón: nadie discutía sobre huevos de " +
          "tortuga. La pregunta de verdad es por el huevo de gallina. Pues bien, la respuesta no " +
          "cambia, y el motivo es más interesante que el anterior.",
      },
      {
        b: "parrafo",
        texto:
          "Un animal adulto no cambia de especie. Tú no te vas a convertir en otra cosa a lo " +
          "largo de tu vida, y una gallina tampoco. Las especies cambian de una generación a la " +
          "siguiente, y ese cambio ocurre en un sitio muy concreto: en el óvulo de la madre, en " +
          "el espermatozoide del padre o en el cigoto recién formado.",
      },
      {
        b: "parrafo",
        texto:
          "Así que la escena real fue esta. Un ave que todavía no era una gallina puso un huevo " +
          "fecundado cuyo ADN, por una mutación en alguno de esos tres puntos, ya era el de una " +
          "gallina moderna. De ese huevo salió el primer animal que podemos llamar gallina. El " +
          "huevo existía antes que ella y lo puso otra cosa.",
      },
      {
        b: "parrafo",
        texto:
          "Conviene añadir el matiz honesto, porque la biología no funciona con fronteras " +
          "limpias: el momento exacto en que un organismo que evoluciona pasa a ser una gallina " +
          "es una distinción hasta cierto punto arbitraria. No hubo un día concreto. Pero pongas " +
          "la raya donde la pongas, el orden no se altera, porque el animal nuevo siempre aparece " +
          "dentro del huevo.",
      },
      {
        b: "rayo",
        texto:
          "La respuesta no depende de dónde pongas el límite entre una especie y otra. Sea cual " +
          "sea el primer animal al que llames gallina, no lo puso una gallina: salió de un huevo " +
          "que puso algo que todavía no lo era.",
      },
    ],
  },
  {
    id: "que-fue-el-ejercito-de-terracota",
    titulo: "Qué fue el ejército de terracota",
    categoria: "Historia",
    color: "var(--plum)",
    /* Serie «que-fue-el-ejercito-de-terracota», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Lo encontraron unos campesinos cavando un pozo» */
    encargo: "Lo encontraron unos campesinos cavando un pozo",
    fotos: [
      {
        local: p_que_fue_el_ejercito_de_terracota,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Lo encontraron unos campesinos cavando un pozo",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Marzo de 1974, provincia de Shaanxi",
      },
      {
        b: "parrafo",
        texto:
          "No lo encontró una expedición, ni una prospección arqueológica, ni un satélite. En " +
          "marzo de 1974, unos campesinos que perforaban un pozo cerca de Xi'an, en la provincia " +
          "china de Shaanxi, dieron con una cámara subterránea. Dentro había figuras de barro.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que salió después de aquel agujero son unos ocho mil soldados de terracota a tamaño " +
          "natural, con sus caballos, repartidos en fosas y colocados en formación militar. En " +
          "cámaras cercanas han aparecido más de mil trescientas figuras adicionales.",
      },
      {
        b: "parrafo",
        texto:
          "Todo aquello se fabricó para acompañar a <strong>Qin Shi Huang</strong>, el primer " +
          "emperador que unificó China, en su tumba.",
      },
      {
        b: "rayo",
        texto:
          "El conjunto funerario más ambicioso de la Antigüedad estuvo dos mil años a unos metros " +
          "de la superficie, en una zona habitada y cultivada, sin que nadie lo supiera.",
      },
      {
        b: "rotulo",
        texto:
          "La escala solo se entiende sabiendo qué era un emperador Qin",
      },
      {
        b: "parrafo",
        texto:
          "¿Y para qué se hace algo así? Aquí conviene el contexto, porque sin él la cifra de " +
          "ocho mil parece un capricho.",
      },
      {
        b: "parrafo",
        texto:
          "Qin Shi Huang no era un rey más. Fue quien terminó con siglos de estados enfrentados y " +
          "unificó el territorio bajo un mismo gobierno, una misma escritura, una misma moneda y " +
          "un mismo ancho de eje para los carros. Estandarizó un país entero por decreto.",
      },
      {
        b: "parrafo",
        texto:
          "Su tumba se planteó con la misma lógica: no como un enterramiento, sino como una " +
          "reproducción a escala de todo lo que había gobernado. El ejército de terracota no es " +
          "la tumba; es una parte del perímetro exterior. Hay fosas con funcionarios, con " +
          "acróbatas, con músicos, con aves acuáticas de bronce y con establos.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en lo que eso implica sobre la intención. No se enterró con un ejército: se " +
          "enterró con un imperio en miniatura, y el ejército era solo la guarnición.",
      },
      {
        b: "rayo",
        texto:
          "La misma cabeza que estandarizó la escritura y el ancho de los carros aplicó ese " +
          "criterio a su propia muerte, y montó una administración completa bajo tierra.",
      },
    ],
  },
  {
    id: "un-nombre-del-siglo-xix",
    titulo: "Qué fue la Ruta de la Seda",
    categoria: "Historia",
    color: "var(--slate)",
    /* Serie «que-fue-la-ruta-de-la-seda», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La Ruta de la Seda es un nombre inventado en el siglo XIX» */
    encargo: "La Ruta de la Seda es un nombre inventado en el siglo XIX",
    fotos: [
      {
        local: p_un_nombre_del_siglo_xix,
        autor: "",
        licencia: "Pexels License",
        alt:
          "La Ruta de la Seda es un nombre inventado en el siglo XIX",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Nadie de los que la usaron la llamó así, porque nadie sabía que existía",
      },
      {
        b: "parrafo",
        texto:
          "Durante mil quinientos años hubo mercaderes, monjes, soldados y arrieros moviéndose " +
          "entre China, Asia Central, Persia y el Mediterráneo. Ninguno de ellos usó jamás la " +
          "expresión «Ruta de la Seda», y no por falta de imaginación. Es que el concepto no " +
          "existía.",
      },
      {
        b: "parrafo",
        texto:
          "El nombre lo puso un geólogo alemán, el barón <strong>Ferdinand von " +
          "Richthofen</strong>, a mediados del siglo XIX. Él fue quien bautizó aquella red de " +
          "comercio y comunicación como <em>die Seidenstrasse</em>, la carretera de la seda, y el " +
          "nombre funcionó tan bien que se quedó.",
      },
      {
        b: "parrafo",
        texto:
          "Aquí conviene entender por qué a nadie de dentro se le habría ocurrido. Un mercader de " +
          "Samarcanda que carga camellos hacia el este no cree estar recorriendo una gran arteria " +
          "intercontinental. Cree estar yendo a la siguiente ciudad a vender género, como llevaba " +
          "haciendo su padre. La Ruta de la Seda es una figura que solo aparece cuando alguien se " +
          "aleja lo suficiente y mira el mapa entero desde arriba. Y para eso hacía falta el " +
          "siglo XIX.",
      },
      {
        b: "rayo",
        texto:
          "La Ruta de la Seda es un nombre puesto desde fuera y desde muy lejos en el tiempo. Los " +
          "que la recorrieron creían estar yendo a la ciudad de al lado.",
      },
      {
        b: "rotulo",
        texto:
          "No era una ruta, era una red que cambiaba cada pocos años",
      },
      {
        b: "parrafo",
        texto:
          "La palabra «ruta», en singular, hace un daño enorme. Sugiere una línea en el mapa, una " +
          "especie de carretera antigua que se podría señalar con el dedo. No existió tal cosa.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que había era un conjunto de itinerarios alternativos que atravesaban Europa " +
          "oriental, Oriente Medio, Asia Central y Extremo Oriente, más una parte marítima que " +
          "unía China y el sudeste asiático con la India, el Próximo Oriente y África a través " +
          "del océano Índico. No una carretera: una <strong>malla</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "¿Y por qué no se consolidó nunca un único camino, como pasa con las calzadas romanas? " +
          "Es simple: <strong>mandaba el terreno y mandaba la política</strong>. Entre China y el " +
          "Mediterráneo hay desiertos que solo se cruzan saltando de oasis en oasis y cordilleras " +
          "que solo se pasan por unos pocos collados. A eso se le suma que cada tramo atravesaba " +
          "territorios de poderes distintos, que subían peajes, se peleaban entre ellos o " +
          "cerraban pasos. Un itinerario que funcionaba durante una generación podía volverse " +
          "impracticable en la siguiente, y el tráfico se desviaba por otro lado.",
      },
      {
        b: "parrafo",
        texto:
          "De ahí sale, además, la geografía de las ciudades. Las grandes plazas comerciales de " +
          "Asia Central no están donde están por casualidad: están donde el agua y los pasos " +
          "obligaban a parar.",
      },
      {
        b: "rayo",
        texto:
          "No era una carretera con un principio y un final, sino una malla que se reconfiguraba " +
          "cada vez que cambiaban el clima, el peaje o el rey de turno.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Por esas rutas viajaban textiles, especias, cereales, frutas y verduras, " +
          "pieles, herramientas, objetos de madera y metal, piezas religiosas, obras de arte y " +
          "piedras preciosas. La seda fue solo uno de los primeros motores del comercio, y darle " +
          "el nombre a todo el sistema es como llamar «la ruta del café» a la navegación " +
          "atlántica.",
      },
    ],
  },
  {
    id: "las-lapidas-fechadas",
    titulo: "Qué fue realmente la peste negra",
    categoria: "Historia",
    color: "var(--clay)",
    /* Serie «que-fue-realmente-la-peste-negra», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El origen se encontró en un cementerio con las lápidas fechadas» */
    encargo: "El origen se encontró en un cementerio con las lápidas fechadas",
    fotos: [
      {
        local: p_las_lapidas_fechadas,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El origen se encontró en un cementerio con las lápidas fechadas",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Durante seiscientos años no se supo de dónde había salido",
      },
      {
        b: "parrafo",
        texto:
          "La Peste Negra que arrasó Europa a mediados del siglo XIV es probablemente la " +
          "catástrofe mejor documentada de la Edad Media. Hay crónicas, testamentos, registros " +
          "parroquiales y libros de contabilidad que la siguen ciudad por ciudad. Lo que no " +
          "había, hasta hace muy poco, era el principio.",
      },
      {
        b: "parrafo",
        texto:
          "Se sabía que había llegado desde el este, porque así lo cuentan las fuentes. Pero " +
          "«desde el este» abarca media Asia, y las propuestas iban desde China hasta la estepa " +
          "del mar Negro sin manera de decidir entre ellas. Ni siquiera estaba cerrado qué " +
          "enfermedad era exactamente, hasta que el ADN antiguo extraído de víctimas confirmó a " +
          "la bacteria <em>Yersinia pestis</em> como responsable.",
      },
      {
        b: "parrafo",
        texto:
          "El problema del origen es más difícil que el de la causa. Para resolverlo no basta con " +
          "encontrar la bacteria: hay que encontrar el punto exacto del árbol genealógico de la " +
          "bacteria donde arranca todo lo demás.",
      },
      {
        b: "rayo",
        texto:
          "Saber qué mató a un tercio de Europa fue la parte fácil. Saber dónde empezó exigía " +
          "encontrar la rama concreta del árbol de la que salen todas las demás.",
      },
      {
        b: "rotulo",
        texto:
          "En un valle de Kirguistán había un cementerio que ya lo decía",
      },
      {
        b: "parrafo",
        texto:
          "En el valle de Chu, cerca del lago Issyk-Kul, en el actual Kirguistán, hay un " +
          "cementerio medieval llamado Kara-Djigach que se excavó entre 1885 y 1892. Sus lápidas " +
          "están escritas en siriaco, y llevaban más de un siglo publicadas cuando alguien reparó " +
          "en un detalle.",
      },
      {
        b: "parrafo",
        texto:
          "En los años 1338 y 1339 hay una concentración anómala de enterramientos. Y varias de " +
          "esas lápidas dicen de qué murió la persona. Una de ellas se traduce así: «En el año " +
          "1649 —es decir, 1338 de nuestra era—. Esta es la tumba del creyente Sanmaq. Murió de " +
          "pestilencia.»",
      },
      {
        b: "parrafo",
        texto:
          "Un cementerio con un pico de mortalidad, en la fecha justa antes de que la peste " +
          "llegara a Europa, y con la causa escrita en la piedra. ¿Y cómo se pasa de ahí a una " +
          "certeza? Es simple: <strong>abriendo las tumbas</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "El equipo recuperó ADN de <em>Yersinia pestis</em> de restos fechados en 1338 y " +
          "reconstruyó su genoma. Al colocarlo en el árbol evolutivo de la bacteria, cayó " +
          "<strong>exactamente en el nodo</strong> del que salen las principales ramas modernas, " +
          "la ramificación explosiva que los especialistas llaman el «big bang» de la peste. No " +
          "es una cepa emparentada con la de la Peste Negra: es su antepasado directo, con fecha.",
      },
      {
        b: "rayo",
        texto:
          "La respuesta llevaba ciento treinta años excavada y publicada. Estaba escrita en unas " +
          "lápidas que decían la fecha y la causa, y faltaba mirar dentro.",
      },
      {
        b: "cita",
        texto:
          "Encontramos que las cepas antiguas de Kirguistán se sitúan exactamente en el nodo de " +
          "ese enorme episodio de diversificación. Dicho de otro modo: encontramos la cepa de " +
          "origen de la Peste Negra, y además conocemos su fecha exacta.",
      },
      {
        b: "parrafo",
        texto:
          "— Maria Spyrou, <em>Nature</em> (2022)",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? La peste no se extinguió después de la Edad Media. <em>Yersinia " +
          "pestis</em> sigue circulando hoy en roedores de varios continentes y cada año se " +
          "registran casos humanos, que se tratan con antibióticos. Lo que desapareció no fue la " +
          "bacteria, fue su capacidad de arrasar poblaciones enteras.",
      },
    ],
  },
  {
    id: "que-hay-debajo-de-la-antartida",
    titulo: "Qué hay debajo de la Antártida",
    categoria: "Planeta Tierra",
    color: "var(--slate)",
    /* Serie «que-hay-debajo-de-la-antartida», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Hay una cordillera del tamaño de los Alpes que nadie ha visto» */
    encargo: "Hay una cordillera del tamaño de los Alpes que nadie ha visto",
    fotos: [
      {
        local: p_que_hay_debajo_de_la_antartida,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Hay una cordillera del tamaño de los Alpes que nadie ha visto",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Una cordillera entera bajo tres kilómetros de hielo",
      },
      {
        b: "parrafo",
        texto:
          "En el interior de la Antártida oriental, enterradas bajo hasta tres kilómetros de " +
          "hielo, hay unas montañas llamadas <strong>Gamburtsev</strong>. Su relieve se parece al " +
          "de los Alpes europeos: picos afilados y valles profundos, excavados en su día por ríos " +
          "y glaciares.",
      },
      {
        b: "parrafo",
        texto:
          "Nadie las ha visto nunca. No hay ninguna fotografía, ni un afloramiento, ni una sola " +
          "roca en la mano de nadie. Lo que se sabe de ellas se sabe porque en 2007 y 2009 dos " +
          "aviones bimotores equipados con radar de penetración de hielo, gravímetros y " +
          "magnetómetros sobrevolaron la zona durante unos dos meses y medio desde campamentos en " +
          "el interior del continente.",
      },
      {
        b: "parrafo",
        texto:
          "Robin Bell, una de las investigadoras del proyecto, lo resumió con una comparación que " +
          "se queda grabada:",
      },
      {
        b: "cita",
        texto:
          "Es asombroso: tenemos muestras de la Luna, pero ninguna de las Gamburtsev.",
        autor: "Robin Bell",
      },
      {
        b: "rayo",
        texto:
          "Hay más roca antártica que nadie ha tocado que roca lunar. Lo más inaccesible del " +
          "sistema solar no está en el espacio: está debajo de nosotros.",
      },
      {
        b: "rotulo",
        texto:
          "Lo raro no es que estén ahí, sino que sigan siendo montañas",
      },
      {
        b: "parrafo",
        texto:
          "Ahora bien, hay algo que no cuadra en esa cordillera, y es lo que la hizo interesante " +
          "para los geólogos.",
      },
      {
        b: "parrafo",
        texto:
          "Las montañas se erosionan. Una cordillera abandonada a la lluvia, al viento y al hielo " +
          "se desgasta hasta convertirse en colinas en unas decenas de millones de años. Las " +
          "Gamburtsev tienen un origen antiquísimo: hace mil millones de años una colisión " +
          "continental engrosó la corteza, y entre hace doscientos cincuenta y cien millones de " +
          "años la ruptura del supercontinente Gondwana reactivó aquella raíz y la volvió a " +
          "levantar.",
      },
      {
        b: "parrafo",
        texto:
          "Con esa edad deberían estar desgastadas. Y sin embargo conservan picos y valles bien " +
          "marcados.",
      },
      {
        b: "parrafo",
        texto:
          "La explicación está encima de ellas. El manto de hielo de la Antártida oriental se " +
          "formó hace treinta y cuatro millones de años, y desde entonces las ha tapado. Un " +
          "glaciar que no se mueve no erosiona: protege.",
      },
      {
        b: "rayo",
        texto:
          "El hielo que impide verlas es la razón por la que siguen existiendo. Sin él llevarían " +
          "millones de años convertidas en llanura.",
      },
    ],
  },
  {
    id: "mil-atmosferas",
    titulo: "Qué hay en el fondo de las Marianas",
    categoria: "Naturaleza",
    color: "var(--teal)",
    /* Serie «que-hay-en-el-fondo-de-la-fosa-de-las-marianas», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Once kilómetros de agua encima, y mil atmósferas de presión» */
    encargo: "Once kilómetros de agua encima, y mil atmósferas de presión",
    fotos: [
      {
        local: p_mil_atmosferas,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Once kilómetros de agua encima, y mil atmósferas de presión",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El punto más profundo del planeta está donde una placa se mete debajo de otra",
      },
      {
        b: "parrafo",
        texto:
          "La fosa de las Marianas no es un agujero: es una <strong>arruga</strong>. Se forma " +
          "donde la placa del Pacífico se hunde por debajo de la placa filipina, y ese proceso de " +
          "subducción va tirando del fondo marino hacia abajo a lo largo de miles de kilómetros.",
      },
      {
        b: "parrafo",
        texto:
          "Su punto más hondo se llama el Abismo Challenger, y está a <strong>10.935 " +
          "metros</strong> bajo la superficie. Para hacerse una idea: si cogieras el Everest " +
          "entero y lo dejaras caer ahí dentro, todavía quedarían más de dos kilómetros de agua " +
          "por encima de la cumbre.",
      },
      {
        b: "parrafo",
        texto:
          "Lo interesante no es la cifra en sí, sino lo que implica once kilómetros de agua " +
          "puestos encima de algo.",
      },
      {
        b: "rayo",
        texto:
          "El punto más profundo del océano no está en mitad del mar: está justo en la costura " +
          "donde una placa tectónica se está tragando a otra.",
      },
      {
        b: "rotulo",
        texto:
          "La presión ahí abajo supera las mil atmósferas",
      },
      {
        b: "parrafo",
        texto:
          "En el fondo del Abismo Challenger la presión pasa de <strong>1.089 " +
          "atmósferas</strong>, unas dieciséis mil libras por pulgada cuadrada. Es un peso " +
          "difícil de imaginar: equivale aproximadamente a que te apoyaran una tonelada sobre " +
          "cada centímetro cuadrado de piel.",
      },
      {
        b: "parrafo",
        texto:
          "Y aquí viene la pregunta que casi todo el mundo se hace mal. ¿Cómo es posible que haya " +
          "animales viviendo tan campantes ahí abajo? Es simple: <strong>porque no llevan aire " +
          "dentro</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Un submarino se aplasta porque es una burbuja de aire a presión de superficie metida " +
          "en un sitio donde fuera hay mil atmósferas, y esa diferencia enorme entre dentro y " +
          "fuera es lo que revienta el casco. Un animal hecho de agua y tejido, sin cavidades " +
          "llenas de gas, no tiene esa diferencia: dentro hay la misma presión que fuera, y no " +
          "hay nada que aplastar. El agua, además, prácticamente no se comprime.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que la presión sí ataca no es la forma, es la <strong>química</strong>. A esas " +
          "presiones las proteínas se deforman y dejan de funcionar bien, y ese, y no el " +
          "aplastamiento, es el problema real que la vida abisal ha tenido que resolver.",
      },
      {
        b: "rayo",
        texto:
          "La presión no aplasta a los animales del fondo porque dentro de ellos hay la misma " +
          "presión que fuera. Su problema no es mecánico: es que a mil atmósferas las proteínas " +
          "dejan de plegarse bien.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? El 23 de enero de 1960, Don Walsh y Jacques Piccard bajaron hasta allí " +
          "en el batiscafo <em>Trieste</em>. Tardaron cuatro horas y cuarenta y siete minutos en " +
          "descender, aguantaron veinte minutos en el fondo en vez de los treinta previstos " +
          "porque el sedimento levantado no dejaba ver nada, y subieron con una ventana " +
          "agrietada. Fueron los primeros.",
      },
    ],
  },
  {
    id: "dos-mil-anos-antes-de-los-druidas",
    titulo: "Quién construyó Stonehenge y para qué",
    categoria: "Historia",
    color: "var(--ochre)",
    /* Serie «quien-construyo-stonehenge-y-para-que», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Stonehenge estaba terminado dos mil años antes de que existieran los druidas» */
    encargo: "Stonehenge estaba terminado dos mil años antes de que existieran los druidas",
    fotos: [
      {
        local: p_dos_mil_anos_antes_de_los_druidas,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Stonehenge estaba terminado dos mil años antes de que existieran los druidas",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El monumento se construyó en fases, a lo largo de más de mil años",
      },
      {
        b: "parrafo",
        texto:
          "Stonehenge no es un edificio que alguien levantara en una campaña de obras. Es un " +
          "sitio que se fue transformando durante más de un milenio, y saber en qué orden " +
          "ocurrieron las cosas cambia por completo la pregunta de quién lo hizo.",
      },
      {
        b: "parrafo",
        texto:
          "Lo primero que hubo allí no fue de piedra. Hacia el año 3000 antes de Cristo se excavó " +
          "un recinto circular con foso y terraplén, un henge, con cincuenta y seis agujeros " +
          "alrededor que sostuvieron postes de madera o de piedra. Durante siglos ese recinto " +
          "funcionó como <strong>cementerio de cremación</strong>: la gente llevaba allí a sus " +
          "muertos incinerados mucho antes de que se plantara la primera piedra grande.",
      },
      {
        b: "parrafo",
        texto:
          "Los círculos de piedra que todo el mundo tiene en la cabeza llegaron después, hacia el " +
          "2500 antes de Cristo. Y ni siquiera entonces quedó terminado: las piedras azules se " +
          "recolocaron al menos una vez más, y siglos después todavía se estaban excavando " +
          "anillos de hoyos alrededor del conjunto.",
      },
      {
        b: "parrafo",
        texto:
          "Merece la pena fijar esas fechas, porque son las que ordenan todo lo demás. Aquel " +
          "primer recinto del 3000 antes de Cristo es unos cuatro siglos más antiguo que la Gran " +
          "Pirámide de Guiza, y las grandes piedras se levantaron más o menos cuando esta se " +
          "terminaba.",
      },
      {
        b: "rayo",
        texto:
          "Stonehenge empezó siendo un cementerio con foso y postes de madera. Las piedras " +
          "llegaron quinientos años después, a un sitio que ya era sagrado.",
      },
      {
        b: "rotulo",
        texto:
          "La imagen del druida entre las piedras la inventó un libro de 1740",
      },
      {
        b: "parrafo",
        texto:
          "Casi todo el mundo asocia Stonehenge con los druidas. La asociación es tan fuerte que " +
          "hoy se celebran allí ceremonias druídicas, y sin embargo no hay ni una sola prueba de " +
          "que los druidas tuvieran nada que ver con el monumento.",
      },
      {
        b: "parrafo",
        texto:
          "El problema es de calendario. Los druidas aparecen en la segunda mitad del primer " +
          "milenio antes de Cristo, hace unos dos mil cuatrocientos años. Stonehenge se construyó " +
          "hace entre cuatro mil y cinco mil. Cuando el primer druida del que tenemos noticia " +
          "pisó Gran Bretaña, aquellas piedras llevaban en pie unos dos mil años, más o menos la " +
          "distancia que nos separa a nosotros del Imperio romano.",
      },
      {
        b: "parrafo",
        texto:
          "¿De dónde sale entonces la imagen? Es simple: <strong>de un error del siglo " +
          "XVIII</strong>. Cuando se aceptó que el monumento lo habían levantado los antiguos " +
          "britanos, los únicos antiguos britanos de los que se tenía noticia escrita eran los " +
          "druidas, así que se les atribuyó. John Aubrey lo sugirió en el siglo XVII y William " +
          "Stukeley lo consolidó en 1740 con un libro cuyo título ya lo dice todo: " +
          "<em>Stonehenge, un templo restaurado a los druidas británicos</em>.",
      },
      {
        b: "parrafo",
        texto:
          "Hay además un detalle que lo desmonta desde dentro. Los autores clásicos que " +
          "describieron a los druidas los sitúan celebrando sus ritos en claros de bosque, entre " +
          "árboles. Ninguno los relaciona con monumentos de piedra.",
      },
      {
        b: "rayo",
        texto:
          "Los druidas llegaron dos mil años tarde a Stonehenge. La conexión no la hizo la " +
          "arqueología: la hizo un anticuario del siglo XVIII que no tenía otro candidato a mano.",
      },
      {
        b: "cita",
        texto:
          "Los autores clásicos se referían a los antiguos druidas practicando el culto " +
          "únicamente en bosquecillos. No hay mención alguna de un vínculo entre los druidas y " +
          "los monumentos de piedra.",
      },
      {
        b: "parrafo",
        texto:
          "— Mike Parker Pearson, arqueólogo",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Antes de los druidas hubo un candidato aún peor. Hacia 1136, Godofredo " +
          "de Monmouth escribió que las piedras formaban un círculo llamado la Danza de los " +
          "Gigantes, en el monte Killaraus de Irlanda, y que el mago Merlín las desmontó y las " +
          "trajo hasta la llanura de Salisbury. Esa fue la explicación que circuló durante " +
          "siglos.",
      },
    ],
  },
  {
    id: "quien-fue-cleopatra",
    titulo: "Quién fue Cleopatra",
    categoria: "Historia",
    color: "var(--clay)",
    /* Serie «quien-fue-cleopatra», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «No era egipcia: era griega, y de una familia macedonia» */
    encargo: "No era egipcia: era griega, y de una familia macedonia",
    fotos: [
      {
        local: p_quien_fue_cleopatra,
        autor: "",
        licencia: "Pexels License",
        alt:
          "No era egipcia: era griega, y de una familia macedonia",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Trescientos años de reyes griegos gobernando Egipto",
      },
      {
        b: "parrafo",
        texto:
          "La imagen que casi todo el mundo tiene de Cleopatra es la de una reina egipcia, " +
          "heredera de los faraones. Y en el sentido político lo era: gobernó Egipto y se " +
          "presentó ante su pueblo como reina egipcia. En el sentido familiar, no lo era en " +
          "absoluto.",
      },
      {
        b: "parrafo",
        texto:
          "Cleopatra pertenecía a la <strong>dinastía ptolemaica</strong>, fundada por un general " +
          "macedonio de Alejandro Magno que se quedó con Egipto al repartirse el imperio tras su " +
          "muerte. Esa familia gobernó el país entre el 323 y el 30 antes de Cristo, y era " +
          "étnicamente griega.",
      },
      {
        b: "parrafo",
        texto:
          "Casi tres siglos de reyes griegos, con nombres griegos, hablando griego entre ellos, " +
          "gobernando desde Alejandría un país cuya población hablaba egipcio.",
      },
      {
        b: "rayo",
        texto:
          "Cleopatra estaba tan lejos de los constructores de las pirámides como nosotros lo " +
          "estamos de ella. Entre Keops y Cleopatra hay más siglos que entre Cleopatra y hoy.",
      },
      {
        b: "rotulo",
        texto:
          "Ella aprendió el idioma del país, y sus antepasados no",
      },
      {
        b: "parrafo",
        texto:
          "¿Y qué la distinguió de los suyos? Aquí está el detalle que dice más sobre su cabeza " +
          "política que cualquier anécdota romántica.",
      },
      {
        b: "parrafo",
        texto:
          "Los ptolomeos anteriores habían gobernado Egipto durante siglos <strong>sin llegar a " +
          "aprender la lengua egipcia</strong>. No les hacía falta: la administración funcionaba " +
          "en griego, la corte era griega y el país se gestionaba desde arriba.",
      },
      {
        b: "parrafo",
        texto:
          "Cleopatra sí la aprendió, y llegó a hablarla con soltura, además del griego que era su " +
          "lengua materna y de varias más. Y esa decisión encaja con todo lo demás que hizo: se " +
          "presentó ante los egipcios con la iconografía de sus reinas, participó en sus cultos y " +
          "se hizo representar como una de ellos.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en lo que significa. No fue un gesto sentimental ni un capricho de erudita. Fue " +
          "entender que se puede gobernar un país durante trescientos años sin hablar su idioma, " +
          "y que hacerlo tiene un coste que en algún momento se paga.",
      },
      {
        b: "rayo",
        texto:
          "La primera de su familia en molestarse en aprender la lengua del país que gobernaba " +
          "fue también la última que lo gobernó.",
      },
    ],
  },
  {
    id: "quien-fue-isaac-newton",
    titulo: "Quién fue Isaac Newton",
    categoria: "Historia",
    color: "var(--teal)",
    /* Serie «quien-fue-isaac-newton», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Lo de la manzana es verdad, y no le cayó en la cabeza» */
    encargo: "Lo de la manzana es verdad, y no le cayó en la cabeza",
    fotos: [
      {
        local: p_quien_fue_isaac_newton,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Lo de la manzana es verdad, y no le cayó en la cabeza",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La anécdota tiene fuente, y la fuente es él mismo",
      },
      {
        b: "parrafo",
        texto:
          "Hay dos posturas habituales sobre la manzana de Newton, y las dos fallan. Una es " +
          "contarla como si fuera un hecho establecido y el golpe le hubiera dado la idea. La " +
          "otra es despacharla como una leyenda inventada por sus biógrafos.",
      },
      {
        b: "parrafo",
        texto:
          "La verdad está documentada. <strong>William Stukeley</strong>, médico y anticuario, " +
          "era amigo de Newton en sus últimos años, y en 1726 —Newton tenía ochenta y tres— dejó " +
          "escrito lo que el propio Newton le contó una tarde, en el jardín, tomando el té bajo " +
          "unos manzanos:",
      },
      {
        b: "cita",
        texto:
          "Me dijo que estaba en la misma situación que cuando, tiempo atrás, le vino a la cabeza " +
          "la noción de la gravitación. ¿Por qué esa manzana desciende siempre perpendicularmente " +
          "al suelo?, pensó para sí; ocasionado por la caída de una manzana, mientras estaba " +
          "sentado en actitud contemplativa.",
        autor: "William Stukeley, 1726",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en los detalles. Estaba sentado. La manzana cayó al suelo, no sobre él. Y la " +
          "pregunta que se hizo no fue por qué cae, sino <strong>por qué cae siempre en línea " +
          "recta hacia abajo</strong>.",
      },
      {
        b: "rayo",
        texto:
          "La anécdota no es falsa: es que se cuenta mal. No hubo un golpe ni una revelación. " +
          "Hubo alguien mirando algo corriente y preguntándose por qué siempre pasa igual.",
      },
      {
        b: "rotulo",
        texto:
          "La pregunta buena no era la que parece",
      },
      {
        b: "parrafo",
        texto:
          "¿Y por qué esa formulación importa tanto? Es simple: <strong>la caída de la manzana no " +
          "era ningún misterio, y él no estaba investigando eso</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Que las cosas caen lo sabía todo el mundo. Lo que Newton se preguntó fue por qué la " +
          "manzana se dirige exactamente hacia el centro de la Tierra, y de ahí saltó a otra " +
          "pregunta mucho más ambiciosa: si esa atracción llega hasta lo alto del árbol, ¿por qué " +
          "iba a detenerse ahí? ¿Y si llegara hasta la Luna?",
      },
      {
        b: "parrafo",
        texto:
          "Ese es el salto. Unir la caída de una fruta con el movimiento de un satélite, y " +
          "sostener que son el mismo fenómeno operando a escalas distintas. Nadie había propuesto " +
          "que la física del huerto y la física del cielo fueran la misma física.",
      },
      {
        b: "rayo",
        texto:
          "El mérito no fue notar que la manzana cae. Fue sospechar que la Luna también está " +
          "cayendo, y no ha parado nunca.",
      },
    ],
  },
  {
    id: "quien-fue-la-persona-mas-rica-del-mundo",
    titulo: "Quién fue la persona más rica",
    categoria: "Historia",
    color: "var(--sage)",
    /* Serie «quien-fue-la-persona-mas-rica-del-mundo», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La pregunta no tiene una respuesta: tiene doce» */
    encargo: "La pregunta no tiene una respuesta: tiene doce",
    fotos: [
      {
        local: p_quien_fue_la_persona_mas_rica_del_mundo,
        autor: "",
        licencia: "Pexels License",
        alt:
          "La pregunta no tiene una respuesta: tiene doce",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Comparar dinero entre siglos no es una cuenta, es una elección",
      },
      {
        b: "parrafo",
        texto:
          "Parece una de esas preguntas que solo necesitan que alguien se moleste en buscar el " +
          "dato. Y sin embargo no existe la cifra, porque no existe la operación.",
      },
      {
        b: "parrafo",
        texto:
          "Los economistas que se dedican a convertir cantidades históricas a dinero de hoy lo " +
          "dicen sin ambigüedad: la respuesta depende de qué estés preguntando en realidad. El " +
          "proyecto académico <em>MeasuringWorth</em> no ofrece una conversión, sino <strong>doce " +
          "medidas distintas</strong>, y ninguna es la correcta porque cada una contesta una " +
          "pregunta diferente. Puedes preguntar cuántas cosas se compraban con aquel dinero, o " +
          "qué parte de toda la economía de su época representaba, o cuántas jornadas de trabajo " +
          "ajeno pagaba. Son tres preguntas legítimas y dan tres números que no se parecen.",
      },
      {
        b: "parrafo",
        texto:
          "Y en cuanto lo aplicas a una fortuna antigua, la diferencia deja de ser técnica. " +
          "Alguien que controlaba una décima parte de la economía conocida sale altísimo en una " +
          "medida y modesto en otra, porque aquella economía entera era pequeña comparada con la " +
          "de hoy.",
      },
      {
        b: "rayo",
        texto:
          "No es que falte el dato. Es que la pregunta, tal y como está formulada, no define una " +
          "operación.",
      },
      {
        b: "rotulo",
        texto:
          "Antes de los bancos, ser rico no era tener una cifra",
      },
      {
        b: "parrafo",
        texto:
          "Hay una segunda razón, y es todavía más de fondo. La idea de patrimonio como un número " +
          "—lo que tienes, sumado y expresado en una moneda— es reciente y depende de que existan " +
          "mercados donde todo tenga precio.",
      },
      {
        b: "parrafo",
        texto:
          "Durante casi toda la historia la riqueza no era eso. Era el control de tierras, de " +
          "minas, de rutas, de cosechas y de personas, y ese control no se podía vender ni " +
          "convertir en efectivo. Augusto no tenía una cuenta: administraba un imperio y su " +
          "propio patrimonio se confundía con el del Estado. Un emperador de Malí no poseía oro " +
          "guardado en un sitio: poseía el territorio donde estaba el oro y el derecho a quedarse " +
          "con parte de lo que se extraía.",
      },
      {
        b: "parrafo",
        texto:
          "Fíjate en lo que eso implica. Preguntar cuánto valía la fortuna de alguien así es como " +
          "preguntar cuánto vale un país: puedes inventarte una respuesta, pero no hay comprador " +
          "ni mercado, y sin comprador no hay precio.",
      },
      {
        b: "rayo",
        texto:
          "Las fortunas antiguas no eran cantidades de dinero. Eran cantidades de poder, y el " +
          "poder no cotiza.",
      },
    ],
  },
  {
    id: "quien-fue-leonardo-da-vinci",
    titulo: "Quién fue Leonardo da Vinci",
    categoria: "Historia",
    color: "var(--clay)",
    /* Serie «quien-fue-leonardo-da-vinci», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Leonardo terminó menos de veinticinco cuadros en toda su vida» */
    encargo: "Leonardo terminó menos de veinticinco cuadros en toda su vida",
    fotos: [
      {
        local: p_quien_fue_leonardo_da_vinci,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Leonardo terminó menos de veinticinco cuadros en toda su vida",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La obra pictórica del pintor más famoso del mundo cabe en una sala",
      },
      {
        b: "parrafo",
        texto:
          "Del artista más célebre de la historia uno espera una producción abrumadora. Los " +
          "números son justo lo contrario.",
      },
      {
        b: "parrafo",
        texto:
          "A Leonardo se le atribuyen <strong>menos de veinticinco obras mayores</strong>, y " +
          "varias de ellas quedaron sin terminar. Para una carrera de casi cincuenta años, eso " +
          "significa una media que no llega al cuadro por bienio.",
      },
      {
        b: "parrafo",
        texto:
          "Detente en la comparación con cualquier otro nombre grande de su siglo, porque el " +
          "contraste es brutal. Sus contemporáneos producían decenas o cientos de obras; los " +
          "talleres del Renacimiento funcionaban como empresas y entregaban encargos en serie. " +
          "Leonardo entregaba muy poco, tarde, y a veces no entregaba.",
      },
      {
        b: "rayo",
        texto:
          "El pintor más famoso de la historia es también uno de los menos productivos que se " +
          "conocen. Su fama no descansa en la cantidad, sino en que casi todo lo poco que hizo " +
          "cambió algo.",
      },
      {
        b: "rotulo",
        texto:
          "No es que no trabajara: es que estaba haciendo otra cosa",
      },
      {
        b: "parrafo",
        texto:
          "La explicación no es la pereza ni el bloqueo, y está documentada con una precisión " +
          "abrumadora: se conservan <strong>13.000 páginas</strong> de notas y dibujos suyos.",
      },
      {
        b: "parrafo",
        texto:
          "Trece mil páginas. Un hombre que llena trece mil páginas de anotaciones no es un " +
          "hombre que no trabaje. Es un hombre que dedica su tiempo a otra cosa distinta de " +
          "terminar encargos.",
      },
      {
        b: "parrafo",
        texto:
          "En esas páginas hay estudios de anatomía, de hidráulica, de vuelo, de botánica, de " +
          "óptica, de geología, de máquinas de guerra y de arquitectura, mezclados con listas de " +
          "la compra y con recordatorios personales. La pintura aparece en ellas como uno más de " +
          "sus asuntos, y no siempre el que más espacio ocupa.",
      },
      {
        b: "parrafo",
        texto:
          "Ahí está el orden real de sus prioridades, que no es el que le hemos asignado después. " +
          "Nosotros lo hemos convertido en un pintor que además tenía curiosidad por todo. Sus " +
          "propios papeles describen a alguien interesado en todo que además, de vez en cuando, " +
          "pintaba.",
      },
      {
        b: "rayo",
        texto:
          "Trece mil páginas de cuadernos y menos de veinticinco cuadros. El reparto de su tiempo " +
          "lo dejó escrito él, y no se parece a la biografía que le hemos hecho.",
      },
      {
        b: "parrafo",
        texto:
          "¿Sabías que…? Escribía en espejo, de derecha a izquierda y con las letras invertidas, " +
          "en casi todos esos cuadernos. Durante siglos se ha visto como una forma de ocultar sus " +
          "ideas, pero la explicación más aceptada es mucho más simple: era zurdo, y escribiendo " +
          "en esa dirección probablemente le resultaba más cómodo.",
      },
    ],
  },
  {
    id: "quien-fue-nikola-tesla",
    titulo: "Quién fue Nikola Tesla",
    categoria: "Historia",
    color: "var(--ochre)",
    /* Serie «quien-fue-nikola-tesla», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Lo que hizo de verdad fue resolver un problema de motores» */
    encargo: "Lo que hizo de verdad fue resolver un problema de motores",
    fotos: [
      {
        local: p_quien_fue_nikola_tesla,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Lo que hizo de verdad fue resolver un problema de motores",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El problema que tenía la electricidad en 1887",
      },
      {
        b: "parrafo",
        texto:
          "De Tesla circula tanto material exagerado que su logro real ha quedado sepultado, y es " +
          "una lástima, porque el logro real es enorme y se puede explicar entero.",
      },
      {
        b: "parrafo",
        texto:
          "En la década de 1880 la electricidad tenía un cuello de botella. La corriente " +
          "continua, que era la que defendía Edison, funcionaba bien pero pierde mucha energía al " +
          "viajar, así que había que poner una central cada pocos kilómetros. La corriente " +
          "alterna, en cambio, se puede transportar lejos con poca pérdida.",
      },
      {
        b: "parrafo",
        texto:
          "El problema era que con corriente alterna no había forma decente de mover un motor. Y " +
          "sin motores, la electricidad servía para iluminar y para poco más.",
      },
      {
        b: "rayo",
        texto:
          "La discusión entre corriente continua y alterna no la ganó el mejor argumento. La ganó " +
          "quien consiguió que la alterna moviera máquinas.",
      },
      {
        b: "rotulo",
        texto:
          "La solución fue hacer girar el campo magnético, no las piezas",
      },
      {
        b: "parrafo",
        texto:
          "En 1887 Tesla desarrolló el <strong>motor de inducción de corriente alterna</strong>, " +
          "y en 1888 se le concedieron las dos patentes básicas de su motor polifásico. Después " +
          "presentó unas tres docenas más antes de 1891.",
      },
      {
        b: "parrafo",
        texto:
          "La idea, dicha en una frase: cada polo electromagnético del estátor lleva varios " +
          "devanados, y por cada uno circula corriente alterna <strong>desfasada</strong> " +
          "respecto a la de los demás. Al ir alcanzando su máximo unos después de otros, entre " +
          "todos producen un campo magnético que gira sin que se mueva ninguna pieza. Ese campo " +
          "giratorio arrastra al rotor, y el rotor gira sin necesidad de escobillas ni contactos " +
          "que se desgasten.",
      },
      {
        b: "parrafo",
        texto:
          "De ahí salen las cuatro virtudes que lo impusieron: economía, durabilidad, facilidad " +
          "de manejo y seguridad.",
      },
      {
        b: "parrafo",
        texto:
          "George Westinghouse compró las patentes de corriente alterna de Tesla en julio de " +
          "1888, y en menos de un año vendía el primer electrodoméstico comercial que funcionaba " +
          "con ella: un ventilador con un motor de ciento veinticinco vatios.",
      },
      {
        b: "rayo",
        texto:
          "Casi todos los motores industriales del mundo siguen siendo motores de inducción. Es " +
          "un invento de hace más de un siglo que nadie ha necesitado sustituir.",
      },
    ],
  },
  {
    id: "quien-invento-el-futbol",
    titulo: "Quién inventó el fútbol",
    categoria: "Historia",
    color: "var(--plum)",
    /* Serie «quien-invento-el-futbol», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Lo que se inventó en 1863 no fue el juego, fueron las reglas» */
    encargo: "Lo que se inventó en 1863 no fue el juego, fueron las reglas",
    fotos: [
      {
        local: p_quien_invento_el_futbol,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Lo que se inventó en 1863 no fue el juego, fueron las reglas",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Doce clubes, seis reuniones y cuarenta y cuatro días",
      },
      {
        b: "parrafo",
        texto:
          "El lunes 26 de octubre de 1863, por la noche, doce clubes se reunieron en la taberna " +
          "Freemasons de Great Queen Street, en Londres. Barnes, Crusaders, Crystal Palace, " +
          "Blackheath, Surbiton, Charterhouse, la oficina de Guerra y varios colegios. De aquella " +
          "reunión salió la <strong>Football Association</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "El problema que iban a resolver no era que faltara un juego. El juego existía y se " +
          "practicaba en toda Inglaterra. El problema era que cada colegio y cada club jugaba con " +
          "sus propias reglas, y por eso dos equipos de sitios distintos no podían enfrentarse " +
          "sin discutir antes qué estaba permitido. Un partido entre desconocidos era, " +
          "literalmente, una negociación.",
      },
      {
        b: "parrafo",
        texto:
          "Hicieron falta seis reuniones en cuarenta y cuatro días. Las reglas quedaron aprobadas " +
          "el 8 de diciembre de 1863: trece leyes, redactadas por Ebenezer Morley, primer " +
          "secretario de la asociación.",
      },
      {
        b: "rayo",
        texto:
          "Nadie inventó el fútbol en 1863. Lo que se inventó fue la posibilidad de que dos " +
          "equipos que no se conocían jugaran el mismo partido.",
      },
      {
        b: "rotulo",
        texto:
          "Aquellas trece leyes no describen el fútbol que conoces",
      },
      {
        b: "parrafo",
        texto:
          "¿Y qué decían exactamente? Vale la pena leerlas, porque la mitad de lo que hoy parece " +
          "esencial no estaba, y varias cosas que hoy parecen imposibles sí.",
      },
      {
        b: "parrafo",
        texto:
          "La ley novena era tajante: ningún jugador podía llevar el balón en las manos. La " +
          "undécima prohibía lanzarlo o pasarlo con la mano. La duodécima impedía recogerlo del " +
          "suelo. Hasta ahí, reconocible.",
      },
      {
        b: "parrafo",
        texto:
          "Pero la ley octava permitía <strong>atrapar el balón al vuelo</strong>. Un jugador que " +
          "hacía una recepción limpia podía marcar el punto con el tacón y reclamar un tiro libre " +
          "desde allí. Es decir: en el fútbol original se podía coger el balón con las manos, " +
          "siempre que viniera por el aire y no se corriera con él.",
      },
      {
        b: "parrafo",
        texto:
          "Y la portería era otra cosa distinta. La ley primera la definía como dos postes " +
          "verticales separados ocho yardas, «sin ninguna cinta ni barra que los cruce». La " +
          "cuarta remataba la idea: había gol cuando el balón pasaba entre los postes «a " +
          "cualquier altura». Nada de travesaño y nada de altura máxima: un disparo que hoy se " +
          "iría diez metros por encima era gol.",
      },
      {
        b: "rayo",
        texto:
          "El reglamento de 1863 no fijó el fútbol: abrió una discusión que sigue abierta ciento " +
          "sesenta años después.",
      },
    ],
  },
  {
    id: "quien-invento-el-submarino",
    titulo: "Quién inventó el submarino",
    categoria: "Tecnología",
    color: "var(--teal)",
    /* Serie «quien-invento-el-submarino», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El primer submarino navegable es de 1620» */
    encargo: "El primer submarino navegable es de 1620",
    fotos: [
      {
        local: p_quien_invento_el_submarino,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El primer submarino navegable es de 1620",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Lo construyó un holandés al servicio del rey de Inglaterra",
      },
      {
        b: "parrafo",
        texto:
          "La fecha descoloca a casi todo el mundo, porque el submarino se asocia a las guerras " +
          "mundiales y en realidad es anterior a la máquina de vapor.",
      },
      {
        b: "parrafo",
        texto:
          "El primer sumergible del que existe información fiable sobre su construcción lo diseñó " +
          "y lo construyó en <strong>1620</strong> <strong>Cornelis Drebbel</strong>, un holandés " +
          "al servicio de Jacobo I de Inglaterra. Mil seiscientos veinte. Ese mismo año, los " +
          "peregrinos del Mayflower estaban desembarcando en América.",
      },
      {
        b: "parrafo",
        texto:
          "Funcionaba, se sumergía y no sirvió para nada durante siglo y medio.",
      },
      {
        b: "rayo",
        texto:
          "El submarino no es una tecnología del siglo XX que se adelantó a su tiempo. Es una " +
          "tecnología del siglo XVII que tardó trescientos años en encontrar para qué servía.",
      },
      {
        b: "rotulo",
        texto:
          "Del primero al primero que hundió algo pasaron dos siglos y medio",
      },
      {
        b: "parrafo",
        texto:
          "La línea militar tiene sus propias fechas, y también son lentas.",
      },
      {
        b: "parrafo",
        texto:
          "El primer sumergible militar fue el <strong>Turtle</strong>, de 1775: un artefacto con " +
          "forma de bellota, propulsado a mano, diseñado por el estadounidense <strong>David " +
          "Bushnell</strong> para llevar a una sola persona. Se usó en la guerra de Independencia " +
          "estadounidense y no consiguió hundir nada.",
      },
      {
        b: "parrafo",
        texto:
          "Hubo que esperar hasta <strong>1864</strong>, ya al final de la Guerra de Secesión, " +
          "para que el <strong>H. L. Hunley</strong>, de la marina confederada, se convirtiera en " +
          "el primer submarino militar que hundió un buque enemigo: la corbeta de la Unión " +
          "<strong>USS Housatonic</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Pon las fechas en fila: 1620 el primero que navegó, 1775 el primero militar, 1864 el " +
          "primero que hundió algo. Doscientos cuarenta y cuatro años entre la primera inmersión " +
          "y el primer resultado.",
      },
      {
        b: "parrafo",
        texto:
          "Y conviene añadir lo que costó ese único éxito. El Hunley se hundió con los ocho " +
          "hombres de aquella tripulación inmediatamente después del ataque, y no se encontró " +
          "hasta más de cien años después. No era la primera vez: ya se había hundido en unas " +
          "pruebas en agosto de 1863, matando a cinco, y otra vez en octubre del mismo año, " +
          "matando a los ocho de a bordo, entre ellos el propio Horace Hunley, que le daba " +
          "nombre. En total murieron 21 tripulantes en los tres hundimientos de su corta carrera.",
      },
      {
        b: "rayo",
        texto:
          "El primer submarino que hundió un barco enemigo se hundió el mismo día y con toda su " +
          "gente dentro. Costó veintiún muertos conseguir uno, y el marcador quedó en un empate " +
          "que nadie quería.",
      },
    ],
  },
  {
    id: "steve-jobs",
    titulo: "Steve Jobs",
    categoria: "Historia",
    color: "var(--clay)",
    /* Serie «steve-jobs», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «A Steve Jobs no lo echaron de Apple: perdió un pulso y dimitió» */
    encargo: "A Steve Jobs no lo echaron de Apple: perdió un pulso y dimitió",
    fotos: [
      {
        local: p_steve_jobs,
        autor: "",
        licencia: "Pexels License",
        alt:
          "A Steve Jobs no lo echaron de Apple: perdió un pulso y dimitió",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El consejo se puso del lado del director general, no del fundador",
      },
      {
        b: "parrafo",
        texto:
          "La versión que se repite es que Apple echó a la calle al hombre que la había fundado. " +
          "Lo que ocurrió de verdad es algo más incómodo y bastante más interesante.",
      },
      {
        b: "parrafo",
        texto:
          "En mayo de 1985, el director general de Apple, <strong>John Sculley</strong>, propuso " +
          "apartar a Jobs de la división del Macintosh. Jobs respondió preparando la maniobra " +
          "contraria, es decir, sacar a Sculley de la empresa. El plan se filtró antes de " +
          "ejecutarse, y a partir de ahí el pulso estaba resuelto: el consejo no se puso de su " +
          "parte.",
      },
      {
        b: "parrafo",
        texto:
          "Jobs presentó su carta de dimisión al consejo de Apple el 17 de septiembre de 1985. No " +
          "fue un despido, fue una renuncia después de quedarse sin poder efectivo dentro de la " +
          "empresa. Y el detalle que redondea el episodio es quién era Sculley. Había llegado a " +
          "Apple en abril de 1983 fichado por el propio Jobs, que se empeñó en sacarlo de PepsiCo " +
          "con una de las frases más citadas de la historia de la empresa.",
      },
      {
        b: "cita",
        texto:
          "¿Quieres pasarte el resto de tu vida vendiendo agua azucarada, o quieres venir conmigo " +
          "y cambiar el mundo?",
        autor: "Steve Jobs, a John Sculley",
      },
      {
        b: "parrafo",
        texto:
          "Con 7 millones de dólares fundó a continuación <strong>NeXT</strong>, una empresa de " +
          "ordenadores para universidades y centros de investigación. Tenía treinta años.",
      },
      {
        b: "rayo",
        texto:
          "Jobs no perdió Apple por un enfrentamiento con un enemigo externo. La perdió contra el " +
          "ejecutivo que él mismo había convencido para que se incorporara.",
      },
      {
        b: "rotulo",
        texto:
          "Volvió once años después porque Apple tuvo que comprarle su empresa",
      },
      {
        b: "parrafo",
        texto:
          "Aquí es donde la historia se vuelve casi improbable, y donde conviene mirar las fechas " +
          "antes que los relatos.",
      },
      {
        b: "parrafo",
        texto:
          "Apple pasó la primera mitad de los años noventa buscando un sistema operativo moderno " +
          "que sustituyera al suyo, ya viejo, y no conseguía terminarlo por sus propios medios. " +
          "La solución que encontró fue comprar uno hecho. En diciembre de 1996 cerró un acuerdo " +
          "con NeXT por 400 millones de dólares, y la operación se completó en febrero de 1997.",
      },
      {
        b: "parrafo",
        texto:
          "Ese acuerdo no era, sobre el papel, una recontratación. Era la compra de una empresa " +
          "de software. Pero con el software venía su dueño, y con su dueño volvió a la compañía " +
          "el hombre que se había marchado once años antes.",
      },
      {
        b: "parrafo",
        texto:
          "Es decir: Apple no llamó a Jobs para que volviera. Compró la empresa que él había " +
          "montado con el dinero que se llevó al irse, y lo recuperó de rebote.",
      },
      {
        b: "rayo",
        texto:
          "El hombre que salió de Apple sin poder volvió a entrar como propietario de algo que " +
          "Apple necesitaba. Entre las dos fechas hay once años y una empresa entera fundada por " +
          "el camino.",
      },
    ],
  },
];
