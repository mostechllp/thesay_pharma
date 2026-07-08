export const manifest = {
  screens: {
    scr_c3mc7c: { name: "Home", route: "/", position: { "x": 160, "y": 220 } },
    scr_lejw3y: { name: "About", route: "/about", position: { "x": 1560, "y": 220 } },
    scr_aitywl: { name: "Services", route: "/services", position: { "x": 2960, "y": 220 } },
    scr_irmq8j: { name: "Segments", route: "/segments", position: { "x": 160, "y": 2200 } },
    scr_p72mkd: { name: "Partners", route: "/partners", position: { "x": 1560, "y": 2200 } },
    scr_pq0m0n: { name: "Teams", route: "/teams", position: { "x": 2960, "y": 2200 } }
  },
  sections: {
    sec_0ycroh: { name: "Main Pages", x: 0, y: 0, width: 4320, height: 1180 },
    sec_nig09d: { name: "Organization Info", x: 0, y: 1980, width: 4320, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_0ycroh", children: [
    { kind: "screen", id: "scr_c3mc7c" },
    { kind: "screen", id: "scr_lejw3y" },
    { kind: "screen", id: "scr_aitywl" }]
  },
  { kind: "section", id: "sec_nig09d", children: [
    { kind: "screen", id: "scr_irmq8j" },
    { kind: "screen", id: "scr_p72mkd" },
    { kind: "screen", id: "scr_pq0m0n" }]
  }]

};