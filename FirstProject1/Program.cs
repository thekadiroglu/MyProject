using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstProject1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string isim = "emirhan";
                int tamSayi = 37;
            double ondalikliSayi = 1.2;
            DateTime tarih = DateTime.Now;
            bool cevap0 = true;

            Console.WriteLine(isim);
            Console.WriteLine(tamSayi);
            Console.WriteLine(ondalikliSayi);
            Console.WriteLine(tarih);
            Console.WriteLine(cevap0);
           

            //aşağıda kullanıcıya soru soruyoruz

            Console.WriteLine("Hangi şehirde yaşıyorsunuz");
            string cevap = Console.ReadLine();
            Console.WriteLine(cevap + " Şehrinin plaka kodu nedir?");
            //Console.WriteLine("{0} şehrinin plaka kodu nedir?", cevap)
            string metinselPlakaKodu = Console.ReadLine();

            int sayisalPlakaKodu = Convert.ToInt32(metinselPlakaKodu);



            Console.ReadKey();




        }
    }
}
