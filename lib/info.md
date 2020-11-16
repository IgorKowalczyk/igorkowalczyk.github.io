---
layout: "default"
---

# Site Info

- Path: {{ page.path }}
- Url: {{ page.url }}

### Time
#### Site Time
- Time: {{ site.time }}
- Long Format: {{ site.time | date_to_long_string }}
- RFC-822: {{ site.time | date_to_rfc822 }}
- String: {{ site.time | date_to_string }}
- ISO 8601: {{ site.time | date_to_xmlschema }}

#### Page Time
- Time: {{ page.time }}
- Long Format: {{ page.time | date_to_long_string }}
- RFC-822: {{ page.time | date_to_rfc822 }}
- String: {{ page.time | date_to_string }}
- ISO 8601: {{ page.time | date_to_xmlschema }}

### Pages
{% for page in site.pages %}
- {{ page.path }}
{% endfor %}

## Static Pages
{% for file in site.static_files %}
- {{ file.path }}
{% endfor %}
