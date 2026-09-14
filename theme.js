/* TRACE — theme switch. Dark is default; light is for long sessions in the apps. */
(function(){
  var KEY='trace:theme';
  function apply(t){
    document.documentElement.classList.toggle('light', t==='light');
    var b=document.querySelector('.themeToggle');
    if(b) b.textContent = t==='light' ? 'Dark' : 'Light';
  }
  function get(){
    try{ var v=localStorage.getItem(KEY); if(v) return v; }catch(e){}
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light' : 'dark';
  }
  var cur=get();
  apply(cur);
  document.addEventListener('DOMContentLoaded', function(){
    var b=document.createElement('button');
    b.className='themeToggle';
    b.onclick=function(){
      cur = cur==='light' ? 'dark' : 'light';
      try{ localStorage.setItem(KEY,cur); }catch(e){}
      apply(cur);
      if(window.draw) try{ window.draw(); }catch(e){}
    };
    document.body.appendChild(b);
    apply(cur);
  });
})();
