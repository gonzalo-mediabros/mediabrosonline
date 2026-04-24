- [ ] Responsive
- [x] SEO, metadata por página
- [ ] SEO. revisar si debemos hacer redicrecciones 301 (claudeflare en el medio?) COMPARAR CON ORIGINAL no con /new
- [ ] Formularios ver con Vale si llegan
- [ ] Campañas chequear a qué páginas apuntan las campañas
- [ ] GTM revisar que este instalado
  - [ ] pixel meta
  - [ ] pixel linkedin
  - [ ] pixel google
  - [ ] pixel tiktok
  - [ ] Clarity

## GTM

### meta - verificar que este instalado

<meta name="google-site-verification" content="0e4Rc97-lpykZYYjwgVmpQfxPcoskNtdPMcveQZW-IY" />

### META - Agregar a GTM

    <!-- Meta Pixel Code -->
    <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1740352586222152');
    fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=1740352586222152&ev=PageView&noscript=1"
    /></noscript>
    <!-- End Meta Pixel Code -->

### GTM -

codigo GTM-PPLXXHR7.
Agrregar el head y body en cada pagina en astro.astro ? una por layout?

### LINKED - agregar a GTM

    <!-- LinkedIn Insight Tag -->
    <script type="text/javascript">
    _linkedin_partner_id = "4403162";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    </script>
    <script type="text/javascript">
    (function(l) {
    if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
    window.lintrk.q=[]}
    var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);})(window.lintrk);
    </script>
    <noscript>
    <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=4403162&fmt=gif" />
    </noscript>
    <!-- End LinkedIn Insight Ta

### CLARITY - agregar a GTM

    <!-- Clarity tracking code for https://mediabrosonline.com/ -->
    <script>
    (function (c, l, a, r, i, t, y) { c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); }; t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i + "?ref=bwt"; y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y); })(window, document, "clarity", "script", "nbw1g3lo4f");
    </script>
    <!-- END Clarity tracking code for https://mediabrosonline.com/ -->
