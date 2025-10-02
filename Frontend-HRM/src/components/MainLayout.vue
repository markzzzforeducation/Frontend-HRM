<template>
  <div class="main-layout">
    <!-- Sidebar -->
    <aside class="sidebar" :class="{ 'collapsed': sidebarCollapsed }">
      <!-- Sidebar Header with White Background -->
      <div class="sidebar-header">
        <div class="logo">
          <img src="/src/assets/hrm-logo.png" alt="HRM FINEARTS" class="logo-img">
        </div>
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
                <a href="#" class="submenu-link">
                  <svg class="submenu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  เวลาปฏิบัติราชการ
                </a>
              </li>
              <li class="submenu-item">
                <a href="#" class="submenu-link">
                  <svg class="submenu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  กลุ่มงานทะเบียนประวัติ ทำเหน็จความชอบและระบบสารสนเทศ ทรัพยากรบุคคล
                </a>
              </li>
              <li class="submenu-item">
                <a href="#" class="submenu-link">
                  <svg class="submenu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  กลุ่มงานอัตรากำลังและพัฒนาระบบบริหารทรัพยากรบุคคล
                </a>
              </li>
              <li class="submenu-item has-submenu" :class="{ 'expanded': expandedMenus.includes('recruitment') }">
                <a href="#" class="submenu-link" @click.prevent="toggleSubmenu('recruitment')">
                  <svg class="submenu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>กลุ่มงานสรรหาและบรรจุแต่งตั้ง</span>
                  <svg class="submenu-arrow" :class="{ 'rotated': expandedMenus.includes('recruitment') }" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <ul class="submenu nested-submenu" v-show="expandedMenus.includes('recruitment')">
                  <li class="submenu-item">
                    <router-link to="/offsite-work" class="submenu-link nested">
                      <svg class="submenu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      บันทึกการปฏิบัติงานนอกสถานที่
                    </router-link>
                  </li>
                  <li class="submenu-item">
                    <a href="#" class="submenu-link nested">
                      <svg class="submenu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      จัดการรับสมัครงาน
                    </a>
                  </li>
                  <li class="submenu-item">
                    <a href="#" class="submenu-link nested">
                      <svg class="submenu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                      การดำเนินการจัดสอบ
                    </a>
                  </li>
                  <li class="submenu-item">
                    <a href="#" class="submenu-link nested">
                      <svg class="submenu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      บันทึกผลการสอบ
                    </a>
                  </li>
                  <li class="submenu-item">
                    <a href="#" class="submenu-link nested">
                      <svg class="submenu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      ประวัติการสมัครงาน
                    </a>
                  </li>
                  <li class="submenu-item">
                    <a href="#" class="submenu-link nested">
                      <svg class="submenu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      การประเมินบุคคลและผลงาน
                    </a>
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
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
          <button class="hamburger-menu" @click="toggleSidebar">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div class="breadcrumbs">
          </div>
        </div>
        <div class="user-profile">
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
  background-color: #1e1e1e;
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
  width: 158px;
  height: 158px;
  flex-shrink: 0;
  object-fit: contain;
  transition: all 0.3s ease;
}

.sidebar.collapsed .logo-img {
  width: 40px;
  height: 40px;
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
  padding: 8px 0;
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
  padding: 11px 16px;
  color: #e8e8e8;
  text-decoration: none;
  transition: all 0.2s;
  position: relative;
  cursor: pointer;
  font-size: 14px;
  border-left: 3px solid transparent;
  font-weight: 400;
}

.nav-link:hover {
  background-color: #2a2a2a;
  color: white;
  border-left-color: transparent;
}

/* หัวข้อใหญ่ที่ active - ไม่มีพื้นหลังสีเข้ม */
.nav-link.router-link-active {
  background-color: transparent;
  color: white;
  border-left-color: transparent;
  font-weight: 400;
}

/* หัวข้อใหญ่ที่ expand - ไม่มีพื้นหลังสีเข้ม */
.nav-item.has-submenu.expanded>.nav-link {
  background-color: transparent;
  color: #ffd761;
  border-left-color: transparent;
  font-weight: 400;
}

.nav-icon {
  width: 20px;
  height: 20px;
  margin-right: 12px;
  flex-shrink: 0;
  color: #ffd761;
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
  color: #999999;
}

.submenu-arrow.rotated {
  transform: rotate(90deg);
}

.submenu {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #0d0d0d;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.nav-item.expanded .submenu {
  max-height: 2000px;
}

.submenu-item {
  margin-bottom: 0;
}

.submenu-link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 9px 16px 9px 44px;
  color: #d0d0d0;
  text-decoration: none;
  font-size: 13px;
  transition: all 0.2s;
  cursor: pointer;
  border-left: 3px solid transparent;
  gap: 8px;
  font-weight: 400;
}

.submenu-link:hover {
  background-color: #1a1a1a;
  color: white;
}

/* หัวข้อย่อยที่ active - มีสีเข้ม และตัวอักษรสีเหลือง */
.submenu-link.router-link-active {
  background-color: #0a0a0a;
  color: #ffd761;
  /* เปลี่ยนจาก white เป็นสีเหลือง */
  font-weight: 400;
  border-left-color: #2d96ff;
}

.submenu-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: #ffdb6f;
  margin-right: 4px;
}

.nested-submenu {
  background-color: #080808;
}

.nested-submenu .submenu-link {
  padding-left: 60px;
  font-size: 12px;
}

.nested-submenu .submenu-link.nested {
  padding-left: 56px;
}

.submenu-item.has-submenu>.submenu-link {
  position: relative;
}

.submenu-item.has-submenu>.submenu-link>span {
  flex: 1;
}

.submenu-item.expanded>.submenu-link {
  background-color: #0a0a0a;
  color: #ffd761;
  /* เพิ่มสีเหลือง */
}

/* Main Content Styles */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: white;
  overflow: hidden;
  min-width: 0;
}

/* Main Header */
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

.profile-img {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.page-content {
  flex: 1;
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