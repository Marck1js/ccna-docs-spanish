---
title: Tipos de redes
---

# Tipos de Redes

Existen una variedad de tipos de redes, como por ejemplo

- Red Lan





# OSPF
Estado de Enlace, Concepto de AREAS, eficiente y escalable, soporta el concepto de enrutamietno jerarquico
mediante el uso de area. 

## Area
Un area en OSPF en un grupo de routers que comparte la misma informacion de estado de los enlaces y en sus
bases de datos de estado de los enlaces,
Por defecto, cada interfaz de un router solo puede perternecer a un area de OSPF

### OSPF MultiArea
Cuando utilizamos OSPF con areas difetentees en una configuracion jerarquica, todas las areas deben conectarse
al area 0, (backbone)

Los routers que interconectar las areas con el area 0, se los conocen como Area Border Routers (ABR) 

# Interfaz Loopback

¡Sí, exacto! Aquí va una definición breve y clara:

La interfaz loopback es una interfaz virtual de capa 3 usada principalmente para identificar de forma única al dispositivo en la red y facilitar configuraciones estables en protocolos como OSPF o BGP.

🧩 En resumen:
Virtual, no depende del hardware.

Siempre activa, a menos que la desactives manualmente.

Ideal para asignar el Router ID.

No cambia aunque caigan las interfaces físicas.

Usada en pruebas (ping, traceroute) y gestión.