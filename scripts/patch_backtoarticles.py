#!/usr/bin/env python3
import glob, io, re, os

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
PAGES_GLOB = os.path.join(ROOT, "src", "components", "pages", "*.tsx")
IMPORT_LINE = 'import BackToArticles from "../ui/BackToAricles";\n'
INSERT_COMPONENT = "</main>\n      <BackToArticles />  {/* ← AUTOMATIQUE */}\n"

for path in glob.glob(PAGES_GLOB):
    with io.open(path, "r", encoding="utf-8") as f:
        text = f.read()
    if "BackToArticles" in text:
        print("Skip (already):", os.path.relpath(path, ROOT))
        continue
    imports = list(re.finditer(r"^import .*;$", text, re.M))
    if imports:
        last = imports[-1]
        insert_pos = last.end()
        text = text[:insert_pos] + "\n" + IMPORT_LINE + text[insert_pos:]
    else:
        text = IMPORT_LINE + text
    if "</main>" in text:
        text = text.replace("</main>", INSERT_COMPONENT, 1)
    else:
        print("Warning: no </main> found in", path)
        continue
    with io.open(path, "w", encoding="utf-8") as f:
        f.write(text)
    print("Patched:", os.path.relpath(path, ROOT))

print("Terminé.")
