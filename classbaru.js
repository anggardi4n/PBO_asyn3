// Superclass Kapal
class Kapal { 
    constructor(nama, jenis, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.panjang = panjang;
        this.lebar = lebar;
    }
  
    infokapal() {
        return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} m x ${this.lebar} m.`;
    }
  }
  
  // Subclass KapalPenumpang
  class KapalPenumpang extends Kapal {
    constructor(nama, panjang, lebar, kapasitasPenumpang) {
        super(nama, "kapal feri", panjang, lebar);
        this.kapasitasPenumpang = kapasitasPenumpang;
    }
  
    infokapal() {
        return `${super.infokapal()} Kapal ini memiliki kapasitas ${this.kapasitasPenumpang} orang.`;
    }
  
    getKapasitas() {
        return this.kapasitasPenumpang;
    }
  }
  
  // Subclass Tiket
  class Tiket extends KapalPenumpang {
    constructor(nama, panjang, lebar, kapasitasPenumpang, hargaTiket) {
        super(nama, panjang, lebar, kapasitasPenumpang);
        this.hargaTiket = hargaTiket;
    }
  
    infoTiket() {
        return `Harga tiket untuk kapal ${this.nama} adalah Rp ${this.hargaTiket}.`;
    }
  }
  
  // Subclass PenumpangNaik
  class PenumpangNaik extends KapalPenumpang {
    constructor(nama, panjang, lebar, kapasitasPenumpang, pelabuhanNaik) {
        super(nama, panjang, lebar, kapasitasPenumpang);
        this.pelabuhanNaik = pelabuhanNaik;
    }
  
    infoNaik() {
        return `Penumpang naik di pelabuhan ${this.pelabuhanNaik}.`;
    }
  }
  
  // Subclass PenumpangTurun
  class PenumpangTurun extends KapalPenumpang {
    constructor(nama, panjang, lebar, kapasitasPenumpang, pelabuhanTurun) {
        super(nama, panjang, lebar, kapasitasPenumpang);
        this.pelabuhanTurun = pelabuhanTurun;
    }
  
    infoTurun() {
        return `Penumpang turun di pelabuhan ${this.pelabuhanTurun}.`;
    }
  }
  
  // 5 Class Baru:
  
  // 1. KapalCargo
  class KapalCargo extends Kapal {
    constructor(nama, panjang, lebar, kapasitasMuatan) {
        super(nama, "kapal kargo", panjang, lebar);
        this.kapasitasMuatan = kapasitasMuatan;
    }
  
    infokapal() {
        return `${super.infokapal()} Kapasitas muatan: ${this.kapasitasMuatan} ton.`;
    }
  }
  
  // 2. KapalTanker
  class KapalTanker extends Kapal {
    constructor(nama, panjang, lebar, kapasitasMinyak) {
        super(nama, "kapal tanker", panjang, lebar);
        this.kapasitasMinyak = kapasitasMinyak;
    }
  
    infokapal() {
        return `${super.infokapal()} Kapasitas minyak: ${this.kapasitasMinyak} liter.`;
    }
  }
  
  // 3. KapalSelam
  class KapalSelam extends Kapal {
    constructor(nama, panjang, lebar, kedalamanMaksimal) {
        super(nama, "kapal selam", panjang, lebar);
        this.kedalamanMaksimal = kedalamanMaksimal;
    }
  
    infokapal() {
        return `${super.infokapal()} Kapal ini dapat menyelam hingga kedalaman ${this.kedalamanMaksimal} meter.`;
    }
  }
  
  // 4. KapalPesiar
  class KapalPesiar extends Kapal {
    constructor(nama, panjang, lebar, fasilitas) {
        super(nama, "kapal pesiar", panjang, lebar);
        this.fasilitas = fasilitas;
    }
  
    infokapal() {
        return `${super.infokapal()} Fasilitas onboard: ${this.fasilitas.join(", ")}.`;
    }
  }
  
  // 5. KapalPatroli
  class KapalPatroli extends Kapal {
    constructor(nama, panjang, lebar, areaPatroli) {
        super(nama, "kapal patroli", panjang, lebar);
        this.areaPatroli = areaPatroli;
    }
  
    infokapal() {
        return `${super.infokapal()} Area patroli: ${this.areaPatroli}.`;
    }
  }
  
  // Polymorphism in action:
  const kapalList = [
    new KapalPenumpang("Kapal Penumpang 1", 300, 50, 500),
    new KapalCargo("Kapal Cargo 1", 400, 60, 10000),
    new KapalTanker("Kapal Tanker 1", 450, 65, 2000000),
    new KapalSelam("Kapal Selam 1", 70, 10, 300),
    new KapalPesiar("Kapal Pesiar 1", 500, 80, ["Kolam renang", "Restoran", "Teater"]),
    new KapalPatroli("Kapal Patroli 1", 120, 20, "Laut Selatan")
  ];
  
  kapalList.forEach(kapal => {
    console.log(kapal.infokapal());
  });
  
  // Penggunaan Tiket, PenumpangNaik, dan PenumpangTurun
  const kapalTiket = new Tiket("MUTIS", 621, 259, 319, 45000);
  console.log(kapalTiket.infokapal());
  console.log(kapalTiket.infoTiket());
  
  const kapalNaik = new PenumpangNaik("MUTIS", 200, 100, 319, "Pelabuhan Ketapang");
  console.log(kapalNaik.infoNaik());
  
  const kapalTurun = new PenumpangTurun("MUTIS", 200, 100, 319, "Pelabuhan Gilimanuk");
  console.log(kapalTurun.infoTurun());
  