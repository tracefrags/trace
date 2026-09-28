/* TRACE — themes: Dark (default), Light, Foil, Brutalist.
   The button shows the current theme and opens a menu to pick any of them.
   window.TRACEtheme.set('brutal') sets one directly. */
(function(){
  var KEY='trace:theme', VKEY='trace:foilv', ORDER=['dark','light','foil','brutal'],
      NAMES={dark:'Dark',light:'Light',foil:'Foil',brutal:'Brutalist'}, VARIANTS=['slate','dusk','stone'];
  function getV(){ try{ var v=localStorage.getItem(VKEY); if(VARIANTS.indexOf(v)>=0) return v; }catch(e){} return 'slate'; }
  function apply(t){
    var r=document.documentElement;
    r.classList.toggle('light', t==='light');
    r.classList.toggle('foil',  t==='foil');
    r.classList.toggle('brutal',t==='brutal');
    r.classList.remove('night');
    r.setAttribute('data-fv', getV());
    var b=document.querySelector('.themeToggle'); if(b) b.textContent=NAMES[t];
    document.querySelectorAll('.themeMenu button').forEach(function(x){ x.setAttribute('aria-checked', x.dataset.t===t?'true':'false'); });
  }
  function get(){
    try{ var v=localStorage.getItem(KEY);
      if(v==='paper') return 'brutal';        /* saved by the short-lived Brutalist-only version */
      if(v==='night') return 'dark';
      if(ORDER.indexOf(v)>=0) return v; }catch(e){}
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  var cur=get(); apply(cur);
  function set(t){
    if(ORDER.indexOf(t)<0) return; cur=t;
    try{ localStorage.setItem(KEY,cur); }catch(e){}
    apply(cur);
    if(window.draw) try{ window.draw(); }catch(e){}
    try{ document.dispatchEvent(new CustomEvent('trace:theme',{detail:cur})); }catch(e){}
  }
  function setFoil(v){ if(VARIANTS.indexOf(v)<0) return; try{ localStorage.setItem(VKEY,v); }catch(e){} set('foil'); }
  window.TRACEtheme={ set:set, get:function(){return cur;}, setFoil:setFoil, getFoil:getV };
  document.addEventListener('DOMContentLoaded', function(){
    var b=document.createElement('button'); b.className='themeToggle'; b.setAttribute('aria-haspopup','menu');
    var m=document.createElement('div'); m.className='themeMenu'; m.setAttribute('role','menu');
    ORDER.forEach(function(t){ var o=document.createElement('button'); o.dataset.t=t; o.setAttribute('role','menuitemradio'); o.textContent=NAMES[t];
      o.onclick=function(){ set(t); m.classList.remove('open'); b.focus(); }; m.appendChild(o); });
    b.onclick=function(e){ e.stopPropagation(); m.classList.toggle('open'); if(m.classList.contains('open')){ var c=m.querySelector('[aria-checked="true"]'); if(c) c.focus(); } };
    document.addEventListener('click', function(e){ if(!m.contains(e.target)) m.classList.remove('open'); });
    document.addEventListener('keydown', function(e){ if(e.key==='Escape' && m.classList.contains('open')){ m.classList.remove('open'); b.focus(); } });
    document.body.appendChild(m); document.body.appendChild(b);
    apply(cur);
  });
})();
