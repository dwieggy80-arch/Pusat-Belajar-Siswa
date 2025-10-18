document.addEventListener('DOMContentLoaded', () => {
    // 1. Data Pengumuman (Simulasi dari API/Database)
    const announcements = [
        { id: 1, title: "Jadwal Ujian Akhir Semester Berubah! Cek di portal siswa.", date: "18 Okt 2025" },
        { id: 2, title: "Pendaftaran Ekskul Baru: Robotika dan Desain Grafis.", date: "15 Okt 2025" },
        { id: 3, title: "Libur Maulid Nabi: Tidak ada kegiatan belajar pada 20 Oktober.", date: "10 Okt 2025" }
    ];

    const announcementList = document.getElementById('announcement-list');

    // Fungsi untuk menampilkan pengumuman secara dinamis
    function renderAnnouncements() {
        announcements.forEach(announcement => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>${announcement.title}</strong>
                <br>
                <small>${announcement.date}</small>
            `;
            announcementList.appendChild(listItem);
        });
    }

    // Panggil fungsi saat dokumen selesai dimuat
    renderAnnouncements();


    // 2. Fungsionalitas Tombol CTA (Call to Action)
    const ctaButton = document.getElementById('cta-button');

    ctaButton.addEventListener('click', () => {
        // Efek visual sederhana untuk menunjukkan klik
        ctaButton.textContent = 'Mengarahkan...'; 
        
        // Arahkan ke bagian pengumuman (smooth scroll)
        document.getElementById('pengumuman').scrollIntoView({ behavior: 'smooth' });
        
        // Kembalikan teks tombol setelah jeda singkat
        setTimeout(() => {
            ctaButton.textContent = 'Lihat Pengumuman Terbaru';
        }, 800);
    });
});
