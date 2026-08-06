# Qué shorts, en orden de lectura, no tienen sus cuatro imágenes.
# El detector de antes partía los bloques a ojo y se equivocaba; este cuenta
# `archivo:` y `local:` DENTRO del bloque `fotos: [...]` de cada short.
import re, io, sys
s = io.open("src/shorts.ts", encoding="utf8").read()
grupos = [g.strip(",") for g in re.search(r'export const SHORTS: Short\[\] = intercala\(\n((?:\s+[A-Z_0-9]+,\n)+)', s).group(1).split()]
imp = dict(re.findall(r'import \{ ([A-Z_0-9]+) \} from "\./historias/([a-z0-9_]+)"', s))

def bloques(t):
    """Cada short del fichero, del `id:` al `id:` siguiente."""
    ini = [m.start() for m in re.finditer(r'\n  \{\n    id: "', t)]
    for a, b in zip(ini, ini[1:] + [len(t)]):
        yield t[a:b]

def cuantas(b):
    m = re.search(r'\n    fotos: \[', b)
    if not m: return 0
    i = m.end() - 1; prof = 0
    for j in range(i, len(b)):
        if b[j] in "[{": prof += 1
        elif b[j] in "]}":
            prof -= 1
            if not prof: break
    return len(re.findall(r'archivo:|local:', b[i:j]))

cuantos = int(sys.argv[1]) if len(sys.argv) > 1 else 6
n = 0
for g in grupos:
    f = imp.get(g)
    if not f: continue
    t = io.open("src/historias/%s.ts" % f, encoding="utf8").read()
    b = next(bloques(t), "")
    c = cuantas(b)
    if c >= 4: continue
    tit = re.search(r'titulo: "([^"]+)"', b)
    pag = [m.group(1) for m in re.finditer(r'rotulo: "([^"]*)"', b)]
    print("%-20s %d/4  «%s» | %s" % (f, c, tit.group(1), " · ".join(pag)))
    n += 1
    if n >= cuantos: break
