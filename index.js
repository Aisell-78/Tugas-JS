document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('lamaranForm');
  const formSection = document.getElementById('form-section');
  const previewSection = document.getElementById('preview-section');
  const successSection = document.getElementById('success-section');
  const btnEdit = document.getElementById('btn-edit');
  const btnConfirm = document.getElementById('btn-confirm');

  // 1. EVENT KETIKA FORM DISUBMIT
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Mencegah form langsung terkirim
    let isValid = true;

    // Reset semua pesan error dan class invalid
    document.querySelectorAll('.error-msg').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));

    // Validasi Nama
    const nama = document.getElementById('nama');
    if (nama.value.trim() === '') {
      document.getElementById('err-nama').textContent = '* Nama lengkap wajib diisi.';
      document.getElementById('err-nama').style.display = 'block';
      nama.classList.add('is-invalid'); 
      isValid = false;
    }

    // Validasi Email
    const email = document.getElementById('email');
    if (email.value.trim() === '') {
      document.getElementById('err-email').textContent = '* Email wajib diisi.';
      document.getElementById('err-email').style.display = 'block';
      email.classList.add('is-invalid');
      isValid = false;
    }

    // Validasi WhatsApp
    const wa = document.getElementById('wa');
    if (wa.value.trim() === '') {
      document.getElementById('err-wa').textContent = '* Nomor WhatsApp wajib diisi.';
      document.getElementById('err-wa').style.display = 'block';
      wa.classList.add('is-invalid');
      isValid = false;
    }

    // Validasi Posisi
    const posisi = document.getElementById('posisi');
    if (posisi.value === '') {
      document.getElementById('err-posisi').textContent = '* Silakan pilih posisi yang dilamar.';
      document.getElementById('err-posisi').style.display = 'block';
      posisi.classList.add('is-invalid');
      isValid = false;
    }

    // Validasi File CV
    const cv = document.getElementById('cv');
    if (cv.value === '') {
      document.getElementById('err-cv').textContent = '* Harap unggah CV/Resume Anda.';
      document.getElementById('err-cv').style.display = 'block';
      cv.classList.add('is-invalid');
      isValid = false;
    }

    // Validasi Checkbox Persetujuan
    const agree = document.getElementById('agree');
    if (!agree.checked) {
      document.getElementById('err-agree').textContent = '* Anda harus menyetujui pernyataan ini.';
      document.getElementById('err-agree').style.display = 'block';
      isValid = false;
    }

    // JIKA SEMUA VALID -> TAMPILKAN PRATINJAU
    if (isValid) {
      document.getElementById('prev-nama').textContent = nama.value;
      document.getElementById('prev-email').textContent = email.value;
      document.getElementById('prev-wa').textContent = wa.value;
      document.getElementById('prev-posisi').textContent = posisi.value;
      
      const statusTerpilih = document.querySelector('input[name="status"]:checked').value;
      document.getElementById('prev-status').textContent = statusTerpilih;

      formSection.style.display = 'none';
      previewSection.style.display = 'block';
    }
  });

  // 2. KEMBALI EDIT DARI PRATINJAU
  btnEdit.addEventListener('click', () => {
    previewSection.style.display = 'none';
    formSection.style.display = 'block';
  });

  // 3. KONFIRMASI PENGIRIMAN
  btnConfirm.addEventListener('click', () => {
    previewSection.style.display = 'none';
    successSection.style.display = 'block';
    
    // form.submit(); // Hapus komentar ini jika ingin form benar-benar terkirim
  });
});
