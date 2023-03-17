using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace travel;
private void btnKaydol_Click(object sender, EventArgs e)
{
    // kullanıcının girdiği bilgileri alın
    string Ad = txtKullaniciAdi.Text;
    string eposta = txtEposta.Text;
    string sifre = txtSifre.Text;
    string sifreTekrar = txtSifreTekrar.Text;

    // bilgilerin doğruluğunu kontrol edin
    if (epostaGecerliMi(eposta) && sifreGecerliMi(sifre) && sifre == sifreTekrar)
    {
        // kullanıcının bilgilerini veritabanına kaydedin
        try
        {
            string connectionString = "connection string for your database";
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();

                string query = "INSERT INTO Kullanicilar (KullaniciAdi, Eposta, Sifre) VALUES (@kullaniciAdi, @eposta, @sifre)";
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@kullaniciAdi", kullaniciAdi);
                    command.Parameters.AddWithValue("@eposta", eposta);
                    command.Parameters.AddWithValue("@sifre", sifre);

                    int result = command.ExecuteNonQuery();

                    if (result == 1)
                    {
                        MessageBox.Show("Kayıt başarıyla tamamlandı!");
                        // giriş sayfasına yönlendirin
                    }
                    else
                    {
                        MessageBox.Show("Kayıt tamamlanamadı!");
                    }
                }
            }
        }
        catch (Exception ex)
        {
            MessageBox.Show(ex.Message);
        }
    }
    else
    {
        MessageBox.Show("Lütfen geçerli bilgiler girin!");
    }
}

private bool epostaGecerliMi(string eposta)
{
    // e-posta adresinin geçerli olup olmadığını kontrol edin
    // burada e-posta adresinin doğruluğunu kontrol eden bir kod yazılabilir
}

private bool sifreGecerliMi(string sifre)
{
    // şifrenin geçerli olup olmadığını kontrol edin
    // burada şifrenin yeterince gü
}