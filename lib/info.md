---
layout: 'default'
block: 'true'
permalink: 'page-info'
---

# Site Info

- Path: {{ page.path }}
- URL: {{ page.url }}

### Time

#### Site Time

- Time: {{ site.time }}
- Long Format: {{ site.time | date_to_long_string }}
- RFC-822: {{ site.time | date_to_rfc822 }}
- String: {{ site.time | date_to_string }}
- ISO 8601: {{ site.time | date_to_xmlschema }}

### Pages

{% for page in site.pages %}

- [{{ site.url || site.host }}/{{ page.path }}]({{ site.url || site.host }}/{{ page.path }})
  {% endfor %}

## Static Pages

{% for file in site.static_files %}

- [{{ site.url || site.host }}{{ file.path }}]({{ site.url || site.host }}{{ file.path }})
  {% endfor %}
