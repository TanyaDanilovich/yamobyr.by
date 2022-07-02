<?php
//Сбор данных из полей формы. 
$message = $_POST['message'];// Берём данные из input c атрибутом name="name"
$phone = $_POST['phone']; // Берём данные из input c атрибутом name="phone"


$token = "5550828888:AAE30nkoMU9-rHGPbSX0w-oacm1KlqdxQ5Q"; // Тут пишем токен
$chat_id = "-632120399"; // Тут пишем ID группы, куда будут отправляться сообщения
$sitename = "miniarenda"; //Указываем название сайта

$arr = array(

  'Заказ с сайта: ' => $sitename,
  'Телефон: ' => $phone,
  'Сообщение: ' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>