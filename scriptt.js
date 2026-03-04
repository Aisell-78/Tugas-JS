
const btnMode = document.getElementById('btn-mode');

if (btnMode) {
    btnMode.addEventListener('click', function() {
        // 3. Tambahkan atau hapus class 'dark-theme' pada elemen body
        document.body.classList.toggle('dark-theme');
        
        // Memenuhi instruksi "Cara Mengerjakan" poin ke-3
        console.log("Tombol mode diklik, tema diubah!"); 

        // 4. Ubah teks tombol menjadi 'Mode Terang' saat gelap, dan 'Mode Gelap' saat terang
        if (document.body.classList.contains('dark-theme')) {
            btnMode.textContent = 'Mode Terang';
        } else {
            btnMode.textContent = 'Mode Gelap';
        }
    });
}

// TUGAS 2: Interaksi Form (Opsional/Lanjutan)
// Mengambil elemen form menggunakan querySelector
const formLamaran = document.querySelector('form');

// Pengecekan if(formLamaran) memastikan kode ini hanya berjalan jika ada form di halaman (misal di formulir.html)
if (formLamaran) {
    formLamaran.addEventListener('submit', function(event) {
        // 3. Mencegah halaman agar tidak reload
        event.preventDefault();
        
        // 2. Berikan pesan alert "Lamaran Anda Terkirim!"
        alert("Lamaran Anda Terkirim!");
        
        console.log("Formulir berhasil disubmit tanpa reload.");
    });
}
