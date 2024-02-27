let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

gsap.from(".card",{
  y:-100,
  duration:1,
  delay:1,
  opacity: 0,
  stagger: 0.5
})

gsap.from(".product-card",{
  y:-400,
  scale:0,
  delay:3.5
})
gsap.from("#sidebar",{
  x:-2400,
  scale:2
})