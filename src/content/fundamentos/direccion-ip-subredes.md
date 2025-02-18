---
title: Direccion IP y subredes
---
# Direcciones Ip y Subredes


## Diferencia del Switch mode dynamic desirable/auto

```
switchport mode dynamic desirable
```
Dice:
“Pregunta al otro extremo si quiere hacer trunk usando DTP y establece trunk si la negociación tiene éxito. Si la negociación DTP falla, entonces conviértete en un puerto de acceso.”

```
switchport mode dynamic auto
```
Dice:
“Si el otro extremo me pide que haga trunk con DTP, entonces me convertiré en trunk, pero no iniciaré ninguna negociación desde este extremo. Si nadie me pide ser trunk, entonces me convertiré en un puerto de acceso.”


Basicamente aca podemos ver diferentes maneras de configurar los puertos para que pasen de modo access, a modo trunk



-----------------------------------------------------------------
Spanning Tree Protocol (STP) y Rapid Spanning Tree Protocol (RSTP)

STP/RSTP previene los bucles de frames agragando una verificacion
adiciona en cada interfaz antes de enviar o recibir frames.

La verificacion seria:

Si el puerto esta en estado de `forwarding` utilizelo como normal
Si el puerto esta en estado de `blocking` bloquea todo trafico y
no reciba ni envia frames en esa interfaz de esa vlan


Los tres problemas principales que ocurren si no implementamos STP/RSTP son:

Broadcast storms
MAC table instability
Multiple frame transmission


STP/RSTP utiliza 3 criterios para elegir si se debe poner una interfaz en forwarding

 - STP elije un SWITCH 'ROOT'. Todas las interfaces de este switch se ponen en forwarding
 - Cada Switch 'NO ROOT' considera uno de sus puertos tener el menor cost administrativo entre si mismo
  y y el SWITCH ROOT. STP coloca su puerto que es parte de la ruta de menor costo raíz, llamada 
 puerto raíz, en reenvío
