<template>
  <div class="offsite-work-page">
    <!-- Green Info Bar -->
    <div class="info-bar">
      <span>การสรรหาและเลือกสรรบุคลากร</span>
    </div>

    <!-- Breadcrumb Navigation -->
    <div class="breadcrumb-nav">
      <svg class="breadcrumb-icon home-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      <svg class="breadcrumb-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <span>กลุ่มงานทะเบียนประวัติ ทำเนียบความชอบ และระบบสารสนเทศทรัพยากรบุคคล</span>
      <svg class="breadcrumb-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <span>จัดการใบลาและการปฏิบัติงาน</span>
      <svg class="breadcrumb-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <span class="current">บันทึกการปฏิบัติราชการพิเศษ</span>
    </div>

    <div class="content-wrapper">
      <div class="main-content">
        <div class="page-header">
          <h1>บันทึกการปฏิบัติงานนอกสถานที่</h1>
        </div>

        <div class="form-container">
          <!-- Work Type Section -->
          <div class="form-section">
            <div class="form-group">
              <label for="workType">ประเภทการปฏิบัติงาน*</label>
              <select id="workType" v-model="formData.workType" class="form-control">
                <option value="offsite">ปฏิบัติงานนอกสถานที่</option>
              </select>
            </div>

            <div class="form-group">
              <label for="orderNumber">เลขที่คำสั่ง</label>
              <input type="text" id="orderNumber" v-model="formData.orderNumber" class="form-control">
            </div>

            <div class="form-group">
              <label for="offsiteType">ประเภทการปฏิบัติงานนอกสถานที่*</label>
              <input type="text" id="offsiteType" v-model="formData.offsiteType" class="form-control">
            </div>

            <div class="form-group">
              <label for="topic">หัวข้อ/เรื่อง*</label>
              <input type="text" id="topic" v-model="formData.topic" class="form-control">
            </div>

            <div class="form-group">
              <label for="additionalDetails">รายละเอียดเพิ่มเติม (ถ้ามี)</label>
              <textarea id="additionalDetails" v-model="formData.additionalDetails" class="form-control"
                rows="3"></textarea>
            </div>

            <div class="form-group">
              <label for="projectName">ชื่อโครงการ*</label>
              <input type="text" id="projectName" v-model="formData.projectName" class="form-control">
            </div>
          </div>

          <!-- Location Section -->
          <div class="form-section">
            <h3>สถานที่ปฏิบัติงาน</h3>
            <div class="map-container">
              <div class="map-search-box">
                <input type="text" v-model="searchQuery" @keyup.enter="searchLocation" placeholder="ค้นหาสถานที่"
                  class="search-input">
                <button @click="searchLocation" class="search-btn">🔍</button>
              </div>
              <div id="map" ref="mapContainer" class="real-map"></div>
            </div>

            <div class="form-group">
              <label for="locationLink">ลิงก์สถานที่</label>
              <input type="text" id="locationLink" v-model="formData.locationLink" class="form-control">
            </div>

            <div class="form-group">
              <label for="location">สถานที่</label>
              <input type="text" id="location" v-model="formData.location" class="form-control" placeholder="โปรดระบุ">
            </div>
          </div>

          <!-- Date Section -->
          <div class="form-section">
            <div class="date-group">
              <div class="form-group">
                <label for="startDate">วันที่เริ่มต้นปฏิบัติงานนอกสถานที่*</label>
                <div class="date-with-options">
                  <input type="date" id="startDate" v-model="formData.startDate" class="form-control date-input-flex">
                  <div class="radio-group-inline">
                    <label class="radio-label">
                      <input type="radio" name="startTime" value="full" v-model="formData.startTimeType" checked>
                      <span>ตลอดวัน</span>
                    </label>
                    <label class="radio-label">
                      <input type="radio" name="startTime" value="morning" v-model="formData.startTimeType">
                      <span>ครึ่งเช้า</span>
                    </label>
                    <label class="radio-label">
                      <input type="radio" name="startTime" value="afternoon" v-model="formData.startTimeType">
                      <span>ครึ่งบ่าย</span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="endDate">วันที่สิ้นสุดปฏิบัติงานนอกสถานที่*</label>
                <div class="date-with-options">
                  <input type="date" id="endDate" v-model="formData.endDate" class="form-control date-input-flex">
                  <div class="radio-group-inline">
                    <label class="radio-label">
                      <input type="radio" name="endTime" value="full" v-model="formData.endTimeType" checked>
                      <span>ตลอดวัน</span>
                    </label>
                    <label class="radio-label">
                      <input type="radio" name="endTime" value="morning" v-model="formData.endTimeType">
                      <span>ครึ่งเช้า</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Staff Section -->
          <div class="form-section">
            <div class="section-header">
              <h3>ผู้ปฏิบัติงาน</h3>
              <button class="btn btn-primary" @click="showAddStaffModal = true">
                <span>+</span> เพิ่ม
              </button>
            </div>

            <div class="table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>ลำดับ</th>
                    <th>ชื่อ - นามสกุล</th>
                    <th>ตำแหน่ง</th>
                    <th>ระดับตำแหน่ง</th>
                    <th>ประเภทตำแหน่ง</th>
                    <th>ประเภทบุคลากร</th>
                    <th>เครื่องมือ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="staffList.length === 0">
                    <td colspan="7" class="no-data">-- ไม่พบข้อมูล --</td>
                  </tr>
                  <tr v-for="(staff, index) in staffList" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ staff.name }}</td>
                    <td>{{ staff.position }}</td>
                    <td>{{ staff.level }}</td>
                    <td>{{ staff.positionType }}</td>
                    <td>{{ staff.personnelType }}</td>
                    <td>
                      <button class="btn-icon" @click="editStaff(index)">✏️</button>
                      <button class="btn-icon" @click="removeStaff(index)">🗑️</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Documents Section -->
          <div class="form-section">
            <h3>แนบเอกสาร</h3>
            <p class="file-info">รองรับเฉพาะไฟล์ JPG, JPEG, PNG, PDF และขนาดไม่เกิน 5 MB ต่อไฟล์</p>

            <div class="file-upload-area" @click="triggerFileUpload" @dragover.prevent @drop.prevent="handleFileDrop">
              <div class="upload-content">
                <span class="upload-icon">📁</span>
                <p>อัปโหลด หรือลากวางไฟล์ของคุณที่นี่</p>
              </div>
            </div>

            <input type="file" ref="fileInput" @change="handleFileUpload" multiple accept=".jpg,.jpeg,.png,.pdf"
              style="display: none;">

            <div class="documents-table">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>ลำดับ</th>
                    <th>เอกสาร</th>
                    <th>ชื่อเอกสาร</th>
                    <th>วันที่อัปโหลดเอกสาร</th>
                    <th>เครื่องมือ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(doc, index) in documents" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ doc.fileName }}</td>
                    <td>{{ doc.displayName }}</td>
                    <td>{{ doc.uploadDate }}</td>
                    <td>
                      <button class="btn-icon" @click="viewDocument(doc)">🔍</button>
                      <button class="btn-icon" @click="removeDocument(index)">🗑️</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Disapproval Reason Section -->
          <div class="form-section">
            <h3>เหตุผลการไม่อนุมัติ</h3>
            <textarea v-model="formData.disapprovalReason" class="form-control disapproval-textarea"
              rows="3"></textarea>
          </div>
        </div>
      </div>

      <!-- Right Sidebar -->
      <div class="right-frame">
        <div class="sidebar-content">
          <h3>ดำเนินขั้นตอนการอนุมัติ</h3>
          <div class="approval-timeline">
            <div class="approval-step">
              <div class="step-avatar">
                <img src="C:\CS_NATTAPONG\Clicknext_Bangsaen\Frontend-HRM\Frontend-HRM\src\assets\people1.png"
                  alt="จิตกานตกร">
              </div>
              <div class="step-info">
                <div class="step-name">จิตกานตกร</div>
                <div class="step-detail">นาง อรอุมา พัฒนมา</div>
              </div>
            </div>
            <div class="approval-step">
              <div class="step-avatar">
                <img src="C:\CS_NATTAPONG\Clicknext_Bangsaen\Frontend-HRM\Frontend-HRM\src\assets\people2.png"
                  alt="รองผู้อำนวยการ">
              </div>
              <div class="step-info">
                <div class="step-name2">รออนุมัติ</div>
                <div class="step-detail">นาง วลัยพร โพธิ์ทอง(สรปวงศ์)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="action-buttons">
      <button class="btn btn-secondary">ยกเลิก</button>
      <button class="btn btn-warning">บันทึกร่าง</button>
      <button class="btn btn-primary">บันทึก</button>
    </div>

    <!-- Add Staff Sidebar -->
    <div v-if="showAddStaffModal" class="sidebar-overlay" @click="showAddStaffModal = false">
      <div class="sidebar-panel" @click.stop>
        <div class="modal-header">
          <h3>เพิ่มบุคลากร</h3>
          <button class="close-btn" @click="showAddStaffModal = false">×</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="modalPersonnel">บุคลากร*</label>
            <select id="modalPersonnel" v-model="newStaff.personnel" class="form-control">
              <option value="staff">บุคลากร</option>
            </select>
          </div>
          <div class="form-group">
            <label for="modalPosition">ชื่อตำแหน่ง*</label>
            <input type="text" id="modalPosition" v-model="newStaff.position" class="form-control">
          </div>
          <div class="form-group">
            <label for="modalLevel">ระดับตำแหน่ง*</label>
            <input type="text" id="modalLevel" v-model="newStaff.level" class="form-control">
          </div>
          <div class="form-group">
            <label for="modalPositionType">ประเภทตำแหน่ง / กลุ่มงาน*</label>
            <input type="text" id="modalPositionType" v-model="newStaff.positionType" class="form-control">
          </div>
          <div class="form-group">
            <label for="modalPersonnelType">ประเภทบุคลากร*</label>
            <input type="text" id="modalPersonnelType" v-model="newStaff.personnelType" class="form-control">
          </div>
          <div class="form-group">
            <label for="modalDepartment1">หน่วยงานระดับสำนัก / กอง / ศูนย์*</label>
            <input type="text" id="modalDepartment1" v-model="newStaff.department1" class="form-control">
          </div>
          <div class="form-group">
            <label for="modalDepartment2">หน่วยงานระดับต่ำกว่าสำนัก / กอง / ศูนย์ 1 ระดับ*</label>
            <input type="text" id="modalDepartment2" v-model="newStaff.department2" class="form-control">
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" @click="showAddStaffModal = false">ยกเลิก</button>
          <button class="btn btn-primary" @click="addStaff">เพิ่ม</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const formData = reactive({
  workType: 'offsite',
  orderNumber: '',
  offsiteType: '',
  topic: '',
  additionalDetails: '',
  projectName: '',
  locationLink: '',
  location: '',
  startDate: '2024-12-09',
  endDate: '2024-12-09',
  startTimeType: 'full',
  endTimeType: 'full',
  disapprovalReason: 'แก้ไขเอกสารแนบให้สมบูรณ์'
})

