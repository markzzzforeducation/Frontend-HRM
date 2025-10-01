<template>
  <div class="main-layout">
    <!-- Sidebar -->
    <aside class="sidebar" :class="{ 'collapsed': sidebarCollapsed }">
      <!-- Sidebar Header with White Background -->
      <div class="sidebar-header">
        <div class="logo">
          <img src="/src/assets/hrm-logo.png" alt="HRM FINEARTS" class="logo-img">
        </div>
        <button class="hamburger-menu" @click="toggleSidebar">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav class="sidebar-nav">
        <ul class="nav-menu">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span v-show="!sidebarCollapsed">หน้าหลัก</span>
            </router-link>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span v-show="!sidebarCollapsed">ข้อมูลส่วนตัว</span>
            </a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span v-show="!sidebarCollapsed">ปฏิทินองค์กร</span>
            </a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span v-show="!sidebarCollapsed">โครงสร้างองค์กร</span>
            </a>
          </li>

          <li class="nav-item has-submenu" :class="{ 'expanded': expandedMenus.includes('leave-work') }">
            <a href="#" class="nav-link" @click.prevent="toggleSubmenu('leave-work')">
              <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span v-show="!sidebarCollapsed">การลาและการปฏิบัติงาน</span>
              <svg v-show="!sidebarCollapsed" class="submenu-arrow"
                :class="{ 'rotated': expandedMenus.includes('leave-work') }" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <ul class="submenu" v-show="expandedMenus.includes('leave-work') && !sidebarCollapsed">
              <li class="submenu-item">
                <a href="#" class="submenu-link">เวลาปฏิบัติราชการ</a>
              </li>
              <li class="submenu-item">
                <a href="#" class="submenu-link">กลุ่มงานทะเบียนประวัติ ทำเหน็จความชอบและระบบสารสนเทศ ทรัพยากรบุคคล</a>
              </li>
              <li class="submenu-item">
                <a href="#" class="submenu-link">กลุ่มงานอัตรากำลังและพัฒนาระบบบริหารทรัพยากรบุคคล</a>
              </li>
              <li class="submenu-item has-submenu" :class="{ 'expanded': expandedMenus.includes('recruitment') }">
                <a href="#" class="submenu-link" @click.prevent="toggleSubmenu('recruitment')">
                  กลุ่มงานสรรหาและบรรจุแต่งตั้ง
                  <svg class="submenu-arrow" :class="{ 'rotated': expandedMenus.includes('recruitment') }" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <ul class="submenu nested-submenu" v-show="expandedMenus.includes('recruitment')">
                  <li class="submenu-item">
                    <router-link to="/offsite-work" class="submenu-link">บันทึกการปฏิบัติงานนอกสถานที่</router-link>
                  </li>
                  <li class="submenu-item">
                    <a href="#" class="submenu-link">จัดการรับสมัครงาน</a>
                  </li>
                  <li class="submenu-item">
                    <a href="#" class="submenu-link">การดำเนินการจัดสอบ</a>
                  </li>
                  <li class="submenu-item">
                    <a href="#" class="submenu-link">บันทึกผลการสอบ</a>
                  </li>
                  <li class="submenu-item">
                    <a href="#" class="submenu-link">ประวัติการสมัครงาน</a>
                  </li>
                  <li class="submenu-item">
                    <a href="#" class="submenu-link">การประเมินบุคคลและผลงาน</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span v-show="!sidebarCollapsed">คำสั่ง</span>
            </a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span v-show="!sidebarCollapsed">กลุ่มงานพัฒนาทรัพยากรบุคคล</span>
            </a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span v-show="!sidebarCollapsed">รายงาน</span>
            </a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
              <span v-show="!sidebarCollapsed">ผู้ใช้งานและสิทธิ์</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Header with White Background -->
      <header class="main-header">
        <div class="header-left">
          <button v-if="sidebarCollapsed" class="toggle-btn" @click="toggleSidebar">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div class="breadcrumbs">
            <span>การสรรหาและเลือกสรรบุคลากร</span>
            <span class="separator">></span>
            <span>กลุ่มงานทะเบียนประวัติ ทำเหน็จความชอบ และระบบสารสนเทศทรัพยากรบุคคล</span>
            <span class="separator">></span>
            <span>จัดการใบลาและการปฏิบัติงาน</span>
            <span class="separator">></span>
            <span class="current">บันทึกการปฏิบัติราชการพิเศษ</span>
          </div>
        </div>
        <div class="user-profile">
          <button class="fullscreen-btn" @click="toggleFullscreen" title="เต็มจอ">
            <svg v-if="!isFullscreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <svg v-else fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img src="C:\CS_NATTAPONG\Clicknext_Bangsaen\Frontend-HRM\Frontend-HRM\src\assets\profile.png" alt="Profile"
            class="profile-img">
        </div>
      </header>

      <!-- Page Content -->
      <main class="page-content">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const expandedMenus = ref(['leave-work', 'recruitment'])
