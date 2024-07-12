<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 
    if (isset($_POST['nama'])) {
        $nama = $_POST['nama'];
        $email = $_POST['email'];
        $subjek = $_POST['subjek'];
        $pesan = $_POST['pesan'];

        
        $file = fopen("saran_pesan.txt", "a"); 
        fwrite($file, "Nama: $nama\nEmail: $email\nSubjek: $subjek\nPesan: $pesan\n\n");
        fclose($file);

        echo "Data telah disimpan. Terima kasih!";
    }


    elseif (isset($_POST['nama_lengkap'])) {
        $namaLengkap = $_POST['nama_lengkap'];
        $tanggalLahir = $_POST['tanggal_lahir'];
        $alamat = $_POST['alamat'];
        $jenisKelamin = $_POST['jenis_kelamin'];
        $programStudi = $_POST['program_studi'];

       
        $file = fopen("pendaftaran_program.txt", "a"); 
        fwrite($file, "Nama Lengkap: $namaLengkap\nTanggal Lahir: $tanggalLahir\nAlamat: $alamat\nJenis Kelamin: $jenisKelamin\nProgram Studi: $programStudi\n\n");
        fclose($file);

        echo "Proses input berhasil. Terima kasih!";
    }
}
?>
