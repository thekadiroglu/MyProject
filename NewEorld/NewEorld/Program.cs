using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.AccessControl;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace NewWorld
{
    internal class Program
    {
        static void Main() 
        {
            string[] meyveler = new string[] { "karpuz", "muz", "üzüm", "çilek", "kavun" };
            Console.WriteLine("Hangi meyveyi aradınız?");
            string meyve = Console.ReadLine();
            int index = Array.IndexOf(meyveler, meyve);

            if (index > -1)
            {
                Console.WriteLine($"{index + 1} . Sırada");

                // kaç kg istediğini sorma
                Console.WriteLine("Kaç kilo olsun?");
                string kilo = Console.ReadLine();
                Console.WriteLine(kilo + " kilo " + meyve + " verin abime");

            }
            else
            {
                Console.WriteLine("Maalesef elimizde yok");


            }
            //başka isteği olup olmadığını sorma
            Console.WriteLine("Başka isteğiniz varmı? (var/yok)");
            string another = Console.ReadLine();

            if (another == "var")
            {
                Console.WriteLine("Ne istersiniz");
                string ekstra = Console.ReadLine();
                Console.WriteLine("Kaç kilo olsun?");
                string kg = Console.ReadLine();
                Console.WriteLine(kg+ " kilo " + ekstra + " verin abime");

            }
            else
            {
                Console.WriteLine("Teşekkürler. Yine bekleriz..");
            }
        }
    }
}
