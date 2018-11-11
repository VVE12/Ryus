<?php

if (!empty($_POST['name']) AND !empty($_POST['email']) AND !empty($_POST['message'])) {

	$headers = 'From: Userr\n'.'Reply-To: vasilievvladislav12@gmail.com\r\n'.'X-Mailer: PHP/'. phpversion();

	$theme = 'Новое сообщение';

	$letter = 'Данные сообщения:\r\n';
	$letter = 'Имя:'.$_POST['name']. '\r\n';
	$letter = 'Телефон:'.$_POST['phone']. 'r\n';

	if (mail('vasilievvladislav12@gmail.com', $theme, $letter, $headers)) {
		header('Location:thankyou.php');
	} else {
		header('Location:/');
	}
}

?>