const sidebarCollapsed = ref(false)
const isFullscreen = ref(false)

const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value
}

const toggleSubmenu = (menuKey: string) => {
  const index = expandedMenus.value.indexOf(menuKey)
  if (index > -1) {
    expandedMenus.value.splice(index, 1)
  } else {
    expandedMenus.value.push(menuKey)
  }
}

const toggleFullscreen = async () => {
  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen()
      isFullscreen.value = true
    } else {
      await document.exitFullscreen()
      isFullscreen.value = false
    }
  } catch (error) {
    console.log('Fullscreen not supported:', error)
    document.body.classList.toggle('fullscreen')
    isFullscreen.value = document.body.classList.contains('fullscreen')
  }
}

const handleFullscreenChange = () => {
  isFullscreen.value = !!document.fullscreenElement
}

onMounted(() => {
  document.addEventListener('fullscreenchange', handleFullscreenChange)
})

onUnmounted(() => {
  document.removeEventListener('fullscreenchange', handleFullscreenChange)
})
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.main-layout {
  display: flex;
  height: 100vh;
  width: 100vw;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

/* Sidebar Styles */
.sidebar {
  width: 260px;
  background-color: #3a3b3c;
  color: white;
  flex-shrink: 0;
  transition: width 0.3s ease;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.sidebar.collapsed {
  width: 60px;
}

/* Sidebar Header - White Background */
.sidebar-header {
  padding: 16px 20px;
  background-color: white;
  color: #3a3b3c;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  flex-shrink: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
}

.logo-img {
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  object-fit: contain;
}

.sidebar.collapsed .logo {
  justify-content: center;
}

.hamburger-menu {
  background: none;
  border: none;
  color: #3a3b3c;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 6px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.hamburger-menu:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.hamburger-menu span {
  width: 20px;
  height: 2px;
  background-color: #3a3b3c;
  transition: all 0.3s;
  border-radius: 2px;
}

.sidebar.collapsed .hamburger-menu {
  display: none;
}

.sidebar-nav {
  padding: 12px 0;
  flex: 1;
  overflow-y: auto;
}

.nav-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin-bottom: 2px;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: #ecf0f1;
  text-decoration: none;
  transition: all 0.2s;
  position: relative;
  cursor: pointer;
  font-size: 14px;
}

.nav-link:hover {
  background-color: #3a3b3c;
  color: white;
}

.nav-link.router-link-active {
  background-color: #3a3b3c;
  color: white;
  border-left: 4px solid #3498db;
  padding-left: 16px;
}

.nav-icon {
  width: 20px;
  height: 20px;
  margin-right: 12px;
  flex-shrink: 0;
}

.sidebar.collapsed .nav-link {
  justify-content: center;
  padding: 12px;
}

.sidebar.collapsed .nav-icon {
  margin-right: 0;
}

.submenu-arrow {
  width: 16px;
  height: 16px;
  margin-left: auto;
  transition: transform 0.3s;
  flex-shrink: 0;
}

.submenu-arrow.rotated {
  transform: rotate(180deg);
}

.submenu {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #3a3b3c;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.nav-item.expanded .submenu {
  max-height: 1000px;
}

.submenu-item {
  margin-bottom: 0;
}

.submenu-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 10px 48px;
  color: #bdc3c7;
  text-decoration: none;
  font-size: 13px;
  transition: all 0.2s;
  cursor: pointer;
}

