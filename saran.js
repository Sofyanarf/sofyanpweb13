document.addEventListener('DOMContentLoaded', function() {
    const formSaran = document.querySelector('#form-kontak form');
    formSaran.addEventListener('submit', function(event) {
        event.preventDefault();
        const nama = formSaran.querySelector('input[name="nama"]').value.trim();
        const email = formSaran.querySelector('input[name="email"]').value.trim();
        const subjek = formSaran.querySelector('input[name="subjek"]').value.trim();
        const pesan = formSaran.querySelector('textarea[name="pesan"]').value.trim();

        if (nama === '' || email === '' || subjek === '' || pesan === '') {
            alert('Mohon lengkapi semua kolom!');
            return;
        }

        
    });

    
    const formPendaftaran = document.querySelector('#form-pendaftaran form');
    formPendaftaran.addEventListener('submit', function(event) {
        event.preventDefault();
        const namaLengkap = formPendaftaran.querySelector('input[name="nama_lengkap"]').value.trim();
        const tanggalLahir = formPendaftaran.querySelector('input[name="tanggal_lahir"]').value.trim();
        const alamat = formPendaftaran.querySelector('input[name="alamat"]').value.trim();
        const jenisKelamin = formPendaftaran.querySelector('select[name="jenis_kelamin"]').value;
        const programStudi = formPendaftaran.querySelector('select[name="program_studi"]').value;

        if (namaLengkap === '' || tanggalLahir === '' || alamat === '' || jenisKelamin === '' || programStudi === '') {
            alert('Mohon lengkapi semua kolom!');
            return;
        }

        
    });
});
