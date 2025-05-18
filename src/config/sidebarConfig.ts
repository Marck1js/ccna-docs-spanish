// sidebarConfig.js

interface Topic {
  name: string;
  path?: string;
  route: {
    concept: {
      label?: string;
      path?: string;
    };
  }[];
}

export const sidebarConfigTopic: Topic[] = [
  {
    name: 'Roadmap',
    path: '/roadmap',
    route: [
      {
        concept: {
          label: 'Guia de estudio 2025',
          path: '/roadmap/roadmap'  
        }
      }
    ]
  },
  {
    name: "Fundamentals of Networking",
    path: "/fundamentos",
    route: [
      {
        concept: {
          label: "Conceptos básicos de redes",
          path: "/fundamentos/conceptos-basicos",
        },
      },
      {
        concept: {
          label: "Modelos OSI y TCP/IP",
          path: "/fundamentos/modelos-osi-y-tcpip",
        },
      },
      {
        concept: {
          label: "Tipos de redes (LAN, WAN, etc.)",
          path: "/fundamentos/tipos-de-redes",
        },
      },
      {
        concept: {
          label: "Dirección IP y subredes",
          path: "/fundamentos/direccion-ip-subredes",
        },
      },
    ],
  },
  {
    name: "Network Access",
    path: "",
    route: [
      {
        concept: {
          label: "OSPF",
          path: "/network-access/ospf"
        }
      },
      {
        concept: {
          label: "Configuración de switches",
          path: "/network-access/configuracion-de-switches",
        },
      },
      {
        concept: {
          label: "VLANs y su funcionamiento",
          path: "/network-access/vlan-funcionamiento",
        },
      },
      {
        concept: {
          label: "Troncalización de VLANs",
          path: "/network-access/trunking",
        },
      },
      {
        concept: {
          label: "Protocolos de acceso (STP, RSTP)",
          path: "/network-access/protocolos-de-acceso",
        },
      },
    ],
  },
  {
    name: "IP Connectivity",
    path: "",
    route: [
      {
        concept: {
          label: "Enrutamiento estático y dinámico",
          path: "/ip-connectivity/enrutamiento-estatico-dinamico",
        },
      },
      {
        concept: {
          label: "Protocolos de enrutamiento (RIP, OSPF, EIGRP)",
          path: "/ip-connectivity/protocolos-de-enrutamiento",
        },
      },
      {
        concept: {
          label: "Concepto de rutas y tablas de enrutamiento",
          path: "/ip-connectivity/concepto-de-rutas-y-tablas-de-enrutamiento",
        },
      },
      {
        concept: {
          label: "Direcciones IP públicas y privadas",
          path: "/ip-connectivity/direcciones-ip-publicas-y-privadas",
        },
      },
    ],
  },
  {
    name: "IP Services",
    path: "",
    route: [
      { concept: { label: "DHCP y su configuración", path: "" } },
      {
        concept: { label: "NAT (Traducción de direcciones de red)", path: "" },
      },
      { concept: { label: "DNS y su funcionamiento", path: "" } },
      { concept: { label: "QoS (Calidad de Servicio)", path: "" } },
    ],
  },
  {
    name: "Security Fundamentals",
    path: "",
    route: [
      { concept: { label: "Seguridad en redes", path: "" } },
      { concept: { label: "Lista de control de acceso (ACL)", path: "" } },
      { concept: { label: "VPNs y su configuración", path: "" } },
      { concept: { label: "Seguridad en dispositivos de red", path: "" } },
    ],
  },
  {
    name: "Automation and Programmability",
    path: "",
    route: [
      {
        concept: {
          label: "Introducción a la automatización de redes",
          path: "",
        },
      },
      {
        concept: {
          label: "Herramientas de programación (Python, Ansible)",
          path: "",
        },
      },
      { concept: { label: "APIs y su uso en redes", path: "" } },
      {
        concept: {
          label: "Modelos de red definidas por software (SDN)",
          path: "",
        },
      },
    ],
  },
  {
    name: "Examen y Preparación",
    path: "",
    route: [
      { concept: { label: "Estrategias de estudio", path: "" } },
      { concept: { label: "Simuladores de examen", path: "" } },
      { concept: { label: "Recursos y materiales recomendados", path: "" } },
      { concept: { label: "Consejos para el día del examen", path: "" } },
    ],
  },
];
