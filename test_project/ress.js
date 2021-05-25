exports.htmlDataFormateToSendToOutputFormateOfFBIA = 
function(
    url,
    title,
    datePublishFrom,
    dateModified,
    byLine,
    ogImage,
    youtubeURL,
    videoEmbedCode,
    type,
    brightcoveVideoID
  ) 
  {
    return `<!doctype html>
      <html lang="en" prefix="op: https://media.facebook.com/op#">
      <head>
      <meta charset="utf-8">
      <meta property="fb:use_automatic_ad_placement" content="enable=true ad_density=default">
      <link rel="canonical" href="https://ent.abs-cbn.com${url}">
      <meta property="op:markup_version" content="v1.0">
      </head>
      
      <body>
      <article>
      <header>
      
      <h1>${title}</h1>
      
      <time class="op-published" dateTime='${datePublishFrom}</time>
      <time class="op-modified" dateTime='${dateModified}</time>
      <address>${byLine}</address>
      
      <figure>
      <img src="${ogImage}">
      <figcaption>${title}</figcaption>
      </figure>
      
      <!-- Placement: ABS-CBN Lifestyle MREC - IA 300x250 -->
      <section class="op-ad-template">
      <figure class="op-ad op-ad-default">
      <iframe width="300" height="250" style="border:0; margin:0;" src="https://www.facebook.com/adnw_request?placement=1602565023376858_1659656337667726&adtype=banner300x250"></iframe>
      </figure>
      </section>
      </header>
      
      <figure class="op-interactive" data-feedback="fb:likes, fb:comments">
      <iframe width="507" height="338" allowfullscreen src='https://ent.abs-cbn.com/playback/${brightcoveVideoID}' style="width: 100%; height: 100%; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px;"></iframe>
      </figure>
    
      <figure class="op-interactive" data-feedback="fb:likes, fb:comments">  
      <iframe width="480" height="270" src="${youtubeURL}" frameborder="0" allowfullscreen=""></iframe>
      </figure>    
      <figure class="op-interactive">
      <iframe>
      ${videoEmbedCode} 
      </iframe>
          
      <figure class="op-tracker">
      <iframe>
      <script>
          (function (i, s, o, g, r, a, m) {
              i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                  (i[r].q = i[r].q || []).push(arguments)
              }, i[r].l = 1 * new Date(); a = s.createElement(o),
                  m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
          })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
          ga('create', 'UA-74941230-3', 'auto');
          ga('require', 'displayfeatures');
          ga('set', 'campaignSource', 'Facebook');
          ga('set', 'campaignMedium', 'Social Instant Articles');
          ga('set', 'contentGroup1', 'FB Instant Articles');
          ga('send', 'pageview', { title: '${title}' });
      </script>
      
      <script type="text/javascript">
          var indra_params = {};
          indra_params.title = "${title}";
          indra_params.section = "${type}"
          indra_params.author = "${byLine}";
          indra_params.postedDate ="${datePublishFrom}";
      </script>
      
      <script type="text/javascript" src="https://cdnbigdataprd.azureedge.net/scripts/fingerprint2.min.js"> </script>
      <script type="text/javascript" src="https://cdnbigdataprd.azureedge.net/scripts/osfiddle.min.js"></script>
      <script type="text/javascript" src="https://cdnbigdataprd.azureedge.net/scripts/eventapicommon-fb.min.js"></script>
      </iframe>
      </figure>
      
      <footer></footer>
      </article>
      </body>
      </html>
  `;
  }