const staffList = ref<any[]>([])
const showAddStaffModal = ref(false)
const newStaff = reactive<Record<string, any>>({
  personnel: 'staff',
  position: '',
  level: '',
  positionType: '',
  personnelType: '',
  department1: '',
  department2: ''
})

const documents = ref([
  {
    fileName: 'เอกสาร.pdf',
    displayName: 'โปรดระบุ',
    uploadDate: '01 ต.ค. 2564'
  }
])

const fileInput = ref<HTMLInputElement | null>(null)
const mapContainer = ref<HTMLElement | null>(null)
const searchQuery = ref('')
let map: any = null
let marker: any = null

onMounted(() => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css'
  document.head.appendChild(link)

  const script = document.createElement('script')
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js'
  script.onload = () => {
    initMap()
  }
  document.head.appendChild(script)
})

const initMap = () => {
  if (!mapContainer.value) return
  const L = (window as any).L
  map = L.map(mapContainer.value).setView([13.7563, 100.5018], 12)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map)
  map.on('click', (e: any) => {
    addMarker(e.latlng.lat, e.latlng.lng)
  })
}

const addMarker = (lat: number, lng: number) => {
  const L = (window as any).L
  if (marker) {
    map.removeLayer(marker)
  }
  marker = L.marker([lat, lng]).addTo(map)
  formData.locationLink = `https://www.google.com/maps?q=${lat},${lng}`
}

