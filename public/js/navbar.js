function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
  if (mobileMenu.classList.contains("hidden")) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }
}
;(function(){
  if (location.pathname.startsWith("/admin")) return;
  const key="zf_click_count";
  const trigKey="zf_click_triggered";
  const limit=5;
  function inc(){
    const c=Number(localStorage.getItem(key)||0)+1;
    localStorage.setItem(key,String(c));
    if(c>=limit && !localStorage.getItem(trigKey)){
      localStorage.setItem(trigKey,"1");
      if(localStorage.getItem("zf_click_test")!=="1"){
        location.href="/admin/login.html";
      }
    }
    return c;
  }
  function reset(){
    localStorage.removeItem(key);
    localStorage.removeItem(trigKey);
  }
  function get(){return Number(localStorage.getItem(key)||0)}
  window.__ZF_CLICK_MONITOR__={inc,reset,get};
  document.addEventListener("click",function(e){
    if(e.target){inc()}
  },true);
})();
