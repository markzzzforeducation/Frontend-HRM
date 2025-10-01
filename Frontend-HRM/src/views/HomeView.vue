<template>
  <div class="home-page">
    <div class="welcome-section">
      <h1>ยินดีต้อนรับสู่ระบบ HRM Finearts</h1>
      <p>ระบบจัดการทรัพยากรบุคคลสำหรับสถาบันศิลปะ</p>
    </div>

    <div class="dashboard-grid">
      <div class="dashboard-card">
        <div class="card-icon">👥</div>
        <h3>จัดการบุคลากร</h3>
        <p>จัดการข้อมูลพนักงานและโครงสร้างองค์กร</p>
        <router-link to="/offsite-work" class="card-link">เข้าสู่ระบบ</router-link>
      </div>

      <div class="dashboard-card">
        <div class="card-icon">📅</div>
        <h3>การลาและการปฏิบัติงาน</h3>
        <p>จัดการการลาและการปฏิบัติงานนอกสถานที่</p>
        <router-link to="/offsite-work" class="card-link">บันทึกการปฏิบัติงาน</router-link>
      </div>

      <div class="dashboard-card">
        <div class="card-icon">📊</div>
        <h3>รายงาน</h3>
        <p>ดูรายงานและสถิติต่างๆ ของระบบ</p>
        <a href="#" class="card-link">ดูรายงาน</a>
      </div>

      <div class="dashboard-card">
        <div class="card-icon">⚙️</div>
        <h3>การตั้งค่า</h3>
        <p>จัดการผู้ใช้งานและสิทธิ์การเข้าถึง</p>
        <a href="#" class="card-link">การตั้งค่า</a>
      </div>
    </div>

    <div class="quick-actions">
      <h2>การดำเนินการด่วน</h2>
      <div class="action-buttons">
        <router-link to="/offsite-work" class="action-btn primary">
          <span class="btn-icon">📝</span>
          <span>บันทึกการปฏิบัติงานนอกสถานที่</span>
        </router-link>
        <a href="#" class="action-btn secondary">
          <span class="btn-icon">📋</span>
          <span>จัดการใบลา</span>
        </a>
        <a href="#" class="action-btn secondary">
          <span class="btn-icon">👤</span>
          <span>เพิ่มบุคลากร</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Home page logic
</script>

<style scoped>
.home-page {
  width: 100%;
  margin: 0;
  padding: 20px;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.welcome-section {
  text-align: center;
  margin-bottom: 40px;
  padding: 40px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.welcome-section h1 {
  font-size: clamp(24px, 4vw, 32px);
  margin-bottom: 10px;
  font-weight: 600;
  line-height: 1.2;
}

.welcome-section p {
  font-size: clamp(16px, 2.5vw, 18px);
  opacity: 0.9;
  line-height: 1.4;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
  flex: 1;
  width: 100%;
}

.dashboard-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;
}

.dashboard-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.card-icon {
  font-size: 48px;
  margin-bottom: 20px;
  display: block;
}

.dashboard-card h3 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
}

.dashboard-card p {
  color: #6c757d;
  margin-bottom: 25px;
  line-height: 1.6;
  font-size: 14px;
}

.card-link {
  display: inline-block;
  padding: 12px 24px;
  background: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 14px;
}

.card-link:hover {
  background: #2980b9;
  transform: translateY(-1px);
}

.quick-actions {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
}

.quick-actions h2 {
  color: #2c3e50;
  margin-bottom: 25px;
  font-size: 24px;
  font-weight: 600;
}

.action-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  font-weight: 500;
}

.action-btn.primary {
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  color: white;
}

.action-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(39, 174, 96, 0.3);
}

.action-btn.secondary {
  background: #f8f9fa;
  color: #2c3e50;
  border-color: #e9ecef;
}

.action-btn.secondary:hover {
  background: #e9ecef;
  border-color: #3498db;
  color: #2c3e50;
}

.btn-icon {
  font-size: 24px;
  flex-shrink: 0;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .home-page {
    padding: 15px;
  }

  .dashboard-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  .dashboard-card {
    padding: 25px;
  }
}

@media (max-width: 768px) {
  .home-page {
    padding: 10px;
  }

  .welcome-section {
    padding: 30px 15px;
    margin-bottom: 30px;
  }

  .dashboard-grid {
    grid-template-columns: 1fr;
    gap: 15px;
    margin-bottom: 30px;
  }

  .dashboard-card {
    padding: 20px;
  }

  .quick-actions {
    padding: 20px;
  }

  .action-buttons {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .action-btn {
    padding: 15px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .welcome-section {
    padding: 20px 10px;
  }

  .dashboard-card {
    padding: 15px;
  }

  .quick-actions {
    padding: 15px;
  }

  .action-btn {
    padding: 12px;
    gap: 10px;
  }

  .btn-icon {
    font-size: 20px;
  }
}

/* Fullscreen support */
:global(.fullscreen) .home-page {
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
}

:global(.fullscreen) .dashboard-grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

:global(.fullscreen) .dashboard-card {
  padding: 40px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

:global(.fullscreen) .welcome-section {
  padding: 60px 40px;
  margin-bottom: 60px;
}

:global(.fullscreen) .quick-actions {
  padding: 40px;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {

  .dashboard-card,
  .quick-actions {
    background: #2c3e50;
    border-color: #34495e;
  }

  .dashboard-card h3,
  .quick-actions h2 {
    color: #ecf0f1;
  }

  .dashboard-card p {
    color: #bdc3c7;
  }

  .action-btn.secondary {
    background: #34495e;
    color: #ecf0f1;
    border-color: #34495e;
  }

  .action-btn.secondary:hover {
    background: #2c3e50;
    border-color: #3498db;
  }
}
</style>
