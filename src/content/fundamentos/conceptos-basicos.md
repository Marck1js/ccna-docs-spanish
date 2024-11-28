---
title: Conceptos basicos de redes
---

<!-- # Conceptos Básicos de Redes -->

Las redes son un conjunto de dispositivos interconectados que pueden comunicarse entre sí y compartir recursos. En este documento, exploraremos los conceptos fundamentales que forman la base de la tecnología de redes.

## 1. ¿Qué es una red?

Una red se define como la interconexión de dos o más dispositivos, como computadoras, servidores, impresoras y otros dispositivos, que permiten la comunicación y el intercambio de datos. Las redes pueden variar en tamaño desde una pequeña red local (LAN) hasta grandes redes globales (WAN), como Internet.

## 2. Modelos de referencia

### Modelo OSI

El **Modelo OSI** (Open Systems Interconnection) es un marco conceptual que se utiliza para entender y estandarizar las funciones de comunicación en una red. Se divide en siete capas:

1. **Capa 1 - Física**: Transmisión de datos en forma de señales eléctricas o ópticas.
2. **Capa 2 - Enlace de Datos**: Proporciona la transferencia de datos entre dispositivos en la misma red.
3. **Capa 3 - Red**: Encaminamiento de datos entre diferentes redes.
4. **Capa 4 - Transporte**: Asegura la entrega de datos sin errores y en el orden correcto.
5. **Capa 5 - Sesión**: Maneja las conexiones y sesiones entre aplicaciones.
6. **Capa 6 - Presentación**: Traduce y formatea los datos para la capa de aplicación.
7. **Capa 7 - Aplicación**: Proporciona servicios a las aplicaciones de usuario.

### Modelo TCP/IP

El **Modelo TCP/IP** es otro marco de referencia que se utiliza para la comunicación en redes. A menudo se considera más práctico que el modelo OSI y tiene cuatro capas:

1. **Capa de Aplicación**: Protocolo de aplicación (HTTP, FTP, SMTP).
2. **Capa de Transporte**: Protocolo de transporte (TCP, UDP).
3. **Capa de Internet**: Protocolo de Internet (IP).
4. **Capa de Acceso a la Red**: Protocolo de enlace y físico.

## 3. Tipos de redes

### LAN (Red de Área Local)

Una **LAN** es una red que interconecta dispositivos dentro de un área geográfica limitada, como una oficina o un hogar. Las LANs suelen ofrecer alta velocidad y bajo costo de configuración.

### WAN (Red de Área Amplia)

Una **WAN** abarca áreas geográficas más grandes, conectando redes LAN. Un ejemplo común es Internet, que conecta redes de todo el mundo.

### WLAN (Red de Área Local Inalámbrica)

Una **WLAN** es una red local que utiliza tecnología inalámbrica para conectar dispositivos. Es común en hogares y oficinas, proporcionando flexibilidad y movilidad.

## 4. Dirección IP

Una **dirección IP** (Protocolo de Internet) es un identificador único asignado a cada dispositivo en una red que utiliza el protocolo IP para la comunicación. Existen dos versiones:

- **IPv4**: Utiliza direcciones de 32 bits y se representa en formato decimal (ejemplo: 192.168.1.1).
- **IPv6**: Utiliza direcciones de 128 bits para abordar el agotamiento de direcciones en IPv4, representadas en formato hexadecimal.

## 5. Subredes

Las **subredes** permiten dividir una red mayor en redes más pequeñas, mejorando la organización y la seguridad. Utilizan una máscara de subred para definir qué parte de la dirección IP corresponde a la red y qué parte a los hosts.

## Conclusión

Comprender estos conceptos básicos de redes es fundamental para cualquier profesional que desee trabajar en el ámbito de las tecnologías de la información y la comunicación. Este conocimiento proporciona una base sólida para avanzar hacia temas más avanzados en redes y en la preparación para certificaciones como el CCNA 200-301.



<!--

*Imagen tomada de [https://kevin-linares.blogspot.com]()* -->

![Descripción de la imagen](/img/subredes-prefijo-16.jpg)

<p class="text-sm text-gray-600 italic mt-4">
  Imagen tomada de <a target='_blank' href="https://kevin-linares.blogspot.com/2017/05/division-de-redes-IP-en-subredes-Division-de-una-red-IPv4-en-subredes-Division-de-subredes-con-prefijos-16-y-8.html" class="text-blue-500 hover:text-blue-700">https://kevin-linares.blogspot.com</a>.
</p>


## Secuencia de arranque del Switch

Carga un programa de autodiagnostico al encender, llamado Post
almacenado en la memoria ROM


# Documentacion Externa

<p class="text-sm text-gray-600 italic mt-4">
  # <a target='_blank' href="https://www.cisco.com/c/es_mx/support/docs/interfaces-modules/network-modules/82288-es-mod-config.html" class="text-blue-500 hover:text-blue-700">Cisco Support</a>.
</p>


