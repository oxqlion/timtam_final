import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../pages/Article.css";

const Article = () =>{

    return(
        <div className="outer_artikel1">
            <div className="outer_navbar_about">
            <Navbar/>
            </div>
            <div className="container_artikel">
                <h1>Apa Itu Anxiety Disorder? Kenali Gejala dan Pengobatannya</h1>
                <div className="author_tanggal">
                    <div className="author_artikel_detail">
                    <img src="../../assets/Author.png" alt="" />
                    <div className="author_data_diri">
                        <h3>Caitlin H</h3>
                        <p className="posisi">Communication Specialist</p>
                    </div>
                    <div className="tanggal_artikel">Senin, 20 Maret 2023</div>
                    </div>
                </div>
                <div className="artikel_konten">
                    <img src="../../assets/kecemasan anak kotak.jpg" alt="" />

                    {/* <p>Secara garis besar, anxiety disorder adalah gangguan suasana perasaan seperti depresi, sering ada <br/>bersamaan dengan depresi, dan bila tidak segera diatasi maka berpotensi memburuk seiring berjalannya waktu.</p> */}
                </div>
                <p>Anxiety disorder adalah gangguan mental yang menyebabkan rasa cemas dan takut berlebih. Hal tersebut membuat Anda menjadi tidak semangat untuk melakukan kegiatan sehari-hari, termasuk hobi yang biasa digemari.<br/><br/>Sobat TIMTAM pasti pernah merasa cemas dan takut saat ingin memulai aktivitas yang belum pernah dialami, seperti interview di tempat bekerja yang Anda lamar, atau saat ingin berpidato di atas panggung.Perasaan tersebut sebenarnya normal terjadi. Akan tetapi, jika ketakutan itu terus menghantui Anda hingga mengganggu aktivitas harian dalam waktu lebih dari 6 bulan, bisa jadi Anda mengalami anxiety disorder. <br/><br/>WHO menyatakan jika terdapat  301 juta orang memiliki gangguan mental ini di dunia, dimana 58 juta penderita anxiety disorder adalah anak-anak dan remaja. Menurut data Kementerian Kesehatan RI, gangguan kecemasan berada di peringkat 2 dari 10 penyakit yang paling banyak diderita oleh masyarakat Indonesia dari tahun 1990-an sampai 2017. Gejala awal anxiety disorder yang dirasakan penderitanya adalah perasaan gugup hingga jantung berdegup kencang. Kemudian, tubuh dan pikiran Anda sulit untuk mengendalikan emosi saat menghadapi suatu objek. Ketakutan dan kekhawatiran itu bisa membuat Anda untuk memiliki serangan panik (panic attack).Berikut adalah gejala umum dari anxiety disorder: Kecemasan yang sulit dikontrol, Gelisah dan panik, Kelelahan, akan tetapi sulit tidur, Sulit berkonsentrasi, Mudah marah dan terpancing emosi, Rasa sakit dan nyeri pada tubuh., Otot tegang, mual, mulut kering, Tangan dan kaki kesemutan serta berkeringat. Memikirkan dan melakukan perenungan tiada henti.Untuk mendeteksi gangguan mental ini, Anda perlu melakukan lebih dari sekali konsultasi dengan psikolog atau psikiater (Dokter spesialis jiwa). Dalam sesi konseling dilakukan beberapa tes psikologis dalam bentuk kuesioner, pemeriksaan fisik, dan tes kesehatan mental.Meskipun dokter kejiwaan ingin mengetahui kondisi mental pasien, pemeriksaan fisik seperti tes darah maupun tes urin bertujuan untuk mengenal lebih jauh tentang gejala yang berkaitan dengan masalah kejiwaan. <br/><br/>Kecemasan yang Anda miliki dapat mengganggu keseharian jika tidak dicegah dengan pola hidup yang sehat. Maka dari itu, cara ini bisa dilakukan untuk menjaga mental Anda agar aman dari rasa cemas. seperti Tidur yang cukup, Aktif berolahraga, Melakukan meditasi untuk melatih pernapasan dan mengendalikan emosi, Mengatur pola makan sehat, Menghindari rokok dan alkohol, Membatasi jumlah konsumsi kafein, seperti kopi dan teh, Bergabung ke komunitas dengan kegiatan yang disukai. Selain melakukan hobi, Anda juga bisa bersosialisasi, Melakukan sesi konseling jika perlu kepada psikolog. Jika lebih parah dan membutuhkan pengobatan, sesi konseling diarahkan melalui psikiater. </p>
            </div>
            <Footer/>
        </div>
    )
}

export default Article;