.submenu-link:hover {
  background-color: #3a3b3c;
  color: white;
}

.submenu-link.router-link-active {
  background-color: #27ae60;
  color: white;
  font-weight: 500;
  border-left: 4px solid #2ecc71;
  padding-left: 44px;
}

.nested-submenu .submenu-link {
  padding-left: 64px;
}

.nested-submenu .submenu-link.router-link-active {
  padding-left: 60px;
}

/* Main Content Styles - White Background */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: white;
  overflow: hidden;
  min-width: 0;
}

/* Main Header - White Background */
.main-header {
  background-color: white;
  padding: 12px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  flex-shrink: 0;
  border-bottom: 1px solid #e9ecef;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  min-width: 0;
}

.toggle-btn {
  background: rgba(0, 0, 0, 0.05);
  border: none;
  color: #2c3e50;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
  flex-shrink: 0;
}

.toggle-btn:hover {
  background: rgba(0, 0, 0, 0.1);
}

.toggle-btn svg {
  width: 20px;
  height: 20px;
}

.breadcrumbs {
  font-size: 13px;
  color: #2c3e50;
  font-weight: 400;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  line-height: 1.4;
}

.breadcrumbs .separator {
  margin: 0 4px;
  opacity: 0.5;
  color: #6c757d;
}

.breadcrumbs .current {
  font-weight: 500;
  color: #000;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.fullscreen-btn {
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #2c3e50;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fullscreen-btn:hover {
  background: rgba(0, 0, 0, 0.1);
  transform: scale(1.05);
}

.fullscreen-btn svg {
  width: 20px;
  height: 20px;
}

.profile-img {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #27ae60;
  flex-shrink: 0;
}

.page-content {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: white;
}

/* Scrollbar Styling */
.sidebar::-webkit-scrollbar,
.sidebar-nav::-webkit-scrollbar,
.page-content::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-track,
.sidebar-nav::-webkit-scrollbar-track,
.page-content::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar::-webkit-scrollbar-thumb,
.sidebar-nav::-webkit-scrollbar-thumb {
  background: #34495e;
  border-radius: 3px;
}

.page-content::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 3px;
}

.sidebar::-webkit-scrollbar-thumb:hover,
.sidebar-nav::-webkit-scrollbar-thumb:hover,
.page-content::-webkit-scrollbar-thumb:hover {
  background: #7f8c8d;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .sidebar {
    width: 240px;
  }

  .main-header {
    padding: 12px 20px;
  }

  .breadcrumbs {
    font-size: 12px;
  }

  .page-content {
    padding: 20px;
  }
}

@media (max-width: 1024px) {
  .sidebar:not(.collapsed) {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1000;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
  }

  .breadcrumbs {
    font-size: 11px;
  }

  .page-content {
    padding: 16px;
  }
}

@media (max-width: 768px) {
  .sidebar {
    width: 60px;
  }

  .main-header {
    padding: 12px 16px;
  }

  .breadcrumbs span:not(.current) {
    display: none;
  }

  .breadcrumbs .separator {
    display: none;
  }

  .page-content {
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .breadcrumbs {
    font-size: 10px;
  }

  .user-profile {
    gap: 8px;
  }

  .profile-img {
    width: 32px;
    height: 32px;
  }
}

/* Print styles */
@media print {

  .sidebar,
  .main-header {
    display: none;
  }

  .page-content {
    padding: 0;
  }
}
</style>