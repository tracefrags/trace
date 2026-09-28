/* TRACE — theme. The house theme is Brutalist (chosen 24 Sept): Paper by day, Night for evenings.
   The button switches between them; window.TRACEtheme.set('night') sets one directly.
   The older dark / light / foil themes remain in theme.css but are no longer offered. */
(function(){
  var KEY='trace:theme', ORDER=['paper','night'], NAMES={paper:'Paper',night:'Night'};
  function apply(t){
    var r=document.documentElement;
    r.classList.add('brutal'); r.classList.toggle('night', t==='night');
    r.classList.remove('light','foil');
    var b=document.querySelector('.themeToggle');
    if(b) b.textContent = NAMES[ORDER[(ORDER.indexOf(t)+1)%ORDER.length]];
  }
  function get(){
    try{ var v=localStorage.getItem(KEY); if(ORDER.indexOf(v)>=0) return v; }catch(e){}
    return 'paper';                      /* older saved choices (dark, light, foil) start on Paper */
  }
  var cur=get(); apply(cur);
  function set(t){
    if(ORDER.indexOf(t)<0) return; cur=t;
    try{ localStorage.setItem(KEY,cur); }catch(e){}
    apply(cur);
    if(window.draw) try{ window.draw(); }catch(e){}
    try{ document.dispatchEvent(new CustomEvent('trace:theme',{detail:cur})); }catch(e){}
  }
  window.TRACEtheme={ set:set, get:function(){return cur;} };
  document.addEventListener('DOMContentLoaded', function(){
    var b=document.createElement('button');
    b.className='themeToggle';
    b.onclick=function(){ set(ORDER[(ORDER.indexOf(cur)+1)%ORDER.length]); };
    document.body.appendChild(b);
    apply(cur);
  });
})();
