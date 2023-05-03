let todos = [
  {
    title: "Ürünler",
    tasks: [],
    productCode: [],
    price: [],
  },
  {
    title: "Ödevler",
    tasks: [],
    productCode: [],
    price: [],
  },
];
/* burada yeni todp'yu hangi list'e eklemek istediğimizi yazıyoruz*/
function addTask() {
  let listIndex = prompt("Hangi listede yeni görev eklemek istersiniz? (1, 2)");
  listIndex--; // Kullanıcının girdiği sayı, dizideki indeksten bir az olacağı için 1 çıkarıyoruz.
  if (listIndex < 0 || listIndex >= todos.length) {
    console.log("Geçersiz bir numara girdiniz.");
    return;
  }
  let task = prompt("Yeni ürün girin:");
  todos[listIndex].tasks.push(task);
  let id = prompt(`${task} Görevine bir ID ver`);
  todos[listIndex].productCode.push(id);
  let price = prompt(
    `${task} isimli ${id} Numaralı ürününüze bir fiyat giriniz`
  );
  todos[listIndex].price.push(price);
  console.log(`${id} numaralı  ${task} fiyatı = ${price}.`);
}
/*burada kullanıcı prompt'a sepet dönüşü yaparsa karşısına ne çıkaracağımız yazıyoruz*/
function showTodos() {
  console.log("Yapılacaklar listesi:");
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].title === "Ürünler") {
      console.log(`${i + 1}. ${todos[i].title}`);
      let totalPrice = 0;
      for (let j = 0; j < todos[i].tasks.length; j++) {
        console.log(
          `   ${j + 1}- ${todos[i].tasks[j]}
           Ürün kodu: ${todos[i].productCode[j]}
           Ürün Fiyatı: ${todos[i].price[j]} TL`
        );
        totalPrice += parseFloat(todos[i].price[j]);
      }
      console.log(`Toplam Sepet Tutarı: ${totalPrice} TL`);
      console.log(`Dolar karşılığı: ${totalPrice / 20} $`);
    }
  }
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].title === "Ödevler") {
      console.log(`${i + 1}. ${todos[i].title}`);
      let totalPrice = 0;
      for (let j = 0; j < todos[i].tasks.length; j++) {
        console.log(
          `   ${j + 1}- ${todos[i].tasks[j]}
           Ürün kodu: ${todos[i].productCode[j]}
           Ürün Fiyatı: ${todos[i].price[j]} TL`
        );
        totalPrice += parseFloat(todos[i].price[j]);
      }
      console.log(`Toplam Sepet Tutarı: ${totalPrice} TL`);
      console.log(`Dolar karşılığı: ${totalPrice / 20} $`);
    }
  }
}
/*kullanıcı bir ürün/todo'yu silmek isterse buradan yapılacak*/
function deleteTask() {
  let listIndex = prompt("Hangi listeden görev silmek istersiniz? (1, 2)");
  listIndex--; // Kullanıcının girdiği sayı, dizideki indeksten bir az olacağı için 1 çıkarıyoruz.
  if (listIndex < 0 || listIndex >= todos.length) {
    console.log("Geçersiz bir numara girdiniz.");
    return;
  }
  let taskIndex = prompt("Silmek istediğiniz görev numarasını girin:");
  taskIndex--; // Kullanıcının girdiği sayı, dizideki indeksten bir az olacağı için 1 çıkarıyoruz.
  if (taskIndex < 0 || taskIndex >= todos[listIndex].tasks.length) {
    console.log("Geçersiz bir numara girdiniz.");
  } else {
    let deletedTask = todos[listIndex].tasks.splice(taskIndex, 1);
    console.log(`${deletedTask} silindi.`);
  }
}
function searchID() {
  let search = prompt("Aramak istediğiniz ürünün ID numarasını yazınız..");

  let found = todos.find(function (product) {
    return product.productCode === parseInt(search);
  });
  if (found) {
    console.log("'Aradığınız ürün: ${found.tasks}'");
  } else {
    console.log("Aradğınız ID'ye ait bir ürün bulunamadı.");
  }
}
/*kullanıcı girişte ve her ürün/todo eklendiğinde bu kodların çıktısını görecek*/
let command = "";

while (command !== "çıkış") {
  command = prompt("Ne yapmak istersiniz? (ekle, sepet, ara, sil, çıkış)");
  if (command === "ekle") {
    addTask();
  } else if (command === "sepet") {
    showTodos();
  } else if (command === "sil") {
    deleteTask();
  } else if (command === "ara") {
    searchID();
  } else if (command === "çıkış") {
    console.log("Uygulamadan çıkılıyor...");
  } else if (command === "sepet") {
    boxTodos();
  } else {
    console.log("Geçersiz bir komut girdiniz.");
  }
}
