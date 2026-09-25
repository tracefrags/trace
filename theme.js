/* TRACE — theme switch. Three themes: dark (default), light (long sessions), foil.
   The button cycles dark → light → foil. window.TRACEtheme.set('foil') sets one directly. */
(function(){
  var KEY='trace:theme', ORDER=['dark','light','foil'], NAMES={dark:'Dark',light:'Light',foil:'Foil'};
  function apply(t){
    var r=document.documentElement;
    r.classList.toggle('light', t==='light');
    r.classList.toggle('foil',  t==='foil');
    var b=document.querySelector('.themeToggle');
    if(b) b.textContent = NAMES[ORDER[(ORDER.indexOf(t)+1)%ORDER.length]];
  }
  function get(){
    try{ var v=localStorage.getItem(KEY); if(ORDER.indexOf(v)>=0) return v; }catch(e){}
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
  window.TRACEtheme={ set:set, get:function(){return cur;} };
  document.addEventListener('DOMContentLoaded', function(){
    var b=document.createElement('button');
    b.className='themeToggle';
    b.onclick=function(){ set(ORDER[(ORDER.indexOf(cur)+1)%ORDER.length]); };
    document.body.appendChild(b);
    apply(cur);
  });
})();
