<?php
 
  $sendto = "sk@ryus.ooo"; // почта, на которую будет приходить письмо !!! Измените на свою!!!
  $username = $_POST['name']; // сохраняем в переменную данные полученные из поля c именем
  $usertel = $_POST['phone']; // сохраняем в переменную данные полученные из поля c телефонным номером
  $usermail = $_POST['email']; // сохраняем в переменную данные полученные из поля c адресом электронной почты
// проверяем наличие данных в чекбоксе и сохраняем их
  $access_header_top = '';
    if (empty($_POST["access_header_top"]))
    {
       $access_header_top = "Согласие на обработку персональных данных";
    }
    elseif (!empty($_POST["access_header_top"]) && is_array($_POST["access_header_top"]))
    {
       $access_header_top = implode(" ", $_POST["access_header_top"]);
    }
 
 
// Формирование заголовка письма
  $subject = "!!!ЗАЯКА ОТ КЛИЕНТА!!!";
  $headers = "From: " . strip_tags($usermail) . "\r\n";
  $headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
 
// Формирование тела письма
  $msg = "<html><body style='font-family:Arial,sans-serif;'>";
  $msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Cообщение с сайта Skryus.ru!</h2>\r\n";
  $msg .= "<p><strong>От кого:</strong> ".$username."</p>\r\n";
  $msg .= "<p><strong>Почта:</strong> ".$usermail."</p>\r\n";
  $msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n";
  $msg .= "<p><strong>Сообщение с пометкой:<br/> </strong> ".$access_header_top."</p>\r\n";
  $msg .= "</body></html>";
 // отправка сообщения
  if(@mail($sendto, $subject, $msg, $headers)) {
  echo "<center>Спасибо за обращение! Мы с Вами свяжемся в ближайшее время.</center>"; // Здесь может быть любой html код. Вместо картинки можно задать div и в нем что угодно
  } else {
  echo "<center>Ошибка! Попробуйте снова отправить сообщение.</center>"; // Здесь может быть любой html код. Вместо картинки можно задать div и в нем что угодно
  }
 //тут нужно добавить чтобы возвращал на страницу....


?>