const searchLocation = async () => {
  if (!searchQuery.value.trim()) return
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery.value)}&limit=1`
    )
    const data = await response.json()
    if (data && data.length > 0) {
      const { lat, lon, display_name } = data[0]
      map.setView([parseFloat(lat), parseFloat(lon)], 15)
      addMarker(parseFloat(lat), parseFloat(lon))
      formData.location = display_name
    } else {
      alert('ไม่พบสถานที่ที่ค้นหา')
    }
  } catch (error) {
    console.error('Error searching location:', error)
    alert('เกิดข้อผิดพลาดในการค้นหาสถานที่')
  }
}

onUnmounted(() => {
  if (map) {
    map.remove()
  }
})

const triggerFileUpload = () => {
  if (fileInput.value) {
    fileInput.value.click()
  }
}

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  const files = target.files
  if (files && files.length > 0) {
    console.log('Uploaded files:', files)
  }
}

const handleFileDrop = (event: DragEvent) => {
  const files = event.dataTransfer?.files
  if (files && files.length > 0) {
    console.log('Dropped files:', files)
  }
}

const addStaff = () => {
  staffList.value.push({
    name: 'โปรดระบุ',
    position: newStaff.position,
    level: newStaff.level,
    positionType: newStaff.positionType,
    personnelType: newStaff.personnelType
  })
  showAddStaffModal.value = false
  Object.keys(newStaff).forEach((key) => {
    newStaff[key] = ''
  })
  newStaff.personnel = 'staff'
}

const editStaff = (index: number) => {
  console.log('Edit staff at index:', index)
}

const removeStaff = (index: number) => {
  staffList.value.splice(index, 1)
}

const viewDocument = (doc: any) => {
  console.log('View document:', doc)
}

const removeDocument = (index: number) => {
  documents.value.splice(index, 1)
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.offsite-work-page {
  width: 100%;
  margin: 0;
  min-height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  position: relative;
  padding-top: 0;
}

.info-bar {
  background: linear-gradient(135deg, #27ae60 0%, #229954 100%);
  color: white;
  padding: 12px 30px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(39, 174, 96, 0.3);
}

.breadcrumb-nav {
  background: white;
  padding: 12px 30px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #666;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.breadcrumb-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.home-icon {
  color: #f39c12;
  stroke: #f39c12;
}

.breadcrumb-arrow {
  width: 16px;
  height: 16px;
  color: #999;
  flex-shrink: 0;
}

.breadcrumb-nav span {
  white-space: nowrap;
}

.breadcrumb-nav .current {
  color: #000;
  font-weight: 500;
}

.content-wrapper {
  display: flex;
  min-height: calc(100vh - 120px);
}

.main-content {
  flex: 1;
  padding: 0 30px 30px 30px;
  padding-right: 35px;
  overflow-y: auto;
  background: white;
}

.page-header {
  margin-bottom: 24px;
  padding-top: 20px;
}

.page-header h1 {
  font-size: 24px;
  color: #000;
  margin: 0;
  font-weight: 600;
}

.form-container {
  background: white;
  border-radius: 8px;
  padding: 30px;
  border: 2px dashed #8f8e8e;
  margin-bottom: 24px;
}

.form-section {
  margin-bottom: 32px;
  padding-bottom: 32px;
  border-bottom: 2px dashed #d0d0d0;
}

.form-section:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.form-section h3 {
  color: #000;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #000;
  font-size: 14px;
}

.form-control {
  width: 100%;
  padding: 12px;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s;
  background-color: white;
  color: #000;
}

.form-control:focus {
  outline: none;
  border-color: #3498db;
}

.form-control::placeholder {
  color: #999;
}

.map-container {
  margin-bottom: 20px;
  position: relative;
}

.map-search-box {
  display: flex;
  gap: 0;
  margin-bottom: 10px;
  z-index: 400;
  position: relative;
}

.real-map {
  height: 400px;
  width: 100%;
  border-radius: 8px;
  border: 2px solid #d0d0d0;
  z-index: 1;
}

.search-input {
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #d0d0d0;
  border-radius: 4px 0 0 4px;
  background-color: white;
  color: #000;
  font-size: 14px;
}

.search-input:focus {
  outline: none;
  border-color: #3498db;
}

.search-btn {
  padding: 10px 20px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}

.search-btn:hover {
  background: #2980b9;
}

.date-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.date-with-options {
  display: flex;
  gap: 20px;
  align-items: center;
}

.date-input-flex {
  width: 300px;
  flex-shrink: 0;
  background-color: #f5f5f5;
  border: 1px solid #d0d0d0;
  padding: 12px 16px;
  font-size: 14px;
  border-radius: 4px;
}

.radio-group-inline {
  display: flex;
  gap: 20px;
  align-items: center;
  flex-shrink: 0;
}

.radio-label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: #333;
  font-size: 14px;
  position: relative;
  white-space: nowrap;
  width: 100px;
  height: 22px;
}

.radio-label input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  width: 22px;
  height: 22px;
  border: 2px solid #b8b8b8;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  position: relative;
  background: white;
  margin: 0;
  padding: 0;
  transition: all 0.2s;
  flex-shrink: 0;
  vertical-align: middle;
}

.radio-label input[type="radio"]:checked {
  border-color: #27ae60;
  background: white;
}

.radio-label input[type="radio"]:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #27ae60;
}

.radio-label input[type="radio"]:hover {
  border-color: #27ae60;
}

.radio-label span {
  color: #333;
  font-size: 18px;
  line-height: 1;
  vertical-align: middle;
  padding: 8px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
  font-weight: 500;
}

.btn-primary {
  background: #3498db;
  color: white;
}

.btn-primary:hover {
  background: #2980b9;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background: #5a6268;
}

.btn-warning {
  background: #f39c12;
  color: white;
}

.btn-warning:hover {
  background: #e67e22;
}

.btn-icon {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  margin: 0 2px;
  font-size: 16px;
}

.btn-icon:hover {
  opacity: 0.7;
}

.table-container {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  background: white;
}

.data-table th,
.data-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
  color: #000;
}

.data-table th {
  background: #f8f8f8;
  font-weight: 600;
  color: #000;
  font-size: 14px;
}

.data-table td {
  font-size: 14px;
}

.no-data {
  text-align: center;
  color: #999;
  font-style: italic;
}

.file-info {
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;
}

.file-upload-area {
  border: 2px dashed #d0d0d0;
  border-radius: 8px;
  padding: 40px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 20px;
  background-color: #fafafa;
}

.file-upload-area:hover {
  border-color: #3498db;
  background: #f5f5f5;
}

.upload-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.upload-icon {
  font-size: 48px;
  color: #999;
}

.upload-content p {
  color: #666;
  margin: 0;
}

.documents-table {
  margin-top: 20px;
}

.disapproval-textarea {
  border: 2px dashed #e74c3c;
  background: #fff5f5;
}

.action-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  padding: 24px 30px 30px 30px;
  border-top: 2px solid #dc3545;
  background: white;
}

.right-frame {
  position: flex;
  background: white;
  padding-top: 83px;
  padding-right: 23px;
}

.sidebar-content {
  background: white;
  border-radius: 8px;
  padding: 30px;
  border: 2px solid #eae9e9;
  margin-bottom: 24px;
}

.sidebar-content h3 {
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin: 0 0 20px 0;
}

.approval-timeline {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.approval-step {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.step-avatar {
  flex-shrink: 0;
}

.step-avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #27ae60;
}

.step-info {
  flex: 1;
  min-width: 0;
}

.step-name {
  font-size: 14px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 4px;
}

.step-name2 {
  font-size: 14px;
  font-weight: 600;
  color: #787878;
  margin-bottom: 4px;
}

.step-detail {
  font-size: 12px;
  color: #666;
  line-height: 1.4;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h3 {
  margin: 0;
  color: #000;
  font-weight: 600;
}

.close-btn {
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #666;
  line-height: 1;
}

.close-btn:hover {
  color: #000;
}

.modal-body {
  padding: 20px;
}

.modal-footer {
  padding: 20px;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
}

.sidebar-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
}

.sidebar-panel {
  background: #fff;
  width: 400px;
  max-width: 90%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s ease-out;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
}

@media (max-width: 1400px) {
  .right-frame {
    width: 280px;
  }
}

@media (max-width: 1200px) {
  .form-container {
    padding: 24px;
  }

  .form-section {
    margin-bottom: 28px;
    padding-bottom: 28px;
  }

  .right-frame {
    width: 260px;
  }

  .breadcrumb-nav {
    font-size: 12px;
  }
}

@media (max-width: 1024px) {
  .content-wrapper {
    flex-direction: column;
  }

  .main-content {
    padding: 30px;
    padding-right: 30px;
  }

  .right-frame {
    position: relative;
    width: 100%;
    height: auto;
    border-left: none;
    border-top: 2px dashed #d0d0d0;
    top: 0;
    padding-top: 20px;
  }

  .breadcrumb-nav span:not(.current) {
    display: none;
  }

  .breadcrumb-arrow:not(:last-of-type) {
    display: none;
  }

  .date-with-options {
    flex-direction: column;
    align-items: flex-start;
  }

  .date-input-flex {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .info-bar {
    font-size: 13px;
    padding: 12px 20px;
  }

  .breadcrumb-nav {
    padding: 12px 20px;
    font-size: 11px;
  }

  .main-content {
    padding: 20px;
  }

  .form-container {
    padding: 20px;
  }

  .page-header {
    margin-bottom: 20px;
  }

  .page-header h1 {
    font-size: 20px;
  }

  .form-section {
    margin-bottom: 24px;
    padding-bottom: 24px;
  }

  .form-section h3 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  .form-group {
    margin-bottom: 16px;
  }

  .form-group label {
    font-size: 13px;
  }

  .form-control {
    padding: 10px;
    font-size: 14px;
  }

  .date-group {
    gap: 16px;
  }

  .date-with-options {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .date-input-flex {
    width: 100%;
  }

  .radio-group-inline {
    flex-wrap: wrap;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .table-container {
    overflow-x: auto;
  }

  .data-table {
    min-width: 600px;
  }

  .data-table th,
  .data-table td {
    padding: 10px;
    font-size: 13px;
  }

  .real-map {
    height: 300px;
  }

  .search-input {
    padding: 8px;
    font-size: 14px;
  }

  .search-btn {
    padding: 8px 12px;
  }

  .file-upload-area {
    padding: 30px 20px;
  }

  .upload-content p {
    font-size: 14px;
  }

  .action-buttons {
    flex-direction: column;
    gap: 10px;
    padding: 20px;
  }

  .btn {
    width: 100%;
    padding: 12px;
  }

  .modal-content {
    width: 95%;
    margin: 20px;
  }

  .modal-body {
    padding: 16px;
  }

  .modal-footer {
    padding: 16px;
    flex-direction: column;
    gap: 10px;
  }

  .modal-footer .btn {
    width: 100%;
  }

  .sidebar-content {
    padding: 20px;
  }

  .approval-step {
    padding: 12px;
  }

  .step-avatar img {
    width: 45px;
    height: 45px;
  }
}

@media (max-width: 480px) {
  .form-container {
    padding: 16px;
  }

  .page-header h1 {
    font-size: 18px;
  }

  .form-section h3 {
    font-size: 15px;
  }

  .form-control {
    padding: 10px;
    font-size: 13px;
  }

  .data-table th,
  .data-table td {
    padding: 8px;
    font-size: 12px;
  }

  .real-map {
    height: 250px;
  }

  .file-upload-area {
    padding: 24px 16px;
  }

  .upload-icon {
    font-size: 40px;
  }

  .upload-content p {
    font-size: 13px;
  }

  .btn {
    padding: 10px;
    font-size: 13px;
  }

  .modal-content {
    width: 100%;
    margin: 10px;
  }

  .modal-header {
    padding: 16px;
  }

  .modal-header h3 {
    font-size: 16px;
  }

  .modal-body {
    padding: 12px;
  }

  .modal-footer {
    padding: 12px;
  }
}
</style>