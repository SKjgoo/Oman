#!/usr/bin/env python3
"""يضبط رابط الموقع الفعلي قبل النشر:  python3 tools/set-domain.py https://اسم-موقعك.web.app
- يستبدل YOUR-DOMAIN.web.app في sitemap.xml و robots.txt
- يجعل og:image مطلقًا ويضيف og:url و canonical في كل الصفحات"""
import sys, re, glob, os
if len(sys.argv) != 2 or not sys.argv[1].startswith('http'):
    sys.exit('الاستخدام: python3 tools/set-domain.py https://example.web.app')
base = sys.argv[1].rstrip('/')
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
for f in ('sitemap.xml', 'robots.txt'):
    p = os.path.join(root, f); s = open(p, encoding='utf-8').read()
    open(p, 'w', encoding='utf-8').write(s.replace('https://YOUR-DOMAIN.web.app', base))
for p in glob.glob(os.path.join(root, '*.html')):
    name = os.path.basename(p); s = open(p, encoding='utf-8').read()
    url = base + '/' + ('' if name == 'index.html' else name)
    s = re.sub(r'(<meta property="og:image" content=")(?!http)([^"]+)(")', lambda m: m.group(1) + base + '/' + m.group(2) + m.group(3), s)
    if 'rel="canonical"' not in s and '</head>' in s and name != '404.html':
        s = s.replace('</head>', f'  <link rel="canonical" href="{url}">\n  <meta property="og:url" content="{url}">\n</head>', 1)
    open(p, 'w', encoding='utf-8').write(s)
print('تم ضبط الرابط:', base)
