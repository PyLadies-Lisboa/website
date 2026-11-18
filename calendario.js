// Calendário mensal da página Eventos.
// Lê os eventos da própria página (<article class="event"> com <time datetime>) — basta acrescentar
// o evento à secção certa e ele aparece aqui, com a cor do tipo (id da secção).
(function () {
  var box = document.getElementById("calendario");
  if (!box) return;

  var TIPOS = { encontros: "Encontros", workshops: "Workshops", palestras: "Palestras" };
  var DIAS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
  var DIAS_LONGOS = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado", "domingo"];
  var MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto",
               "setembro", "outubro", "novembro", "dezembro"];

  function chave(d) { return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }

  // Recolher eventos.
  var eventos = {};
  var n = 0;
  document.querySelectorAll(".formato .event").forEach(function (ev) {
    var t = ev.querySelector("time[datetime]");
    var sec = ev.closest(".formato");
    if (!t || !sec) return;
    var d = new Date(t.getAttribute("datetime"));
    if (isNaN(d)) return;
    if (!ev.id) ev.id = "evento-" + (++n);
    var h = ev.querySelector("h3");
    (eventos[chave(d)] = eventos[chave(d)] || []).push({
      id: ev.id, tipo: sec.id, titulo: h ? h.textContent.trim() : TIPOS[sec.id] || "Evento"
    });
  });

  var hoje = new Date();
  var ano = hoje.getFullYear(), mes = hoje.getMonth();

  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  }

  function desenhar() {
    box.innerHTML = "";
    var topo = el("div", "cal-head");
    var ant = el("button", "cal-nav", "‹"); ant.type = "button"; ant.setAttribute("aria-label", "Mês anterior");
    var seg = el("button", "cal-nav", "›"); seg.type = "button"; seg.setAttribute("aria-label", "Mês seguinte");
    var titulo = el("h2", "cal-title", MESES[mes].charAt(0).toUpperCase() + MESES[mes].slice(1) + " " + ano);
    titulo.setAttribute("aria-live", "polite");
    ant.onclick = function () { mes--; if (mes < 0) { mes = 11; ano--; } desenhar(); };
    seg.onclick = function () { mes++; if (mes > 11) { mes = 0; ano++; } desenhar(); };
    topo.append(ant, titulo, seg);
    box.append(topo);

    var tab = el("table", "cal-grid");
    var thead = el("thead"), tr = el("tr");
    DIAS.forEach(function (d, i) { var th = el("th", null, d); th.scope = "col"; th.abbr = DIAS_LONGOS[i]; tr.append(th); });
    thead.append(tr); tab.append(thead);

    var tbody = el("tbody");
    var primeiro = (new Date(ano, mes, 1).getDay() + 6) % 7; // 0 = segunda
    var noMes = 0;
    // Sempre 6 semanas (42 dias), para o calendário ter a mesma altura em todos os meses.
    // Os dias dos meses vizinhos aparecem esbatidos e sem eventos.
    for (var c = 0; c < 42; c++) {
      if (c % 7 === 0) tr = el("tr");
      var data = new Date(ano, mes, 1 - primeiro + c);
      var dia = data.getDate();
      var td = el("td");
      if (data.getMonth() !== mes) {
        td.className = "cal-fora";
        td.append(el("span", "cal-dia", String(dia)));
        td.firstChild.setAttribute("aria-hidden", "true");
      } else {
        var evs = eventos[chave(data)];
        if (chave(data) === chave(hoje)) td.className = "cal-hoje";
        if (evs) {
          noMes += evs.length;
          var a = el("a", "cal-dia cal-" + evs[0].tipo, String(dia));
          a.href = "#" + evs[0].id;
          a.setAttribute("aria-label", dia + " de " + MESES[mes] + ": " +
            evs.map(function (e) { return e.titulo; }).join("; "));
          a.title = evs.map(function (e) { return e.titulo; }).join(" · ");
          td.append(a);
        } else {
          td.append(el("span", "cal-dia", String(dia)));
        }
        if (chave(data) === chave(hoje)) td.firstChild.setAttribute("aria-current", "date");
      }
      tr.append(td);
      if (c % 7 === 6) tbody.append(tr);
    }
    tab.append(tbody);
    box.append(tab);

    box.append(el("p", "cal-note", noMes ? "" : "Ainda sem eventos marcados neste mês."));
    var leg = el("ul", "cal-legend");
    Object.keys(TIPOS).forEach(function (k) { leg.append(el("li", "cal-" + k, TIPOS[k])); });
    box.append(leg);
  }

  desenhar();
  box.hidden = false;
})();
