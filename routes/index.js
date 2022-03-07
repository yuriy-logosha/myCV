var express = require('express');
var docBuilder = require('../module/doc-builder');

var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {
        title: "Заявление на получение долгосрочной визы в Латвийскую Республику",
        lastName: "Фамилия",
        lastName2: "Фамилия при рождении (предыдущая(-ии) фамилия (-и))",
        firstName: "Имя (имена)",
        birthdayDate: "Дата рождения (день – месяц – год)",
        birthdayPlace: "Место рождения",
        birthdayCountry: "Страна рождения",
        country: "Государственная принадлежность в настоящее время",
        country2: "Государственная принадлежность при рождении, если отличается",
        sex: "Пол", sexType1: "Мужской", sexType2: "Женский",
        family: "Семейное положение",
        familyType1: "Холост/не замужем", familyType2: "Женат/замужем",
        familyType3: "Разведен(-на)", familyType4: "Не проживает с супругом",
        familyType5: "Вдовец/вдова", familyType6: "Иное (уточнить)",
        item11Title: "Если лицо, запрашивающее визу, является несовершеннолетним лицом, – имя, фамилия, адрес (если отличается от адреса заявителя) и государственная принадлежность лица с полномочиями родителей/законного представителя",
        idTitle: "Идентификационный номер, присвоенный государством, если таковой есть",
        passType: "Тип проездного документа",
        passType1: "Обычный паспорт (гражданина)",
        passType2: "Дипломатический паспорт",
        passType3: "Служебный паспорт", passType4: "Официальный паспорт", passType5: "Специальный паспорт", passType6: "Иной (указать, какой)",
        passNumber: "Номер проездного документа",
        passDate: "Дата выдачи", validUntilDate: "Действителен до (день – месяц – год)",
        givenBy: "Кем выдан",
        homeAddress: "Домашний адрес и адрес электронной почты заявителя",
        phone: "Номер(-а) телефона(-ов)"
    });
});

router.route('/').post(function (req, res) {
    const fileName = 'd-vizas.docx';

    res.setHeader('Content-Disposition', 'inline; filename="' + encodeURIComponent(fileName) + '"');
    res.setHeader('Content-Type', 'application/download');


    let data = req.body;

    docBuilder.render(res, data);

});


module.exports = router;
