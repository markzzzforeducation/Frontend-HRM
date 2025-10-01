<template>
  <div class="offsite-work-page">
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
          <div class="map-placeholder">
            <div class="map-search">
              <input type="text" placeholder="ค้นหาสถานที่" class="search-input">
              <button class="search-btn">🔍</button>
            </div>
            <div class="map-content">
              <div class="map-markers">
                <div class="marker" style="top: 30%; left: 40%;">📍</div>
                <div class="marker" style="top: 50%; left: 60%;">📍</div>
                <div class="marker" style="top: 70%; left: 30%;">📍</div>
              </div>
              <div class="map-zoom">
                <button class="zoom-btn">+</button>
                <button class="zoom-btn">-</button>
              </div>
            </div>
          </div>
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
            <div class="date-input-group">
              <input type="date" id="startDate" v-model="formData.startDate" class="form-control">
              <div class="radio-group">
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
            <div class="date-input-group">
              <input type="date" id="endDate" v-model="formData.endDate" class="form-control">
              <div class="radio-group">
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
        <textarea v-model="formData.disapprovalReason" class="form-control disapproval-textarea" rows="3"></textarea>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="action-buttons">
      <button class="btn btn-secondary">ยกเลิก</button>
      <button class="btn btn-warning">บันทึกร่าง</button>
      <button class="btn btn-primary">บันทึก</button>
    </div>

    <!-- Add Staff Modal -->
    <div v-if="showAddStaffModal" class="modal-overlay" @click="showAddStaffModal = false">
      <div class="modal-content" @click.stop>
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
import { ref, reactive } from 'vue'

// Form data
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

// Staff management
const staffList = ref([])
const showAddStaffModal = ref(false)
const newStaff = reactive({
  personnel: 'staff',
  position: '',
  level: '',
  positionType: '',
  personnelType: '',
  department1: '',
  department2: ''
})

// Document management
const documents = ref([
  {
    fileName: 'เอกสาร.pdf',
    displayName: 'โปรดระบุ',
    uploadDate: '01 ต.ค. 2564'
  }
])

const fileInput = ref(null)

// Methods
const triggerFileUpload = () => {
  fileInput.value.click()
}

const handleFileUpload = (event) => {
  const files = event.target.files
  // Handle file upload logic here
}

const handleFileDrop = (event) => {
  const files = event.dataTransfer.files
  // Handle file drop logic here
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
  // Reset form
  Object.keys(newStaff).forEach(key => {
    newStaff[key] = ''
  })
  newStaff.personnel = 'staff'
}

const editStaff = (index) => {
  // Edit staff logic
}

const removeStaff = (index) => {
  staffList.value.splice(index, 1)
}

const viewDocument = (doc) => {
  // View document logic
}

const removeDocument = (index) => {
  documents.value.splice(index, 1)
}
</script>

<style scoped>
.offsite-work-page {
  width: 100%;
  margin: 0;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
}

.page-header {
  margin-bottom: 24px;
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
  border: 1px solid #e0e0e0;
  margin-bottom: 24px;
  flex: 1;
  width: 100%;
}

.form-section {
  margin-bottom: 32px;
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

/* Map Styles */
.map-container {
  margin-bottom: 20px;
}

.map-placeholder {
  height: 300px;
  background: linear-gradient(135deg, #f0f9f0, #e8f5e8);
  border: 2px dashed #a0d0a0;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.map-search {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  z-index: 10;
}

.search-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #d0d0d0;
  border-radius: 4px 0 0 4px;
  background-color: white;
  color: #000;
}

.search-btn {
  padding: 10px 15px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.map-content {
  position: relative;
  height: 100%;
}

.map-markers {
  position: absolute;
  width: 100%;
  height: 100%;
}

.marker {
  position: absolute;
  font-size: 20px;
}

.map-zoom {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.zoom-btn {
  width: 30px;
  height: 30px;
  background: white;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-weight: bold;
}

/* Date Section */
.date-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.date-input-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.radio-group {
  display: flex;
  gap: 20px;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: #000;
}

.radio-label input[type="radio"] {
  margin: 0;
}

/* Staff Section */
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

/* Table Styles */
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

/* File Upload */
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

/* Disapproval Section */
.disapproval-textarea {
  border: 2px dashed #e74c3c;
  background: #fff5f5;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  padding: 20px 0;
}

/* Modal Styles */
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

/* Responsive Design */
@media (max-width: 1200px) {
  .form-container {
    padding: 24px;
  }

  .form-section {
    margin-bottom: 28px;
  }
}

@media (max-width: 768px) {
  .offsite-work-page {
    padding: 0;
  }

  .form-container {
    padding: 20px;
    margin-bottom: 20px;
  }

  .page-header {
    margin-bottom: 20px;
  }

  .page-header h1 {
    font-size: 20px;
  }

  .form-section {
    margin-bottom: 24px;
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
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .radio-group {
    flex-direction: column;
    gap: 10px;
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

  .map-placeholder {
    height: 200px;
  }

  .map-search {
    top: 10px;
    left: 10px;
    right: 10px;
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

  .map-placeholder {
    height: 180px;
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