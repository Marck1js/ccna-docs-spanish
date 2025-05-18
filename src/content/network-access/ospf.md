# OSPF

El Protocolo OSPF un un protocolo de enrutamiento dinamico, que utiliza el estado de enlace, este se divide en areas
siendo la principal (area 0), conocida como backbone

```bash
    R1(config)# router ospf 1  

    R1(config-router)# network <(Red) 10.0.1.0 > <(WildCard) 0.0.0.255 > <(area) area 0 >
## Ejemplo 
    R1(config-router)# network 10.0.1.0 0.0.0.255 area 0

```

Se dice que cuando el enlace que une dos routers, ambos son adyacentes (vecinos)

utilizando el siguiente comando, podemos ver quiene son nuestros vecinos

```bash

R5# show ip ospf neighbor

-    Neighbor ID     Pri   State           Dead Time   Address         Interface
-     6.6.6.6           1   FULL/DR         00:00:39    10.0.23.2       FastEthernet0/0
-     2.2.2.5           1   FULL/BDR        00:00:33    10.0.10.3       FastEthernet1/1
R5#

```

Los routers que conectan 2 o mas areas se los denomina ABR (Area Border Router)

## Como saber si tengo acceso a cierta red ?

Para saber si podermos alcanzar una red indirectamente (es decir, a traves de un vecino ) utilizamos el siguiente comando

**show ip ospf database**

```bash
R5# show ip ospf database

            OSPF Router with ID (5.5.5.5) (Process ID 1)

                Router Link States (Area 1)

Link ID         ADV Router      Age         Seq#       Checksum Link count
2.2.2.5         2.2.2.5         850         0x8000000B 0x002A7E 2
5.5.5.5         5.5.5.5         1107        0x8000000A 0x00CE8E 3
6.6.6.6         6.6.6.6         1156        0x80000009 0x00C773 3
7.7.7.7         7.7.7.7         998         0x80000008 0x009E63 4
8.8.8.8         8.8.8.8         2984        0x80000009 0x009F66 3

                Net Link States (Area 1)

Link ID         ADV Router      Age         Seq#       Checksum
10.0.10.1       5.5.5.5         1107        0x80000009 0x0037B2
10.0.11.1       7.7.7.7         998         0x80000006 0x003AA1
10.0.15.1       8.8.8.8         2984        0x80000008 0x00DEDD
10.0.18.5       7.7.7.7         997         0x80000006 0x006360
10.0.23.2       6.6.6.6         1156        0x80000008 0x0010BB

                Summary Net Link States (Area 1)

Link ID         ADV Router      Age         Seq#       Checksum
2.2.2.2         2.2.2.5         73          0x8000000F 0x00E038
2.2.2.3         2.2.2.5         850         0x8000000A 0x00D647
2.2.2.5         2.2.2.5         850         0x8000000A 0x00B864
10.0.0.0        2.2.2.5         73          0x8000000F 0x00BA5C
10.0.1.0        2.2.2.5         850         0x8000000A 0x00AF6C
10.0.2.0        2.2.2.5         850         0x8000000A 0x009A81
192.168.1.0     2.2.2.5         73          0x8000000F 0x008A2B
192.168.2.0     2.2.2.5         850         0x8000000A 0x006B51
R5#

```
Los paquetes hello de ospf se envian multicast a la direccion 224.0.0.5 y en un ABR 224.0.0.6


## LSA 
### Hay varios tipos de LSA en OSPF

- LSA Type 1 -> ROUTER LSA - Son locales en el area, no se propagan fuera del area donde se originan


- LSA Type 3 -> Las genera un ABR (router que conecta dos áreas). algo asi se veeria en los paquetes, y la envia a las demas areas.
```bash
Link State ID: 5.5.5.5
Advertising Router: 2.2.2.5

```
