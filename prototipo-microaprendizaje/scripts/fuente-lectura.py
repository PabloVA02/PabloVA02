# ==========================================================================
#  LA LETRA DE LEER, RECORTADA Y METIDA EN EL CSS
#
#      pip install fonttools brotli
#      python3 scripts/fuente-lectura.py
#
#  Deja en `src/fuentes/` los dos woff2 recortados —redonda y cursiva— y
#  reescribe `src/fuentes.css` con las dos caras metidas dentro como `data:`.
#
#  POR QUÉ DENTRO DEL CSS Y NO COMO FICHERO. Pablo, el 28 de agosto: «cárgala
#  como fuente local en el proyecto, no desde un CDN externo». Y además el
#  simulador que él ve es UN SOLO `movil.html`: cualquier `url()` que apunte a
#  un fichero aparte no existe cuando el artefacto se abre, y la letra caería
#  en la de respaldo sin avisar. En base64 viaja dentro y no puede fallar.
#
#  POR QUÉ VOLLKORN Y NO LITERATA. Pablo pidió Literata, «y si da problemas,
#  Source Serif 4, Newsreader o Vollkorn». Literata da uno y es justo el de su
#  tercer punto: **no tiene cifras de estilo antiguo**. Lo que sirve
#  fonts.gstatic.com no trae la característica `onum`, y sus diez cifras suben
#  a 714 sobre una altura de mayúscula de 700 —o sea, todas de caja alta y
#  ninguna baja de la línea—, que es exactamente lo contrario de lo que él
#  pidió. Comprobado también en las otras dos: Source Serif 4 y Newsreader
#  tampoco las traen. Vollkorn sí, y además AL REVÉS que las demás: las de
#  estilo antiguo son las suyas de serie —cinco de las diez bajan de la línea
#  base— y lo que lleva como característica es `lnum`, para volver a las de
#  caja alta. Así que `font-variant-numeric: oldstyle-nums` no tiene que
#  encender nada: basta con no encender `lnum`.
#
#  POR QUÉ VARIABLE Y NO DOS PESOS. Vollkorn trae el eje `wght`, así que la
#  redonda y la negrita —400 y 700— salen del mismo fichero. Dos ficheros en
#  vez de cuatro, y menos peso que dos estáticos: 46 kB por cara.
#
#  EL RECORTE. Del subconjunto latino de Google sobran las ligaduras y los
#  alfabetos que el español no usa. Se queda lo de abajo, que es todo lo que
#  puede aparecer en un texto de Curva, más el guion blando que mete
#  `silabas.ts`. Y `--layout-features='*'` NO SE QUITA: ahí viven las cifras de
#  estilo antiguo (`onum`), que son lo que pide `font-variant-numeric`. Sin esa
#  bandera, pyftsubset las tira y los números vuelven a ser de interfaz.
# ==========================================================================
import base64, pathlib, subprocess, sys

AQUI = pathlib.Path(__file__).resolve().parent.parent
FUENTES = AQUI / "src" / "fuentes"

# Latín básico y suplemento —con todos los acentos del español, la eñe, las
# aperturas de interrogación y admiración—, el guion blando, la comilla
# tipográfica, la raya, los puntos suspensivos y los símbolos que salen en un
# texto divulgativo: grados, por ciento, ordinales, euro.
LETRAS = (
    "U+0020-007E,U+00A0-00FF,U+00AD,U+0131,U+0152-0153,U+0178,"
    "U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0300-0304,U+0308,U+0327,U+0329,"
    "U+2010-2015,U+2018-201D,U+2020-2022,U+2026,U+2030,U+2039-203A,"
    "U+2044,U+20AC,U+2122,U+2190-2193,U+2212,U+2215,U+FEFF"
)

CARAS = [("normal", "vollkorn-latin-normal.woff2"), ("italic", "vollkorn-latin-italic.woff2")]


def recorta(entrada: pathlib.Path, salida: pathlib.Path) -> None:
    subprocess.run(
        [sys.executable, "-m", "fontTools.subset", str(entrada),
         f"--unicodes={LETRAS}", "--layout-features=*", "--flavor=woff2",
         f"--output-file={salida}"],
        check=True,
    )


def main() -> None:
    trozos = []
    for estilo, nombre in CARAS:
        origen = FUENTES / nombre
        if not origen.exists():
            sys.exit(f"falta {origen}. Se baja de fonts.gstatic.com; ver el README de src/fuentes.")
        corto = FUENTES / nombre.replace(".woff2", "-curva.woff2")
        recorta(origen, corto)
        b64 = base64.b64encode(corto.read_bytes()).decode()
        print(f"  {corto.name}: {origen.stat().st_size // 1024} kB → {corto.stat().st_size // 1024} kB")
        trozos.append(
            "@font-face {\n"
            '  font-family: "Vollkorn";\n'
            f"  font-style: {estilo};\n"
            "  font-weight: 400 700;\n"
            "  font-display: block;\n"
            f'  src: url("data:font/woff2;base64,{b64}") format("woff2-variations");\n'
            "}\n"
        )

    cabecera = (
        "/* ESTE FICHERO LO ESCRIBE `scripts/fuente-lectura.py`. No se edita a mano.\n"
        " *\n"
        " * Vollkorn, de Google, recortada al español y metida aquí en base64. Es la\n"
        " * letra de leer de Curva: una serifa hecha para texto largo y la única de las\n"
        " * cuatro que pidió Pablo que trae cifras de estilo antiguo —de serie, además—.\n"
        " * Va dentro del CSS porque el simulador que él abre es un solo fichero HTML y\n"
        " * un `url()` a un fichero aparte no existiría allí.\n"
        " *\n"
        " * `font-display: block` y no `swap`: el reparto en pantallas se mide con la\n"
        " * letra puesta, y si el navegador pinta primero con la de respaldo, lo que se\n"
        " * mide es otro texto. Ver la regla 1 de `.claude/skills/paginado-shorts`.\n"
        " *\n"
        " * `font-weight: 400 700` en una sola cara: es una fuente variable, así que la\n"
        " * negrita sale del mismo fichero interpolando el eje `wght`. */\n\n"
    )
    (AQUI / "src" / "fuentes.css").write_text(cabecera + "\n".join(trozos), encoding="utf-8")
    print("  src/fuentes.css escrito")


if __name__ == "__main__":
    main()
