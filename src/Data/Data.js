import { Link } from "react-router-dom";
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
} from "@iconscout/react-unicons";

// Sidebar Data
export const SidebarData = [
  {
    path: "/.",
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    path: "/tambahagenda",
    icon: UilClipboardAlt,
    heading: "Tambah Agenda",
  },
  {
    path: "/users",
    icon: UilUsersAlt,
    heading: "Users",
  },
  {
    path: "/daftarpiket",
    icon: UilPackage,
    heading: "Daftar Piket",
  },
  {
    path: "/tambahpiket",
    icon: UilPackage,
    heading: "Tambah Piket",
  },
];

const link1 = () => {
  <Link to="<SidebarData [0]>">Dashboard</Link>;
};
const link2 = () => {
  <Link to="<SidebarData [1]>">Tambah Agenda</Link>;
};

export const CardsData = [
  {
    title: "INI NAMA OPD",
    opd: "NAMA OPD YAAA",
    tanggal: "Tanggal xx XXXX xxxx",
    agenda:
      "Ini adalah space isian agenda, silahkan diisi sesuai dengan surat masuk yang sudah didisposisi",
    tempat: "Ini adalah tempat pelaksanaan agenda",
    yang_menghadiri: "ini yang menghadiri siapa?",
    dokumentasi: "ini foto dokumentasi",
    color: {
      backGround:
        "linear-gradient(180deg, rgb(77, 127, 235) 0%, rgb(137, 170, 241) 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    png: UilClipboardAlt,
    series: [
      {
        name: "Agenda",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "INI NAMA OPD",
    opd: "NAMA OPD YAAA",
    tanggal: "Tanggal xx XXXX xxxx",
    agenda:
      "Ini adalah space isian agenda, silahkan diisi sesuai dengan surat masuk yang sudah didisposisi",
    tempat: "Ini adalah tempat pelaksanaan agenda",
    yang_menghadiri: "ini yang menghadiri siapa?",
    dokumentasi: "ini foto dokumentasi",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    png: UilClipboardAlt,
    series: [
      {
        name: "Agenda",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "INI NAMA OPD",
    opd: "NAMA OPD YAAA",
    tanggal: "Tanggal xx XXXX xxxx",
    agenda:
      "Ini adalah space isian agenda, silahkan diisi sesuai dengan surat masuk yang sudah didisposisi",
    tempat: "Ini adalah tempat pelaksanaan agenda",
    yang_menghadiri: "ini yang menghadiri siapa?",
    dokumentasi: "ini foto dokumentasi",
    color: {
      backGround:
        "linear-gradient(180deg, rgb(226, 131, 7) 0%, rgb(235, 177, 101) 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    png: UilClipboardAlt,
    series: [
      {
        name: "Agenda",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
];
